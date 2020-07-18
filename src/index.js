import ComfyJS from "comfy.js";
ComfyJS.onCommand = ( user, command, message, flags, extra ) => {
  if( command === "test" ) {
    console.log( "!test was typed in chat" );
  }
}
// Code below listens to all chat messages and logs them out
ComfyJS.onChat = ( user, message, flags, self, extra ) => {
  console.log( user, message );
}
ComfyJS.Init( "codingzeal" );