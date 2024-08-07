n.r(e), n.d(e, {
  default: function() {
return h;
  }
}), n(47120);
var o = n(735250),
  r = n(470079),
  s = n(442837),
  i = n(481060),
  a = n(230711),
  l = n(485267),
  c = n(564990),
  d = n(353647),
  u = n(527790),
  E = n(540440),
  _ = n(365583),
  R = n(689938),
  T = n(157753);

function h(t) {
  let {
transitionState: e,
onClose: n,
user: h,
entry: C
  } = t, [f, N] = (0, s.Wu)([d.Z], () => [
d.Z.isDeletingEntryHistory,
d.Z.deleteOutboxEntryError
  ]);
  return r.useEffect(() => l.Bt, []), (0, o.jsxs)(i.ModalRoot, {
size: i.ModalSize.SMALL,
transitionState: e,
children: [
  (0, o.jsxs)(i.ModalContent, {
    className: T.content,
    children: [
      null != N ? (0, o.jsxs)('div', {
        className: T.error,
        children: [
          (0, o.jsx)(i.CircleXIcon, {
            color: i.tokens.colors.STATUS_DANGER
          }),
          (0, o.jsx)(i.Text, {
            variant: 'text-sm/medium',
            children: R.Z.Messages.USER_ACTIVITY_DELETE_HISTORY_ERROR
          })
        ]
      }) : null,
      (0, o.jsx)(i.Heading, {
        variant: 'heading-lg/semibold',
        children: (0, E.y)(C)
      }),
      (0, o.jsx)(i.Text, {
        variant: 'text-sm/normal',
        tag: 'span',
        children: R.Z.Messages.USER_ACTIVITY_CLEAR_HISTORY_DISCLAIMER.format({
          settingsHook: (t, e) => {
            let r = (0, _.C)(C);
            return (0, o.jsx)(i.Anchor, {
              onClick: () => {
                null != r ? r() : a.Z.open(), n();
              },
              children: t
            }, e);
          }
        })
      }),
      (0, o.jsx)(u.Z, {
        user: h,
        entry: C,
        className: T.card,
        hideContextMenu: !0
      })
    ]
  }),
  (0, o.jsxs)(i.ModalFooter, {
    className: T.footer,
    children: [
      (0, o.jsx)(i.Button, {
        disabled: f,
        color: i.ButtonColors.RED,
        size: i.ButtonSizes.SMALL,
        onClick: () => {
          (0, c.CV)(C, h.id, n);
        },
        children: null != N ? R.Z.Messages.RETRY : R.Z.Messages.CLEAR
      }),
      (0, o.jsx)(i.Button, {
        onClick: n,
        size: i.ButtonSizes.SMALL,
        look: i.ButtonLooks.FILLED,
        color: i.ButtonColors.TRANSPARENT,
        children: R.Z.Messages.CANCEL
      })
    ]
  })
]
  });
}