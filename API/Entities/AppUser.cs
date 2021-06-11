using System;
using System.Collections.Generic;

namespace API.Entities
{
    public class AppUser
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string Email {get; set;}
        public string Telephone {get; set;}
        public string Description {get; set;}
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
        public DateTime Created {get; set;} = DateTime.Now;
        public string Subdomain {get; set;}
        public string City {get;set;}
        public ICollection<Photo> Photos { get; set; }
    }
}