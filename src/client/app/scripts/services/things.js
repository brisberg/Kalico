var axios = require('axios');

var service = {
  getThings: function() {
    return axios.get('http://localhost:3001/api/things').then(function(result) {
      return result.data;
    });
  },

  createThing: function(count) {
    return axios.post('http://localhost:3001/api/things', { 'count': count }).then(function(result) {
      return result.data;
    });
  },

  deleteThing: function(id) {
    return axios.delete('http://localhost:3001/api/things/' + id).then(function(result) {
      return result.data;
    });
  }
}

export default service;
