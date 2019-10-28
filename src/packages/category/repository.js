import {Category, User} from '../../models'

async function createCategory(req) {
  const category = Category.create(req)
  return category
}

async function getAllCategories(queryBuilderGetList) {
  let categories = Category.aggregate(queryBuilderGetList)
  return categories
}

async function getNumberOfCategory(queryBuilderGetList) {
  const total = Category.aggregate(queryBuilderGetList)
  return total
}

async function getCategory(options) {
  const category = Category.findOne(options)
  return category
}

async function deleteCategory(options) {
  const result = Category.deleteOne(options)
  return result
}

export default {
  getAllCategories,
  createCategory,
  getNumberOfCategory,
  deleteCategory,
  getCategory
}
