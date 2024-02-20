"use strict";
n.r(t), n.d(t, {
  DISCORD_EPOCH: function() {
    return o
  },
  default: function() {
    return a
  }
});
var r = n("552442"),
  i = n.n(r);
let o = 14200704e5;

function l(e) {
  return Math.floor(Number(e) / 4194304) + o
}

function u(e) {
  let t = e - o;
  return t <= 0 ? "0" : i(t).shiftLeft(22).toString()
}
var a = {
  age: function(e) {
    return Date.now() - l(e)
  },
  extractTimestamp: l,
  fromTimestamp: u,
  atPreviousMillisecond: function(e) {
    return u(l(e) - 1)
  },
  compare: function(e, t) {
    return e === t ? 0 : null == t ? 1 : null == e ? -1 : e.length > t.length ? 1 : e.length < t.length ? -1 : e > t ? 1 : -1
  }
}