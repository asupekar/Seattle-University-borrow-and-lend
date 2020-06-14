using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

using SU.EcoList.Website.Models;
using SU.EcoList.WebSite.Services;
using Microsoft.Extensions.Logging;

namespace SU.EcoList.Website
{
    /// <summary>
    ///  Model for search result
    /// </summary>
    public class SearchResultModel : PageModel
    {
        //logger 
        private readonly ILogger<SearchResultModel> _logger;

        //product service 
        public JsonFileProductService ProductService;

        // gets or sets products in the search result
        public IEnumerable<Product> Products { get; private set; }

        //constructor for search result
        public SearchResultModel(ILogger<SearchResultModel> logger,
            JsonFileProductService productService)
        {
            _logger = logger;
            ProductService = productService;
        }

        //gets products
        public void OnGet()
        {

            Products = ProductService.GetPaperWeights();

        }
    }
}