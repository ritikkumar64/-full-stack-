exports.chatHandler = (req, res) => {
  const userMessage = req.body.message.toLowerCase();
  let response = "I didn't understand that. Please ask something else.";

  if (userMessage.includes("top 5 most sold")) {
    response = "Top 5 products: 1) Classic T-shirt, 2) Hoodie, 3) Jeans, 4) Cap, 5) Jacket";
  } else if (userMessage.includes("order id")) {
    response = "Order status: Your order is in transit.";
  } else if (userMessage.includes("left in stock")) {
    response = "There are 120 Classic T-Shirts left in stock.";
  }

  res.json({ response });
};