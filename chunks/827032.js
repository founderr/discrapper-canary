"use strict";
n.r(t), n.d(t, {
  addGlobalTag: function() {
    return i
  },
  getGlobalTagsArray: function() {
    return o
  }
});
let r = {};

function i(e, t) {
  r[e] = t
}

function o() {
  return Object.keys(r).map(e => "".concat(e, ":").concat(r[e]))
}