"use strict";
E.r(_), E.d(_, {
  INTERACTION_EVENTS: function() {
    return t
  },
  getCurrentlyInteractingWindowId: function() {
    return I
  },
  setCurrentlyInteractingWindowId: function() {
    return T
  },
  clearCurrentlyInteractingWindowId: function() {
    return r
  }
});
let t = ["click", "mousedown", "mouseup", "keydown", "keyup", "keypress", "contextmenu"],
  o = null;

function I() {
  return o
}

function T(e) {
  o = e
}

function r(e) {
  o === e && (o = null)
}