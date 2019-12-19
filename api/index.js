import config from 'dotenv'
import express from 'express'
import bodyParser from 'body-parser'
import routes from './server/routes/routes'

config.config();

const port = 3001;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use('/api/v1', routes);

app.get('*', (request, response) => {
    console.log(`URL: ${request.url}`);
    response.send('Hello World');
});
const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);
    console.log(`Server is listening on port ${server.address().port}`)
});

export default app;