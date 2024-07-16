t.d(s, {
  Z: function() {
return u;
  }
}), t(47120);
var n = t(735250),
  o = t(470079),
  a = t(442837),
  l = t(481060),
  i = t(479531),
  r = t(393869),
  E = t(594174),
  _ = t(689938),
  d = t(660817);

function u(e) {
  let {
onNext: s,
onClose: t
  } = e, [u, c] = o.useState(!1), N = (0, a.e7)([E.default], () => E.default.getCurrentUser()), C = async e => {
e.preventDefault(), c(!0);
try {
  await (0, r.i)(), s();
} catch (s) {
  let e = new i.Z(s).getAnyErrorMessage();
  null != e && (0, l.showToast)((0, l.createToast)(e, l.ToastType.FAILURE));
} finally {
  c(!1);
}
  };
  return (0, n.jsxs)('form', {
onSubmit: C,
children: [
  (0, n.jsxs)(l.ModalHeader, {
    separator: !1,
    className: d.header,
    children: [
      (0, n.jsx)(l.Heading, {
        className: d.title,
        variant: 'heading-xl/extrabold',
        children: _.Z.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_SEND_TITLE
      }),
      (0, n.jsx)(l.ModalCloseButton, {
        onClick: t,
        className: d.modalCloseButton
      })
    ]
  }),
  (0, n.jsx)(l.ModalContent, {
    className: d.content,
    children: (0, n.jsx)(l.Text, {
      className: d.description,
      variant: 'text-md/normal',
      children: _.Z.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_SEND_DESCRIPTION_NO_LINK.format({
        oldEmail: null == N ? void 0 : N.email
      })
    })
  }),
  (0, n.jsxs)(l.ModalFooter, {
    className: d.modalFooter,
    children: [
      (0, n.jsx)(l.Button, {
        type: 'submit',
        color: l.Button.Colors.BRAND,
        size: l.Button.Sizes.MEDIUM,
        submitting: u,
        className: d.__invalid_submit,
        children: _.Z.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_SEND_BUTTON
      }),
      (0, n.jsx)(l.Button, {
        className: d.__invalid_cancel,
        look: l.Button.Looks.LINK,
        color: l.Button.Colors.PRIMARY,
        onClick: t,
        children: _.Z.Messages.CANCEL
      })
    ]
  })
]
  });
}