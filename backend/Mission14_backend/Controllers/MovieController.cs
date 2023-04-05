using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Mission14_backend.Data;

// movie controller - also includes a filter to only include movies that are edited & order them alphabetically

namespace Mission14_backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MovieController : Controller
    {
        public MoviesDbContext context;

        public MovieController(MoviesDbContext temp)
        {
            context = temp;
        }

        public IEnumerable<Movie> Get()
        {
            var movies = context.Movies
            .Where(m => m.Edited == "Yes") // Filter out movies with null "Edited" property
            .OrderBy(m => m.Title); // Order remaining movies alphabetically by title

            return movies;
        }

    }
}

// .Where(Movie => Movie.Edited != null)
