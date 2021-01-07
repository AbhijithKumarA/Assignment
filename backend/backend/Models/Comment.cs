using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Models
{
    public class Comment
    {
        public int CommentId { get; set; }

        [Column(TypeName = "nvarchar(1000)")]
        public string CommentText { get; set; }

        [ForeignKey("Ticketid")]
        public int Ticketid { get; set; }

        [ForeignKey("UserId")]
        public int UserId { get; set; }
    }
}
