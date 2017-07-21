import React from "react";

export default class AnimationMotionTest extends React.Component {
  constructor(props) {
    super(props);


  }

  componentDidMount() {
    this.svg = document.getElementById("svgID");
    this.s = Snap(this.svg);
    this.path = Snap.select('#pathID');
  }

  // Start position
  animatePath(){
    if (this.state.isCarrot) {
      this.path.animate({ d: "M83,68.42a40,40,0,0,1-56.55,0,32,32,0,0,1,0-45.24,25.59,25.59,0,0,1,36.19,0,20.47,20.47,0,0,1,0,29,16.38,16.38,0,0,1-23.16,0,13.1,13.1,0,0,1,0-18.53,10.48,10.48,0,0,1,14.82,0,8.39,8.39,0,0,1,0,11.86,6.71,6.71,0,0,1-9.49,0,5.37,5.37,0,0,1,0-7.59" }, 1000, mina.elastic);

      this.path.attr('stroke', 'red');
    } else {
      this.path.animate({ d: "M21.83,62.75,11.72,78.82,9,83.09C7.6,85.37,5.77,88,5.65,90.76c-.26,6,7.76,2.69,10.48,1.27L19,90.51l15.18-8.07L52,73c3-1.61,6.1-3.17,9.1-4.85A41.41,41.41,0,0,0,73.6,57.35C77,53,79.65,48,80.11,42.47a17.43,17.43,0,0,0-1.67-8.93,12,12,0,0,0,16.45-2c.2-.25.89-.89.93-1.19s-.37-.74-.51-1A12.11,12.11,0,0,0,80,24a18.72,18.72,0,0,0,1.06-9.24A24.66,24.66,0,0,0,79.38,8.6a22.14,22.14,0,0,0-2.73-5.25c-.36-.45-.37-.26-1,0l-.75.34A17.22,17.22,0,0,0,72.8,4.94a14.26,14.26,0,0,0-5.9,7.36c-1.51,4.93,1,9.77,4.09,13.47a20,20,0,0,0-17.14-.22A41.81,41.81,0,0,0,40.18,35.1C36.9,38.56,34.5,42.62,32,46.63l-7.11,11.3" }, 1000, mina.elastic);
    }
  	this.setState({isCarrot:!this.state.isCarrot})
  }

  render() {
    let svgFill= "#ffad29";
    return(
      <div class="svg-group">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 282.11 281.11" id="svgID" class="svg-canvas" width="600px" onClick={this.animatePath.bind(this)}>
          <path style={{stroke:svgFill,fill:"none"}} id="pathID" d="M83,68.42a40,40,0,0,1-56.55,0,32,32,0,0,1,0-45.24,25.59,25.59,0,0,1,36.19,0,20.47,20.47,0,0,1,0,29,16.38,16.38,0,0,1-23.16,0,13.1,13.1,0,0,1,0-18.53,10.48,10.48,0,0,1,14.82,0,8.39,8.39,0,0,1,0,11.86,6.71,6.71,0,0,1-9.49,0,5.37,5.37,0,0,1,0-7.59"/>
        </svg>
      </div>
    )
  }
}
