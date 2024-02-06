"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
}), n("222007");
var l = n("37983"),
  a = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("446674"),
  o = n("77078"),
  u = n("206230"),
  d = n("806135"),
  c = n("170113"),
  m = n("316680"),
  f = n("830837"),
  h = n("132755"),
  p = n("659500"),
  g = n("718517"),
  E = n("829536"),
  C = n("534107"),
  v = n("49111"),
  I = n("782340"),
  S = n("447946");
let _ = a.lazy(() => n.el("403130").then(n.bind(n, "403130")));

function x(e) {
  let {
    played: t,
    duration: n,
    currentTime: a
  } = e, s = null == n ? "--:--" : t ? (0, c.convertSecondsToClockFormat)(Math.ceil(n - a)) : (0, c.convertSecondsToClockFormat)(Math.ceil(n));
  return (0, l.jsx)(o.Text, {
    variant: "text-sm/normal",
    className: S.duration,
    tabularNumbers: !0,
    children: s
  })
}
var N = a.memo(function(e) {
  var t, n, s, c, N, T;
  let M, {
      src: A,
      volume: O = 1,
      onVolumeChange: j,
      onMute: y,
      waveform: L,
      durationSecs: R,
      onVolumeShow: b,
      onVolumeHide: D,
      onPlay: P,
      onPause: w,
      onError: U
    } = e,
    k = a.useRef(null),
    [V, F] = a.useState(0),
    [B, H] = a.useState(R),
    [G, W] = a.useState(!1),
    [z, Z] = a.useState(!1),
    [J, Y] = a.useState(!1),
    [X, K] = a.useState(!1),
    [q, Q] = a.useState("none"),
    [$, ee] = a.useState(() => "function" == typeof O ? O() : O),
    et = a.useRef(void 0),
    en = a.useCallback(() => {
      Z(e => !e)
    }, []),
    el = a.useCallback(() => {
      Q("metadata")
    }, []),
    ea = a.useCallback(e => {
      let t = e.currentTarget.duration;
      !isNaN(t) && H(t)
    }, []),
    es = a.useCallback(() => {
      Z(!1), null == et.current && (et.current = setTimeout(() => {
        K(!1), et.current = void 0
      }, 500))
    }, []),
    ei = a.useCallback(() => {
      !J && es()
    }, [es, J]),
    er = a.useCallback(() => {
      let e = k.current;
      if (null == e) return;
      let t = e.error;
      null == U || U(t)
    }, [U]),
    eo = a.useCallback(e => {
      let t = (0, E.perceptualToAmplitude)(e, 1);
      W(0 === t), ee(t), null == j || j(t)
    }, [j]),
    eu = a.useCallback(() => {
      W(!G), null == y || y(!G)
    }, [G, y]),
    ed = a.useCallback(() => {
      Y(!0)
    }, []),
    ec = a.useCallback(() => {
      Y(!1), V === B && es()
    }, [V, B, es]),
    em = a.useCallback(e => {
      let t = k.current;
      if (null == B || null == t) return;
      let n = e * B;
      F(n), t.currentTime = n, K(!0), clearTimeout(et.current), et.current = void 0
    }, [B]);
  a.useEffect(() => {
    !X && z && K(!0)
  }, [z, X]);
  let ef = a.useRef(null);
  a.useEffect(() => {
    if (X || z) {
      if (z) {
        var e, t;
        ef.current = performance.now(), null == P || P(!1, V, (null !== (t = null === (e = k.current) || void 0 === e ? void 0 : e.duration) && void 0 !== t ? t : 0) * g.default.Millis.SECOND)
      } else {
        let e = performance.now(),
          t = ef.current;
        null == w || w(V, null != t ? (e - t) / 1e3 : 0), ef.current = null
      }
    }
  }, [z]), t = k, n = z, s = F, a.useEffect(() => {
    let e;
    return ! function l() {
      let a = t.current;
      if (null != a) s(a.currentTime), n && (e = requestAnimationFrame(l))
    }(), () => {
      null != e && cancelAnimationFrame(e)
    }
  }, [t, n, s]), c = A, N = z, T = Z, a.useEffect(() => {
    if (N) return p.ComponentDispatch.dispatch(v.ComponentActions.VOICE_MESSAGE_PLAYBACK_STARTED, {
      src: c
    }), p.ComponentDispatch.subscribe(v.ComponentActions.VOICE_MESSAGE_PLAYBACK_STARTED, e), () => {
      p.ComponentDispatch.unsubscribe(v.ComponentActions.VOICE_MESSAGE_PLAYBACK_STARTED, e)
    };

    function e(e) {
      let {
        src: t
      } = e;
      c !== t && T(!1)
    }
  }, [c, N, T]);
  let eh = z ? f.default : h.default,
    ep = z ? I.default.Messages.PAUSE : I.default.Messages.PLAY;
  M = "Safari" === platform.name ? (0, l.jsx)(a.Suspense, {
    children: (0, l.jsx)(_, {
      ref: k,
      className: S.audioElement,
      src: A,
      preload: q,
      playing: z && !J,
      onEnded: ei,
      onLoadedMetadata: ea,
      onError: er,
      muted: G,
      volume: $
    })
  }) : (0, l.jsx)(d.default, {
    ref: k,
    className: S.audioElement,
    controls: !1,
    preload: q,
    onEnded: ei,
    onLoadedMetadata: ea,
    onError: er,
    muted: G,
    volume: $,
    playing: z && !J,
    children: (0, l.jsx)("source", {
      src: A
    })
  });
  let eg = (0, r.useStateFromStores)([u.default], () => u.default.useReducedMotion),
    {
      enabled: eE
    } = (0, o.useRedesignIconContext)();
  return (0, l.jsxs)("div", {
    className: i(S.container, {
      [S.playing]: z
    }),
    onMouseEnter: el,
    children: [(0, l.jsx)("div", {
      className: S.rippleContainer,
      children: (0, l.jsx)("div", {
        className: i(S.ripple, {
          [S.reducedMotion]: eg
        })
      })
    }), (0, l.jsx)(o.Clickable, {
      className: S.playButtonContainer,
      onClick: en,
      "aria-label": ep,
      children: (0, l.jsx)(eh, {
        className: i(S.playIcon, {
          [S.oldPlayIconSpacing]: !eE && !z
        }),
        width: 18,
        height: 18
      })
    }), (0, l.jsx)(C.default, {
      className: S.waveform,
      waveform: L,
      currentTime: V,
      duration: null != B ? B : 1,
      playing: z,
      played: X,
      onDrag: em,
      onDragStart: ed,
      onDragEnd: ec
    }), (0, l.jsx)(x, {
      played: X,
      currentTime: V,
      duration: B
    }), (0, l.jsx)(m.default, {
      className: S.volumeButton,
      iconClassName: S.volumeButtonIcon,
      sliderWrapperClassName: S.volumeSlider,
      muted: G,
      value: (0, E.amplitudeToPerceptual)($, 1),
      minValue: 0,
      maxValue: 1,
      currentWindow: window,
      onValueChange: eo,
      onToggleMute: eu,
      onVolumeShow: b,
      onVolumeHide: D
    }), M]
  })
})