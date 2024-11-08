n(47120), n(411104);
var i = n(200651),
    l = n(192379),
    r = n(392711),
    a = n.n(r),
    o = n(481060),
    s = n(65205),
    c = n(388032),
    u = n(762778);
function d(e) {
    let { className: t } = e;
    return (0, i.jsxs)('svg', {
        className: t,
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 48 48',
        children: [
            (0, i.jsx)('g', {
                filter: 'url(#a)',
                children: (0, i.jsx)('path', {
                    d: 'M30.4 8 24 14.4 17.6 8 16 9.6l6.4 6.4-6.4 6.4 1.6 1.6 6.4-6.4 6.4 6.4 1.6-1.6-6.4-6.4L32 9.6 30.4 8Z',
                    fill: 'currentColor'
                })
            }),
            (0, i.jsx)('defs', {
                children: (0, i.jsxs)('filter', {
                    id: 'a',
                    x: '0',
                    y: '0',
                    width: '48',
                    height: '48',
                    filterUnits: 'userSpaceOnUse',
                    colorInterpolationFilters: 'sRGB',
                    children: [
                        (0, i.jsx)('feFlood', {
                            floodOpacity: '0',
                            result: 'BackgroundImageFix'
                        }),
                        (0, i.jsx)('feColorMatrix', {
                            in: 'SourceAlpha',
                            values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0',
                            result: 'hardAlpha'
                        }),
                        (0, i.jsx)('feOffset', { dy: '8' }),
                        (0, i.jsx)('feGaussianBlur', { stdDeviation: '8' }),
                        (0, i.jsx)('feColorMatrix', { values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0' }),
                        (0, i.jsx)('feBlend', {
                            in2: 'BackgroundImageFix',
                            result: 'effect1_dropShadow_605_72103'
                        }),
                        (0, i.jsx)('feBlend', {
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
    p = h.length;
function f(e, t, n) {
    let i = e * t;
    return e > 0.5 ? i - n : e < 0.5 ? i : i - n / 2;
}
let m = (e, t) => {
    let n = Math.abs(t.x),
        i = (180 / Math.PI) * Math.atan2(Math.abs(t.y), n),
        l = e / 2 - 28.8;
    return {
        x: Math.max(l * Math.cos((2 * Math.PI * i) / 360), 0),
        y: Math.max(l * Math.sin((2 * Math.PI * i) / 360), 0)
    };
};
t.Z = l.memo(function (e) {
    let { wheelWidth: t, wheelHeight: n, itemWidth: g, itemHeight: C, showDeadZoneIndicator: _, activeItem: v, onItemSelect: x, onItemAction: I, interactive: b = !0, children: S } = e,
        Z = l.useRef(null),
        N = l.useRef([]),
        E = l.useRef(!1),
        y = l.useRef(null),
        [j, T] = l.useState(0),
        [P, A] = l.useState({
            x: 0,
            y: 0
        }),
        M = Math.abs(P.x) + Math.abs(P.y) > 0,
        w = l.useMemo(() => a().chunk(S, p), [S]),
        L = l.useCallback(
            (e, t) => {
                null == N.current[j] ? (N.current[j] = []) : (N.current[j][t] = e);
            },
            [j]
        ),
        R = l.useCallback(
            (e, t) => {
                (y.current = t), x(p * e + t);
            },
            [x]
        ),
        D = l.useCallback(() => {
            (y.current = null), x(null);
        }, [x]),
        O = l.useCallback(
            (e) => {
                D(), (E.current = e);
            },
            [D]
        ),
        k = l.useCallback((e, t, n) => {
            if (E.current) {
                A({
                    x: 0,
                    y: 0
                });
                return;
            }
            let i = {
                    x: e.x - t.x,
                    y: e.y - t.y
                },
                l = i.x < 0,
                r = i.y < 0,
                a = m(n, i),
                o = l ? Math.max(i.x, -a.x) : Math.min(i.x, a.x);
            A({
                x: o / 2,
                y: (r ? Math.max(i.y, -a.y) : Math.min(i.y, a.y)) / 2
            });
        }, []),
        U = l.useCallback(
            (e) => {
                if (null != y.current) e.preventDefault(), e.stopPropagation(), null == I || I(p * j + y.current);
            },
            [I, j]
        ),
        G = l.useMemo(
            () =>
                (0, r.throttle)((e) => {
                    if (null == Z.current) return;
                    let i = Z.current.getBoundingClientRect(),
                        l = i.left + i.width / 2,
                        r = {
                            x: l,
                            y: i.top + i.height / 2
                        },
                        a = {
                            x: e.clientX,
                            y: e.clientY
                        };
                    if ((k(a, r, Math.max(t, n)), E.current)) {
                        null != v && D();
                        return;
                    }
                    let o = (0, s.ld)(r, a, Math.max(t, n));
                    for (let e = 0; e < N.current[j].length; e++) {
                        let t = N.current[j][e];
                        if (null == t) continue;
                        let n = t.getBoundingClientRect();
                        if ((0, s.Vr)(r, o, n)) {
                            R(j, e);
                            return;
                        }
                    }
                    D();
                }, 16),
            [v, k, D, R, j, n, t]
        ),
        B = l.useCallback(
            (e) => {
                if (!b) return;
                let t = j + (e.deltaY > 0 ? 1 : -1);
                t >= 0 && t < w.length && (null != y.current && (w[t].length > y.current ? R(t, y.current) : D()), T(t));
            },
            [b, j, w, R, D]
        ),
        V = l.useMemo(
            () =>
                w[j].map((e, l) => {
                    let r = h[l];
                    if (null == r) throw Error('Too many items supplied '.concat(S.length, ' expected max of ').concat(h.length));
                    let a = f(r.x, t, g),
                        o = f(r.y, n, C);
                    return (0, i.jsx)(
                        'div',
                        {
                            ref: (e) => L(e, l),
                            className: u.chatWheelItem,
                            style: {
                                left: a,
                                top: o,
                                width: g,
                                height: C
                            },
                            children: e
                        },
                        l
                    );
                }),
            [w, j, t, g, n, C, S.length, L]
        );
    return (0, i.jsx)(o.Clickable, {
        className: u.chatWheelMouseInput,
        onMouseMove: G,
        onWheel: B,
        onClick: U,
        children: (0, i.jsxs)('div', {
            ref: Z,
            className: u.chatWheel,
            style: {
                width: t,
                height: n
            },
            children: [
                (0, i.jsxs)('svg', {
                    className: u.chatWheelBackground,
                    viewBox: '0 0 288 288',
                    xmlns: 'http://www.w3.org/2000/svg',
                    children: [
                        (0, i.jsxs)('filter', {
                            id: 'soundboard-wheel-background-shadow',
                            x: '0',
                            y: '0',
                            width: '288',
                            height: '288',
                            filterUnits: 'userSpaceOnUse',
                            colorInterpolationFilters: 'sRGB',
                            children: [
                                (0, i.jsx)('feFlood', {
                                    floodOpacity: '0',
                                    result: 'BackgroundImageFix'
                                }),
                                (0, i.jsx)('feColorMatrix', {
                                    in: 'SourceAlpha',
                                    values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0',
                                    result: 'hardAlpha'
                                }),
                                (0, i.jsx)('feOffset', { dy: '8' }),
                                (0, i.jsx)('feGaussianBlur', { stdDeviation: '8' }),
                                (0, i.jsx)('feColorMatrix', { values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0' }),
                                (0, i.jsx)('feBlend', {
                                    in2: 'BackgroundImageFix',
                                    result: 'effect1_dropShadow_489_60382'
                                }),
                                (0, i.jsx)('feBlend', {
                                    in: 'SourceGraphic',
                                    in2: 'effect1_dropShadow_489_60382',
                                    result: 'shape'
                                })
                            ]
                        }),
                        (0, i.jsxs)('g', {
                            filter: 'url(#soundboard-wheel-background-shadow)',
                            children: [
                                (0, i.jsx)('circle', {
                                    className: u.chatWheelBackground,
                                    cx: '144',
                                    cy: '144',
                                    r: '103.68',
                                    strokeWidth: '40.32'
                                }),
                                _ &&
                                    (0, i.jsx)('circle', {
                                        className: u.chatWheelDeadZone,
                                        onMouseEnter: () => O(!0),
                                        onMouseLeave: () => O(!1),
                                        cx: 144,
                                        cy: 144,
                                        r: 28.8
                                    }),
                                M &&
                                    (0, i.jsx)('circle', {
                                        className: u.chatWheelCenter,
                                        cx: 144 + P.x,
                                        cy: 144 + P.y,
                                        r: 28.8
                                    })
                            ]
                        }),
                        _ &&
                            (0, i.jsx)('circle', {
                                className: u.chatWheelDeadZone,
                                onMouseEnter: () => O(!0),
                                onMouseLeave: () => O(!1),
                                cx: 144,
                                cy: 144,
                                r: 28.8,
                                stroke: 'none'
                            })
                    ]
                }),
                (0, i.jsxs)('div', {
                    className: u.innerContent,
                    children: [
                        _ && (0, i.jsx)(d, { className: u.chatWheelDeadZoneIcon }),
                        b && w.length > 1
                            ? (0, i.jsx)('div', {
                                  className: u.paginationHint,
                                  children: c.intl.string(c.t['Xy+S09'])
                              })
                            : null
                    ]
                }),
                V
            ]
        })
    });
});
