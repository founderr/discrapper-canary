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
  f = n(981631),
  S = n(689938),
  A = n(30157);
let N = r.lazy(() => Promise.all([n.e("26460"), n.e("89792")]).then(n.bind(n, 711635)));

function m(e) {
  let {
    played: t,
    duration: n,
    currentTime: r
  } = e, s = null == n ? "--:--" : t ? (0, c.yv)(Math.ceil(n - r)) : (0, c.yv)(Math.ceil(n));
  return (0, i.jsx)(l.Text, {
    variant: "text-sm/normal",
    className: A.duration,
    tabularNumbers: !0,
    children: s
  })
}
t.Z = r.memo(function(e) {
  var t, n, s, c, O, p;
  let R, {
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
    [x, B] = r.useState(0),
    [k, V] = r.useState(M),
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
      W(!1), x === k && ei()
    }, [x, k, ei]),
    e_ = r.useCallback(e => {
      let t = w.current;
      if (null == k || null == t) return;
      let n = e * k;
      B(n), t.currentTime = n, z(!0), clearTimeout($.current), $.current = void 0
    }, [k]);
  r.useEffect(() => {
    !K && F && z(!0)
  }, [F, K]);
  let ec = r.useRef(null);
  r.useEffect(() => {
    if (K || F) {
      if (F) {
        var e, t;
        ec.current = performance.now(), null == U || U(!1, x, (null !== (t = null === (e = w.current) || void 0 === e ? void 0 : e.duration) && void 0 !== t ? t : 0) * I.Z.Millis.SECOND)
      } else {
        let e = performance.now(),
          t = ec.current;
        null == b || b(x, null != t ? (e - t) / 1e3 : 0), ec.current = null
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
  }, [t, n, s]), c = g, O = F, p = Y, r.useEffect(() => {
    if (!!O) return E.S.dispatch(f.CkL.VOICE_MESSAGE_PLAYBACK_STARTED, {
      src: c
    }), E.S.subscribe(f.CkL.VOICE_MESSAGE_PLAYBACK_STARTED, e), () => {
      E.S.unsubscribe(f.CkL.VOICE_MESSAGE_PLAYBACK_STARTED, e)
    };

    function e(e) {
      let {
        src: t
      } = e;
      if (c !== t) p(!1)
    }
  }, [c, O, p]);
  let ed = F ? l.PauseIcon : l.PlayIcon,
    eE = F ? S.Z.Messages.PAUSE : S.Z.Messages.PLAY;
  "Safari" === platform.name ? R = (0, i.jsx)(r.Suspense, {
    children: (0, i.jsx)(N, {
      ref: w,
      className: A.audioElement,
      src: g,
      preload: q,
      playing: F && !j,
      onEnded: er,
      onLoadedMetadata: en,
      onError: es,
      muted: Z,
      volume: Q
    })
  }) : R = (0, i.jsx)(_.Z, {
    ref: w,
    className: A.audioElement,
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
    className: o()(A.container, {
      [A.playing]: F
    }),
    onMouseEnter: et,
    children: [(0, i.jsx)("div", {
      className: A.rippleContainer,
      children: (0, i.jsx)("div", {
        className: o()(A.ripple, {
          [A.reducedMotion]: eI
        })
      })
    }), (0, i.jsx)(l.Clickable, {
      className: A.playButtonContainer,
      onClick: ee,
      "aria-label": eE,
      children: (0, i.jsx)(ed, {
        className: o()(A.playIcon, {
          [A.oldPlayIconSpacing]: !eT && !F
        }),
        size: "custom",
        color: "currentColor",
        width: 18,
        height: 18
      })
    }), (0, i.jsx)(h.Z, {
      className: A.waveform,
      waveform: D,
      currentTime: x,
      duration: null != k ? k : 1,
      playing: F,
      played: K,
      onDrag: e_,
      onDragStart: el,
      onDragEnd: eu
    }), (0, i.jsx)(m, {
      played: K,
      currentTime: x,
      duration: k
    }), (0, i.jsx)(d.Z, {
      className: A.volumeButton,
      iconClassName: A.volumeButtonIcon,
      sliderWrapperClassName: A.volumeSlider,
      muted: Z,
      value: (0, T.P)(Q, 1),
      minValue: 0,
      maxValue: 1,
      currentWindow: window,
      onValueChange: eo,
      onToggleMute: ea,
      onVolumeShow: P,
      onVolumeHide: y
    }), R]
  })
})