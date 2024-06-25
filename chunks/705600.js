"use strict";
n.d(t, {
  Z: function() {
    return M
  }
});
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(442837),
  l = n(692547),
  u = n(780384),
  _ = n(481060),
  c = n(353093),
  d = n(979264),
  E = n(284363),
  I = n(854218),
  T = n(623624),
  h = n(210887),
  f = n(271383),
  S = n(594174),
  A = n(267642),
  N = n(797717),
  m = n(672752),
  O = n(665786),
  p = n(697725),
  R = n(981631),
  g = n(689938),
  C = n(325026);
let v = {
  [E.Q.STAFF]: {
    IconComponent: _.StaffBadgeIcon,
    foregroundDarkColor: l.Z.unsafe_rawColors.WHITE_400.css,
    foregroundLightColor: l.Z.unsafe_rawColors.WHITE_400.css,
    backgroundDarkColor: l.Z.unsafe_rawColors.GREEN_360.css,
    backgroundLightColor: l.Z.unsafe_rawColors.GREEN_360.css
  },
  [E.Q.VERIFIED_AND_PARTNERED]: {
    IconComponent: _.CheckmarkSmallIcon,
    foregroundDarkColor: l.Z.unsafe_rawColors.WHITE_400.css,
    foregroundLightColor: l.Z.unsafe_rawColors.WHITE_400.css,
    backgroundDarkColor: l.Z.unsafe_rawColors.GREEN_360.css,
    backgroundLightColor: l.Z.unsafe_rawColors.GREEN_360.css
  },
  [E.Q.VERIFIED]: {
    IconComponent: _.CheckmarkSmallIcon,
    foregroundDarkColor: l.Z.unsafe_rawColors.WHITE_400.css,
    foregroundLightColor: l.Z.unsafe_rawColors.WHITE_400.css,
    backgroundDarkColor: l.Z.unsafe_rawColors.GREEN_360.css,
    backgroundLightColor: l.Z.unsafe_rawColors.GREEN_360.css
  },
  [E.Q.PARTNERED]: {
    IconComponent: (0, _.makeIconCompat)(O.Z),
    foregroundDarkColor: l.Z.unsafe_rawColors.WHITE_400.css,
    foregroundLightColor: l.Z.unsafe_rawColors.WHITE_400.css,
    backgroundDarkColor: l.Z.unsafe_rawColors.BRAND_500.css,
    backgroundLightColor: l.Z.unsafe_rawColors.BRAND_500.css
  },
  [E.Q.COMMUNITY]: {
    IconComponent: _.HomeIcon,
    foregroundDarkColor: l.Z.unsafe_rawColors.PRIMARY_500.css,
    foregroundLightColor: l.Z.unsafe_rawColors.WHITE_400.css,
    backgroundDarkColor: l.Z.unsafe_rawColors.WHITE_400.css,
    backgroundLightColor: l.Z.unsafe_rawColors.PRIMARY_500.css,
    premiumBackgroundColor: m.JX.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
    premiumForegroundColor: l.Z.unsafe_rawColors.WHITE_400.css
  },
  [E.Q.DISCOVERABLE]: {
    IconComponent: _.GlobeEarthIcon,
    foregroundDarkColor: l.Z.unsafe_rawColors.PRIMARY_500.css,
    foregroundLightColor: l.Z.unsafe_rawColors.WHITE_400.css,
    backgroundDarkColor: l.Z.unsafe_rawColors.WHITE_400.css,
    backgroundLightColor: l.Z.unsafe_rawColors.PRIMARY_500.css,
    premiumBackgroundColor: m.JX.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
    premiumForegroundColor: l.Z.unsafe_rawColors.WHITE_400.css
  },
  [E.Q.CLAN]: {},
  [E.Q.NONE]: {}
};

function L(e) {
  let {
    guildTraits: t
  } = e;
  return (0, i.jsxs)("div", {
    className: C.tooltipPremiumFooterContainer,
    children: [(0, i.jsxs)("div", {
      className: o()(C.tooltipPremiumFooterSegment, C.tooltipPremiumFooterTierSegment),
      children: [(0, i.jsx)(p.Z, {
        width: 18,
        height: 18,
        className: C.gemIcon
      }), (0, i.jsx)(_.Text, {
        variant: "text-xs/semibold",
        color: "always-white",
        children: A.nW(t.premiumTier)
      })]
    }), (0, i.jsx)("div", {
      className: o()(C.tooltipPremiumFooterSegment),
      children: (0, i.jsx)(_.Text, {
        variant: "text-xs/semibold",
        color: "always-white",
        children: g.Z.Messages.SERVER_BADGE_PREMIUM_FOOTER_BOOST_COUNT.format({
          count: t.premiumSubscriberCount
        })
      })
    })]
  })
}

