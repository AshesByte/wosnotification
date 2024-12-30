const axios = require("axios");

function checkTime() {
  const now = new Date();
  const hours = now.getUTCHours();
  const minutes = now.getUTCMinutes();
  console.log(hours);
  if (hours === 23 && minutes === 55) {
    sendWebhook();
  }
}

function sendWebhook() {
  const webhookUrl =
    "https://discord.com/api/webhooks/1299958387521622036/zm8JwzteX6Wl0cravCDGy9M1F4j25V24blXMCs3qeGd6S_X9I0oGocycygm-NZOGadf7";
  const data = {
    content: "It is 11:55 PM UTC! @everyone",
  };

  axios
    .post(webhookUrl, data)
    .then((response) => {
      console.log("Webhook sent successfully:", response.data);
    })
    .catch((error) => {
      console.error("Error sending webhook:", error);
    });
}

async function startChecking() {
  while (true) {
    checkTime();
    await new Promise((resolve) => setTimeout(resolve, 10000)); // Wait for 1 minute
  }
}

startChecking();
