"use strict";
r.r(t), r.d(t, {
  default: function() {
    return O
  }
});
var o = r("37983");
r("884691");
var a = r("414456"),
  s = r.n(a),
  l = r("446674"),
  i = r("669491"),
  n = r("819855"),
  u = r("77078"),
  d = r("614858"),
  c = r("883474"),
  f = r("95039"),
  E = r("161778"),
  C = r("26989"),
  g = r("697218"),
  _ = r("427459"),
  I = r("931138"),
  h = r("791106"),
  N = r("888978"),
  p = r("419441"),
  R = r("583698"),
  T = r("992639"),
  m = r("390864"),
  D = r("486952"),
  L = r("49111"),
  x = r("782340"),
  w = r("279801");
let M = {
  [d.BadgeCategory.STAFF]: {
    IconComponent: m.default,
    foregroundDarkColor: i.default.unsafe_rawColors.WHITE_400.css,
    foregroundLightColor: i.default.unsafe_rawColors.WHITE_400.css,
    backgroundDarkColor: i.default.unsafe_rawColors.GREEN_360.css,
    backgroundLightColor: i.default.unsafe_rawColors.GREEN_360.css
  },
  [d.BadgeCategory.VERIFIED_AND_PARTNERED]: {
    IconComponent: D.default,
    foregroundDarkColor: i.default.unsafe_rawColors.WHITE_400.css,
    foregroundLightColor: i.default.unsafe_rawColors.WHITE_400.css,
    backgroundDarkColor: i.default.unsafe_rawColors.GREEN_360.css,
    backgroundLightColor: i.default.unsafe_rawColors.GREEN_360.css
  },
  [d.BadgeCategory.VERIFIED]: {
    IconComponent: D.default,
    foregroundDarkColor: i.default.unsafe_rawColors.WHITE_400.css,
    foregroundLightColor: i.default.unsafe_rawColors.WHITE_400.css,
    backgroundDarkColor: i.default.unsafe_rawColors.GREEN_360.css,
    backgroundLightColor: i.default.unsafe_rawColors.GREEN_360.css
  },
  [d.BadgeCategory.PARTNERED]: {
    IconComponent: N.default,
    foregroundDarkColor: i.default.unsafe_rawColors.WHITE_400.css,
    foregroundLightColor: i.default.unsafe_rawColors.WHITE_400.css,
    backgroundDarkColor: i.default.unsafe_rawColors.BRAND_500.css,
    backgroundLightColor: i.default.unsafe_rawColors.BRAND_500.css
  },
  [d.BadgeCategory.COMMUNITY]: {
    IconComponent: p.default,
    foregroundDarkColor: i.default.unsafe_rawColors.PRIMARY_500.css,
    foregroundLightColor: i.default.unsafe_rawColors.WHITE_400.css,
    backgroundDarkColor: i.default.unsafe_rawColors.WHITE_400.css,
    backgroundLightColor: i.default.unsafe_rawColors.PRIMARY_500.css,
    premiumBackgroundColor: h.GradientCssUrls.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
    premiumForegroundColor: i.default.unsafe_rawColors.WHITE_400.css
  },
  [d.BadgeCategory.DISCOVERABLE]: {
    IconComponent: R.default,
    foregroundDarkColor: i.default.unsafe_rawColors.PRIMARY_500.css,
    foregroundLightColor: i.default.unsafe_rawColors.WHITE_400.css,
    backgroundDarkColor: i.default.unsafe_rawColors.WHITE_400.css,
    backgroundLightColor: i.default.unsafe_rawColors.PRIMARY_500.css,
    premiumBackgroundColor: h.GradientCssUrls.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
    premiumForegroundColor: i.default.unsafe_rawColors.WHITE_400.css
  },
  [d.BadgeCategory.NONE]: {}
};

function B(e) {
  let {
    guildTraits: t
  } = e;
  return (0, o.jsxs)("div", {
    className: w.tooltipPremiumFooterContainer,
    children: [(0, o.jsxs)("div", {
      className: s(w.tooltipPremiumFooterSegment, w.tooltipPremiumFooterTierSegment),
      children: [(0, o.jsx)(T.default, {
        width: 18,
        height: 18,
        className: w.gemIcon
      }), (0, o.jsx)(u.Text, {
        variant: "text-xs/semibold",
        color: "always-white",
        children: _.getTierName(t.premiumTier)
      })]
    }), (0, o.jsx)("div", {
      className: s(w.tooltipPremiumFooterSegment),
      children: (0, o.jsx)(u.Text, {
        variant: "text-xs/semibold",
        color: "always-white",
        children: x.default.Messages.SERVER_BADGE_PREMIUM_FOOTER_BOOST_COUNT.format({
          count: t.premiumSubscriberCount
        })
      })
    })]
  })
}

