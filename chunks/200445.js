t.d(n, {
  Z: function() {
    return C
  }
}), t(47120);
var l = t(735250),
  s = t(470079),
  a = t(120356),
  i = t.n(a),
  r = t(848246),
  o = t(442837),
  u = t(481060),
  c = t(607070),
  d = t(386542),
  m = t(485731),
  E = t(626135),
  _ = t(981631),
  S = t(689938),
  h = t(889976);
let g = async () => {
  let {
    default: e
  } = await t.e("21812").then(t.t.bind(t, 741855, 19));
  return e
};

function C(e) {
  let {
    selectedGuildId: n,
    selectedChannelId: t,
    glow: a,
    playIntroTransition: C,
    onUnlocked: I
  } = e, [Z, N] = s.useState(!1), x = (0, o.e7)([c.Z], () => c.Z.useReducedMotion), {
    hqStreamingState: f
  } = (0, d.k)(r.q.STREAM_HIGH_QUALITY), A = s.useCallback(() => {
    (0, m.dE)(!0), I()
  }, [I]);
  return s.useEffect(() => {
    if (f.hqStreamingUnlockAnimationPlayed) return;
    let e = setTimeout(() => {
      N(!0)
    }, 1150);
    return () => {
      clearTimeout(e), N(!1)
    }
  }, [A, f, x]), s.useEffect(() => {
    if (f.hqStreamingUnlockAnimationPlayed) return;
    if (x) {
      A();
      return
    }
    let e = setTimeout(() => {
      A()
    }, 250);
    return () => {
      clearTimeout(e)
    }
  }, [I, A, , f, x]), s.useEffect(() => {
    E.default.track(_.rMx.PERK_DEMO_OFFER_VIEWED, {
      guild_id: n,
      channel_id: t,
      perk_type: r.q.STREAM_HIGH_QUALITY
    })
  }, []), (0, l.jsx)("div", {
    className: i()(h.container, {
      [h.gradientGlow]: a
    }),
    children: (0, l.jsxs)("div", {
      className: h.content,
      children: [(0, l.jsx)(u.LottieAnimation, {
        importData: g,
        shouldAnimate: !x,
        pauseAtFrame: 90,
        className: i()(h.animation, {
          [h.animationEndState]: Z || !C || x
        }),
        loop: !1
      }), (0, l.jsx)("div", {
        className: h.message,
        children: (0, l.jsx)(u.Text, {
          variant: "text-sm/medium",
          children: S.Z.Messages.GO_LIVE_MODAL_PERK_DEMO_HD_STREAMING_INITIAL_UPSELL
        })
      })]
    })
  })
}