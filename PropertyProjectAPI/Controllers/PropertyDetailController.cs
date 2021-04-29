using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PropertyProjectAPI.Models;

namespace PropertyProjectAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PropertyDetailController : ControllerBase
    {
        private readonly PropertyDetailContext _context;

        public PropertyDetailController(PropertyDetailContext context)
        {
            _context = context;
        }

        // GET: api/PropertyDetail
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PropertyDetail>>> GetPropertyDetails()
        {
            return await _context.PropertyDetails.ToListAsync();
        }

        // GET: api/PropertyDetail/5
        [HttpGet("{id}")]
        public async Task<ActionResult<PropertyDetail>> GetPropertyDetail(int id)
        {
            var propertyDetail = await _context.PropertyDetails.FindAsync(id);

            if (propertyDetail == null)
            {
                return NotFound();
            }

            return propertyDetail;
        }

        // PUT: api/PropertyDetail/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPropertyDetail(int id, PropertyDetail propertyDetail)
        {
            if (id != propertyDetail.Id)
            {
                return BadRequest();
            }

            _context.Entry(propertyDetail).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PropertyDetailExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/PropertyDetail
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<PropertyDetail>> PostPropertyDetail(PropertyDetail propertyDetail)
        {
            _context.PropertyDetails.Add(propertyDetail);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPropertyDetail", new { id = propertyDetail.Id }, propertyDetail);
        }

        // DELETE: api/PropertyDetail/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePropertyDetail(int id)
        {
            var propertyDetail = await _context.PropertyDetails.FindAsync(id);
            if (propertyDetail == null)
            {
                return NotFound();
            }

            _context.PropertyDetails.Remove(propertyDetail);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PropertyDetailExists(int id)
        {
            return _context.PropertyDetails.Any(e => e.Id == id);
        }
    }
}
