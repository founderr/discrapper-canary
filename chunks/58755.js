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
    c = n(246992),
    s = n(500949),
    d = n(806714);
let u = s.M3.map((e) => ({
        value: e.space,
        name: e.name
    })),
    h = Object.values(s.iw).map((e) => ({
        value: e,
        name: e
    })),
    m = Array.from(
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
        [u, h] = a.useState(null),
        x = (0, r.jsxs)('div', {
            className: d.section,
            children: [
                (0, r.jsx)(o.SearchableSelect, {
                    options: m,
                    placeholder: 'Select a scale to edit...',
                    value: void 0,
                    onChange: (e) => {
                        let r = t.scales.find((t) => t.name === e);
                        if (null == r)
                            (r = {
                                name: e,
                                base: 'plum' === e ? i.b['plum.10'].hex : i.b[''.concat(e, '.500')].hex,
                                colorSpace: s.uH.ICtCp,
                                useEquidistantLuminance: !1,
                                showColumnarPalettePreview: !1,
                                useP3ColorSpace: !1,
                                darkness: 0,
                                lightness: 100,
                                easing: s.iw.LINEAR,
                                easingStrength: 1
                            }),
                                n({
                                    ...t,
                                    scales: [...t.scales, r]
                                });
                    },
                    popoutLayerContext: c.O$
                }),
                (0, r.jsx)('ul', {
                    className: d.overrides,
                    children: l.map((e) =>
                        (0, r.jsx)(
                            'li',
                            {
                                children: (0, r.jsx)(o.Clickable, {
                                    onClick: () => h(e.name),
                                    style: { cursor: 'pointer' },
                                    children: (0, r.jsx)(p, {
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
        g = l.find((e) => e.name === u),
        b =
            null != g
                ? (0, r.jsx)(f, {
                      onClose: () => h(null),
                      scale: g,
                      setState: n
                  })
                : x;
    return (0, r.jsx)('div', { children: b });
}
function f(e) {
    let { scale: t, setState: n, onClose: a } = e,
        { name: i, base: c, darkness: m, lightness: x, useEquidistantLuminance: f, showColumnarPalettePreview: p, colorSpace: g, easing: b = s.iw.LINEAR, easingStrength: v = 1, useP3ColorSpace: _ } = t,
        j = (0, s.XM)(t);
    return (0, r.jsxs)(o.FormSection, {
        className: d.paletteSettings,
        children: [
            (0, r.jsxs)('div', {
                className: d.titleWithIcon,
                children: [
                    (0, r.jsx)(o.Clickable, {
                        onClick: a,
                        style: { maxWidth: 80 },
                        children: (0, r.jsx)(o.ArrowSmallLeftIcon, { size: 'sm' })
                    }),
                    (0, r.jsx)(o.Text, {
                        variant: 'text-lg/bold',
                        children: i
                    })
                ]
            }),
            (0, r.jsxs)(o.FormItem, {
                title: 'Base Color',
                className: d.formItem,
                children: [
                    (0, r.jsxs)(o.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-secondary',
                        children: ['The base color the ', (0, r.jsx)('code', { children: i }), ' palette is generated from.']
                    }),
                    (0, r.jsx)('input', {
                        type: 'color',
                        value: c,
                        onChange: (e) => (0, s.Ib)(i, e.target.value, n)
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
                        options: u,
                        value: g,
                        onChange: (e) => (0, s.t4)(i, e.value, n)
                    })
                ]
            }),
            (0, r.jsxs)(o.FormSection, {
                title: 'Luminance',
                children: [
                    (0, r.jsx)(o.FormItem, {
                        children: (0, r.jsx)(o.FormSwitch, {
                            note: 'By default this will use the luminance steps of the existing scale. Enable this to use equidistant luminance steps instead. Turn this on to enable advanced color options.',
                            value: f,
                            onChange: (e) => (0, s.VS)(i, e, n),
                            children: 'Use equidistant luminance steps'
                        })
                    }),
                    f &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsxs)(o.FormItem, {
                                    title: 'Darkness ('.concat(m.toFixed(), '%)'),
                                    disabled: !f,
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
                                            onValueChange: (e) => (0, s.YE)(i, e, n)
                                        })
                                    ]
                                }),
                                (0, r.jsxs)(o.FormItem, {
                                    title: 'Lightness ('.concat(x.toFixed(), '%)'),
                                    disabled: !f,
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
                                            onValueChange: (e) => (0, s.h9)(i, e, n)
                                        })
                                    ]
                                })
                            ]
                        })
                ]
            }),
            f &&
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
                                    options: h,
                                    value: b,
                                    onChange: (e) => {
                                        (0, s.BZ)(i, e.value, n);
                                    }
                                })
                            ]
                        }),
                        (0, r.jsxs)(o.FormItem, {
                            title: 'Easing Strength ('.concat(v.toFixed(2), ')'),
                            children: [
                                (0, r.jsx)(o.FormText, {
                                    type: o.FormTextTypes.DESCRIPTION,
                                    children: 'Adjust the strength of the easing function.'
                                }),
                                (0, r.jsx)(o.Slider, {
                                    onValueRender: () => null,
                                    initialValue: v,
                                    minValue: 1,
                                    maxValue: 3,
                                    onValueChange: (e) => (0, s.rd)(i, e, n)
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
                            value: p,
                            onChange: (e) => (0, s.KB)(i, e, n),
                            children: 'Show columnar palette preview'
                        })
                    }),
                    (0, r.jsx)(o.FormItem, {
                        children: (0, r.jsx)(o.FormSwitch, {
                            note: 'Renders the palette preview in a single column, useful for comparing the luminance of each step.',
                            value: _,
                            disabled: !s.S2,
                            onChange: (e) => (0, s.uF)(i, e, n),
                            children: 'Use P3 Color Space'
                        })
                    }),
                    (0, r.jsx)(o.FormItem, {
                        title: 'Palette Preview',
                        children: (0, r.jsx)('div', {
                            className: d.paletteOverrides,
                            'data-columnar': p,
                            children: Object.entries(j).map((e) => {
                                let [t, n] = e,
                                    a = (0, s.HI)(n, _),
                                    i = new l.Z('black').contrastWCAG21(n) > 4.5 ? 'black' : 'white';
                                return (0, r.jsxs)(
                                    'div',
                                    {
                                        style: { backgroundColor: a },
                                        children: [
                                            (0, r.jsx)(o.Text, {
                                                variant: p ? 'text-sm/medium' : 'text-xs/medium',
                                                style: { color: i },
                                                children: t
                                            }),
                                            p &&
                                                (0, r.jsxs)(o.Text, {
                                                    variant: 'text-xs/medium',
                                                    style: { color: i },
                                                    children: [n.to('sRGB').toString({ format: 'hex' }).toUpperCase(), ' - ', a]
                                                })
                                        ]
                                    },
                                    t
                                );
                            })
                        })
                    })
                ]
            })
        ]
    });
}
function p(e) {
    let { scale: t, onRemove: n } = e,
        l = a.useMemo(() => {
            let e = (0, s.A0)(t.name),
                n = (0, s.XM)(t);
            return e.map((e) => n[''.concat(t.name, '.').concat(e)].to('srgb').toString({ format: 'hex' }));
        }, [t]);
    return (0, r.jsxs)('li', {
        className: d.override,
        children: [
            (0, r.jsxs)('div', {
                className: d.overrideHeader,
                children: [
                    (0, r.jsx)('div', {
                        className: d.title,
                        children: (0, r.jsx)(o.Text, {
                            lineClamp: 1,
                            variant: 'text-md/medium',
                            className: d.overrideHeading,
                            tabularNumbers: !0,
                            children: t.name
                        })
                    }),
                    (0, r.jsx)('span', {}),
                    (0, r.jsx)('span', {}),
                    (0, r.jsx)(o.Clickable, {
                        className: d.removeOverride,
                        onClick: n,
                        children: (0, r.jsx)(o.XSmallIcon, {
                            size: 'xs',
                            color: 'currentColor'
                        })
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: d.palettePreview,
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
