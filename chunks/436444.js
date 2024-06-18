"use strict";
n.d(t, {
  P: function() {
    return f
  }
}), n(411104);
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(920906),
  a = n(399606),
  l = n(481060),
  u = n(607070),
  _ = n(906732),
  c = n(471885),
  d = n(267642),
  E = n(879892),
  I = n(198466),
  T = n(981631),
  h = n(689938),
  S = n(197838);
let f = {
  [T.Eu4.NONE]: 0,
  [T.Eu4.TIER_1]: 1 / 3,
  [T.Eu4.TIER_2]: 2 / 3,
  [T.Eu4.TIER_3]: 1
};
t.Z = function(e) {
  let {
    children: t,
    confettiTriggerRef: n,
    guild: r,
    isProgressBarAnimationComplete: N,
    setConfettiCount: A,
    setShouldFireConfetti: m,
    tier: O,
    tierMarkerAnimationPosition: R
  } = e, p = (0, a.e7)([u.Z], () => u.Z.useReducedMotion), {
    analyticsLocations: g
  } = (0, _.ZP)(), C = T.oCV[O] - r.premiumSubscriberCount, v = O <= R || N, L = v && O <= r.premiumTier, D = v && O < r.premiumTier, M = v && O === r.premiumTier, {
    scaleFactor: P
  } = (0, o.useSpring)({
    from: {
      scaleFactor: 0
    },
    to: {
      scaleFactor: R >= O || N && R + 1 === O || N && -1 === R && O === T.Eu4.NONE ? 1 : 0
    },
    config: {
      tension: 360,
      friction: 12
    },
    immediate: p
  }), y = (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(o.animated.div, {
      className: S.progressBarMarkerIndicator,
      style: {
        transform: P.to(e => "translate(-50%, -50%) scale(".concat(e, ")"))
      }
    }), O !== T.Eu4.NONE && (0, i.jsx)(c.Z, {
      tier: O,
      className: S.boostedTierIcon
    })]
  }), U = L ? "div" : l.Clickable, b = L ? {} : {
    onClick: function() {
      v && (0, E.u)({
        analyticsLocations: g,
        analyticsLocation: {
          page: T.ZY5.PREMIUM_GUILD_USER_MODAL,
          section: T.jXE.PREMIUM_GUILD_USER_MODAL_PROGRESS_BAR,
          object: T.qAy.SUBSCRIBE_TO_TIER_BUTTON,
          objectType: function(e) {
            switch (e) {
              case T.Eu4.TIER_3:
                return T.Qqv.TIER_3;
              case T.Eu4.TIER_2:
                return T.Qqv.TIER_2;
              case T.Eu4.TIER_1:
                return T.Qqv.TIER_1;
              default:
                throw Error("Unsupported Boosting tier: ".concat(e))
            }
          }(O)
        },
        numberOfBoostsToAdd: C,
        guild: r
      })
    }
  };
  return (0, i.jsx)(l.Tooltip, {
    text: L ? h.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PROGRESS_BAR_TOOLTIP_TIER_UNLOCKED.format({
      tierName: (0, d.nW)(O, {
        useLevels: !1
      })
    }) : h.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PROGRESS_BAR_TOOLTIP_REMAINING_FOR_TIER.format({
      numBoostsRequired: C,
      tierName: (0, d.nW)(O, {
        useLevels: !1
      })
    }),
    shouldShow: O !== T.Eu4.NONE,
    children: e => (0, i.jsxs)(U, {
      className: s()(S.progressBarMarker, {
        [S.progressBarMarkerUnlocked]: L,
        [S.progressBarMarkerLocked]: !L,
        [S.progressBarMarkerLower]: D,
        [S.progressBarMarkerCurrent]: M
      }),
      style: {
        left: "".concat(100 * f[O], "%")
      },
      ...e,
      ...b,
      children: [!L && (0, i.jsx)("div", {
        className: S.boostedTierIconBackground
      }), L && O === T.Eu4.TIER_3 ? (0, i.jsx)(I.m, {
        confettiTriggerRef: n,
        setConfettiCount: A,
        setShouldFireConfetti: m,
        children: y
      }) : y, (0, i.jsxs)(l.Text, {
        className: S.progressBarMarkerLabel,
        variant: "text-md/normal",
        children: [L && O !== T.Eu4.NONE && (0, i.jsx)(l.CheckmarkLargeIcon, {
          size: "md",
          color: "currentColor",
          className: S.progressBarMarkerUnlockedIcon
        }), t]
      })]
    })
  })
}