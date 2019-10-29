import lodash from 'lodash';

async function commenProductData(product) {
    return lodash.pick(product, ['id', 'name', 'amount','size', 'color','price', 'discount', 'hot', 'category', ])
}
 export default {
     commenProductData,
 }