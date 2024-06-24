t.r(n), t.d(n, {
  default: function() {
    return m
  }
}), t(642549);
var r = t(735250),
  o = t(470079),
  u = t(442837),
  l = t(481060),
  s = t(377171),
  i = t(592125),
  a = t(594174),
  c = t(153124),
  d = t(5192),
  E = t(630759),
  f = t(210975),
  I = t(436055),
  _ = t(785792),
  C = t(190054),
  h = t(760373),
  S = t(689938),
  g = t(963779);

function m(e) {
  let {
    transitionState: n,
    userId: t,
    channelId: m,
    onClose: Z
  } = e, N = (0, c.Dt)(), R = (0, u.e7)([a.default], () => a.default.getUser(t)), T = (0, u.e7)([i.Z], () => {
    var e;
    return null === (e = i.Z.getChannel(m)) || void 0 === e ? void 0 : e.getGuildId()
  }), M = d.ZP.useName(T, null, R), D = btoa("12345".repeat(12)), A = (0, I.E)({
    codeBase64: btoa("12345".repeat(12)),
    chunkSize: h.iQ,
    desiredLength: h.KN
  }), O = o.useCallback(() => {
    (0, E.TQ)(t, D), Z()
  }, [Z, D, t]), x = o.useCallback(() => {
    (0, E.KF)(t, D), Z()
  }, [Z, D, t]), v = (0, f.wV)(t, m);
  return (0, r.jsxs)(l.ModalRoot, {
    transitionState: n,
    "aria-labelledby": N,
    children: [(0, r.jsx)("div", {
      className: g.shieldIconContainer,
      children: (0, r.jsx)("div", {
        className: g.shieldIcon,
        children: (0, r.jsx)(l.ShieldLockIcon, {
          size: "custom",
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
        children: S.Z.Messages.E2EE_VERIFICATION_CODE
      }), (0, r.jsx)(l.Text, {
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
          children: [(0, r.jsx)(l.Heading, {
            variant: "text-sm/bold",
            color: "header-primary",
            children: S.Z.Messages.E2EE_VOICE_PRIVACY_CODE
          }), null != A && (0, r.jsx)(C.H, {
            className: g.copyIcon,
            chunks: A,
            color: l.tokens.colors.INTERACTIVE_NORMAL
          }), (0, r.jsx)(l.TextBadge, {
            text: S.Z.Messages.NEW,
            color: s.Z.STATUS_DANGER
          })]
        }), null != A && (0, r.jsx)(_.b, {
          className: g.code,
          chunks: A,
          columns: h.ak
        })]
      }), (0, r.jsx)(l.Text, {
        className: g.details,
        variant: "text-sm/normal",
        color: "text-muted",
        children: S.Z.Messages.E2EE_USER_VERIFICATION_FOOTER_TEXT.format({
          helpArticle: h.l4
        })
      }), (0, r.jsx)(l.Button, {
        fullWidth: !0,
        className: g.verifiedButton,
        color: v ? l.ButtonColors.RED : l.ButtonColors.BRAND,
        size: l.ButtonSizes.MEDIUM,
        look: l.ButtonLooks.FILLED,
        onClick: v ? x : O,
        children: v ? S.Z.Messages.E2EE_CLEAR_VERIFICATION : S.Z.Messages.E2EE_MARK_AS_VERIFIED
      }), (0, r.jsx)(l.Button, {
        fullWidth: !0,
        color: l.ButtonColors.PRIMARY,
        size: l.ButtonSizes.MEDIUM,
        look: l.ButtonLooks.FILLED,
        onClick: Z,
        children: S.Z.Messages.CANCEL
      })]
    })]
  })
}