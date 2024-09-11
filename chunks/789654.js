n.d(t, {
    Z: function () {
        return T;
    }
}),
    n(627494),
    n(757143),
    n(47120),
    n(390547),
    n(724458),
    n(315314),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(642549);
var r = n(735250),
    a = n(470079),
    l = n(688619),
    i = n.n(l),
    o = n(392711),
    s = n.n(o),
    c = n(470716),
    u = n(190558),
    d = n(203165),
    h = n(481060),
    m = n(410030),
    x = n(705262),
    f = n(374794),
    p = n(58755),
    g = n(246992),
    b = n(500949),
    v = n(806714);
let { SemanticColors: j } = u.V;
function C(e) {
    return e.replaceAll(/_|\./g, '-').toLowerCase();
}
function _(e) {
    return e.replaceAll(/_|-/g, '.').toLowerCase();
}
function T() {
    let e = (0, m.Fg)(),
        [t, n, l, o, u, d] = (0, b.zn)(),
        { semanticColorOverrides: g, rawColorOverrides: j, tab: _, scales: T } = t,
        N = a.useMemo(() => {
            let t = Object.entries(g).map((t) => {
                    let [n, r] = t,
                        { colors: a, highlight: l } = r,
                        i = a[e];
                    if (null == i) return '';
                    let o = C(n);
                    if (l) return '--'.concat(o, ': magenta !important;');
                    let s = C(i.color),
                        c = i.opacity,
                        u = c < 1 ? 'hsl(var(--'.concat(s, '-hsl) / ').concat(c, ')') : 'var(--'.concat(s, ')');
                    return '--'.concat(o, ': color-mix(\n        in oklab,\n        ').concat(u, ' 100%,\n        var(--theme-base-color, black) var(--theme-base-color-amount, 0%)\n      );');
                }),
                n = Object.keys(j).flatMap((e) => {
                    let t = j[e],
                        {
                            h: n,
                            s: r,
                            l: a
                        } = (function (e) {
                            let [t, n, r] = 'transparent' === e ? [0, 0, 0] : i()(e).hsl(),
                                a = isNaN(t) ? 0 : s().round(t, 1),
                                l = s().round(100 * r, 1);
                            return {
                                h: a,
                                s: s().round(100 * n, 1),
                                l: l
                            };
                        })(t.highlight ? '#FF00FF' : t.color),
                        l = s().kebabCase(e);
                    return ['--'.concat(l, '-hsl: ').concat(n, ' calc(var(--saturation-factor, 1) * ').concat(r, '%) ').concat(a, '% !important;'), '--'.concat(l, ': hsl(var(--').concat(l, '-hsl)) !important;')];
                }),
                r = T.reduce((e, t) => {
                    let { name: n } = t,
                        r = (0, b.XM)(t);
                    return (
                        e +
                        (0, b.A0)(n).reduce((e, t) => {
                            let a = r[''.concat(n, '.').concat(t)];
                            return ''
                                .concat(e, '\n--')
                                .concat(n, '-')
                                .concat(t, ': ')
                                .concat(a.to('srgb').toString({ format: 'hex' }), ';');
                        }, '')
                    );
                }, '');
            return '\n      :root {\n        '.concat(r, '\n      }\n\n      .theme-').concat(e, ' {\n        ').concat(t.join('\n'), '\n      }\n\n      html {\n        ').concat(n.join('\n'), '\n      }\n    ');
        }, [j, T, g, e]);
    return (0, r.jsxs)('div', {
        className: v.panel,
        children: [
            (0, r.jsxs)('div', {
                className: v.toolbar,
                style: {
                    '--custom-theme-selection-selection-size': '40px',
                    '--custom-theme-selection-group-column-gap': 'var(--spacing-8)'
                },
                children: [
                    (0, r.jsxs)(h.TabBar, {
                        className: v.tabBar,
                        type: 'top',
                        look: 'brand',
                        selectedItem: _,
                        onItemSelect: (e) => {
                            n((t) => ({
                                ...t,
                                tab: e
                            }));
                        },
                        children: [
                            (0, r.jsx)(h.TabBar.Item, {
                                id: b.H8.TOKENS,
                                children: 'Tokens'
                            }),
                            (0, r.jsx)(h.TabBar.Item, {
                                id: b.H8.PALETTES,
                                children: 'Palettes'
                            })
                        ]
                    }),
                    (0, r.jsx)(x.ZP, {
                        type: x.yH.SETTINGS,
                        children: (0, r.jsx)(x.ZP.Basic, {
                            className: v.toolbarThemeSelector,
                            hideSystemSelector: !0
                        })
                    }),
                    (0, r.jsxs)('div', {
                        className: v.toolbarButtons,
                        children: [
                            (0, r.jsx)(h.Button, {
                                size: h.Button.Sizes.ICON,
                                color: h.Button.Colors.TRANSPARENT,
                                look: h.Button.Looks.BLANK,
                                onClick: l,
                                disabled: !u,
                                children: (0, r.jsx)(h.UndoIcon, {})
                            }),
                            (0, r.jsx)(h.Button, {
                                size: h.Button.Sizes.ICON,
                                color: h.Button.Colors.TRANSPARENT,
                                look: h.Button.Looks.BLANK,
                                onClick: o,
                                disabled: !d,
                                children: (0, r.jsx)(h.RedoIcon, {})
                            }),
                            (0, r.jsx)(f.Z, {
                                'aria-label': 'Import',
                                filters: [
                                    {
                                        name: 'JSON',
                                        extensions: ['json']
                                    }
                                ],
                                onChange: (e) => {
                                    let t = e.currentTarget.files,
                                        r = null == t ? void 0 : t[0];
                                    if (null == r) return;
                                    let a = new FileReader();
                                    (a.onload = () => {
                                        let e = a.result;
                                        if ('string' == typeof e)
                                            try {
                                                let t = JSON.parse(e);
                                                if (null == t) return;
                                                let { semanticColorOverrides: r, rawColorOverrides: a } = t;
                                                n((e) => ({
                                                    ...e,
                                                    semanticColorOverrides: r,
                                                    rawColorOverrides: a
                                                }));
                                            } catch (e) {}
                                    }),
                                        a.readAsText(r);
                                },
                                size: h.Button.Sizes.ICON,
                                color: h.Button.Colors.TRANSPARENT,
                                look: h.Button.Looks.BLANK,
                                children: (0, r.jsx)(h.UploadIcon, {})
                            }),
                            (0, r.jsx)(h.Button, {
                                size: h.Button.Sizes.ICON,
                                color: h.Button.Colors.TRANSPARENT,
                                look: h.Button.Looks.BLANK,
                                onClick: () => {
                                    let e = JSON.stringify(
                                            {
                                                semanticColorOverrides: g,
                                                rawColorOverrides: j
                                            },
                                            null,
                                            2
                                        ),
                                        t = new Blob([e], { type: 'application/json' }),
                                        n = URL.createObjectURL(t),
                                        r = document.createElement('a'),
                                        a = btoa(e).slice(0, 8);
                                    (r.href = n), (r.download = 'color-overrides-'.concat(a, '.json')), r.click(), URL.revokeObjectURL(n);
                                },
                                children: (0, r.jsx)(h.DownloadIcon, {})
                            })
                        ]
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: v.tab,
                hidden: _ !== b.H8.TOKENS,
                children: (0, r.jsx)(S, {
                    state: t,
                    setState: n
                })
            }),
            (0, r.jsx)('div', {
                className: v.tab,
                hidden: _ !== b.H8.PALETTES,
                children: (0, r.jsx)(p.P, {
                    state: t,
                    setState: n
                })
            }),
            (0, r.jsx)(c.ql, {
                children: (0, r.jsx)('style', {
                    id: 'devtools-color-overrides',
                    children: N
                })
            })
        ]
    });
}
function S(e) {
    let { state: t, setState: n } = e,
        l = (0, m.Fg)(),
        { semanticColorOverrides: i, rawColorOverrides: o } = t,
        s = a.useMemo(
            () =>
                Object.keys(d.b).reduce(
                    (e, t) => [
                        ...e,
                        {
                            value: t,
                            label: t
                        }
                    ],
                    []
                ),
            []
        ),
        c = a.useCallback(
            (e) => {
                n((t) => {
                    var n;
                    let { semanticColorOverrides: r } = t,
                        a = null !== (n = r[e]) && void 0 !== n ? n : (0, b.$R)(e);
                    return {
                        ...t,
                        semanticColorOverrides: {
                            ...r,
                            [e]: a
                        }
                    };
                });
            },
            [n]
        ),
        u = a.useCallback(
            (e) => {
                n((t) => {
                    let { rawColorOverrides: n } = t;
                    return null == n[e]
                        ? {
                              ...t,
                              rawColorOverrides: {
                                  ...n,
                                  [e]: {
                                      color: d.b[e].hex,
                                      highlight: !1
                                  }
                              }
                          }
                        : t;
                });
            },
            [n]
        ),
        x = a.useCallback(
            (e) => {
                n((t) => {
                    let { semanticColorOverrides: n } = t,
                        r = { ...n };
                    return (
                        delete r[e],
                        {
                            ...t,
                            semanticColorOverrides: r
                        }
                    );
                });
            },
            [n]
        ),
        f = a.useCallback(
            (e) => {
                n((t) => {
                    let { semanticColorOverrides: n } = t,
                        r = n[e];
                    if (null == r) return t;
                    let a = { ...n };
                    return (
                        (a[e] = (0, b.GU)(r)),
                        {
                            ...t,
                            semanticColorOverrides: a
                        }
                    );
                });
            },
            [n]
        ),
        p = Object.keys(j).map((e) => ({
            value: e,
            label: C(e)
        })),
        T = Object.keys(d.b).map((e) => ({
            value: e,
            label: e
        }));
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(h.Text, {
                variant: 'text-lg/semibold',
                children: 'Semantic Tokens'
            }),
            (0, r.jsx)(h.SearchableSelect, {
                options: p,
                placeholder: 'Search for a semantic token...',
                value: void 0,
                onChange: c,
                renderOptionPrefix: (e) =>
                    null == e
                        ? null
                        : (0, r.jsx)('div', {
                              'data-theme': l,
                              className: v.colorPreview,
                              style: { '--custom-color': 'var(--'.concat(e.label, ')') }
                          }),
                popoutLayerContext: g.O$
            }),
            (0, r.jsx)('ul', {
                className: v.overrides,
                children: Object.entries(i).map((e) => {
                    let [t, a] = e,
                        i = a.colors[l];
                    if (null == i) return null;
                    let o = _(i.color),
                        c = i.opacity,
                        u = b.jC[t][l];
                    return (0, r.jsx)(
                        N,
                        {
                            title: C(t),
                            subtitle: 1 === u.opacity ? _(u.raw) : ''.concat(_(u.raw), ' @ ').concat(100 * u.opacity, '%'),
                            highlight: a.highlight,
                            onReset: () => {
                                n((e) => {
                                    let { semanticColorOverrides: n } = e;
                                    if (null == n[t]) return e;
                                    let r = (0, b.$R)(t);
                                    return {
                                        ...e,
                                        semanticColorOverrides: {
                                            ...n,
                                            [t]: r
                                        }
                                    };
                                });
                            },
                            onRemove: () => x(t),
                            onHighlightToggle: () => f(t),
                            children: (0, r.jsxs)('div', {
                                className: v.semanticOverride,
                                children: [
                                    (0, r.jsx)(h.SearchableSelect, {
                                        value: o,
                                        options: s,
                                        onChange: (e) => {
                                            n((n) => {
                                                let { semanticColorOverrides: r } = n,
                                                    a = r[t];
                                                if (null == a) return n;
                                                let i = a.colors[l];
                                                if (null == i) return n;
                                                let o = (0, b.lT)(a, t, e, i.opacity, l);
                                                return {
                                                    ...n,
                                                    semanticColorOverrides: {
                                                        ...r,
                                                        [t]: o
                                                    }
                                                };
                                            });
                                        },
                                        renderOptionPrefix: (e) => {
                                            if (null == e) return null;
                                            let t = e.label.replaceAll('.', '-');
                                            return (0, r.jsx)('div', {
                                                'data-theme': l,
                                                className: v.colorPreview,
                                                style: { '--custom-color': 'var(--'.concat(t, ')') }
                                            });
                                        },
                                        popoutLayerContext: g.O$
                                    }),
                                    (0, r.jsx)(h.TextInput, {
                                        inputClassName: v.opacityInput,
                                        type: 'number',
                                        value: c,
                                        min: 0,
                                        max: 1,
                                        step: 0.01,
                                        onChange: (e) => {
                                            let r = parseFloat(e);
                                            !isNaN(r) &&
                                                n((e) => {
                                                    let { semanticColorOverrides: n } = e,
                                                        a = n[t];
                                                    if (null == a) return e;
                                                    let i = a.colors[l];
                                                    if (null == i) return e;
                                                    let o = (0, b.lT)(a, t, i.color, r, l);
                                                    return {
                                                        ...e,
                                                        semanticColorOverrides: {
                                                            ...n,
                                                            [t]: o
                                                        }
                                                    };
                                                });
                                        }
                                    })
                                ]
                            })
                        },
                        t
                    );
                })
            }),
            (0, r.jsx)('div', { className: v.divider }),
            (0, r.jsx)(h.Text, {
                variant: 'text-lg/semibold',
                children: 'Raw Tokens'
            }),
            (0, r.jsx)(h.SearchableSelect, {
                options: T,
                placeholder: 'Search for a raw color...',
                value: void 0,
                onChange: u,
                renderOptionPrefix: (e) => {
                    if (null == e) return null;
                    let t = e.label.replaceAll('.', '-');
                    return (0, r.jsx)('div', {
                        'data-theme': l,
                        className: v.colorPreview,
                        style: { '--custom-color': 'var(--'.concat(t, ')') }
                    });
                },
                popoutLayerContext: g.O$
            }),
            (0, r.jsx)('ul', {
                className: v.rawOverrides,
                children: Object.entries(o).map((e) => {
                    let [t, a] = e;
                    return (0, r.jsxs)(
                        N,
                        {
                            title: t,
                            subtitle: d.b[t].hex,
                            highlight: a.highlight,
                            onReset: () => {
                                n((e) => {
                                    let { rawColorOverrides: n } = e,
                                        r = { ...n };
                                    return (
                                        (r[t] = {
                                            color: d.b[t].hex,
                                            highlight: !1
                                        }),
                                        {
                                            ...e,
                                            rawColorOverrides: r
                                        }
                                    );
                                });
                            },
                            onRemove: () => {
                                n((e) => {
                                    let { rawColorOverrides: n } = e,
                                        r = { ...n };
                                    return (
                                        delete r[t],
                                        {
                                            ...e,
                                            rawColorOverrides: r
                                        }
                                    );
                                });
                            },
                            onHighlightToggle: () => {
                                n((e) => {
                                    let { rawColorOverrides: n } = e,
                                        r = n[t];
                                    if (null == r) return e;
                                    let a = { ...n };
                                    return (
                                        (a[t] = {
                                            ...r,
                                            highlight: !r.highlight
                                        }),
                                        {
                                            ...e,
                                            rawColorOverrides: a
                                        }
                                    );
                                });
                            },
                            children: [
                                (0, r.jsx)('input', {
                                    className: v.colorInput,
                                    type: 'color',
                                    value: a.color,
                                    onChange: (e) => {
                                        let r = e.target.value;
                                        n((e) => {
                                            let { rawColorOverrides: n } = e;
                                            return {
                                                ...e,
                                                rawColorOverrides: {
                                                    ...n,
                                                    [t]: {
                                                        color: r,
                                                        highlight: !1
                                                    }
                                                }
                                            };
                                        });
                                    }
                                }),
                                (0, r.jsx)(h.Text, {
                                    variant: 'text-sm/medium',
                                    tabularNumbers: !0,
                                    children: a.color
                                })
                            ]
                        },
                        t
                    );
                })
            })
        ]
    });
}
function N(e) {
    let { title: t, subtitle: n, highlight: a, onReset: l, onRemove: i, onHighlightToggle: o, children: s } = e;
    return (0, r.jsxs)('li', {
        className: v.override,
        'data-highlight': a,
        children: [
            (0, r.jsxs)('div', {
                className: v.overrideHeader,
                children: [
                    (0, r.jsxs)('div', {
                        className: v.title,
                        children: [
                            (0, r.jsx)(h.Text, {
                                lineClamp: 1,
                                variant: 'text-md/medium',
                                className: v.overrideHeading,
                                tabularNumbers: !0,
                                children: t
                            }),
                            null != n
                                ? (0, r.jsx)(h.Text, {
                                      variant: 'text-sm/medium',
                                      color: 'text-secondary',
                                      tabularNumbers: !0,
                                      children: n
                                  })
                                : null
                        ]
                    }),
                    (0, r.jsx)(h.Clickable, {
                        onClick: o,
                        className: v.clickabeIcon,
                        children: (0, r.jsx)(h.EyeIcon, {
                            size: 'xs',
                            color: a ? 'var(--text-brand)' : 'currentColor'
                        })
                    }),
                    (0, r.jsx)(h.Clickable, {
                        className: v.clickabeIcon,
                        onClick: l,
                        children: (0, r.jsx)(h.RefreshIcon, {
                            size: 'xs',
                            color: 'currentColor'
                        })
                    }),
                    (0, r.jsx)(h.Clickable, {
                        className: v.removeOverride,
                        onClick: i,
                        children: (0, r.jsx)(h.XSmallIcon, {
                            size: 'xs',
                            color: 'currentColor'
                        })
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: v.overrideContent,
                children: s
            })
        ]
    });
}
