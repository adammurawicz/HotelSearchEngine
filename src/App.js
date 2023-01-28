import React, { Component } from 'react';
import './App.scss';
import Header from './Components/Header/Header';
import Menu from './Components/Menu/Menu';
import Hotels from './Components/Hotels/Hotels';

class App extends Component {

 
    state = {
      hotels: [
        {
          id: 1,
          name: 'Pod Akcjami',
          city: 'Warszawa',
          rating: '8.3',
          description: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
          image: ''
        },
        {
          id: 2,
          name: 'Dębowy',
          city: 'Lublin',
          rating: '8.8',
          description: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
          image: ''
        },
      ]
    }

  render() {
    return (
      <div className='App'>
          <Menu/>
          <Header/>
          <Hotels hotels={this.state.hotels}/>
      </div>
    )
  }
}



export default App;
