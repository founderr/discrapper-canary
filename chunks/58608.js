"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var r = n("37983"),
  i = n("884691"),
  u = n("118810"),
  o = n("446674"),
  s = n("206230"),
  a = n("719347");
let l = e => {
  let {
    externalRef: t,
    autoPlay: n,
    playOnHover: l,
    responsive: c,
    mediaLayoutType: d,
    ...E
  } = e, f = (0, o.useStateFromStores)([s.default], () => s.default.useReducedMotion), _ = i.useRef(null);

  function h() {
    var e;
    l && (null == _ || null === (e = _.current) || void 0 === e || e.play())
  }

  function I() {
    var e;
    l && (null == _ || null === (e = _.current) || void 0 === e || e.pause())
  }
  return i.useLayoutEffect(() => () => {
    let {
      current: e
    } = _;
    null != e && function(e) {
      e.removeAttribute("src"), Array.from(e.children).forEach(e => {
        (0, u.isElement)(e, HTMLSourceElement) && (e.removeAttribute("src"), e.removeAttribute("type")), (0, u.isElement)(e, HTMLImageElement) && e.removeAttribute("src")
      });
      try {
        e.load()
      } catch (e) {}
    }(e)
  }, []), i.useLayoutEffect(() => ("function" == typeof t ? (t(null), t(_.current)) : null != t && (t.current = _.current), () => {
    "function" == typeof t ? t(null) : null != t && (t.current = null)
  }), [t, _]), (0, r.jsx)("video", {
    ref: _,
    autoPlay: !f && !l && n,
    onMouseEnter: h,
    onMouseLeave: I,
    onFocus: h,
    onBlur: I,
    style: d === a.MediaLayoutType.MOSAIC ? {
      width: "100%",
      height: "100%",
      maxHeight: "inherit",
      objectFit: "cover"
    } : c ? function() {
      return {
        maxWidth: E.width,
        maxHeight: E.height,
        width: "100%",
        height: "100%"
      }
    }() : {},
    ...E
  })
};
var c = i.forwardRef((e, t) => (0, r.jsx)(l, {
  ...e,
  externalRef: t
}))