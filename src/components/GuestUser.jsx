import React from "react";
import '../Styles/products.css';
import Image from '../Assets/Image.jpg';
import Image1 from '../Assets/Image1.png';
import GNavBar from "./Guestnav";
import app from "../firebase";
import { getDatabase,set,ref ,onValue} from "firebase/database";;
const db = getDatabase(app)
const dref = ref(db, "categories");
export default class Guest extends React.Component {

    constructor() {
        super();
        console.log();
        this.state = {
            sort: "0-1",
            cards:[]
        };
        this.data = [{
            image: Image,
            name: "Product 1",
            price: 11999
        }, {
            image: Image1,
            name: "Product 1",
            price: 12999
        }, {
            image: Image,
            name: "Product 1",
            price: 13999
        },
        {
            image: Image1,
            name: "Product 1",
            price: 14999
        }, {
            image: Image,
            name: "Product 1",
            price: 15999
        }, {
            image: Image1,
            name: "Product 1",
            price: 16999
        }, {
            image: Image1,
            name: "Product 1",
            price: 16999
        }
        ];
        this.cards = []
        /* this.cards = this.data.map((obj) => {
            return (
                <div className="card">
                    <img src={obj.image} alt="none" />
                    <div className="content">
                        <h1>{obj.name}</h1>
                        <p>{obj.price}</p>
                    </div>
                    <a href="">Buy now</a>
                </div>
            );
        });   */
    }

    componentDidMount = async () => {
        this.setState({cards:[]});
        //const db = startFirebase();
         const dref = ref(db, "categories");
         onValue(dref, (snapshot) => {
            snapshot.forEach(element => {
                let a = element.val();
                console.log( Object.keys(a))
                Object.keys(a).forEach(key => {
                  console.log("a[key]");
                          Object.keys(a[key]).forEach(ele=>{
                            let x = (<div className="card1">
                            <img src={a[key][ele]["img"]} alt="no"/>
                            <div className="content">
                                <h1>{a[key][ele]["seller"]}</h1>
                                <h2>{a[key][ele]["name"]}</h2>
                                <p>{a[key][ele]["price"]}</p>
                            </div>
                            <button disabled>Buy now</button>
                        </div>);
                        this.setState( (prevState) => {return{cards: [...(prevState.cards),x]}});         
                          console.log(a[key][ele]["seller"]);
                          console.log(a[key][ele]["name"]);
                          console.log(a[key][ele]["price"]); 
                          })
                        //  let y=( <br><h1>key</h1></br>)
                        //  this.setState( (prevState) => {return{cards: [...(prevState.cards),y]}});

                        })})})
        
       // window.location.reload(); 
       
       /*  onValue(dref, (snapshot) => {
            snapshot.forEach(element => {
                let a = element.val();
                console.log( Object.keys(a))
                Object.keys(a).forEach(key => {
                  console.log("a[key]");
                          Object.keys(a[key]).forEach(ele=>{
                              
                          console.log(a[key][ele]["seller"]);
                          console.log(a[key][ele]["name"]);
                          console.log(a[key][ele]["price"]); 
                          })
            

                  
                  //console.log(a[key]);
              })})}) */
    } 

   cardGenerator = () => {
        if (this.state.sort === "1-0")
            this.data.sort((a, b) => b.price - a.price);
        else if (this.state.sort === "0-1")
            this.data.sort((a, b) => a.price - b.price);
        this.cards = this.data.map((obj) => {
            return (
                <div className="card1">
                    <img src={obj.image} alt="none" />
                    <div className="content">
                        <h1>{obj.name}</h1>
                        <h1></h1>
                        <p>{obj.price}</p>
                    </div>
                    <a href="">Buy now</a>
                </div>
            );
        });
    }

    updateSort = (evt) => {
        this.setState({ sort: evt.target.value });
        this.cardGenerator();
    } 
    render(){
         console.log(...(this.state.cards));
        return (
            <>
            <GNavBar/>
            <div className="product-list" >
                <div className="sorting">
                    <select onChange={this.updateSort} id="sort">
                        <option value="0-1">Low to High</option>
                        <option value="1-0">High to Low</option>
                        <option>Recommended</option>
                        <option>Highest Rated</option>
                    </select>
                    <button onClick={this.cardGenerator}>FETCH</button>
                </div>
                {this.state.cards}
            </div >
            </>
        ); 
        
    }
}
