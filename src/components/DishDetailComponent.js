import React, { Component } from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';


class DishDetail extends Component {

    renderComments = (comments) => {
        if (comments != null) {
            return (
                <>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {comments.map(comment =>
                            <div key={comment.id}>
                                <li className="mb-3" key={comment.id}>{comment.comment}</li>
                                <li className="mb-4" key={comment.id + 'a'}>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</li>
                            </div>
                        )}
                    </ul>
                </>
            );
        }

        return <div></div>;
    }

    render() {
        if (this.props.dish != null) {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <Card>
                                <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
                                <CardBody>
                                    <CardTitle>{this.props.dish.name}</CardTitle>
                                    <CardText>{this.props.dish.description}</CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            {this.renderComments(this.props.dish.comments)}
                        </div>
                    </div>
                </div>
            );
        }

        return <div></div>;
    }
}

export default DishDetail;