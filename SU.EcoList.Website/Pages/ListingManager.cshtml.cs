using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

using SU.EcoList.Website.Models;
using SU.EcoList.WebSite.Services;
using Microsoft.Extensions.Logging;

namespace SU.EcoList.Website.Pages
{   
    public class ListingManagerModel : PageModel
    {
        // Elements Required to connect Json product services
        private readonly ILogger<ListingManagerModel> _logger;

        // Json product service reference
        public JsonFileProductService ProductService;

        // JData structure required for Json service integration. 
        public IEnumerable<Product> Products { get; private set; }

        /// <summary>
        /// Page Constructor
        /// </summary>
        public ListingManagerModel(ILogger<ListingManagerModel> logger,
            JsonFileProductService productService)
        {
            _logger = logger;
            ProductService = productService;
        }

        /// <summary>
        /// On get method of the "User Manager" page
        /// </summary>
        public void OnGet()
        {
            Products = ProductService.GetProducts();
        }
    }
}