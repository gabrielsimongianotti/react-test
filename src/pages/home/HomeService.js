import api from "../../services/Api.js";

export const getSearch = (wordSearch) => {
  const url = `/query?function=SYMBOL_SEARCH&keywords=${wordSearch}&apikey=ZOXXDL4MNY80QZRG`;
  return new Promise((resolve, reject) => {
    
    api
      .get(url)
      .then(response => resolve(response.data))
      .catch(error => reject(error));
  })
}

export const getEndPoint = (symbol) => {
  const url = `/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=ZOXXDL4MNY80QZRG`;
  return new Promise((resolve, reject) => {
    
    api
      .get(url)
      .then(response => resolve(response.data))
      .catch(error => reject(error));
  })
}