"use strict";
s.r(t), s.d(t, {
  default: function() {
    return c
  }
});
var a = s("37983");
s("884691");
var n = s("414456"),
  i = s.n(n),
  r = s("448052"),
  l = s("77078"),
  u = s("782340"),
  o = s("16358"),
  d = s("460026"),
  c = e => {
    let {
      className: t,
      onBackClick: s
    } = e;
    return (0, a.jsxs)("div", {
      className: i(o.container, t),
      "data-testid": "all-perks-hero-header",
      children: [(0, a.jsx)("img", {
        src: d,
        alt: "",
        className: o.headerArt
      }), (0, a.jsxs)("div", {
        className: o.containerInner,
        children: [(0, a.jsx)("div", {
          className: o.backButtonContainer,
          children: (0, a.jsxs)(l.Clickable, {
            onClick: s,
            className: o.backButton,
            children: [(0, a.jsx)(r.ChevronSmallLeftIcon, {
              color: "currentColor"
            }), u.default.Messages.BACK]
          })
        }), (0, a.jsx)("div", {
          className: o.contentContainer,
          children: (0, a.jsx)("div", {
            className: o.content,
            children: (0, a.jsx)(l.Heading, {
              variant: "display-lg",
              color: "always-white",
              children: u.default.Messages.NITRO_HOME_ALL_YOUR_NITRO_PERKS
            })
          })
        })]
      })]
    })
  }