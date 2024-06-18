"use strict";
n.d(t, {
  y: function() {
    return d
  }
}), n(47120);
var i, r, s = n(735250);
n(470079);
var o = n(120356),
  a = n.n(o),
  l = n(392711),
  u = n.n(l),
  _ = n(692547),
  c = n(557130);

function d(e) {
  let {
    className: t,
    percents: n,
    size: i = "small",
    foregroundColors: r = [_.Z.unsafe_rawColors.BRAND_500.css],
    backgroundColor: o = "var(--background-modifier-active)",
    animate: l = !0
  } = e, d = u().zip(n, r).map((e, t) => {
    let n, [r, o] = e;
    return n = Array.isArray(o) ? {
      background: "linear-gradient(to right, ".concat(o[0], ", ").concat(o[1], ")")
    } : {
      backgroundColor: o
    }, (0, s.jsx)("div", {
      className: a()(c.progressBar, c[i], {
        [c.animating]: l
      }),
      style: {
        transform: "translate3d(".concat(Math.min(Math.max(0, r), 100) - 100, "%, 0, 0)"),
        ...n
      }
    }, t)
  }).reverse();
  return (0, s.jsx)("div", {
    className: a()(t, c.progress, c[i]),
    style: {
      backgroundColor: o
    },
    children: d
  })
}(r = i || (i = {})).XSMALL = "xsmall", r.SMALL = "small", r.LARGE = "large", d.Sizes = i