import { fetchData } from './fetchData'
const apiUrl = import.meta.env.VITE_API_URL

export const fetchListPostsRandom = async (listCate) => {
  let randomCateIds = []
  while (randomCateIds.length < 5) {
    if (listCate.length < 5) return
    const randomId = Math.floor(Math.random() * listCate.length)
    const cateId = listCate[randomId].id

    if (!randomCateIds.includes(cateId)) {
      randomCateIds.push(cateId)
    }
  }

  try {
    const postPromises = randomCateIds.map((id) => {
      return fetchData(`${apiUrl}/posts/category/first-post?category_id=${id}`)
    })
    return await Promise.all(postPromises)
  } catch (error) {
    console.log(error)
  }
}
