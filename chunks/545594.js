n.d(t, {
  i: function() {
    return r
  }
});
var l = n(735250);
n(470079);
var i = n(120356),
  s = n.n(i),
  a = n(67788);

function r(e) {
  let {
    bannerIcon: t,
    bannerHeader: n,
    bannerSubtext: i,
    containerStyles: r,
    headerStyles: o,
    children: c
  } = e;
  return (0, l.jsxs)("div", {
    className: a.spamBanner,
    children: [(0, l.jsxs)("div", {
      className: s()(a.bannerTextContainer, r),
      children: ["string" == typeof t ? (0, l.jsx)("img", {
        src: t,
        alt: "",
        className: a.bannerIcon
      }) : t, (0, l.jsxs)("div", {
        className: a.bannerText,
        children: [(0, l.jsx)("div", {
          className: s()(a.bannerHeader, o),
          children: n
        }), (0, l.jsx)("div", {
          className: a.bannerSubtext,
          children: i
        })]
      })]
    }), (0, l.jsx)("div", {
      className: a.actionButtons,
      children: c
    })]
  })
}