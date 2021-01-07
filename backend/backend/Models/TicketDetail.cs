using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Models
{
    public class TicketDetail
    {
        [Key]
        [Required]
        public int Ticketid { get; set; }

        [Column(TypeName = "nvarchar(300)")]
        [Required]
        public string Summary { get; set; }

        [Column(TypeName = "nvarchar(1000)")]
        [Required]
        public string Description { get; set; }

        [Column(TypeName = "nvarchar(70)")]
        [Required]
        public string ComplaintType { get; set; }

        public int UserId { get; set; }

    }
}
