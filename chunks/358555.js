"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
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
  h = n("267642"),
  E = n("981631"),
  p = n("689938"),
  _ = n("612113");

function m(e) {
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
  if (0 === S && u === E.BoostedGuildTiers.NONE) return null;
  let g = e => {
      e.stopPropagation(), e.preventDefault(), l && !i && (0, a.openGuildBoostingMarketingModal)({
        guildId: t.id,
        location: {
          section: E.AnalyticsSections.GUILD_HEADER,
          object: E.AnalyticsObjects.BOOST_GEM_ICON
        }
      })
    },
    m = u === E.BoostedGuildTiers.NONE ? p.default.Messages.PREMIUM_GUILD_HEADER_BADGE_NO_TIER : h.getTierName(u),
    C = (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("div", {
        className: _.tierTooltipTitle,
        children: m
      }), (0, r.jsx)("div", {
        children: p.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_SUBSCRIBER_COUNT_TOOLTIP.format({
          subscriberCount: S
        })
      })]
    });
  return (0, r.jsx)("div", {
    className: _.guildIconContainer,
    children: (0, r.jsx)(o.Tooltip, {
      text: C,
      position: "bottom",
      "aria-label": null != m ? m : "",
      children: e => (0, r.jsx)(o.Clickable, {
        ...e,
        className: _.__invalid_premiumGuildIcon,
        onClick: g,
        children: (0, r.jsx)(c.default, {
          premiumTier: u,
          iconBackgroundClassName: n ? _.boostedGuildTierIconBackgroundWithVisibleBanner : null,
          iconClassName: n && u !== E.BoostedGuildTiers.TIER_3 ? _.boostedGuildTierMutedIconWithVisibleBanner : null
        })
      })
    })
  })
}

function C(e) {
  let {
    guild: t,
    disableColor: n,
    disableBoostClick: i
  } = e;
  return (0, u.default)(t) ? (0, r.jsx)("div", {
    className: _.guildIconV2Container,
    children: (0, r.jsx)(g.default, {
      guild: t,
      tooltipPosition: "bottom",
      tooltipColor: o.Tooltip.Colors.PRIMARY,
      className: l()(_.guildBadge, {
        [_.disableColor]: n
      }),
      disableBoostClick: i
    })
  }) : (0, r.jsx)("div", {
    className: _.guildIconContainer,
    children: (0, r.jsx)(S.default, {
      guild: t,
      tooltipPosition: "bottom",
      tooltipColor: o.Tooltip.Colors.PRIMARY,
      className: l()(_.guildBadge, {
        [_.disableColor]: n
      })
    })
  })
}

function I(e) {
  let {
    guild: t,
    isBannerVisible: n,
    disableBoostClick: i
  } = e;
  return (0, u.default)(t) ? (0, r.jsx)(C, {
    guild: t,
    disableColor: !1,
    disableBoostClick: i
  }) : t.hasFeature(E.GuildFeatures.VERIFIED) || t.hasFeature(E.GuildFeatures.PARTNERED) ? (0, r.jsx)(C, {
    guild: t,
    disableColor: !n
  }) : (0, r.jsx)(m, {
    guild: t,
    isBannerVisible: n,
    disableBoostClick: i
  })
}