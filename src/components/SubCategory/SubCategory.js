import React from 'react';
import { Card, Button, CardDeck } from 'react-bootstrap';

const subCategory = (props) => {

  const goToProducts = (event) => {
    event.preventDefault();
    props.history.push({
      pathname: '/products',
      details: props.result
    });
  }
  
  let subCategories = [];
   props.result.name.map((name) => {
      subCategories.push(
        <div key={name}>
          <CardDeck>
            <Card bg="info" style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary" onClick={(event) => goToProducts(event)}>Explore</Button>
              </Card.Body>
            </Card>
          </CardDeck>
          <br />
        </div>
      )
      return subCategories;
    })

    return (
      <div>
        {subCategories} 
      </div>
    )
}

export default subCategory;