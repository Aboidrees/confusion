import React, { Component } from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';


class DishDetail extends Component {


    renderComments(comments) {
        if(comments != null ){
            return (
                <>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {comments.map(comment => 
                            <>
                                <li className="mb-3" key={comment.id}>{comment.comment}</li>
                                <li className="mb-4" key={comment.id+'a'}>-- {comment.author}, {comment.date}</li>
                            </>
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
            );
        }

        return <div></div>;
    }
}

export default DishDetail;