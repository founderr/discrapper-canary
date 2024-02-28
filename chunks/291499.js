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
  } = e, p = l.useRef(!1), E = (0, a.default)([s.default], () => s.default.getDrawMode()), g = (0, u.default)((0, o.default)(t.id, n, c), f), C = (0, u.default)((0, d.default)(t.id, n, c), f), S = l.useCallback((e, t, n) => {
    if (null == m) return;
    let {
      x: l,
      y: a
    } = (0, r.getMouseCoordinatesPercent)(m, n);
    switch (t.type) {
      case i.DrawableType.LINE:
        return g[e](t, l, a);
      case i.DrawableType.EMOJI_HOSE:
        return C[e](t, l, a)
    }
  }, [m, g, C]), _ = l.useCallback(e => {
    h && null != E && (e.stopPropagation(), p.current = !0, S("handleMouseDown", E, e))
  }, [S, E, h]), I = l.useCallback(e => {
    h && null != E && (e.stopPropagation(), p.current && S("handleMouseMove", E, e))
  }, [S, E, h]), T = l.useCallback(e => {
    h && null != E && (e.stopPropagation(), p.current = !1, S("handleMouseUp", E, e))
  }, [S, E, h]), v = l.useCallback(e => {
    p.current && null != E && S("handleMouseEnter", E, e)
  }, [S, E]);
  l.useEffect(() => {
    let e = e => {
      null != E && (p.current = !1, S("handleMouseUp", E, e))
    };
    return window.addEventListener("mouseup", e), () => window.removeEventListener("mouseup", e)
  }, [S, E]);
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