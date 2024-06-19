t.d(s, {
  Yn: function() {
    return T
  }
}), t(411104), t(47120);
var n = t(735250),
  i = t(470079),
  a = t(283693),
  l = t(481060),
  r = t(816814),
  o = t(200483),
  c = t(981631),
  E = t(689938);

function d(e) {
  let {
    onError: s,
    onSuccess: t,
    PasswordConfirm: l,
    ...o
  } = e, [d, _] = i.useState("");
  return (0, n.jsx)(l, {
    ...o,
    handleSubmit: e => r.Z.enableMFAStart(e),
    onError: e => {
      var n;
      if (("object" == typeof(n = e) && null != n && (0, a.nr)(n, "code") && "number" == typeof n.code ? n.code : 0) === c.evJ.MFA_INVALID_SECRET) t(d), o.onClose();
      else s(e)
    },
    onPasswordChange: _,
    title: E.Z.Messages.TWO_FA_ENABLE,
    actionText: E.Z.Messages.CONTINUE,
    skipErrorMsgAbortCode: c.evJ.MFA_INVALID_SECRET
  })
}

function _(e, s) {
  return new Promise(i => {
    (0, l.openModalLazy)(async () => {
      let {
        default: a
      } = await Promise.all([t.e("49237"), t.e("99387"), t.e("49368"), t.e("23746")]).then(t.bind(t, 837651));
      return t => (0, n.jsx)(a, {
        ...t,
        password: e,
        emailToken: s,
        handleEnableMFASuccess: i
      })
    })
  })
}

function T() {
  let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
  return new Promise(s => {
    (0, l.openModalLazy)(async () => {
      let {
        default: s
      } = await Promise.all([t.e("49237"), t.e("99387"), t.e("76540"), t.e("95422")]).then(t.bind(t, 628908));
      return t => (0, n.jsx)(s, {
        ...t,
        isTotp: e
      })
    }, {
      onCloseCallback: s,
      onCloseRequest: c.VqG
    })
  })
}
async function S() {
  let e = await new Promise((e, s) => {
    (0, l.openModalLazy)(async () => {
      let {
        default: i
      } = await Promise.all([t.e("99387"), t.e("24642")]).then(t.bind(t, 279837));
      return t => (0, n.jsx)(d, {
        ...t,
        onSuccess: e,
        onError: s,
        PasswordConfirm: i
      })
    })
  });
  if ((0, o.j)()) {
    var s;
    let i = await (s = e, new Promise(e => {
      (0, l.openModalLazy)(async () => {
        let {
          default: i
        } = await Promise.all([t.e("99387"), t.e("94566")]).then(t.bind(t, 965072));
        return t => (0, n.jsx)(i, {
          ...t,
          onFormSubmit: async e => await r.Z.verifyEmailCode(e),
          onResend: async () => {
            await r.Z.resendEmailCode(s)
          },
          onSuccess: e,
          headerText: E.Z.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_TITLE_DESKTOP,
          confirmButtonText: E.Z.Messages.NEXT
        })
      })
    }));
    await _(e, null == i ? void 0 : i.token)
  } else await _(e);
  await T()
}
s.ZP = {
  enableMFA: S
}