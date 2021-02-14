import React from 'react'
import './App.css';
import AddEmployeeDetails from './modules/addemployeedetails'
import Header from './components/Header';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <AddEmployeeDetails />
      </div>
    )
  }
}

export default App;
