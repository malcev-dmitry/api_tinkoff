const nodes = require('./okveds.json');

// Route the app
const router = app => {
    // Display welcome message on the root
    app.get('/', (request, response) => {
        response.send({
            message: 'Welcome to the Node.js Express REST API!'
        });
    });

    // Display all users
    app.get('/nodes', (request, response) => {
        response.send(nodes);
    });
};

// Export the router
module.exports = router;