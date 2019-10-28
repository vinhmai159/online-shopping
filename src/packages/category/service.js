import repository from './repository'
import queryBuilder from './queryBuilder'
import {Category, User} from "../../models"
import configs from '../../configs/index'
import responseBuilder from  '../../utils/responseBuilder'

async function createCategory(req) {
  let { name } = req
  let category = await repository.createCategory({name})
  return category
}

async function getAllCategories(req) {
  let {limit, page, search} = req
  page = page ? page : 1
  limit = limit ? limit : configs.limit
  const originalSearch = search ? search : ''
  search = new RegExp(search)
  let skip = (page - 1) * limit
  let sort = {createdAt: -1}

  let queryBuilderGetList = await queryBuilder.getList({limit, skip, search, sort})
  let categories = await repository.getAllCategories(queryBuilderGetList)

  let queryBuilderGetTotal = await queryBuilder.getTotalNumber({search})
  let numberOfCategory = await repository.getNumberOfCategory(queryBuilderGetTotal)
  let total = numberOfCategory[0].total
  let isEnd = (total <= skip + limit + 1)

  return {
    categories, search: originalSearch, page, total, isEnd
  }
}

async function deleteCategory(req) {
  const categoryId  = req.categoryId
  try {
    const category = await repository.getCategory({_id: categoryId})

    if (!category) {
      throw new Error(responseBuilder.message.notFound)
    }
    const result = await repository.deleteCategory({_id: categoryId})
    return result
  } catch (e) {
    throw new Error(responseBuilder.message.notFound)
  }

}

async function getDetailCategory(req) {
  const categoryId  = req.categoryId
  try {
    const category = await repository.getCategory({_id: categoryId})

    if (!category) {
      throw new Error(responseBuilder.message.notFound)
    }
    return category
  } catch (e) {
    throw new Error(responseBuilder.message.notFound)
  }
}

export default {
  getAllCategories,
  createCategory,
  deleteCategory,
  getDetailCategory
}

