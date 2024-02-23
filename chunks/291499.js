"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var l = n("884691"),
  a = n("65597"),
  s = n("242260"),
  i = n("315841"),
  r = n("52477"),
  u = n("306645"),
  o = n("195513"),
  d = n("107517");

function c(e) {
  let {
    user: t,
    channelId: n,
    streamerId: c,
    stream: f,
    focused: h,
    canvas: m
  } = e, p = l.useRef(!1), E = (0, a.default)([s.default], () => s.default.getDrawMode()), g = (0, u.default)((0, o.default)(t.id, n, c), f), S = (0, u.default)((0, d.default)(t.id, n, c), f), C = l.useCallback((e, t, n) => {
    if (null == m) return;
    let {
      x: l,
      y: a
    } = (0, r.getMouseCoordinatesPercent)(m, n);
    switch (t.type) {
      case i.DrawableType.LINE:
        return g[e](t, l, a);
      case i.DrawableType.EMOJI_HOSE:
        return S[e](t, l, a)
    }
  }, [m, g, S]), _ = l.useCallback(e => {
    h && null != E && (e.stopPropagation(), p.current = !0, C("handleMouseDown", E, e))
  }, [C, E, h]), I = l.useCallback(e => {
    h && null != E && (e.stopPropagation(), p.current && C("handleMouseMove", E, e))
  }, [C, E, h]), T = l.useCallback(e => {
    h && null != E && (e.stopPropagation(), p.current = !1, C("handleMouseUp", E, e))
  }, [C, E, h]), v = l.useCallback(e => {
    p.current && null != E && C("handleMouseEnter", E, e)
  }, [C, E]);
  l.useEffect(() => {
    let e = e => {
      null != E && (p.current = !1, C("handleMouseUp", E, e))
    };
    return window.addEventListener("mouseup", e), () => window.removeEventListener("mouseup", e)
  }, [C, E]);
  let x = l.useCallback(e => {
    h && null != E && e.stopPropagation()
  }, [E, h]);
  return {
    handleClick: x,
    handleMouseDown: _,
    handleMouseEnter: v,
    handleMouseMove: I,
    handleMouseUp: T
  }
}