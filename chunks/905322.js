"use strict";
n.r(t), n.d(t, {
  Banner: function() {
    return r
  }
});
var i = n("735250"),
  s = n("470079"),
  l = n("777207"),
  a = n("764254");

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
    className: a.wrapper,
    children: [(0, i.jsx)("div", {
      className: a.background,
      style: c
    }), (0, i.jsxs)("div", {
      className: a.content,
      children: [null != r && (0, i.jsx)("div", {
        className: a.icon,
        children: (0, i.jsx)("img", {
          src: r.toString(),
          alt: ""
        })
      }), (0, i.jsxs)("div", {
        children: [(0, i.jsx)(l.Text, {
          variant: "heading-xl/bold",
          tag: "div",
          children: t
        }), null != n && (0, i.jsxs)(l.Text, {
          variant: "text-sm/normal",
          children: ["“", n, "”"]
        })]
      })]
    }), null != o ? (0, i.jsx)("div", {
      className: a.image,
      style: {
        backgroundImage: "url(".concat(o.toString(), ")")
      }
    }) : null]
  })
}