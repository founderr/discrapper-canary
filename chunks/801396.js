"use strict";
n.r(t), n.d(t, {
  default: function() {
    return y
  }
});
var l = n("37983"),
  i = n("884691"),
  a = n("414456"),
  s = n.n(a),
  r = n("446674"),
  o = n("77078"),
  u = n("997289"),
  d = n("716241"),
  c = n("685665"),
  f = n("538282"),
  p = n("379532"),
  m = n("592407"),
  h = n("817963"),
  E = n("305961"),
  S = n("326880"),
  g = n("595086"),
  C = n("427459"),
  T = n("49111"),
  v = n("944305"),
  I = n("782340"),
  _ = n("12180"),
  y = e => {
    let {
      className: t,
      guildId: n,
      channel: a,
      shouldTrackUpsellViewed: y,
      setTrackedUpsellViewed: A
    } = e, {
      location: N
    } = (0, u.useAnalyticsContext)(), {
      analyticsLocations: x
    } = (0, c.default)(), O = (0, r.useStateFromStores)([E.default], () => E.default.getGuild(n)), {
      canManageAllExpressions: R
    } = (0, h.useManageResourcePermissions)(O), M = null != O && 0 === (0, C.getTotalStickerCountForTier)(O.premiumTier) && !O.hasFeature(T.GuildFeatures.MORE_STICKERS);
    return (i.useEffect(() => {
      R && M && y && ((0, d.trackWithMetadata)(T.AnalyticEvents.PREMIUM_GUILD_UPSELL_VIEWED, {
        location: N,
        guild_id: null == O ? void 0 : O.id,
        channel_id: null == a ? void 0 : a.id,
        type: "Expression Picker Inline Sticker Upsell",
        location_stack: x
      }), A(!0))
    }, [M, O, a, N, y, A, x, R]), null != O && R) ? M ? (0, l.jsxs)("div", {
      className: s(_.upsell, t),
      children: [(0, l.jsx)(S.default, {
        className: _.icon,
        width: 24,
        height: 24
      }), (0, l.jsx)(o.Text, {
        color: "interactive-normal",
        className: _.body,
        variant: "text-sm/normal",
        children: I.default.Messages.STICKER_PICKER_EMPTY_GUILD_UPSELL_NO_PREMIUM_SUBSCRIPTIONS_DESCRIPTION.format({
          count: (0, C.getTotalStickerCountForTier)(T.BoostedGuildTiers.TIER_1)
        })
      }), (0, l.jsx)(o.Button, {
        look: o.Button.Looks.LINK,
        color: o.Button.Colors.LINK,
        onClick: () => {
          (0, p.default)({
            analyticsLocations: x,
            analyticsSourceLocation: N,
            guild: O,
            perks: (0, v.guildBoostingPerks)()
          })
        },
        children: I.default.Messages.STICKER_PICKER_EMPTY_GUILD_UPSELL_NO_PREMIUM_SUBSCRIPTIONS_CTA
      })]
    }) : (0, l.jsxs)("div", {
      className: s(_.upsell, t),
      children: [(0, l.jsx)(g.default, {
        className: _.icon,
        width: 20,
        height: 20
      }), (0, l.jsx)(o.Text, {
        color: "interactive-normal",
        className: _.body,
        variant: "text-sm/normal",
        children: I.default.Messages.STICKER_PICKER_EMPTY_GUILD_UPSELL_NO_STICKERS_DESCRIPTION
      }), (0, l.jsx)(o.Button, {
        look: o.Button.Looks.LINK,
        color: o.Button.Colors.LINK,
        onClick: () => {
          (0, f.closeExpressionPicker)(), m.default.open(n, T.GuildSettingsSections.STICKERS, N)
        },
        children: I.default.Messages.STICKER_PICKER_EMPTY_GUILD_UPSELL_NO_STICKERS_CTA
      })]
    }) : null
  }