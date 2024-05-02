using JobSearch_Server.Interfaces;
using JobSearch_Server.Models;

namespace JobSearch_Server.Services
{
    public class JobSearchService:IJobSearchService
    {
        private List<Job> JobsList = new List<Job>()
        {
            new Job(JobFields.QA,"QA job",7,Areas.Wipe,"creative and motivated person",true),
            new Job(JobFields.HighTech,"High Tech job",8.5,Areas.North,"Angular developer at least one year experience",false),
            new Job(JobFields.QA,"QA job",8,Areas.North,"one year experience",false),
            new Job(JobFields.HighTech,"High Tech job",9.5,Areas.Coordinator,"front end developer at least two years experience",false),
            new Job(JobFields.Deliveries,"pizza deliver job",12,Areas.Lowland,"quickly and fast person with car in his own",false),
            new Job(JobFields.Sewing,"Sewing teacher job",4,Areas.Lowland,"great teacher for sewing, at least 5 years in the field",false),
            new Job(JobFields.Graphics,"graphics job",6,Areas.North,"creative and motivated person",true),
            new Job(JobFields.HighTech,"High Tech job",8.5,Areas.North,"c# developer with more than 4 years experience",false),
            new Job(JobFields.Medicine,"medicin job",7,Areas.Wipe,"carefull and talent head surgeon",true),
        };

        private List<User> UsersList = new List<User>()
        {
            new User(1,"Dan","danidan1243",JobFields.Architecture),
            new User(2,"Noa","dfdasfag",JobFields.Deliveries),
            new User(3,"Eli","fdasf44",JobFields.HighTech),
            new User(4,"Chen","fasewrw",JobFields.QA),
            new User(5,"Osnat","fdasa",JobFields.Swimming),
            new User(6,"Michal","fdsffdse",JobFields.Transport),
            new User(7,"Ester","fdasewqhgf",JobFields.Medicine),
            new User(8,"Gad","dfasfdas",JobFields.Graphics),
            new User(9,"Yoram","fdsaffdas",JobFields.HighTech)
        };

        public List<Job> AllJobs()
        {
            return JobsList;
        }

        public User? GetUser(string userName,string userPassword)
        {
            User? user = UsersList.Find(u => u.Name == userName && u.Password == userPassword);
            return user;
        }

    }

    public static class JobSearchUtils
    {
        public static void AddJobSearch(this IServiceCollection services)
        {
            services.AddSingleton<IJobSearchService, JobSearchService>();
        }
    }
}
