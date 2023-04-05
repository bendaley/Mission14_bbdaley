using Microsoft.AspNetCore.Mvc;
using Mission14_bbdaley.Data;

namespace Mission14_bbdaley.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class FoodController : Controller
    {
        public FoodDbContext context;

        public FoodController(FoodDbContext temp)
        {
            context = temp;
        }

        public IEnumerable<MarriottFood> Get()
        {
            var x = context.Foods.ToArray();

            return context.Foods.ToArray();
        }


    }
}
