using JobSearch_Server.Interfaces;
using JobSearch_Server.Models;
using Microsoft.AspNetCore.Mvc;

namespace JobSearch_Server.Controllers
{
    [ApiController]
    [Route("[controller]")]

    public class JobSearchController : ControllerBase
    {
        private IJobSearchService _jobSearchService;

        public JobSearchController(IJobSearchService jobSearchService)
        {
            _jobSearchService = jobSearchService;
        }

        [HttpGet]
        [Route("jobs")]
        public ActionResult getAllJobs()
        {
            return Ok(_jobSearchService.AllJobs());
        }

        [HttpGet]
        [Route("user/{userName}/{userPassword}")]
        public ActionResult getUser(string userName, string userPassword)
        {
            User? user = _jobSearchService.GetUser(userName, userPassword);
            if(user == null)
            {
                return Ok("null");
            }
            return Ok(user);
        }
    }
}
