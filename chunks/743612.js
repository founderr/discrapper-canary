"use strict";
s.r(t);
var a = s("735250");
s("470079");
var i = s("120356"),
  r = s.n(i),
  l = s("481060"),
  n = s("622481");
t.default = e => {
  var t, s, i, o;
  let {
    title: u,
    shouldShowElement: d,
    cardVariantStyleInfo: c,
    description: _,
    titleClassName: E = "",
    subtitle: C = "",
    subtitleClassName: f
  } = e;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(l.Heading, {
      variant: "heading-xl/extrabold",
      className: r()(n.cardHeading, E),
      children: u
    }), 0 !== C.length && (null == d || d(null == c ? void 0 : c.subtitle)) && (0, a.jsx)(a.Fragment, {
      children: (0, a.jsxs)("div", {
        className: f,
        children: [(0, a.jsx)(l.Text, {
          variant: null !== (i = null == c ? void 0 : null === (t = c.subtitle) || void 0 === t ? void 0 : t.textVariant) && void 0 !== i ? i : "text-sm/normal",
          children: C
        }), null != _ && (0, a.jsx)(l.Text, {
          variant: null !== (o = null == c ? void 0 : null === (s = c.description) || void 0 === s ? void 0 : s.textVariant) && void 0 !== o ? o : "text-sm/normal",
          children: (0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsx)("br", {}), _]
          })
        })]
      })
    })]
  })
}