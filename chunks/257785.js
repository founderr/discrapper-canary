"use strict";
r.r(t), r.d(t, {
  BooleanPropertyValue: function() {
    return d
  },
  Properties: function() {
    return s
  },
  Property: function() {
    return c
  }
});
var a = r("735250");
r("470079");
var i = r("120356"),
  l = r.n(i),
  n = r("481060"),
  o = r("277513");

function s(e) {
  let {
    className: t,
    children: r
  } = e;
  return (0, a.jsx)("dl", {
    className: l()(o.properties, t),
    children: r
  })
}

function c(e) {
  let {
    name: t,
    children: r
  } = e;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("dt", {
      className: o.propertyName,
      children: t
    }), (0, a.jsx)("dd", {
      children: r
    })]
  })
}

function d(e) {
  let {
    value: t
  } = e;
  return (0, a.jsx)(n.Checkbox, {
    size: 16,
    value: t,
    shape: n.Checkbox.Shapes.SMALL_BOX,
    displayOnly: !0
  })
}