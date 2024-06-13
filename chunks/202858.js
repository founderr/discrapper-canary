"use strict";
n.r(t), n.d(t, {
  showMFASuccessModal: function() {
    return _
  }
}), n("411104"), n("47120");
var a = n("735250"),
  s = n("470079"),
  o = n("283693"),
  r = n("481060"),
  i = n("816814"),
  l = n("837651"),
  d = n("200483"),
  c = n("981631"),
  u = n("689938");

function E(e) {
  let {
    onError: t,
    onSuccess: n,
    PasswordConfirm: r,
    ...l
  } = e, [d, E] = s.useState("");
  return (0, a.jsx)(r, {
    ...l,
    handleSubmit: e => i.default.enableMFAStart(e),
    onError: e => {
      var a;
      if (("object" == typeof(a = e) && null != a && (0, o.hasOwnProperty)(a, "code") && "number" == typeof a.code ? a.code : 0) === c.AbortCodes.MFA_INVALID_SECRET) n(d), l.onClose();
      else t(e)
    },
    onPasswordChange: E,
    title: u.default.Messages.TWO_FA_ENABLE,
    actionText: u.default.Messages.CONTINUE,
    skipErrorMsgAbortCode: c.AbortCodes.MFA_INVALID_SECRET
  })
}

function f(e, t) {
  return new Promise(n => {
    (0, r.openModalLazy)(async () => s => (0, a.jsx)(l.default, {
      ...s,
      password: e,
      emailToken: t,
      handleEnableMFASuccess: n
    }))
  })
}

function _() {
  let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
  return new Promise(t => {
    (0, r.openModalLazy)(async () => {
      let {
        default: t
      } = await Promise.all([n.e("49237"), n.e("99387"), n.e("76540"), n.e("95422")]).then(n.bind(n, "628908"));
      return n => (0, a.jsx)(t, {
        ...n,
        isTotp: e
      })
    }, {
      onCloseCallback: t,
      onCloseRequest: c.NOOP_NULL
    })
  })
}
async function p() {
  let e = await new Promise((e, t) => {
    (0, r.openModalLazy)(async () => {
      let {
        default: s
      } = await Promise.all([n.e("99387"), n.e("24642")]).then(n.bind(n, "279837"));
      return n => (0, a.jsx)(E, {
        ...n,
        onSuccess: e,
        onError: t,
        PasswordConfirm: s
      })
    })
  });
  if ((0, d.isMfaEmailVerificationEnabled)()) {
    var t;
    let s = await (t = e, new Promise(e => {
      (0, r.openModalLazy)(async () => {
        let {
          default: s
        } = await Promise.all([n.e("99387"), n.e("94566")]).then(n.bind(n, "965072"));
        return n => (0, a.jsx)(s, {
          ...n,
          onFormSubmit: async e => await i.default.verifyEmailCode(e),
          onResend: async () => {
            await i.default.resendEmailCode(t)
          },
          onSuccess: e,
          headerText: u.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_TITLE_DESKTOP,
          confirmButtonText: u.default.Messages.NEXT
        })
      })
    }));
    await f(e, null == s ? void 0 : s.token)
  } else await f(e);
  await _()
}
t.default = {
  enableMFA: p
}