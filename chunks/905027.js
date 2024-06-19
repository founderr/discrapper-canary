t.d(s, {
  Z: function() {
    return T
  }
}), t(47120);
var n = t(735250),
  i = t(470079),
  a = t(442837),
  l = t(852860),
  r = t(164946),
  o = t(350327),
  c = t(647699),
  E = t(18438),
  d = t(778825),
  _ = t(689938);

function T() {
  let e = (0, a.e7)([d.Z], () => d.Z.getIsSubmitDisabled()),
    s = (0, a.e7)([d.Z], () => d.Z.getGuild()),
    t = (0, a.e7)([d.Z], () => d.Z.getErrors()),
    [T, S] = i.useState(!1),
    u = i.useMemo(() => (null == t ? void 0 : t.message) != null ? null == t ? void 0 : t.message : Object.keys(null != t ? t : {}).length > 0 ? _.Z.Messages.GUILD_SETTINGS_EDIT_PROFILE_GENERIC_ERROR : null, [t]),
    I = i.useCallback(async () => {
      var e, t;
      S(!0);
      let n = d.Z.getAllPending(),
        i = (0, r.Jo)(n),
        a = (0, r.g9)(n),
        l = !0;
      if (Object.keys(i).length > 0) {
        let t = await (0, E.iq)(null == s ? void 0 : s.id, i);
        l = l && null !== (e = null == t ? void 0 : t.ok) && void 0 !== e && e, (null == t ? void 0 : t.ok) ? (0, E.IO)() : (0, c.v)()
      }
      if (Object.keys(a).length > 0) {
        let e = await (0, o.Z)(a, null == s ? void 0 : s.id);
        l = l && null !== (t = null == e ? void 0 : e.ok) && void 0 !== t && t, (null == e ? void 0 : e.ok) ? (0, E.pG)() : (0, c.v)()
      }
      l && (0, E.b9)(), S(!1)
    }, [null == s ? void 0 : s.id]),
    N = i.useCallback(() => {
      (0, E.W3)()
    }, []);
  return (0, n.jsx)(l.Z, {
    submitting: T,
    onSave: I,
    onReset: N,
    disabled: e,
    errorMessage: null != u ? u : void 0
  })
}