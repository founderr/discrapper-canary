var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(442837),
    u = n(481060),
    c = n(607070),
    d = n(62170),
    _ = n(640108),
    E = n(793148),
    f = n(585483),
    h = n(70956),
    p = n(36703),
    m = n(347312),
    I = n(981631),
    T = n(689938),
    g = n(506574);
let S = a.lazy(() => Promise.all([n.e('26460'), n.e('89792')]).then(n.bind(n, 711635)));
function A(e) {
    let { played: t, duration: n, currentTime: r } = e,
        a = null == n ? '--:--' : t ? (0, _.yv)(Math.ceil(n - r)) : (0, _.yv)(Math.ceil(n));
    return (0, i.jsx)(u.Text, {
        variant: 'text-sm/normal',
        className: g.duration,
        tabularNumbers: !0,
        children: a
    });
}
function v(e, t, n) {
    a.useEffect(() => {
        let r;
        function i() {
            let a = e.current;
            if (null == a) return;
            if ((n(a.currentTime), !!t)) r = requestAnimationFrame(i);
        }
        return (
            i(),
            () => {
                null != r && cancelAnimationFrame(r);
            }
        );
    }, [e, t, n]);
}
function N(e, t, n) {
    a.useEffect(() => {
        if (!!t)
            return (
                f.S.dispatch(I.CkL.VOICE_MESSAGE_PLAYBACK_STARTED, { src: e }),
                f.S.subscribe(I.CkL.VOICE_MESSAGE_PLAYBACK_STARTED, r),
                () => {
                    f.S.unsubscribe(I.CkL.VOICE_MESSAGE_PLAYBACK_STARTED, r);
                }
            );
        function r(t) {
            let { src: r } = t;
            if (e !== r) n(!1);
        }
    }, [e, t, n]);
}
t.Z = a.memo(function (e) {
    let t,
        { src: n, volume: r = 1, onVolumeChange: o, onMute: _, waveform: f, durationSecs: I, onVolumeShow: O, onVolumeHide: R, onPlay: C, onPause: y, onError: b } = e,
        L = a.useRef(null),
        [D, M] = a.useState(0),
        [P, U] = a.useState(I),
        [w, x] = a.useState(!1),
        [G, k] = a.useState(!1),
        [B, F] = a.useState(!1),
        [Z, V] = a.useState(!1),
        [H, Y] = a.useState('none'),
        [j, W] = a.useState(() => ('function' == typeof r ? r() : r)),
        K = a.useRef(void 0),
        z = a.useCallback(() => {
            k((e) => !e);
        }, []),
        q = a.useCallback(() => {
            Y('metadata');
        }, []),
        Q = a.useCallback((e) => {
            let t = e.currentTarget.duration;
            if (!isNaN(t)) U(t);
        }, []),
        X = a.useCallback(() => {
            if ((k(!1), null == K.current))
                K.current = setTimeout(() => {
                    V(!1), (K.current = void 0);
                }, 500);
        }, []),
        $ = a.useCallback(() => {
            if (!B) X();
        }, [X, B]),
        J = a.useCallback(() => {
            let e = L.current;
            if (null == e) return;
            let t = e.error;
            null == b || b(t);
        }, [b]),
        ee = a.useCallback(
            (e) => {
                let t = (0, p.A)(e, 1);
                x(0 === t), W(t), null == o || o(t);
            },
            [o]
        ),
        et = a.useCallback(() => {
            x(!w), null == _ || _(!w);
        }, [w, _]),
        en = a.useCallback(() => {
            F(!0);
        }, []),
        er = a.useCallback(() => {
            F(!1), D === P && X();
        }, [D, P, X]),
        ei = a.useCallback(
            (e) => {
                let t = L.current;
                if (null == P || null == t) return;
                let n = e * P;
                M(n), (t.currentTime = n), V(!0), clearTimeout(K.current), (K.current = void 0);
            },
            [P]
        );
    a.useEffect(() => {
        !Z && G && V(!0);
    }, [G, Z]);
    let ea = a.useRef(null);
    a.useEffect(() => {
        if (Z || G) {
            if (G) {
                var e, t;
                (ea.current = performance.now()), null == C || C(!1, D, (null !== (t = null === (e = L.current) || void 0 === e ? void 0 : e.duration) && void 0 !== t ? t : 0) * h.Z.Millis.SECOND);
            } else {
                let e = performance.now(),
                    t = ea.current,
                    n = null != t ? (e - t) / 1000 : 0;
                null == y || y(D, n), (ea.current = null);
            }
        }
    }, [G]),
        v(L, G, M),
        N(n, G, k);
    let eo = G ? u.PauseIcon : u.PlayIcon,
        es = G ? T.Z.Messages.PAUSE : T.Z.Messages.PLAY;
    'Safari' === platform.name
        ? (t = (0, i.jsx)(a.Suspense, {
              children: (0, i.jsx)(S, {
                  ref: L,
                  className: g.audioElement,
                  src: n,
                  preload: H,
                  playing: G && !B,
                  onEnded: $,
                  onLoadedMetadata: Q,
                  onError: J,
                  muted: w,
                  volume: j
              })
          }))
        : (t = (0, i.jsx)(d.Z, {
              ref: L,
              className: g.audioElement,
              controls: !1,
              preload: H,
              onEnded: $,
              onLoadedMetadata: Q,
              onError: J,
              muted: w,
              volume: j,
              playing: G && !B,
              children: (0, i.jsx)('source', { src: n })
          }));
    let el = (0, l.e7)([c.Z], () => c.Z.useReducedMotion),
        { enabled: eu } = (0, u.useRedesignIconContext)();
    return (0, i.jsxs)('div', {
        className: s()(g.container, { [g.playing]: G }),
        onMouseEnter: q,
        children: [
            (0, i.jsx)('div', {
                className: g.rippleContainer,
                children: (0, i.jsx)('div', { className: s()(g.ripple, { [g.reducedMotion]: el }) })
            }),
            (0, i.jsx)(u.Clickable, {
                className: g.playButtonContainer,
                onClick: z,
                'aria-label': es,
                children: (0, i.jsx)(eo, {
                    className: s()(g.playIcon, { [g.oldPlayIconSpacing]: !eu && !G }),
                    size: 'custom',
                    color: 'currentColor',
                    width: 18,
                    height: 18
                })
            }),
            (0, i.jsx)(m.Z, {
                className: g.waveform,
                waveform: f,
                currentTime: D,
                duration: null != P ? P : 1,
                playing: G,
                played: Z,
                onDrag: ei,
                onDragStart: en,
                onDragEnd: er
            }),
            (0, i.jsx)(A, {
                played: Z,
                currentTime: D,
                duration: P
            }),
            (0, i.jsx)(E.Z, {
                className: g.volumeButton,
                iconClassName: g.volumeButtonIcon,
                iconColor: 'currentColor',
                sliderWrapperClassName: g.volumeSlider,
                muted: w,
                value: (0, p.P)(j, 1),
                minValue: 0,
                maxValue: 1,
                currentWindow: window,
                onValueChange: ee,
                onToggleMute: et,
                onVolumeShow: O,
                onVolumeHide: R
            }),
            t
        ]
    });
});
