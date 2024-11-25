n(47120), n(411104);
var l = n(200651),
    s = n(192379),
    r = n(392711),
    o = n.n(r),
    i = n(481060),
    a = n(65205),
    c = n(388032),
    u = n(390317);
function d(e) {
    let { className: t } = e;
    return (0, l.jsxs)('svg', {
        className: t,
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 48 48',
        children: [
            (0, l.jsx)('g', {
                filter: 'url(#a)',
                children: (0, l.jsx)('path', {
                    d: 'M30.4 8 24 14.4 17.6 8 16 9.6l6.4 6.4-6.4 6.4 1.6 1.6 6.4-6.4 6.4 6.4 1.6-1.6-6.4-6.4L32 9.6 30.4 8Z',
                    fill: 'currentColor'
                })
            }),
            (0, l.jsx)('defs', {
                children: (0, l.jsxs)('filter', {
                    id: 'a',
                    x: '0',
                    y: '0',
                    width: '48',
                    height: '48',
                    filterUnits: 'userSpaceOnUse',
                    colorInterpolationFilters: 'sRGB',
                    children: [
                        (0, l.jsx)('feFlood', {
                            floodOpacity: '0',
                            result: 'BackgroundImageFix'
                        }),
                        (0, l.jsx)('feColorMatrix', {
                            in: 'SourceAlpha',
                            values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0',
                            result: 'hardAlpha'
                        }),
                        (0, l.jsx)('feOffset', { dy: '8' }),
                        (0, l.jsx)('feGaussianBlur', { stdDeviation: '8' }),
                        (0, l.jsx)('feColorMatrix', { values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0' }),
                        (0, l.jsx)('feBlend', {
                            in2: 'BackgroundImageFix',
                            result: 'effect1_dropShadow_605_72103'
                        }),
                        (0, l.jsx)('feBlend', {
                            in: 'SourceGraphic',
                            in2: 'effect1_dropShadow_605_72103',
                            result: 'shape'
                        })
                    ]
                })
            })
        ]
    });
}
let h = [
        {
            x: 0.5,
            y: 0.05
        },
        {
            x: 0.95,
            y: 0.2
        },
        {
            x: 1,
            y: 0.5
        },
        {
            x: 0.95,
            y: 0.8
        },
        {
            x: 0.5,
            y: 0.95
        },
        {
            x: 0.05,
            y: 0.8
        },
        {
            x: 0,
            y: 0.5
        },
        {
            x: 0.05,
            y: 0.2
        }
    ],
    x = h.length;
function g(e, t, n) {
    let l = e * t;
    return e > 0.5 ? l - n : e < 0.5 ? l : l - n / 2;
}
let N = (e, t) => {
    let n = Math.abs(t.x),
        l = (180 / Math.PI) * Math.atan2(Math.abs(t.y), n),
        s = e / 2 - 28.8;
    return {
        x: Math.max(s * Math.cos((2 * Math.PI * l) / 360), 0),
        y: Math.max(s * Math.sin((2 * Math.PI * l) / 360), 0)
    };
};
t.Z = s.memo(function (e) {
    let { wheelWidth: t, wheelHeight: n, itemWidth: C, itemHeight: f, showDeadZoneIndicator: p, activeItem: E, onItemSelect: I, onItemAction: T, interactive: m = !0, children: v } = e,
        O = s.useRef(null),
        y = s.useRef([]),
        j = s.useRef(!1),
        _ = s.useRef(null),
        [S, R] = s.useState(0),
        [b, A] = s.useState({
            x: 0,
            y: 0
        }),
        Z = Math.abs(b.x) + Math.abs(b.y) > 0,
        P = s.useMemo(() => o().chunk(v, x), [v]),
        k = s.useCallback(
            (e, t) => {
                null == y.current[S] ? (y.current[S] = []) : (y.current[S][t] = e);
            },
            [S]
        ),
        D = s.useCallback(
            (e, t) => {
                (_.current = t), I(x * e + t);
            },
            [I]
        ),
        B = s.useCallback(() => {
            (_.current = null), I(null);
        }, [I]),
        w = s.useCallback(
            (e) => {
                B(), (j.current = e);
            },
            [B]
        ),
        M = s.useCallback((e, t, n) => {
            if (j.current) {
                A({
                    x: 0,
                    y: 0
                });
                return;
            }
            let l = {
                    x: e.x - t.x,
                    y: e.y - t.y
                },
                s = l.x < 0,
                r = l.y < 0,
                o = N(n, l),
                i = s ? Math.max(l.x, -o.x) : Math.min(l.x, o.x);
            A({
                x: i / 2,
                y: (r ? Math.max(l.y, -o.y) : Math.min(l.y, o.y)) / 2
            });
        }, []),
        L = s.useCallback(
            (e) => {
                if (null != _.current) e.preventDefault(), e.stopPropagation(), null == T || T(x * S + _.current);
            },
            [T, S]
        ),
        G = s.useMemo(
            () =>
                (0, r.throttle)((e) => {
                    if (null == O.current) return;
                    let l = O.current.getBoundingClientRect(),
                        s = l.left + l.width / 2,
                        r = {
                            x: s,
                            y: l.top + l.height / 2
                        },
                        o = {
                            x: e.clientX,
                            y: e.clientY
                        };
                    if ((M(o, r, Math.max(t, n)), j.current)) {
                        null != E && B();
                        return;
                    }
                    let i = (0, a.ld)(r, o, Math.max(t, n));
                    for (let e = 0; e < y.current[S].length; e++) {
                        let t = y.current[S][e];
                        if (null == t) continue;
                        let n = t.getBoundingClientRect();
                        if ((0, a.Vr)(r, i, n)) {
                            D(S, e);
                            return;
                        }
                    }
                    B();
                }, 16),
            [E, M, B, D, S, n, t]
        ),
        V = s.useCallback(
            (e) => {
                if (!m) return;
                let t = S + (e.deltaY > 0 ? 1 : -1);
                t >= 0 && t < P.length && (null != _.current && (P[t].length > _.current ? D(t, _.current) : B()), R(t));
            },
            [m, S, P, D, B]
        ),
        U = s.useMemo(
            () =>
                P[S].map((e, s) => {
                    let r = h[s];
                    if (null == r) throw Error('Too many items supplied '.concat(v.length, ' expected max of ').concat(h.length));
                    let o = g(r.x, t, C),
                        i = g(r.y, n, f);
                    return (0, l.jsx)(
                        'div',
                        {
                            ref: (e) => k(e, s),
                            className: u.chatWheelItem,
                            style: {
                                left: o,
                                top: i,
                                width: C,
                                height: f
                            },
                            children: e
                        },
                        s
                    );
                }),
            [P, S, t, C, n, f, v.length, k]
        );
    return (0, l.jsx)(i.Clickable, {
        className: u.chatWheelMouseInput,
        onMouseMove: G,
        onWheel: V,
        onClick: L,
        children: (0, l.jsxs)('div', {
            ref: O,
            className: u.chatWheel,
            style: {
                width: t,
                height: n
            },
            children: [
                (0, l.jsxs)('svg', {
                    className: u.chatWheelBackground,
                    viewBox: '0 0 288 288',
                    xmlns: 'http://www.w3.org/2000/svg',
                    children: [
                        (0, l.jsxs)('filter', {
                            id: 'soundboard-wheel-background-shadow',
                            x: '0',
                            y: '0',
                            width: '288',
                            height: '288',
                            filterUnits: 'userSpaceOnUse',
                            colorInterpolationFilters: 'sRGB',
                            children: [
                                (0, l.jsx)('feFlood', {
                                    floodOpacity: '0',
                                    result: 'BackgroundImageFix'
                                }),
                                (0, l.jsx)('feColorMatrix', {
                                    in: 'SourceAlpha',
                                    values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0',
                                    result: 'hardAlpha'
                                }),
                                (0, l.jsx)('feOffset', { dy: '8' }),
                                (0, l.jsx)('feGaussianBlur', { stdDeviation: '8' }),
                                (0, l.jsx)('feColorMatrix', { values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0' }),
                                (0, l.jsx)('feBlend', {
                                    in2: 'BackgroundImageFix',
                                    result: 'effect1_dropShadow_489_60382'
                                }),
                                (0, l.jsx)('feBlend', {
                                    in: 'SourceGraphic',
                                    in2: 'effect1_dropShadow_489_60382',
                                    result: 'shape'
                                })
                            ]
                        }),
                        (0, l.jsxs)('g', {
                            filter: 'url(#soundboard-wheel-background-shadow)',
                            children: [
                                (0, l.jsx)('circle', {
                                    className: u.chatWheelBackground,
                                    cx: '144',
                                    cy: '144',
                                    r: '103.68',
                                    strokeWidth: '40.32'
                                }),
                                p &&
                                    (0, l.jsx)('circle', {
                                        className: u.chatWheelDeadZone,
                                        onMouseEnter: () => w(!0),
                                        onMouseLeave: () => w(!1),
                                        cx: 144,
                                        cy: 144,
                                        r: 28.8
                                    }),
                                Z &&
                                    (0, l.jsx)('circle', {
                                        className: u.chatWheelCenter,
                                        cx: 144 + b.x,
                                        cy: 144 + b.y,
                                        r: 28.8
                                    })
                            ]
                        }),
                        p &&
                            (0, l.jsx)('circle', {
                                className: u.chatWheelDeadZone,
                                onMouseEnter: () => w(!0),
                                onMouseLeave: () => w(!1),
                                cx: 144,
                                cy: 144,
                                r: 28.8,
                                stroke: 'none'
                            })
                    ]
                }),
                (0, l.jsxs)('div', {
                    className: u.innerContent,
                    children: [
                        p && (0, l.jsx)(d, { className: u.chatWheelDeadZoneIcon }),
                        m && P.length > 1
                            ? (0, l.jsx)('div', {
                                  className: u.paginationHint,
                                  children: c.intl.string(c.t['Xy+S09'])
                              })
                            : null
                    ]
                }),
                U
            ]
        })
    });
});
