import React, { useEffect } from "react";

const BotpressChatbot = () => {
  useEffect(() => {
    // Dynamically create a script element for Botpress webchat
    const script = document.createElement("script");
    script.src = "https://cdn.botpress.cloud/webchat/v1/inject.js";
    script.async = true;

    // Callback function to handle script load or error
    const handleScriptLoad = () => {
      // After the script is loaded, initialize the Botpress webchat
      window.botpressWebChat.init({
        composerPlaceholder: "Chat with Studu",
        botConversationDescription:
          "This chatbot was built surprisingly fast with Botpress",
        botId: "b0505274-49e6-4871-ae9a-2e0619cf4edd",
        hostUrl: "https://cdn.botpress.cloud/webchat/v1",
        messagingUrl: "https://messaging.botpress.cloud",
        clientId: "b0505274-49e6-4871-ae9a-2e0619cf4edd",
        webhookId: "35e86627-5d36-4919-9e21-97c8414d2c3a",
        lazySocket: true,
        themeName: "prism",
        botName: "Studu",
        stylesheet:
          "https://webchat-styler-css.botpress.app/prod/32fc3a71-ae8f-4f3f-90fb-30ead2adc5e5/v97733/style.css",
        frontendVersion: "v1",
        useSessionStorage: true,
        enableConversationDeletion: true,
        theme: "prism",
        themeColor: "#2563eb",
      });
    };

    const handleScriptError = (error) => {
      console.error("Error loading Botpress webchat script:", error);
    };

    // Add event listeners for script load and error events
    script.addEventListener("load", handleScriptLoad);
    script.addEventListener("error", handleScriptError);

    // Append the script to the document body
    document.body.appendChild(script);

    // Cleanup function to remove event listeners and the script when the component unmounts
    return () => {
      script.removeEventListener("load", handleScriptLoad);
      script.removeEventListener("error", handleScriptError);
      document.body.removeChild(script);
    };
  }, []); // Empty dependency array ensures the effect runs only once

  return <div>{/* Your React component content */}</div>;
};

export default BotpressChatbot;
