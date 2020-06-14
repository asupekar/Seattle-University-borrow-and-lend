using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;

namespace SU.EcoList.Website.Models
{
    /// <summary>
    /// My Listings page for setting feactures for "My Listings" images
    /// </summary>
    public class MyListing
    {
        //Setting and getting  the image
        public string Image { get; set; }

        //Setting the URL of the image
        public string Url { get; set; }

        //Setting the title of the image
        public string Title { get; set; }

        //Setting the description of the image
        public string Description { get; set; }
    }
}
