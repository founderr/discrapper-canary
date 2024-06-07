"use strict";
s.r(t), s.d(t, {
  updateLocation: function() {
    return a
  }
});
var n = s("570140");

function a(e) {
  n.default.wait(() => n.default.dispatch({
    type: "APPLICATION_STORE_LOCATION_CHANGE",
    location: e
  }))
}