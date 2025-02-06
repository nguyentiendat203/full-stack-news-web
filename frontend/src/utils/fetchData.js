export const fetchData = async (url, method = 'GET', headers = {}, body = null) => {
  try {
    const options = {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...headers
      },
      body: body ? JSON.stringify(body) : null
    }
    const response = await fetch(url, options)
    const data = response.json()
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    return data
  } catch (error) {
    console.error('Fetch data error:', error)
    throw error
  }
}
