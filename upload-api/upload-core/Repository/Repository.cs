using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using upload_core.Data;
using upload_core.Interfaces;

namespace upload_core.Repository
{

}
//{
//    public class Repository<TEntity> : IRepository<TEntity> where TEntity : class, new()
//    {
//        private readonly AppDBContext _repositoryContext;

//        public Repository(AppDBContext repositoryContext)
//        {
//            _repositoryContext = repositoryContext;
//        }

//        public IQueryable<TEntity> GetAll()
//        {
//            try
//            {
//                return _repositoryContext.Set<TEntity>();
//            }
//            catch (Exception)
//            {
//                throw new Exception("Couldn't retrieve entities");
//            }
//        }

//        public async Task<TEntity> AddAsync(TEntity entity)
//        {
//            if (entity == null)
//            {
//                throw new ArgumentNullException($"{nameof(AddAsync)} entity must not be null");
//            }

//            try
//            {
//                await _repositoryContext.AddAsync(entity);
//                await _repositoryContext.SaveChangesAsync();

//                return entity;
//            }
//            catch (Exception)
//            {
//                throw new Exception($"{nameof(entity)} could not be saved");
//            }
//        }

//        public async Task<TEntity> UpdateAsync(TEntity entity)
//        {
//            if (entity == null)
//            {
//                throw new ArgumentNullException($"{nameof(AddAsync)} entity must not be null");
//            }

//            try
//            {
//                _repositoryContext.Update(entity);
//                await _repositoryContext.SaveChangesAsync();

//                return entity;
//            }
//            catch (Exception)
//            {
//                throw new Exception($"{nameof(entity)} could not be updated");
//            }
//        }
//    }
