let a;
n.r(t),
    n.d(t, {
        WowMomentTypes: function () {
            return i;
        }
    }),
    n(315314),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(47120);
var i,
    o,
    c = n(200651),
    s = n(192379),
    d = n(120356),
    r = n.n(d),
    u = n(752877),
    m = n(442837),
    l = n(481060),
    M = n(570140),
    p = n(607070),
    w = n(70097),
    _ = n(626135),
    E = n(526167),
    f = n(585483),
    h = n(960048),
    W = n(138464),
    T = n(438820),
    I = n(553300),
    b = n(949772),
    g = n(981631),
    S = n(236029),
    P = n(426401),
    y = n(926734),
    Z = n(601046),
    C = n(421391),
    U = n(153911),
    F = n(588369);
async function H(e, t) {
    try {
        M.Z.dispatch({ type: 'PURCHASED_ITEMS_FESTIVITY_IS_FETCHING_WOW_MOMENT_MEDIA' });
        let n = 1012,
            a = e ? P.Z : y.Z;
        window.matchMedia('(min-width: 1012px) and (max-width: 1980px)').matches || window.matchMedia('(min-height: 720px) and (max-height: 1408px)').matches ? ((n = 1980), (a = e ? Z.Z : C.Z)) : (window.matchMedia('(min-width: 1980px)').matches || window.matchMedia('(min-height: 1408px)').matches) && ((n = 2880), (a = e ? U.Z : F.Z));
        let { enabled: i } = b.Z.getCurrentConfig({ location: 'PremiumSubscriptionWowMoment.prefetch' }, { autoTrackExposure: !1 });
        i && _.default.track(g.rMx.PREMIUM_WOW_MOMENT_MEDIA_PREFETCH_TRIGGER, { client_width: n });
        let o = await fetch(a),
            c = await o.blob(),
            s = window.URL.createObjectURL(c);
        t(s),
            M.Z.dispatch({
                type: 'PURCHASED_ITEMS_FESTIVITY_FETCH_WOW_MOMENT_MEDIA_SUCCESS',
                wumpusMedia: s
            });
    } catch (e) {
        h.Z.captureException(e), M.Z.dispatch({ type: 'PURCHASED_ITEMS_FESTIVITY_FETCH_WOW_MOMENT_MEDIA_FAILURE' });
    }
}
function O() {
    let e = (0, m.e7)([p.Z], () => p.Z.useReducedMotion),
        [t, n] = s.useState(null),
        { isFetchingMedia: i, canPlayWowMoment: o } = (0, m.cj)([T.Z], () => ({
            isFetchingMedia: T.Z.isFetchingWowMomentMedia,
            canPlayWowMoment: T.Z.canPlayWowMoment
        })),
        [d, M] = s.useState(!1),
        h = (0, E.vu)(),
        I = (0, E.rO)(),
        b = h > 52 || -1 === h || I,
        P = I ? 'video/mp4' : 'video/webm',
        y = b && !e && o && null === t && !1 === i;
    s.useEffect(() => {
        y && H(I, n);
    }, [y, I, n]),
        s.useEffect(() => {
            function t() {
                !e &&
                    T.Z.canPlayWowMoment &&
                    (M(!0),
                    (a = setTimeout(() => {
                        M(!1), C(!0), _.default.track(g.rMx.PREMIUM_WOW_MOMENT_VIEWED, { wow_moment_type: 'gradient_highlight' }), (0, W.H)(!1);
                    }, 2000)));
            }
            return (
                f.S.subscribe(g.CkL.PREMIUM_SUBSCRIPTION_CREATED, t),
                () => {
                    f.S.unsubscribe(g.CkL.PREMIUM_SUBSCRIPTION_CREATED, t);
                }
            );
        }, [e, b]);
    let [Z, C] = s.useState(!1),
        [U, F] = s.useState(!1),
        O = (0, l.useSpring)({
            opacity: Z ? 0.2 : 0,
            config: { duration: 100 }
        }),
        x = (0, l.useSpring)(
            {
                x: U ? '100%' : '-100%',
                config: { duration: 500 }
            },
            U ? 'respect-motion-settings' : 'animate-never'
        );
    s.useEffect(() => {
        let e = -1;
        return (
            Z &&
                (e = window.setTimeout(() => {
                    F(!0);
                }, 1000)),
            () => {
                window.clearTimeout(e);
            }
        );
    }, [Z]),
        s.useEffect(() => {
            let e = -1;
            return (
                U &&
                    (e = window.setTimeout(() => {
                        F(!1), C(!1);
                    }, 1000)),
                () => {
                    window.clearTimeout(e);
                }
            );
        }, [U]);
    let R = d && null !== t,
        v = R || Z;
    return (0, c.jsxs)('div', {
        className: r()({
            [S.wrapper]: !v,
            [S.activeWrapper]: v
        }),
        children: [
            R &&
                (0, c.jsx)(w.Z, {
                    autoPlay: !0,
                    className: S.videoWrapper,
                    onPlay: () => {
                        clearTimeout(a), _.default.track(g.rMx.PREMIUM_WOW_MOMENT_VIEWED, { wow_moment_type: 'wumpus_flight' });
                    },
                    onTimeUpdate: (e) => {
                        e.currentTarget.currentTime > 4 && (0, W.H)(!0);
                    },
                    onEnded: () => {
                        M(!1), (0, W.H)(!1), window.URL.revokeObjectURL(t), n(null);
                    },
                    children: (0, c.jsx)('source', {
                        src: t,
                        type: P
                    })
                }),
            (0, c.jsx)(u.animated.div, {
                className: S.gadientHighlight,
                style: O
            }),
            (0, c.jsx)(u.animated.div, {
                className: S.swipeWrapper,
                style: x,
                children: (0, c.jsxs)('svg', {
                    className: S.swipe,
                    viewBox: '0 0 848 1024',
                    fill: 'none',
                    children: [
                        (0, c.jsx)('path', {
                            d: 'M257.206 1024L0 0H341.333L598.539 1024H257.206Z',
                            fill: 'white'
                        }),
                        (0, c.jsx)('path', {
                            d: 'M847.975 1024H690.436L433.231 0H590.769L847.975 1024Z',
                            fill: 'white'
                        })
                    ]
                })
            })
        ]
    });
}
((o = i || (i = {})).WUMPUS_FLIGHT = 'wumpus_flight'), (o.GRADIENT_HIGHLIGHT = 'gradient_highlight');
t.default = function () {
    let { enabled: e } = I.Z.useExperiment({ location: 'PremiumSubscriptionWowMoment' });
    return e ? (0, c.jsx)(O, {}) : null;
};
