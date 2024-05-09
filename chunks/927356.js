"use strict";
a.r(t), a.d(t, {
  default: function() {
    return d
  }
});
var l = a("735250"),
  n = a("470079"),
  s = a("120356"),
  i = a.n(s),
  r = a("481060"),
  c = a("689938"),
  u = a("743689"),
  o = a("902294");

function d(e) {
  let {
    heading: t = c.default.Messages.APP_DIRECTORY_ERROR_HEADING,
    body: a = c.default.Messages.APP_DIRECTORY_ERROR_BODY,
    className: s
  } = e;
  return (0, l.jsxs)("div", {
    className: i()(u.container, s),
    children: [(0, l.jsx)("img", {
      className: u.image,
      src: o,
      alt: c.default.Messages.APP_DIRECTORY_CONFUSED_CLYDE_IMAGE_ALT
    }), (0, l.jsxs)(n.Fragment, {
      children: [(0, l.jsx)(r.Heading, {
        className: u.header,
        variant: "heading-xl/semibold",
        children: t
      }), (0, l.jsx)(r.Text, {
        variant: "text-md/normal",
        children: a
      })]
    })]
  })
}