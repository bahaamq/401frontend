import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
 class ShowFav extends Component {
    render() {
        return (
            <div>
                <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={this.props.img} />
  <Card.Body>
    <Card.Title>{this.props.name}</Card.Title>
    <Card.Text>
    {this.props.level}
    </Card.Text>
    <Button variant="primary" onClick={() => this.props.addtofav(this.props.dig)} >Add to fav</Button>
  </Card.Body>
</Card>
            </div>
        )
    }
}

export default ShowFav
