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
    /// Post Confirmation page
    /// </summary>
    public class PostConfirmationModel : PageModel
    {
        //To set the filename to store the images in it.
        [BindProperty(SupportsGet = true)]
        public string FileName { get; set; }
        
        //To set a title for an image
        [BindProperty(SupportsGet = true)]
        public string Title { get; set; }

        //To set the file path for an image
        public static string FilePath { get; set; }

        //To set the title of an image
        public static string TitleName { get; set; }

        /// <summary>
        /// Get for the PostConfirmation page
        /// Sets the filepath and title for an image
        /// </summary>
        public void OnGet()
        {
            Console.WriteLine(FileName);
            FilePath = "img/" + FileName;
            TitleName = Title;
        }

    }
}