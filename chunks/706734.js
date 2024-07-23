t.d(s, {
  Z: function() {
return _;
  }
});
var n = t(735250);
t(470079);
var o = t(481060),
  a = t(488889),
  l = t(259076),
  r = t(689938),
  i = t(759095),
  E = t(120455);

function _(e) {
  let {
onNext: s,
onClose: t,
reason: _,
onReasonChange: d
  } = e, c = l.zf.map(e => ({
value: e,
name: (0, a.S)(e)
  }));
  return (0, n.jsxs)('form', {
onSubmit: s,
children: [
  (0, n.jsxs)(o.ModalHeader, {
    separator: !1,
    className: E.header,
    children: [
      (0, n.jsx)(o.Heading, {
        variant: 'heading-xl/extrabold',
        children: r.Z.Messages.EMAIL_CHANGE_REASONING_HEADER
      }),
      (0, n.jsx)(o.ModalCloseButton, {
        onClick: t,
        className: E.modalCloseButton
      })
    ]
  }),
  (0, n.jsx)(o.ModalContent, {
    className: i.content,
    children: (0, n.jsx)(o.RadioGroup, {
      radioPosition: 'right',
      radioItemClassName: i.radioItem,
      size: o.RadioGroup.Sizes.NOT_SET,
      value: _,
      options: c,
      onChange: e => {
        let {
          value: s
        } = e;
        return d(s);
      }
    })
  }),
  (0, n.jsxs)(o.ModalFooter, {
    className: E.modalFooter,
    children: [
      (0, n.jsx)(o.Button, {
        color: o.Button.Colors.BRAND,
        disabled: null == _,
        size: o.Button.Sizes.MEDIUM,
        onClick: s,
        children: r.Z.Messages.CONTINUE
      }),
      (0, n.jsx)(o.Button, {
        look: o.Button.Looks.LINK,
        color: o.Button.Colors.PRIMARY,
        onClick: t,
        children: r.Z.Messages.CANCEL
      })
    ]
  })
]
  });
}