s.d(t, {
  Gl: function() {
    return i
  },
  hG: function() {
    return a
  },
  oI: function() {
    return o
  }
});
var n = s(570140);

function a(e, t, s) {
  n.Z.dispatch({
    type: "CONNECTED_DEVICE_SET",
    displayName: e,
    connectedDevicePreference: t,
    location: s
  })
}

function i(e) {
  n.Z.dispatch({
    type: "CONNECTED_DEVICE_IGNORE",
    displayName: e
  })
}

function o() {
  n.Z.dispatch({
    type: "CONNECTED_DEVICE_NEVER_SHOW_MODAL"
  })
}