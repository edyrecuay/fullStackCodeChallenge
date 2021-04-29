using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PropertyProjectAPI.Models
{
    public class PropertyDetailContext:DbContext
    {
        public PropertyDetailContext(DbContextOptions<PropertyDetailContext> options):base(options)
        {

        }
        
        public DbSet<PropertyDetail> PropertyDetails { get; set; }
    }
}
