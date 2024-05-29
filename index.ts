import * as express from "express";
import * as path from "path";
import { Samsung } from "./designPatterns/templateMethod";
import { SingleTon } from "./designPatterns/singleton";

const app = express();
const port = parseInt(process.env.PORT) || process.argv[3] || 6001;

app.use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/api', (req, res) => {
  res.json({"msg": "Hello paras"});
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});

// this is use for template methods
const newTv = new Samsung()
console.log(newTv.powerOn())
console.log(newTv.proterties.height)

//singleton method 
const newInstance = SingleTon.getInstance()
const newInstance1 = SingleTon.getInstance()
console.log(SingleTon.getCount())
console.log(SingleTon.getCount())