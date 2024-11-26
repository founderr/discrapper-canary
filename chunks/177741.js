let i;
n.r(t),
    n.d(t, {
        WowMomentTypes: function () {
            return a;
        },
        prefetch: function () {
            return U;
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
    s = n(192379),
    d = n(120356),
    r = n.n(d),
    u = n(752877),
    p = n(442837),
    M = n(481060),
    m = n(570140),
    w = n(607070),
    l = n(70097),
    _ = n(626135),
    h = n(526167),
    f = n(585483),
    E = n(138464),
    W = n(438820),
    T = n(981631),
    I = n(236029),
    S = n(233975),
    g = n(656402),
    b = n(683984),
    P = n(347010),
    y = n(713669),
    F = n(471517);
async function U(e) {
    try {
        m.Z.dispatch({ type: 'PURCHASED_ITEMS_FESTIVITY_IS_FETCHING_WOW_MOMENT_MEDIA' });
        let t = e ? S.Z : g.Z;
        window.matchMedia('(min-width: 1012px) and (max-width: 1980px)').matches || window.matchMedia('(min-height: 720px) and (max-height: 1408px)').matches ? (t = e ? b.Z : P.Z) : (window.matchMedia('(min-width: 1980px)').matches || window.matchMedia('(min-height: 1408px)').matches) && (t = e ? y.Z : F.Z);
        let n = await fetch(t).then(async (e) => {
            let t = await e.blob();
            return window.URL.createObjectURL(t);
        });
        m.Z.dispatch({
            type: 'PURCHASED_ITEMS_FESTIVITY_FETCH_WOW_MOMENT_MEDIA_SUCCESS',
            wumpusMedia: n
        });
    } catch (e) {
        m.Z.dispatch({ type: 'PURCHASED_ITEMS_FESTIVITY_FETCH_WOW_MOMENT_MEDIA_FAILURE' });
    }
}
((c = a || (a = {})).WUMPUS_FLIGHT = 'wumpus_flight'), (c.GRADIENT_HIGHLIGHT = 'gradient_highlight');
t.default = function () {
    let e = (0, p.e7)([w.Z], () => w.Z.useReducedMotion),
        {
            wumpusMedia: t,
            isFetchingMedia: n,
            canPlayWowMoment: a
        } = (0, p.cj)([W.Z], () => ({
            wumpusMedia: W.Z.wowMomentWumpusMedia,
            isFetchingMedia: W.Z.isFetchingWowMomentMedia,
            canPlayWowMoment: W.Z.canPlayWowMoment
        })),
        [c, d] = s.useState(!1),
        m = (0, h.vu)(),
        S = (0, h.rO)(),
        g = m > 52 || -1 === m || S,
        b = S ? 'video/mp4' : 'video/webm';
    g && !e && a && null === t && !1 === n && U(S),
        s.useEffect(() => {
            function t() {
                !e &&
                    W.Z.canPlayWowMoment &&
                    (d(!0),
                    (i = setTimeout(() => {
                        d(!1), y(!0), _.default.track(T.rMx.PREMIUM_WOW_MOMENT_VIEWED, { wow_moment_type: 'gradient_highlight' }), (0, E.H)(!1);
                    }, 2000)));
            }
            return (
                f.S.subscribe(T.CkL.PREMIUM_SUBSCRIPTION_CREATED, t),
                () => {
                    f.S.unsubscribe(T.CkL.PREMIUM_SUBSCRIPTION_CREATED, t);
                }
            );
        }, [e, g]);
    let [P, y] = s.useState(!1),
        [F, Z] = s.useState(!1),
        H = (0, M.useSpring)({
            opacity: P ? 0.2 : 0,
            config: { duration: 100 }
        }),
        C = (0, M.useSpring)(
            {
                x: F ? '100%' : '-100%',
                config: { duration: 500 }
            },
            F ? 'respect-motion-settings' : 'animate-never'
        );
    s.useEffect(() => {
        let e = -1;
        return (
            P &&
                (e = window.setTimeout(() => {
                    Z(!0);
                }, 1000)),
            () => {
                window.clearTimeout(e);
            }
        );
    }, [P]),
        s.useEffect(() => {
            let e = -1;
            return (
                F &&
                    (e = window.setTimeout(() => {
                        Z(!1), y(!1);
                    }, 1000)),
                () => {
                    window.clearTimeout(e);
                }
            );
        }, [F]);
    let O = c && null !== t,
        v = O || P;
    return (0, o.jsxs)('div', {
        className: r()({
            [I.wrapper]: !v,
            [I.activeWrapper]: v
        }),
        children: [
            O &&
                (0, o.jsx)(l.Z, {
                    autoPlay: !0,
                    className: I.videoWrapper,
                    onPlay: () => {
                        clearTimeout(i), _.default.track(T.rMx.PREMIUM_WOW_MOMENT_VIEWED, { wow_moment_type: 'wumpus_flight' });
                    },
                    onTimeUpdate: (e) => {
                        e.currentTarget.currentTime > 4 && (0, E.H)(!0);
                    },
                    onEnded: () => {
                        d(!1), (0, E.H)(!1);
                    },
                    children: (0, o.jsx)('source', {
                        src: t,
                        type: b
                    })
                }),
            (0, o.jsx)(u.animated.div, {
                className: I.gadientHighlight,
                style: H
            }),
            (0, o.jsx)(u.animated.div, {
                className: I.swipeWrapper,
                style: C,
                children: (0, o.jsxs)('svg', {
                    className: I.swipe,
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
};
