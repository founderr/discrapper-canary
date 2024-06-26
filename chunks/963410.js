n.r(t), n.d(t, {
  default: function() {
    return m
  }
}), n(642549);
var r = n(735250),
  o = n(470079),
  l = n(442837),
  s = n(481060),
  i = n(377171),
  u = n(592125),
  c = n(594174),
  a = n(153124),
  d = n(5192),
  E = n(630759),
  f = n(210975),
  I = n(436055),
  _ = n(785792),
  C = n(190054),
  h = n(760373),
  S = n(689938),
  g = n(963779);

function m(e) {
  let {
    transitionState: t,
    userId: n,
    channelId: m,
    onClose: Z
  } = e, N = (0, a.Dt)(), T = (0, l.e7)([c.default], () => c.default.getUser(n)), R = (0, l.e7)([u.Z], () => {
    var e;
    return null === (e = u.Z.getChannel(m)) || void 0 === e ? void 0 : e.getGuildId()
  }), M = d.ZP.useName(R, null, T), v = btoa("12345".repeat(12)), x = (0, I.E)({
    codeBase64: btoa("12345".repeat(12)),
    chunkSize: h.iQ,
    desiredLength: h.KN
  }), D = o.useCallback(() => {
    (0, E.TQ)(n, v), Z()
  }, [Z, v, n]), A = o.useCallback(() => {
    (0, E.KF)(n, v), Z()
  }, [Z, v, n]), O = (0, f.wV)({
    userId: n,
    channelId: m,
    location: "WebSecureFramesUserVerificationModal"
  });
  return (0, r.jsxs)(s.ModalRoot, {
    transitionState: t,
    "aria-labelledby": N,
    children: [(0, r.jsx)("div", {
      className: g.shieldIconContainer,
      children: (0, r.jsx)("div", {
        className: g.shieldIcon,
        children: (0, r.jsx)(s.ShieldLockIcon, {
          size: "custom",
          width: 55,
          height: 55,
          color: s.tokens.colors.HEADER_SECONDARY
        })
      })
    }), (0, r.jsxs)(s.ModalContent, {
      className: g.content,
      children: [(0, r.jsx)(s.Heading, {
        className: g.title,
        variant: "heading-lg/bold",
        color: "header-primary",
        children: S.Z.Messages.E2EE_VERIFICATION_CODE
      }), (0, r.jsx)(s.Text, {
        className: g.subtitle,
        variant: "text-md/normal",
        color: "header-secondary",
        children: S.Z.Messages.E2EE_USER_VERIFICATION_SUBTITLE.format({
          username: M
        })
      }), (0, r.jsxs)("div", {
        className: g.verification,
        children: [(0, r.jsxs)("div", {
          className: g.header,
          children: [(0, r.jsx)(s.Heading, {
            variant: "text-sm/bold",
            color: "header-primary",
            children: S.Z.Messages.E2EE_VOICE_PRIVACY_CODE
          }), null != x && (0, r.jsx)(C.H, {
            className: g.copyIcon,
            chunks: x,
            color: s.tokens.colors.INTERACTIVE_NORMAL
          }), (0, r.jsx)(s.TextBadge, {
            text: S.Z.Messages.NEW,
            color: i.Z.STATUS_DANGER
          })]
        }), null != x && (0, r.jsx)(_.b, {
          className: g.code,
          chunks: x,
          columns: h.ak
        })]
      }), (0, r.jsx)(s.Text, {
        className: g.details,
        variant: "text-sm/normal",
        color: "text-muted",
        children: S.Z.Messages.E2EE_USER_VERIFICATION_FOOTER_TEXT.format({
          helpArticle: h.l4
        })
      }), (0, r.jsx)(s.Button, {
        fullWidth: !0,
        className: g.verifiedButton,
        color: O ? s.ButtonColors.RED : s.ButtonColors.BRAND,
        size: s.ButtonSizes.MEDIUM,
        look: s.ButtonLooks.FILLED,
        onClick: O ? A : D,
        children: O ? S.Z.Messages.E2EE_CLEAR_VERIFICATION : S.Z.Messages.E2EE_MARK_AS_VERIFIED
      }), (0, r.jsx)(s.Button, {
        fullWidth: !0,
        color: s.ButtonColors.PRIMARY,
        size: s.ButtonSizes.MEDIUM,
        look: s.ButtonLooks.FILLED,
        onClick: Z,
        children: S.Z.Messages.CANCEL
      })]
    })]
  })
}