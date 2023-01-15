using OpalTarget.Models.Enums;

namespace OpalTarget.Models.Requests
{
    public class AuditFormRequest
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public MessengerType Messenger { get; set; }
        public string Username { get; set; }
        public string Description { get; set; }
    }
}
