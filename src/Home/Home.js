import React, { Component } from 'react';
import './Home.css';
import Showcourses from './../Showcourses/Showcourses'
import FormAddCourse from './../FormAddCourse/FormAddCourse'


class Home extends Component {
  state = {
    courses: []
  }
  ///// Func to  task the course that user add  it in form  and to show it  /////
  Submit = (e) => {
    e.preventDefault()
    let course = e.target.elements.course.value
    if (course) {
      let allCourses = this.state.courses;
      allCourses.push({ courseName: course })
      this.setState(
        { courses: allCourses }
      )
      e.target.reset();
    }
  }
  // delete the course 
  deleteCourse = (index) => {
    let allCourses = this.state.courses;
    this.setState({
      courses: allCourses.filter((course, id) => {
        return index !== id
      })
    })
  }
  // edit course 
  editCourses = (newName, oldName) => {
    console.log(newName, oldName);
    let allCourses = this.state.courses
    for (let i of allCourses) {
      if (i.courseName == oldName) {
        i.courseName = newName
      }
    }
    this.setState({ courses: allCourses })
  }
  //
  render() {
    return (
      <section className="home">
        <div className="container">
          <div className="row justify-content-around">
            <div className="col-sm-12 text-center mb-5 ">
              <h2 className="title font-weight-bold ">CRUD App</h2>
            </div>
            <div className="col-sm-12 col-md-5">
              <FormAddCourse handelSubmit={this.Submit} />
            </div>
            <div className="border-between" ></div>
            <div className="col-sm-12 col-md-5">
              < Showcourses
                courses={this.state.courses}
                handelDeleteCourse={this.deleteCourse}
                handelEditCourse={this.courseNameToEdit}
                courseNameAfterEdit={this.editCourses}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Home;