"use strict";
n.d(t, {
  Z: function() {
    return d
  }
});
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(442837),
  l = n(481060),
  u = n(607070),
  _ = n(98880),
  c = n(771231);

function d(e) {
  let {
    look: t = _.U4.LARGE_BANNER
  } = e, n = (0, a.e7)([u.Z], () => u.Z.useReducedMotion), {
    styleLarge: s,
    styleSmall: d
  } = r.useMemo(() => ({
    styleLarge: {
      width: "".concat(10 + 50 * Math.random(), "%")
    },
    styleSmall: {
      width: "".concat(30 + 60 * Math.random(), "%")
    }
  }), []);
  return (0, i.jsxs)("div", {
    className: o()(c.container, {
      [c.noAnimation]: n
    }),
    children: [(0, i.jsx)("div", {
      className: o()(c.bannerImage, {
        [c.mediumBanner]: t === _.U4.MEDIUM_BANNER,
        [c.largeBanner]: t === _.U4.LARGE_BANNER
      })
    }), (0, i.jsxs)("div", {
      className: c.appDetailsContainer,
      children: [(0, i.jsx)("div", {
        className: c.iconPlaceholder
      }), (0, i.jsxs)("div", {
        className: c.textContainer,
        children: [(0, i.jsx)("div", {
          className: c.textPlaceholder,
          style: s,
          children: (0, i.jsx)(l.Heading, {
            className: c.hidden,
            variant: "heading-md/semibold",
            color: "header-primary",
            lineClamp: 1,
            children: "_"
          })
        }), (0, i.jsx)("div", {
          className: c.textPlaceholder,
          style: d,
          children: (0, i.jsx)(l.Text, {
            className: c.hidden,
            variant: "text-sm/normal",
            color: "text-secondary",
            lineClamp: 1,
            children: "_"
          })
        })]
      })]
    })]
  })
}