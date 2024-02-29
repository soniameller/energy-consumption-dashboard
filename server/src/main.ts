import express from 'express';
import { syncDatabase } from './database/sequelize';
import routes from './routes/index';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();

app.use(express.json());
app.use('/api', routes);

app.get('/', (req, res) => {
  res.send({ message: 'Hello API' });
});

const startServer = async () => {
  try {
    await syncDatabase();
    app.listen(port, host, () => {
      console.log(`[ ready ] http://${host}:${port}`);
    });
  } catch (error) {
    console.error('Unable to start the server:', error);
  }
};

startServer();
