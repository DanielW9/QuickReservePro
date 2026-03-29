using Microsoft.EntityFrameworkCore;
using QuickReserveServer.Models;

namespace QuickReserveServer.Data;

public class AppDbContext : DbContext {
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) {}
    public DbSet<Reservation> Reservations { get; set; }
}