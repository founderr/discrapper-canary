"use strict";
a.r(t), a.d(t, {
  mount: function() {
    return s
  },
  unmount: function() {
    return l
  }
});
var n = a("570140");

function s() {
  n.default.dispatch({
    type: "NOW_PLAYING_MOUNTED"
  })
}

function l() {
  n.default.dispatch({
    type: "NOW_PLAYING_UNMOUNTED"
  })
}