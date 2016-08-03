using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace Jah.Models
{
    public class JahDbContext : IdentityDbContext<JahUser>
    {
        public JahDbContext() : base()
        { }

        public JahDbContext(DbContextOptions<JahDbContext> options) : base(options)
        { }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite("Filename=./db.db");
        }
    }

}
