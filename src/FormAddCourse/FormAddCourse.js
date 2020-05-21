import React, { Component } from 'react';
import './FormAddCourse.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
class FormAddCourse extends Component {
  // constructor(props){
  // super(props);
  // this.state = {};
  // }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  render() {
    return (
      <div className="form-add-course">
        <h2 className="title">Add Course :</h2 >
        <Form onSubmit={this.props.handelSubmit}>
          <Form.Row>
            <Form.Group as={Col} >
              <Form.Control type="text" placeholder="What next?" name="course" />
            </Form.Group>
            <Button type="submit" className="btn">Add Course</Button>
          </Form.Row>
        </Form>
      </div>
    );
  }
}

export default FormAddCourse;