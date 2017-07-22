import { EventEmitter } from "events";
import dispatcher from "../dispatcher";

class DataStore extends EventEmitter {
  constructor() {
    super();
    this.data = [];
  }

  getData() {
    return this.data;
  }

  handleActions(action) {
    switch(action.type) {
      case "RECEIVED_DATA": {
        this.error = {};
        this.data = action.data;
        this.emit("data_loaded");
        console.log(action.data);
        break;
      }
      case "DATA_SERVICE_ERROR": {
        this.error = {xhr: action.xhr, textStatus: action.textStatus, errorThrown: action.errorThrown};
        this.emit("data_service_error");
        break;
      }
    }
  }
}

const dataStore = new DataStore();
dispatcher.register(dataStore.handleActions.bind(dataStore));
export default dataStore;
