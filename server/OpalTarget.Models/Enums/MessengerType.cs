﻿using Newtonsoft.Json.Converters;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace OpalTarget.Models.Enums
{
    [JsonConverter(typeof(StringEnumConverter))]
    public enum MessengerType
    {
        Empty,
        [EnumMember(Value = "dog")]
        Telegram,
        Instagram,
        Viber
    }
}
