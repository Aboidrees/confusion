import React, { Component } from "react";
import { Card, CardImg, CardTitle, CardImgOverlay } from 'reactstrap';

class Menu extends Component {

    menu = this.props.dishes.map(dish => {
        return (
            <div key={dish.id} className="col-12 col-md-5 m-1">
                <Card onClick={() => this.props.onClick(dish.id)}>
                    <CardImg width={"100%"} src={dish.image} alt={dish.name} />
                    <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                </Card>
            </div>
        );
    });

    render() {

        return (
            <div className="container">
                <div className="row">{this.menu}</div>
            </div>
        );
    }
}

export default Menu;