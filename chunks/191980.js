"use strict";
l.r(t), l.d(t, {
  hide: function() {
    return u
  },
  show: function() {
    return n
  }
});
var s = l("570140");

function n() {
  s.default.dispatch({
    type: "SHOW_KEYBOARD_SHORTCUTS"
  })
}

function u() {
  s.default.dispatch({
    type: "HIDE_KEYBOARD_SHORTCUTS"
  })
}