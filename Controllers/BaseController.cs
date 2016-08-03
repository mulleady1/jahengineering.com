using Jah.Models;
using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace Jah.Controllers
{
    public class BaseController : Controller
    {
		public BaseController(JahDbContext db)
        {
            _db = db;
        }

		protected readonly JahDbContext _db;
        
		protected string _userId
		{
			get
			{
				var name = this.User.Identity.Name;
				if (name == null)
				{
					return null;
				}

				var user = _db.Users.FirstOrDefault(u => u.UserName == name || u.Email == name);

				if (user == null)
				{
					return null;
				}

				return user.Id;
			}
		}
	}
}
