n.d(t, {
  Z: function() {
    return d
  }
});
var l = n(470079),
  i = n(399606),
  s = n(673125),
  a = n(292793),
  r = n(88315),
  o = n(179295),
  c = n(370663),
  u = n(743597);

function d(e) {
  let {
    user: t,
    channelId: n,
    streamerId: d,
    stream: h,
    focused: m,
    canvas: E
  } = e, p = l.useRef(!1), g = (0, i.e7)([s.Z], () => s.Z.getDrawMode()), f = (0, o.Z)((0, c.Z)(t.id, n, d), h), C = (0, o.Z)((0, u.Z)(t.id, n, d), h), _ = l.useCallback((e, t, n) => {
    if (null == E) return;
    let {
      x: l,
      y: i
    } = (0, r.hn)(E, n);
    switch (t.type) {
      case a.W.LINE:
        return f[e](t, l, i);
      case a.W.EMOJI_HOSE:
        return C[e](t, l, i)
    }
  }, [E, f, C]), I = l.useCallback(e => {
    if (!!m && null != g) e.stopPropagation(), p.current = !0, _("handleMouseDown", g, e)
  }, [_, g, m]), x = l.useCallback(e => {
    if (!!m && null != g) e.stopPropagation(), p.current && _("handleMouseMove", g, e)
  }, [_, g, m]), T = l.useCallback(e => {
    if (!!m && null != g) e.stopPropagation(), p.current = !1, _("handleMouseUp", g, e)
  }, [_, g, m]), N = l.useCallback(e => {
    if (!!p.current && null != g) _("handleMouseEnter", g, e)
  }, [_, g]);
  return l.useEffect(() => {
    let e = e => {
      if (null != g) p.current = !1, _("handleMouseUp", g, e)
    };
    return window.addEventListener("mouseup", e), () => window.removeEventListener("mouseup", e)
  }, [_, g]), {
    handleClick: l.useCallback(e => {
      m && null != g && e.stopPropagation()
    }, [g, m]),
    handleMouseDown: I,
    handleMouseEnter: N,
    handleMouseMove: x,
    handleMouseUp: T
  }
}