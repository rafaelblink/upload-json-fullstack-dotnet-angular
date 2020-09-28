using System;
using System.ComponentModel.DataAnnotations;
using upload_core.Enums;
using upload_core.Interfaces;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace upload_core.Entities
{
    public class Product : IEntity
    {
        [Required]
        public int Id { get; set; }
        public DateTime CreatedAt { get; set; }

        [Required]
        [MaxLength(100)]
        public string Title { get; set; }
        [Required]
        [JsonProperty("type")]
        [JsonConverter(typeof(StringEnumConverter))]
        public ProductTypeEnum Type { get; set; }
        [MaxLength(500)]
        public string Description { get; set; }
        public string FileName { get; set; }
        public int Height { get; set; }
        public int Width { get; set; }
        [Required]
        public decimal Price { get; set; }
        public int Rating { get; set; }
        
    }
}
