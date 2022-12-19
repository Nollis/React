import React from 'react'
import axios from 'axios';
export const CountryDropdown = (props) => (
  <div className="form-group">
    <strong>{props.CountryName}</strong>
    <select
      className="form-control"
      name="{props.CountryName}"
      onChange={props.onChange}
    >
      <option defaultValue>Select {props.CountryName}</option>
      {props.options.map((item, index) => (
        <option key={index} value={item.id}>
          {item.CountryName}
        </option>
      ))}
    </select>
  </div>
)
export default class CountryListDropDown extends React.Component {
  constructor() {
    super()
    this.state = {
      collection: [],
      value: '',
    }
  }
  componentDidMount() {
    axios.get("https://localhost:7184/api/react/countries")
      .then((response) => response.json())
      .then((res) => this.setState({ collection: res }))
  }
  onChange = (event) => {
    this.setState({ value: event.target.value })
  }
  render() {
    return (
      <div className="container mt-4">
        <h2>React Dropdown List with Bootstrap Example</h2>
        <CountryDropdown
          name={this.state.CountryName}
          options={this.state.collection}
          onChange={this.onChange}
        />
      </div>
    )
  }
}