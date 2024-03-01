"use strict";
n.r(t), n.d(t, {
  getOrCreateAudioContext: function() {
    return i
  }
});
let s = null;

function i() {
  return null == s && (s = new AudioContext), s
}