"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var l = n("37983"),
  s = n("884691"),
  a = n("414456"),
  i = n.n(a),
  r = n("77078"),
  u = n("374665");

function o(e) {
  let {
    children: t,
    "aria-label": n,
    className: a,
    position: o
  } = e, d = s.useRef(null), c = null != n ? n : "string" == typeof t && t;
  return (0, l.jsx)(r.Tooltip, {
    position: null != o ? o : "top",
    delay: 500,
    text: t,
    "aria-label": c,
    children: n => {
      let {
        onMouseEnter: s,
        onMouseLeave: r
      } = n;
      return (0, l.jsx)("div", {
        className: i(a, u.overflow),
        ref: d,
        "aria-hidden": e["aria-hidden"],
        onMouseEnter: () => {
          let {
            current: e
          } = d;
          null != e && e.offsetWidth < e.scrollWidth && (null == s || s())
        },
        onMouseLeave: r,
        children: t
      })
    }
  })
}