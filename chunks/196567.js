n.d(s, {
  Z: function() {
    return a
  }
});
var t = n(735250);
n(470079);
var i = n(120356),
  l = n.n(i),
  r = n(481060),
  C = n(46446);

function a(e) {
  let {
    className: s,
    copy: n,
    bannerImage: i,
    textColor: a = "always-white"
  } = e;
  return (0, t.jsxs)("div", {
    className: l()(C.bannerContainer, s),
    children: [null == i ? null : (0, t.jsx)("img", {
      alt: "",
      className: C.banner,
      src: i
    }), (0, t.jsxs)("div", {
      className: C.textContainer,
      children: [(0, t.jsx)(r.GiftIcon, {
        size: "md",
        color: "currentColor",
        className: C.giftIcon
      }), (0, t.jsx)(r.Heading, {
        className: C.textHeader,
        color: a,
        variant: "eyebrow",
        children: n
      })]
    })]
  })
}