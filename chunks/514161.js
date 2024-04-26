"use strict";
t.r(a), t.d(a, {
  BulletedValueProp: function() {
    return o
  },
  ValueProp: function() {
    return r
  },
  ValuePropContainer: function() {
    return i
  }
});
var n = t("735250");
t("470079");
var s = t("481060"),
  l = t("357331");

function r(e) {
  let {
    text: a,
    children: t
  } = e;
  return (0, n.jsxs)("div", {
    className: l.valueProp,
    children: [(0, n.jsx)("div", {
      className: l.valuePropIconContainer,
      children: t
    }), (0, n.jsx)(s.Text, {
      variant: "text-sm/medium",
      children: a
    })]
  })
}

function o(e) {
  let {
    title: a,
    bulletPoints: t,
    icon: r
  } = e;
  return (0, n.jsxs)("div", {
    className: l.bulletedValueProp,
    children: [(0, n.jsx)("div", {
      className: l.valuePropIconContainer,
      children: r
    }), (0, n.jsxs)("div", {
      className: l.bulletPointsContainer,
      children: [(0, n.jsx)(s.Text, {
        variant: "text-md/bold",
        color: "header-primary",
        children: a
      }), (0, n.jsx)("div", {
        className: l.bulletPoints,
        children: t.map(e => (0, n.jsxs)("div", {
          className: l.bulletPoint,
          children: [(0, n.jsx)(s.Text, {
            variant: "text-sm/medium",
            color: "header-secondary",
            children: "•"
          }), (0, n.jsx)(s.Text, {
            variant: "text-sm/medium",
            color: "header-secondary",
            className: l.bulletPointText,
            children: e
          })]
        }, e))
      })]
    })]
  })
}

function i(e) {
  let {
    children: a
  } = e;
  return (0, n.jsx)("div", {
    className: l.valuePropContainer,
    children: a
  })
}