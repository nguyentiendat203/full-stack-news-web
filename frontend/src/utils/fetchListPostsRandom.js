import { fetchData } from './fetchData'

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
      return fetchData(`http://127.0.0.1:8080/one-post/category/${id}`)
    })
    const posts = await Promise.all(postPromises)
    return posts.flat()
  } catch (error) {
    console.log(error)
  }
}
