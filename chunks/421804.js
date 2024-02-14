"use strict";
E.r(_), E.d(_, {
  INTERACTION_EVENTS: function() {
    return t
  },
  getCurrentlyInteractingWindowId: function() {
    return n
  },
  setCurrentlyInteractingWindowId: function() {
    return a
  },
  clearCurrentlyInteractingWindowId: function() {
    return i
  }
});
let t = ["click", "mousedown", "mouseup", "keydown", "keyup", "keypress", "contextmenu"],
  o = null;

function n() {
  return o
}

function a(e) {
  o = e
}

function i(e) {
  o === e && (o = null)
}