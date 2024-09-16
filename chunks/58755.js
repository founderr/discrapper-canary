n.d(t, {
    P: function () {
        return m;
    }
}),
    n(724458),
    n(47120);
var r = n(735250),
    a = n(470079),
    l = n(203165),
    i = n(481060),
    o = n(246992),
    s = n(500949),
    c = n(806714);
let d = s.M3.map((e) => ({
        value: e.space,
        name: e.name
    })),
    u = Object.values(s.iw).map((e) => ({
        value: e,
        name: e
    })),
    h = Array.from(
        Array.from(
            Object.keys(l.b).reduce((e, t) => {
                let [n] = t.split('.');
                return e.add(n), e;
            }, new Set())
        )
    ).map((e) => ({
        value: e,
        label: e
    }));
function m(e) {
    let { state: t, setState: n } = e,
        { scales: d } = t,
        [u, m] = a.useState(null),
        p = (0, r.jsxs)('div', {
            className: c.section,
            children: [
                (0, r.jsx)(i.SearchableSelect, {
                    options: h,
                    placeholder: 'Select a scale to edit...',
                    value: void 0,
                    onChange: (e) => {
                        let r = t.scales.find((t) => t.name === e);
                        if (null == r)
                            (r = {
                                name: e,
                                base: 'plum' === e ? l.b['plum.10'].hex : l.b[''.concat(e, '.500')].hex,
                                colorSpace: s.uH.ICtCp,
                                useEquidistantLuminance: !1,
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
                    popoutLayerContext: o.O$
                }),
                (0, r.jsx)('ul', {
                    className: c.overrides,
                    children: d.map((e) =>
                        (0, r.jsx)(
                            'li',
                            {
                                children: (0, r.jsx)(i.Clickable, {
                                    onClick: () => m(e.name),
                                    style: { cursor: 'pointer' },
                                    children: (0, r.jsx)(f, {
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
        g = d.find((e) => e.name === u),
        b =
            null != g
                ? (0, r.jsx)(x, {
                      onClose: () => m(null),
                      scale: g,
                      setState: n
                  })
                : p;
    return (0, r.jsx)('div', { children: b });
}
function x(e) {
    let { scale: t, setState: n, onClose: a } = e,
        { name: l, base: o, darkness: h, lightness: m, useEquidistantLuminance: x, colorSpace: f, easing: p = s.iw.LINEAR, easingStrength: g = 1 } = t,
        b = (0, s.XM)(t);
    return (0, r.jsxs)(i.FormSection, {
        className: c.paletteSettings,
        children: [
            (0, r.jsxs)('div', {
                className: c.titleWithIcon,
                children: [
                    (0, r.jsx)(i.Clickable, {
                        onClick: a,
                        style: { maxWidth: 80 },
                        children: (0, r.jsx)(i.ArrowSmallLeftIcon, { size: 'sm' })
                    }),
                    (0, r.jsx)(i.Text, {
                        variant: 'text-lg/bold',
                        children: l
                    })
                ]
            }),
            (0, r.jsxs)(i.FormItem, {
                title: 'Base Color',
                className: c.formItem,
                children: [
                    (0, r.jsxs)(i.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-secondary',
                        children: ['The base color the ', (0, r.jsx)('code', { children: l }), ' palette is generated from.']
                    }),
                    (0, r.jsx)('input', {
                        type: 'color',
                        value: o,
                        onChange: (e) => (0, s.Ib)(l, e.target.value, n)
                    })
                ]
            }),
            (0, r.jsxs)(i.FormItem, {
                title: 'Color Space',
                children: [
                    (0, r.jsx)(i.FormText, {
                        type: i.FormTextTypes.DESCRIPTION,
                        children: 'The color space used to generate the palette. Different color spaces will produce different results.'
                    }),
                    (0, r.jsx)(i.RadioGroup, {
                        options: d,
                        value: f,
                        onChange: (e) => (0, s.t4)(l, e.value, n)
                    })
                ]
            }),
            (0, r.jsxs)(i.FormSection, {
                title: 'Luminance',
                children: [
                    (0, r.jsx)(i.FormItem, {
                        children: (0, r.jsx)(i.FormSwitch, {
                            note: 'By default this will use the luminance steps of the existing scale. Enable this to use equidistant luminance steps instead. Turn this on to enable advanced color options.',
                            value: x,
                            onChange: (e) => (0, s.VS)(l, e, n),
                            children: 'Use equidistant luminance steps'
                        })
                    }),
                    x &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsxs)(i.FormItem, {
                                    title: 'Darkness ('.concat(h.toFixed(), '%)'),
                                    disabled: !x,
                                    children: [
                                        (0, r.jsx)(i.FormText, {
                                            type: i.FormTextTypes.DESCRIPTION,
                                            children: 'Adjust the minimum lumiance of the darkest step in the palette.'
                                        }),
                                        (0, r.jsx)(i.Slider, {
                                            onValueRender: () => null,
                                            initialValue: 0,
                                            minValue: 0,
                                            maxValue: 20,
                                            onValueChange: (e) => (0, s.YE)(l, e, n)
                                        })
                                    ]
                                }),
                                (0, r.jsxs)(i.FormItem, {
                                    title: 'Lightness ('.concat(m.toFixed(), '%)'),
                                    disabled: !x,
                                    children: [
                                        (0, r.jsx)(i.FormText, {
                                            type: i.FormTextTypes.DESCRIPTION,
                                            children: 'Adjust the maximum lumiance of the lightest step in the palette.'
                                        }),
                                        (0, r.jsx)(i.Slider, {
                                            onValueRender: () => null,
                                            initialValue: m,
                                            minValue: 80,
                                            maxValue: 100,
                                            onValueChange: (e) => (0, s.h9)(l, e, n)
                                        })
                                    ]
                                })
                            ]
                        })
                ]
            }),
            x &&
                (0, r.jsxs)(i.FormSection, {
                    title: 'Easing',
                    children: [
                        (0, r.jsxs)(i.FormItem, {
                            title: 'Easing Function',
                            children: [
                                (0, r.jsx)(i.FormText, {
                                    type: i.FormTextTypes.DESCRIPTION,
                                    children: 'The easing function used to generate the palette. Different easing functions will produce different results.'
                                }),
                                (0, r.jsx)(i.RadioGroup, {
                                    options: u,
                                    value: p,
                                    onChange: (e) => {
                                        (0, s.BZ)(l, e.value, n);
                                    }
                                })
                            ]
                        }),
                        (0, r.jsxs)(i.FormItem, {
                            title: 'Easing Strength ('.concat(g.toFixed(2), ')'),
                            children: [
                                (0, r.jsx)(i.FormText, {
                                    type: i.FormTextTypes.DESCRIPTION,
                                    children: 'Adjust the strength of the easing function.'
                                }),
                                (0, r.jsx)(i.Slider, {
                                    onValueRender: () => null,
                                    initialValue: g,
                                    minValue: 1,
                                    maxValue: 3,
                                    onValueChange: (e) => (0, s.rd)(l, e, n)
                                })
                            ]
                        })
                    ]
                }),
            (0, r.jsx)(i.FormItem, {
                title: 'Palette Preview',
                children: (0, r.jsx)('div', {
                    className: c.paletteOverrides,
                    children: Object.entries(b).map((e) => {
                        let [t, n] = e;
                        return (0, r.jsx)(
                            'div',
                            {
                                style: { backgroundColor: n.to('srgb').toString({ format: 'hex' }) },
                                children: (0, r.jsx)(i.Text, {
                                    variant: 'text-xs/medium',
                                    color: 'text-secondary',
                                    children: t
                                })
                            },
                            t
                        );
                    })
                })
            })
        ]
    });
}
function f(e) {
    let { scale: t, onRemove: n } = e,
        l = a.useMemo(() => {
            let e = (0, s.A0)(t.name),
                n = (0, s.XM)(t);
            return e.map((e) => n[''.concat(t.name, '.').concat(e)].to('srgb').toString({ format: 'hex' }));
        }, [t]);
    return (0, r.jsxs)('li', {
        className: c.override,
        children: [
            (0, r.jsxs)('div', {
                className: c.overrideHeader,
                children: [
                    (0, r.jsx)('div', {
                        className: c.title,
                        children: (0, r.jsx)(i.Text, {
                            lineClamp: 1,
                            variant: 'text-md/medium',
                            className: c.overrideHeading,
                            tabularNumbers: !0,
                            children: t.name
                        })
                    }),
                    (0, r.jsx)('span', {}),
                    (0, r.jsx)('span', {}),
                    (0, r.jsx)(i.Clickable, {
                        className: c.removeOverride,
                        onClick: n,
                        children: (0, r.jsx)(i.XSmallIcon, {
                            size: 'xs',
                            color: 'currentColor'
                        })
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: c.palettePreview,
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
