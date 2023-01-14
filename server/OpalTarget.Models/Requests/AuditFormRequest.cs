using OpalTarget.Models.Enums;

namespace OpalTarget.Models.Requests
{
    public class AuditFormRequest
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public MessengerType Messenger { get; set; }
        public string Description { get; set; }
    }
}
