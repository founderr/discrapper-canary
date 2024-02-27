"use strict";
r.r(t), r.d(t, {
  Properties: function() {
    return s
  },
  Property: function() {
    return c
  },
  BooleanPropertyValue: function() {
    return d
  }
});
var a = r("37983");
r("884691");
var n = r("414456"),
  i = r.n(n),
  o = r("77078"),
  l = r("699412");

function s(e) {
  let {
    className: t,
    children: r
  } = e;
  return (0, a.jsx)("dl", {
    className: i(l.properties, t),
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
      className: l.propertyName,
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
  return (0, a.jsx)(o.Checkbox, {
    size: 16,
    value: t,
    shape: o.Checkbox.Shapes.SMALL_BOX,
    displayOnly: !0
  })
}