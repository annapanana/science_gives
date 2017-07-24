import React from "react";
import {Link} from 'react-router-dom';
import '../../../sass/components/pages/main.sass';
import * as DataActions from "../../actions/DataActions";
import DataStore from "../../stores/DataStore";
import { Button } from 'react-bootstrap';
import AnimateHeight from 'react-animate-height';
import MorphTest from '../../animtions/morphTest.js'
import Snap from 'imports-loader?this=>window,fix=>module.exports=0!snapsvg/dist/snap.svg.js';

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.serviceStart = this.serviceStart.bind(this);
    this.serviceError = this.serviceError.bind(this);
    this.refreshData = this.refreshData.bind(this);

    //SVG TEST
    this.morphTest = new MorphTest();

    this.state = {
      isLoading: true,
      loadingError: false,
      data: [],
      occupations: []
    }
  }

  componentWillMount() {
    DataStore.on("data_service_start", this.serviceStart);
    DataStore.on("data_serice_error", this.serviceError);
    DataStore.on("data_loaded", this.refreshData);
  }

  componentWillUnmount() {
    DataStore.removeListener("data_service_start", this.serviceStart);
    DataStore.removeListener("data_serice_error", this.serviceError);
    DataStore.removeListener("data_loaded", this.refreshData);
  }

  componentDidMount() {
    DataActions.GetData();
  }

  serviceStart() {
    this.setState({isLoading:true, loadingError:false});
  }

  serviceError() {
    this.setState({isLoading:false, loadingError:true});
    console.error("TODO: LOG SPECIFIC ERROR")
  }

  refreshData() {
    this.setState({
      data: DataStore.getData(),
      isLoading: false,
      loadingError: false
    });

    // console.log("REP: ", DataStore.getPartyData(this.state.data, "REP"));
    // console.log("DEM: ", DataStore.getPartyData(this.state.data, "DEM"));
    console.log("OCCUPATIONS: ", DataStore.getUniqueOccupations());
    this.setState({
      occupations: DataStore.getUniqueOccupations(this.state.data)
    });
  }

  drawBubbles(s, occupations) {
    console.log(occupations.length);
    for (var i = 0; i < occupations.length; i++) {
      let c = s.circle(this.getRandom(0, 1000), this.getRandom(0, 1000), (occupations[i].count * .025));
    }
  }

  getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  render() {
    const svg = document.getElementById("svgID");
    const s = Snap(svg);
    // this.drawBubbles(s, this.state.occupations);

    return (
      <div>
        <div class="main-wrap">
          {
            this.state.isLoading ?
              <div>Loading Widget</div>
            :

              <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 282.11 281.11" id="svgID" class="svg-canvas" width="100%">
                </svg>

              </div>
          }
        </div>
      </div>
    );
  }
}
