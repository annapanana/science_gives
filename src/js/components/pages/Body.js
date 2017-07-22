import React from "react";
import {Link} from 'react-router-dom';
import '../../../sass/components/pages/main.sass';
import * as DataActions from "../../actions/DataActions";
import DataStore from "../../stores/DataStore";
import { Button } from 'react-bootstrap';
import AnimateHeight from 'react-animate-height';
import MorphTest from '../../animtions/morphTest.js'

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
      data: []
    }
  }

  componentWillMount() {
    // PlantStore.on("plant_service_start", this.serviceStart);
    // PlantStore.on("plant_serice_error", this.serviceError);
    // PlantStore.on("plants_loaded", this.refreshPlants);
  }

  componentWillUnmount() {
    // PlantStore.removeListener("plant_service_start", this.serviceStart);
    // PlantStore.removeListener("plant_serice_error", this.serviceError);
    // PlantStore.removeListener("plants_loaded", this.refreshPlants);
  }

  componentDidMount() {
    DataActions.GetData();
    // PlantActions.getPlants();
  }

  serviceStart() {
    this.setState({isLoading:true, loadingError:false});
  }

  serviceError() {
    this.setState({isLoading:false, loadingError:true});
    console.error("TODO: LOG SPECIFIC ERROR")
  }

  refreshData() {
    this.setState({});
  }

  render() {
    return (
      <div>
        <div class="main-wrap">
          {
            this.state.isLoading ?
              <div>Loading Widget</div>
            :
              <div>
                Loaded
              </div>
          }
        </div>
      </div>
    );
  }
}
