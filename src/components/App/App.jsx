import React, { Component } from 'react';
import Header from '../Header/Header';
import ResultsContainer from '../ResultsContainer/ResultsContainer';
import SearchBox from '../SearchBox/SearchBox';
import './App.css'

const name = require('@rstacruz/startup-name-generator')

class App extends React.Component{
    constructor(props) {
        super(props)
    
        this.state = {
            headerText: 'Name It!',
            headerExpanded: true,
            suggestedNames: []
        }
    
        // this.handleEvent = this.handleEvent.bind(this)
    }
    

    handleInputChange = (inputText) => {
        
        this.setState({
            headerExpanded: !(inputText.length > 0),
            suggestedNames: inputText ? name(inputText) : []
        })
    }

    render() {
        return (
            <div>
                <Header 
                headerExpanded={this.state.headerExpanded}
                headTitle={this.state.headerText}/>
                <SearchBox onInputChange={this.handleInputChange}/>
                <ResultsContainer suggestedNames={this.state.suggestedNames}/>
            </div>
        )
    }
}

// function App(){
// }

export default App;