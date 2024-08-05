o.r(e), o.d(e, {
  default: function() {
return h;
  }
}), o(47120);
var n = o(735250),
  s = o(470079),
  a = o(481060),
  r = o(230711),
  i = o(564990),
  c = o(527790),
  l = o(540440),
  d = o(365583),
  u = o(689938),
  C = o(157753);

function h(t) {
  let {
transitionState: e,
onClose: o,
user: h,
entry: x
  } = t, [L, f] = s.useState(!1), M = async () => {
f(!0), await (0, i.CV)(x, h.id), f(!1), o();
  };
  return (0, n.jsxs)(a.ModalRoot, {
size: a.ModalSize.SMALL,
transitionState: e,
children: [
  (0, n.jsxs)(a.ModalContent, {
    className: C.content,
    children: [
      (0, n.jsx)(a.Heading, {
        variant: 'heading-lg/semibold',
        children: (0, l.y)(x)
      }),
      (0, n.jsx)(a.Text, {
        variant: 'text-sm/normal',
        tag: 'span',
        children: u.Z.Messages.USER_ACTIVITY_CLEAR_HISTORY_DISCLAIMER.format({
          settingsHook: (t, e) => {
            let s = (0, d.C)(x);
            return (0, n.jsx)(a.Anchor, {
              onClick: () => {
                null != s ? s() : r.Z.open(), o();
              },
              children: t
            }, e);
          }
        })
      }),
      (0, n.jsx)(c.Z, {
        user: h,
        entry: x,
        className: C.card,
        hideContextMenu: !0
      })
    ]
  }),
  (0, n.jsxs)(a.ModalFooter, {
    className: C.footer,
    children: [
      (0, n.jsx)(a.Button, {
        disabled: L,
        color: a.ButtonColors.RED,
        size: a.ButtonSizes.SMALL,
        onClick: M,
        children: u.Z.Messages.CLEAR
      }),
      (0, n.jsx)(a.Button, {
        onClick: o,
        size: a.ButtonSizes.SMALL,
        look: a.ButtonLooks.FILLED,
        color: a.ButtonColors.TRANSPARENT,
        children: u.Z.Messages.CANCEL
      })
    ]
  })
]
  });
}