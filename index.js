import bodyParser from "body-parser";
import express, { response } from "express";
import axios from "axios";

const app = express();
const PORT=3000;

const api_url="https://v2.jokeapi.dev/joke/Any?type=single"

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",async(req, res)=>{
    const response = await axios.get(api_url)
    const data= response.data;
    res.render("index.ejs",{data_inbound:data.joke});
});

app.post("/",async (req, res)=>{
    // response.send("post method sent");
    const response = await axios.get(api_url)
    const data= response.data;
    res.render("index.ejs",{data_inbound:data.joke});
});

app.listen(PORT,()=>{
    console.log("server running on prot: "+ PORT );
})