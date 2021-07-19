import React, { Component } from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
// import BackgroundVideo from "../../components/BackgroundVideo/wood.mp4";

class Home extends Component {
  render() {
    console.log(this.props.theme);
    return (
      <div>
        {/* <video autoPlay loop muted
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "50%",
          objectFit: "cover",
          transform: "translate(50%, -50%)",
          zIndex: "-1"
        }}
        >
          <source src={BackgroundVideo} type="video/mp4" />
        </video> */}

      
        <div className="contents">
          <Header theme={this.props.theme} />
          <Greeting theme={this.props.theme} />
          <Skills theme={this.props.theme} />
          <Footer theme={this.props.theme} />
          <TopButton theme={this.props.theme} />
        </div>
      </div>
    );
  }
}

export default Home;
