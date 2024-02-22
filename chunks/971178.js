"use strict";
s.r(t), s.d(t, {
  updateLocation: function() {
    return i
  }
});
var a = s("913144");

function i(e) {
  a.default.wait(() => a.default.dispatch({
    type: "APPLICATION_STORE_LOCATION_CHANGE",
    location: e
  }))
}