"use strict";
a.r(t), a.d(t, {
  default: function() {
    return R
  }
});
var s = a("37983"),
  i = a("884691"),
  n = a("77078"),
  d = a("79112"),
  l = a("545158"),
  o = a("775032"),
  r = a("701909"),
  c = a("447435"),
  u = a("49111"),
  E = a("782340"),
  _ = a("121120"),
  M = a("461757"),
  R = e => {
    let {
      channelId: t,
      messageId: R,
      transitionState: T,
      onClose: f
    } = e, C = (0, o.default)(), I = i.useCallback(e => {
      (0, c.trackMediaRedactionAction)({
        action: e,
        channelId: t,
        messageId: R
      })
    }, [t, R]);
    return i.useEffect(() => {
      (0, c.trackMediaRedactionAction)({
        action: c.TrackMediaRedactionActionType.EXPLICIT_MEDIA_LEARN_MORE_VIEWED,
        channelId: t,
        messageId: R
      })
    }, [t, R]), (0, s.jsxs)(n.ModalRoot, {
      transitionState: T,
      "aria-label": E.default.Messages.OBSCURED_CONTENT_LEARN_MORE_MODAL_LABEL,
      children: [(0, s.jsx)(n.ModalHeader, {
        separator: !1,
        className: _.modalHeader,
        children: (0, s.jsx)("img", {
          src: M,
          alt: E.default.Messages.OBSCURED_CONTENT_LEARN_MORE_HEADER_IMAGE_ALT,
          className: _.headerImg
        })
      }), (0, s.jsxs)(n.ModalContent, {
        className: _.modalBody,
        children: [(0, s.jsx)(n.Heading, {
          variant: "heading-lg/bold",
          className: _.modalInteriorHeader,
          children: E.default.Messages.OBSCURED_CONTENT_LEARN_MORE_HEADER
        }), (0, s.jsx)(n.Text, {
          variant: "text-md/normal",
          color: "header-secondary",
          children: C ? E.default.Messages.OBSCURED_CONTENT_LEARN_MORE_DESCRIPTION_ADULT : E.default.Messages.OBSCURED_CONTENT_LEARN_MORE_DESCRIPTION_TEEN
        }), (0, s.jsxs)("div", {
          className: _.buttonContainer,
          children: [C ? (0, s.jsx)(n.Button, {
            color: n.Button.Colors.BRAND,
            onClick: function() {
              I(c.TrackMediaRedactionActionType.EXPLICIT_MEDIA_LEARN_MORE_CLICK_SETTINGS), d.default.open(u.UserSettingsSections.PRIVACY_AND_SAFETY), f()
            },
            fullWidth: !0,
            children: E.default.Messages.OBSCURED_CONTENT_UPDATE_SETTINGS_CTA
          }) : (0, s.jsx)(n.Button, {
            color: n.Button.Colors.BRAND,
            onClick: () => {
              (0, l.default)(r.default.getArticleURL(u.HelpdeskArticles.EXPLICIT_MEDIA_REDACTION))
            },
            fullWidth: !0,
            children: E.default.Messages.LEARN_MORE
          }), (0, s.jsx)(n.Button, {
            color: n.Button.Colors.PRIMARY,
            onClick: function() {
              f(), I(c.TrackMediaRedactionActionType.EXPLICIT_MEDIA_LEARN_MORE_CLICK_DISMISS)
            },
            fullWidth: !0,
            children: E.default.Messages.OBSCURED_CONTENT_LEARN_MORE_DISMISS
          }), (0, s.jsx)(n.Text, {
            variant: "text-sm/medium",
            color: "header-secondary",
            children: E.default.Messages.OBSCURED_CONTENT_LEARN_MORE_FALSE_POSITIVE.format({
              handleFalsePositiveHook: () => {
                f(), I(c.TrackMediaRedactionActionType.EXPLICIT_MEDIA_LEARN_MORE_CLICK_FALSE_POSITIVE), (0, n.openModalLazy)(async () => {
                  let {
                    default: e
                  } = await a("151622");
                  return a => (0, s.jsx)(e, {
                    channelId: t,
                    messageId: R,
                    ...a
                  })
                })
              }
            })
          })]
        })]
      })]
    })
  }