n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(442837),
    l = n(481060),
    u = n(607070),
    c = n(62170),
    d = n(640108),
    f = n(793148),
    _ = n(585483),
    p = n(70956),
    h = n(36703),
    m = n(347312),
    g = n(981631),
    E = n(388032),
    v = n(506574);
let b = i.lazy(() => Promise.all([n.e('26460'), n.e('89792')]).then(n.bind(n, 711635)));
function I(e) {
    let { played: t, duration: n, currentTime: i } = e,
        a = null == n ? '--:--' : t ? (0, d.yv)(Math.ceil(n - i)) : (0, d.yv)(Math.ceil(n));
    return (0, r.jsx)(l.Text, {
        variant: 'text-sm/normal',
        className: v.duration,
        tabularNumbers: !0,
        children: a
    });
}
t.Z = i.memo(function (e) {
    var t, n, a, d, S, T;
    let y,
        { src: A, volume: N = 1, onVolumeChange: C, onMute: R, waveform: O, durationSecs: D, onVolumeShow: L, onVolumeHide: x, onPlay: w, onPause: M, onError: P } = e,
        k = i.useRef(null),
        [U, B] = i.useState(0),
        [G, Z] = i.useState(D),
        [F, V] = i.useState(!1),
        [j, H] = i.useState(!1),
        [Y, W] = i.useState(!1),
        [K, z] = i.useState(!1),
        [q, Q] = i.useState('none'),
        [X, J] = i.useState(() => ('function' == typeof N ? N() : N)),
        $ = i.useRef(void 0),
        ee = i.useCallback(() => {
            H((e) => !e);
        }, []),
        et = i.useCallback(() => {
            Q('metadata');
        }, []),
        en = i.useCallback((e) => {
            let t = e.currentTarget.duration;
            if (!isNaN(t)) Z(t);
        }, []),
        er = i.useCallback(() => {
            if ((H(!1), null == $.current))
                $.current = setTimeout(() => {
                    z(!1), ($.current = void 0);
                }, 500);
        }, []),
        ei = i.useCallback(() => {
            if (!Y) er();
        }, [er, Y]),
        ea = i.useCallback(() => {
            let e = k.current;
            if (null == e) return;
            let t = e.error;
            null == P || P(t);
        }, [P]),
        es = i.useCallback(
            (e) => {
                let t = (0, h.A)(e, 1);
                V(0 === t), J(t), null == C || C(t);
            },
            [C]
        ),
        eo = i.useCallback(() => {
            V(!F), null == R || R(!F);
        }, [F, R]),
        el = i.useCallback(() => {
            W(!0);
        }, []),
        eu = i.useCallback(() => {
            W(!1), U === G && er();
        }, [U, G, er]),
        ec = i.useCallback(
            (e) => {
                let t = k.current;
                if (null == G || null == t) return;
                let n = e * G;
                B(n), (t.currentTime = n), z(!0), clearTimeout($.current), ($.current = void 0);
            },
            [G]
        );
    i.useEffect(() => {
        !K && j && z(!0);
    }, [j, K]);
    let ed = i.useRef(null);
    i.useEffect(() => {
        if (K || j) {
            if (j) {
                var e, t;
                (ed.current = performance.now()), null == w || w(!1, U, (null !== (t = null === (e = k.current) || void 0 === e ? void 0 : e.duration) && void 0 !== t ? t : 0) * p.Z.Millis.SECOND);
            } else {
                let e = performance.now(),
                    t = ed.current;
                null == M || M(U, null != t ? (e - t) / 1000 : 0), (ed.current = null);
            }
        }
    }, [j]),
        (t = k),
        (n = j),
        (a = B),
        i.useEffect(() => {
            let e;
            return (
                !(function r() {
                    let i = t.current;
                    if (null == i) return;
                    if ((a(i.currentTime), !!n)) e = requestAnimationFrame(r);
                })(),
                () => {
                    null != e && cancelAnimationFrame(e);
                }
            );
        }, [t, n, a]),
        (d = A),
        (S = j),
        (T = H),
        i.useEffect(() => {
            if (!!S)
                return (
                    _.S.dispatch(g.CkL.VOICE_MESSAGE_PLAYBACK_STARTED, { src: d }),
                    _.S.subscribe(g.CkL.VOICE_MESSAGE_PLAYBACK_STARTED, e),
                    () => {
                        _.S.unsubscribe(g.CkL.VOICE_MESSAGE_PLAYBACK_STARTED, e);
                    }
                );
            function e(e) {
                let { src: t } = e;
                if (d !== t) T(!1);
            }
        }, [d, S, T]);
    let ef = j ? l.PauseIcon : l.PlayIcon,
        e_ = j ? E.intl.string(E.t.ZcgDJS) : E.intl.string(E.t.RscU7O);
    'Safari' === platform.name
        ? (y = (0, r.jsx)(i.Suspense, {
              children: (0, r.jsx)(b, {
                  ref: k,
                  className: v.audioElement,
                  src: A,
                  preload: q,
                  playing: j && !Y,
                  onEnded: ei,
                  onLoadedMetadata: en,
                  onError: ea,
                  muted: F,
                  volume: X
              })
          }))
        : (y = (0, r.jsx)(c.Z, {
              ref: k,
              className: v.audioElement,
              controls: !1,
              preload: q,
              onEnded: ei,
              onLoadedMetadata: en,
              onError: ea,
              muted: F,
              volume: X,
              playing: j && !Y,
              children: (0, r.jsx)('source', { src: A })
          }));
    let ep = (0, o.e7)([u.Z], () => u.Z.useReducedMotion),
        { enabled: eh } = (0, l.useRedesignIconContext)();
    return (0, r.jsxs)('div', {
        className: s()(v.container, { [v.playing]: j }),
        onMouseEnter: et,
        children: [
            (0, r.jsx)('div', {
                className: v.rippleContainer,
                children: (0, r.jsx)('div', { className: s()(v.ripple, { [v.reducedMotion]: ep }) })
            }),
            (0, r.jsx)(l.Clickable, {
                className: v.playButtonContainer,
                onClick: ee,
                'aria-label': e_,
                children: (0, r.jsx)(ef, {
                    className: s()(v.playIcon, { [v.oldPlayIconSpacing]: !eh && !j }),
                    size: 'custom',
                    color: 'currentColor',
                    width: 18,
                    height: 18
                })
            }),
            (0, r.jsx)(m.Z, {
                className: v.waveform,
                waveform: O,
                currentTime: U,
                duration: null != G ? G : 1,
                playing: j,
                played: K,
                onDrag: ec,
                onDragStart: el,
                onDragEnd: eu
            }),
            (0, r.jsx)(I, {
                played: K,
                currentTime: U,
                duration: G
            }),
            (0, r.jsx)(f.Z, {
                className: v.volumeButton,
                iconClassName: v.volumeButtonIcon,
                iconColor: 'currentColor',
                sliderWrapperClassName: v.volumeSlider,
                muted: F,
                value: (0, h.P)(X, 1),
                minValue: 0,
                maxValue: 1,
                currentWindow: window,
                onValueChange: es,
                onToggleMute: eo,
                onVolumeShow: L,
                onVolumeHide: x
            }),
            y
        ]
    });
});
