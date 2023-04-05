using Microsoft.EntityFrameworkCore;

namespace Mission14_bbdaley.Data
{
    public class FoodDbContext : DbContext
    {
        public FoodDbContext (DbContextOptions<FoodDbContext> options) : base(options) { }

        public DbSet<MarriottFood> Foods { get; set; }
    }
}
