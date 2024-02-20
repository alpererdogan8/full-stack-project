/**
 * @typedef {import('axios').AxiosRequestConfig} AxiosRequestConfig
 */

/**
 * BaseService class for making HTTP requests.
 * @class
 */

class BaseService {
  /*** Creates an instance of BaseService.
   * @constructor
   * @param {object} $http - The HTTP client for making requests.
   */
  constructor($http) {
    /** The HTTP client for making requests.
     * @type {object}
     */
    this.$http = $http;
  }

  /** Sends a GET request to the specified URL.
   * @param {string} url - The URL to send the request to.
   * @param {AxiosRequestConfig} [config] - The configuration for the request.
   * @returns {Promise} A Promise that resolves with the response data.
   */
  async get(url, config) {
    return this.$http.get(url, config);
  }
}

export default BaseService;
