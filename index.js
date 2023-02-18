const express = require('express')
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();


const app = express();
const port = process.env.PORT || 4000;

// middle wares
app.use(cors());
app.use(express.json());






const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.xwlx9fx.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });







async function run() {
    try {
        const orderCollection = client.db('socialMedia').collection('orders');




        //orders api
        app.get('/orders', async (req, res) => {
            let query = {};

            if(req.query.email){
                query ={
                    email: req.query.email
                }
            }
            
            const cursor = orderCollection.find(query);
            const orders = await cursor.toArray();
            res.send(orders);

        })




        app.post('/orders', async (req, res) => {
            const order = req.body;
            const result = await orderCollection.insertOne(order);
            res.send(result);
        })






    }
    finally {

    }
}

run().catch(err => console.error(err));



app.get('/', (req, res) => {
    res.send('social media server is running');
});

app.listen(port, () => {
    console.log(`social media server running on ${port}`);
})
