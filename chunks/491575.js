var i = n(735250),
  s = n(470079),
  l = n(512722),
  a = n.n(l),
  r = n(481060),
  o = n(176299),
  c = n(512847),
  u = n(612226),
  d = n(714338),
  E = n(607070),
  h = n(317858),
  _ = n(635395),
  I = n(5560),
  m = n(451478),
  g = n(585483),
  p = n(145604),
  N = n(718813),
  T = n(981631),
  C = n(352867);
t.Z = s.memo(function() {
  let e = s.useRef(null),
    t = s.useCallback(t => {
      let {
        duration: n,
        intensity: i
      } = t;
      if (E.Z.useReducedMotion || !m.Z.isFocused()) return;
      let {
        current: s
      } = e;
      a()(null != s, "Shakeable is shaken when not mounted"), s.shake(n, i)
    }, []);
  return s.useEffect(() => (d.Z.setLayout(u.ZP), d.Z.enable(), () => d.Z.disable()), []), s.useEffect(() => (g.S.subscribe(T.CkL.SHAKE_APP, t), () => {
    g.S.unsubscribe(T.CkL.SHAKE_APP, t)
  }), [t]), (0, h.Z)(), (0, i.jsxs)(r.Shakeable, {
    ref: e,
    className: C.app,
    children: [(0, i.jsx)(N.Z, {
      className: C.layers,
      children: (0, i.jsx)(o.Z, {})
    }), (0, i.jsx)(_.Z, {}), (0, i.jsx)(c.Z, {}), (0, i.jsx)(p.Z, {}), (0, i.jsx)(I.Z, {}), (0, i.jsx)(r.DnDKeyboardHelpBar, {})]
  })
})