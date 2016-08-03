using System;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Xunit;

namespace Jah.Models
{
    public class UserTests
    {
        [Fact]
        public async void TestCreateUser()
        {
			var username = Environment.GetEnvironmentVariable("JAH_TEST_USERNAME");
			var email = Environment.GetEnvironmentVariable("JAH_TEST_EMAIL");
			var password = Environment.GetEnvironmentVariable("JAH_TEST_PASSWORD");
			if (string.IsNullOrEmpty(username) || string.IsNullOrEmpty(email) || string.IsNullOrEmpty(password))
			{
				throw new Exception("One or more environment variables missing: JAH_TEST_USERNAME, JAH_TEST_EMAIL, JAH_TEST_PASSWORD");
			}
			
            var user = new JahUser 
			{
				UserName = username,
				Email = email
			};

            var userManager = GetUserManager();

			var result = await userManager.CreateAsync(user, password);
			Assert.True(result.Succeeded);
        }

		private UserManager<JahUser> GetUserManager()
		{
			return new UserManager<JahUser>(
				new UserStore<JahUser>(new JahDbContext()), 
				null, 
				new PasswordHasher<JahUser>(),
				null,
				null,
				null,
				null,
				null,
				null
			);
		}

    }
}
