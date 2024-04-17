"use strict";
t.r(r), t.d(r, {
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
var a = t("735250");
t("470079");
var i = t("120356"),
  l = t.n(i),
  n = t("481060"),
  o = t("779869");

function c(e) {
  let {
    className: r,
    children: t
  } = e;
  return (0, a.jsx)("dl", {
    className: l()(o.properties, r),
    children: t
  })
}

function s(e) {
  let {
    name: r,
    children: t
  } = e;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("dt", {
      className: o.propertyName,
      children: r
    }), (0, a.jsx)("dd", {
      children: t
    })]
  })
}

function d(e) {
  let {
    value: r
  } = e;
  return (0, a.jsx)(n.Checkbox, {
    size: 16,
    value: r,
    shape: n.Checkbox.Shapes.SMALL_BOX,
    displayOnly: !0
  })
}