"use strict";
n.d(t, {
  Z: function() {
    return c
  }
});
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(442837),
  l = n(481060),
  u = n(607070),
  _ = n(782915);

function c() {
  let e = (0, a.e7)([u.Z], () => u.Z.useReducedMotion),
    {
      styleLarge: t,
      styleSmall: n
    } = r.useMemo(() => ({
      styleLarge: {
        width: "".concat(10 + 50 * Math.random(), "%")
      },
      styleSmall: {
        width: "".concat(30 + 60 * Math.random(), "%")
      }
    }), []);
  return (0, i.jsxs)("div", {
    className: o()(_.container, {
      [_.noAnimation]: e
    }),
    children: [(0, i.jsx)("div", {
      className: _.iconPlaceholder
    }), (0, i.jsxs)("div", {
      className: _.textContainer,
      children: [(0, i.jsx)("div", {
        className: _.textLargePlaceholder,
        style: t,
        children: (0, i.jsx)(l.Heading, {
          className: _.hidden,
          variant: "heading-md/semibold",
          color: "header-primary",
          lineClamp: 1,
          children: "_"
        })
      }), (0, i.jsx)("div", {
        className: _.textSmallPlaceholder,
        style: n,
        children: (0, i.jsx)(l.Text, {
          className: _.hidden,
          variant: "text-sm/normal",
          color: "text-secondary",
          lineClamp: 1,
          children: "_"
        })
      })]
    }), (0, i.jsx)("div", {
      className: _.underline
    })]
  })
}