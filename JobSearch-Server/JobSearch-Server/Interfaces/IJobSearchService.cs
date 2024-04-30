using JobSearch_Server.Models;

namespace JobSearch_Server.Interfaces
{
    public interface IJobSearchService
    {
        List<Job> AllJobs(); 
        User? GetUser(string userName,string userPassword);
    }
}
