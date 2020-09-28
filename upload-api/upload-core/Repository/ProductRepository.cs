using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using upload_core.Data;
using upload_core.Entities;
using Microsoft.EntityFrameworkCore;

namespace upload_core.Repository
{
    public class ProductRepository : IProductRepository
    {
        private readonly AppDBContext _context;

        public ProductRepository(AppDBContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Product>> AddRangeAsync(IEnumerable<Product> products)
        {
            try
            {
                await _context.Products.AddRangeAsync(products);

                await _context.SaveChangesAsync();

                return products;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public async Task<Product[]> GetAllAsync()
        {
            try
            {
                return await _context.Products.OrderBy(p => p.Title).ToArrayAsync();
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public async Task<Product> GetAsync(int id)
        {
            try
            {
                return await _context.Products.FindAsync(id);
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public async Task<Product> UpdateAsync(Product product)
        {
            try
            {
                _context.Update(product);

                await _context.SaveChangesAsync();

                return product;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public async Task<Product> RemoveAsync(Product product)
        {
            try
            {
                _context.Products.Remove(product);

                await _context.SaveChangesAsync();

                return product;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }
    }
}
