t.d(i, {
  Yn: function() {
    return E
  }
}), t(411104), t(47120);
var n = t(735250),
  o = t(470079),
  a = t(283693),
  l = t(481060),
  r = t(816814),
  s = t(200483),
  c = t(981631),
  d = t(689938);

function u(e) {
  let {
    onError: i,
    onSuccess: t,
    PasswordConfirm: l,
    ...s
  } = e, [u, _] = o.useState("");
  return (0, n.jsx)(l, {
    ...s,
    handleSubmit: e => r.Z.enableMFAStart(e),
    onError: e => {
      var n;
      if (("object" == typeof(n = e) && null != n && (0, a.nr)(n, "code") && "number" == typeof n.code ? n.code : 0) === c.evJ.MFA_INVALID_SECRET) t(u), s.onClose();
      else i(e)
    },
    onPasswordChange: _,
    title: d.Z.Messages.TWO_FA_ENABLE,
    actionText: d.Z.Messages.CONTINUE,
    skipErrorMsgAbortCode: c.evJ.MFA_INVALID_SECRET
  })
}

function _(e, i) {
  return new Promise(o => {
    (0, l.openModalLazy)(async () => {
      let {
        default: a
      } = await Promise.all([t.e("49368"), t.e("23746")]).then(t.bind(t, 837651));
      return t => (0, n.jsx)(a, {
        ...t,
        password: e,
        emailToken: i,
        handleEnableMFASuccess: o
      })
    })
  })
}

function E() {
  let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
  return new Promise(i => {
    (0, l.openModalLazy)(async () => {
      let {
        default: i
      } = await Promise.all([t.e("76540"), t.e("22241")]).then(t.bind(t, 628908));
      return t => (0, n.jsx)(i, {
        ...t,
        isTotp: e
      })
    }, {
      onCloseCallback: i,
      onCloseRequest: c.VqG
    })
  })
}
async function M() {
  let e = await new Promise((e, i) => {
    (0, l.openModalLazy)(async () => {
      let {
        default: o
      } = await t.e("24642").then(t.bind(t, 279837));
      return t => (0, n.jsx)(u, {
        ...t,
        onSuccess: e,
        onError: i,
        PasswordConfirm: o
      })
    })
  });
  if ((0, s.j)()) {
    var i;
    let o = await (i = e, new Promise(e => {
      (0, l.openModalLazy)(async () => {
        let {
          default: o
        } = await t.e("94566").then(t.bind(t, 965072));
        return t => (0, n.jsx)(o, {
          ...t,
          onFormSubmit: async e => await r.Z.verifyEmailCode(e),
          onResend: async () => {
            await r.Z.resendEmailCode(i)
          },
          onSuccess: e,
          headerText: d.Z.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_TITLE_DESKTOP,
          confirmButtonText: d.Z.Messages.NEXT
        })
      })
    }));
    await _(e, null == o ? void 0 : o.token)
  } else await _(e);
  await E()
}
i.ZP = {
  enableMFA: M
}