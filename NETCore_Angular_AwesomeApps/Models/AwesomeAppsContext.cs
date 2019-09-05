using System;
using Microsoft.EntityFrameworkCore;
using NETCore_Angular_AwesomeApps.Models.CareerCloud.Poco;

namespace NETCore_Angular_AwesomeApps.Models
{
    public class AwesomeAppsContext : DbContext
    {
        public AwesomeAppsContext(DbContextOptions<AwesomeAppsContext> options) : base(options)
        {
        }

        public DbSet<Movie> Movie { get; set; }
        public DbSet<ApplicantProfilePoco> ApplicantProfilePocos { get; set; }
        public DbSet<ApplicantEducationPoco> ApplicantEducationPocos { get; set; }
    }

    
}
