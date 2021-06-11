using System;
using System.Collections.Generic;
using API.Entities;

namespace API.DTOs
{
    public class MemberDto
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string PhotoUrl {get; set;}
        public string Email {get; set;}
        public string Telephone {get; set;}
        public string Description {get; set;}
        public DateTime Created {get; set;} = DateTime.Now;
        public string Subdomain {get; set;}
        public string City {get;set;}
        public ICollection<PhotoDto> Photos { get; set; }
    }
}