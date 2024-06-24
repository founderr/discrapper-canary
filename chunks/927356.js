n.d(a, {
  Z: function() {
    return u
  }
});
var t = n(735250),
  i = n(470079),
  l = n(120356),
  s = n.n(l),
  r = n(481060),
  c = n(689938),
  o = n(624792),
  d = n(902294);

function u(e) {
  let {
    heading: a = c.Z.Messages.APP_DIRECTORY_ERROR_HEADING,
    body: n = c.Z.Messages.APP_DIRECTORY_ERROR_BODY,
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
        children: a
      }), (0, t.jsx)(r.Text, {
        variant: "text-md/normal",
        children: n
      })]
    })]
  })
}