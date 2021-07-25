import query from '../database/database.services'

import { BaseRecipe, Recipe } from './recipe.interface'
import { recipesRouter } from './recipes.router'

// Should be all ** public ** recipes
export function findAll(): Promise<Recipe[]> {
  return new Promise(function (resolve, reject) {
    let temp:Recipe = {
      name: 'placeholder';
      description: 'd';
      id: 2
    }
    resolve([temp])

    // TODO: Make below into query from database.services
    // pool.query('SELECT * FROM recipes ORDER BY id ASC', (error, results) => {
    //   if (error || results == null || results == undefined) {
    //     reject(error)
    //     console.log(error, db)
    //     return
    //   }
    //   console.log(results)
    //   resolve(results.rows)
    // })
  })
}

/*
export const find = async (id: number): Promise<Recipe> => {...};

export const create = async (newRecipe: BaseRecipe): Promise<Recipe> => {...};

export const update = async (
  id: number,
  itemUpdate: BaseRecipe
): Promise<Recipe | null> => {...};

export const remove = async (id: number): Promise<null | void> => {
  const item = await find(id);

  if (!item) {
    return null;
  }

  delete items[id];
};
*/
/*
const createMerchant = (body) => {
  return new Promise(function(resolve, reject) {
    const { name, email } = body
    pool.query('INSERT INTO merchants (name, email) VALUES ($1, $2) RETURNING *', [name, email], (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(`A new merchant has been added added: ${results.rows[0]}`)
    })
  })
}
const deleteMerchant = () => {
  return new Promise(function(resolve, reject) {
    const id = parseInt(request.params.id)
    pool.query('DELETE FROM merchants WHERE id = $1', [id], (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(`Merchant deleted with ID: ${id}`)
    })
  })
}*/

module.exports = {
  findAll,
}