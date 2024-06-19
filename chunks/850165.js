t.d(n, {
  Z: function() {
    return a
  }
});
var s = t(735250);
t(470079);
var o = t(481060),
  r = t(897583);

function a(e) {
  let {
    heroImageSrc: n,
    heroImageAlt: t,
    children: a,
    header: i,
    description: c
  } = e;
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)("img", {
      src: n,
      alt: t,
      className: r.heroImage
    }), (0, s.jsxs)(o.ModalContent, {
      className: r.body,
      children: [(0, s.jsxs)("div", {
        className: r.textContainer,
        children: [(0, s.jsx)(o.Heading, {
          variant: "heading-xl/semibold",
          color: "header-primary",
          children: i
        }), null != c && (0, s.jsx)(o.Text, {
          variant: "text-md/medium",
          color: "header-secondary",
          className: r.description,
          children: c
        })]
      }), a]
    })]
  })
}