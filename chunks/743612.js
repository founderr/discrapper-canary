var n = t(735250);
t(470079);
var a = t(120356),
  r = t.n(a),
  i = t(481060),
  l = t(52689);
s.Z = e => {
  var s, t, a, o;
  let {
    title: _,
    shouldShowElement: c,
    cardVariantStyleInfo: E,
    description: u,
    titleClassName: R = "",
    subtitle: d = "",
    subtitleClassName: I
  } = e;
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(i.Heading, {
      variant: "heading-xl/extrabold",
      className: r()(l.cardHeading, R),
      children: _
    }), 0 !== d.length && (null == c || c(null == E ? void 0 : E.subtitle)) && (0, n.jsx)(n.Fragment, {
      children: (0, n.jsxs)("div", {
        className: I,
        children: [(0, n.jsx)(i.Text, {
          variant: null !== (a = null == E ? void 0 : null === (s = E.subtitle) || void 0 === s ? void 0 : s.textVariant) && void 0 !== a ? a : "text-sm/normal",
          children: d
        }), null != u && (0, n.jsx)(i.Text, {
          variant: null !== (o = null == E ? void 0 : null === (t = E.description) || void 0 === t ? void 0 : t.textVariant) && void 0 !== o ? o : "text-sm/normal",
          children: (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)("br", {}), u]
          })
        })]
      })
    })]
  })
}