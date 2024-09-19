n.d(t, {
    P: function () {
        return x;
    }
}),
    n(724458),
    n(47120);
var r = n(735250),
    a = n(470079),
    l = n(570540),
    i = n(203165),
    o = n(481060),
    c = n(789654),
    s = n(246992),
    d = n(500949),
    u = n(806714);
let h = d.M3.map((e) => ({
        value: e.space,
        name: e.name
    })),
    m = Object.values(d.iw).map((e) => ({
        value: e,
        name: e
    })),
    f = Array.from(
        Array.from(
            Object.keys(i.b).reduce((e, t) => {
                let [n] = t.split('.');
                return e.add(n), e;
            }, new Set())
        )
    ).map((e) => ({
        value: e,
        label: e
    }));
function x(e) {
    let { state: t, setState: n } = e,
        { scales: l } = t,
        [c, h] = a.useState(null),
        m = (0, r.jsxs)('div', {
            className: u.section,
            children: [
                (0, r.jsx)(o.SearchableSelect, {
                    options: f,
                    placeholder: 'Select a scale to edit...',
                    value: void 0,
                    onChange: (e) => {
                        let r = t.scales.find((t) => t.name === e);
                        if (null == r)
                            (r = {
                                name: e,
                                base: 'plum' === e ? i.b['plum.10'].hex : i.b[''.concat(e, '.500')].hex,
                                colorSpace: d.uH.ICtCp,
                                useEquidistantLuminance: !1,
                                showColumnarPalettePreview: !1,
                                useP3ColorSpace: !1,
                                darkness: 0,
                                lightness: 100,
                                easing: d.iw.LINEAR,
                                easingStrength: 1,
                                steps: 26
                            }),
                                n({
                                    ...t,
                                    scales: [...t.scales, r]
                                });
                    },
                    popoutLayerContext: s.O$
                }),
                (0, r.jsx)('ul', {
                    className: u.overrides,
                    children: l.map((e) =>
                        (0, r.jsx)(
                            'li',
                            {
                                children: (0, r.jsx)(o.Clickable, {
                                    onClick: () => h(e.name),
                                    style: { cursor: 'pointer' },
                                    children: (0, r.jsx)(g, {
                                        scale: e,
                                        onRemove: () =>
                                            n({
                                                ...t,
                                                scales: t.scales.filter((t) => t.name !== e.name)
                                            })
                                    })
                                })
                            },
                            e.name
                        )
                    )
                })
            ]
        }),
        x = l.find((e) => e.name === c),
        b =
            null != x
                ? (0, r.jsx)(p, {
                      onClose: () => h(null),
                      scale: x,
                      setState: n
                  })
                : m;
    return (0, r.jsx)('div', { children: b });
}
function p(e) {
    let { scale: t, setState: n, onClose: a } = e,
        { name: i, base: s, darkness: f, lightness: x, useEquidistantLuminance: p, showColumnarPalettePreview: g, colorSpace: v, easing: _ = d.iw.LINEAR, easingStrength: j = 1, useP3ColorSpace: C, steps: T = 26 } = t,
        S = (0, d.XM)(t),
        N = (0, d.W6)(S, i);
    return (0, r.jsxs)(o.FormSection, {
        className: u.paletteSettings,
        children: [
            (0, r.jsxs)('div', {
                className: u.titleWithIcon,
                children: [
                    (0, r.jsx)(o.Clickable, {
                        onClick: a,
                        style: { maxWidth: 80 },
                        children: (0, r.jsx)(o.ArrowSmallLeftIcon, { size: 'sm' })
                    }),
                    (0, r.jsx)(o.Text, {
                        variant: 'text-lg/bold',
                        children: i
                    }),
                    (0, r.jsx)(o.Clickable, {
                        onClick: function () {
                            let e = Object.entries(S).reduce((e, t) => {
                                let [n, r] = t;
                                return (
                                    (e[n] = {
                                        value: r.to('srgb').toString({ format: 'hex' }),
                                        type: 'color'
                                    }),
                                    e
                                );
                            }, {});
                            (0, c.q)('figma-'.concat(t.name), JSON.stringify(e, null, 4));
                        },
                        style: { cursor: 'pointer' },
                        children: (0, r.jsx)(b, {})
                    })
                ]
            }),
            (0, r.jsxs)(o.FormItem, {
                title: 'Base Color',
                className: u.formItem,
                children: [
                    (0, r.jsxs)(o.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-secondary',
                        children: ['The base color the ', (0, r.jsx)('code', { children: i }), ' palette is generated from.']
                    }),
                    (0, r.jsx)('input', {
                        type: 'color',
                        value: s,
                        onChange: (e) => (0, d.Ib)(i, e.target.value, n)
                    })
                ]
            }),
            (0, r.jsxs)(o.FormItem, {
                title: 'Color Space',
                children: [
                    (0, r.jsx)(o.FormText, {
                        type: o.FormTextTypes.DESCRIPTION,
                        children: 'The color space used to generate the palette. Different color spaces will produce different results.'
                    }),
                    (0, r.jsx)(o.RadioGroup, {
                        options: h,
                        value: v,
                        onChange: (e) => (0, d.t4)(i, e.value, n)
                    })
                ]
            }),
            (0, r.jsxs)(o.FormSection, {
                title: 'Luminance',
                children: [
                    (0, r.jsx)(o.FormItem, {}),
                    (0, r.jsxs)(o.FormItem, {
                        title: 'Darkness ('.concat(f.toFixed(), '%)'),
                        disabled: !p,
                        children: [
                            (0, r.jsx)(o.FormText, {
                                type: o.FormTextTypes.DESCRIPTION,
                                children: 'Adjust the minimum lumiance of the darkest step in the palette.'
                            }),
                            (0, r.jsx)(o.Slider, {
                                onValueRender: () => null,
                                initialValue: 0,
                                minValue: 0,
                                maxValue: 20,
                                onValueChange: (e) => (0, d.YE)(i, e, n)
                            })
                        ]
                    }),
                    (0, r.jsxs)(o.FormItem, {
                        title: 'Lightness ('.concat(x.toFixed(), '%)'),
                        disabled: !p,
                        children: [
                            (0, r.jsx)(o.FormText, {
                                type: o.FormTextTypes.DESCRIPTION,
                                children: 'Adjust the maximum lumiance of the lightest step in the palette.'
                            }),
                            (0, r.jsx)(o.Slider, {
                                onValueRender: () => null,
                                initialValue: x,
                                minValue: 80,
                                maxValue: 100,
                                onValueChange: (e) => (0, d.h9)(i, e, n)
                            })
                        ]
                    })
                ]
            }),
            p &&
                (0, r.jsxs)(o.FormSection, {
                    title: 'Easing',
                    children: [
                        (0, r.jsxs)(o.FormItem, {
                            title: 'Easing Function',
                            children: [
                                (0, r.jsx)(o.FormText, {
                                    type: o.FormTextTypes.DESCRIPTION,
                                    children: 'The easing function used to generate the palette. Different easing functions will produce different results.'
                                }),
                                (0, r.jsx)(o.RadioGroup, {
                                    options: m,
                                    value: _,
                                    onChange: (e) => {
                                        (0, d.BZ)(i, e.value, n);
                                    }
                                })
                            ]
                        }),
                        (0, r.jsxs)(o.FormItem, {
                            title: 'Easing Strength ('.concat(j.toFixed(2), ')'),
                            children: [
                                (0, r.jsx)(o.FormText, {
                                    type: o.FormTextTypes.DESCRIPTION,
                                    children: 'Adjust the strength of the easing function.'
                                }),
                                (0, r.jsx)(o.Slider, {
                                    onValueRender: () => null,
                                    initialValue: j,
                                    minValue: 1,
                                    maxValue: 3,
                                    onValueChange: (e) => (0, d.rd)(i, e, n)
                                })
                            ]
                        })
                    ]
                }),
            (0, r.jsxs)(o.FormSection, {
                title: 'Palette',
                children: [
                    (0, r.jsx)(o.FormItem, {
                        children: (0, r.jsx)(o.FormSwitch, {
                            note: 'Renders the palette preview in a single column, useful for comparing the luminance of each step.',
                            value: g,
                            onChange: (e) => (0, d.KB)(i, e, n),
                            children: 'Show columnar palette preview'
                        })
                    }),
                    (0, r.jsx)(o.FormItem, {
                        children: (0, r.jsx)(o.FormSwitch, {
                            note: 'Renders the palette preview in a single column, useful for comparing the luminance of each step.',
                            value: C,
                            disabled: !d.S2,
                            onChange: (e) => (0, d.uF)(i, e, n),
                            children: 'Use P3 Color Space'
                        })
                    }),
                    (0, r.jsx)(o.FormItem, {
                        title: 'Steps ('.concat(T, ')'),
                        children: (0, r.jsx)(o.Slider, {
                            onValueRender: () => null,
                            initialValue: T,
                            minValue: (0, d.A0)(i).length,
                            maxValue: 100,
                            onValueChange: (e) => (0, d.YC)(i, Math.round(e), n),
                            onMarkerRender: () => null
                        })
                    }),
                    (0, r.jsx)(o.FormItem, {
                        title: 'Palette Preview',
                        children: (0, r.jsx)('div', {
                            className: u.paletteOverrides,
                            'data-columnar': g,
                            children: Object.entries(S).map((e, t) => {
                                let [n, a] = e,
                                    i = (0, d.HI)(a, C),
                                    c = new l.Z('black').contrastWCAG21(a) > 4.5 ? 'black' : 'white',
                                    s = N[n];
                                return (0, r.jsxs)(
                                    'div',
                                    {
                                        style: { backgroundColor: i },
                                        children: [
                                            (0, r.jsxs)(o.Text, {
                                                variant: g ? 'text-sm/medium' : 'text-xs/medium',
                                                style: { color: c },
                                                children: [t, g && null != s ? (0, r.jsx)('strong', { children: ' - '.concat(s) }) : '']
                                            }),
                                            g &&
                                                (0, r.jsxs)(o.Text, {
                                                    variant: 'text-xxs/medium',
                                                    style: {
                                                        opacity: 0.75,
                                                        color: c
                                                    },
                                                    children: [a.to('sRGB').toString({ format: 'hex' }).toUpperCase(), ' - ', i]
                                                })
                                        ]
                                    },
                                    n
                                );
                            })
                        })
                    })
                ]
            })
        ]
    });
}
function g(e) {
    let { scale: t, onRemove: n } = e,
        l = a.useMemo(() => Object.values((0, d.XM)(t)).map((e) => e.to('srgb').toString({ format: 'hex' })), [t]);
    return (0, r.jsxs)('li', {
        className: u.override,
        children: [
            (0, r.jsxs)('div', {
                className: u.overrideHeader,
                children: [
                    (0, r.jsx)('div', {
                        className: u.title,
                        children: (0, r.jsx)(o.Text, {
                            lineClamp: 1,
                            variant: 'text-md/medium',
                            className: u.overrideHeading,
                            tabularNumbers: !0,
                            children: t.name
                        })
                    }),
                    (0, r.jsx)('span', {}),
                    (0, r.jsx)('span', {}),
                    (0, r.jsx)(o.Clickable, {
                        className: u.removeOverride,
                        onClick: n,
                        children: (0, r.jsx)(o.XSmallIcon, {
                            size: 'xs',
                            color: 'currentColor'
                        })
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: u.palettePreview,
                children: l.map((e) =>
                    (0, r.jsx)(
                        'span',
                        {
                            style: {
                                width: 16,
                                height: 16,
                                backgroundColor: e,
                                borderRadius: 'var(--radius-xs)'
                            }
                        },
                        e
                    )
                )
            })
        ]
    });
}
let b = () =>
    (0, r.jsxs)('svg', {
        width: '20',
        height: '20',
        viewBox: '0 0 20 20',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
        children: [
            (0, r.jsx)('path', {
                d: 'M7.08366 18.3337C8.69366 18.3337 10.0003 17.0892 10.0003 15.5559V12.7781H7.08366C5.47366 12.7781 4.16699 14.0225 4.16699 15.5559C4.16699 17.0892 5.47366 18.3337 7.08366 18.3337Z',
                fill: '#0ACF83'
            }),
            (0, r.jsx)('path', {
                d: 'M4.16699 10.0003C4.16699 8.46699 5.47366 7.22255 7.08366 7.22255H10.0003V12.7781H7.08366C5.47366 12.7781 4.16699 11.5337 4.16699 10.0003Z',
                fill: '#A259FF'
            }),
            (0, r.jsx)('path', {
                d: 'M4.16702 4.44477C4.16702 2.91144 5.47369 1.66699 7.08369 1.66699H10.0004L10.0003 7.22255H7.08366C5.47366 7.22255 4.16702 5.9781 4.16702 4.44477Z',
                fill: '#F24E1E'
            }),
            (0, r.jsx)('path', {
                d: 'M10.0004 1.66699L12.917 1.66699C14.527 1.66699 15.8337 2.91144 15.8337 4.44477C15.8337 5.9781 14.527 7.22255 12.917 7.22255H10.0003L10.0004 1.66699Z',
                fill: '#FF7262'
            }),
            (0, r.jsx)('path', {
                d: 'M15.8337 10.0003C15.8337 11.5337 14.527 12.7781 12.917 12.7781C11.307 12.7781 10.0003 11.5337 10.0003 10.0003C10.0003 8.46699 11.307 7.22255 12.917 7.22255C14.527 7.22255 15.8337 8.46699 15.8337 10.0003Z',
                fill: '#1ABCFE'
            })
        ]
    });
