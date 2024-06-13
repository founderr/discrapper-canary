"use strict";
n.r(t), n.d(t, {
  default: function() {
    return x
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
  m = n("63454"),
  I = n("689938"),
  h = n("55915");

function x(e) {
  let {
    transitionState: t,
    userId: n,
    channelId: x,
    onClose: T
  } = e, N = (0, d.useUID)(), g = (0, l.useStateFromStores)([c.default], () => c.default.getUser(n)), p = (0, l.useStateFromStores)([i.default], () => {
    var e;
    return null === (e = i.default.getChannel(x)) || void 0 === e ? void 0 : e.getGuildId()
  }), R = f.default.useName(p, null, g), _ = "12345 67890 12345 67890 12345 67890 12345 67890 12345 67890 12345 67890", v = r.useCallback(() => T(), [T]), y = r.useCallback(() => T(), [T]), D = (0, E.useIsUserSecureFramesVerified)(n, x);
  return (0, s.jsxs)(o.ModalRoot, {
    transitionState: t,
    "aria-labelledby": N,
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
        children: I.default.Messages.E2EE_VERIFICATION_CODE
      }), (0, s.jsx)(o.Text, {
        className: h.subtitle,
        variant: "text-md/normal",
        color: "header-secondary",
        children: I.default.Messages.E2EE_USER_VERIFY_MODAL_SUBTITLE.format({
          username: R
        })
      }), (0, s.jsxs)("div", {
        className: h.verification,
        children: [(0, s.jsxs)("div", {
          className: h.header,
          children: [(0, s.jsx)(o.Heading, {
            variant: "text-sm/bold",
            color: "header-primary",
            children: I.default.Messages.E2EE_VOICE_PRIVACY_CODE
          }), (0, s.jsx)(S.SecureFramesCopyIcon, {
            className: h.copyIcon,
            text: _,
            color: o.tokens.colors.INTERACTIVE_NORMAL
          }), (0, s.jsx)(o.TextBadge, {
            text: I.default.Messages.NEW,
            color: u.default.STATUS_DANGER
          })]
        }), (0, s.jsx)(C.SecureFramesCode, {
          className: h.code,
          code: _
        })]
      }), (0, s.jsx)(o.Text, {
        className: h.details,
        variant: "text-sm/normal",
        color: "text-muted",
        children: I.default.Messages.E2EE_USER_VERIFY_FOOTER_TEXT.format({
          helpArticle: m.E2EE_HELPDESK_ARTICLE
        })
      }), (0, s.jsx)(o.Button, {
        fullWidth: !0,
        className: h.verifiedButton,
        color: D ? o.ButtonColors.RED : o.ButtonColors.BRAND,
        size: o.ButtonSizes.MEDIUM,
        look: o.ButtonLooks.FILLED,
        onClick: D ? y : v,
        children: D ? I.default.Messages.E2EE_CLEAR_VERIFICATION : I.default.Messages.E2EE_MARK_AS_VERIFIED
      }), (0, s.jsx)(o.Button, {
        fullWidth: !0,
        color: o.ButtonColors.PRIMARY,
        size: o.ButtonSizes.MEDIUM,
        look: o.ButtonLooks.FILLED,
        onClick: T,
        children: I.default.Messages.CANCEL
      })]
    })]
  })
}