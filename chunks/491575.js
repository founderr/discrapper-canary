var s = n(735250),
  i = n(470079),
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
  T = n(585483),
  g = n(145604),
  p = n(718813),
  N = n(981631),
  S = n(352867);
t.Z = i.memo(function() {
  let e = i.useRef(null),
    t = i.useCallback(t => {
      let {
        duration: n,
        intensity: s
      } = t;
      if (E.Z.useReducedMotion || !m.Z.isFocused()) return;
      let {
        current: i
      } = e;
      a()(null != i, "Shakeable is shaken when not mounted"), i.shake(n, s)
    }, []);
  return i.useEffect(() => (d.Z.setLayout(u.ZP), d.Z.enable(), () => d.Z.disable()), []), i.useEffect(() => (T.S.subscribe(N.CkL.SHAKE_APP, t), () => {
    T.S.unsubscribe(N.CkL.SHAKE_APP, t)
  }), [t]), (0, h.Z)(), (0, s.jsxs)(r.Shakeable, {
    ref: e,
    className: S.app,
    children: [(0, s.jsx)(p.Z, {
      className: S.layers,
      children: (0, s.jsx)(o.Z, {})
    }), (0, s.jsx)(_.Z, {}), (0, s.jsx)(c.Z, {}), (0, s.jsx)(g.Z, {}), (0, s.jsx)(I.Z, {}), (0, s.jsx)(r.DnDKeyboardHelpBar, {})]
  })
})