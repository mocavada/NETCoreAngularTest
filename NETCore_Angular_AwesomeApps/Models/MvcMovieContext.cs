using System;
using Microsoft.EntityFrameworkCore;

namespace NETCore_Angular_AwesomeApps.Models
{
    public class MvcMovieContext : DbContext
    {
        public MvcMovieContext(DbContextOptions<MvcMovieContext> options) : base(options)
        {

        }

        public DbSet<Movie> Movie { get; set; }

    }
    
}
