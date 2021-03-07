export const checkResponse = (response) => {
  if (response.ok) {
  return response.json();
 }
  throw new Error('Sorry we are having difficulty loading the page, please try again later!');
}

export const getAllVillagers = async () => {
  const allVillagers = await fetch('https://acnhapi.com/v1a/villagers')
    return checkResponse(allVillagers)
}

export const getSelectedVillager =  async (id) => {
  const selectedVillager = await fetch(`https://acnhapi.com/v1a/villagers/${id}`)
   return checkResponse(selectedVillager)
}

