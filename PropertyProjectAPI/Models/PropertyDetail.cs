using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace PropertyProjectAPI.Models
{
    [Table("Properties")]
    public class PropertyDetail
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int Id { get; set; }

        [Column(TypeName ="nvarchar(255)")]
        public string Address1 { get; set; }
        
        [Column(TypeName = "nvarchar(255)")] 
        public string Address2 { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string City { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string Country { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string County { get; set; }
        
        [Column(TypeName = "nvarchar(50)")]
        public string District { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string State { get; set; }

        [Column(TypeName = "nvarchar(5)")]
        public string Zip { get; set; }

        [Column(TypeName = "nvarchar(4)")]
        public string ZipPlus4 { get; set; }

        [Column(TypeName = "int")]
        public int YearBuilt { get; set; }

        [Column(TypeName = "DECIMAL(19,4)")]
        public float ListPrice { get; set; }

        [Column(TypeName = "DECIMAL(19,4)")]
        public float MonthlyRent { get; set; }

        [Column(TypeName = "DECIMAL(5,2)")]
        public float GrossYield { get; set; }
    }
}
