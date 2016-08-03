using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Newtonsoft.Json;

namespace Jah.Models
{
    [JsonObject(MemberSerialization.OptIn)]
    public class JahUser : IdentityUser
    {

		[JsonProperty]
		public override string Id { get; set; }

		[JsonProperty]
		public override string UserName { get; set; }

    }
}
