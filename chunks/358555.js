"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
});
var i = n("735250");
n("470079");
var r = n("803997"),
  l = n.n(r),
  s = n("442837"),
  u = n("481060"),
  o = n("666188"),
  a = n("623624"),
  d = n("124790"),
  c = n("271383"),
  f = n("594174"),
  S = n("940627"),
  E = n("705600"),
  _ = n("267642"),
  g = n("981631"),
  h = n("689938"),
  p = n("106325");

function C(e) {
  let {
    guild: t,
    isBannerVisible: n,
    disableBoostClick: r
  } = e, l = (0, s.useStateFromStores)([f.default, c.default], () => {
    let e = f.default.getCurrentUser();
    return c.default.isMember(t.id, null == e ? void 0 : e.id)
  }), {
    premiumTier: o,
    premiumSubscriberCount: S
  } = t;
  if (0 === S && o === g.BoostedGuildTiers.NONE) return null;
  let E = e => {
      e.stopPropagation(), e.preventDefault(), l && !r && (0, a.openGuildBoostingMarketingModal)({
        guildId: t.id,
        location: {
          section: g.AnalyticsSections.GUILD_HEADER,
          object: g.AnalyticsObjects.BOOST_GEM_ICON
        }
      })
    },
    C = o === g.BoostedGuildTiers.NONE ? h.default.Messages.PREMIUM_GUILD_HEADER_BADGE_NO_TIER : _.getTierName(o),
    I = (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)("div", {
        className: p.tierTooltipTitle,
        children: C
      }), (0, i.jsx)("div", {
        children: h.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_SUBSCRIBER_COUNT_TOOLTIP.format({
          subscriberCount: S
        })
      })]
    });
  return (0, i.jsx)("div", {
    className: p.guildIconContainer,
    children: (0, i.jsx)(u.Tooltip, {
      text: I,
      position: "bottom",
      "aria-label": null != C ? C : "",
      children: e => (0, i.jsx)(u.Clickable, {
        ...e,
        className: p.__invalid_premiumGuildIcon,
        onClick: E,
        children: (0, i.jsx)(d.default, {
          premiumTier: o,
          iconBackgroundClassName: n ? p.boostedGuildTierIconBackgroundWithVisibleBanner : null,
          iconClassName: n && o !== g.BoostedGuildTiers.TIER_3 ? p.boostedGuildTierMutedIconWithVisibleBanner : null
        })
      })
    })
  })
}

function I(e) {
  let {
    guild: t,
    disableColor: n,
    disableBoostClick: r
  } = e;
  return (0, o.default)(t) ? (0, i.jsx)("div", {
    className: p.guildIconV2Container,
    children: (0, i.jsx)(E.default, {
      guild: t,
      tooltipPosition: "bottom",
      tooltipColor: u.Tooltip.Colors.PRIMARY,
      className: l()(p.guildBadge, {
        [p.disableColor]: n
      }),
      disableBoostClick: r
    })
  }) : (0, i.jsx)("div", {
    className: p.guildIconContainer,
    children: (0, i.jsx)(S.default, {
      guild: t,
      tooltipPosition: "bottom",
      tooltipColor: u.Tooltip.Colors.PRIMARY,
      className: l()(p.guildBadge, {
        [p.disableColor]: n
      })
    })
  })
}

function T(e) {
  let {
    guild: t,
    isBannerVisible: n,
    disableBoostClick: r
  } = e;
  return (0, o.default)(t) ? (0, i.jsx)(I, {
    guild: t,
    disableColor: !1,
    disableBoostClick: r
  }) : t.hasFeature(g.GuildFeatures.VERIFIED) || t.hasFeature(g.GuildFeatures.PARTNERED) ? (0, i.jsx)(I, {
    guild: t,
    disableColor: !n
  }) : (0, i.jsx)(C, {
    guild: t,
    isBannerVisible: n,
    disableBoostClick: r
  })
}