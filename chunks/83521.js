a.r(l), a.d(l, {
  default: function() {
    return h
  }
}), a(47120);
var s = a(735250),
  n = a(470079),
  i = a(481060),
  o = a(442837),
  t = a(410030),
  r = a(430824),
  d = a(594174),
  c = a(931240),
  u = a(645896),
  _ = a(603368),
  m = a(353093),
  v = a(114487),
  A = a(380365),
  N = a(981631),
  x = a(921944),
  g = a(689938),
  C = a(250612);

function h(e) {
  var l, a;
  let {
    guildId: h,
    transitionState: S,
    onClose: T
  } = e, L = (0, o.e7)([r.Z], () => r.Z.getGuild(h), [h]), E = (0, u.Cc)(null != h ? h : null), j = (0, o.e7)([d.default], () => d.default.getCurrentUser(), []), [M, D] = n.useState(!0), I = (0, t.ZP)(), Z = n.useCallback(async () => {
    M && await (0, c.nE)(h, !0, N.Sbl.CLAN_ADOPT_IDENTITY_MODAL), T(x.L.PRIMARY)
  }, [M, T, h]), f = n.useCallback(() => {
    T(x.L.DISMISS)
  }, [T]);
  n.useEffect(() => ((null == L || null == j) && T(x.L.AUTO_DISMISS), () => {}), [j, L, h, T]);
  let k = (0, _.nP)(null == E ? void 0 : null === (l = E.branding) || void 0 === l ? void 0 : l.primaryColor, [i.tokens.colors.BG_BRAND, .7]),
    O = i.tokens.colors.BG_SURFACE_OVERLAY.resolve({
      theme: I,
      saturation: 1
    }).hex(),
    P = (0, _.nj)(k, O, "top center"),
    R = (0, _.nP)(null == E ? void 0 : null === (a = E.branding) || void 0 === a ? void 0 : a.primaryColor, [i.tokens.colors.BG_BRAND, 1]),
    U = (0, _.$0)(k).hex(),
    p = (0, m.Zp)(L, null == j ? void 0 : j.clan);
  if (null == L || null == j) return null;
  let G = p ? g.Z.Messages.CLAN_USER_ADOPT_TAG_MODAL_NEW_IDENTITY_HEADING.format({
      guildName: L.name
    }) : g.Z.Messages.CLAN_USER_ADOPT_TAG_MODAL_HEADING.format({
      guildName: L.name
    }),
    b = p ? g.Z.Messages.CLAN_USER_ADOPT_TAG_MODAL_NEW_IDENTITY_DESCRIPTION.format({
      guildName: L.name
    }) : g.Z.Messages.CLAN_USER_ADOPT_TAG_MODAL_DESCRIPTION.format({
      guildName: L.name
    }),
    B = g.Z.Messages.CLAN_USER_ADOPT_TAG_MODAL_CTA;
  return (0, s.jsxs)(i.ModalRoot, {
    transitionState: S,
    size: i.ModalSize.SMALL,
    className: C.modal,
    children: [(0, s.jsx)(i.ModalContent, {
      style: P,
      children: (0, s.jsxs)("div", {
        className: C.mainContainer,
        children: [(0, s.jsxs)("div", {
          className: C.infoContainer,
          children: [(0, s.jsx)(v.Z, {
            guild: L,
            iconSize: 64
          }), (0, s.jsxs)("div", {
            className: C.headerTextContainer,
            children: [(0, s.jsx)(i.Heading, {
              variant: "heading-xl/normal",
              color: "header-primary",
              children: G
            }), (0, s.jsx)(i.Text, {
              variant: "text-sm/normal",
              color: "text-secondary",
              children: b
            })]
          })]
        }), (0, s.jsx)(A.Z, {
          guildId: h,
          isTagAdopted: M,
          onChangeUseTag: D
        })]
      })
    }), (0, s.jsxs)(i.ModalFooter, {
      className: C.modalFooter,
      children: [(0, s.jsx)(i.Button, {
        onClick: Z,
        color: i.Button.Colors.CUSTOM,
        look: i.Button.Looks.FILLED,
        style: {
          backgroundColor: R,
          color: U
        },
        children: B
      }), (0, s.jsx)(i.Button, {
        onClick: f,
        color: i.Button.Colors.PRIMARY,
        look: i.Button.Looks.LINK,
        children: g.Z.Messages.CLAN_USER_ADOPT_TAG_MODAL_CANCEL
      })]
    })]
  })
}