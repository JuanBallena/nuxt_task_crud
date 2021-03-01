import express from 'express';
import cors from 'cors';
import router from './router/router';

const app = express();

app.set('port', process.env.PORT || 4000);
app.set('json spaces', 4); 

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); 

app.use('/api', router)

app.listen(app.get('port'), function () {
    console.log("Server port " + app.get('port'));
}); 

module.exports = app;
