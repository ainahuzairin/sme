using Microsoft.AspNetCore.Mvc;
using sme.Models;
using System.Diagnostics;

namespace sme.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult CompanyProfile()
        {
            return View();
        }

        public IActionResult Awards()
        {
            return View();
        }

        public IActionResult TrackRecord()
        {
            return View();
        }

        public IActionResult Policy()
        {
            return View();
        }

        public IActionResult Client()
        {
            return View();
        }

        public IActionResult Career()
        {
            return View();
        }

        public IActionResult Contact()
        {
            return View();
        }

      

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
