t.d(s, {
  Z: function() {
    return T
  }
}), t(47120);
var n = t(735250),
  i = t(470079),
  a = t(442837),
  l = t(809206),
  r = t(852860),
  o = t(164946),
  c = t(350327),
  E = t(25990),
  d = t(647699),
  _ = t(155433);

function T() {
  let e = (0, a.e7)([E.Z], () => E.Z.getIsSubmitDisabled()),
    [s, t] = i.useState(!1),
    T = i.useCallback(async () => {
      var e, s, n;
      t(!0);
      let i = E.Z.getAllPending(),
        a = (0, o.ED)(i),
        r = (0, o.g9)(i),
        T = !0;
      if (Object.keys(a).length > 0) {
        let t = await (0, l.Mn)(a);
        T = T && null !== (s = null == t ? void 0 : t.ok) && void 0 !== s && s, (null == t ? void 0 : t.ok) ? (0, l.si)() : (null == t ? void 0 : null === (e = t.body) || void 0 === e ? void 0 : e.username) != null ? (0, _.P)() : (0, d.r)()
      }
      if (Object.keys(r).length > 0) {
        let e = await (0, c.Z)(r);
        T = T && null !== (n = null == e ? void 0 : e.ok) && void 0 !== n && n, (null == e ? void 0 : e.ok) ? (0, c.pG)() : (0, d.r)()
      }
      T && (0, l.b9)(), t(!1)
    }, []),
    S = i.useCallback(() => {
      (0, l.W3)()
    }, []);
  return (0, n.jsx)(r.Z, {
    submitting: s,
    onSave: T,
    onReset: S,
    disabled: e
  })
}