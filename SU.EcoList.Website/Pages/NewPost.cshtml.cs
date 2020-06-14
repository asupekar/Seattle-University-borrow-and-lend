using System;
using System.IO;
using System.Text.Json;
using System.Collections.Generic;

using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Routing;

using SU.EcoList.Website.Models;
using SU.EcoList.WebSite.Services;

namespace SU.EcoList.Website.Pages
{
    /// <summary>
    /// New Post Page
    /// </summary>
    public class NewPostModel : PageModel
    {
        //Represents the photo uploaded by the user
        [BindProperty]
        public IFormFile Photo { get; set; }

        //Represents the title uploaded by the user
        [BindProperty]
        public string Title { get; set; }

        //Represents the description upoaded by the user.
        [BindProperty]
        public string Description { get; set; }

        //Filepath is stored in this string
        string filePath;

        /// <summary>
        /// On get method of the "New Post" page
        /// </summary>
        public void OnGet()
        {

        }

        /// <summary>
        /// Uploads the image from "New Post" page to "img" and "img/MyListings" folder
        /// </summary>
        /// <returns>Redirects the page to next page i.e. "Post Confirmation" page</returns>
        public IActionResult OnPost()
        {   
            if (Photo == null)
            {
                return null;
            }

            filePath = ProcessUploadedFile("img");
            filePath = ProcessUploadedFile("img/MyListings");
            createMyListing();

            return new RedirectToPageResult("PostConfirmation")
            {
                RouteValues = new RouteValueDictionary
                    {
                        { "FileName", filePath },
                        { "Title", Title},
                        { "Description", Description}
                    }
            };
        }

        /// <summary>
        /// Combines the file path and the image name to build a URL
        /// </summary>
        /// <param name="uploadsFolder">Location where to upload a photo</param>
        /// <returns>A unique File Name</returns>
        private string ProcessUploadedFile(string uploadsFolder)
        {
            if (Photo == null)
            {
                return null;
            }

            string uniqueFileName = null;
            uploadsFolder = Path.Combine("wwwroot", uploadsFolder);
            uniqueFileName = Photo.FileName;
            string filePath = Path.Combine(uploadsFolder, uniqueFileName);
            using (var fileStream = new FileStream(filePath, FileMode.Create))
            {
                Photo.CopyTo(fileStream);
            }

            return uniqueFileName;
        }

        /// <summary>
        /// Adds a title, filepath and a description for an image and then adds the object
        /// to JsonFileProductService.
        /// </summary>
        private bool createMyListing()
        {
            MyListing listing = new MyListing();
            listing.Title = Title;
            listing.Url = filePath;
            listing.Description = Description;
            JsonFileProductService.AddImage(listing);
            return true;
        }

        /// <summary>
        /// Get method for "New Post" page which returns images from JsonFileProductServices
        /// </summary>
        /// <returns>Returns images from "My Listings"</returns>
        public static IEnumerable<MyListing> GetImages()
        {
            return JsonFileProductService.GetImages();
        }
    }
}

    