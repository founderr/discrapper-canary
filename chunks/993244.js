"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var l = n("37983"),
  i = n("884691"),
  a = n("430047"),
  s = e => {
    let {
      src: t,
      alt: n,
      size: s,
      "aria-label": r
    } = e, o = i.useRef(null), u = i.useRef(!1);
    return (0, l.jsx)("img", {
      className: u.current ? a.image : a.imageLoading,
      alt: n,
      src: t,
      ref: o,
      "aria-label": r,
      style: {
        backgroundSize: s,
        height: s,
        width: s
      },
      onLoad: u.current ? void 0 : () => {
        window.requestAnimationFrame(() => {
          null != o.current && (u.current = !0, o.current.classList.remove(a.imageLoading), o.current.classList.add(a.image))
        })
      }
    })
  }