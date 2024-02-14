"use strict";
n.r(t), n.d(t, {
  setRtcLogMarker: function() {
    return a
  }
});
var l = n("913144");

function a() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
  console.log("[callscope] Issue marker pressed."), l.default.dispatch({
    type: "RTC_LOG_MARKER",
    marker: e
  })
}