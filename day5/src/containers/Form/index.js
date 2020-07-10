import React, { Component } from "react"
import Welcome from "../../components/Welcome"
import FormInput from "../../components/FormInput"
import Input from "../../components/FormInput"
import Container from "../../components/Welcome"
import { Button } from "./styles"

class Form extends Component {
  // TODO: Add constructor and establish state with all the fields you want
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      gender: "",
      pronoun: "",
      hometown: "",
      foods: "",
      birthday: ""
    }
  }

  // TODO: Create update methods for state after creating the form structure
  updateName = (name) => {
      this.setState({name})
  }

  updateGender = (gender) => {
    this.setState({gender})
  }

  updatePronoun = (pronoun) => {
    this.setState({pronoun})
  }

  updateHometown = (hometown) => {
    this.setState({hometown})
  }

  updateFoods = (foods) => {
    this.setState({foods})
  }

  updateBirthday = (birthday) => {
    this.setState({birthday})
  }

  render() {
    // TODO: Currently, this only renders the welcome component. Create a form, and various form components and place them here
    return <div>
      <Welcome name={this.state.name} gender={this.state.gender} pronoun={this.state.pronoun} hometown={this.state.hometown} foods={this.state.foods} birthday={this.state.birthday} />
      <div>
        <FormInput
          title="name"
          placeholder="Name (ex: John Smith)"
          value={this.state.name}
          update={this.updateName}
        />
        <FormInput
          title="gender"
          placeholder="Gender (ex: male)"
          value={this.state.gender}
          update={this.updateGender}
        />
        <FormInput
          title="pronoun"
          placeholder="Pronoun (ex: His)"
          value={this.state.pronoun}
          update={this.updatePronoun}
        />
        <FormInput
          title="hometown"
          placeholder="Hometown (ex: Boston)"
          value={this.state.hometown}
          update={this.updateHometown}
        />
        <FormInput
          title="foods"
          placeholder="Favorite Foods (_, _, and _)"
          value={this.state.foods}
          update={this.updateFoods}
        />
        <FormInput
          title="birthday"
          placeholder="Birthday (ex: January 1)"
          value={this.state.birthday}
          update={this.updateBirthday}
        />
      </div>
    </div>
  }
}

export default Form
