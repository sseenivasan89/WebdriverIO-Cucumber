const axios = require('axios')
const {payLoad} = require("../utils/payload.js");
const {callPost} = require("../utils/apiHelper.js")
const jsonData = require('../utils/data.js');

const postMethod = async() => {
    try {
      const res = await callPost(jsonData['postCallEndPoint'],
          payLoad()
      )
      //console.log(res)
      console.log('****reading data from resposnes**** = '+res.data.name)
    } catch (error) {
      console.error(error)
    }
  }
 
  module.exports = {
    postMethod
  }
  