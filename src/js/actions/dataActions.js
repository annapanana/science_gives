import Dispatcher from "../dispatcher";
import * as Helpers from "../helpers";

export function GetData() {
  Helpers.restCall(
    'data',
    'GET',
    {},
    'DATA_SERVICE_START',
    'RECEIVED_DATA',
    'DATA_SERVICE_ERROR'
  )
}
