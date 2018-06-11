/*
 * Returns a promise for the NWS Weather Forecast Office (WFO)
 * which includes this point in its County Warning Area (CWA).
 * 
 * @param {number} latitude
 * @param {number} longitude
 * @returns {Promise<string>} id of "nearest" weather office
 */
function getStation(latitude, longitude) {
  let url = 'https://api.weather.gov/points/' + latitude + ',' + longitude;
  console.log('fetching', url);
  return fetch(url)
    .then(response => response.json())
    .then(json => json.properties.cwa)
    .catch(err => {
      console.log('Fetch Error:', err);
    });
}


/*
 * Returns a promise for a product available at office.
 * 
 * @param {string} type
 * @param {string=} office
 * @returns {Promise<Object[]>} features property of response in json format
 */
function getProducts(type, office = '') {
  let url = 'https://api.weather.gov/products/types/' + type + '/locations/' + office;
  console.log('fetching', url);
  return fetch(url)
    .then(response => response.json())
    .then(json => {
      if (office === '') {
        // The /products/types/{typeId}/locations endpoint returns results in 'locations' property.
        return json['locations'];
      } else {
        // Most other /products/types/* endpoints return results in '@graph' property.
        return json['@graph'];
      }
    })
    .catch(err => {
      console.log('Fetch Error:', err)
    });
}


/*
 * Returns a promise for a discussion product, with index 0 being most recent.
 * 
 * @param {Array.<Object>} features
 * @param (number) [i=0] array index to return 
 * @param {Promise<Object>} json of product, note productText property
 */
function getProduct(features, i = 0) {
  let url = features[i]['@id'];
  console.log('fetching', url);
  return fetch(url)
    .then(response => response.json())
    .catch(err => {
      console.log('Fetch Error:', err)
    });
}