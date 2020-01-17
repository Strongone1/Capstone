
import { Header, Nav, Main, Footer } from "./components";
//console.log(Header, Nav, Footer, Main);

axios
.get("https://jsonplaceholder.typicode.com/photos")
.then(photos =>{
  console.log(photos);
});
('success!');
