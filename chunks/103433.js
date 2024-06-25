var n = s(735250);
s(470079);
var a = s(120356),
  i = s.n(a),
  r = s(481060),
  l = s(689938),
  o = s(736289),
  c = s(505944);
t.Z = e => {
  let {
    className: t,
    onBackClick: s
  } = e;
  return (0, n.jsxs)("div", {
    className: i()(o.container, t),
    "data-testid": "all-perks-hero-header",
    children: [(0, n.jsx)("img", {
      src: c,
      alt: "",
      className: o.headerArt
    }), (0, n.jsxs)("div", {
      className: o.containerInner,
      children: [(0, n.jsx)("div", {
        className: o.backButtonContainer,
        children: (0, n.jsxs)(r.Clickable, {
          onClick: s,
          className: o.backButton,
          children: [(0, n.jsx)(r.ChevronSmallLeftIcon, {
            color: "currentColor"
          }), l.Z.Messages.BACK]
        })
      }), (0, n.jsx)("div", {
        className: o.__invalid_contentContainer,
        children: (0, n.jsx)("div", {
          className: o.content,
          children: (0, n.jsx)(r.Heading, {
            variant: "display-lg",
            color: "always-white",
            children: l.Z.Messages.NITRO_HOME_ALL_YOUR_NITRO_PERKS
          })
        })
      })]
    })]
  })
}