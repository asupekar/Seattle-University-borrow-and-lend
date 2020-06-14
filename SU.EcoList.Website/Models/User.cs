using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace SU.EcoList.Website.Models
{
    public class User
    {
    public string Id { get; set; }
    public string Image { get; set; }
    public string Url { get; set; }
    public string Name { get; set; }
    public string Dept { get; set; }
    public string JoinDate { get; set; }
    public string Listings { get; set; }
    public string Suspension { get; set; }
    public string ActiveListings { get; set; }
    public string Claims { get; set; }
    public string ClaimsRelisted { get; set; }
    public override string ToString() => JsonSerializer.Serialize(this);
    }
}
