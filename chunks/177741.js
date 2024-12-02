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
    c,
    o = n(200651),
    d = n(192379),
    s = n(120356),
    r = n.n(s),
    u = n(752877),
    m = n(442837),
    l = n(481060),
    M = n(570140),
    p = n(607070),
    w = n(70097),
    _ = n(626135),
    f = n(526167),
    E = n(585483),
    h = n(960048),
    W = n(138464),
    T = n(438820),
    b = n(553300),
    I = n(949772),
    g = n(981631),
    S = n(236029),
    P = n(233975),
    Z = n(656402),
    y = n(683984),
    C = n(347010),
    F = n(713669),
    U = n(471517);
async function H(e) {
    try {
        M.Z.dispatch({ type: 'PURCHASED_ITEMS_FESTIVITY_IS_FETCHING_WOW_MOMENT_MEDIA' });
        let t = 1012,
            n = e ? P.Z : Z.Z;
        window.matchMedia('(min-width: 1012px) and (max-width: 1980px)').matches || window.matchMedia('(min-height: 720px) and (max-height: 1408px)').matches ? ((t = 1980), (n = e ? y.Z : C.Z)) : (window.matchMedia('(min-width: 1980px)').matches || window.matchMedia('(min-height: 1408px)').matches) && ((t = 2880), (n = e ? F.Z : U.Z));
        let { enabled: i } = I.Z.getCurrentConfig({ location: 'PremiumSubscriptionWowMoment.prefetch' }, { autoTrackExposure: !1 });
        i && _.default.track(g.rMx.PREMIUM_WOW_MOMENT_MEDIA_PREFETCH_TRIGGER, { client_width: t });
        let a = await fetch(n),
            c = await a.blob(),
            o = window.URL.createObjectURL(c);
        M.Z.dispatch({
            type: 'PURCHASED_ITEMS_FESTIVITY_FETCH_WOW_MOMENT_MEDIA_SUCCESS',
            wumpusMedia: o
        });
    } catch (e) {
        h.Z.captureException(e), M.Z.dispatch({ type: 'PURCHASED_ITEMS_FESTIVITY_FETCH_WOW_MOMENT_MEDIA_FAILURE' });
    }
}
function x() {
    let e = (0, m.e7)([p.Z], () => p.Z.useReducedMotion),
        {
            wumpusMedia: t,
            isFetchingMedia: n,
            canPlayWowMoment: a
        } = (0, m.cj)([T.Z], () => ({
            wumpusMedia: T.Z.wowMomentWumpusMedia,
            isFetchingMedia: T.Z.isFetchingWowMomentMedia,
            canPlayWowMoment: T.Z.canPlayWowMoment
        })),
        [c, s] = d.useState(!1),
        M = (0, f.vu)(),
        h = (0, f.rO)(),
        b = M > 52 || -1 === M || h,
        I = h ? 'video/mp4' : 'video/webm',
        P = b && !e && a && null === t && !1 === n;
    d.useEffect(() => {
        P && H(h);
    }, [P, h]),
        d.useEffect(() => {
            function t() {
                !e &&
                    T.Z.canPlayWowMoment &&
                    (s(!0),
                    (i = setTimeout(() => {
                        s(!1), y(!0), _.default.track(g.rMx.PREMIUM_WOW_MOMENT_VIEWED, { wow_moment_type: 'gradient_highlight' }), (0, W.H)(!1);
                    }, 2000)));
            }
            return (
                E.S.subscribe(g.CkL.PREMIUM_SUBSCRIPTION_CREATED, t),
                () => {
                    E.S.unsubscribe(g.CkL.PREMIUM_SUBSCRIPTION_CREATED, t);
                }
            );
        }, [e, b]);
    let [Z, y] = d.useState(!1),
        [C, F] = d.useState(!1),
        U = (0, l.useSpring)({
            opacity: Z ? 0.2 : 0,
            config: { duration: 100 }
        }),
        x = (0, l.useSpring)(
            {
                x: C ? '100%' : '-100%',
                config: { duration: 500 }
            },
            C ? 'respect-motion-settings' : 'animate-never'
        );
    d.useEffect(() => {
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
        d.useEffect(() => {
            let e = -1;
            return (
                C &&
                    (e = window.setTimeout(() => {
                        F(!1), y(!1);
                    }, 1000)),
                () => {
                    window.clearTimeout(e);
                }
            );
        }, [C]);
    let O = c && null !== t,
        R = O || Z;
    return (0, o.jsxs)('div', {
        className: r()({
            [S.wrapper]: !R,
            [S.activeWrapper]: R
        }),
        children: [
            O &&
                (0, o.jsx)(w.Z, {
                    autoPlay: !0,
                    className: S.videoWrapper,
                    onPlay: () => {
                        clearTimeout(i), _.default.track(g.rMx.PREMIUM_WOW_MOMENT_VIEWED, { wow_moment_type: 'wumpus_flight' });
                    },
                    onTimeUpdate: (e) => {
                        e.currentTarget.currentTime > 4 && (0, W.H)(!0);
                    },
                    onEnded: () => {
                        s(!1), (0, W.H)(!1);
                    },
                    children: (0, o.jsx)('source', {
                        src: t,
                        type: I
                    })
                }),
            (0, o.jsx)(u.animated.div, {
                className: S.gadientHighlight,
                style: U
            }),
            (0, o.jsx)(u.animated.div, {
                className: S.swipeWrapper,
                style: x,
                children: (0, o.jsxs)('svg', {
                    className: S.swipe,
                    viewBox: '0 0 848 1024',
                    fill: 'none',
                    children: [
                        (0, o.jsx)('path', {
                            d: 'M257.206 1024L0 0H341.333L598.539 1024H257.206Z',
                            fill: 'white'
                        }),
                        (0, o.jsx)('path', {
                            d: 'M847.975 1024H690.436L433.231 0H590.769L847.975 1024Z',
                            fill: 'white'
                        })
                    ]
                })
            })
        ]
    });
}
((c = a || (a = {})).WUMPUS_FLIGHT = 'wumpus_flight'), (c.GRADIENT_HIGHLIGHT = 'gradient_highlight');
t.default = function () {
    let { enabled: e } = b.Z.useExperiment({ location: 'PremiumSubscriptionWowMoment' });
    return e ? (0, o.jsx)(x, {}) : null;
};
