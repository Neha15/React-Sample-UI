import React, { Component } from 'react';
import {
    ListGroup
} from 'react-bootstrap';
import axios from 'axios';

class Category extends  Component {
    state = {
      categories: [],
      isCategoryLoaded: false
    }
    // const [ categories, setCategories] = useState([]);
    // const [ isCategoryLoaded, setIsCategoryLoaded] = useState(false);
    componentDidMount() {
      axios.get('http://localhost:9000/api/category')
      .then(response => {
        let categories = [];
        response.data.map((cat) => {
          categories.push(
              <ListGroup.Item key={cat._id} as="li" action onClick={(event) => this.props.categoryClicked(event, cat._id)}>
                {cat.name}
              </ListGroup.Item>)
          return categories;
        });
        let categoryDetails = {
          ...this.state,
          categories: categories,
          isCategoryLoaded: true
        }
        this.setState(categoryDetails);
      }).catch(err => {
        throw new Error('Error while getting categories', err);
      })
    }

    render() {
      let showCategory = this.state.isCategoryLoaded ? this.state.categories : null
      return (
        <ListGroup as="ul">
          {showCategory}
        </ListGroup>
      )
    }
    // useEffect(() => {
    //   axios.get('http://localhost:9000/api/category')
    //   .then(response => {
    //     response.data.map((cat) => {
    //       categories.push(
    //           <ListGroup.Item key={cat._id} as="li" action onClick={(event) => this.categoryClicked(event, cat._id)}>
    //             {cat.name}
    //           </ListGroup.Item>)
    //       return categories;
    //     });
    //     setCategories(categories);
    //     setIsCategoryLoaded(true);
    //   }).catch(err => {
    //     throw new Error('Error while getting categories', err);
    //   })
    // }, [])
   

    // let showCategory = isCategoryLoaded ? categories : null
    // return (
    //   <ListGroup as="ul">
    //     {showCategory}
    //   </ListGroup>
    // )
}

export default Category;