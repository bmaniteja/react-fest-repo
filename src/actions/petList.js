export const fetchPetList = (type) => (dispatch) => {
  window.fetch(`https://us-central1-react-fest.cloudfunctions.net/getPetsList?type=${type}`)
         .then((response) => {
             return response.json()
         }).then((data) => {
             dispatch({
              type: 'LIST_OF_PETS_LOADED',
              payload:  {
                data
              }
             });
         })
};
