"use strict";
a.r(t);
var n = a("735250"),
  s = a("470079"),
  l = a("512722"),
  i = a.n(l),
  r = a("481060"),
  o = a("176299"),
  u = a("512847"),
  d = a("612226"),
  c = a("714338"),
  f = a("607070"),
  E = a("317858"),
  h = a("635395"),
  _ = a("5560"),
  C = a("451478"),
  m = a("585483"),
  S = a("145604"),
  p = a("556766"),
  I = a("718813"),
  T = a("981631"),
  g = a("750950");
t.default = s.memo(function() {
  let e = s.useRef(null),
    t = s.useCallback(t => {
      let {
        duration: a,
        intensity: n
      } = t;
      if (f.default.useReducedMotion || !C.default.isFocused()) return;
      let {
        current: s
      } = e;
      i()(null != s, "Shakeable is shaken when not mounted"), s.shake(a, n)
    }, []);
  return s.useEffect(() => (c.default.setLayout(d.default), c.default.enable(), () => c.default.disable()), []), s.useEffect(() => (m.ComponentDispatch.subscribe(T.ComponentActions.SHAKE_APP, t), () => {
    m.ComponentDispatch.unsubscribe(T.ComponentActions.SHAKE_APP, t)
  }), [t]), (0, E.default)(), (0, n.jsxs)(r.Shakeable, {
    ref: e,
    className: g.app,
    children: [(0, n.jsx)(I.default, {
      className: g.layers,
      children: (0, n.jsx)(o.default, {})
    }), (0, n.jsx)(h.default, {}), (0, n.jsx)(u.default, {}), (0, n.jsx)(S.default, {}), (0, n.jsx)(_.default, {}), (0, n.jsx)(r.DnDKeyboardHelpBar, {}), (0, n.jsx)(p.default, {})]
  })
})