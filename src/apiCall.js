const apiCalls = {
  checkResponse(response) {
    if (response.ok) {
    return response.json();
    }
    throw response;
    },

  
}