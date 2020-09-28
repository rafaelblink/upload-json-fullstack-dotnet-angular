using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using upload_core.Entities;
using upload_core.Interfaces;

namespace upload_core.Repository
{
    public interface IProductRepository
    {
        Task<Product[]> GetAllAsync();

        Task<Product> GetAsync(int id);

        Task<IEnumerable<Product>> AddRangeAsync(IEnumerable<Product> products);

        Task<Product> UpdateAsync(Product product);

        Task<Product> RemoveAsync(Product product);
    }
}
