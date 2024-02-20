"use strict";
n.r(t), n.d(t, {
  getToken: function() {
    return i
  },
  isAuthenticated: function() {
    return o
  },
  getArtForPath: function() {
    return l
  }
});
var r = n("171718");

function i() {
  return r.default.getToken()
}

function o() {
  return null != i()
}
let l = e => null != e && /^\/developers/.test(e) ? n("501617") : null