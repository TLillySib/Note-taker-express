const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// ROUTER
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

// LISTENER
// The below code effectively "starts" our server
app.listen(PORT, () => {
    console.log(`Server listening on: http://localhost:${PORT}`);
});
