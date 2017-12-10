/*
 * Returns a promise for the NWS Weather Forecast Office (WFO)
 * which includes this point in its County Warning Area (CWA) 
 * @param {number} latitude
 * @param {number} longitude
 * @returns {string} id of "nearest" weather office
 */
function getStation(latitude, longitude) {
  // console.log('Getting CWA at', latitude, ',', longitude, '...');
  let url = 'https://api.weather.gov/points/' + latitude + ',' + longitude;
  return fetch(url)
    .then(response => response.json())
    .then(json => json.properties.cwa)
    .catch(err => {
      console.log('Fetch Error:', err);
    });
}


/*
 * Returns a promise for a product available at office
 * @param {string} type
 * @param {string} office
 * @returns {Array.<Object>} features property of response in json format
 */
function getProducts(type, office = '') {
  let url = 'https://api.weather.gov/products/types/' + type + '/locations/' + office;
  return fetch(url)
    .then(response => response.json())
    .then(json => json.features)
    .catch(err => {
      console.log('Fetch Error:', err)
    });
}


/*
 * Returns a promise for a discussion product, with index 0 being most recent
 * @param {Array.<Object>} features
 * @param (number) [i=0] array index to return 
 * @param {Object} json of product, note productText property
 */
function getProduct(features, i = 0) {
  let url = features[i]['@id'];
  return fetch(url)
    .then(response => response.json())
    .catch(err => {
      console.log('Fetch Error:', err)
    });
}