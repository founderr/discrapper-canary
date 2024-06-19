var n = t(735250);
t(470079);
var a = t(120356),
  r = t.n(a),
  i = t(481060),
  l = t(689938),
  o = t(736289),
  _ = t(505944);
s.Z = e => {
  let {
    className: s,
    onBackClick: t
  } = e;
  return (0, n.jsxs)("div", {
    className: r()(o.container, s),
    "data-testid": "all-perks-hero-header",
    children: [(0, n.jsx)("img", {
      src: _,
      alt: "",
      className: o.headerArt
    }), (0, n.jsxs)("div", {
      className: o.containerInner,
      children: [(0, n.jsx)("div", {
        className: o.backButtonContainer,
        children: (0, n.jsxs)(i.Clickable, {
          onClick: t,
          className: o.backButton,
          children: [(0, n.jsx)(i.ChevronSmallLeftIcon, {
            color: "currentColor"
          }), l.Z.Messages.BACK]
        })
      }), (0, n.jsx)("div", {
        className: o.__invalid_contentContainer,
        children: (0, n.jsx)("div", {
          className: o.content,
          children: (0, n.jsx)(i.Heading, {
            variant: "display-lg",
            color: "always-white",
            children: l.Z.Messages.NITRO_HOME_ALL_YOUR_NITRO_PERKS
          })
        })
      })]
    })]
  })
}