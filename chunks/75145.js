"use strict";
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(481060),
  a = n(715953);
t.Z = function(e) {
  let {
    glowOpacity: t,
    className: n
  } = e;
  return (0, i.jsxs)("div", {
    className: s()(a.nitroTopDividerContainer, n),
    children: [(0, i.jsx)("div", {
      className: a.nitroTopDividerUpper
    }), (0, i.jsx)("div", {
      style: {
        opacity: t
      },
      className: a.nitroTopDividerShadow
    }), (0, i.jsxs)("div", {
      className: s()(a.nitroTopDividerLockContainer),
      children: [(0, i.jsx)("div", {
        className: a.nitroTopDividerLockBorder
      }), (0, i.jsx)("div", {
        className: a.nitroTopDividerLockCircle,
        children: (0, i.jsx)(o.LockIcon, {
          size: "xs",
          color: "white"
        })
      }), (0, i.jsx)("div", {
        className: a.nitroTopDividerLockBorderReversed
      })]
    }), (0, i.jsx)("div", {
      className: a.nitroTopDividerLower
    })]
  })
}