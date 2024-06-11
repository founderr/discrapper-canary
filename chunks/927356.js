"use strict";
a.r(t), a.d(t, {
  default: function() {
    return o
  }
});
var l = a("735250"),
  i = a("470079"),
  n = a("120356"),
  s = a.n(n),
  r = a("481060"),
  c = a("689938"),
  u = a("743689"),
  d = a("902294");

function o(e) {
  let {
    heading: t = c.default.Messages.APP_DIRECTORY_ERROR_HEADING,
    body: a = c.default.Messages.APP_DIRECTORY_ERROR_BODY,
    className: n
  } = e;
  return (0, l.jsxs)("div", {
    className: s()(u.container, n),
    children: [(0, l.jsx)("img", {
      className: u.image,
      src: d,
      alt: c.default.Messages.APP_DIRECTORY_CONFUSED_CLYDE_IMAGE_ALT
    }), (0, l.jsxs)(i.Fragment, {
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