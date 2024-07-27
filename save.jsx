const sendTelegramMessage = async (message) => {
  try {
    await fetch('https://your-domain.com/sendTelegramMessage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });
    console.log('Message sent to Telegram bot');
  } catch (error) {
    console.error('Error sending message to Telegram bot:', error);
  }
};

// Call sendTelegramMessage when needed
