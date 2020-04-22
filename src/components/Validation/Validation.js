import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';

class Validation extends Component {
    render() {
        let content = (
            <Alert variant='danger'>
              Password did not match
            </Alert>
          )
        return (
            <div>
              {content}
            </div>
        )
    }
}

export default Validation;