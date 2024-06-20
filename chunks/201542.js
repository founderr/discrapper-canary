"use strict";
n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(442837),
  l = n(481060),
  u = n(607070),
  _ = n(62170),
  c = n(640108),
  d = n(80618),
  E = n(585483),
  I = n(70956),
  T = n(36703),
  h = n(347312),
  S = n(981631),
  f = n(689938),
  N = n(30157);
let A = r.lazy(() => Promise.all([n.e("26460"), n.e("89792")]).then(n.bind(n, 711635)));

function m(e) {
  let {
    played: t,
    duration: n,
    currentTime: r
  } = e, s = null == n ? "--:--" : t ? (0, c.yv)(Math.ceil(n - r)) : (0, c.yv)(Math.ceil(n));
  return (0, i.jsx)(l.Text, {
    variant: "text-sm/normal",
    className: N.duration,
    tabularNumbers: !0,
    children: s
  })
}
t.Z = r.memo(function(e) {
  var t, n, s, c, O, R;
  let p, {
      src: g,
      volume: C = 1,
      onVolumeChange: v,
      onMute: L,
      waveform: D,
      durationSecs: M,
      onVolumeShow: P,
      onVolumeHide: y,
      onPlay: U,
      onPause: b,
      onError: G
    } = e,
    w = r.useRef(null),
    [k, B] = r.useState(0),
    [x, V] = r.useState(M),
    [Z, H] = r.useState(!1),
    [F, Y] = r.useState(!1),
    [j, W] = r.useState(!1),
    [K, z] = r.useState(!1),
    [q, X] = r.useState("none"),
    [Q, J] = r.useState(() => "function" == typeof C ? C() : C),
    $ = r.useRef(void 0),
    ee = r.useCallback(() => {
      Y(e => !e)
    }, []),
    et = r.useCallback(() => {
      X("metadata")
    }, []),
    en = r.useCallback(e => {
      let t = e.currentTarget.duration;
      if (!isNaN(t)) V(t)
    }, []),
    ei = r.useCallback(() => {
      if (Y(!1), null == $.current) $.current = setTimeout(() => {
        z(!1), $.current = void 0
      }, 500)
    }, []),
    er = r.useCallback(() => {
      if (!j) ei()
    }, [ei, j]),
    es = r.useCallback(() => {
      let e = w.current;
      if (null == e) return;
      let t = e.error;
      null == G || G(t)
    }, [G]),
    eo = r.useCallback(e => {
      let t = (0, T.A)(e, 1);
      H(0 === t), J(t), null == v || v(t)
    }, [v]),
    ea = r.useCallback(() => {
      H(!Z), null == L || L(!Z)
    }, [Z, L]),
    el = r.useCallback(() => {
      W(!0)
    }, []),
    eu = r.useCallback(() => {
      W(!1), k === x && ei()
    }, [k, x, ei]),
    e_ = r.useCallback(e => {
      let t = w.current;
      if (null == x || null == t) return;
      let n = e * x;
      B(n), t.currentTime = n, z(!0), clearTimeout($.current), $.current = void 0
    }, [x]);
  r.useEffect(() => {
    !K && F && z(!0)
  }, [F, K]);
  let ec = r.useRef(null);
  r.useEffect(() => {
    if (K || F) {
      if (F) {
        var e, t;
        ec.current = performance.now(), null == U || U(!1, k, (null !== (t = null === (e = w.current) || void 0 === e ? void 0 : e.duration) && void 0 !== t ? t : 0) * I.Z.Millis.SECOND)
      } else {
        let e = performance.now(),
          t = ec.current;
        null == b || b(k, null != t ? (e - t) / 1e3 : 0), ec.current = null
      }
    }
  }, [F]), t = w, n = F, s = B, r.useEffect(() => {
    let e;
    return ! function i() {
      let r = t.current;
      if (null == r) return;
      if (s(r.currentTime), !!n) e = requestAnimationFrame(i)
    }(), () => {
      null != e && cancelAnimationFrame(e)
    }
  }, [t, n, s]), c = g, O = F, R = Y, r.useEffect(() => {
    if (!!O) return E.S.dispatch(S.CkL.VOICE_MESSAGE_PLAYBACK_STARTED, {
      src: c
    }), E.S.subscribe(S.CkL.VOICE_MESSAGE_PLAYBACK_STARTED, e), () => {
      E.S.unsubscribe(S.CkL.VOICE_MESSAGE_PLAYBACK_STARTED, e)
    };

    function e(e) {
      let {
        src: t
      } = e;
      if (c !== t) R(!1)
    }
  }, [c, O, R]);
  let ed = F ? l.PauseIcon : l.PlayIcon,
    eE = F ? f.Z.Messages.PAUSE : f.Z.Messages.PLAY;
  "Safari" === platform.name ? p = (0, i.jsx)(r.Suspense, {
    children: (0, i.jsx)(A, {
      ref: w,
      className: N.audioElement,
      src: g,
      preload: q,
      playing: F && !j,
      onEnded: er,
      onLoadedMetadata: en,
      onError: es,
      muted: Z,
      volume: Q
    })
  }) : p = (0, i.jsx)(_.Z, {
    ref: w,
    className: N.audioElement,
    controls: !1,
    preload: q,
    onEnded: er,
    onLoadedMetadata: en,
    onError: es,
    muted: Z,
    volume: Q,
    playing: F && !j,
    children: (0, i.jsx)("source", {
      src: g
    })
  });
  let eI = (0, a.e7)([u.Z], () => u.Z.useReducedMotion),
    {
      enabled: eT
    } = (0, l.useRedesignIconContext)();
  return (0, i.jsxs)("div", {
    className: o()(N.container, {
      [N.playing]: F
    }),
    onMouseEnter: et,
    children: [(0, i.jsx)("div", {
      className: N.rippleContainer,
      children: (0, i.jsx)("div", {
        className: o()(N.ripple, {
          [N.reducedMotion]: eI
        })
      })
    }), (0, i.jsx)(l.Clickable, {
      className: N.playButtonContainer,
      onClick: ee,
      "aria-label": eE,
      children: (0, i.jsx)(ed, {
        className: o()(N.playIcon, {
          [N.oldPlayIconSpacing]: !eT && !F
        }),
        size: "custom",
        color: "currentColor",
        width: 18,
        height: 18
      })
    }), (0, i.jsx)(h.Z, {
      className: N.waveform,
      waveform: D,
      currentTime: k,
      duration: null != x ? x : 1,
      playing: F,
      played: K,
      onDrag: e_,
      onDragStart: el,
      onDragEnd: eu
    }), (0, i.jsx)(m, {
      played: K,
      currentTime: k,
      duration: x
    }), (0, i.jsx)(d.Z, {
      className: N.volumeButton,
      iconClassName: N.volumeButtonIcon,
      sliderWrapperClassName: N.volumeSlider,
      muted: Z,
      value: (0, T.P)(Q, 1),
      minValue: 0,
      maxValue: 1,
      currentWindow: window,
      onValueChange: eo,
      onToggleMute: ea,
      onVolumeShow: P,
      onVolumeHide: y
    }), p]
  })
})