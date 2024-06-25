t.d(s, {
  Z: function() {
    return S
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
  _ = t(155433),
  T = t(689938);

function S() {
  let e = (0, a.e7)([E.Z], () => E.Z.getIsSubmitDisabled()),
    s = (0, a.e7)([E.Z], () => E.Z.getErrors()),
    [t, S] = i.useState(!1),
    u = i.useMemo(() => (null == s ? void 0 : s.message) != null ? null == s ? void 0 : s.message : Object.keys(null != s ? s : {}).length > 0 ? T.Z.Messages.USER_SETTINGS_EDIT_PROFILE_GENERIC_ERROR : null, [s]),
    I = i.useCallback(async () => {
      var e, s, t;
      S(!0);
      let n = E.Z.getAllPending(),
        i = (0, o.ED)(n),
        a = (0, o.g9)(n),
        r = !0;
      if (Object.keys(i).length > 0) {
        let t = await (0, l.Mn)(i);
        r = r && null !== (s = null == t ? void 0 : t.ok) && void 0 !== s && s, (null == t ? void 0 : t.ok) ? (0, l.si)() : (null == t ? void 0 : null === (e = t.body) || void 0 === e ? void 0 : e.username) != null && (0, _.P)()
      }
      if (Object.keys(a).length > 0) {
        let e = await (0, c.Z)(a);
        r = r && null !== (t = null == e ? void 0 : e.ok) && void 0 !== t && t, (null == e ? void 0 : e.ok) ? (0, c.pG)() : (0, d.r)()
      }
      r && (0, l.b9)(), S(!1)
    }, []),
    N = i.useCallback(() => {
      (0, l.W3)()
    }, []);
  return (0, n.jsx)(r.Z, {
    submitting: t,
    onSave: I,
    onReset: N,
    disabled: e,
    errorMessage: null != u ? u : void 0
  })
}