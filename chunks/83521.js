"use strict";
a.r(l), a.d(l, {
  default: function() {
    return N
  }
}), a("47120");
var t = a("735250"),
  s = a("470079"),
  n = a("481060"),
  o = a("442837"),
  i = a("410030"),
  d = a("430824"),
  r = a("594174"),
  u = a("931240"),
  c = a("645896"),
  m = a("603368"),
  C = a("353093"),
  _ = a("114487"),
  A = a("380365"),
  g = a("981631"),
  v = a("921944"),
  S = a("689938"),
  x = a("230468");

function N(e) {
  var l, a;
  let {
    guildId: N,
    transitionState: T,
    onClose: f
  } = e, h = (0, o.useStateFromStores)([d.default], () => d.default.getGuild(N), [N]), D = (0, c.useClanInfo)(null != N ? N : null), E = (0, o.useStateFromStores)([r.default], () => r.default.getCurrentUser(), []), [I, L] = s.useState(!0), M = (0, i.default)(), j = s.useCallback(async () => {
    I && await (0, u.adoptClanIdentity)(N, !0, g.AnalyticsLocations.CLAN_ADOPT_IDENTITY_MODAL), f(v.ContentDismissActionType.PRIMARY)
  }, [I, f, N]), p = s.useCallback(() => {
    f(v.ContentDismissActionType.DISMISS)
  }, [f]);
  s.useEffect(() => ((null == h || null == E) && f(v.ContentDismissActionType.AUTO_DISMISS), () => {}), [E, h, N, f]);
  let k = (0, m.useBrandColor)(null == D ? void 0 : null === (l = D.branding) || void 0 === l ? void 0 : l.primaryColor, [n.tokens.colors.BG_BRAND, .7]),
    R = n.tokens.colors.BG_SURFACE_OVERLAY.resolve({
      theme: M,
      saturation: 1
    }).hex(),
    O = (0, m.getClanRadialBackgroundStyle)(k, R, "top center"),
    U = (0, m.useBrandColor)(null == D ? void 0 : null === (a = D.branding) || void 0 === a ? void 0 : a.primaryColor, [n.tokens.colors.BG_BRAND, 1]),
    y = (0, m.getAccessibleTextColor)(k).hex(),
    B = (0, C.isGuildAdoptedUserClanIdentityChanged)(h, null == E ? void 0 : E.clan);
  if (null == h || null == E) return null;
  let G = B ? S.default.Messages.CLAN_USER_ADOPT_TAG_MODAL_NEW_IDENTITY_HEADING.format({
      guildName: h.name
    }) : S.default.Messages.CLAN_USER_ADOPT_TAG_MODAL_HEADING.format({
      guildName: h.name
    }),
    P = B ? S.default.Messages.CLAN_USER_ADOPT_TAG_MODAL_NEW_IDENTITY_DESCRIPTION.format({
      guildName: h.name
    }) : S.default.Messages.CLAN_USER_ADOPT_TAG_MODAL_DESCRIPTION.format({
      guildName: h.name
    }),
    b = S.default.Messages.CLAN_USER_ADOPT_TAG_MODAL_CTA;
  return (0, t.jsxs)(n.ModalRoot, {
    transitionState: T,
    size: n.ModalSize.SMALL,
    className: x.modal,
    children: [(0, t.jsx)(n.ModalContent, {
      style: O,
      children: (0, t.jsxs)("div", {
        className: x.mainContainer,
        children: [(0, t.jsxs)("div", {
          className: x.infoContainer,
          children: [(0, t.jsx)(_.default, {
            guild: h,
            iconSize: 64
          }), (0, t.jsxs)("div", {
            className: x.headerTextContainer,
            children: [(0, t.jsx)(n.Heading, {
              variant: "heading-xl/normal",
              color: "header-primary",
              children: G
            }), (0, t.jsx)(n.Text, {
              variant: "text-sm/normal",
              color: "text-secondary",
              children: P
            })]
          })]
        }), (0, t.jsx)(A.default, {
          guildId: N,
          isTagAdopted: I,
          onChangeUseTag: L
        })]
      })
    }), (0, t.jsxs)(n.ModalFooter, {
      className: x.modalFooter,
      children: [(0, t.jsx)(n.Button, {
        onClick: j,
        color: n.Button.Colors.CUSTOM,
        look: n.Button.Looks.FILLED,
        style: {
          backgroundColor: U,
          color: y
        },
        children: b
      }), (0, t.jsx)(n.Button, {
        onClick: p,
        color: n.Button.Colors.PRIMARY,
        look: n.Button.Looks.LINK,
        children: S.default.Messages.CLAN_USER_ADOPT_TAG_MODAL_CANCEL
      })]
    })]
  })
}