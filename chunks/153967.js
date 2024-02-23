"use strict";
n.r(t), n.d(t, {
  Banner: function() {
    return a
  }
});
var i = n("37983");
n("884691");
var r = n("75979");

function a(e) {
  let {
    title: t,
    subtitle: n,
    iconSrc: a,
    backgroundSrc: s
  } = e;
  return (0, i.jsxs)("div", {
    className: r.wrapper,
    style: null != s ? {
      backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%), url(".concat(s.toString(), ")")
    } : void 0,
    children: [null != a && (0, i.jsx)("div", {
      className: r.icon,
      children: (0, i.jsx)("img", {
        src: a.toString(),
        alt: ""
      })
    }), (0, i.jsxs)("div", {
      className: r.textWrapper,
      children: [(0, i.jsx)("div", {
        className: r.title,
        children: t
      }), null != n && (0, i.jsx)("div", {
        className: r.subtitle,
        children: n
      })]
    })]
  })
}