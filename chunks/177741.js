let n;
i.r(t),
    i.d(t, {
        WowMomentTypes: function () {
            return a;
        },
        prefetch: function () {
            return v;
        }
    }),
    i(315314),
    i(610138),
    i(216116),
    i(78328),
    i(815648),
    i(47120);
var a,
    o,
    c = i(735250),
    r = i(470079),
    s = i(120356),
    u = i.n(s),
    d = i(526629),
    p = i(442837),
    M = i(481060),
    m = i(570140),
    w = i(607070),
    l = i(70097),
    _ = i(626135),
    h = i(526167),
    E = i(585483),
    W = i(138464),
    T = i(438820),
    I = i(981631),
    S = i(304410),
    g = i(631274),
    f = i(422138),
    P = i(194077),
    y = i(113386),
    b = i(724688),
    x = i(48547);
async function v(e) {
    try {
        m.Z.dispatch({
            type: 'PURCHASED_ITEMS_FESTIVITY_IS_FETCHING_WOW_MOMENT_MEDIA',
            value: !0
        });
        let t = e ? g : f;
        window.matchMedia('(min-width: 1012px) and (max-width: 1980px)').matches || window.matchMedia('(min-height: 720px) and (max-height: 1408px)').matches ? (t = e ? P : y) : (window.matchMedia('(min-width: 1980px)').matches || window.matchMedia('(min-height: 1408px)').matches) && (t = e ? b : x);
        let i = await fetch(t).then(async (e) => {
            let t = await e.blob();
            return window.URL.createObjectURL(t);
        });
        m.Z.dispatch({
            type: 'PURCHASED_ITEMS_FESTIVITY_FETCH_WOW_MOMENT_MEDIA_SUCCESS',
            wumpusMedia: i
        });
    } catch (e) {
        m.Z.dispatch({
            type: 'PURCHASED_ITEMS_FESTIVITY_IS_FETCHING_WOW_MOMENT_MEDIA',
            value: !1
        });
    }
}
((o = a || (a = {})).WUMPUS_FLIGHT = 'wumpus_flight'), (o.GRADIENT_HIGHLIGHT = 'gradient_highlight');
t.default = function () {
    let e = (0, p.e7)([w.Z], () => w.Z.useReducedMotion),
        {
            wumpusMedia: t,
            isFetchingMedia: i,
            canPlayWowMoment: a
        } = (0, p.cj)([T.Z], () => ({
            wumpusMedia: T.Z.wowMomentWumpusMedia,
            isFetchingMedia: T.Z.isFetchingWowMomentMedia,
            canPlayWowMoment: T.Z.canPlayWowMoment
        })),
        [o, s] = r.useState(!1),
        m = (0, h.vu)(),
        g = (0, h.rO)(),
        f = m > 52 || -1 === m || g,
        P = g ? 'video/mp4' : 'video/webm';
    f && !e && a && null === t && !1 === i && v(g),
        r.useEffect(() => {
            function t() {
                !e &&
                    T.Z.canPlayWowMoment &&
                    (s(!0),
                    (n = setTimeout(() => {
                        s(!1), b(!0), _.default.track(I.rMx.PREMIUM_WOW_MOMENT_VIEWED, { wow_moment_type: 'gradient_highlight' });
                    }, 2000)));
            }
            return (
                E.S.subscribe(I.CkL.PREMIUM_SUBSCRIPTION_CREATED, t),
                () => {
                    E.S.unsubscribe(I.CkL.PREMIUM_SUBSCRIPTION_CREATED, t);
                }
            );
        }, [e, f]);
    let [y, b] = r.useState(!1),
        [x, U] = r.useState(!1),
        C = (0, M.useSpring)({
            opacity: y ? 0.2 : 0,
            config: { duration: 100 }
        }),
        F = (0, M.useSpring)(
            {
                x: x ? '100%' : '-100%',
                config: { duration: 500 }
            },
            x ? 'respect-motion-settings' : 'animate-never'
        );
    r.useEffect(() => {
        let e = -1;
        return (
            y &&
                (e = window.setTimeout(() => {
                    U(!0);
                }, 1000)),
            () => {
                window.clearTimeout(e);
            }
        );
    }, [y]),
        r.useEffect(() => {
            let e = -1;
            return (
                x &&
                    (e = window.setTimeout(() => {
                        U(!1), b(!1);
                    }, 1000)),
                () => {
                    window.clearTimeout(e);
                }
            );
        }, [x]);
    let H = o && null !== t,
        O = H || y;
    return (0, c.jsxs)('div', {
        className: u()({
            [S.wrapper]: !O,
            [S.activeWrapper]: O
        }),
        children: [
            H &&
                (0, c.jsx)(l.Z, {
                    autoPlay: !0,
                    className: S.videoWrapper,
                    onPlay: () => {
                        clearTimeout(n), _.default.track(I.rMx.PREMIUM_WOW_MOMENT_VIEWED, { wow_moment_type: 'wumpus_flight' });
                    },
                    onTimeUpdate: (e) => {
                        e.currentTarget.currentTime > 4 && (0, W.H)(!0);
                    },
                    onEnded: () => {
                        s(!1);
                    },
                    children: (0, c.jsx)('source', {
                        src: t,
                        type: P
                    })
                }),
            (0, c.jsx)(d.animated.div, {
                className: S.gadientHighlight,
                style: C
            }),
            (0, c.jsx)(d.animated.div, {
                className: S.swipeWrapper,
                style: F,
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
};
