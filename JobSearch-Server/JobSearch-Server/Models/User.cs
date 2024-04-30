using static System.Runtime.InteropServices.JavaScript.JSType;

namespace JobSearch_Server.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Password { get; set; }
        public JobFields JobField { get; set; }

        public User(int id, string name, string password, JobFields jobField) 
        {
            Id = id;
            Name = name;
            Password = password;
            JobField = jobField;
        }
   
    }
}
