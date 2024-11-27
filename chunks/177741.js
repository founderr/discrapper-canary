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
    E = n(960048),
    W = n(138464),
    T = n(438820),
    I = n(981631),
    S = n(236029),
    g = n(233975),
    b = n(656402),
    P = n(683984),
    y = n(347010),
    Z = n(713669),
    F = n(471517);
async function U(e) {
    try {
        m.Z.dispatch({ type: 'PURCHASED_ITEMS_FESTIVITY_IS_FETCHING_WOW_MOMENT_MEDIA' });
        let t = e ? g.Z : b.Z;
        window.matchMedia('(min-width: 1012px) and (max-width: 1980px)').matches || window.matchMedia('(min-height: 720px) and (max-height: 1408px)').matches ? (t = e ? P.Z : y.Z) : (window.matchMedia('(min-width: 1980px)').matches || window.matchMedia('(min-height: 1408px)').matches) && (t = e ? Z.Z : F.Z);
        let n = await fetch(t).then(async (e) => {
            let t = await e.blob();
            return window.URL.createObjectURL(t);
        });
        m.Z.dispatch({
            type: 'PURCHASED_ITEMS_FESTIVITY_FETCH_WOW_MOMENT_MEDIA_SUCCESS',
            wumpusMedia: n
        });
    } catch (e) {
        E.Z.captureException(e), m.Z.dispatch({ type: 'PURCHASED_ITEMS_FESTIVITY_FETCH_WOW_MOMENT_MEDIA_FAILURE' });
    }
}
((c = a || (a = {})).WUMPUS_FLIGHT = 'wumpus_flight'), (c.GRADIENT_HIGHLIGHT = 'gradient_highlight');
t.default = function () {
    let e = (0, p.e7)([w.Z], () => w.Z.useReducedMotion),
        {
            wumpusMedia: t,
            isFetchingMedia: n,
            canPlayWowMoment: a
        } = (0, p.cj)([T.Z], () => ({
            wumpusMedia: T.Z.wowMomentWumpusMedia,
            isFetchingMedia: T.Z.isFetchingWowMomentMedia,
            canPlayWowMoment: T.Z.canPlayWowMoment
        })),
        [c, d] = s.useState(!1),
        m = (0, h.vu)(),
        E = (0, h.rO)(),
        g = m > 52 || -1 === m || E,
        b = E ? 'video/mp4' : 'video/webm';
    g && !e && a && null === t && !1 === n && U(E),
        s.useEffect(() => {
            function t() {
                !e &&
                    T.Z.canPlayWowMoment &&
                    (d(!0),
                    (i = setTimeout(() => {
                        d(!1), y(!0), _.default.track(I.rMx.PREMIUM_WOW_MOMENT_VIEWED, { wow_moment_type: 'gradient_highlight' }), (0, W.H)(!1);
                    }, 2000)));
            }
            return (
                f.S.subscribe(I.CkL.PREMIUM_SUBSCRIPTION_CREATED, t),
                () => {
                    f.S.unsubscribe(I.CkL.PREMIUM_SUBSCRIPTION_CREATED, t);
                }
            );
        }, [e, g]);
    let [P, y] = s.useState(!1),
        [Z, F] = s.useState(!1),
        H = (0, M.useSpring)({
            opacity: P ? 0.2 : 0,
            config: { duration: 100 }
        }),
        C = (0, M.useSpring)(
            {
                x: Z ? '100%' : '-100%',
                config: { duration: 500 }
            },
            Z ? 'respect-motion-settings' : 'animate-never'
        );
    s.useEffect(() => {
        let e = -1;
        return (
            P &&
                (e = window.setTimeout(() => {
                    F(!0);
                }, 1000)),
            () => {
                window.clearTimeout(e);
            }
        );
    }, [P]),
        s.useEffect(() => {
            let e = -1;
            return (
                Z &&
                    (e = window.setTimeout(() => {
                        F(!1), y(!1);
                    }, 1000)),
                () => {
                    window.clearTimeout(e);
                }
            );
        }, [Z]);
    let O = c && null !== t,
        v = O || P;
    return (0, o.jsxs)('div', {
        className: r()({
            [S.wrapper]: !v,
            [S.activeWrapper]: v
        }),
        children: [
            O &&
                (0, o.jsx)(l.Z, {
                    autoPlay: !0,
                    className: S.videoWrapper,
                    onPlay: () => {
                        clearTimeout(i), _.default.track(I.rMx.PREMIUM_WOW_MOMENT_VIEWED, { wow_moment_type: 'wumpus_flight' });
                    },
                    onTimeUpdate: (e) => {
                        e.currentTarget.currentTime > 4 && (0, W.H)(!0);
                    },
                    onEnded: () => {
                        d(!1), (0, W.H)(!1);
                    },
                    children: (0, o.jsx)('source', {
                        src: t,
                        type: b
                    })
                }),
            (0, o.jsx)(u.animated.div, {
                className: S.gadientHighlight,
                style: H
            }),
            (0, o.jsx)(u.animated.div, {
                className: S.swipeWrapper,
                style: C,
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
};
