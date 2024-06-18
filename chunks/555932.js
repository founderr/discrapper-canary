"use strict";
n.d(t, {
  Z: function() {
    return T
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(920906),
  o = n(442837),
  a = n(607070),
  l = n(267642),
  u = n(198466),
  _ = n(436444),
  c = n(981631),
  d = n(689938),
  E = n(291112);
let I = [c.Eu4.NONE, c.Eu4.TIER_1, c.Eu4.TIER_2, c.Eu4.TIER_3];

function T(e) {
  let {
    guild: t
  } = e, n = (0, o.e7)([a.Z], () => a.Z.useReducedMotion), [T, h] = r.useState(!1), [S, f] = r.useState(0), N = r.useRef(null), A = Math.min(c.Eu4.TIER_3, t.premiumTier + 1), m = c.oCV[t.premiumTier], O = c.oCV[A], R = (t.premiumSubscriberCount - m) / (O - m), p = _.P[t.premiumTier], g = _.P[A], C = t.premiumTier === c.Eu4.TIER_3, {
    progressBarFillWidthFactor: v,
    isProgressBarAnimationComplete: L,
    setShouldFireConfetti: D,
    shouldFireConfetti: M,
    tierMarkerAnimationPosition: P
  } = function(e) {
    let {
      fillFactor: t,
      guildBoostCount: n,
      premiumTier: i,
      isRevealed: o,
      useReducedMotion: a
    } = e, [l, u] = r.useState(a ? i : -1), [d, E] = r.useState(0 === n), [I, T] = r.useState(!1), h = r.useRef(!0), {
      widthFactor: S
    } = (0, s.useSpring)({
      from: {
        widthFactor: 0
      },
      to: {
        widthFactor: o ? t : 0
      },
      config: {
        tension: 15,
        friction: 7,
        clamp: !0
      },
      immediate: a,
      onChange: function(e) {
        let {
          widthFactor: t
        } = e;
        for (let [e, n] of Object.entries(_.P).reverse())
          if (t >= n - .02727272727272727) {
            u(Number(e));
            break
          }
      },
      onStart: () => {
        E(!1)
      },
      onRest: () => {
        E(!0), i === c.Eu4.TIER_3 && (T(!0), window.setTimeout(() => {
          h.current && T(!1)
        }, 200))
      }
    });
    return r.useEffect(() => () => {
      h.current = !1
    }, []), {
      isProgressBarAnimationComplete: d,
      progressBarFillWidthFactor: S,
      setShouldFireConfetti: T,
      shouldFireConfetti: I,
      tierMarkerAnimationPosition: l
    }
  }({
    fillFactor: C ? 1 : R * (g - p) + p,
    isRevealed: T || n,
    useReducedMotion: n,
    premiumTier: t.premiumTier,
    guildBoostCount: t.premiumSubscriberCount
  });
  return r.useEffect(() => {
    let e = window.setTimeout(() => {
      h(!0)
    }, 250);
    return () => {
      window.clearTimeout(e)
    }
  }, []), (0, i.jsxs)("div", {
    className: E.progressBar,
    role: "progressbar",
    "aria-valuenow": t.premiumSubscriberCount,
    "aria-valuetext": t.premiumTier === c.Eu4.NONE ? d.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PROGRESS_BAR_SCREEN_READER_VALUE.format({
      numSubscriptionsApplied: t.premiumSubscriberCount
    }) : d.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PROGRESS_BAR_SCREEN_READER_VALUE_TIER_UNLOCKED.format({
      numSubscriptionsApplied: t.premiumSubscriberCount,
      tierName: (0, l.nW)(t.premiumTier, {
        useLevels: !1
      })
    }),
    children: [(0, i.jsxs)("div", {
      className: E.progressBarScrubber,
      children: [(0, i.jsx)(s.animated.div, {
        className: E.progressBarFill,
        style: {
          width: v.to({
            range: [0, 1],
            output: [0, 100]
          }).to(e => "".concat(e, "%"))
        }
      }), (0, i.jsx)("div", {
        className: E.progressBarTrack
      })]
    }), I.map(e => (0, i.jsx)(_.Z, {
      confettiTriggerRef: N,
      guild: t,
      isProgressBarAnimationComplete: L,
      setConfettiCount: f,
      setShouldFireConfetti: D,
      tier: e,
      tierMarkerAnimationPosition: P,
      children: (0, l.nW)(e)
    }, e)), (0, i.jsx)(u.Z, {
      confettiCount: S,
      confettiTriggerRef: N,
      isFiring: M
    })]
  })
}