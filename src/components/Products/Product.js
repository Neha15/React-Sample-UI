import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Button, CardDeck } from 'react-bootstrap';
import axios from 'axios';

class Products extends Component {
  state =  {
    products: [],
    isFavAdded: {}
  }
  componentDidMount() {
    let url = `http://localhost:9000/api/category/categoryId/${this.props.location.details.category}/subcategory/${this.props.location.details._id}/products`;
    axios.get(url)
      .then(response => {
        let details = {
          ...this.state,
          products: response.data
        }
        this.setState(details);
      }).catch(err => {
        this.props.history.push('/');
      })
  }

  addFavorites = (event, prodId) => {
    event.preventDefault();
    let url = 'http://localhost:9000/api/favourites';
    let data = {
      product: prodId,
      user: this.props.user._id
    }
    axios.post(url, data)
      .then(() => {
        let details = {
          ...this.state,
          isFavAdded : {
            ...this.state.isFavAdded,
            [prodId]: true
          }
        }
        this.setState(details);
      }).catch(err => {
        this.props.history.push('/')
      })
  };

  goToFavourites = (event) => {
    event.preventDefault();
    this.props.history.push('/favourites');
  }


  render() {
    let productList = [];
    let content = null;
    if(this.state.products.length > 0) {
      this.state.products.map(prod => {
        productList.push(
          <CardDeck key={prod._id}>
          <Card style={{ width: '10rem' }}>
            <Card.Body>
              <Card.Title>{prod.name}</Card.Title>
              <Card.Text>
                {prod.description}
              </Card.Text>
              <Button variant="primary">Add To Cart</Button>{' '}
              { this.state.isFavAdded[prod._id] ? 
                <Button variant="info" onClick={(e) => this.goToFavourites(e)}>Go To Favorites</Button> : 
                <Button variant="primary" onClick={(e) => this.addFavorites(e, prod._id)}>Add To Favorites</Button>
              }
            </Card.Body>
          </Card>
          </CardDeck>
        )
        return productList;
      });
      content = productList;
    }
   
    return (
     <React.Fragment>
      {content}
     </React.Fragment>
      
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Products);