import React, { Component } from "react";
import { Card, CardBody, CardImg, CardTitle, CardText, CardImgOverlay } from 'reactstrap';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seletedDish: null
        }
    }

    onDishSelect(dish){
        this.setState({seletedDish: dish});
    }

    renderDish(dish){
        if(dish != null){
            return (
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }

        return <div></div>;
    }

    render() {
        const menu = this.props.dishes.map(dish => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card key={dish.id} onClick={()=>this.onDishSelect(dish)}>
                        <CardImg width={"100%"} src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">{menu}</div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.state.seletedDish)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;