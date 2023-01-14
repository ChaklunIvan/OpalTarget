using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OpalTarget.Models.Requests;

namespace OpalTarget.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuditController : ControllerBase
    {
        [HttpPost]
        public async Task<ActionResult> ReceiveAudit([FromBody] AuditFormRequest audit, CancellationToken cancellationToken)
        {


            return Ok();
        }
    }
}
