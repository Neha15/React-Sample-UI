import React, { Component } from 'react';
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';
import Category from '../../components/Category/Category';
import axios from 'axios';
import SubCategory from '../../components/SubCategory/SubCategory';

class Home extends Component {
  state = {
    isCategoryClicked: false,
    subCategory: null
  }
  categoryClickHandler = (event, id) => {
    event.preventDefault();
    this.getSubcategories(id);
  }

  getSubcategories(categoryId) {
    let url = `http://localhost:9000/api/category/categoryId/${categoryId}/subcategory`;
    axios.get(url)
      .then(result => {
        let categoryDetails = {
        ...this.state,
        isCategoryClicked: true,
        subCategory: result.data
      }
      this.setState(categoryDetails);
      }).catch(err => {
        throw new Error(err);
      });
  }

  render() {
    let user = this.props.location.state;
    return (
      <Container>
        <Row>
            <Col xs={4} md={4}></Col>
            <Col xs={8} md={4}>
              <h2>Welcome {user.userDetails.firstName} {user.userDetails.lastName}</h2>
            </Col>
        </Row>
        <Row>
            <Col xs={2} md={2}>
              <Category categoryClicked={this.categoryClickHandler}/>
            </Col>
            { this.state.isCategoryClicked ?
              <Col>
                <SubCategory {...this.props} result={this.state.subCategory}/>
              </Col> : null }
        </Row>
      </Container>
    )
  }
    
}

export default Home;