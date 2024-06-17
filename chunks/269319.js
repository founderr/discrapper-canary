"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
}), n("642549");
var r = n("735250"),
  s = n("470079"),
  u = n("442837"),
  a = n("836957"),
  l = n("481060"),
  o = n("377171"),
  i = n("592125"),
  c = n("594174"),
  d = n("153124"),
  E = n("5192"),
  f = n("627617"),
  S = n("571463"),
  I = n("840467"),
  _ = n("71328"),
  C = n("498126"),
  m = n("63454"),
  R = n("689938"),
  h = n("55915");

function T(e) {
  let {
    transitionState: t,
    userId: n,
    channelId: T,
    onClose: N
  } = e, g = (0, d.useUID)(), D = (0, u.useStateFromStores)([c.default], () => c.default.getUser(n)), A = (0, u.useStateFromStores)([i.default], () => {
    var e;
    return null === (e = i.default.getChannel(T)) || void 0 === e ? void 0 : e.getGuildId()
  }), O = E.default.useName(A, null, D), p = (0, I.useReadableSecureFramesCode)({
    codeBase64: btoa("12345".repeat(12)),
    chunkSize: m.USER_VERIFICATION_CHUNK_SIZE,
    desiredLength: m.USER_VERIFICATION_LENGTH
  }), x = s.useCallback(() => {
    (0, f.addUserVerification)(n), N()
  }, [N, n]), U = s.useCallback(() => {
    (0, f.clearUserVerification)(n), N()
  }, [N, n]), V = (0, S.useIsUserSecureFramesVerified)(n, T);
  return (0, r.jsxs)(l.ModalRoot, {
    transitionState: t,
    "aria-labelledby": g,
    children: [(0, r.jsx)("div", {
      className: h.shieldIconContainer,
      children: (0, r.jsx)("div", {
        className: h.shieldIcon,
        children: (0, r.jsx)(a.ShieldLockIcon, {
          width: 55,
          height: 55,
          color: l.tokens.colors.HEADER_SECONDARY
        })
      })
    }), (0, r.jsxs)(l.ModalContent, {
      className: h.content,
      children: [(0, r.jsx)(l.Heading, {
        className: h.title,
        variant: "heading-lg/bold",
        color: "header-primary",
        children: R.default.Messages.E2EE_VERIFICATION_CODE
      }), (0, r.jsx)(l.Text, {
        className: h.subtitle,
        variant: "text-md/normal",
        color: "header-secondary",
        children: R.default.Messages.E2EE_USER_VERIFY_MODAL_SUBTITLE.format({
          username: O
        })
      }), (0, r.jsxs)("div", {
        className: h.verification,
        children: [(0, r.jsxs)("div", {
          className: h.header,
          children: [(0, r.jsx)(l.Heading, {
            variant: "text-sm/bold",
            color: "header-primary",
            children: R.default.Messages.E2EE_VOICE_PRIVACY_CODE
          }), null != p && (0, r.jsx)(C.SecureFramesCopyIcon, {
            className: h.copyIcon,
            chunks: p,
            color: l.tokens.colors.INTERACTIVE_NORMAL
          }), (0, r.jsx)(l.TextBadge, {
            text: R.default.Messages.NEW,
            color: o.default.STATUS_DANGER
          })]
        }), null != p && (0, r.jsx)(_.SecureFramesCode, {
          className: h.code,
          chunks: p,
          columns: m.USER_VERIFICATION_NUM_COLUMNS
        })]
      }), (0, r.jsx)(l.Text, {
        className: h.details,
        variant: "text-sm/normal",
        color: "text-muted",
        children: R.default.Messages.E2EE_USER_VERIFY_FOOTER_TEXT.format({
          helpArticle: m.E2EE_HELPDESK_ARTICLE
        })
      }), (0, r.jsx)(l.Button, {
        fullWidth: !0,
        className: h.verifiedButton,
        color: V ? l.ButtonColors.RED : l.ButtonColors.BRAND,
        size: l.ButtonSizes.MEDIUM,
        look: l.ButtonLooks.FILLED,
        onClick: V ? U : x,
        children: V ? R.default.Messages.E2EE_CLEAR_VERIFICATION : R.default.Messages.E2EE_MARK_AS_VERIFIED
      }), (0, r.jsx)(l.Button, {
        fullWidth: !0,
        color: l.ButtonColors.PRIMARY,
        size: l.ButtonSizes.MEDIUM,
        look: l.ButtonLooks.FILLED,
        onClick: N,
        children: R.default.Messages.CANCEL
      })]
    })]
  })
}