export const checkResponse = (response) => {
  if (response.ok) {
  return response.json();
 }
throw response;
}

export const getAllVillagers = async () => {
  const allVillagers = await fetch('https://acnhapi.com/v1a/villagers')
    return checkResponse(allVillagers)
}

  // getSelectedVillager(id) {
  //   return fetch(`https://acnhapi.com/v1a/villagers/${id}`)
  //     .then(response => this.checkResponse(response));
  //   },

