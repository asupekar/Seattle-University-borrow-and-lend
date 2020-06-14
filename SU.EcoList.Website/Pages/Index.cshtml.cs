using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SU.EcoList.Website.Models;
using SU.EcoList.WebSite.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;

namespace SU.EcoList.Website.Pages
{
    public class IndexModel : PageModel
    {

        // Elements Required to connect Json product services
        private readonly ILogger<IndexModel> _logger;
        public JsonFileProductService ProductService;
        public IEnumerable<Product> Products { get; private set; }
        public IndexModel(ILogger<IndexModel> logger,
            JsonFileProductService productService)
        {
            _logger = logger;
            ProductService = productService;
        }

        // Page Get() hangle goes to ProductServices
        public void OnGet()
        {
            Products = ProductService.GetProducts();
        }
    }
}