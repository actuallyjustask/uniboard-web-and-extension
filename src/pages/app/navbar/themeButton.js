import React, { Component } from "react";
import {Link} from 'react-router-dom';
class ThemeButton extends Component {
  
  constructor(props) {
    super(props);
    var selectedTheme = localStorage.getItem('theme');
    this.state = {isDarkMode: (selectedTheme === 'dark')};

    // This binding is necessary to make `this` work in the callback
    this.toggleMode = this.toggleMode.bind(this);
  }
  toggleMode = () => {

    //console.log('this is:', this);
    this.setState(prevState => ({
        isDarkMode: !prevState.isDarkMode
    }));

    if(this.state.isDarkMode){
        document.body.classList.remove('dark');
        localStorage.setItem('theme', 'light');        
    }else{
        document.body.classList.add('dark');
        localStorage.setItem('theme', 'dark');  
     };
  }
  render() {
    return (
        <button
          onClick={this.toggleMode}
          title={`${this.state.isDarkMode ? 'Change to Dark Mode' : 'Change to Light Mode'}`}
          className="inline-flex h-8 mt-2  ml-2 bg-transparent hover:bg-purple-400 text-purple-600 font-semibold hover:text-white  border border-purple-400 px-3 hover:border-transparent rounded text-3xl">
          <i className={`fas  text-xl ${this.state.isDarkMode ? 'fa-sun' : 'fa-moon'}`}  />
        </button>
    );
  }
}

export default ThemeButton;
