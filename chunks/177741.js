let i;
n.r(t), n.d(t, {
  WowMomentTypes: function() {
    return a
  },
  prefetch: function() {
    return C
  }
}), n(315314), n(610138), n(216116), n(78328), n(815648), n(47120);
var a, o, s = n(735250),
  r = n(470079),
  u = n(120356),
  c = n.n(u),
  d = n(920906),
  m = n(442837),
  l = n(570140),
  M = n(607070),
  w = n(810090),
  p = n(626135),
  _ = n(526167),
  h = n(585483),
  E = n(138464),
  W = n(438820),
  T = n(831474),
  f = n(631274),
  S = n(194077),
  I = n(724688),
  g = n(981631),
  b = n(951507),
  P = n(422138),
  y = n(113386),
  x = n(48547);
async function C(e) {
  try {
    l.Z.dispatch({
      type: "PURCHASED_ITEMS_FESTIVITY_IS_FETCHING_WOW_MOMENT_MEDIA",
      value: !0
    });
    let t = e ? f : P;
    window.matchMedia("(min-width: 1012px) and (max-width: 1980px)").matches || window.matchMedia("(min-height: 720px) and (max-height: 1408px)").matches ? t = e ? S : y : (window.matchMedia("(min-width: 1980px)").matches || window.matchMedia("(min-height: 1408px)").matches) && (t = e ? I : x);
    let n = await fetch(t).then(async e => {
      let t = await e.blob();
      return window.URL.createObjectURL(t)
    });
    l.Z.dispatch({
      type: "PURCHASED_ITEMS_FESTIVITY_FETCH_WOW_MOMENT_MEDIA_SUCCESS",
      wumpusMedia: n
    })
  } catch (e) {
    l.Z.dispatch({
      type: "PURCHASED_ITEMS_FESTIVITY_IS_FETCHING_WOW_MOMENT_MEDIA",
      value: !1
    })
  }
}(o = a || (a = {})).WUMPUS_FLIGHT = "wumpus_flight", o.GRADIENT_HIGHLIGHT = "gradient_highlight";
t.default = function() {
  let e = (0, m.e7)([M.Z], () => M.Z.useReducedMotion),
    {
      wumpusMedia: t,
      isFetchingMedia: n,
      canPlayWowMoment: a
    } = (0, m.cj)([W.Z], () => ({
      wumpusMedia: W.Z.wowMomentWumpusMedia,
      isFetchingMedia: W.Z.isFetchingWowMomentMedia,
      canPlayWowMoment: W.Z.canPlayWowMoment
    })),
    [o, u] = r.useState(!1),
    l = (0, _.vu)(),
    f = (0, _.rO)(),
    S = l > 52 || -1 === l || f,
    I = f ? "video/mp4" : "video/webm";
  S && !e && a && null === t && !1 === n && C(f), r.useEffect(() => {
    function t() {
      let {
        enabled: t
      } = T.o.getCurrentConfig({
        location: "PremumSubscriptionWowMoment.tsx"
      });
      t && !e && W.Z.canPlayWowMoment && (u(!0), i = setTimeout(() => {
        u(!1), y(!0), p.default.track(g.rMx.PREMIUM_WOW_MOMENT_VIEWED, {
          wow_moment_type: "gradient_highlight"
        })
      }, 2e3))
    }
    return h.S.subscribe(g.CkL.PREMIUM_SUBSCRIPTION_CREATED, t), () => {
      h.S.unsubscribe(g.CkL.PREMIUM_SUBSCRIPTION_CREATED, t)
    }
  }, [e, S]);
  let [P, y] = r.useState(!1), [x, F] = r.useState(!1), U = (0, d.useSpring)({
    opacity: P ? .2 : 0,
    config: {
      duration: 100
    },
    immediate: e
  }), N = (0, d.useSpring)({
    x: x ? "100%" : "-100%",
    config: {
      duration: 500
    },
    immediate: e || !x
  });
  r.useEffect(() => {
    let e = -1;
    return P && (e = window.setTimeout(() => {
      F(!0)
    }, 1e3)), () => {
      window.clearTimeout(e)
    }
  }, [P]), r.useEffect(() => {
    let e = -1;
    return x && (e = window.setTimeout(() => {
      F(!1), y(!1)
    }, 1e3)), () => {
      window.clearTimeout(e)
    }
  }, [x]);
  let O = o && null !== t,
    H = O || P;
  return (0, s.jsxs)("div", {
    className: c()({
      [b.wrapper]: !H,
      [b.activeWrapper]: H
    }),
    children: [O && (0, s.jsx)(w.Z, {
      autoPlay: !0,
      className: b.videoWrapper,
      onPlay: () => {
        clearTimeout(i), p.default.track(g.rMx.PREMIUM_WOW_MOMENT_VIEWED, {
          wow_moment_type: "wumpus_flight"
        })
      },
      onTimeUpdate: e => {
        e.currentTarget.currentTime > 4 && (0, E.H)(!0)
      },
      onEnded: () => {
        u(!1)
      },
      children: (0, s.jsx)("source", {
        src: t,
        type: I
      })
    }), (0, s.jsx)(d.animated.div, {
      className: b.gadientHighlight,
      style: U
    }), (0, s.jsx)(d.animated.div, {
      className: b.swipeWrapper,
      style: N,
      children: (0, s.jsxs)("svg", {
        className: b.swipe,
        viewBox: "0 0 848 1024",
        fill: "none",
        children: [(0, s.jsx)("path", {
          d: "M257.206 1024L0 0H341.333L598.539 1024H257.206Z",
          fill: "white"
        }), (0, s.jsx)("path", {
          d: "M847.975 1024H690.436L433.231 0H590.769L847.975 1024Z",
          fill: "white"
        })]
      })
    })]
  })
}