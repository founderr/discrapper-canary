t.r(n), t.d(n, {
  default: function() {
    return C
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
  h = t(436055),
  I = t(785792),
  _ = t(190054),
  S = t(760373),
  g = t(689938),
  m = t(963779);

function C(e) {
  let {
    transitionState: n,
    userId: t,
    channelId: C,
    onClose: N
  } = e, Z = (0, a.Dt)(), D = (0, s.e7)([c.default], () => c.default.getUser(t)), R = (0, s.e7)([i.Z], () => {
    var e;
    return null === (e = i.Z.getChannel(C)) || void 0 === e ? void 0 : e.getGuildId()
  }), M = d.ZP.useName(R, null, D), T = btoa("12345".repeat(12)), x = (0, h.E)({
    codeBase64: btoa("12345".repeat(12)),
    chunkSize: S.iQ,
    desiredLength: S.KN
  }), A = o.useCallback(() => {
    (0, E.uz)(t, T), N()
  }, [N, T, t]), O = o.useCallback(() => {
    (0, E.td)(t, T), N()
  }, [N, T, t]), v = (0, f.w)(t, C);
  return (0, r.jsxs)(l.ModalRoot, {
    transitionState: n,
    "aria-labelledby": Z,
    children: [(0, r.jsx)("div", {
      className: m.shieldIconContainer,
      children: (0, r.jsx)("div", {
        className: m.shieldIcon,
        children: (0, r.jsx)(l.ShieldLockIcon, {
          size: "custom",
          width: 55,
          height: 55,
          color: l.tokens.colors.HEADER_SECONDARY
        })
      })
    }), (0, r.jsxs)(l.ModalContent, {
      className: m.content,
      children: [(0, r.jsx)(l.Heading, {
        className: m.title,
        variant: "heading-lg/bold",
        color: "header-primary",
        children: g.Z.Messages.E2EE_VERIFICATION_CODE
      }), (0, r.jsx)(l.Text, {
        className: m.subtitle,
        variant: "text-md/normal",
        color: "header-secondary",
        children: g.Z.Messages.E2EE_USER_VERIFICATION_SUBTITLE.format({
          username: M
        })
      }), (0, r.jsxs)("div", {
        className: m.verification,
        children: [(0, r.jsxs)("div", {
          className: m.header,
          children: [(0, r.jsx)(l.Heading, {
            variant: "text-sm/bold",
            color: "header-primary",
            children: g.Z.Messages.E2EE_VOICE_PRIVACY_CODE
          }), null != x && (0, r.jsx)(_.H, {
            className: m.copyIcon,
            chunks: x,
            color: l.tokens.colors.INTERACTIVE_NORMAL
          }), (0, r.jsx)(l.TextBadge, {
            text: g.Z.Messages.NEW,
            color: u.Z.STATUS_DANGER
          })]
        }), null != x && (0, r.jsx)(I.b, {
          className: m.code,
          chunks: x,
          columns: S.ak
        })]
      }), (0, r.jsx)(l.Text, {
        className: m.details,
        variant: "text-sm/normal",
        color: "text-muted",
        children: g.Z.Messages.E2EE_USER_VERIFICATION_FOOTER_TEXT.format({
          helpArticle: S.l4
        })
      }), (0, r.jsx)(l.Button, {
        fullWidth: !0,
        className: m.verifiedButton,
        color: v ? l.ButtonColors.RED : l.ButtonColors.BRAND,
        size: l.ButtonSizes.MEDIUM,
        look: l.ButtonLooks.FILLED,
        onClick: v ? O : A,
        children: v ? g.Z.Messages.E2EE_CLEAR_VERIFICATION : g.Z.Messages.E2EE_MARK_AS_VERIFIED
      }), (0, r.jsx)(l.Button, {
        fullWidth: !0,
        color: l.ButtonColors.PRIMARY,
        size: l.ButtonSizes.MEDIUM,
        look: l.ButtonLooks.FILLED,
        onClick: N,
        children: g.Z.Messages.CANCEL
      })]
    })]
  })
}