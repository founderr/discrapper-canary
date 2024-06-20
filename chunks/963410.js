t.r(n), t.d(n, {
  default: function() {
    return g
  }
}), t(642549);
var r = t(735250),
  o = t(470079),
  s = t(442837),
  l = t(481060),
  u = t(377171),
  i = t(592125),
  c = t(594174),
  a = t(153124),
  d = t(5192),
  E = t(630759),
  f = t(210975),
  I = t(436055),
  _ = t(785792),
  C = t(190054),
  S = t(760373),
  m = t(689938),
  h = t(963779);

function g(e) {
  let {
    transitionState: n,
    userId: t,
    channelId: g,
    onClose: N
  } = e, R = (0, a.Dt)(), T = (0, s.e7)([c.default], () => c.default.getUser(t)), Z = (0, s.e7)([i.Z], () => {
    var e;
    return null === (e = i.Z.getChannel(g)) || void 0 === e ? void 0 : e.getGuildId()
  }), M = d.ZP.useName(Z, null, T), D = btoa("12345".repeat(12)), O = (0, I.E)({
    codeBase64: btoa("12345".repeat(12)),
    chunkSize: S.iQ,
    desiredLength: S.KN
  }), A = o.useCallback(() => {
    (0, E.TQ)(t, D), N()
  }, [N, D, t]), x = o.useCallback(() => {
    (0, E.KF)(t, D), N()
  }, [N, D, t]), v = (0, f.w)(t, g);
  return (0, r.jsxs)(l.ModalRoot, {
    transitionState: n,
    "aria-labelledby": R,
    children: [(0, r.jsx)("div", {
      className: h.shieldIconContainer,
      children: (0, r.jsx)("div", {
        className: h.shieldIcon,
        children: (0, r.jsx)(l.ShieldLockIcon, {
          size: "custom",
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
        children: m.Z.Messages.E2EE_VERIFICATION_CODE
      }), (0, r.jsx)(l.Text, {
        className: h.subtitle,
        variant: "text-md/normal",
        color: "header-secondary",
        children: m.Z.Messages.E2EE_USER_VERIFICATION_SUBTITLE.format({
          username: M
        })
      }), (0, r.jsxs)("div", {
        className: h.verification,
        children: [(0, r.jsxs)("div", {
          className: h.header,
          children: [(0, r.jsx)(l.Heading, {
            variant: "text-sm/bold",
            color: "header-primary",
            children: m.Z.Messages.E2EE_VOICE_PRIVACY_CODE
          }), null != O && (0, r.jsx)(C.H, {
            className: h.copyIcon,
            chunks: O,
            color: l.tokens.colors.INTERACTIVE_NORMAL
          }), (0, r.jsx)(l.TextBadge, {
            text: m.Z.Messages.NEW,
            color: u.Z.STATUS_DANGER
          })]
        }), null != O && (0, r.jsx)(_.b, {
          className: h.code,
          chunks: O,
          columns: S.ak
        })]
      }), (0, r.jsx)(l.Text, {
        className: h.details,
        variant: "text-sm/normal",
        color: "text-muted",
        children: m.Z.Messages.E2EE_USER_VERIFICATION_FOOTER_TEXT.format({
          helpArticle: S.l4
        })
      }), (0, r.jsx)(l.Button, {
        fullWidth: !0,
        className: h.verifiedButton,
        color: v ? l.ButtonColors.RED : l.ButtonColors.BRAND,
        size: l.ButtonSizes.MEDIUM,
        look: l.ButtonLooks.FILLED,
        onClick: v ? x : A,
        children: v ? m.Z.Messages.E2EE_CLEAR_VERIFICATION : m.Z.Messages.E2EE_MARK_AS_VERIFIED
      }), (0, r.jsx)(l.Button, {
        fullWidth: !0,
        color: l.ButtonColors.PRIMARY,
        size: l.ButtonSizes.MEDIUM,
        look: l.ButtonLooks.FILLED,
        onClick: N,
        children: m.Z.Messages.CANCEL
      })]
    })]
  })
}