exports.handler = async (event, context) => {
  if (event.httpMethod === 'POST') {
    const { name, email, message } = JSON.parse(event.body); 
    return {
      statusCode: 200,
      body: JSON.stringify({ message: Thanks, ${name}! We received your email: ${email} and message: ${message} }),
    };
  }
  return {
    statusCode: 400,
    body: JSON.stringify({ message: 'Only POST requests are allowed' }),
  };
};
