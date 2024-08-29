n.d(t, {
    Z: function () {
        return S;
    }
}),
    n(47120),
    n(724458),
    n(757143),
    n(390547),
    n(653041);
var r = n(735250),
    a = n(470079),
    l = n(688619),
    i = n.n(l),
    o = n(221762),
    c = n.n(o),
    s = n(392711),
    u = n.n(s),
    d = n(470716),
    h = n(433517),
    m = n(203165),
    x = n(481060),
    f = n(410030),
    p = n(246992),
    g = n(535271);
function b(e, t) {
    return !t && (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
}
function v() {
    let e = b(["\n    import {defineColorTokens, themedToken} from '../tools/define';\n\n    const semanticTokenValues = {\n      ", '\n    };\n\n    export const semanticTokens = defineColorTokens(() => semanticTokenValues);\n    export type SemanticTokenValue = typeof semanticTokenValues;\n  ']);
    return (
        (v = function () {
            return e;
        }),
        e
    );
}
function _() {
    let e = b(['\n      export const rawPalette = {\n        ', '\n      } as const;\n    ']);
    return (
        (_ = function () {
            return e;
        }),
        e
    );
}
let j = {},
    C = ['100', '130', '160', '200', '230', '260', '300', '330', '345', '360', '400', '430', '460', '500', '530', '560', '600', '630', '645', '660', '700', '730', '760', '800', '830', '860', '900'];
function T(e, t) {
    let [n, r] = a.useState(() => {
        let n = h.K.get(e);
        return null != n ? n : t;
    });
    return (
        a.useEffect(() => {
            h.K.set(e, n);
        }, [e, n]),
        [n, r]
    );
}
function S() {
    let e = (0, f.Fg)(),
        [{ rawPalette: t, semanticTokens: n }, l, o, s, h, b] = (function (e, t) {
            let [n, r] = T(''.concat(e, '-states'), [t]),
                [l, i] = T(''.concat(e, '-index'), 0),
                o = n[l],
                c = a.useCallback(
                    (e) => {
                        r([e, ...n].slice(0, 20)), i(0);
                    },
                    [i, r, n]
                ),
                s = a.useCallback(() => {
                    i(Math.min(n.length - 1, l + 1));
                }, [l, i, n.length]),
                u = a.useCallback(() => {
                    i(Math.max(0, l - 1));
                }, [l, i]),
                d = l < n.length - 1;
            return [o, c, s, u, d, l > 0];
        })('color-override-03-03-23', {
            rawPalette: m.b,
            semanticTokens: j
        }),
        [S, N] = a.useState(''),
        [y, w] = a.useState({}),
        [k, E] = a.useState({}),
        I = a.useMemo(
            () =>
                Object.keys(t).reduce(
                    (e, t) => [
                        ...e,
                        {
                            value: t,
                            label: t
                        }
                    ],
                    []
                ),
            [t]
        ),
        R = a.useCallback(
            (e, r, a, i) => {
                let o = u().cloneDeep(n);
                (o[e][r] = {
                    color: a,
                    opacity: i
                }),
                    l({
                        rawPalette: t,
                        semanticTokens: o
                    });
            },
            [n, t, l]
        ),
        Z = a.useMemo(() => {
            let r = Object.keys(n).map((t) => {
                    let { color: r, opacity: a } = n[t][e];
                    return '--'.concat(t, ': hsl(var(--').concat(r.replace('.', '-'), '-hsl) / ').concat(a, ');');
                }),
                a = Object.keys(t).flatMap((e) => {
                    let { hex: n } = t[e],
                        {
                            h: r,
                            s: a,
                            l
                        } = (function (e) {
                            let [t, n, r] = 'transparent' === e ? [0, 0, 0] : i()(e).hsl(),
                                a = isNaN(t) ? 0 : u().round(t, 1),
                                l = u().round(100 * r, 1);
                            return {
                                h: a,
                                s: u().round(100 * n, 1),
                                l: l
                            };
                        })(n),
                        o = u().kebabCase(e);
                    return ['--'.concat(o, '-hsl: ').concat(r, ' calc(var(--saturation-factor, 1) * ').concat(a, '%) ').concat(l, '% !important;'), '--'.concat(o, ': hsl(var(--').concat(o, '-hsl)) !important;')];
                });
            return '\n      .theme-'
                .concat(e, ' {\n        ')
                .concat(r.join('\n'), '\n\n        ')
                .concat(
                    Object.keys(y)
                        .filter((e) => y[e])
                        .map((e) => '--'.concat(e, ': magenta !important;'))
                        .join('\n'),
                    '\n\n        '
                )
                .concat(
                    Object.keys(k)
                        .filter((e) => k[e])
                        .map((e) => '--'.concat(e, ': magenta !important;'))
                        .join('\n'),
                    '\n      }\n\n      html {\n        '
                )
                .concat(a.join('\n'), '\n      }\n    ');
        }, [e, n, t, y, k]),
        O = a.useCallback((e) => {
            let t = '',
                n = '',
                r = !1;
            return c()(
                v(),
                Object.keys(e)
                    .map((a) => {
                        (n = a.split('-')[0]) !== t ? ((t = n), (r = !0)) : (r = !1);
                        let l = e[a],
                            i = l.light,
                            o = l.dark,
                            c = l.midnight,
                            s = [
                                ['dark', o],
                                ['light', i]
                            ];
                        (c.opacity !== o.opacity || c.color !== o.color) && s.push(['midnight', c]);
                        let u = s
                                .map((e) => {
                                    let [t, { color: n, opacity: r }] = e;
                                    return 1 === r ? ''.concat(t, ': "').concat(n, '"') : ''.concat(t, ': { color: "').concat(n, '", opacity: ').concat(r, ' }');
                                })
                                .join(',\n'),
                            d = '"'.concat(a, '": themedToken({ ').concat(u, ' })');
                        return ''.concat(r ? '\n' : '').concat(d);
                    })
                    .join(',\n')
            );
        }, []),
        L = a.useCallback(
            (e) =>
                c()(
                    _(),
                    Object.keys(e).map((t) => '"'.concat(t, '": {hex: "').concat(e[t].hex, '"}'))
                ),
            []
        ),
        A = a.useCallback(
            (e) => {
                let t = {};
                Object.keys(e).forEach((n) => {
                    Object.keys(e[n]).map((r) => {
                        let a = [...C];
                        'primary' !== n && (a = a.filter((e) => '645' !== e)), (t[''.concat(n, '.').concat(a[+r])] = { hex: e[n][r] });
                    });
                }),
                    l({
                        rawPalette: t,
                        semanticTokens: n
                    });
            },
            [n, l]
        );
    return (0, r.jsxs)('div', {
        className: g.panel,
        style: {
            display: 'flex',
            flexDirection: 'column'
        },
        children: [
            (0, r.jsxs)('div', {
                className: g.toolbar,
                style: {
                    flex: '0 0 34px',
                    padding: '0 4px'
                },
                children: [
                    (0, r.jsxs)('div', {
                        className: g.toolbarGroup,
                        children: [
                            (0, r.jsx)(x.Button, {
                                onClick: o,
                                disabled: !h,
                                size: x.Button.Sizes.MIN,
                                children: 'Undo'
                            }),
                            (0, r.jsx)(x.Button, {
                                onClick: s,
                                disabled: !b,
                                size: x.Button.Sizes.MIN,
                                children: 'Redo'
                            })
                        ]
                    }),
                    (0, r.jsx)('div', { className: g.toolbarDivider }),
                    (0, r.jsxs)('div', {
                        className: g.toolbarGroup,
                        children: [
                            (0, r.jsx)('span', {
                                className: g.toolbarGroupLabel,
                                children: 'Raw'
                            }),
                            (0, r.jsx)(x.Button, {
                                size: x.Button.Sizes.MIN,
                                onClick: () => {
                                    navigator.clipboard.readText().then((e) => {
                                        A(JSON.parse(e));
                                    });
                                },
                                children: 'Import'
                            }),
                            (0, r.jsx)(x.Button, {
                                size: x.Button.Sizes.MIN,
                                onClick: () => {
                                    navigator.clipboard.writeText(L(t));
                                },
                                children: 'Export'
                            })
                        ]
                    }),
                    (0, r.jsx)('div', { className: g.toolbarDivider }),
                    (0, r.jsxs)('div', {
                        className: g.toolbarGroup,
                        children: [
                            (0, r.jsx)('span', {
                                className: g.toolbarGroupLabel,
                                children: 'Semantic'
                            }),
                            (0, r.jsx)(x.Button, {
                                size: x.Button.Sizes.MIN,
                                onClick: () => {
                                    navigator.clipboard.writeText(O(n));
                                },
                                children: 'Export'
                            })
                        ]
                    }),
                    (0, r.jsx)('div', { className: g.toolbarDivider }),
                    (0, r.jsx)('div', {
                        className: g.toolbarGroup,
                        children: (0, r.jsx)(x.Button, {
                            size: x.Button.Sizes.MIN,
                            type: 'reset',
                            color: x.Button.Colors.RED,
                            onClick: () => {
                                l({
                                    rawPalette: m.b,
                                    semanticTokens: j
                                });
                            },
                            children: 'Reset all'
                        })
                    }),
                    (0, r.jsx)('div', { className: g.toolbarDivider }),
                    (0, r.jsxs)('div', {
                        className: g.toolbarGroup,
                        style: { flexGrow: 1 },
                        children: [
                            (0, r.jsx)(x.SearchBar, {
                                size: x.SearchBar.Sizes.SMALL,
                                query: S,
                                onChange: N,
                                onClear: () => N(''),
                                placeholder: 'Search tokens',
                                'aria-label': 'Search tokens'
                            }),
                            ' '
                        ]
                    })
                ]
            }),
            (0, r.jsx)(x.ScrollerThin, {
                children: (0, r.jsx)('div', {
                    style: {
                        display: 'grid',
                        gridTemplateColumns: 'min-content 1fr 1fr min-content min-content',
                        gap: 8,
                        margin: 8,
                        alignItems: 'center'
                    },
                    children: Object.keys(j)
                        .filter((e) => '' === S || e.toLowerCase().includes(S))
                        .map((t) => {
                            var l;
                            let i = j[t][e],
                                o = null == n[t] ? { ...i } : n[t][e],
                                c = o.color !== i.color || o.opacity !== i.opacity;
                            return (0, r.jsxs)(
                                a.Fragment,
                                {
                                    children: [
                                        (0, r.jsx)('div', {
                                            onMouseEnter: () => {
                                                E((e) => ({
                                                    ...e,
                                                    [t]: !0
                                                }));
                                            },
                                            onMouseLeave: () => {
                                                E((e) => ({
                                                    ...e,
                                                    [t]: !1
                                                }));
                                            },
                                            children: (0, r.jsx)(x.Checkbox, {
                                                value: y[t],
                                                onChange: () => {
                                                    w((e) => ({
                                                        ...e,
                                                        [t]: !e[t]
                                                    }));
                                                }
                                            })
                                        }),
                                        (0, r.jsx)('span', { children: t }),
                                        (0, r.jsx)(x.SearchableSelect, {
                                            value: o.color,
                                            options: I,
                                            onChange: (n) => {
                                                R(t, e, n, o.opacity);
                                            },
                                            renderOptionPrefix: (t) =>
                                                null == t
                                                    ? null
                                                    : (0, r.jsx)('div', {
                                                          style: {
                                                              width: 16,
                                                              height: 16,
                                                              borderRadius: '50%',
                                                              backgroundColor: 'var(--'.concat(t.value.replace('.', '-'), ')'),
                                                              border: '1px solid '.concat('dark' === e ? 'white' : 'black')
                                                          }
                                                      }),
                                            popoutLayerContext: p.O$
                                        }),
                                        (0, r.jsx)(x.TextInput, {
                                            type: 'number',
                                            style: { width: '4em' },
                                            value: null === (l = o.opacity) || void 0 === l ? void 0 : l.toString(),
                                            onChange: (n) => {
                                                '' !== n && R(t, e, o.color, parseFloat(n));
                                            }
                                        }),
                                        (0, r.jsx)(x.Clickable, {
                                            style: c
                                                ? {}
                                                : {
                                                      opacity: 0,
                                                      pointerEvents: 'none'
                                                  },
                                            onClick: () => {
                                                var n;
                                                c && R(t, e, i.color, null !== (n = i.opacity) && void 0 !== n ? n : 1);
                                            },
                                            children: (0, r.jsx)(x.XSmallIcon, {
                                                size: 'xs',
                                                color: 'currentColor'
                                            })
                                        })
                                    ]
                                },
                                t
                            );
                        })
                })
            }),
            (0, r.jsx)(d.ql, {
                children: (0, r.jsx)('style', {
                    id: 'devtools-color-overrides',
                    children: Z
                })
            })
        ]
    });
}
