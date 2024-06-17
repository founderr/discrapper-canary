"use strict";
n.r(t), n.d(t, {
  default: function() {
    return R
  }
}), n("642549");
var r = n("735250"),
  s = n("470079"),
  a = n("442837"),
  u = n("836957"),
  l = n("481060"),
  o = n("377171"),
  i = n("592125"),
  c = n("594174"),
  d = n("153124"),
  f = n("5192"),
  E = n("627617"),
  S = n("571463"),
  m = n("840467"),
  C = n("71328"),
  I = n("498126"),
  h = n("63454"),
  _ = n("689938"),
  g = n("55915");

function R(e) {
  let {
    transitionState: t,
    userId: n,
    channelId: R,
    onClose: D
  } = e, T = (0, d.useUID)(), N = (0, a.useStateFromStores)([c.default], () => c.default.getUser(n)), p = (0, a.useStateFromStores)([i.default], () => {
    var e;
    return null === (e = i.default.getChannel(R)) || void 0 === e ? void 0 : e.getGuildId()
  }), x = f.default.useName(p, null, N), y = (0, m.useReadableSecureFramesCode)({
    rawCode: btoa("12345".repeat(12)),
    chunkSize: 5,
    desiredLength: 60
  }), A = s.useCallback(() => {
    (0, E.addUserVerification)(n), D()
  }, [D, n]), v = s.useCallback(() => {
    (0, E.clearUserVerification)(n), D()
  }, [D, n]), M = (0, S.useIsUserSecureFramesVerified)(n, R);
  return (0, r.jsxs)(l.ModalRoot, {
    transitionState: t,
    "aria-labelledby": T,
    children: [(0, r.jsx)("div", {
      className: g.shieldIconContainer,
      children: (0, r.jsx)("div", {
        className: g.shieldIcon,
        children: (0, r.jsx)(u.ShieldLockIcon, {
          width: 55,
          height: 55,
          color: l.tokens.colors.HEADER_SECONDARY
        })
      })
    }), (0, r.jsxs)(l.ModalContent, {
      className: g.content,
      children: [(0, r.jsx)(l.Heading, {
        className: g.title,
        variant: "heading-lg/bold",
        color: "header-primary",
        children: _.default.Messages.E2EE_VERIFICATION_CODE
      }), (0, r.jsx)(l.Text, {
        className: g.subtitle,
        variant: "text-md/normal",
        color: "header-secondary",
        children: _.default.Messages.E2EE_USER_VERIFY_MODAL_SUBTITLE.format({
          username: x
        })
      }), (0, r.jsxs)("div", {
        className: g.verification,
        children: [(0, r.jsxs)("div", {
          className: g.header,
          children: [(0, r.jsx)(l.Heading, {
            variant: "text-sm/bold",
            color: "header-primary",
            children: _.default.Messages.E2EE_VOICE_PRIVACY_CODE
          }), null != y && (0, r.jsx)(I.SecureFramesCopyIcon, {
            className: g.copyIcon,
            chunks: y,
            color: l.tokens.colors.INTERACTIVE_NORMAL
          }), (0, r.jsx)(l.TextBadge, {
            text: _.default.Messages.NEW,
            color: o.default.STATUS_DANGER
          })]
        }), null != y && (0, r.jsx)(C.SecureFramesCode, {
          className: g.code,
          chunks: y,
          columns: 4
        })]
      }), (0, r.jsx)(l.Text, {
        className: g.details,
        variant: "text-sm/normal",
        color: "text-muted",
        children: _.default.Messages.E2EE_USER_VERIFY_FOOTER_TEXT.format({
          helpArticle: h.E2EE_HELPDESK_ARTICLE
        })
      }), (0, r.jsx)(l.Button, {
        fullWidth: !0,
        className: g.verifiedButton,
        color: M ? l.ButtonColors.RED : l.ButtonColors.BRAND,
        size: l.ButtonSizes.MEDIUM,
        look: l.ButtonLooks.FILLED,
        onClick: M ? v : A,
        children: M ? _.default.Messages.E2EE_CLEAR_VERIFICATION : _.default.Messages.E2EE_MARK_AS_VERIFIED
      }), (0, r.jsx)(l.Button, {
        fullWidth: !0,
        color: l.ButtonColors.PRIMARY,
        size: l.ButtonSizes.MEDIUM,
        look: l.ButtonLooks.FILLED,
        onClick: D,
        children: _.default.Messages.CANCEL
      })]
    })]
  })
}