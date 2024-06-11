"use strict";
l.r(t), l.d(t, {
  default: function() {
    return C
  }
}), l("47120");
var a = l("735250"),
  n = l("470079"),
  s = l("120356"),
  i = l.n(s),
  r = l("848246"),
  u = l("442837"),
  o = l("481060"),
  d = l("607070"),
  c = l("386542"),
  f = l("485731"),
  m = l("626135"),
  S = l("981631"),
  E = l("689938"),
  _ = l("492626");
let h = async () => {
  let {
    default: e
  } = await l.e("21812").then(l.t.bind(l, "741855", 19));
  return e
};

function C(e) {
  let {
    selectedGuildId: t,
    selectedChannelId: l,
    glow: s,
    playIntroTransition: C,
    onUnlocked: g
  } = e, [N, I] = n.useState(!1), p = (0, u.useStateFromStores)([d.default], () => d.default.useReducedMotion), {
    hqStreamingState: x
  } = (0, c.usePerksDemo)(r.EntitlementFeatureNames.STREAM_HIGH_QUALITY), A = n.useCallback(() => {
    (0, f.hqStreamingUnlockAnimationPlayed)(!0), g()
  }, [g]);
  return n.useEffect(() => {
    if (x.hqStreamingUnlockAnimationPlayed) return;
    let e = setTimeout(() => {
      I(!0)
    }, 1150);
    return () => {
      clearTimeout(e), I(!1)
    }
  }, [A, x, p]), n.useEffect(() => {
    if (x.hqStreamingUnlockAnimationPlayed) return;
    if (p) {
      A();
      return
    }
    let e = setTimeout(() => {
      A()
    }, 250);
    return () => {
      clearTimeout(e)
    }
  }, [g, A, , x, p]), n.useEffect(() => {
    m.default.track(S.AnalyticEvents.PERK_DEMO_OFFER_VIEWED, {
      guild_id: t,
      channel_id: l,
      perk_type: r.EntitlementFeatureNames.STREAM_HIGH_QUALITY
    })
  }, []), (0, a.jsx)("div", {
    className: i()(_.container, {
      [_.gradientGlow]: s
    }),
    children: (0, a.jsxs)("div", {
      className: _.content,
      children: [(0, a.jsx)(o.LottieAnimation, {
        importData: h,
        shouldAnimate: !p,
        pauseAtFrame: 90,
        className: i()(_.animation, {
          [_.animationEndState]: N || !C || p
        }),
        loop: !1
      }), (0, a.jsx)("div", {
        className: _.message,
        children: (0, a.jsx)(o.Text, {
          variant: "text-sm/medium",
          children: E.default.Messages.GO_LIVE_MODAL_PERK_DEMO_HD_STREAMING_INITIAL_UPSELL
        })
      })]
    })
  })
}