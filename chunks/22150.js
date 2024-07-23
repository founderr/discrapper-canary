t.d(s, {
  Z: function() {
return c;
  }
}), t(47120);
var n = t(735250),
  o = t(470079),
  a = t(442837),
  l = t(481060),
  r = t(479531),
  i = t(393869),
  E = t(594174),
  _ = t(689938),
  d = t(120455);

function c(e) {
  let {
onNext: s,
onClose: t
  } = e, [c, N] = o.useState(!1), u = (0, a.e7)([E.default], () => E.default.getCurrentUser()), A = async e => {
e.preventDefault(), N(!0);
try {
  await (0, i.i)(), s();
} catch (s) {
  let e = new r.Z(s).getAnyErrorMessage();
  null != e && (0, l.showToast)((0, l.createToast)(e, l.ToastType.FAILURE));
} finally {
  N(!1);
}
  };
  return (0, n.jsxs)('form', {
onSubmit: A,
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
        oldEmail: null == u ? void 0 : u.email
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
        submitting: c,
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