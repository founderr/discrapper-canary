t.d(s, {
  Y: function() {
    return r
  }
});
var n = t(570140);

function r(e) {
  n.Z.wait(() => n.Z.dispatch({
    type: "APPLICATION_STORE_LOCATION_CHANGE",
    location: e
  }))
}