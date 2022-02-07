import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import ShopS1 from "../components/shop-s1";

class Shop extends Component{
    render(){
        return(        
            <Container fluid className="minh-footer-adj p-0">
                <ShopS1/>
            </Container>    
        );
    }
}

export default Shop;