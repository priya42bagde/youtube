import React, { Component } from 'react';
import SearchBar from "./components/SearchBar"
import VideoList from "./components/VideoList"
import './App.css';
import youtubeapi from './apis/YouTubeapi';
import VideoDetails from "./components/VideoDetails"

class App extends Component {
  state={
    videos:[],
    selectedVideo : " "
  }
  
  componentDidMount(){
    this.onTermSubmit("React.js tutorials")
  }
  onSelectVideo = video =>{
    console.log("app.js", video)
    this.setState({selectedVideo:video})
    //console.log("app1.js", {selectedVideo})
  }
  onTermSubmit = async(term) =>{
    const res =await youtubeapi.get("/search",{
      params:{
             q: term
      }
    })
    //console.log(res.data)
    this.setState({videos: res.data.items, selectedVideo: res.data.items[0]})
  }
  render(){
  return (
    <>
    <div className="container">
      <div className="row appheader">
        <h1 className="col-md-12 text-center">
          <i className="fab fa-youtube-square"></i>
          &nbsp; You Tube
        </h1>
      </div>
      
      <div className="row my-2">
         <div className="col-md-8">
           <SearchBar onFormSubmit={this.onTermSubmit}/>
           <VideoDetails video={this.state.selectedVideo}/>
         </div>
         <div className="col-md-4">
           <VideoList videos={this.state.videos} onSelectVideo={this.onSelectVideo}/>
         </div>
      </div>  
    </div>
    </>
  );}
}

export default App;
