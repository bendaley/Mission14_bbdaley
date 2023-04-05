using Microsoft.EntityFrameworkCore;

// movie db context file

namespace Mission14_backend.Data
{
    public class MoviesDbContext: DbContext
    {
        public MoviesDbContext (DbContextOptions<MoviesDbContext> options) : base(options)
        {

        }
        public DbSet<Movie> Movies { get; set; }
    }
}
