import React from "react";
import '../Styles/products.css'


export default class Cart extends React.Component {
    constructor (props) {
        super(props);
        
        this.state = {
            productList : []
        };
        this.sum = 0;
    }       
    componentDidMount = () => {
        console.log(this.props.cart,this.props.data);
        let cardsList = this.props.data;
        let cardIndex = this.props.cart;
        let arr = [];
        let Tsum = 0;
        for (let i = 0; i < cardIndex.length; ++i) {
            arr.push(cardsList[cardIndex[i]]);
        }
        arr = arr.map(obj => {
            Tsum += (+(obj.price));
            return (<div className="card">
            <img src={obj.img} alt="none" />
            <div className="content">
                <h1>{obj.name}</h1>
                <p>{obj.price}</p>
            </div>
        </div>)
        })
        this.sum = Tsum;
        this.setState({productList : [...arr]});
    }
    buyAll = () => {
        console.log("SUM of Price:",this.sum);
    }
    render() {
        return (
            <>
                <button>click me</button>
                <button style={{color : "white", backgroundColor: "blue"}} onClick={this.buyAll}>Buy all</button>
                {this.state.productList}
            </>
        );
    }
}