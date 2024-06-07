"use strict";
s.r(t);
var a = s("735250");
s("470079");
var n = s("481060"),
  l = s("785681"),
  i = s("130310"),
  r = s("689938"),
  o = s("126045"),
  u = s("128216");
t.default = () => {
  let e = (0, l.useAgeSpecificText)(r.default.Messages.FAMILY_CENTER_ACTIVITY_DATA_CONFIRMATION_BANNER_DESCRIPTION_TEEN, r.default.Messages.FAMILY_CENTER_ACTIVITY_DATA_CONFIRMATION_BANNER_DESCRIPTION_PARENT);
  return (0, a.jsxs)("div", {
    className: o.container,
    children: [(0, a.jsxs)("div", {
      className: o.__invalid_content,
      children: [(0, a.jsx)(n.Heading, {
        className: o.header,
        variant: "heading-md/bold",
        children: (0, a.jsx)(n.HeadingLevel, {
          children: r.default.Messages.FAMILY_CENTER_ACTIVITY_DATA_CONFIRMATION_BANNER_HEADER
        })
      }), (0, a.jsx)(n.Text, {
        className: o.description,
        variant: "text-sm/medium",
        color: "text-muted",
        children: e
      }), (0, a.jsx)(i.default, {})]
    }), (0, a.jsx)("div", {
      className: o.artContainer,
      children: (0, a.jsx)("img", {
        src: u,
        alt: r.default.Messages.FAMILY_CENTER_ACTIVITY_DATA_CONFIRMATION_BANNER_ALT
      })
    })]
  })
}