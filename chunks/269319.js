"use strict";
n.r(t), n.d(t, {
  default: function() {
    return x
  }
});
var r = n("735250"),
  s = n("470079"),
  l = n("442837"),
  a = n("836957"),
  u = n("481060"),
  o = n("377171"),
  i = n("592125"),
  c = n("594174"),
  d = n("153124"),
  E = n("5192"),
  f = n("571463"),
  C = n("71328"),
  S = n("498126"),
  I = n("63454"),
  m = n("689938"),
  h = n("55915");

function x(e) {
  let {
    transitionState: t,
    userId: n,
    channelId: x,
    onClose: T
  } = e, _ = (0, d.useUID)(), N = (0, l.useStateFromStores)([c.default], () => c.default.getUser(n)), g = (0, l.useStateFromStores)([i.default], () => {
    var e;
    return null === (e = i.default.getChannel(x)) || void 0 === e ? void 0 : e.getGuildId()
  }), R = E.default.useName(g, null, N), p = "12345 67890 12345 67890 12345 67890 12345 67890 12345 67890 12345 67890", v = s.useCallback(() => T(), [T]), D = s.useCallback(() => T(), [T]), y = (0, f.useIsUserSecureFramesVerified)(n, x);
  return (0, r.jsxs)(u.ModalRoot, {
    transitionState: t,
    "aria-labelledby": _,
    children: [(0, r.jsx)("div", {
      className: h.shieldIconContainer,
      children: (0, r.jsx)("div", {
        className: h.shieldIcon,
        children: (0, r.jsx)(a.ShieldLockIcon, {
          width: 55,
          height: 55,
          color: u.tokens.colors.HEADER_SECONDARY
        })
      })
    }), (0, r.jsxs)(u.ModalContent, {
      className: h.content,
      children: [(0, r.jsx)(u.Heading, {
        className: h.title,
        variant: "heading-lg/bold",
        color: "header-primary",
        children: m.default.Messages.E2EE_VERIFICATION_CODE
      }), (0, r.jsx)(u.Text, {
        className: h.subtitle,
        variant: "text-md/normal",
        color: "header-secondary",
        children: m.default.Messages.E2EE_USER_VERIFY_MODAL_SUBTITLE.format({
          username: R
        })
      }), (0, r.jsxs)("div", {
        className: h.verification,
        children: [(0, r.jsxs)("div", {
          className: h.header,
          children: [(0, r.jsx)(u.Heading, {
            variant: "text-sm/bold",
            color: "header-primary",
            children: m.default.Messages.E2EE_VOICE_PRIVACY_CODE
          }), (0, r.jsx)(S.SecureFramesCopyIcon, {
            className: h.copyIcon,
            text: p,
            color: u.tokens.colors.INTERACTIVE_NORMAL
          }), (0, r.jsx)(u.TextBadge, {
            text: m.default.Messages.NEW,
            color: o.default.STATUS_DANGER
          })]
        }), (0, r.jsx)(C.SecureFramesCode, {
          className: h.code,
          code: p
        })]
      }), (0, r.jsx)(u.Text, {
        className: h.details,
        variant: "text-sm/normal",
        color: "text-muted",
        children: m.default.Messages.E2EE_USER_VERIFY_FOOTER_TEXT.format({
          helpArticle: I.E2EE_HELPDESK_ARTICLE
        })
      }), (0, r.jsx)(u.Button, {
        fullWidth: !0,
        className: h.verifiedButton,
        color: y ? u.ButtonColors.RED : u.ButtonColors.BRAND,
        size: u.ButtonSizes.MEDIUM,
        look: u.ButtonLooks.FILLED,
        onClick: y ? D : v,
        children: y ? m.default.Messages.E2EE_CLEAR_VERIFICATION : m.default.Messages.E2EE_MARK_AS_VERIFIED
      }), (0, r.jsx)(u.Button, {
        fullWidth: !0,
        color: u.ButtonColors.PRIMARY,
        size: u.ButtonSizes.MEDIUM,
        look: u.ButtonLooks.FILLED,
        onClick: T,
        children: m.default.Messages.CANCEL
      })]
    })]
  })
}