const express = require('express')
const cors = require('cors');
require('dotenv').config();


const app = express();
const port = process.env.PORT || 4000;

// middle wares
app.use(cors());
app.use(express.json());




async function run() {
    try{

    }
    finally{

    }
}

run().catch(err => console.error(err));



app.get('/', (req, res) => {
res.send('social media server is running');
});

app.listen(port, () => {
console.log(`social media server running on ${port}`);
})
