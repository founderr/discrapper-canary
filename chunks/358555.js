"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
});
var r = n("735250");
n("470079");
var i = n("120356"),
  l = n.n(i),
  s = n("442837"),
  o = n("481060"),
  u = n("666188"),
  a = n("623624"),
  c = n("124790"),
  d = n("271383"),
  f = n("594174"),
  S = n("940627"),
  g = n("705600"),
  E = n("267642"),
  h = n("981631"),
  _ = n("689938"),
  p = n("575245");

function C(e) {
  let {
    guild: t,
    isBannerVisible: n,
    disableBoostClick: i
  } = e, l = (0, s.useStateFromStores)([f.default, d.default], () => {
    let e = f.default.getCurrentUser();
    return d.default.isMember(t.id, null == e ? void 0 : e.id)
  }), {
    premiumTier: u,
    premiumSubscriberCount: S
  } = t;
  if (0 === S && u === h.BoostedGuildTiers.NONE) return null;
  let g = e => {
      e.stopPropagation(), e.preventDefault(), l && !i && (0, a.openGuildBoostingMarketingModal)({
        guildId: t.id,
        location: {
          section: h.AnalyticsSections.GUILD_HEADER,
          object: h.AnalyticsObjects.BOOST_GEM_ICON
        }
      })
    },
    C = u === h.BoostedGuildTiers.NONE ? _.default.Messages.PREMIUM_GUILD_HEADER_BADGE_NO_TIER : E.getTierName(u),
    I = (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("div", {
        className: p.tierTooltipTitle,
        children: C
      }), (0, r.jsx)("div", {
        children: _.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_SUBSCRIBER_COUNT_TOOLTIP.format({
          subscriberCount: S
        })
      })]
    });
  return (0, r.jsx)("div", {
    className: p.guildIconContainer,
    children: (0, r.jsx)(o.Tooltip, {
      text: I,
      position: "bottom",
      "aria-label": null != C ? C : "",
      children: e => (0, r.jsx)(o.Clickable, {
        ...e,
        className: p.__invalid_premiumGuildIcon,
        onClick: g,
        children: (0, r.jsx)(c.default, {
          premiumTier: u,
          iconBackgroundClassName: n ? p.boostedGuildTierIconBackgroundWithVisibleBanner : null,
          iconClassName: n && u !== h.BoostedGuildTiers.TIER_3 ? p.boostedGuildTierMutedIconWithVisibleBanner : null
        })
      })
    })
  })
}

function I(e) {
  let {
    guild: t,
    disableColor: n,
    disableBoostClick: i
  } = e;
  return (0, u.default)(t) ? (0, r.jsx)("div", {
    className: p.guildIconV2Container,
    children: (0, r.jsx)(g.default, {
      guild: t,
      tooltipPosition: "bottom",
      tooltipColor: o.Tooltip.Colors.PRIMARY,
      className: l()(p.guildBadge, {
        [p.disableColor]: n
      }),
      disableBoostClick: i
    })
  }) : (0, r.jsx)("div", {
    className: p.guildIconContainer,
    children: (0, r.jsx)(S.default, {
      guild: t,
      tooltipPosition: "bottom",
      tooltipColor: o.Tooltip.Colors.PRIMARY,
      className: l()(p.guildBadge, {
        [p.disableColor]: n
      })
    })
  })
}

function m(e) {
  let {
    guild: t,
    isBannerVisible: n,
    disableBoostClick: i
  } = e;
  return (0, u.default)(t) ? (0, r.jsx)(I, {
    guild: t,
    disableColor: !1,
    disableBoostClick: i
  }) : t.hasFeature(h.GuildFeatures.VERIFIED) || t.hasFeature(h.GuildFeatures.PARTNERED) ? (0, r.jsx)(I, {
    guild: t,
    disableColor: !n
  }) : (0, r.jsx)(C, {
    guild: t,
    isBannerVisible: n,
    disableBoostClick: i
  })
}