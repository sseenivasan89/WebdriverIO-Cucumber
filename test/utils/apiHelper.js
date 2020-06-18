// const R = require('ramda');
// const uuid = require('uuid');
const axios = require('axios');

function CustomException(error) {
  return {
    endpoint: R.pathOr('', ['response', 'config', 'url'], error),
    statusText: R.pathOr('', ['response', 'statusText'], error),
    message: R.pathOr('', ['message'], error),
    status: R.pathOr(500, ['response', 'status'], error),
    data: R.pathOr(null, ['response', 'data'], error),
  };
}

function callGet(endpoint, headers, options = {}) {
  const commonHeaders = {
    'Content-Type': 'application/json',
    //'x-correlation-id': uuid(),
  };
  const commonOptions = {
    method: 'GET',
    responseType: 'json',
    ...options,
  };
  return axios.get(endpoint,
    {
      ...commonOptions,
      headers: { ...commonHeaders, ...headers },
    })
    .then((response) => {
      if (commonOptions.responseType === 'arraybuffer') {
        return Buffer.from(response.data, 'binary');
      }
      return response.data;
    })
    .catch((error) => {
      throw new CustomException(error);
    });
}

function callPost(endpoint, body, headers, options = {}) {
  const commonHeaders = {
    'Content-Type': 'application/json',
    //'x-correlation-id': uuid(),
  };
  const commonOptions = {
    method: 'POST',
    responseType: 'json',
    ...options,
  };
  return axios.post(endpoint, body,
    {
      ...commonOptions,
      headers: { ...commonHeaders, ...headers },
    })
    .then(response => response.data)
    .catch((error) => {
      throw new CustomException(error);
    });
}

function callPut(endpoint, body, headers, options = {}) {
  const commonHeaders = {
    'Content-Type': 'application/json',
    //'x-correlation-id': uuid(),
  };
  const commonOptions = {
    method: 'POST',
    responseType: 'json',
    ...options,
  };
  return axios.put(endpoint, body,
    {
      ...commonOptions,
      headers: { ...commonHeaders, ...headers },
    })
    .then(response => response.data)
    .catch((error) => {
      throw new CustomException(error);
    });
}

module.exports = {
  callGet,
  callPost,
  callPut,
};
