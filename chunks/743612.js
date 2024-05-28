"use strict";
s.r(t);
var a = s("735250");
s("470079");
var r = s("120356"),
  i = s.n(r),
  n = s("481060"),
  l = s("955627");
t.default = e => {
  var t, s, r, o;
  let {
    title: u,
    shouldShowElement: c,
    cardVariantStyleInfo: d,
    description: _,
    titleClassName: E = "",
    subtitle: R = "",
    subtitleClassName: T
  } = e;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(n.Heading, {
      variant: "heading-xl/extrabold",
      className: i()(l.cardHeading, E),
      children: u
    }), 0 !== R.length && (null == c || c(null == d ? void 0 : d.subtitle)) && (0, a.jsx)(a.Fragment, {
      children: (0, a.jsxs)("div", {
        className: T,
        children: [(0, a.jsx)(n.Text, {
          variant: null !== (r = null == d ? void 0 : null === (t = d.subtitle) || void 0 === t ? void 0 : t.textVariant) && void 0 !== r ? r : "text-sm/normal",
          children: R
        }), null != _ && (0, a.jsx)(n.Text, {
          variant: null !== (o = null == d ? void 0 : null === (s = d.description) || void 0 === s ? void 0 : s.textVariant) && void 0 !== o ? o : "text-sm/normal",
          children: (0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsx)("br", {}), _]
          })
        })]
      })
    })]
  })
}