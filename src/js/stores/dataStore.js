import { EventEmitter } from "events";
import dispatcher from "../dispatcher";

class DataStore extends EventEmitter {
  constructor() {
    super();
    this.data = [];
    this.professions = [
      {
        id: 0,
        name: "computer and information scientists",
        subProfessions: ['ENGINEER (SOFTWARE)', 'COMPUTER SCIENTIST', 'COMPUTER ENGINEER', 'DATA SCIENTIST', 'SR SOFTWARE ENGINEER', 'ENGINEER - IT', 'SENIOR SOFTWARE ENGINEER', 'SOFTWARE DEVELOPMENT ENGINEER', 'APPLICATION ENGINEER', 'TELECOM ENGINEER']
      },
      {
        id: 1,
        name: "mathematical scientists",
        subProfessions: ['MATHEMATICIAN', 'MATH TEACHER']
      },
      {
        id: 2,
        name: "agricultural and food scientists",
        subProfessions: []
      },
      {
        id: 3,
        name: "biological and medical scientists",
        subProfessions: ['PHYSICIAN & SCIENTIST', 'MEDICAL PHYSICIST']
      },
      {
        id: 4,
        name: "environmental life scientists",
        subProfessions: ['ENVIRONMENTAL /SCIENTIST', 'ENGINEER - ENVIRONMENTAL']
      }
    ]
  }

  getData() {
    return this.data;
  }

  getOccupationForEntry(occupations, entry) {
    return occupations.find((o) => {
      return o.occupation === entry.cleanedoccupation;
    })
  }

  getUniqueOccupations() {
    let occupations = [];
    for (var i = 0; i < this.data.length; i++) {
      if (this.getOccupationForEntry(occupations, this.data[i])) {
        // if this occupation exists as a value for occupation in any of the objects in the occupations array
        this.getOccupationForEntry(occupations, this.data[i]).count +=1;
      } else {
        if (this.data[i].cleanedoccupation) {
          occupations.push({
            occupation: this.data[i].cleanedoccupation,
            count: 1
          })
        }
      }
    }
    return occupations.sort(function (a, b) {
      return  b.count - a.count;
    });
  }

  getOccupationData(data, occupation) {
    return data.filter((d) => {
      return d.cleanedoccupation === occupation;
    })
  }

  getPartyData(data, party) {
    return data.filter((d) => {
      return d.cmte_pty === party;
    })
  }

  handleActions(action) {
    switch(action.type) {
      case "RECEIVED_DATA": {
        this.error = {};
        this.data = action.data;
        this.emit("data_loaded");
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
