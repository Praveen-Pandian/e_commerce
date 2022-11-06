import React from "react";
import '../Styles/products.css';
//import db1 from "../sellerFirebase";
//import { ref as sref, onValue } from "firebase/database";
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Cart from './cart';
const data = require('../data.json');

export default class Product extends React.Component {
    constructor(props) {
        super(props);
        console.log();
        this.state = {
            sort: "0-1",
            cart : [],
            showCart : false
        };
        this.userInterest = "accessories";
        this.pastProducts = ["clothing","cosmetics","accessories"];
        this.data = this.getData().sort((a, b) => +a.price - +b.price);
        this.cards = [];
        this.cards = this.data.map((obj) => {
            return (
                <div className="card">
                    <img src={obj.img} id="card-img" alt="none"/>
                    <div className="content">
                        <h1>{obj.name}</h1>
                        <p>₹{obj.price}</p>
                    </div>
                    <button onClick={this.openPopup}>Buy Now</button>
                    <button onClick={this.addToCart} value = {this.data.indexOf(obj)}>Add to Cart</button>
                </div>
            );
        });  
    }
    openPopup = () => {
        alert("The requested items will be dispatched!");
    }
    addToCart = (event) => {
        this.setState(prevState => {
            return {cart : [...prevState.cart,+event.target.value]}
        })
    }
    getData = () => {
        let outArr = [];
        let Categories = data.categories;
        console.log(data.categories)
        Object.keys(Categories).forEach(subCategory => {
            Object.keys(Categories[subCategory]).forEach(ProductList => {
                Object.keys(Categories[subCategory][ProductList]).forEach(Product => {
                    outArr.push(Categories[subCategory][ProductList][Product]);
                })
            })
        })
        let finalArr = [];
        let prod1 = Math.floor(Math.random() * (28 - 0 + 1)) + 0;
        let prod2 = Math.floor(Math.random() * (28 - 0 + 1)) + 0;
        if (prod1 == prod2) {
            prod2 = Math.floor(Math.random() * (28 - 0 + 1)) + 0;
        }
        finalArr.push(outArr[prod1],outArr[prod2]);
        outArr = outArr.filter(prod => {
            if (prod.name == outArr[prod1].name || prod.name == outArr[prod2].name) {
                return false;
            } else {
                return true;
            }
        });
        let userInterestArr = [];
        outArr.forEach(prod => {
            if (prod.category == this.userInterest) {
                userInterestArr.push(prod);
            }
        })
        let prod3 = Math.floor(Math.random() * (userInterestArr.length - 0 + 1)) + 0;
        let prod4 = Math.floor(Math.random() * (userInterestArr.length - 0 + 1)) + 0;
        if (prod4 == prod3) {
            prod4 = Math.floor(Math.random() * (userInterestArr.length - 0 + 1)) + 0;
        }
        finalArr.push(outArr[prod4],outArr[prod4]);
        outArr = outArr.filter(prod => {
            if (prod.name == outArr[prod4].name || prod.name == outArr[prod3].name) {
                return false;
            } else {
                return true;
            }
        });
        let past1 = [];
        outArr.forEach(prod => {
            if (prod.category == this.pastProducts[0]) {
                past1.push(prod);
            }
        })
        let prod5 = Math.floor(Math.random() * (past1.length - 0 + 1)) + 0;
        let prod6 = Math.floor(Math.random() * (past1.length - 0 + 1)) + 0;
        if (prod6 == prod5) {
            prod5 = Math.floor(Math.random() * (past1.length - 0 + 1)) + 0;
        }
        finalArr.push(outArr[prod5],outArr[prod6]);
        outArr = outArr.filter(prod => {
            if (prod.name == outArr[prod5].name || prod.name == outArr[prod6].name) {
                return false;
            } else {
                return true;
            }
        });
        let past2 = [];
        outArr.forEach(prod => {
            if (prod.category == this.pastProducts[1]) {
                past2.push(prod);
            }
        })
        let prod7 = Math.floor(Math.random() * (past2.length - 0 + 1)) + 0;
        let prod8 = Math.floor(Math.random() * (past2.length - 0 + 1)) + 0;
        if (prod7 == prod8) {
            prod7 = Math.floor(Math.random() * (past1.length - 0 + 1)) + 0;
        }
        finalArr.push(outArr[prod7],outArr[prod8]);
        outArr = outArr.filter(prod => {
            if (prod.name == outArr[prod7].name || prod.name == outArr[prod8].name) {
                return false;
            } else {
                return true;
            }
        });
        let past3 = [];
        outArr.forEach(prod => {
            if (prod.category == this.pastProducts[2]) {
                past3.push(prod);
            }
        })
        let prod9 = Math.floor(Math.random() * (past3.length - 0 + 1)) + 0;
        let prod10 = Math.floor(Math.random() * (past3.length - 0 + 1)) + 0;
        if (prod9 == prod10) {
            prod9 = Math.floor(Math.random() * (past3.length - 0 + 1)) + 0;
        }
        finalArr.push(outArr[prod9],outArr[prod10]);
        outArr = outArr.filter(prod => {
            if (prod.name == outArr[prod9].name || prod.name == outArr[prod10].name) {
                return false;
            } else {
                return true;
            }
        });
        return finalArr;
    }
    generateDiscount = () => {
        let outProd = this.data[Math.floor(Math.random() * (33 - 0 + 1) + 0)];
        outProd = (<div className="card">
        <img src={outProd.img} id="card-img" alt="none" />
        <div className="content">
            <h4>DISCOUNT -20%</h4   >
            <h1>{outProd.name}</h1>
            <p>original : ₹{outProd.price}</p>
            <p>new Price: ₹{+outProd.price-(0.2 * +outProd.price)}</p>
        </div>
        <button onClick={this.openPopup}>Buy Now</button>
        <button onClick={this.addToCart} value = {this.data.indexOf(outProd)}>Add to Cart</button>
        </div>);
        this.discountCard = outProd;
    }
    // componentDidMount = async () => {
    //     this.setState({cards:[]});
    //     //const db = startFirebase();
    //     const dref = sref(db1, "category");
    //     onValue(dref, (snapshot) => {
    //         snapshot.forEach(element => {
    //             let a = element.val();
    //             console.log(typeof a)
    //             Object.keys(a).forEach(key => {
    //                     let x = (<div className="card">
    //                         <img src={a[key]["img"]} alt="no"/>
    //                         <div className="content">
    //                             <h1>{a[key]["seller"]}</h1>
    //                             <h2>{a[key]["name"]}</h2>
    //                             <p>{a[key]["price"]}</p>
    //                         </div>
    //                         <a href="">Buy now</a>
    //                     </div>);

