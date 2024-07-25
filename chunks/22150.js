n.d(s, {
  Z: function() {
return N;
  }
}), n(47120);
var t = n(735250),
  o = n(470079),
  a = n(442837),
  l = n(481060),
  r = n(479531),
  i = n(393869),
  E = n(594174),
  _ = n(689938),
  d = n(660817);

function N(e) {
  let {
onNext: s,
onClose: n
  } = e, [N, c] = o.useState(!1), u = (0, a.e7)([E.default], () => E.default.getCurrentUser()), A = async e => {
e.preventDefault(), c(!0);
try {
  await (0, i.i)(), s();
} catch (s) {
  let e = new r.Z(s).getAnyErrorMessage();
  null != e && (0, l.showToast)((0, l.createToast)(e, l.ToastType.FAILURE));
} finally {
  c(!1);
}
  };
  return (0, t.jsxs)('form', {
onSubmit: A,
children: [
  (0, t.jsxs)(l.ModalHeader, {
    separator: !1,
    className: d.header,
    children: [
      (0, t.jsx)(l.Heading, {
        className: d.title,
        variant: 'heading-xl/extrabold',
        children: _.Z.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_SEND_TITLE
      }),
      (0, t.jsx)(l.ModalCloseButton, {
        onClick: n,
        className: d.modalCloseButton
      })
    ]
  }),
  (0, t.jsx)(l.ModalContent, {
    className: d.content,
    children: (0, t.jsx)(l.Text, {
      className: d.description,
      variant: 'text-md/normal',
      children: _.Z.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_SEND_DESCRIPTION_NO_LINK.format({
        oldEmail: null == u ? void 0 : u.email
      })
    })
  }),
  (0, t.jsxs)(l.ModalFooter, {
    className: d.modalFooter,
    children: [
      (0, t.jsx)(l.Button, {
        type: 'submit',
        color: l.Button.Colors.BRAND,
        size: l.Button.Sizes.MEDIUM,
        submitting: N,
        className: d.__invalid_submit,
        children: _.Z.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_SEND_BUTTON
      }),
      (0, t.jsx)(l.Button, {
        className: d.__invalid_cancel,
        look: l.Button.Looks.LINK,
        color: l.Button.Colors.PRIMARY,
        onClick: n,
        children: _.Z.Messages.CANCEL
      })
    ]
  })
]
  });
}