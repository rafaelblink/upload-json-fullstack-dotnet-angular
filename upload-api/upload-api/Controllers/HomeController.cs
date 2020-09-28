using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace upload_api.Controllers
{
    [Route("")]
    public class HomeController : Controller
    {
        // GET: api/values
        [HttpGet]
        public IActionResult Get()
        {
            string message = "REST WebAPI Challenge 20200713 Running";
            return Ok(message);
        }

    }
}
