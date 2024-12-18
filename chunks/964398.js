n(47120), n(411104);
var l = n(200651),
    r = n(192379),
    s = n(392711),
    i = n.n(s),
    o = n(481060),
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
        r = e / 2 - 28.8;
    return {
        x: Math.max(r * Math.cos((2 * Math.PI * l) / 360), 0),
        y: Math.max(r * Math.sin((2 * Math.PI * l) / 360), 0)
    };
};
t.Z = r.memo(function (e) {
    let { wheelWidth: t, wheelHeight: n, itemWidth: C, itemHeight: f, showDeadZoneIndicator: p, activeItem: m, onItemSelect: E, onItemAction: T, interactive: I = !0, children: v } = e,
        O = r.useRef(null),
        j = r.useRef([]),
        y = r.useRef(!1),
        _ = r.useRef(null),
        [b, S] = r.useState(0),
        [R, A] = r.useState({
            x: 0,
            y: 0
        }),
        Z = Math.abs(R.x) + Math.abs(R.y) > 0,
        P = r.useMemo(() => i().chunk(v, x), [v]),
        k = r.useCallback(
            (e, t) => {
                null == j.current[b] ? (j.current[b] = []) : (j.current[b][t] = e);
            },
            [b]
        ),
        D = r.useCallback(
            (e, t) => {
                (_.current = t), E(x * e + t);
            },
            [E]
        ),
        B = r.useCallback(() => {
            (_.current = null), E(null);
        }, [E]),
        w = r.useCallback(
            (e) => {
                B(), (y.current = e);
            },
            [B]
        ),
        M = r.useCallback((e, t, n) => {
            if (y.current) {
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
                r = l.x < 0,
                s = l.y < 0,
                i = N(n, l),
                o = r ? Math.max(l.x, -i.x) : Math.min(l.x, i.x);
            A({
                x: o / 2,
                y: (s ? Math.max(l.y, -i.y) : Math.min(l.y, i.y)) / 2
            });
        }, []),
        L = r.useCallback(
            (e) => {
                if (null != _.current) e.preventDefault(), e.stopPropagation(), null == T || T(x * b + _.current);
            },
            [T, b]
        ),
        G = r.useMemo(
            () =>
                (0, s.throttle)((e) => {
                    if (null == O.current) return;
                    let l = O.current.getBoundingClientRect(),
                        r = l.left + l.width / 2,
                        s = {
                            x: r,
                            y: l.top + l.height / 2
                        },
                        i = {
                            x: e.clientX,
                            y: e.clientY
                        };
                    if ((M(i, s, Math.max(t, n)), y.current)) {
                        null != m && B();
                        return;
                    }
                    let o = (0, a.ld)(s, i, Math.max(t, n));
                    for (let e = 0; e < j.current[b].length; e++) {
                        let t = j.current[b][e];
                        if (null == t) continue;
                        let n = t.getBoundingClientRect();
                        if ((0, a.Vr)(s, o, n)) {
                            D(b, e);
                            return;
                        }
                    }
                    B();
                }, 16),
            [m, M, B, D, b, n, t]
        ),
        V = r.useCallback(
            (e) => {
                if (!I) return;
                let t = b + (e.deltaY > 0 ? 1 : -1);
                t >= 0 && t < P.length && (null != _.current && (P[t].length > _.current ? D(t, _.current) : B()), S(t));
            },
            [I, b, P, D, B]
        ),
        U = r.useMemo(
            () =>
                P[b].map((e, r) => {
                    let s = h[r];
                    if (null == s) throw Error('Too many items supplied '.concat(v.length, ' expected max of ').concat(h.length));
                    let i = g(s.x, t, C),
                        o = g(s.y, n, f);
                    return (0, l.jsx)(
                        'div',
                        {
                            ref: (e) => k(e, r),
                            className: u.chatWheelItem,
                            style: {
                                left: i,
                                top: o,
                                width: C,
                                height: f
                            },
                            children: e
                        },
                        r
                    );
                }),
            [P, b, t, C, n, f, v.length, k]
        );
    return (0, l.jsx)(o.Clickable, {
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
                                        cx: 144 + R.x,
                                        cy: 144 + R.y,
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
                        I && P.length > 1
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
