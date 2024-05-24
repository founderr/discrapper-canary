"use strict";
n.r(t), n.d(t, {
  DISCORD_EPOCH: function() {
    return s
  },
  SnowflakeSequence: function() {
    return c
  },
  age: function() {
    return d
  },
  atPreviousMillisecond: function() {
    return u
  },
  compare: function() {
    return _
  },
  extractTimestamp: function() {
    return a
  },
  fromTimestamp: function() {
    return o
  },
  fromTimestampWithSequence: function() {
    return l
  }
}), n("411104");
var i = n("654861"),
  r = n.n(i);
let s = 14200704e5;

function a(e) {
  return Math.floor(Number(e) / 4194304) + s
}

function o(e) {
  let t = e - s;
  return t <= 0 ? "0" : r()(t).shiftLeft(22).toString()
}

function l(e, t) {
  let n = e - s;
  return r()(n <= 0 ? 0 : n).shiftLeft(22).add(t.next()).toString()
}

function u(e) {
  return o(a(e) - 1)
}

function d(e) {
  return Date.now() - a(e)
}

function _(e, t) {
  return e === t ? 0 : null == t ? 1 : null == e ? -1 : e.length > t.length ? 1 : e.length < t.length ? -1 : e > t ? 1 : -1
}
class c {
  next() {
    if (this.seq > 4095) throw Error("Snowflake sequence number overflow: ".concat(this.seq));
    return this.seq++
  }
  reset() {
    this.seq = 0
  }
  constructor() {
    var e, t, n;
    e = this, n = void 0, (t = "seq") in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, this.seq = 0
  }
}