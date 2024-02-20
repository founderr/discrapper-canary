"use strict";
n.r(t), n.d(t, {
  showMFASuccessModal: function() {
    return f
  },
  default: function() {
    return _
  }
}), n("70102"), n("222007");
var a = n("37983"),
  i = n("884691"),
  o = n("627929"),
  l = n("77078"),
  r = n("430713"),
  s = n("663657"),
  d = n("49111"),
  c = n("782340");

function u(e) {
  let {
    onError: t,
    onSuccess: n,
    PasswordConfirm: l,
    ...s
  } = e, [u, E] = i.useState("");
  return (0, a.jsx)(l, {
    ...s,
    handleSubmit: e => r.default.enableMFAStart(e),
    onError: e => {
      var a;
      if (("object" == typeof(a = e) && null != a && (0, o.hasOwnProperty)(a, "code") && "number" == typeof a.code ? a.code : 0) === d.AbortCodes.MFA_INVALID_SECRET) n(u), s.onClose();
      else t(e)
    },
    onPasswordChange: E,
    title: c.default.Messages.TWO_FA_ENABLE,
    actionText: c.default.Messages.CONTINUE,
    skipErrorMsgAbortCode: d.AbortCodes.MFA_INVALID_SECRET
  })
}

function E(e, t) {
  return new Promise(i => {
    (0, l.openModalLazy)(async () => {
      let {
        default: o
      } = await n.el("936380").then(n.bind(n, "936380"));
      return n => (0, a.jsx)(o, {
        ...n,
        password: e,
        emailToken: t,
        handleEnableMFASuccess: i
      })
    })
  })
}

function f() {
  let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
  return new Promise(t => {
    (0, l.openModalLazy)(async () => {
      let {
        default: t
      } = await n.el("184504").then(n.bind(n, "184504"));
      return n => (0, a.jsx)(t, {
        ...n,
        isTotp: e
      })
    }, {
      onCloseCallback: t,
      onCloseRequest: d.NOOP_NULL
    })
  })
}
var _ = {
  enableMFA: async function e() {
    let e = await new Promise((e, t) => {
      (0, l.openModalLazy)(async () => {
        let {
          default: i
        } = await n.el("583227").then(n.bind(n, "583227"));
        return n => (0, a.jsx)(u, {
          ...n,
          onSuccess: e,
          onError: t,
          PasswordConfirm: i
        })
      })
    });
    if ((0, s.isMfaEmailVerificationEnabled)()) {
      var t;
      let i = await (t = e, new Promise(e => {
        (0, l.openModalLazy)(async () => {
          let {
            default: i
          } = await n.el("644512").then(n.bind(n, "644512"));
          return n => (0, a.jsx)(i, {
            ...n,
            onFormSubmit: async e => await r.default.verifyEmailCode(e),
            onResend: async () => {
              await r.default.resendEmailCode(t)
            },
            onSuccess: e,
            headerText: c.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_TITLE_DESKTOP,
            confirmButtonText: c.default.Messages.NEXT
          })
        })
      }));
      await E(e, null == i ? void 0 : i.token)
    } else await E(e);
    await f()
  }
}