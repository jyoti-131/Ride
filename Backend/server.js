const http = require('http'); // Use 'http' unless you're working with HTTPS
const app = require('./app');
const port = process.env.PORT || 3000;

// Use the correct method to create the server based on your requirement
const server = http.createServer(app);

// Fix the template literal syntax
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
