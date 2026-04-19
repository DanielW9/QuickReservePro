using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using QuickReserveServer.Data;
using QuickReserveServer.Models;

[ApiController]
[Route("reservations")]
public class ReservationsController : ControllerBase {
    private readonly AppDbContext _context;

    public ReservationsController(AppDbContext context) {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<ReservationReadDto>>> Get() {
        return await _context.Reservations
            .Select(r => new ReservationReadDto { Id = r.Id, Name = r.Name })
            .ToListAsync();
    }

    [HttpPost]
    public async Task<ActionResult> Post(Reservation reservation) {
        _context.Reservations.Add(reservation);
        await _context.SaveChangesAsync();
        return Ok();
    }

    
    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id) {
        var reservation = await _context.Reservations.FindAsync(id);
        
        if (reservation == null) {
            return NotFound();
        }

        _context.Reservations.Remove(reservation);
        await _context.SaveChangesAsync();

        return NoContent();
    }
}