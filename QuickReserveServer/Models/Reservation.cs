namespace QuickReserveServer.Models;

public class Reservation {
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
}

public class ReservationReadDto {
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
}