    //                     this.setState( (prevState) => {return{cards: [...(prevState.cards),x]}});
                

    //             });
    //              /* console.log("Cards");
    //             console.log(this.cards); */
    //         })
    //     })
    //    // window.location.reload();
    // } 

    cardGenerator = () => {
        if (this.state.sort === "1-0")
            this.data.sort((a, b) => +b.price - +a.price);
        else if (this.state.sort === "0-1")
            this.data.sort((a, b) => +a.price - +b.price);
        this.cards = this.data.map((obj) => {
            return (
                <div className="card">
                    <img src={obj.img} id="card-img" alt="none" />
                    <div className="content">
                        <h1>{obj.name}</h1>
                        <p>₹{obj.price}</p>
                    </div>
                    <button onClick={this.addToCart} value = {this.data.indexOf(obj)}>Add to Cart</button>
                </div>
            );
        });
    }

    updateSort = (evt) => {
        this.setState({ sort: evt.target.value });
        this.cardGenerator();
    }
    clearCart = () => {
        this.setState({cart  : []})
    }
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route exact path='/' element={
                        <>
                        <div className="product-list" >
                            <div className="sorting">
                                <select onChange={this.updateSort} id="sort">
                                    <option value="0-1">Low to High</option>
                                    <option value="1-0">High to Low</option>
                                    <option>Recommended</option>
                                    <option>Highest Rated</option>
                                </select>
                                <button onClick={this.updateSort}>FETCH</button>
                            </div>
                            <button onClick={this.getData}>data</button>
                             <Link to = "/cart">VIEW CART</Link> 
                             <br />
                             <button onClick={this.clearCart}>Clear Cart</button>
                            <div >
                            Cart: {this.state.cart.length}
                                </div>  
                            <h1>{this.discountCard}</h1>                         
                            {this.cards}
                            </div >
                        </>
                    }></Route>
                    <Route path='/cart' element={<Cart data={this.data} cart={this.state.cart}></Cart>}></Route>
                </Routes>
            </BrowserRouter>
        );
    }
}