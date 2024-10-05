n(47120), n(411104);
var i = n(735250),
    l = n(470079),
    r = n(392711),
    a = n.n(r),
    s = n(481060),
    o = n(65205),
    c = n(689938),
    u = n(557342);
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
let _ = (e, t) => {
    let n = Math.abs(t.x),
        i = (180 / Math.PI) * Math.atan2(Math.abs(t.y), n),
        l = e / 2 - 28.8;
    return {
        x: Math.max(l * Math.cos((2 * Math.PI * i) / 360), 0),
        y: Math.max(l * Math.sin((2 * Math.PI * i) / 360), 0)
    };
};
t.Z = l.memo(function (e) {
    let { wheelWidth: t, wheelHeight: n, itemWidth: m, itemHeight: g, showDeadZoneIndicator: C, activeItem: I, onItemSelect: E, onItemAction: N, interactive: S = !0, children: x } = e,
        v = l.useRef(null),
        T = l.useRef([]),
        Z = l.useRef(!1),
        A = l.useRef(null),
        [b, R] = l.useState(0),
        [M, L] = l.useState({
            x: 0,
            y: 0
        }),
        P = Math.abs(M.x) + Math.abs(M.y) > 0,
        O = l.useMemo(() => a().chunk(x, p), [x]),
        y = l.useCallback(
            (e, t) => {
                null == T.current[b] ? (T.current[b] = []) : (T.current[b][t] = e);
            },
            [b]
        ),
        D = l.useCallback(
            (e, t) => {
                (A.current = t), E(p * e + t);
            },
            [E]
        ),
        j = l.useCallback(() => {
            (A.current = null), E(null);
        }, [E]),
        w = l.useCallback(
            (e) => {
                j(), (Z.current = e);
            },
            [j]
        ),
        U = l.useCallback((e, t, n) => {
            if (Z.current) {
                L({
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
                a = _(n, i),
                s = l ? Math.max(i.x, -a.x) : Math.min(i.x, a.x);
            L({
                x: s / 2,
                y: (r ? Math.max(i.y, -a.y) : Math.min(i.y, a.y)) / 2
            });
        }, []),
        G = l.useCallback(
            (e) => {
                if (null != A.current) e.preventDefault(), e.stopPropagation(), null == N || N(p * b + A.current);
            },
            [N, b]
        ),
        k = l.useMemo(
            () =>
                (0, r.throttle)((e) => {
                    if (null == v.current) return;
                    let i = v.current.getBoundingClientRect(),
                        l = i.left + i.width / 2,
                        r = {
                            x: l,
                            y: i.top + i.height / 2
                        },
                        a = {
                            x: e.clientX,
                            y: e.clientY
                        };
                    if ((U(a, r, Math.max(t, n)), Z.current)) {
                        null != I && j();
                        return;
                    }
                    let s = (0, o.ld)(r, a, Math.max(t, n));
                    for (let e = 0; e < T.current[b].length; e++) {
                        let t = T.current[b][e];
                        if (null == t) continue;
                        let n = t.getBoundingClientRect();
                        if ((0, o.Vr)(r, s, n)) {
                            D(b, e);
                            return;
                        }
                    }
                    j();
                }, 16),
            [I, U, j, D, b, n, t]
        ),
        B = l.useCallback(
            (e) => {
                if (!S) return;
                let t = b + (e.deltaY > 0 ? 1 : -1);
                t >= 0 && t < O.length && (null != A.current && (O[t].length > A.current ? D(t, A.current) : j()), R(t));
            },
            [S, b, O, D, j]
        ),
        V = l.useMemo(
            () =>
                O[b].map((e, l) => {
                    let r = h[l];
                    if (null == r) throw Error('Too many items supplied '.concat(x.length, ' expected max of ').concat(h.length));
                    let a = f(r.x, t, m),
                        s = f(r.y, n, g);
                    return (0, i.jsx)(
                        'div',
                        {
                            ref: (e) => y(e, l),
                            className: u.chatWheelItem,
                            style: {
                                left: a,
                                top: s,
                                width: m,
                                height: g
                            },
                            children: e
                        },
                        l
                    );
                }),
            [O, b, t, m, n, g, x.length, y]
        );
    return (0, i.jsx)(s.Clickable, {
        className: u.chatWheelMouseInput,
        onMouseMove: k,
        onWheel: B,
        onClick: G,
        children: (0, i.jsxs)('div', {
            ref: v,
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
                                C &&
                                    (0, i.jsx)('circle', {
                                        className: u.chatWheelDeadZone,
                                        onMouseEnter: () => w(!0),
                                        onMouseLeave: () => w(!1),
                                        cx: 144,
                                        cy: 144,
                                        r: 28.8
                                    }),
                                P &&
                                    (0, i.jsx)('circle', {
                                        className: u.chatWheelCenter,
                                        cx: 144 + M.x,
                                        cy: 144 + M.y,
                                        r: 28.8
                                    })
                            ]
                        }),
                        C &&
                            (0, i.jsx)('circle', {
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
                (0, i.jsxs)('div', {
                    className: u.innerContent,
                    children: [
                        C && (0, i.jsx)(d, { className: u.chatWheelDeadZoneIcon }),
                        S && O.length > 1
                            ? (0, i.jsx)('div', {
                                  className: u.paginationHint,
                                  children: c.Z.Messages.CHAT_WHEEL_PAGINATION_HINT
                              })
                            : null
                    ]
                }),
                V
            ]
        })
    });
});
