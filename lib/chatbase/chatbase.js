// Imports
const config = require('../../config');

// Globals
const chatbaseKey = config.chatbaseKey;

// Chatbase setup
const chatbase = require('@google/chatbase');
chatbase.setApiKey(chatbaseKey);

let sendMessage = (message, callback) => {
  let chatbaseMessage = chatbase.newMessage(chatbaseKey)
      .setAsTypeUser()
      .setPlatform('Conversational UI')
      .setMessage(message)
      .setVersion('1.0')
      .setUserId('test-user-1')
      .send()
      .then(message => console.log(message))
      .catch(err => console.log('Unable to connect to Chatbase, Error:', err))
}

module.exports.sendMessage = sendMessage;
