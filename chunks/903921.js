"use strict";
s.r(t), s.d(t, {
  TierMarkerPositions: function() {
    return g
  },
  default: function() {
    return m
  }
}), s("70102");
var i = s("37983");
s("884691");
var r = s("414456"),
  a = s.n(r),
  l = s("907002"),
  o = s("65597"),
  n = s("77078"),
  u = s("206230"),
  d = s("685665"),
  c = s("206453"),
  E = s("36694"),
  _ = s("427459"),
  T = s("954296"),
  I = s("651971"),
  f = s("49111"),
  N = s("782340"),
  R = s("633640");
let g = {
  [f.BoostedGuildTiers.NONE]: 0,
  [f.BoostedGuildTiers.TIER_1]: 1 / 3,
  [f.BoostedGuildTiers.TIER_2]: 2 / 3,
  [f.BoostedGuildTiers.TIER_3]: 1
};
var m = function(e) {
  let {
    children: t,
    confettiTriggerRef: s,
    guild: r,
    isProgressBarAnimationComplete: m,
    setConfettiCount: S,
    setShouldFireConfetti: M,
    tier: h,
    tierMarkerAnimationPosition: G
  } = e, p = (0, o.default)([u.default], () => u.default.useReducedMotion), {
    analyticsLocations: x
  } = (0, d.default)(), v = f.AppliedGuildBoostsRequiredForBoostedGuildTier[h], A = v - r.premiumSubscriberCount, B = h <= G || m, C = B && h <= r.premiumTier, O = B && h < r.premiumTier, P = B && h === r.premiumTier, {
    scaleFactor: L
  } = (0, l.useSpring)({
    from: {
      scaleFactor: 0
    },
    to: {
      scaleFactor: G >= h || m && G + 1 === h || m && -1 === G && h === f.BoostedGuildTiers.NONE ? 1 : 0
    },
    config: {
      tension: 360,
      friction: 12
    },
    immediate: p
  }), j = (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(l.animated.div, {
      className: R.progressBarMarkerIndicator,
      style: {
        transform: L.to(e => "translate(-50%, -50%) scale(".concat(e, ")"))
      }
    }), h !== f.BoostedGuildTiers.NONE && (0, i.jsx)(c.default, {
      tier: h,
      className: R.boostedTierIcon
    })]
  }), D = C ? "div" : n.Clickable, w = C ? {} : {
    onClick: function() {
      B && (0, T.addAppliedGuildBoosts)({
        analyticsLocations: x,
        analyticsLocation: {
          page: f.AnalyticsPages.PREMIUM_GUILD_USER_MODAL,
          section: f.AnalyticsSections.PREMIUM_GUILD_USER_MODAL_PROGRESS_BAR,
          object: f.AnalyticsObjects.SUBSCRIBE_TO_TIER_BUTTON,
          objectType: function(e) {
            switch (e) {
              case f.BoostedGuildTiers.TIER_3:
                return f.AnalyticsObjectTypes.TIER_3;
              case f.BoostedGuildTiers.TIER_2:
                return f.AnalyticsObjectTypes.TIER_2;
              case f.BoostedGuildTiers.TIER_1:
                return f.AnalyticsObjectTypes.TIER_1;
              default:
                throw Error("Unsupported Boosting tier: ".concat(e))
            }
          }(h)
        },
        numberOfBoostsToAdd: A,
        guild: r
      })
    }
  };
  return (0, i.jsx)(n.Tooltip, {
    text: C ? N.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PROGRESS_BAR_TOOLTIP_TIER_UNLOCKED.format({
      tierName: (0, _.getTierName)(h, {
        useLevels: !1
      })
    }) : N.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PROGRESS_BAR_TOOLTIP_REMAINING_FOR_TIER.format({
      numBoostsRequired: A,
      tierName: (0, _.getTierName)(h, {
        useLevels: !1
      })
    }),
    shouldShow: h !== f.BoostedGuildTiers.NONE,
    children: e => (0, i.jsxs)(D, {
      className: a(R.progressBarMarker, {
        [R.progressBarMarkerUnlocked]: C,
        [R.progressBarMarkerLocked]: !C,
        [R.progressBarMarkerLower]: O,
        [R.progressBarMarkerCurrent]: P
      }),
      style: {
        left: "".concat(100 * g[h], "%")
      },
      ...e,
      ...w,
      children: [!C && (0, i.jsx)("div", {
        className: R.boostedTierIconBackground
      }), C && h === f.BoostedGuildTiers.TIER_3 ? (0, i.jsx)(I.ProgressBarConfettiTrigger, {
        confettiTriggerRef: s,
        setConfettiCount: S,
        setShouldFireConfetti: M,
        children: j
      }) : j, (0, i.jsxs)(n.Text, {
        className: R.progressBarMarkerLabel,
        variant: "text-md/normal",
        children: [C && h !== f.BoostedGuildTiers.NONE && (0, i.jsx)(E.default, {
          className: R.progressBarMarkerUnlockedIcon
        }), t]
      })]
    })
  })
}