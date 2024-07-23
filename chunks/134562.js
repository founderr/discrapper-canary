t.d(s, {
  Z: function() {
return r;
  }
});
var n = t(735250);
t(470079);
var o = t(481060),
  a = t(689938),
  l = t(120455);

function r(e) {
  let {
onNext: s,
onClose: t
  } = e;
  return (0, n.jsxs)('form', {
onSubmit: s,
children: [
  (0, n.jsxs)(o.ModalHeader, {
    separator: !1,
    className: l.header,
    children: [
      (0, n.jsx)(o.Heading, {
        variant: 'heading-xl/extrabold',
        children: a.Z.Messages.EMAIL_CHANGE_REASONING_WARNING_HEADER
      }),
      (0, n.jsx)(o.ModalCloseButton, {
        onClick: t,
        className: l.modalCloseButton
      })
    ]
  }),
  (0, n.jsxs)(o.ModalContent, {
    className: l.content,
    children: [
      (0, n.jsx)(o.Text, {
        className: l.description,
        variant: 'text-md/normal',
        children: a.Z.Messages.EMAIL_CHANGE_REASONING_IMPERSONATION_EDUCATION.format({
          hcArticle: 'https://discord.com/safety/common-scams-what-to-look-out-for#title-3'
        })
      }),
      (0, n.jsx)(o.Text, {
        className: l.description,
        variant: 'text-md/normal',
        children: a.Z.Messages.EMAIL_CHANGE_REASONING_DISCORD_NEVER_ASKS_FOR_EMAIL_CHANGE
      })
    ]
  }),
  (0, n.jsxs)(o.ModalFooter, {
    className: l.modalFooter,
    children: [
      (0, n.jsx)(o.Button, {
        color: o.Button.Colors.BRAND,
        onClick: t,
        children: a.Z.Messages.CANCEL
      }),
      (0, n.jsx)(o.Button, {
        color: o.Button.Colors.PRIMARY,
        look: o.Button.Looks.LINK,
        onClick: s,
        children: a.Z.Messages.EMAIL_CHANGE_REASONING_CONTINUE
      })
    ]
  })
]
  });
}