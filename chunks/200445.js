"use strict";
l.r(t), l.d(t, {
  default: function() {
    return N
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
  m = l("301822"),
  S = l("626135"),
  E = l("981631"),
  _ = l("689938"),
  h = l("492626");
let C = async () => {
  let {
    default: e
  } = await l.e("21812").then(l.t.bind(l, "741855", 19));
  return e
};

function N(e) {
  let {
    selectedGuildId: t,
    selectedChannelId: l,
    glow: s,
    playIntroTransition: N,
    onUnlocked: g
  } = e, [p, A] = n.useState(!1), x = (0, u.useStateFromStores)([d.default], () => d.default.useReducedMotion), {
    hqStreamingState: I
  } = (0, c.usePerksDemo)(r.EntitlementFeatureNames.STREAM_HIGH_QUALITY), R = n.useCallback(() => {
    (0, f.hqStreamingUnlockAnimationPlayed)(!0), g()
  }, [g]);
  return n.useEffect(() => {
    if (I.hqStreamingUnlockAnimationPlayed) return;
    let e = setTimeout(() => {
      A(!0)
    }, 1150);
    return () => {
      clearTimeout(e), A(!1)
    }
  }, [R, I, x]), n.useEffect(() => {
    if (I.hqStreamingUnlockAnimationPlayed) return;
    if (x) {
      R();
      return
    }
    let e = setTimeout(() => {
      R()
    }, 250);
    return () => {
      clearTimeout(e)
    }
  }, [g, R, , I, x]), n.useEffect(() => {
    S.default.track(E.AnalyticEvents.PERK_DEMO_OFFER_VIEWED, {
      guild_id: t,
      channel_id: l,
      perk_type: r.EntitlementFeatureNames.STREAM_HIGH_QUALITY
    })
  }, []), (0, a.jsx)("div", {
    className: i()(h.container, {
      [h.gradientGlow]: s
    }),
    children: (0, a.jsxs)("div", {
      className: h.content,
      children: [(0, a.jsx)(m.default, {
        importData: C,
        shouldAnimate: !x,
        pauseAtFrame: 90,
        className: i()(h.animation, {
          [h.animationEndState]: p || !N || x
        }),
        loop: !1
      }), (0, a.jsx)("div", {
        className: h.message,
        children: (0, a.jsx)(o.Text, {
          variant: "text-sm/medium",
          children: _.default.Messages.GO_LIVE_MODAL_PERK_DEMO_HD_STREAMING_INITIAL_UPSELL
        })
      })]
    })
  })
}