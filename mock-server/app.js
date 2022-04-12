// eslint-disable-next-line @typescript-eslint/no-var-requires,no-undef
const express = require('express');
// eslint-disable-next-line @typescript-eslint/no-var-requires,no-undef
const apiMocker = require('connect-api-mocker');

const port = 4000;
const app = express();

app.use('/api', apiMocker('mock-server/api'));

console.log(`Mock API Server is up and running at: http://localhost:${port}`);
app.listen(port);
