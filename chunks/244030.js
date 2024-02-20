"use strict";
s.r(e), s.d(e, {
  show: function() {
    return a
  },
  hide: function() {
    return o
  }
});
var n = s("913144");

function a() {
  n.default.dispatch({
    type: "SHOW_KEYBOARD_SHORTCUTS"
  })
}

function o() {
  n.default.dispatch({
    type: "HIDE_KEYBOARD_SHORTCUTS"
  })
}