function A(e) {
  let {
    badgeType: t,
    guildTraits: r
  } = e, {
    tooltipTitle: a,
    tooltipSubtitle: s,
    tooltipDescription: l
  } = function(e, t) {
    let r = t === c.GuildVisibility.PUBLIC ? x.default.Messages.SERVER_BADGE_DESCRIPTION_ANYONE_CAN_JOIN : x.default.Messages.SERVER_BADGE_DESCRIPTION_INVITE_ONLY;
    switch (e) {
      case d.BadgeCategory.STAFF:
        return {
          tooltipTitle: x.default.Messages.INTERNAL_EMPLOYEE_ONLY, tooltipSubtitle: x.default.Messages.INTERNAL_EMPLOYEE_ONLY, tooltipDescription: x.default.Messages.INTERNAL_EMPLOYEE_ONLY
        };
      case d.BadgeCategory.VERIFIED:
        return {
          tooltipTitle: x.default.Messages.SERVER_BADGE_TITLE_COMMUNITY, tooltipSubtitle: x.default.Messages.GUILD_VERIFIED, tooltipDescription: r
        };
      case d.BadgeCategory.PARTNERED:
        return {
          tooltipTitle: x.default.Messages.SERVER_BADGE_TITLE_COMMUNITY, tooltipSubtitle: x.default.Messages.GUILD_PARTNERED, tooltipDescription: r
        };
      case d.BadgeCategory.VERIFIED_AND_PARTNERED:
        return {
          tooltipTitle: x.default.Messages.SERVER_BADGE_TITLE_COMMUNITY, tooltipSubtitle: x.default.Messages.GUILD_VERIFIED_AND_PARTNERED, tooltipDescription: r
        };
      case d.BadgeCategory.COMMUNITY:
        return {
          tooltipTitle: x.default.Messages.SERVER_BADGE_TITLE_COMMUNITY, tooltipDescription: x.default.Messages.SERVER_BADGE_DESCRIPTION_INVITE_ONLY
        };
      case d.BadgeCategory.DISCOVERABLE:
        return {
          tooltipTitle: x.default.Messages.SERVER_BADGE_TITLE_COMMUNITY, tooltipDescription: x.default.Messages.SERVER_BADGE_DESCRIPTION_ANYONE_CAN_JOIN
        };
      default:
        return {
          tooltipTitle: x.default.Messages.SERVER_BADGE_TITLE_UNKNOWN
        }
    }
  }(t, r.visibility);
  return (0, o.jsxs)(o.Fragment, {
    children: [(0, o.jsxs)("div", {
      className: w.tooltipBodyContainer,
      children: [(0, o.jsx)(u.Text, {
        color: "interactive-active",
        variant: "text-xs/bold",
        children: a
      }), null != s ? (0, o.jsx)(u.Text, {
        color: "text-muted",
        variant: "text-xs/medium",
        children: s
      }) : null, null != l ? (0, o.jsx)(u.Text, {
        color: "text-muted",
        variant: "text-xs/medium",
        children: l
      }) : null]
    }), r.premium ? (0, o.jsx)(B, {
      guildTraits: r
    }) : null]
  })
}

function O(e) {
  let t, r, {
      guild: a,
      tooltipColor: s = u.Tooltip.Colors.BRAND,
      tooltipPosition: i,
      className: _,
      flowerStarClassName: h,
      iconClassName: N,
      badgeStrokeColor: p,
      badgeColor: R,
      size: T = 16,
      disableBoostClick: m,
      "aria-label": D = !1
    } = e,
    x = (0, l.useStateFromStores)([g.default, C.default], () => {
      let e = g.default.getCurrentUser();
      return C.default.isMember(null == a ? void 0 : a.id, null == e ? void 0 : e.id)
    }),
    B = (0, l.useStateFromStores)([E.default], () => E.default.theme),
    O = (0, c.getGuildTraits)(a),
    v = (0, d.getBadgeCategory)(O);
  if (v === d.BadgeCategory.NONE) return null;
  let V = M[v],
    {
      IconComponent: S,
      backgroundDarkColor: G,
      backgroundLightColor: j,
      foregroundDarkColor: y,
      foregroundLightColor: b,
      premiumBackgroundColor: P,
      premiumForegroundColor: F
    } = V;
  if (null == S) return null;
  O.premium && (t = F, r = P);
  let k = (0, n.isThemeDark)(B) ? y : b,
    U = (0, n.isThemeDark)(B) ? G : j;
  t = null != t ? t : k, r = null != r ? r : U;
  let Y = e => {
    O.premium && x && !m && (e.stopPropagation(), e.preventDefault(), (0, f.openGuildBoostingMarketingModal)({
      guildId: a.id,
      location: {
        section: L.AnalyticsSections.GUILD_HEADER,
        object: L.AnalyticsObjects.BOOST_GEM_ICON
      }
    }))
  };
  return (0, o.jsx)(u.Tooltip, {
    color: s,
    position: i,
    "aria-label": D,
    text: (0, o.jsx)(A, {
      badgeType: v,
      guildTraits: O
    }),
    tooltipContentClassName: w.tooltipRemovePadding,
    children: e => (0, o.jsx)(u.Clickable, {
      onClick: Y,
      children: (0, o.jsx)(I.default, {
        ...e,
        className: _,
        flowerStarClassName: h,
        color: null != r ? r : R,
        stroke: p,
        size: T,
        children: (0, o.jsx)(S, {
          className: N,
          color: t
        })
      })
    })
  })
}