"use strict";
s.r(t), s.d(t, {
  default: function() {
    return E
  }
}), s("47120");
var a = s("735250"),
  n = s("470079"),
  l = s("442837"),
  i = s("852860"),
  r = s("164946"),
  o = s("350327"),
  d = s("647699"),
  u = s("18438"),
  c = s("778825"),
  S = s("689938");

function E() {
  let e = (0, l.useStateFromStores)([c.default], () => c.default.getIsSubmitDisabled()),
    t = (0, l.useStateFromStores)([c.default], () => c.default.getGuild()),
    s = (0, l.useStateFromStores)([c.default], () => c.default.getErrors()),
    [E, T] = n.useState(!1),
    f = n.useMemo(() => (null == s ? void 0 : s.message) != null ? null == s ? void 0 : s.message : Object.keys(null != s ? s : {}).length > 0 ? S.default.Messages.GUILD_SETTINGS_EDIT_PROFILE_GENERIC_ERROR : null, [s]),
    _ = n.useCallback(async () => {
      var e, s;
      T(!0);
      let a = c.default.getAllPending(),
        n = (0, r.getGuildMemberChangesForUpdateRequest)(a),
        l = (0, r.getProfileChangesForUpdateRequest)(a),
        i = !0;
      if (Object.keys(n).length > 0) {
        let s = await (0, u.saveGuildIdentityChanges)(null == t ? void 0 : t.id, n);
        i = i && null !== (e = null == s ? void 0 : s.ok) && void 0 !== e && e, (null == s ? void 0 : s.ok) && (0, u.resetPendingMemberChanges)()
      }
      if (Object.keys(l).length > 0) {
        let e = await (0, o.saveProfileChanges)(l, null == t ? void 0 : t.id);
        i = i && null !== (s = null == e ? void 0 : e.ok) && void 0 !== s && s, (null == e ? void 0 : e.ok) ? (0, u.resetPendingProfileChanges)() : (0, d.showGenericGuildProfileUpdateFailureToast)()
      }
      i && (0, u.clearErrors)(), T(!1)
    }, [null == t ? void 0 : t.id]),
    m = n.useCallback(() => {
      (0, u.resetAllPending)()
    }, []);
  return (0, a.jsx)(i.default, {
    submitting: E,
    onSave: _,
    onReset: m,
    disabled: e,
    errorMessage: null != f ? f : void 0
  })
}