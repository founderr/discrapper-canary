"use strict";
i.r(t), i.d(t, {
  default: function() {
    return r
  }
});
var n = i("37983"),
  s = i("884691"),
  l = i("430047"),
  r = e => {
    let {
      src: t,
      alt: i,
      size: r,
      "aria-label": a
    } = e, o = s.useRef(null), u = s.useRef(!1);
    return (0, n.jsx)("img", {
      className: u.current ? l.image : l.imageLoading,
      alt: i,
      src: t,
      ref: o,
      "aria-label": a,
      style: {
        backgroundSize: r,
        height: r,
        width: r
      },
      onLoad: u.current ? void 0 : () => {
        window.requestAnimationFrame(() => {
          null != o.current && (u.current = !0, o.current.classList.remove(l.imageLoading), o.current.classList.add(l.image))
        })
      }
    })
  }