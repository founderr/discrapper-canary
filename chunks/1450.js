"use strict";
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(442837),
  l = n(481060),
  u = n(2052),
  _ = n(367907),
  c = n(906732),
  d = n(28546),
  E = n(26323),
  I = n(434404),
  T = n(889161),
  h = n(430824),
  f = n(267642),
  S = n(981631),
  N = n(30513),
  A = n(689938),
  m = n(678976);
t.Z = e => {
  let {
    className: t,
    guildId: n,
    channel: s,
    shouldTrackUpsellViewed: O,
    setTrackedUpsellViewed: p
  } = e, {
    location: R
  } = (0, u.O)(), {
    analyticsLocations: g
  } = (0, c.ZP)(), C = (0, a.e7)([h.Z], () => h.Z.getGuild(n)), {
    canManageAllExpressions: v
  } = (0, T.XJ)(C), L = null != C && 0 === (0, f.A3)(C.premiumTier) && !C.hasFeature(S.oNc.MORE_STICKERS);
  return (r.useEffect(() => {
    v && L && O && ((0, _.yw)(S.rMx.PREMIUM_GUILD_UPSELL_VIEWED, {
      location: R,
      guild_id: null == C ? void 0 : C.id,
      channel_id: null == s ? void 0 : s.id,
      type: "Expression Picker Inline Sticker Upsell",
      location_stack: g
    }), p(!0))
  }, [L, C, s, R, O, p, g, v]), null != C && v) ? L ? (0, i.jsxs)("div", {
    className: o()(m.upsell, t),
    children: [(0, i.jsx)(l.BoostTier2SimpleIcon, {
      size: "md",
      color: "currentColor",
      className: m.icon
    }), (0, i.jsx)(l.Text, {
      color: "interactive-normal",
      className: m.body,
      variant: "text-sm/normal",
      children: A.Z.Messages.STICKER_PICKER_EMPTY_GUILD_UPSELL_NO_PREMIUM_SUBSCRIPTIONS_DESCRIPTION.format({
        count: (0, f.A3)(S.Eu4.TIER_1)
      })
    }), (0, i.jsx)(l.Button, {
      look: l.Button.Looks.LINK,
      color: l.Button.Colors.LINK,
      onClick: () => {
        (0, E.Z)({
          analyticsLocations: g,
          analyticsSourceLocation: R,
          guild: C,
          perks: (0, N.hC)()
        })
      },
      children: A.Z.Messages.STICKER_PICKER_EMPTY_GUILD_UPSELL_NO_PREMIUM_SUBSCRIPTIONS_CTA
    })]
  }) : (0, i.jsxs)("div", {
    className: o()(m.upsell, t),
    children: [(0, i.jsx)(l.StickerIcon, {
      size: "custom",
      color: "currentColor",
      className: m.icon,
      width: 20,
      height: 20
    }), (0, i.jsx)(l.Text, {
      color: "interactive-normal",
      className: m.body,
      variant: "text-sm/normal",
      children: A.Z.Messages.STICKER_PICKER_EMPTY_GUILD_UPSELL_NO_STICKERS_DESCRIPTION
    }), (0, i.jsx)(l.Button, {
      look: l.Button.Looks.LINK,
      color: l.Button.Colors.LINK,
      onClick: () => {
        (0, d._Q)(), I.Z.open(n, S.pNK.STICKERS, R)
      },
      children: A.Z.Messages.STICKER_PICKER_EMPTY_GUILD_UPSELL_NO_STICKERS_CTA
    })]
  }) : null
}