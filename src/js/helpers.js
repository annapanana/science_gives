import Dispatcher from "./dispatcher";

export function restCall(url, method, data, startMsg, successMsg, errorMsg) {
  if (startMsg) {
    Dispatcher.dispatch( {type: startMsg} );
  }
  $.ajax({
    url: `http://localHost:8000/api/${url}`,
    method: method || 'GET',
    dataType: 'json',
    data: data || {}
  }).done(function(data) {
    Dispatcher.dispatch( {type: successMsg, data: data} );
  }).fail(function(xhr, textStatus, errorThrown) {
    Dispatcher.dispatch( {type: errorMsg, xhr, textStatus, errorThrown} );
  });
}
