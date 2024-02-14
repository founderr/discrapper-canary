"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var i = n("37983"),
  r = n("884691"),
  o = n("118810"),
  s = n("446674"),
  u = n("206230"),
  a = n("719347");
let l = e => {
  let {
    externalRef: t,
    autoPlay: n,
    playOnHover: l,
    responsive: c,
    mediaLayoutType: d,
    ...f
  } = e, _ = (0, s.useStateFromStores)([u.default], () => u.default.useReducedMotion), h = r.useRef(null);

  function E() {
    var e;
    l && (null == h || null === (e = h.current) || void 0 === e || e.play())
  }

  function A() {
    var e;
    l && (null == h || null === (e = h.current) || void 0 === e || e.pause())
  }
  return r.useLayoutEffect(() => () => {
    let {
      current: e
    } = h;
    null != e && function(e) {
      e.removeAttribute("src"), Array.from(e.children).forEach(e => {
        (0, o.isElement)(e, HTMLSourceElement) && (e.removeAttribute("src"), e.removeAttribute("type")), (0, o.isElement)(e, HTMLImageElement) && e.removeAttribute("src")
      });
      try {
        e.load()
      } catch (e) {}
    }(e)
  }, []), r.useLayoutEffect(() => ("function" == typeof t ? (t(null), t(h.current)) : null != t && (t.current = h.current), () => {
    "function" == typeof t ? t(null) : null != t && (t.current = null)
  }), [t, h]), (0, i.jsx)("video", {
    ref: h,
    autoPlay: !_ && !l && n,
    onMouseEnter: E,
    onMouseLeave: A,
    onFocus: E,
    onBlur: A,
    style: d === a.MediaLayoutType.MOSAIC ? {
      width: "100%",
      height: "100%",
      maxHeight: "inherit",
      objectFit: "cover"
    } : c ? function() {
      return {
        maxWidth: f.width,
        maxHeight: f.height,
        width: "100%",
        height: "100%"
      }
    }() : {},
    ...f
  })
};
var c = r.forwardRef((e, t) => (0, i.jsx)(l, {
  ...e,
  externalRef: t
}))