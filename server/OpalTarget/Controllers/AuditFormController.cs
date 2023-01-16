using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OpalTarget.Models.Requests;
using System.Reflection;

namespace OpalTarget.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuditFormController : ControllerBase
    {
        [HttpPost]
        public async Task<ActionResult> ReceiveAudit([FromBody] AuditFormRequest audit, CancellationToken cancellationToken)
        {


            return Ok();
        }
        [HttpGet]
        public async Task<AcceptedResult> GetBot()
        {
            var bot = 
        }
    }
}
