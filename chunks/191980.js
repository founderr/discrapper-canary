"use strict";
n.r(t), n.d(t, {
  hide: function() {
    return l
  },
  show: function() {
    return o
  }
});
var i = n("570140");

function o() {
  i.default.dispatch({
    type: "SHOW_KEYBOARD_SHORTCUTS"
  })
}

function l() {
  i.default.dispatch({
    type: "HIDE_KEYBOARD_SHORTCUTS"
  })
}