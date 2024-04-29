"use strict";
a.r(t);
var n = a("735250");
a("470079");
var s = a("481060"),
  l = a("785681"),
  i = a("130310"),
  r = a("689938"),
  o = a("126045"),
  u = a("128216");
t.default = () => {
  let e = (0, l.useAgeSpecificText)(r.default.Messages.FAMILY_CENTER_ACTIVITY_DATA_CONFIRMATION_BANNER_DESCRIPTION_TEEN, r.default.Messages.FAMILY_CENTER_ACTIVITY_DATA_CONFIRMATION_BANNER_DESCRIPTION_PARENT);
  return (0, n.jsxs)("div", {
    className: o.container,
    children: [(0, n.jsxs)("div", {
      className: o.__invalid_content,
      children: [(0, n.jsx)(s.Heading, {
        className: o.header,
        variant: "heading-md/bold",
        children: (0, n.jsx)(s.HeadingLevel, {
          children: r.default.Messages.FAMILY_CENTER_ACTIVITY_DATA_CONFIRMATION_BANNER_HEADER
        })
      }), (0, n.jsx)(s.Text, {
        className: o.description,
        variant: "text-sm/medium",
        color: "text-muted",
        children: e
      }), (0, n.jsx)(i.default, {})]
    }), (0, n.jsx)("div", {
      className: o.artContainer,
      children: (0, n.jsx)("img", {
        src: u,
        alt: r.default.Messages.FAMILY_CENTER_ACTIVITY_DATA_CONFIRMATION_BANNER_ALT
      })
    })]
  })
}