function D(e) {
  let {
    badgeType: t,
    guildTraits: n
  } = e, {
    tooltipTitle: r,
    tooltipSubtitle: s,
    tooltipDescription: o
  } = function(e, t) {
    let n = t === I.PZ.PUBLIC ? g.Z.Messages.SERVER_BADGE_DESCRIPTION_ANYONE_CAN_JOIN : g.Z.Messages.SERVER_BADGE_DESCRIPTION_INVITE_ONLY;
    switch (e) {
      case E.Q.STAFF:
        return {
          tooltipTitle: g.Z.Messages.INTERNAL_EMPLOYEE_ONLY, tooltipSubtitle: g.Z.Messages.INTERNAL_EMPLOYEE_ONLY, tooltipDescription: g.Z.Messages.INTERNAL_EMPLOYEE_ONLY
        };
      case E.Q.VERIFIED:
        return {
          tooltipTitle: g.Z.Messages.SERVER_BADGE_TITLE_COMMUNITY, tooltipSubtitle: g.Z.Messages.GUILD_VERIFIED, tooltipDescription: n
        };
      case E.Q.PARTNERED:
        return {
          tooltipTitle: g.Z.Messages.SERVER_BADGE_TITLE_COMMUNITY, tooltipSubtitle: g.Z.Messages.GUILD_PARTNERED, tooltipDescription: n
        };
      case E.Q.VERIFIED_AND_PARTNERED:
        return {
          tooltipTitle: g.Z.Messages.SERVER_BADGE_TITLE_COMMUNITY, tooltipSubtitle: g.Z.Messages.GUILD_VERIFIED_AND_PARTNERED, tooltipDescription: n
        };
      case E.Q.COMMUNITY:
        return {
          tooltipTitle: g.Z.Messages.SERVER_BADGE_TITLE_COMMUNITY, tooltipDescription: g.Z.Messages.SERVER_BADGE_DESCRIPTION_INVITE_ONLY
        };
      case E.Q.DISCOVERABLE:
        return {
          tooltipTitle: g.Z.Messages.SERVER_BADGE_TITLE_COMMUNITY, tooltipDescription: g.Z.Messages.SERVER_BADGE_DESCRIPTION_ANYONE_CAN_JOIN
        };
      case E.Q.CLAN:
        return {
          tooltipTitle: g.Z.Messages.SERVER_BADGE_TITLE_CLAN, tooltipDescription: g.Z.Messages.SERVER_BADGE_DESCRIPTION_APPLICATION_REQUIRED
        };
      default:
        return {
          tooltipTitle: g.Z.Messages.SERVER_BADGE_TITLE_UNKNOWN
        }
    }
  }(t, n.visibility);
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)("div", {
      className: C.tooltipBodyContainer,
      children: [(0, i.jsx)(_.Text, {
        color: "interactive-active",
        variant: "text-xs/bold",
        children: r
      }), null != s ? (0, i.jsx)(_.Text, {
        color: "text-muted",
        variant: "text-xs/medium",
        children: s
      }) : null, null != o ? (0, i.jsx)(_.Text, {
        color: "text-muted",
        variant: "text-xs/medium",
        children: o
      }) : null]
    }), n.premium ? (0, i.jsx)(L, {
      guildTraits: n
    }) : null]
  })
}

function M(e) {
  let t, n, {
      guild: s,
      tooltipColor: l = _.Tooltip.Colors.BRAND,
      tooltipPosition: A,
      className: m,
      flowerStarClassName: O,
      iconClassName: p,
      badgeStrokeColor: g,
      badgeColor: L,
      size: M = 16,
      disableBoostClick: P,
      "aria-label": y = !1
    } = e,
    U = (0, a.e7)([S.default, f.ZP], () => {
      let e = S.default.getCurrentUser();
      return f.ZP.isMember(null == s ? void 0 : s.id, null == e ? void 0 : e.id)
    }),
    b = (0, a.e7)([h.Z], () => h.Z.theme),
    G = (0, I.XX)(s),
    w = (0, E.i)(G),
    x = r.useCallback(e => {
      G.premium && U && !P && (e.stopPropagation(), e.preventDefault(), (0, T.f)({
        guildId: s.id,
        location: {
          section: R.jXE.GUILD_HEADER,
          object: R.qAy.BOOST_GEM_ICON
        }
      }))
    }, [G.premium, U, P, s.id]);
  if (w === E.Q.NONE) return null;
  if (w === E.Q.CLAN) {
    var B;
    let e = (0, c.ky)(s.id, null === (B = s.clan) || void 0 === B ? void 0 : B.badge, M);
    return (0, i.jsx)(_.Tooltip, {
      color: l,
      position: A,
      "aria-label": y,
      text: (0, i.jsx)(D, {
        badgeType: w,
        guildTraits: G
      }),
      tooltipContentClassName: C.tooltipRemovePadding,
      children: t => (0, i.jsx)(_.Clickable, {
        ...t,
        onClick: x,
        className: o()(C.clanBadgeContainer, m),
        children: (0, i.jsx)(d.KQ, {
          src: e,
          size: M
        })
      })
    })
  }
  let {
    IconComponent: k,
    backgroundDarkColor: V,
    backgroundLightColor: Z,
    foregroundDarkColor: H,
    foregroundLightColor: F,
    premiumBackgroundColor: Y,
    premiumForegroundColor: j
  } = v[w];
  if (null == k) return null;
  G.premium && (t = j, n = Y);
  let W = (0, u.wj)(b) ? H : F,
    K = (0, u.wj)(b) ? V : Z;
  return t = null != t ? t : W, n = null != n ? n : K, (0, i.jsx)(_.Tooltip, {
    color: l,
    position: A,
    "aria-label": y,
    text: (0, i.jsx)(D, {
      badgeType: w,
      guildTraits: G
    }),
    tooltipContentClassName: C.tooltipRemovePadding,
    children: e => (0, i.jsx)(_.Clickable, {
      onClick: x,
      children: (0, i.jsx)(N.Z, {
        ...e,
        className: m,
        flowerStarClassName: O,
        color: null != n ? n : L,
        stroke: g,
        size: M,
        children: (0, i.jsx)(k, {
          className: p,
          color: null != t ? t : "currentColor"
        })
      })
    })
  })
}