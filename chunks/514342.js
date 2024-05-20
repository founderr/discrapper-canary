"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var i = n("735250"),
  r = n("470079"),
  s = n("120356"),
  a = n.n(s),
  o = n("481060"),
  l = n("69649");

function u(e) {
  let {
    children: t,
    "aria-label": n,
    className: s,
    position: u,
    ...d
  } = e, _ = r.useRef(null), c = null != n ? n : "string" == typeof t && t;
  return (0, i.jsx)(o.Tooltip, {
    ...d,
    position: null != u ? u : "top",
    delay: 500,
    text: t,
    "aria-label": c,
    children: n => {
      let {
        onMouseEnter: r,
        onMouseLeave: o
      } = n;
      return (0, i.jsx)("div", {
        className: a()(s, l.overflow),
        ref: _,
        "aria-hidden": e["aria-hidden"],
        onMouseEnter: () => {
          let {
            current: e
          } = _;
          null != e && e.offsetWidth < e.scrollWidth && (null == r || r())
        },
        onMouseLeave: o,
        children: t
      })
    }
  })
}