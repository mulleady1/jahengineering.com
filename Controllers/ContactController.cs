using Jah.Models;
using Jah.Models.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;
using System.Text;
using System.Threading.Tasks;
using System.Net.Http;
using Microsoft.Extensions.Logging;

namespace Jah.Controllers
{
    [Route("api/[controller]")]
    public class ContactController : BaseController
    {
        private readonly IOptions<MailgunOptions> _mailgunOptions;

        private readonly ILogger<ContactController> _logger;

        public ContactController(JahDbContext db, IOptions<MailgunOptions> mailgunOptions, ILogger<ContactController> logger) : base(db)
        {
            _mailgunOptions = mailgunOptions;
			_logger = logger;
        }

        // POST api/contact
        [HttpPost]
        public async Task<MailgunResult> Post([FromBody]MessageViewModel model)
        {
			_logger.LogInformation("POST /api/contact {model}", model);
            if (!ModelState.IsValid || model == null)
            {
				_logger.LogInformation("ModelState invalid");
                return new MailgunResult { Success = false };
            }

            using (var client = new HttpClient())
            {
                var url = _mailgunOptions.Value.Url;

                var message = new MailgunMessage
                {
                    From = "Jah Bot <noreply@jahengineering.com>",
                    To = "kyle@jahengineering.com",
                    Subject = "Contact Request for jahengineering.com",
                    Html = model.ToHtmlString()
                };
				
				_logger.LogInformation("Sending message to mailgun at {url} with {message}", url, message);

                var content = new StringContent(message.ToQueryString(), Encoding.UTF8, "application/x-www-form-urlencoded");
                var response = await client.PostAsync(url, content);
                var json = await response.Content.ReadAsStringAsync();

				_logger.LogInformation("Received mailgun response: {json}", json);
                var result = JsonConvert.DeserializeObject<MailgunResult>(json);
                result.Success = response.IsSuccessStatusCode;
				_logger.LogInformation("Deserialized response to {result}", result);
                return result;
            }
        }

    }
}
