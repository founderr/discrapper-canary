"use strict";
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(986341);
t.Z = e => {
  let {
    src: t,
    alt: n,
    size: s,
    "aria-label": l,
    className: u
  } = e, _ = r.useRef(null), c = r.useRef(!1), d = c.current ? a.image : a.imageLoading;
  return (0, i.jsx)("img", {
    className: o()(d, u),
    alt: n,
    src: t,
    ref: _,
    "aria-label": l,
    style: {
      backgroundSize: s,
      height: s,
      width: s
    },
    onLoad: c.current ? void 0 : () => {
      window.requestAnimationFrame(() => {
        null != _.current && (c.current = !0, _.current.classList.remove(a.imageLoading), _.current.classList.add(a.image))
      })
    }
  })
}