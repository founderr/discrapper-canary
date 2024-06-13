"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
});
var s = n("735250"),
  r = n("470079"),
  l = n("442837"),
  a = n("836957"),
  o = n("481060"),
  u = n("377171"),
  i = n("592125"),
  c = n("594174"),
  d = n("153124"),
  f = n("5192"),
  E = n("571463"),
  C = n("71328"),
  S = n("498126"),
  m = n("689938"),
  h = n("55915");

function I(e) {
  let {
    transitionState: t,
    userId: n,
    channelId: I,
    onClose: x
  } = e, T = (0, d.useUID)(), N = (0, l.useStateFromStores)([c.default], () => c.default.getUser(n)), g = (0, l.useStateFromStores)([i.default], () => {
    var e;
    return null === (e = i.default.getChannel(I)) || void 0 === e ? void 0 : e.getGuildId()
  }), p = f.default.useName(g, null, N), v = "12345 67890 12345 67890 12345 67890 12345 67890 12345 67890 12345 67890", y = r.useCallback(() => x(), [x]), R = r.useCallback(() => x(), [x]), _ = (0, E.useIsUserSecureFramesVerified)(n, I);
  return (0, s.jsxs)(o.ModalRoot, {
    transitionState: t,
    "aria-labelledby": T,
    children: [(0, s.jsx)("div", {
      className: h.shieldIconContainer,
      children: (0, s.jsx)("div", {
        className: h.shieldIcon,
        children: (0, s.jsx)(a.ShieldLockIcon, {
          width: 55,
          height: 55,
          color: o.tokens.colors.HEADER_SECONDARY
        })
      })
    }), (0, s.jsxs)(o.ModalContent, {
      className: h.content,
      children: [(0, s.jsx)(o.Heading, {
        className: h.title,
        variant: "heading-lg/bold",
        color: "header-primary",
        children: m.default.Messages.E2EE_VERIFICATION_CODE
      }), (0, s.jsx)(o.Text, {
        className: h.subtitle,
        variant: "text-md/normal",
        color: "header-secondary",
        children: m.default.Messages.E2EE_USER_VERIFY_MODAL_SUBTITLE.format({
          username: p
        })
      }), (0, s.jsxs)("div", {
        className: h.verification,
        children: [(0, s.jsxs)("div", {
          className: h.header,
          children: [(0, s.jsx)(o.Heading, {
            variant: "text-sm/bold",
            color: "header-primary",
            children: m.default.Messages.E2EE_VOICE_PRIVACY_CODE
          }), (0, s.jsx)(S.SecureFramesCopyIcon, {
            className: h.copyIcon,
            text: v,
            color: o.tokens.colors.INTERACTIVE_NORMAL
          }), (0, s.jsx)(o.TextBadge, {
            text: m.default.Messages.NEW,
            color: u.default.STATUS_DANGER
          })]
        }), (0, s.jsx)(C.SecureFramesCode, {
          className: h.code,
          code: v
        })]
      }), (0, s.jsx)(o.Text, {
        className: h.details,
        variant: "text-sm/normal",
        color: "text-muted",
        children: m.default.Messages.E2EE_USER_VERIFY_FOOTER_TEXT
      }), (0, s.jsx)(o.Button, {
        fullWidth: !0,
        className: h.verifiedButton,
        color: _ ? o.ButtonColors.RED : o.ButtonColors.BRAND,
        size: o.ButtonSizes.MEDIUM,
        look: o.ButtonLooks.FILLED,
        onClick: _ ? R : y,
        children: _ ? m.default.Messages.E2EE_CLEAR_VERIFICATION : m.default.Messages.E2EE_MARK_AS_VERIFIED
      }), (0, s.jsx)(o.Button, {
        fullWidth: !0,
        color: o.ButtonColors.PRIMARY,
        size: o.ButtonSizes.MEDIUM,
        look: o.ButtonLooks.FILLED,
        onClick: x,
        children: m.default.Messages.CANCEL
      })]
    })]
  })
}