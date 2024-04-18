"use strict";
l.r(t), l.d(t, {
  default: function() {
    return g
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
  S = l("689938"),
  E = l("60687");
let _ = async () => {
  let {
    default: e
  } = await l.e("21812").then(l.t.bind(l, "741855", 19));
  return e
};

function g(e) {
  let {
    glow: t,
    playIntroTransition: l,
    onUnlocked: s
  } = e, [g, C] = n.useState(!1), N = (0, u.useStateFromStores)([d.default], () => d.default.useReducedMotion), {
    hqStreamingState: h
  } = (0, c.usePerksDemo)(r.EntitlementFeatureNames.STREAM_HIGH_QUALITY), A = n.useCallback(() => {
    (0, f.hqStreamingUnlockAnimationPlayed)(!0), s()
  }, [s]);
  return n.useEffect(() => {
    if (h.hqStreamingUnlockAnimationPlayed) return;
    let e = setTimeout(() => {
      C(!0)
    }, 1150);
    return () => {
      clearTimeout(e), C(!1)
    }
  }, [A, h, N]), n.useEffect(() => {
    if (h.hqStreamingUnlockAnimationPlayed) return;
    if (N) {
      A();
      return
    }
    let e = setTimeout(() => {
      A()
    }, 900);
    return () => {
      clearTimeout(e)
    }
  }, [s, A, , h, N]), (0, a.jsx)("div", {
    className: i()(E.container, {
      [E.gradientGlow]: t
    }),
    children: (0, a.jsxs)("div", {
      className: E.content,
      children: [(0, a.jsx)(m.default, {
        importData: _,
        shouldAnimate: !N,
        pauseAtFrame: 90,
        className: i()(E.animation, {
          [E.animationEndState]: g || !l || N
        }),
        loop: !1
      }), (0, a.jsx)("div", {
        className: E.message,
        children: (0, a.jsx)(o.Text, {
          variant: "text-sm/medium",
          children: S.default.Messages.GO_LIVE_MODAL_PERK_DEMO_HD_STREAMING_INITIAL_UPSELL
        })
      })]
    })
  })
}