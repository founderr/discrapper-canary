"use strict";
s.r(t), s.d(t, {
  default: function() {
    return E
  }
}), s("47120");
var a = s("735250"),
  n = s("470079"),
  l = s("442837"),
  i = s("809206"),
  r = s("852860"),
  o = s("164946"),
  d = s("350327"),
  u = s("25990"),
  c = s("647699"),
  S = s("155433");

function E() {
  let e = (0, l.useStateFromStores)([u.default], () => u.default.getIsSubmitDisabled()),
    [t, s] = n.useState(!1),
    E = n.useCallback(async () => {
      var e, t, a;
      s(!0);
      let n = u.default.getAllPending(),
        l = (0, o.getAccountUpdateForUpdateRequest)(n),
        r = (0, o.getProfileChangesForUpdateRequest)(n),
        E = !0;
      if (Object.keys(l).length > 0) {
        let s = await (0, i.saveAccountChanges)(l);
        E = E && null !== (t = null == s ? void 0 : s.ok) && void 0 !== t && t, (null == s ? void 0 : s.ok) ? (0, i.resetPendingAccountChanges)() : (null == s ? void 0 : null === (e = s.body) || void 0 === e ? void 0 : e.username) != null && (0, S.showInvalidUsernameToast)()
      }
      if (Object.keys(r).length > 0) {
        let e = await (0, d.saveProfileChanges)(r);
        E = E && null !== (a = null == e ? void 0 : e.ok) && void 0 !== a && a, (null == e ? void 0 : e.ok) ? (0, d.resetPendingProfileChanges)() : (0, c.showGenericProfileUpdateFailureToast)()
      }
      E && (0, i.clearErrors)(), s(!1)
    }, []),
    T = n.useCallback(() => {
      (0, i.resetAllPending)()
    }, []);
  return (0, a.jsx)(r.default, {
    submitting: t,
    onSave: E,
    onReset: T,
    disabled: e
  })
}