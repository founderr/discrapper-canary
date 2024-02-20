"use strict";
s.r(t), s.d(t, {
  default: function() {
    return p
  }
}), s("222007");
var n = s("37983"),
  a = s("884691"),
  i = s("627445"),
  l = s.n(i),
  o = s("446674"),
  r = s("437822"),
  d = s("152584"),
  h = s("648661"),
  u = s("330387"),
  m = s("790618"),
  c = s("697218"),
  f = s("67211"),
  g = s("892313"),
  E = s("49111"),
  p = e => {
    let {
      transitionState: t,
      onClose: s
    } = e, i = (0, o.useStateFromStores)([m.default], () => m.default.getErrors()), p = (0, o.useStateFromStores)([m.default], () => m.default.getFormState()), C = (0, o.useStateFromStores)([c.default], () => {
      let e = c.default.getCurrentUser();
      return l(null != e, "EmailVerificationModal: user cannot be undefined"), e
    }), I = (0, o.useStateFromStores)([u.default], () => u.default.getAction()), _ = !g.default.isEmailReverification(I), R = null != C.email, [v, M] = a.useState(!0), S = p === E.FormStates.SUBMITTING;

    function A(e) {
      var t, s;
      return null !== (s = null == i ? void 0 : null === (t = i[e]) || void 0 === t ? void 0 : t[0]) && void 0 !== s ? s : ""
    }
    let N = A("email"),
      B = A("password");
    return (0, n.jsx)(f.default, {
      transitionState: t,
      email: C.email,
      emailError: N,
      passwordError: B,
      submitting: S,
      canResend: v && !S && R && 0 === N.length && 0 === B.length,
      canChange: _,
      onChangeEmailClick: function() {
        M(!1)
      },
      onVerify: function(e, t) {
        (0, d.saveAccountChanges)({
          email: e,
          password: t
        }).then(e => {
          var t;
          !(null == e ? void 0 : e.ok) && (null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.username) != null && (0, h.showInvalidUsernameToast)()
        }), M(!0)
      },
      onResend: function() {
        r.default.verifyResend()
      },
      onClose: s
    })
  }