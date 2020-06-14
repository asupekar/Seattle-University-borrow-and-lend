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
    // Elements Required to connect Json User services
    public class UserManagerModel : PageModel
    {
        // Data structure required to connect Json product services
        private readonly ILogger<UserManagerModel> _logger;

        // Json product service reference
        public JsonFileProductService ProductService;

        // JData structure required for Json service integration. 
        public IEnumerable<User> Users { get; private set; }

        /// <summary>
        /// Page Constructor
        /// </summary>
        public UserManagerModel(ILogger<UserManagerModel> logger,
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
            Users = ProductService.GetUsers();
        }
    }
}