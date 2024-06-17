"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
}), n("642549");
var r = n("735250"),
  s = n("470079"),
  l = n("442837"),
  a = n("836957"),
  u = n("481060"),
  o = n("377171"),
  i = n("592125"),
  c = n("594174"),
  d = n("153124"),
  f = n("5192"),
  E = n("571463"),
  S = n("840467"),
  m = n("71328"),
  C = n("498126"),
  h = n("63454"),
  I = n("689938"),
  g = n("55915");

function p(e) {
  let {
    transitionState: t,
    userId: n,
    channelId: p,
    onClose: x
  } = e, T = (0, d.useUID)(), v = (0, l.useStateFromStores)([c.default], () => c.default.getUser(n)), y = (0, l.useStateFromStores)([i.default], () => {
    var e;
    return null === (e = i.default.getChannel(p)) || void 0 === e ? void 0 : e.getGuildId()
  }), _ = f.default.useName(y, null, v), N = (0, S.useReadableSecureFramesCode)({
    rawCode: btoa("12345".repeat(12)),
    chunkSize: 5,
    desiredLength: 60
  }), R = s.useCallback(() => x(), [x]), D = s.useCallback(() => x(), [x]), b = (0, E.useIsUserSecureFramesVerified)(n, p);
  return (0, r.jsxs)(u.ModalRoot, {
    transitionState: t,
    "aria-labelledby": T,
    children: [(0, r.jsx)("div", {
      className: g.shieldIconContainer,
      children: (0, r.jsx)("div", {
        className: g.shieldIcon,
        children: (0, r.jsx)(a.ShieldLockIcon, {
          width: 55,
          height: 55,
          color: u.tokens.colors.HEADER_SECONDARY
        })
      })
    }), (0, r.jsxs)(u.ModalContent, {
      className: g.content,
      children: [(0, r.jsx)(u.Heading, {
        className: g.title,
        variant: "heading-lg/bold",
        color: "header-primary",
        children: I.default.Messages.E2EE_VERIFICATION_CODE
      }), (0, r.jsx)(u.Text, {
        className: g.subtitle,
        variant: "text-md/normal",
        color: "header-secondary",
        children: I.default.Messages.E2EE_USER_VERIFY_MODAL_SUBTITLE.format({
          username: _
        })
      }), (0, r.jsxs)("div", {
        className: g.verification,
        children: [(0, r.jsxs)("div", {
          className: g.header,
          children: [(0, r.jsx)(u.Heading, {
            variant: "text-sm/bold",
            color: "header-primary",
            children: I.default.Messages.E2EE_VOICE_PRIVACY_CODE
          }), null != N && (0, r.jsx)(C.SecureFramesCopyIcon, {
            className: g.copyIcon,
            chunks: N,
            color: u.tokens.colors.INTERACTIVE_NORMAL
          }), (0, r.jsx)(u.TextBadge, {
            text: I.default.Messages.NEW,
            color: o.default.STATUS_DANGER
          })]
        }), null != N && (0, r.jsx)(m.SecureFramesCode, {
          className: g.code,
          chunks: N,
          columns: 4
        })]
      }), (0, r.jsx)(u.Text, {
        className: g.details,
        variant: "text-sm/normal",
        color: "text-muted",
        children: I.default.Messages.E2EE_USER_VERIFY_FOOTER_TEXT.format({
          helpArticle: h.E2EE_HELPDESK_ARTICLE
        })
      }), (0, r.jsx)(u.Button, {
        fullWidth: !0,
        className: g.verifiedButton,
        color: b ? u.ButtonColors.RED : u.ButtonColors.BRAND,
        size: u.ButtonSizes.MEDIUM,
        look: u.ButtonLooks.FILLED,
        onClick: b ? D : R,
        children: b ? I.default.Messages.E2EE_CLEAR_VERIFICATION : I.default.Messages.E2EE_MARK_AS_VERIFIED
      }), (0, r.jsx)(u.Button, {
        fullWidth: !0,
        color: u.ButtonColors.PRIMARY,
        size: u.ButtonSizes.MEDIUM,
        look: u.ButtonLooks.FILLED,
        onClick: x,
        children: I.default.Messages.CANCEL
      })]
    })]
  })
}