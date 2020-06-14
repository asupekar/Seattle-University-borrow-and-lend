using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.Json;
using SU.EcoList.Website.Models;
using Microsoft.AspNetCore.Hosting;

namespace SU.EcoList.WebSite.Services
{
    public class JsonFileProductService
    {
        public JsonFileProductService(IWebHostEnvironment webHostEnvironment)
        {
            WebHostEnvironment = webHostEnvironment;
        }

        public static IWebHostEnvironment WebHostEnvironment { get; set; }

        private string JsonFileName
        {
            get { return Path.Combine(WebHostEnvironment.WebRootPath, "data", "products.json"); }
        }

        private string JsonPaperWeights
        {
            get { return Path.Combine(WebHostEnvironment.WebRootPath, "data", "PaperWeights.json"); }
        }

        private static string JsonMyListings
        {
            get { return Path.Combine(WebHostEnvironment.WebRootPath, "data", "MyListing.json"); }
        }

        private static string JsonUsers
        {
            get {  return Path.Combine(WebHostEnvironment.WebRootPath, "data", "UserManager.json"); }
        }


        public IEnumerable<Product> GetPaperWeights()
        {
            using (var jsonFileReader = File.OpenText(JsonPaperWeights))
            {
                return JsonSerializer.Deserialize<Product[]>(jsonFileReader.ReadToEnd(),
                    new JsonSerializerOptions
                    {
                        PropertyNameCaseInsensitive = true
                    });
            }
        }

        public IEnumerable<User> GetUsers()
        {
            using (var jsonFileReader = File.OpenText(JsonUsers))
            {
                return JsonSerializer.Deserialize<User[]>(jsonFileReader.ReadToEnd(),
                    new JsonSerializerOptions
                    {
                        PropertyNameCaseInsensitive = true
                    });
            }
        }


        public IEnumerable<Product> GetProducts()
        {
            using (var jsonFileReader = File.OpenText(JsonFileName))
            {
                return JsonSerializer.Deserialize<Product[]>(jsonFileReader.ReadToEnd(),
                    new JsonSerializerOptions
                    {
                        PropertyNameCaseInsensitive = true
                    });
            }
        }

        public static IEnumerable<MyListing> GetImages()
        {
            using (var jsonFileReader = File.OpenText(JsonMyListings))
            {
                return JsonSerializer.Deserialize<MyListing[]>(jsonFileReader.ReadToEnd(),
                    new JsonSerializerOptions
                    {
                        PropertyNameCaseInsensitive = true
                    });
            }
        }

        public void AddRating(string productId, int rating)
        {
            var products = GetProducts();

            if (products.First(x => x.Id == productId).Ratings == null)
            {
                products.First(x => x.Id == productId).Ratings = new int[] { rating };
            }
            else
            {
                var ratings = products.First(x => x.Id == productId).Ratings.ToList();
                ratings.Add(rating);
                products.First(x => x.Id == productId).Ratings = ratings.ToArray();
            }

            using (var outputStream = File.OpenWrite(JsonFileName))
            {
                JsonSerializer.Serialize<IEnumerable<Product>>(
                    new Utf8JsonWriter(outputStream, new JsonWriterOptions
                    {
                        SkipValidation = true,
                        Indented = true
                    }),
                    products
                );
            }
        }

        public static void AddImage(MyListing image)
        {
            List<MyListing> images = GetImages().ToList();

            images.Add(image);
;
            using (var outputStream = File.OpenWrite(JsonMyListings))
            {
                JsonSerializer.Serialize<IEnumerable<MyListing>>(
                    new Utf8JsonWriter(outputStream, new JsonWriterOptions
                    {
                        SkipValidation = true,
                        Indented = true
                    }),
                    images
                );
            }
        }
    }

}
