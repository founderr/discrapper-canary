"use strict";
n.r(t), n.d(t, {
  top: function() {
    return r
  },
  bottom: function() {
    return a
  },
  right: function() {
    return o
  },
  left: function() {
    return i
  },
  auto: function() {
    return u
  },
  basePlacements: function() {
    return s
  },
  start: function() {
    return l
  },
  end: function() {
    return c
  },
  clippingParents: function() {
    return f
  },
  viewport: function() {
    return d
  },
  popper: function() {
    return p
  },
  reference: function() {
    return h
  },
  variationPlacements: function() {
    return m
  },
  placements: function() {
    return _
  },
  modifierPhases: function() {
    return y
  }
}), n("808653");
var r = "top",
  a = "bottom",
  o = "right",
  i = "left",
  u = "auto",
  s = [r, a, o, i],
  l = "start",
  c = "end",
  f = "clippingParents",
  d = "viewport",
  p = "popper",
  h = "reference",
  m = s.reduce(function(e, t) {
    return e.concat([t + "-" + l, t + "-" + c])
  }, []),
  _ = [].concat(s, [u]).reduce(function(e, t) {
    return e.concat([t, t + "-" + l, t + "-" + c])
  }, []),
  y = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"]