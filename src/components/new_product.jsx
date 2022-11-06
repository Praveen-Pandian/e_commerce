import React from "react";
import { Alert } from "react-bootstrap"
import "../Styles/new_prod.css";
import app from "../firebase";
import { getDatabase,set,ref ,onValue} from "firebase/database";;
const db = getDatabase(app)
const dref = ref(db, "categories");

export default class NewProduct extends React.Component{
    constructor(){
        super();
        this.state = {
            name:"",
            price:0,
            url:"",
            category:"",
            sub_category:"",
            seller:"",
            stock:0,
            alert:""
        }
    }

    submitForm = async (evt) =>{
        evt.preventDefault();   
        const obj={name: this.state.name,price:this.state.price,img:this.state.url,seller:this.state.seller,stock:this.state.stock};
        await set(ref(db, 'categories/' +this.state.category+"/"+this.state.sub_category+'/'+this.state.name),obj );
        console.log(obj);
       this.setState({alert:"Your product has been added"})
    }

    render(){
        return(
            <div className="card1-new">
                {this.state.alert&&<Alert variant="success">{this.state.alert}</Alert>}
                <form  class ="form-1" onSubmit={this.submitForm}>  
                    <label>CATEGORY</label>
                    <input type="text" placeholder="Category" required onChange={(evt)=>this.setState({category:evt.target.value})}/>
                    <label>SUB CATEGORY</label>
                    <input type="text" placeholder="Sub Category" required onChange={(evt)=>this.setState({sub_category:evt.target.value})}/>
                    <label>PRODUCT NAME</label>
                    <input type="text" placeholder="Name" required onChange={(evt)=>this.setState({name:evt.target.value})}/>
                    <label>PRICE</label>
                    <input type="number" placeholder="Price" required onChange={(evt)=>this.setState({price:evt.target.value})}/>
                    <label>STOCK</label>
                    <input type="number" placeholder="No. of items" required onChange={(evt)=>this.setState({stock:evt.target.value})}/>
                    <label>PHOTO URL</label>
                    <input type="text" placeholder="URL" required onChange={(evt)=>this.setState({url:evt.target.value})}/>
                    <label>SELLER</label>
                    <input type="text" placeholder="Seller Name" required onChange={(evt)=>this.setState({seller:evt.target.value})}/>
                    <button to="/" id="submit" >SUBMIT</button>
                </form>
            </div>
        )
    }
}