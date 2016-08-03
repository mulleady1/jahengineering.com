using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Jah.Models;
using Jah.Models.ViewModels;
using Microsoft.AspNetCore.Identity;
using System.Threading.Tasks;

namespace Jah.Controllers
{
    [Route("api/[controller]")]
    public class LoginController : BaseController
    {
		private readonly UserManager<JahUser> _userManager;
        private readonly SignInManager<JahUser> _signInManager;

        public LoginController(
			JahDbContext db, 
			UserManager<JahUser> userManager,
            SignInManager<JahUser> signInManager) : base(db)
        {
            _userManager = userManager;
			_signInManager = signInManager;
        }

		// GET api/login
		[HttpGet]
		public ActionResult Get()
		{
			var username = this.User.Identity.Name;

			if (username == null)
			{
				return new EmptyResult();
			}

			var user = _db.Users.First(u => u.UserName == username);

			return new JsonResult(new
            {
				id = user.Id,
                username = username
            });
		}

        // POST api/login
        [HttpPost]
        public async Task<ActionResult> Post([FromBody]LoginViewModel model)
        {
            if (!ModelState.IsValid || model == null)
            {
                return BadRequest("Bad request");
            }
			
			var user = _db.Users.FirstOrDefault(u => u.UserName == model.Username || u.Email == model.Username);

			var result = await _signInManager.PasswordSignInAsync(user, model.Password, true, false);

			if (!result.Succeeded)
			{
				return BadRequest("Invalid credentials");
			}

			return new JsonResult(new
            {
				id = user.Id,
                username = user.UserName
            });
        }

    }
}
