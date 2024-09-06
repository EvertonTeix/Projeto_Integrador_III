using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace YourProject.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MapController : ControllerBase
    {
        // GET: api/map/locations
        [HttpGet("locations")]
        public IActionResult GetLocations()
        {
            // Aqui você deve obter dados reais de um banco de dados ou outro serviço
            var locations = new List<Location>
            {
                new Location { Id = 1, Name = "Local 1", Latitude = 40.7128, Longitude = -74.0060 },
                new Location { Id = 2, Name = "Local 2", Latitude = 34.0522, Longitude = -118.2437 }
            };

            return Ok(locations);
        }

        // GET: api/map/route?startLat=40.7128&startLon=-74.0060&endLat=34.0522&endLon=-118.2437
        [HttpGet("route")]
        public IActionResult GetRoute(double startLat, double startLon, double endLat, double endLon)
        {
            // Aqui você deve implementar a lógica para calcular a rota, talvez chamando um serviço externo
            var route = new Route
            {
                Start = new Location { Latitude = startLat, Longitude = startLon },
                End = new Location { Latitude = endLat, Longitude = endLon },
                Distance = 10.0 // Esta é uma distância fictícia
            };

            return Ok(route);
        }
    }

    public class Location
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public double Latitude { get; set; }
        public double Longitude { get; set; }
    }

    public class Route
    {
        public Location Start { get; set; }
        public Location End { get; set; }
        public double Distance { get; set; } // Distância em quilômetros ou milhas
    }
}
