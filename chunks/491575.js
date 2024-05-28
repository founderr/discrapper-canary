"use strict";
n.r(t);
var a = n("735250"),
  s = n("470079"),
  l = n("512722"),
  i = n.n(l),
  r = n("481060"),
  o = n("176299"),
  u = n("512847"),
  d = n("612226"),
  c = n("714338"),
  f = n("607070"),
  E = n("317858"),
  C = n("635395"),
  h = n("5560"),
  _ = n("451478"),
  S = n("585483"),
  m = n("145604"),
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
      if (f.default.useReducedMotion || !_.default.isFocused()) return;
      let {
        current: s
      } = e;
      i()(null != s, "Shakeable is shaken when not mounted"), s.shake(n, a)
    }, []);
  return s.useEffect(() => (c.default.setLayout(d.default), c.default.enable(), () => c.default.disable()), []), s.useEffect(() => (S.ComponentDispatch.subscribe(I.ComponentActions.SHAKE_APP, t), () => {
    S.ComponentDispatch.unsubscribe(I.ComponentActions.SHAKE_APP, t)
  }), [t]), (0, E.default)(), (0, a.jsxs)(r.Shakeable, {
    ref: e,
    className: g.app,
    children: [(0, a.jsx)(p.default, {
      className: g.layers,
      children: (0, a.jsx)(o.default, {})
    }), (0, a.jsx)(C.default, {}), (0, a.jsx)(u.default, {}), (0, a.jsx)(m.default, {}), (0, a.jsx)(h.default, {}), (0, a.jsx)(r.DnDKeyboardHelpBar, {})]
  })
})