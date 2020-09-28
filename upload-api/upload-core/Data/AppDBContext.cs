using System;
using upload_core.Entities;
using upload_core.Enums;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Microsoft.Extensions.Configuration;


namespace upload_core.Data
{
    public class AppDBContext : DbContext
    {
        public DbSet<Product> Products { get; set; }


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseMySQL("server=localhost;database=uploadDB;user=root;password=mypass");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            var converter = new EnumToNumberConverter<ProductTypeEnum, int>();

            modelBuilder
                .Entity<Product>()
                .Property(e => e.Type)
                .HasConversion(converter);
        }
    }
}
