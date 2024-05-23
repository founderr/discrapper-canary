"use strict";
s.r(t), s("47120");
var a = s("735250"),
  i = s("470079"),
  n = s("442837"),
  l = s("481060"),
  o = s("893776"),
  r = s("809206"),
  d = s("155433"),
  h = s("23434"),
  u = s("25990"),
  m = s("594174"),
  c = s("201092"),
  f = s("1964"),
  g = s("981631"),
  E = s("689938");
t.default = e => {
  let {
    transitionState: t,
    onClose: s
  } = e, p = (0, n.useStateFromStores)([u.default], () => u.default.getErrors()), C = (0, n.useStateFromStores)([u.default], () => u.default.getFormState()), I = (0, n.useStateFromStores)([m.default], () => m.default.getCurrentUser()), _ = (0, n.useStateFromStores)([h.default], () => h.default.getAction()), R = !f.default.isEmailReverification(_), [v, S] = i.useState(!0), M = C === g.FormStates.SUBMITTING;

  function T(e) {
    var t, s;
    return null !== (s = null == p ? void 0 : null === (t = p[e]) || void 0 === t ? void 0 : t[0]) && void 0 !== s ? s : ""
  }
  let A = T("email"),
    N = T("password");
  return (0, a.jsx)(c.default, {
    transitionState: t,
    email: null == I ? void 0 : I.email,
    emailError: A,
    passwordError: N,
    submitting: M,
    canResend: v && !M && (null == I ? void 0 : I.email) != null && 0 === A.length && 0 === N.length,
    canChange: R,
    onChangeEmailClick: function() {
      S(!1)
    },
    onVerify: function(e, t) {
      (0, r.saveAccountChanges)({
        email: e,
        password: t
      }).then(e => {
        if (!(null == e ? void 0 : e.ok)) {
          var t;
          (null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.username) != null ? (0, d.showInvalidUsernameToast)() : 0 === N.length && 0 === A.length && (0, l.showToast)((0, l.createToast)(E.default.Messages.ERROR_GENERIC_TITLE, l.ToastType.FAILURE))
        }
      }), S(!0)
    },
    onResend: function() {
      o.default.verifyResend()
    },
    onClose: s
  })
}