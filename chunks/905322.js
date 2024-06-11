"use strict";
i.r(t), i.d(t, {
  Banner: function() {
    return r
  }
});
var n = i("735250"),
  l = i("470079"),
  s = i("777207"),
  a = i("156440");

function r(e) {
  let {
    title: t,
    subtitle: i,
    iconSrc: r,
    backgroundSrc: o,
    animatedBackgroundSrc: d,
    prefersReducedMotion: u = !0
  } = e, c = l.useMemo(() => {
    let e = null != o ? o : r;
    if (null != e) return {
      "--custom-background-url": "url(".concat(e.toString(), ")")
    }
  }, [o, r]), p = l.useMemo(() => {
    if (null == o) return;
    let e = {
      "--custom-background-static": "url(".concat(o.toString())
    };
    return !u && null != d && (e["--custom-background-animated"] = "url(".concat(d.toString(), ")")), e
  }, [d, o, u]);
  return (0, n.jsxs)("div", {
    className: a.wrapper,
    children: [(0, n.jsx)("div", {
      className: a.background,
      style: c
    }), (0, n.jsxs)("div", {
      className: a.content,
      children: [null != r && (0, n.jsx)("div", {
        className: a.icon,
        children: (0, n.jsx)("img", {
          src: r.toString(),
          alt: ""
        })
      }), (0, n.jsxs)("div", {
        children: [(0, n.jsx)(s.Text, {
          variant: "heading-xl/bold",
          tag: "div",
          children: t
        }), null != i && (0, n.jsxs)(s.Text, {
          variant: "text-sm/normal",
          children: ["“", i, "”"]
        })]
      })]
    }), null != o ? (0, n.jsx)("div", {
      className: a.image,
      style: p
    }) : null]
  })
}