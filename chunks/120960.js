"use strict";
a.r(t), a.d(t, {
  setCertifiedDevices: function() {
    return s
  }
});
var n = a("570140");

function s(e, t) {
  n.default.dispatch({
    type: "CERTIFIED_DEVICES_SET",
    applicationId: e,
    devices: t
  })
}