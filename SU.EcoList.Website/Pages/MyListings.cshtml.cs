using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace SU.EcoList.Website.Pages
{
    /// <summary>
    /// The Listings page
    /// </summary>
    public class MyListingsModel : PageModel
    {
        //Images method to set and get the image
        public static List<string> Images { get; private set; }

        /// <summary>
        /// Get method to popuate the images. 
        /// </summary>
        public void OnGet()
        {
            Images = populateImages();
        }

        /// <summary>
        /// To populate the images in "My Listings.json" file 
        /// </summary>
        /// <returns>list</returns>
        private List<string> populateImages()
        {
            //Creating a new List of String
            List<string> list = new List<string>();

            // Process the list of files found in the directory.
            string[] fileEntries = Directory.GetFiles("wwwroot/img/MyListings");

            //Temporary string variable  
            string temp;

            //Changing the pathfile of an image
            foreach (string fileName in fileEntries)
            {
                temp = fileName.Replace("\\", "/");
                temp = temp.Replace("wwwroot/", "");
                list.Add(temp);
            }

            //returning a populated list
            return list;
        }
    }
}