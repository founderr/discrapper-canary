a.d(n, {
  Z: function() {
    return u
  }
});
var t = a(735250),
  i = a(470079),
  l = a(120356),
  s = a.n(l),
  r = a(481060),
  c = a(689938),
  o = a(624792),
  d = a(902294);

function u(e) {
  let {
    heading: n = c.Z.Messages.APP_DIRECTORY_ERROR_HEADING,
    body: a = c.Z.Messages.APP_DIRECTORY_ERROR_BODY,
    className: l
  } = e;
  return (0, t.jsxs)("div", {
    className: s()(o.container, l),
    children: [(0, t.jsx)("img", {
      className: o.image,
      src: d,
      alt: c.Z.Messages.APP_DIRECTORY_CONFUSED_CLYDE_IMAGE_ALT
    }), (0, t.jsxs)(i.Fragment, {
      children: [(0, t.jsx)(r.Heading, {
        className: o.header,
        variant: "heading-xl/semibold",
        children: n
      }), (0, t.jsx)(r.Text, {
        variant: "text-md/normal",
        children: a
      })]
    })]
  })
}