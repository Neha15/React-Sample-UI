import React,  { Component } from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Col,
  Row,
  ListGroup,
  CardDeck,
  Card,
  Button
} from 'react-bootstrap';
import axios from 'axios';

class Favourites extends Component {
  state = {
    favs: []
  }

  componentDidMount() {
    let url = `http://localhost:9000/api/favourites/user/${this.props.user._id}`;
    axios.get(url)
      .then(response => {
        let details = {
          ...this.state,
          favs: response.data
        }
        this.setState(details);
      }).catch(err => {
        this.props.history.push('/');
      })
  }

  render() {
    let content = null;
    if(this.state.favs.length > 0) {
      let favorites = [];
      this.state.favs.map(fav => {
        favorites.push(
          <Row key={fav._id}>
            <Col>
              <CardDeck>
                <Card bg="light" style={{ width: '10rem' }}>
                  <Card.Body>
                    <Card.Title>{fav.name}</Card.Title>
                    <Card.Text>
                      {fav.description}
                    </Card.Text>
                      <Button variant="primary">Price: {fav.price}</Button>{' '}
                  </Card.Body>
                </Card>
              </CardDeck>
            </Col>
          </Row>
        )
        return favorites;
      });
      content = favorites;
    }
    return (
      <React.Fragment>
        <Container>
          <Row>
            <Col xs={4} md={4}></Col>
            <Col xs={8} md={4}>
              <h2>Favourites</h2>
            </Col>
        </Row>
        {content}
        </Container>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Favourites);