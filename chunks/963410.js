t.r(n), t.d(n, {
  default: function() {
    return m
  }
}), t(642549);
var r = t(735250),
  o = t(470079),
  s = t(442837),
  u = t(481060),
  l = t(377171),
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
  C = t(689938),
  g = t(963779);

function m(e) {
  let {
    transitionState: n,
    userId: t,
    channelId: m,
    onClose: N
  } = e, Z = (0, a.Dt)(), D = (0, s.e7)([c.default], () => c.default.getUser(t)), R = (0, s.e7)([i.Z], () => {
    var e;
    return null === (e = i.Z.getChannel(m)) || void 0 === e ? void 0 : e.getGuildId()
  }), M = d.ZP.useName(R, null, D), T = btoa("12345".repeat(12)), x = (0, h.E)({
    codeBase64: btoa("12345".repeat(12)),
    chunkSize: S.iQ,
    desiredLength: S.KN
  }), O = o.useCallback(() => {
    (0, E.uz)(t, T), N()
  }, [N, T, t]), A = o.useCallback(() => {
    (0, E.td)(t, T), N()
  }, [N, T, t]), v = (0, f.w)(t, m);
  return (0, r.jsxs)(u.ModalRoot, {
    transitionState: n,
    "aria-labelledby": Z,
    children: [(0, r.jsx)("div", {
      className: g.shieldIconContainer,
      children: (0, r.jsx)("div", {
        className: g.shieldIcon,
        children: (0, r.jsx)(u.ShieldLockIcon, {
          size: "custom",
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
        children: C.Z.Messages.E2EE_VERIFICATION_CODE
      }), (0, r.jsx)(u.Text, {
        className: g.subtitle,
        variant: "text-md/normal",
        color: "header-secondary",
        children: C.Z.Messages.E2EE_USER_VERIFICATION_SUBTITLE.format({
          username: M
        })
      }), (0, r.jsxs)("div", {
        className: g.verification,
        children: [(0, r.jsxs)("div", {
          className: g.header,
          children: [(0, r.jsx)(u.Heading, {
            variant: "text-sm/bold",
            color: "header-primary",
            children: C.Z.Messages.E2EE_VOICE_PRIVACY_CODE
          }), null != x && (0, r.jsx)(_.H, {
            className: g.copyIcon,
            chunks: x,
            color: u.tokens.colors.INTERACTIVE_NORMAL
          }), (0, r.jsx)(u.TextBadge, {
            text: C.Z.Messages.NEW,
            color: l.Z.STATUS_DANGER
          })]
        }), null != x && (0, r.jsx)(I.b, {
          className: g.code,
          chunks: x,
          columns: S.ak
        })]
      }), (0, r.jsx)(u.Text, {
        className: g.details,
        variant: "text-sm/normal",
        color: "text-muted",
        children: C.Z.Messages.E2EE_USER_VERIFICATION_FOOTER_TEXT.format({
          helpArticle: S.l4
        })
      }), (0, r.jsx)(u.Button, {
        fullWidth: !0,
        className: g.verifiedButton,
        color: v ? u.ButtonColors.RED : u.ButtonColors.BRAND,
        size: u.ButtonSizes.MEDIUM,
        look: u.ButtonLooks.FILLED,
        onClick: v ? A : O,
        children: v ? C.Z.Messages.E2EE_CLEAR_VERIFICATION : C.Z.Messages.E2EE_MARK_AS_VERIFIED
      }), (0, r.jsx)(u.Button, {
        fullWidth: !0,
        color: u.ButtonColors.PRIMARY,
        size: u.ButtonSizes.MEDIUM,
        look: u.ButtonLooks.FILLED,
        onClick: N,
        children: C.Z.Messages.CANCEL
      })]
    })]
  })
}