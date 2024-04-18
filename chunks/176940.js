"use strict";
l.r(t), l.d(t, {
  default: function() {
    return n
  }
}), l("47120");
var a = l("131951");

function n() {
  return Object.entries(a.default.getVideoDevices()).map(e => {
    let [t, l] = e;
    return {
      id: "camera:" + l.id,
      name: l.name,
      url: ""
    }
  })
}