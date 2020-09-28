using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using upload_core.Entities;

namespace upload_core.Services
{
    public interface IProductService
    {
        Task<Product[]> GetAll();

        Task<List<Product>> AddAsync(Product product);
    }
}
