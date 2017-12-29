const request = require('request');
const config = require('../../config');

// Dialogueflow API
const dialogueFlowAccessToken = config.dialogueFlowAccessToken;
const dialogueFlowApi = "https://api.api.ai/v1/"

let sendMessage = (message, callback) => {
  request({
    method: 'POST',
    url: dialogueFlowApi  + "query?v=20170712",
    json: true,
    body: {
      query:message,
      lang:"en",
      sessionId:"SESSION_ID"
    },
    headers: {
      'Authorization': 'Bearer ' + dialogueFlowAccessToken,
      'Content-Type': 'application/json; charset=utf-8',
    }
  }, (error, response, body) => {
    if (error) {
      callback('Unable to connect to Dialogueflow, Error:', error)
    } else if (body.code === 400) {
      callback(body.error);
    } else {
      callback(undefined, {
        message: body
      })
    }
  });
}

let returnMessage = (message, callback) => {
	
}

module.exports = {sendMessage, returnMessage};
