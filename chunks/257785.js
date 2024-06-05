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
  n = r.n(i),
  l = r("481060"),
  o = r("277513");

function c(e) {
  let {
    className: t,
    children: r
  } = e;
  return (0, a.jsx)("dl", {
    className: n()(o.properties, t),
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
  return (0, a.jsx)(l.Checkbox, {
    size: 16,
    value: t,
    shape: l.Checkbox.Shapes.SMALL_BOX,
    displayOnly: !0
  })
}