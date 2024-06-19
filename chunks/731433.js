s.r(t), s.d(t, {
  DECO_SKU_ID: function() {
    return E
  },
  default: function() {
    return R
  }
});
var a = s(735250);
s(470079);
var o = s(990547),
  r = s(442837),
  i = s(481060),
  n = s(37234),
  c = s(100527),
  l = s(906732),
  d = s(213609),
  u = s(204418),
  _ = s(1585),
  m = s(223143),
  I = s(300284),
  M = s(158776),
  A = s(594174),
  p = s(153124),
  v = s(741245),
  C = s(474936),
  x = s(689938),
  D = s(777394);
let E = "1225876188074082374";

function N(e) {
  let {
    user: t,
    deco: s
  } = e, o = (0, r.e7)([M.Z], () => M.Z.getStatus(t.id));
  return (0, a.jsxs)("div", {
    className: D.avatarBackground,
    children: [(0, a.jsx)(u.Z, {
      user: t,
      guildId: void 0,
      avatarDecorationOverride: s,
      status: o,
      className: D.avatar
    }), (0, a.jsx)("div", {
      className: D.rect
    }), (0, a.jsx)("div", {
      className: D.rect
    }), (0, a.jsx)("div", {
      className: D.bottomOverlay
    })]
  })
}

function R(e) {
  var t;
  let {
    transitionState: s,
    onClose: u
  } = e, M = (0, p.Dt)(), {
    theme: R
  } = (0, i.useThemeContext)(), T = (0, r.e7)([A.default], () => A.default.getCurrentUser()), {
    purchases: O
  } = (0, m.c)(), h = null === (t = O.get(E)) || void 0 === t ? void 0 : t.items, j = void 0 !== h ? h[0] : void 0, {
    analyticsLocations: L
  } = (0, l.ZP)(c.Z.PREMIUM_SUBSCRIPTION_APRIL_CAMPAIGN_MODAL), f = (0, I.Z)({
    analyticsLocations: L
  });
  return (0, d.Z)({
    type: o.ImpressionTypes.MODAL,
    name: o.ImpressionNames.APRIL_PREMIUM_MARKETING_DECO_CLAIMED_MODAL,
    properties: {
      location_stack: L
    }
  }), (0, a.jsxs)(i.ModalRoot, {
    transitionState: s,
    "aria-labelledby": M,
    className: D.container,
    children: [void 0 !== T && (0, a.jsx)(N, {
      user: T,
      deco: j
    }), (0, a.jsxs)(i.ModalContent, {
      className: D.content,
      children: [(0, a.jsx)(v.C, {
        theme: R,
        premiumType: C.p9.TIER_2,
        type: v.C.Types.PREMIUM_ACTIVATED
      }), (0, a.jsx)(i.Text, {
        variant: "text-md/medium",
        color: "text-normal",
        className: D.bodyText,
        children: x.Z.Messages.PREMIUM_2024_APRIL_NITRO_OFFER_CLAIM_DECO_MODAL_BODY.format()
      })]
    }), (0, a.jsx)(i.ModalFooter, {
      children: (0, a.jsx)(i.Button, {
        look: i.Button.Looks.FILLED,
        color: i.Button.Colors.BRAND,
        onClick: () => {
          u(), (0, n.xf)(), f(), (0, _.ps)({
            initialSelectedDecoration: j,
            analyticsLocations: L
          })
        },
        children: x.Z.Messages.USER_SETTINGS_CHANGE_AVATAR_DECORATION
      })
    })]
  })
}