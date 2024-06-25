var n = s(735250);
s(470079);
var a = s(120356),
  i = s.n(a),
  r = s(481060),
  l = s(927231);
t.Z = e => {
  var t, s, a, o;
  let {
    title: c,
    shouldShowElement: E,
    cardVariantStyleInfo: _,
    description: u,
    titleClassName: d = "",
    subtitle: T = "",
    subtitleClassName: I
  } = e;
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(r.Heading, {
      variant: "heading-xl/extrabold",
      className: i()(l.cardHeading, d),
      children: c
    }), 0 !== T.length && (null == E || E(null == _ ? void 0 : _.subtitle)) && (0, n.jsx)(n.Fragment, {
      children: (0, n.jsxs)("div", {
        className: I,
        children: [(0, n.jsx)(r.Text, {
          variant: null !== (a = null == _ ? void 0 : null === (t = _.subtitle) || void 0 === t ? void 0 : t.textVariant) && void 0 !== a ? a : "text-sm/normal",
          children: T
        }), null != u && (0, n.jsx)(r.Text, {
          variant: null !== (o = null == _ ? void 0 : null === (s = _.description) || void 0 === s ? void 0 : s.textVariant) && void 0 !== o ? o : "text-sm/normal",
          children: (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)("br", {}), u]
          })
        })]
      })
    })]
  })
}