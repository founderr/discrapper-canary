"use strict";
n.r(t), n.d(t, {
  Banner: function() {
    return r
  }
});
var i = n("735250"),
  s = n("470079"),
  a = n("777207"),
  l = n("764254");

function r(e) {
  let {
    title: t,
    subtitle: n,
    iconSrc: r,
    backgroundSrc: o
  } = e, c = s.useMemo(() => {
    let e = null != o ? o : r;
    if (null != e) return {
      "--custom-background-url": "url(".concat(e.toString(), ")")
    }
  }, [o, r]);
  return (0, i.jsxs)("div", {
    className: l.wrapper,
    children: [(0, i.jsx)("div", {
      className: l.background,
      style: c
    }), (0, i.jsxs)("div", {
      className: l.content,
      children: [null != r && (0, i.jsx)("div", {
        className: l.icon,
        children: (0, i.jsx)("img", {
          src: r.toString(),
          alt: ""
        })
      }), (0, i.jsxs)("div", {
        children: [(0, i.jsx)(a.Text, {
          variant: "heading-xl/bold",
          tag: "div",
          children: t
        }), null != n && (0, i.jsxs)(a.Text, {
          variant: "text-sm/normal",
          children: ["“", n, "”"]
        })]
      })]
    }), null != o ? (0, i.jsx)("div", {
      className: l.image,
      style: {
        backgroundImage: "url(".concat(o.toString(), ")")
      }
    }) : null]
  })
}