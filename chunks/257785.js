"use strict";
r.r(t), r.d(t, {
  BooleanPropertyValue: function() {
    return d
  },
  Properties: function() {
    return c
  },
  Property: function() {
    return s
  }
});
var a = r("735250");
r("470079");
var i = r("120356"),
  l = r.n(i),
  n = r("481060"),
  o = r("893048");

function c(e) {
  let {
    className: t,
    children: r
  } = e;
  return (0, a.jsx)("dl", {
    className: l()(o.properties, t),
    children: r
  })
}

function s(e) {
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