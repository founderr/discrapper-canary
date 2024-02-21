"use strict";
n.r(t), n.d(t, {
  default: function() {
    return A
  }
});
var a = n("37983"),
  s = n("884691"),
  i = n("627445"),
  l = n.n(i),
  r = n("77078"),
  o = n("252917"),
  u = n("945183"),
  d = n("493765"),
  c = n("485328"),
  f = n("206230"),
  E = n("105437"),
  h = n("126090"),
  _ = n("53889"),
  C = n("471671"),
  I = n("659500"),
  S = n("214875"),
  m = n("223415"),
  p = n("399174"),
  T = n("49111"),
  g = n("793932"),
  A = s.memo(function() {
    let e = s.useRef(null),
      t = s.useCallback(t => {
        let {
          duration: n,
          intensity: a
        } = t;
        if (f.default.useReducedMotion || !C.default.isFocused()) return;
        let {
          current: s
        } = e;
        l(null != s, "Shakeable is shaken when not mounted"), s.shake(n, a)
      }, []);
    return s.useEffect(() => (c.default.setLayout(d.default), c.default.enable(), () => c.default.disable()), []), s.useEffect(() => (I.ComponentDispatch.subscribe(T.ComponentActions.SHAKE_APP, t), () => {
      I.ComponentDispatch.unsubscribe(T.ComponentActions.SHAKE_APP, t)
    }), [t]), (0, E.default)(), (0, a.jsxs)(r.Shakeable, {
      ref: e,
      className: g.app,
      children: [(0, a.jsx)(p.default, {
        className: g.layers,
        children: (0, a.jsx)(o.default, {})
      }), (0, a.jsx)(h.default, {}), (0, a.jsx)(u.default, {}), (0, a.jsx)(S.default, {}), (0, a.jsx)(_.default, {}), (0, a.jsx)(r.DnDKeyboardHelpBar, {}), (0, a.jsx)(m.default, {})]
    })
  })