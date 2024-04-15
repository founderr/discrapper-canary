"use strict";
t.r(r), t.d(r, {
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
var a = t("735250");
t("470079");
var n = t("120356"),
  i = t.n(n),
  l = t("481060"),
  o = t("779869");

function s(e) {
  let {
    className: r,
    children: t
  } = e;
  return (0, a.jsx)("dl", {
    className: i()(o.properties, r),
    children: t
  })
}

function c(e) {
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
  return (0, a.jsx)(l.Checkbox, {
    size: 16,
    value: r,
    shape: l.Checkbox.Shapes.SMALL_BOX,
    displayOnly: !0
  })
}