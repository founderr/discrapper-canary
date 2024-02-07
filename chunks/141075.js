"use strict";
s.r(t), s.d(t, {
  default: function() {
    return I
  }
}), s("222007");
var i = s("37983"),
  r = s("884691"),
  a = s("907002"),
  l = s("446674"),
  o = s("206230"),
  n = s("427459"),
  u = s("651971"),
  d = s("903921"),
  c = s("49111"),
  E = s("782340"),
  _ = s("764878");
let T = [c.BoostedGuildTiers.NONE, c.BoostedGuildTiers.TIER_1, c.BoostedGuildTiers.TIER_2, c.BoostedGuildTiers.TIER_3];

function I(e) {
  let {
    guild: t
  } = e, s = (0, l.useStateFromStores)([o.default], () => o.default.useReducedMotion), [I, f] = r.useState(!1), [N, R] = r.useState(0), g = r.useRef(null), m = Math.min(c.BoostedGuildTiers.TIER_3, t.premiumTier + 1), S = c.AppliedGuildBoostsRequiredForBoostedGuildTier[t.premiumTier], M = c.AppliedGuildBoostsRequiredForBoostedGuildTier[m], h = (t.premiumSubscriberCount - S) / (M - S), G = d.TierMarkerPositions[t.premiumTier], p = d.TierMarkerPositions[m], x = t.premiumTier === c.BoostedGuildTiers.TIER_3, v = I || s, {
    progressBarFillWidthFactor: A,
    isProgressBarAnimationComplete: B,
    setShouldFireConfetti: C,
    shouldFireConfetti: O,
    tierMarkerAnimationPosition: P
  } = function(e) {
    let {
      fillFactor: t,
      guildBoostCount: s,
      premiumTier: i,
      isRevealed: l,
      useReducedMotion: o
    } = e, [n, u] = r.useState(o ? i : -1), [E, _] = r.useState(0 === s), [T, I] = r.useState(!1), f = r.useRef(!0), {
      widthFactor: N
    } = (0, a.useSpring)({
      from: {
        widthFactor: 0
      },
      to: {
        widthFactor: l ? t : 0
      },
      config: {
        tension: 15,
        friction: 7,
        clamp: !0
      },
      immediate: o,
      onChange: function(e) {
        let {
          widthFactor: t
        } = e;
        for (let [e, s] of Object.entries(d.TierMarkerPositions).reverse())
          if (t >= s - .02727272727272727) {
            u(Number(e));
            break
          }
      },
      onStart: () => {
        _(!1)
      },
      onRest: () => {
        _(!0), i === c.BoostedGuildTiers.TIER_3 && (I(!0), window.setTimeout(() => {
          f.current && I(!1)
        }, 200))
      }
    });
    return r.useEffect(() => () => {
      f.current = !1
    }, []), {
      isProgressBarAnimationComplete: E,
      progressBarFillWidthFactor: N,
      setShouldFireConfetti: I,
      shouldFireConfetti: T,
      tierMarkerAnimationPosition: n
    }
  }({
    fillFactor: x ? 1 : h * (p - G) + G,
    isRevealed: v,
    useReducedMotion: s,
    premiumTier: t.premiumTier,
    guildBoostCount: t.premiumSubscriberCount
  });
  return r.useEffect(() => {
    let e = window.setTimeout(() => {
      f(!0)
    }, 250);
    return () => {
      window.clearTimeout(e)
    }
  }, []), (0, i.jsxs)("div", {
    className: _.progressBar,
    role: "progressbar",
    "aria-valuenow": t.premiumSubscriberCount,
    "aria-valuetext": t.premiumTier === c.BoostedGuildTiers.NONE ? E.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PROGRESS_BAR_SCREEN_READER_VALUE.format({
      numSubscriptionsApplied: t.premiumSubscriberCount
    }) : E.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PROGRESS_BAR_SCREEN_READER_VALUE_TIER_UNLOCKED.format({
      numSubscriptionsApplied: t.premiumSubscriberCount,
      tierName: (0, n.getTierName)(t.premiumTier, {
        useLevels: !1
      })
    }),
    children: [(0, i.jsxs)("div", {
      className: _.progressBarScrubber,
      children: [(0, i.jsx)(a.animated.div, {
        className: _.progressBarFill,
        style: {
          width: A.to({
            range: [0, 1],
            output: [0, 100]
          }).to(e => "".concat(e, "%"))
        }
      }), (0, i.jsx)("div", {
        className: _.progressBarTrack
      })]
    }), T.map(e => (0, i.jsx)(d.default, {
      confettiTriggerRef: g,
      guild: t,
      isProgressBarAnimationComplete: B,
      setConfettiCount: R,
      setShouldFireConfetti: C,
      tier: e,
      tierMarkerAnimationPosition: P,
      children: (0, n.getTierName)(e)
    }, e)), (0, i.jsx)(u.default, {
      confettiCount: N,
      confettiTriggerRef: g,
      isFiring: O
    })]
  })
}