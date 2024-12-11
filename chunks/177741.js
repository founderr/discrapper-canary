let i;
n.r(t),
    n.d(t, {
        WowMomentTypes: function () {
            return a;
        }
    }),
    n(315314),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(47120);
var a,
    o,
    c = n(200651),
    s = n(192379),
    d = n(120356),
    r = n.n(d),
    u = n(752877),
    l = n(442837),
    m = n(544891),
    M = n(481060),
    p = n(570140),
    w = n(607070),
    _ = n(70097),
    E = n(626135),
    f = n(526167),
    h = n(585483),
    W = n(960048),
    T = n(138464),
    I = n(438820),
    b = n(553300),
    g = n(949772),
    S = n(981631),
    P = n(236029),
    y = n(426401),
    Z = n(926734),
    C = n(601046),
    F = n(421391),
    U = n(153911),
    O = n(588369);
async function x(e, t) {
    try {
        p.Z.dispatch({ type: 'PURCHASED_ITEMS_FESTIVITY_IS_FETCHING_WOW_MOMENT_MEDIA' });
        let n = 1012,
            i = e ? y.Z : Z.Z;
        window.matchMedia('(min-width: 1012px) and (max-width: 1980px)').matches || window.matchMedia('(min-height: 720px) and (max-height: 1408px)').matches ? ((n = 1980), (i = e ? C.Z : F.Z)) : (window.matchMedia('(min-width: 1980px)').matches || window.matchMedia('(min-height: 1408px)').matches) && ((n = 2880), (i = e ? U.Z : O.Z));
        let { enabled: a } = g.Z.getCurrentConfig({ location: 'PremiumSubscriptionWowMoment.prefetch' }, { autoTrackExposure: !1 });
        a && E.default.track(S.rMx.PREMIUM_WOW_MOMENT_MEDIA_PREFETCH_TRIGGER, { client_width: n });
        let o = await m.tn.get({
                url: i,
                binary: !0,
                rejectWithError: !0
            }),
            c = window.URL.createObjectURL(o.body);
        t(c),
            p.Z.dispatch({
                type: 'PURCHASED_ITEMS_FESTIVITY_FETCH_WOW_MOMENT_MEDIA_SUCCESS',
                wumpusMedia: c
            });
    } catch (e) {
        W.Z.captureException(e), p.Z.dispatch({ type: 'PURCHASED_ITEMS_FESTIVITY_FETCH_WOW_MOMENT_MEDIA_FAILURE' });
    }
}
function H() {
    let e = (0, l.e7)([w.Z], () => w.Z.useReducedMotion),
        [t, n] = s.useState(null),
        { isFetchingMedia: a, canPlayWowMoment: o } = (0, l.cj)([I.Z], () => ({
            isFetchingMedia: I.Z.isFetchingWowMomentMedia,
            canPlayWowMoment: I.Z.canPlayWowMoment
        })),
        [d, m] = s.useState(!1),
        p = (0, f.vu)(),
        W = (0, f.rO)(),
        b = p > 52 || -1 === p || W,
        g = W ? 'video/mp4' : 'video/webm',
        y = b && !e && o && null === t && !1 === a;
    s.useEffect(() => {
        y && x(W, n);
    }, [y, W, n]),
        s.useEffect(() => {
            function t() {
                !e &&
                    I.Z.canPlayWowMoment &&
                    (m(!0),
                    (i = setTimeout(() => {
                        m(!1), C(!0), E.default.track(S.rMx.PREMIUM_WOW_MOMENT_VIEWED, { wow_moment_type: 'gradient_highlight' }), (0, T.H)(!1);
                    }, 2000)));
            }
            return (
                h.S.subscribe(S.CkL.PREMIUM_SUBSCRIPTION_CREATED, t),
                () => {
                    h.S.unsubscribe(S.CkL.PREMIUM_SUBSCRIPTION_CREATED, t);
                }
            );
        }, [e, b]);
    let [Z, C] = s.useState(!1),
        [F, U] = s.useState(!1),
        O = (0, M.useSpring)({
            opacity: Z ? 0.2 : 0,
            config: { duration: 100 }
        }),
        H = (0, M.useSpring)(
            {
                x: F ? '100%' : '-100%',
                config: { duration: 500 }
            },
            F ? 'respect-motion-settings' : 'animate-never'
        );
    s.useEffect(() => {
        let e = -1;
        return (
            Z &&
                (e = window.setTimeout(() => {
                    U(!0);
                }, 1000)),
            () => {
                window.clearTimeout(e);
            }
        );
    }, [Z]),
        s.useEffect(() => {
            let e = -1;
            return (
                F &&
                    (e = window.setTimeout(() => {
                        U(!1), C(!1);
                    }, 1000)),
                () => {
                    window.clearTimeout(e);
                }
            );
        }, [F]);
    let R = d && null !== t,
        v = R || Z;
    return (0, c.jsxs)('div', {
        className: r()({
            [P.wrapper]: !v,
            [P.activeWrapper]: v
        }),
        children: [
            R &&
                (0, c.jsx)(_.Z, {
                    autoPlay: !0,
                    className: P.videoWrapper,
                    onPlay: () => {
                        clearTimeout(i), E.default.track(S.rMx.PREMIUM_WOW_MOMENT_VIEWED, { wow_moment_type: 'wumpus_flight' });
                    },
                    onEnded: () => {
                        m(!1), (0, T.H)(!1), window.URL.revokeObjectURL(t), n(null);
                    },
                    children: (0, c.jsx)('source', {
                        src: t,
                        type: g
                    })
                }),
            (0, c.jsx)(u.animated.div, {
                className: P.gadientHighlight,
                style: O
            }),
            (0, c.jsx)(u.animated.div, {
                className: P.swipeWrapper,
                style: H,
                children: (0, c.jsxs)('svg', {
                    className: P.swipe,
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
((o = a || (a = {})).WUMPUS_FLIGHT = 'wumpus_flight'), (o.GRADIENT_HIGHLIGHT = 'gradient_highlight');
t.default = function () {
    let { enabled: e } = b.Z.useExperiment({ location: 'PremiumSubscriptionWowMoment' });
    return e ? (0, c.jsx)(H, {}) : null;
};
