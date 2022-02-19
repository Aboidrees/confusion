import React, { Component } from "react";
import { Card, CardImg, CardTitle, CardImgOverlay } from 'reactstrap';
import DishDetail from "./DishDetailComponent";

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seletedDish: null
        }
    }

    onDishSelect(dish) {
        this.setState({ seletedDish: dish });
    }


    render() {
        const menu = this.props.dishes.map(dish => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card key={dish.id} onClick={() => this.onDishSelect(dish)}>
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
                <DishDetail dish={this.state.seletedDish} />
            </div>
        );
    }
}

export default Menu;