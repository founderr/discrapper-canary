"use strict";
n.r(t), n.d(t, {
  AppLayerContainer: function() {
    return d
  },
  AppLayerProvider: function() {
    return p
  },
  appLayerContext: function() {
    return h
  },
  AppReferencePositionLayer: function() {
    return f
  },
  default: function() {
    return E
  }
});
var i = n("37983"),
  r = n("884691"),
  s = n("228256"),
  a = n("222163");
let {
  Layer: o,
  LayerContainer: l,
  LayerProvider: u,
  layerContext: c
} = (0, s.createLayer)("App"), d = l, p = u, h = c, f = r.forwardRef(function(e, t) {
  return (0, i.jsx)(o, {
    children: (0, i.jsx)(a.ReferencePositionLayer, {
      ref: t,
      ...e
    })
  })
});
var E = o