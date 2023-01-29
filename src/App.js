import React, { Component } from 'react';
import './App.scss';
import Header from './Components/Header/Header';
import Menu from './Components/Menu/Menu';
import Hotels from './Components/Hotels/Hotels';
import LoadingIcon from './Components/UI/LoadingIcon/LoaidingIcon';

class App extends Component {

    hotels = [
      {
      id: 1,
      name: 'Pod Akacjami',
      city: 'Warszawa',
      rating: 8.3,
      description: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      image: ''
    },
    {
      id: 2,
      name: 'Dębowy',
      city: 'Lublin',
      rating: 8.8,
      description: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      image: ''
    },
  ];
 
    state = {
      hotels: [],
      loading: true
    }

   searchHandler(term) {
    console.log('szukaj z app', term);
    const hotels = [...this.hotels]
                  .filter(x => x.name
                    .toLowerCase()
                    .includes(term.toLowerCase()))
    this.setState({ hotels })
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({ 
        hotels: this.hotels, 
        loading: false })
    }, 1000)
  }


  render() {
    return (
      <div className='App'>
          <Menu/>
          <Header onSearch={(term) => this.searchHandler(term)}/>
          {this.state.loading 
          ? (<LoadingIcon/>) 
          : (<Hotels hotels={this.state.hotels} />)}
      </div>
    )
  }
}



export default App;
