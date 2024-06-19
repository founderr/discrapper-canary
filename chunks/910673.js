n.r(t);
var a = n(735250),
  s = n(470079),
  o = n(481060),
  l = n(230711),
  r = n(782568),
  i = n(880257),
  E = n(63063),
  d = n(163268),
  _ = n(981631),
  u = n(526761),
  c = n(689938),
  I = n(406167),
  C = n(444812);
t.default = e => {
  let {
    channelId: t,
    messageId: R,
    transitionState: T,
    onClose: N
  } = e, A = (0, i.Z)(), M = s.useCallback(e => {
    (0, d.aP)({
      action: e,
      channelId: t,
      messageId: R
    })
  }, [t, R]);
  return s.useEffect(() => {
    (0, d.aP)({
      action: d.Yy.EXPLICIT_MEDIA_LEARN_MORE_VIEWED,
      channelId: t,
      messageId: R
    })
  }, [t, R]), (0, a.jsxs)(o.ModalRoot, {
    transitionState: T,
    "aria-label": c.Z.Messages.OBSCURED_CONTENT_LEARN_MORE_MODAL_LABEL,
    children: [(0, a.jsx)(o.ModalHeader, {
      separator: !1,
      className: I.modalHeader,
      children: (0, a.jsx)("img", {
        src: C,
        alt: c.Z.Messages.OBSCURED_CONTENT_LEARN_MORE_HEADER_IMAGE_ALT,
        className: I.headerImg
      })
    }), (0, a.jsxs)(o.ModalContent, {
      className: I.modalBody,
      children: [(0, a.jsx)(o.Heading, {
        variant: "heading-lg/bold",
        className: I.modalInteriorHeader,
        children: c.Z.Messages.OBSCURED_CONTENT_LEARN_MORE_HEADER
      }), (0, a.jsx)(o.Text, {
        variant: "text-md/normal",
        color: "header-secondary",
        children: A ? c.Z.Messages.OBSCURED_CONTENT_LEARN_MORE_DESCRIPTION_ADULT : c.Z.Messages.OBSCURED_CONTENT_LEARN_MORE_DESCRIPTION_TEEN
      }), (0, a.jsxs)("div", {
        className: I.buttonContainer,
        children: [A ? (0, a.jsx)(o.Button, {
          color: o.Button.Colors.BRAND,
          onClick: function() {
            M(d.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_SETTINGS), l.Z.open(_.oAB.PRIVACY_AND_SAFETY, null, {
              scrollPosition: u.to.EXPLICIT_MEDIA_REDACTION
            }), N()
          },
          fullWidth: !0,
          children: c.Z.Messages.OBSCURED_CONTENT_UPDATE_SETTINGS_CTA
        }) : (0, a.jsx)(o.Button, {
          color: o.Button.Colors.BRAND,
          onClick: () => {
            (0, r.Z)(E.Z.getArticleURL(_.BhN.EXPLICIT_MEDIA_REDACTION))
          },
          fullWidth: !0,
          children: c.Z.Messages.LEARN_MORE
        }), (0, a.jsx)(o.Button, {
          color: o.Button.Colors.PRIMARY,
          onClick: function() {
            N(), M(d.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_DISMISS)
          },
          fullWidth: !0,
          children: c.Z.Messages.OBSCURED_CONTENT_LEARN_MORE_DISMISS
        }), (0, a.jsx)(o.Text, {
          variant: "text-sm/medium",
          color: "header-secondary",
          children: c.Z.Messages.OBSCURED_CONTENT_LEARN_MORE_FALSE_POSITIVE.format({
            handleFalsePositiveHook: () => {
              N(), M(d.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_FALSE_POSITIVE), (0, o.openModalLazy)(async () => {
                let {
                  default: e
                } = await n(788679);
                return n => (0, a.jsx)(e, {
                  channelId: t,
                  messageId: R,
                  ...n
                })
              })
            }
          })
        })]
      })]
    })]
  })
}