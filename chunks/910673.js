o.r(a);
var s = o(735250),
  t = o(470079),
  n = o(481060),
  r = o(230711),
  E = o(782568),
  _ = o(880257),
  l = o(63063),
  d = o(163268),
  i = o(981631),
  c = o(526761),
  I = o(689938),
  C = o(597784),
  R = o(444812);
a.default = e => {
  let {
channelId: a,
messageId: N,
transitionState: A,
onClose: T
  } = e, u = (0, _.Z)(), M = t.useCallback(e => {
(0, d.aP)({
  action: e,
  channelId: a,
  messageId: N
});
  }, [
a,
N
  ]);
  return t.useEffect(() => {
(0, d.aP)({
  action: d.Yy.EXPLICIT_MEDIA_LEARN_MORE_VIEWED,
  channelId: a,
  messageId: N
});
  }, [
a,
N
  ]), (0, s.jsxs)(n.ModalRoot, {
transitionState: A,
'aria-label': I.Z.Messages.OBSCURED_CONTENT_LEARN_MORE_MODAL_LABEL,
children: [
  (0, s.jsx)(n.ModalHeader, {
    separator: !1,
    className: C.modalHeader,
    children: (0, s.jsx)('img', {
      src: R,
      alt: I.Z.Messages.OBSCURED_CONTENT_LEARN_MORE_HEADER_IMAGE_ALT,
      className: C.headerImg
    })
  }),
  (0, s.jsxs)(n.ModalContent, {
    className: C.modalBody,
    children: [
      (0, s.jsx)(n.Heading, {
        variant: 'heading-lg/bold',
        className: C.modalInteriorHeader,
        children: I.Z.Messages.OBSCURED_CONTENT_LEARN_MORE_HEADER
      }),
      (0, s.jsx)(n.Text, {
        variant: 'text-md/normal',
        color: 'header-secondary',
        children: u ? I.Z.Messages.OBSCURED_CONTENT_LEARN_MORE_DESCRIPTION_ADULT : I.Z.Messages.OBSCURED_CONTENT_LEARN_MORE_DESCRIPTION_TEEN
      }),
      (0, s.jsxs)('div', {
        className: C.buttonContainer,
        children: [
          u ? (0, s.jsx)(n.Button, {
            color: n.Button.Colors.BRAND,
            onClick: function() {
              M(d.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_SETTINGS), r.Z.open(i.oAB.PRIVACY_AND_SAFETY, null, {
                scrollPosition: c.to.EXPLICIT_MEDIA_REDACTION
              }), T();
            },
            fullWidth: !0,
            children: I.Z.Messages.OBSCURED_CONTENT_UPDATE_SETTINGS_CTA
          }) : (0, s.jsx)(n.Button, {
            color: n.Button.Colors.BRAND,
            onClick: () => {
              (0, E.Z)(l.Z.getArticleURL(i.BhN.EXPLICIT_MEDIA_REDACTION));
            },
            fullWidth: !0,
            children: I.Z.Messages.LEARN_MORE
          }),
          (0, s.jsx)(n.Button, {
            color: n.Button.Colors.PRIMARY,
            onClick: function() {
              T(), M(d.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_DISMISS);
            },
            fullWidth: !0,
            children: I.Z.Messages.OBSCURED_CONTENT_LEARN_MORE_DISMISS
          }),
          (0, s.jsx)(n.Text, {
            variant: 'text-sm/medium',
            color: 'header-secondary',
            children: I.Z.Messages.OBSCURED_CONTENT_LEARN_MORE_FALSE_POSITIVE.format({
              handleFalsePositiveHook: () => {
                T(), M(d.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_FALSE_POSITIVE), (0, n.openModalLazy)(async () => {
                  let {
                    default: e
                  } = await o(788679);
                  return o => (0, s.jsx)(e, {
                    channelId: a,
                    messageId: N,
                    ...o
                  });
                });
              }
            })
          })
        ]
      })
    ]
  })
]
  });
};