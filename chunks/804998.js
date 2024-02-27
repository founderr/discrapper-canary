"use strict";
n.r(t), n.d(t, {
  getOrCreateAudioContext: function() {
    return u
  }
});
let s = null;

function u() {
  return null == s && (s = new AudioContext), s
}