import React from "react";
import "../Styles/seller.css";
import Image from '../Assets/Image.jpg';
import Image1 from '../Assets/Image1.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faCartShopping, faCircleMinus, faIndianRupeeSign, faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import app from "../firebase";
import { getDatabase, set, ref, onValue } from "firebase/database";
import { useAuth } from "../contexts/AuthContext"
import { uid } from "./nav-seller";
//import {currentUser} from "../contexts/AuthContext"
import { child, get } from "firebase/database";
const db = getDatabase(app)
const dref = ref(db, "categories");

export default class Seller extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            load: 0,
            name:"",
            domain:""
        };
        console.log(uid);
        this.data = [{
            image: Image,
            name: "Product 1",
            price: 11999,
            view: 10,
            sold: 3
        }, {
            image: Image1,
            name: "Product 1",
            price: 12999, view: 10,
            sold: 3
        }, {
            image: Image,
            name: "Product 1",
            price: 13999,
            view: 10,
            sold: 3
        },
        {
            image: Image1,
            name: "Product 1",
            price: 14999,
            view: 10,
            sold: 3
        }, {
            image: Image,
            name: "Product 1",
            price: 15999,
            view: 10,
            sold: 3
        }, {
            image: Image1,
            name: "Product 1",
            price: 16999,
            view: 10,
            sold: 3
        }, {
            image: Image1,
            name: "Product 1",
            price: 16999,
            view: 10,
            sold: 3
        }
        ];
        this.cards = this.data.map((obj) => {
            return (
                <div className="card2">
                    <img src={obj.image} alt="none" />
                    <div className="content">
                        <h1>{obj.name}</h1>
                        <p><FontAwesomeIcon icon={faIndianRupeeSign} />{obj.price}</p>
                    </div>
                    <div className="stats">
                        <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
                        <label>{obj.view}</label>
                        <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
                        <label>{obj.sold}</label>
                    </div>
                    <a href=""><FontAwesomeIcon icon={faCircleMinus}></FontAwesomeIcon>   Remove</a>
                </div>
            );
        });
    }

    componentDidMount = async () => {
        const db=getDatabase(app)
        const dbRef = ref(db);
        get(child(dbRef, `seller/${uid}`)).then((snapshot) => {
            if (snapshot.exists()) {
                //this.setState({details:snapshot.val()});
                let a = snapshot.val();
                //console.log(a.address);
                this.setState({name:a.name,domain:a.domain})
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
        console.log(this.state.details);


        this.setState({ cards: [] });
        //const db = startFirebase();
        const dref = ref(db, "categories");
        onValue(dref, (snapshot) => {
            snapshot.forEach(element => {
                let a = element.val();
                console.log(Object.keys(a))
                Object.keys(a).forEach(key => {
                    console.log("a[key]");
                    Object.keys(a[key]).forEach(ele => {
                        let x = (/* <div className="card1">
                            <img src={a[key][ele]["img"]} alt="no"/>
                            <div className="content">
                                <h1>{a[key][ele]["seller"]}</h1>
                                <h2>{a[key][ele]["name"]}</h2>
                                <p>{a[key][ele]["price"]}</p>
                            </div>
                            <a href="">Buy now</a>
                        </div> */
                            <div className="card2">
                                <img src={a[key][ele]["img"]} alt="none" />
                                <div className="content">
                                    <h1>{a[key][ele]["name"]}</h1>
                                    <p><FontAwesomeIcon icon={faIndianRupeeSign} />{a[key][ele]["price"]}</p>
                                </div>
                                <div className="stats">
                                    <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
                                    <label>10</label>
                                    <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
                                    <label>3</label>
                                </div>
                                <a href=""><FontAwesomeIcon icon={faCircleMinus}></FontAwesomeIcon>   Remove</a>
                            </div>
                        );
                        this.setState((prevState) => { return { cards: [...(prevState.cards), x] } });
                        console.log(a[key][ele]["seller"]);
                        console.log(a[key][ele]["name"]);
                        console.log(a[key][ele]["price"]);
                    })
                    //  let y=( <br><h1>key</h1></br>)
                    //  this.setState( (prevState) => {return{cards: [...(prevState.cards),y]}});

                })
            })
        })
    }

    render() {
        return (
            <section>
                <h3>WELCOME {this.state.name.toUpperCase()}</h3>
                <div className="product-list">
                    {this.state.cards}
                </div>
            </section>
        );
    }
}
