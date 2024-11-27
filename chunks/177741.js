let i;
n.r(t),
    n.d(t, {
        WowMomentTypes: function () {
            return a;
        },
        prefetch: function () {
            return C;
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
    p = n(481060),
    M = n(570140),
    l = n(607070),
    w = n(70097),
    _ = n(626135),
    f = n(526167),
    h = n(585483),
    E = n(960048),
    W = n(138464),
    T = n(438820),
    I = n(553300),
    b = n(981631),
    S = n(236029),
    g = n(233975),
    P = n(656402),
    Z = n(683984),
    y = n(347010),
    F = n(713669),
    U = n(471517);
async function C(e) {
    try {
        M.Z.dispatch({ type: 'PURCHASED_ITEMS_FESTIVITY_IS_FETCHING_WOW_MOMENT_MEDIA' });
        let t = e ? g.Z : P.Z;
        window.matchMedia('(min-width: 1012px) and (max-width: 1980px)').matches || window.matchMedia('(min-height: 720px) and (max-height: 1408px)').matches ? (t = e ? Z.Z : y.Z) : (window.matchMedia('(min-width: 1980px)').matches || window.matchMedia('(min-height: 1408px)').matches) && (t = e ? F.Z : U.Z);
        let n = await fetch(t),
            i = await n.blob(),
            a = window.URL.createObjectURL(i);
        M.Z.dispatch({
            type: 'PURCHASED_ITEMS_FESTIVITY_FETCH_WOW_MOMENT_MEDIA_SUCCESS',
            wumpusMedia: a
        });
    } catch (e) {
        E.Z.captureException(e), M.Z.dispatch({ type: 'PURCHASED_ITEMS_FESTIVITY_FETCH_WOW_MOMENT_MEDIA_FAILURE' });
    }
}
function H() {
    let e = (0, m.e7)([l.Z], () => l.Z.useReducedMotion),
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
        E = (0, f.rO)(),
        I = M > 52 || -1 === M || E,
        g = E ? 'video/mp4' : 'video/webm',
        P = I && !e && a && null === t && !1 === n;
    d.useEffect(() => {
        P && C(E);
    }, [P, E]),
        d.useEffect(() => {
            function t() {
                !e &&
                    T.Z.canPlayWowMoment &&
                    (s(!0),
                    (i = setTimeout(() => {
                        s(!1), y(!0), _.default.track(b.rMx.PREMIUM_WOW_MOMENT_VIEWED, { wow_moment_type: 'gradient_highlight' }), (0, W.H)(!1);
                    }, 2000)));
            }
            return (
                h.S.subscribe(b.CkL.PREMIUM_SUBSCRIPTION_CREATED, t),
                () => {
                    h.S.unsubscribe(b.CkL.PREMIUM_SUBSCRIPTION_CREATED, t);
                }
            );
        }, [e, I]);
    let [Z, y] = d.useState(!1),
        [F, U] = d.useState(!1),
        H = (0, p.useSpring)({
            opacity: Z ? 0.2 : 0,
            config: { duration: 100 }
        }),
        x = (0, p.useSpring)(
            {
                x: F ? '100%' : '-100%',
                config: { duration: 500 }
            },
            F ? 'respect-motion-settings' : 'animate-never'
        );
    d.useEffect(() => {
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
        d.useEffect(() => {
            let e = -1;
            return (
                F &&
                    (e = window.setTimeout(() => {
                        U(!1), y(!1);
                    }, 1000)),
                () => {
                    window.clearTimeout(e);
                }
            );
        }, [F]);
    let O = c && null !== t,
        v = O || Z;
    return (0, o.jsxs)('div', {
        className: r()({
            [S.wrapper]: !v,
            [S.activeWrapper]: v
        }),
        children: [
            O &&
                (0, o.jsx)(w.Z, {
                    autoPlay: !0,
                    className: S.videoWrapper,
                    onPlay: () => {
                        clearTimeout(i), _.default.track(b.rMx.PREMIUM_WOW_MOMENT_VIEWED, { wow_moment_type: 'wumpus_flight' });
                    },
                    onTimeUpdate: (e) => {
                        e.currentTarget.currentTime > 4 && (0, W.H)(!0);
                    },
                    onEnded: () => {
                        s(!1), (0, W.H)(!1);
                    },
                    children: (0, o.jsx)('source', {
                        src: t,
                        type: g
                    })
                }),
            (0, o.jsx)(u.animated.div, {
                className: S.gadientHighlight,
                style: H
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
    let { enabled: e } = I.Z.useExperiment({ location: 'PremiumSubscriptionWowMoment' });
    return e ? (0, o.jsx)(H, {}) : null;
};
