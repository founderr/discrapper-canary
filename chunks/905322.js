"use strict";
n.r(t), n.d(t, {
  Banner: function() {
    return l
  }
});
var i = n("735250"),
  r = n("470079"),
  s = n("777207"),
  a = n("764254");

function l(e) {
  let {
    title: t,
    subtitle: n,
    iconSrc: l,
    backgroundSrc: o,
    animatedBackgroundSrc: c,
    prefersReducedMotion: d = !0
  } = e, u = r.useMemo(() => {
    let e = null != o ? o : l;
    if (null != e) return {
      "--custom-background-url": "url(".concat(e.toString(), ")")
    }
  }, [o, l]), f = r.useMemo(() => {
    if (null == o) return;
    let e = {
      "--custom-background-static": "url(".concat(o.toString())
    };
    return !d && null != c && (e["--custom-background-animated"] = "url(".concat(c.toString(), ")")), e
  }, [c, o, d]);
  return (0, i.jsxs)("div", {
    className: a.wrapper,
    children: [(0, i.jsx)("div", {
      className: a.background,
      style: u
    }), (0, i.jsxs)("div", {
      className: a.content,
      children: [null != l && (0, i.jsx)("div", {
        className: a.icon,
        children: (0, i.jsx)("img", {
          src: l.toString(),
          alt: ""
        })
      }), (0, i.jsxs)("div", {
        children: [(0, i.jsx)(s.Text, {
          variant: "heading-xl/bold",
          tag: "div",
          children: t
        }), null != n && (0, i.jsxs)(s.Text, {
          variant: "text-sm/normal",
          children: ["“", n, "”"]
        })]
      })]
    }), null != o ? (0, i.jsx)("div", {
      className: a.image,
      style: f
    }) : null]
  })
}