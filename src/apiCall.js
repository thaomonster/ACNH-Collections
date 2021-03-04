const apiCalls = {
  checkResponse(response) {
    if (response.ok) {
    return response.json();
    }
    throw response;
    },

getAllVillagers() {
  return fetch('https://acnhapi.com/v1a/villagers')
    .then(response => this.checkResponse(response));
  }
}

export default apiCalls