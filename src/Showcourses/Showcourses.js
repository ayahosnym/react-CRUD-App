import React, { Component, Fragment } from 'react';
import './Showcourses.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
class Showcourses extends Component {
  //
  state = {
    isEdit: true,
    courseName: "",
    courseAfterEdit: ""
  }
  //
  edit = (course) => {
    // this.props.courseName(course)
    let courseName = course.courseName;
    const isEdit = this.state.isEdit;
    this.setState({ isEdit: !isEdit, courseName: courseName })
  }
  //
  CoursesHeader = () => {
    return (
      <thead >
        <tr>
          <th>Course Name</th>
          <th>Actions</th>
        </tr>
        <tr className="space"></tr>
      </thead>
    )
  }
  //
  handelEditSubmit = (e) => {
    let oldCourseName = this.state.courseName
    let isEdit = this.state.isEdit
    e.preventDefault()
    let courseAfterEdit = e.target.elements.courseAfterEdit.value
    console.log(courseAfterEdit);
    this.props.courseNameAfterEdit(courseAfterEdit, oldCourseName)
    this.setState({ isEdit: !isEdit,courseAfterEdit })
    e.target.reset();

  }
  render() {
    const isEdit = this.state.isEdit;
    const { courses } = this.props;

    //  here I get data from form which user add it and  show this course 
    const allCourses = courses.map((course, index) => {
      let { courseName } = course
      return (
        <Fragment>
          <tr key={index}>
            <td className=" course-name font-weight-bold text-capitalize">{course.courseName}</td>
            <td className="text-end">
              <button className="button muted-button mr-3 edit-course" onClick={() => { this.edit({ courseName }) }}>Edit</button>
              <button className="button muted-button delete-course" onClick={() => { this.props.handelDeleteCourse(index) }}>Delete</button>
            </td>
          </tr>
          <tr className="d-block mb-3"></tr>
        </Fragment>
      )
    })

    // here I make form to show it when user click edit button c
    const FormToEdit = () => {
      let courseName = this.state.courseName
      return (
        <tr>
          <td>
            <form onSubmit={this.handelEditSubmit}>
              <input type="text" defaultValue={courseName} name="courseAfterEdit" />
              <button type="submit">Update</button>
            </form>
          </td>
        </tr>
      )
    }

    return (
      <div className="show-courses">
        <h2 className="title">Courses : </h2>
        <table>
          {this.CoursesHeader()}
          <tbody>
            {isEdit ? allCourses : <FormToEdit />}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Showcourses;