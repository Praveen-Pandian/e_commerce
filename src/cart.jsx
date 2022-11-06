import React from "react";
//import './Styles/products(1).css'


export default class Cart extends React.Component {
    constructor (props) {
        super(props);
        this.productList = this.setArray();
    }       
    setArray = () => {
        let cardsList = this.props.data;
        let cardIndex = this.props.cart;
        let arr = [];
        for (let i = 0; i < cardIndex.length; ++i) {
            arr.push(cardsList[cardIndex[i]]);
        }
        arr = arr.map(obj => {
            return (<div className="card">
            <img src={obj.image} alt="none" />
            <div className="content">
                <h1>{obj.name}</h1>
                <p>{obj.price}</p>
            </div>
        </div>)
        })
            
        return arr;
    }
    render() {
        return (
            <>
                {this.productList}
            </>
        );
    }
}