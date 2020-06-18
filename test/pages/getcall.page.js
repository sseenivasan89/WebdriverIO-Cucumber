const axios = require('axios')
const jsonData = require('../utils/data.js');

const {callGet} = require("../utils/apiHelper.js")

const getMethod = async() => {
    try {
      const res = await callGet(jsonData['getCallEndPoint'],

      )
      console.log('****reading data from resposnes**** = '+res.data[0].employee_name)
      console.log('****reading data from resposnes**** = '+res.data[1].employee_name)
    } catch (error) {
      console.error(error)
    }
  }
 
  module.exports = {
    getMethod
  }
  