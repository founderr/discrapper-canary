"use strict";
n.r(t), n.d(t, {
  Banner: function() {
    return r
  }
});
var i = n("37983");
n("884691");
var a = n("75979");

function r(e) {
  let {
    title: t,
    subtitle: n,
    iconSrc: r,
    backgroundSrc: s
  } = e;
  return (0, i.jsxs)("div", {
    className: a.wrapper,
    style: null != s ? {
      backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%), url(".concat(s.toString(), ")")
    } : void 0,
    children: [null != r && (0, i.jsx)("div", {
      className: a.icon,
      children: (0, i.jsx)("img", {
        src: r.toString(),
        alt: ""
      })
    }), (0, i.jsxs)("div", {
      className: a.textWrapper,
      children: [(0, i.jsx)("div", {
        className: a.title,
        children: t
      }), null != n && (0, i.jsx)("div", {
        className: a.subtitle,
        children: n
      })]
    })]
  })
}