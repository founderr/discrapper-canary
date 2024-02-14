"use strict";
n.r(t), n.d(t, {
  getSourceClientOffset: function() {
    return a
  },
  getDifferenceFromInitialOffset: function() {
    return o
  }
});

function r(e, t) {
  return {
    x: e.x - t.x,
    y: e.y - t.y
  }
}

function a(e) {
  var t, n, a = e.clientOffset,
    o = e.initialClientOffset,
    i = e.initialSourceClientOffset;
  if (!a || !o || !i) return null;
  return r((t = a, n = i, {
    x: t.x + n.x,
    y: t.y + n.y
  }), o)
}

function o(e) {
  var t = e.clientOffset,
    n = e.initialClientOffset;
  return t && n ? r(t, n) : null
}