let i;
n.r(t),
    n.d(t, {
        WowMomentTypes: function () {
            return a;
        },
        prefetch: function () {
            return v;
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
    o = n(735250),
    s = n(470079),
    d = n(120356),
    r = n.n(d),
    u = n(526629),
    p = n(442837),
    m = n(481060),
    M = n(570140),
    w = n(607070),
    l = n(70097),
    _ = n(626135),
    h = n(526167),
    f = n(585483),
    E = n(138464),
    W = n(438820),
    T = n(981631),
    I = n(304410),
    S = n(233975),
    b = n(656402),
    g = n(683984),
    P = n(347010),
    y = n(713669),
    Z = n(471517);
async function v(e) {
    try {
        M.Z.dispatch({
            type: 'PURCHASED_ITEMS_FESTIVITY_IS_FETCHING_WOW_MOMENT_MEDIA',
            value: !0
        });
        let t = e ? S.Z : b.Z;
        window.matchMedia('(min-width: 1012px) and (max-width: 1980px)').matches || window.matchMedia('(min-height: 720px) and (max-height: 1408px)').matches ? (t = e ? g.Z : P.Z) : (window.matchMedia('(min-width: 1980px)').matches || window.matchMedia('(min-height: 1408px)').matches) && (t = e ? y.Z : Z.Z);
        let n = await fetch(t).then(async (e) => {
            let t = await e.blob();
            return window.URL.createObjectURL(t);
        });
        M.Z.dispatch({
            type: 'PURCHASED_ITEMS_FESTIVITY_FETCH_WOW_MOMENT_MEDIA_SUCCESS',
            wumpusMedia: n
        });
    } catch (e) {
        M.Z.dispatch({
            type: 'PURCHASED_ITEMS_FESTIVITY_IS_FETCHING_WOW_MOMENT_MEDIA',
            value: !1
        });
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
        M = (0, h.vu)(),
        S = (0, h.rO)(),
        b = M > 52 || -1 === M || S,
        g = S ? 'video/mp4' : 'video/webm';
    b && !e && a && null === t && !1 === n && v(S),
        s.useEffect(() => {
            function t() {
                !e &&
                    W.Z.canPlayWowMoment &&
                    (d(!0),
                    (i = setTimeout(() => {
                        d(!1), y(!0), _.default.track(T.rMx.PREMIUM_WOW_MOMENT_VIEWED, { wow_moment_type: 'gradient_highlight' });
                    }, 2000)));
            }
            return (
                f.S.subscribe(T.CkL.PREMIUM_SUBSCRIPTION_CREATED, t),
                () => {
                    f.S.unsubscribe(T.CkL.PREMIUM_SUBSCRIPTION_CREATED, t);
                }
            );
        }, [e, b]);
    let [P, y] = s.useState(!1),
        [Z, U] = s.useState(!1),
        C = (0, m.useSpring)({
            opacity: P ? 0.2 : 0,
            config: { duration: 100 }
        }),
        F = (0, m.useSpring)(
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
                    U(!0);
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
                        U(!1), y(!1);
                    }, 1000)),
                () => {
                    window.clearTimeout(e);
                }
            );
        }, [Z]);
    let H = c && null !== t,
        O = H || P;
    return (0, o.jsxs)('div', {
        className: r()({
            [I.wrapper]: !O,
            [I.activeWrapper]: O
        }),
        children: [
            H &&
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
                        d(!1);
                    },
                    children: (0, o.jsx)('source', {
                        src: t,
                        type: g
                    })
                }),
            (0, o.jsx)(u.animated.div, {
                className: I.gadientHighlight,
                style: C
            }),
            (0, o.jsx)(u.animated.div, {
                className: I.swipeWrapper,
                style: F,
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
