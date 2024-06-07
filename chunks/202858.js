"use strict";
n.r(t), n.d(t, {
  showMFASuccessModal: function() {
    return p
  }
}), n("411104"), n("47120");
var s = n("735250"),
  a = n("470079"),
  r = n("283693"),
  o = n("481060"),
  i = n("816814"),
  l = n("837651"),
  d = n("200483"),
  c = n("981631"),
  u = n("689938");

function f(e) {
  let {
    onError: t,
    onSuccess: n,
    PasswordConfirm: o,
    ...l
  } = e, [d, f] = a.useState("");
  return (0, s.jsx)(o, {
    ...l,
    handleSubmit: e => i.default.enableMFAStart(e),
    onError: e => {
      var s;
      if (("object" == typeof(s = e) && null != s && (0, r.hasOwnProperty)(s, "code") && "number" == typeof s.code ? s.code : 0) === c.AbortCodes.MFA_INVALID_SECRET) n(d), l.onClose();
      else t(e)
    },
    onPasswordChange: f,
    title: u.default.Messages.TWO_FA_ENABLE,
    actionText: u.default.Messages.CONTINUE,
    skipErrorMsgAbortCode: c.AbortCodes.MFA_INVALID_SECRET
  })
}

function E(e, t) {
  return new Promise(n => {
    (0, o.openModalLazy)(async () => a => (0, s.jsx)(l.default, {
      ...a,
      password: e,
      emailToken: t,
      handleEnableMFASuccess: n
    }))
  })
}

function p() {
  let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
  return new Promise(t => {
    (0, o.openModalLazy)(async () => {
      let {
        default: t
      } = await Promise.all([n.e("49237"), n.e("99387"), n.e("76540"), n.e("95422")]).then(n.bind(n, "628908"));
      return n => (0, s.jsx)(t, {
        ...n,
        isTotp: e
      })
    }, {
      onCloseCallback: t,
      onCloseRequest: c.NOOP_NULL
    })
  })
}
async function _() {
  let e = await new Promise((e, t) => {
    (0, o.openModalLazy)(async () => {
      let {
        default: a
      } = await Promise.all([n.e("99387"), n.e("24642")]).then(n.bind(n, "279837"));
      return n => (0, s.jsx)(f, {
        ...n,
        onSuccess: e,
        onError: t,
        PasswordConfirm: a
      })
    })
  });
  if ((0, d.isMfaEmailVerificationEnabled)()) {
    var t;
    let a = await (t = e, new Promise(e => {
      (0, o.openModalLazy)(async () => {
        let {
          default: a
        } = await Promise.all([n.e("99387"), n.e("94566")]).then(n.bind(n, "965072"));
        return n => (0, s.jsx)(a, {
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
    await E(e, null == a ? void 0 : a.token)
  } else await E(e);
  await p()
}
t.default = {
  enableMFA: _
}