"use strict";
l.r(t), l.d(t, {
  default: function() {
    return n
  }
}), l("222007");
var a = l("42887");

function n() {
  let e = a.default.getVideoDevices(),
    t = Object.entries(e).map(e => {
      let [t, l] = e;
      return {
        id: "camera:" + l.id,
        name: l.name,
        url: ""
      }
    });
  return t
}