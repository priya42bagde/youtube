import React, { Component } from "react"

class SearchBar extends Component{
    state={
        term : ""
    }
    onInputChange = e =>{
        this.setState({term: e.target.value})
    }

    onFormSubmit= e =>{
        e.preventDefault();
        //callback from parent
        this.props.onFormSubmit(this.state.term)
    }
    render(){
        return(
          <React.Fragment>
              <form onSubmit={this.onFormSubmit}>
                  <div className="form-group" style={{margin:"20px 0"}}>
                     <input 
                         className="form-control"
                         type="search"
                         placeholder="Search Anything here..."
                         value={this.state.term}
                         onChange={this.onInputChange}
                     />
                  </div>
              </form>
          </React.Fragment>
        )
    }
}

export default SearchBar