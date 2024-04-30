using static System.Runtime.InteropServices.JavaScript.JSType;

namespace JobSearch_Server.Models
{
    public enum JobFields {
        QA,
        HighTech,
        Architecture,
        ExteriorDesign,
        Education,
        Exercise,
        Swimming,
        Graphics,
        MediaDesign,
        Sewing,
        Construction,
        Medicine,
        Transport,
        Deliveries
    }

    public enum Areas
    {
        North,
        South,
        Coordinator,
        Lowland,
        Wipe
    }
    public class Job
    {
        public JobFields Field { get; set; }
        public string Name { get; set; }    
        public double ScopeHours { get; set; }
        public Areas Area { get; set; }
        public string Requirements { get; set; }
        public bool WorkingFromHome { get; set; }
        
        public Job(JobFields field,string name,double scopeHours, Areas area ,string requirements, bool workingFromHome)
        {
            Field = field;
            Name = name;
            ScopeHours = scopeHours;
            Area = area;
            Requirements = requirements;
            WorkingFromHome = workingFromHome;
        }
    }
}
