using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace SU.EcoList.Website.Pages
{
    // Admin Canter Model Class 
    public class AdminCenterModel : PageModel
    {   
        // Debuging Message
        public string Message { get; private set; } = "PageModel in C#";

        // Get() To display current time.
        public void OnGet() => Message += $" Server time is { DateTime.Now }";
    }
}