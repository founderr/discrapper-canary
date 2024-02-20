"use strict";

function r(e, t) {
  return (e & t) === t
}

function i(e, t) {
  return e | t
}

function o(e, t) {
  return e & ~t
}

function l(e) {
  for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
  return n.reduce((e, t) => e & ~t, e)
}

function u(e, t, n) {
  if (n) return e | t;
  return e & ~t
}

function a(e, t) {
  if (r(e, t)) return e & ~t;
  return e | t
}
n.r(t), n.d(t, {
  hasFlag: function() {
    return r
  },
  addFlag: function() {
    return i
  },
  removeFlag: function() {
    return o
  },
  removeFlags: function() {
    return l
  },
  setFlag: function() {
    return u
  },
  toggleFlag: function() {
    return a
  }
}), n("808653")