const ComfyJS = require("comfy.js");
require('dotenv').config(); // Loads the env variables found in .env
ComfyJS.onCommand = ( user, command, message, flags, extra ) => {
  // New command that will greet someone with they type !hello in the chat
  if( command === "hello" ) {
    ComfyJS.Say("Hello, ${user}")
  }
}
ComfyJS.onChat = ( user, message, flags, self, extra ) => {
  // Logs all messages being sent to Twitch chat
  console.log( user, message );
}
// Uses our env variables to login as your Twitch user into the chat
ComfyJS.Init( process.env.TWITCHUSER, process.env.OAUTH );