"use strict";
n.r(t);
var a = n("735250"),
  s = n("470079"),
  i = n("512722"),
  l = n.n(i),
  r = n("481060"),
  o = n("176299"),
  u = n("512847"),
  d = n("612226"),
  c = n("714338"),
  f = n("607070"),
  E = n("317858"),
  h = n("635395"),
  _ = n("5560"),
  C = n("451478"),
  m = n("585483"),
  S = n("145604"),
  p = n("718813"),
  I = n("981631"),
  g = n("796163");
t.default = s.memo(function() {
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
      l()(null != s, "Shakeable is shaken when not mounted"), s.shake(n, a)
    }, []);
  return s.useEffect(() => (c.default.setLayout(d.default), c.default.enable(), () => c.default.disable()), []), s.useEffect(() => (m.ComponentDispatch.subscribe(I.ComponentActions.SHAKE_APP, t), () => {
    m.ComponentDispatch.unsubscribe(I.ComponentActions.SHAKE_APP, t)
  }), [t]), (0, E.default)(), (0, a.jsxs)(r.Shakeable, {
    ref: e,
    className: g.app,
    children: [(0, a.jsx)(p.default, {
      className: g.layers,
      children: (0, a.jsx)(o.default, {})
    }), (0, a.jsx)(h.default, {}), (0, a.jsx)(u.default, {}), (0, a.jsx)(S.default, {}), (0, a.jsx)(_.default, {}), (0, a.jsx)(r.DnDKeyboardHelpBar, {})]
  })
})