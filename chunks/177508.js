n.d(t, {
    Z: function () {
        return I;
    }
}),
    n(757143),
    n(47120),
    n(390547);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(971809),
    o = n(442837),
    c = n(481060),
    d = n(514361),
    u = n(526156),
    m = n(726985),
    h = n(981631),
    g = n(231338),
    p = n(936535);
let x = Object.keys(c.Button.Colors).filter((e) => 'CUSTOM' !== e),
    S = Object.keys(c.Button.Looks).filter((e) => 'BLANK' !== e),
    T = Object.keys(c.Button.Sizes).filter((e) => 'NONE' !== e);
function C() {
    return (0, i.jsxs)('div', {
        children: [(0, i.jsx)(f, {}), (0, i.jsx)(O, {}), (0, i.jsx)(R, {}), (0, i.jsx)(v, {}), (0, i.jsx)(b, {}), (0, i.jsx)(A, {}), (0, i.jsx)(N, {}), (0, i.jsx)(P, {})]
    });
}
let E = ['neutral', 'blue_new', 'blurple', 'green_new', 'red_new', 'teal_new', 'yellow_new', 'orange_new'];
function _() {
    return E.map((e) =>
        (0, i.jsxs)(
            'div',
            {
                className: p.palette,
                children: [
                    (0, i.jsx)(c.Text, {
                        variant: 'text-lg/semibold',
                        children: e
                    }),
                    (0, i.jsx)('div', {
                        className: p.colors,
                        children: Array.from({ length: 100 }, (t, n) =>
                            (0, i.jsx)(
                                'div',
                                {
                                    className: p.color,
                                    style: { background: 'var(--'.concat(e.replace('_', '-'), '-').concat(n + 1, ')') },
                                    children: (0, i.jsx)(c.ThemeProvider, {
                                        theme: n < 50 ? 'light' : 'dark',
                                        children: (t) =>
                                            (0, i.jsxs)(c.Text, {
                                                className: t,
                                                variant: 'text-xs/medium',
                                                children: [e, '.', n + 1]
                                            })
                                    })
                                },
                                n
                            )
                        )
                    })
                ]
            },
            e
        )
    );
}
function I() {
    return (0, i.jsx)(u.Z, {
        parentSetting: m.s6.DESIGN_SYSTEMS,
        settingsSection: h.oAB.DESIGN_SYSTEMS,
        tabs: [
            {
                title: 'Components',
                component: () => (0, i.jsx)(C, {}),
                setting: m.s6.DESIGN_SYSTEMS_COMPONENTS
            },
            {
                title: 'Colors',
                component: () => (0, i.jsx)(_, {}),
                setting: m.s6.DESIGN_SYSTEMS_COLORS
            }
        ]
    });
}
function f() {
    let [e, t] = s.useState(!1),
        n = x.flatMap((e) => [
            ...S.map((t) =>
                (0, i.jsxs)(
                    c.Button,
                    {
                        color: c.Button.Colors[e],
                        look: c.Button.Looks[t],
                        fullWidth: !0,
                        style: { textTransform: 'capitalize' },
                        children: [e.toLowerCase(), ' - ', t.toLowerCase()]
                    },
                    e + t
                )
            ),
            (0, i.jsx)('hr', { className: p.sectionDivider }, e + 'divider')
        ]),
        r = T.flatMap((e) =>
            (0, i.jsx)(c.Button, {
                color: c.Button.Colors.BRAND,
                look: c.Button.Looks.FILLED,
                size: c.Button.Sizes[e],
                fullWidth: !0,
                style: { textTransform: 'capitalize' },
                children: e.toLowerCase()
            })
        );
    return (0, i.jsxs)('div', {
        className: p.section,
        children: [
            (0, i.jsx)(c.Heading, {
                variant: 'heading-xl/semibold',
                children: 'Buttons'
            }),
            (0, i.jsx)(c.Checkbox, {
                value: e,
                onChange: (e, n) => t(n),
                children: (0, i.jsx)(c.Text, {
                    variant: 'text-md/medium',
                    children: 'Show all buttons (WIP)'
                })
            }),
            e
                ? (0, i.jsxs)('div', {
                      className: p.buttons,
                      children: [
                          (0, i.jsx)(c.ThemeProvider, {
                              theme: g.BR.DARKER,
                              children: (e) =>
                                  (0, i.jsx)('div', {
                                      className: l()(e, p.section),
                                      children: n
                                  })
                          }),
                          (0, i.jsx)(c.ThemeProvider, {
                              theme: g.BR.LIGHT,
                              children: (e) =>
                                  (0, i.jsx)('div', {
                                      className: l()(e, p.section),
                                      children: n
                                  })
                          }),
                          (0, i.jsx)(c.ThemeProvider, {
                              theme: g.BR.DARKER,
                              children: (e) =>
                                  (0, i.jsxs)('div', {
                                      className: l()(e, p.section),
                                      children: [
                                          (0, i.jsx)(c.Button, {
                                              color: c.Button.Colors.BRAND,
                                              look: c.Button.Looks.FILLED,
                                              disabled: !0,
                                              children: 'Disabled'
                                          }),
                                          r
                                      ]
                                  })
                          }),
                          (0, i.jsx)(c.ThemeProvider, {
                              theme: g.BR.LIGHT,
                              children: (e) =>
                                  (0, i.jsxs)('div', {
                                      className: l()(e, p.section),
                                      children: [
                                          (0, i.jsx)(c.Button, {
                                              color: c.Button.Colors.BRAND,
                                              look: c.Button.Looks.FILLED,
                                              disabled: !0,
                                              children: 'Disabled'
                                          }),
                                          r
                                      ]
                                  })
                          })
                      ]
                  })
                : null,
            (0, i.jsx)('div', {
                style: { display: 'flex' },
                children: (0, i.jsx)(c.Button, {
                    color: c.Button.Colors.BRAND,
                    look: c.Button.Looks.FILLED,
                    size: c.Button.Sizes.TINY,
                    children: 'Tiny'
                })
            }),
            (0, i.jsx)('div', {
                style: { display: 'flex' },
                children: (0, i.jsx)(c.Button, {
                    color: c.Button.Colors.BRAND,
                    look: c.Button.Looks.FILLED,
                    size: c.Button.Sizes.SMALL,
                    children: 'Small'
                })
            }),
            (0, i.jsx)('div', {
                style: { display: 'flex' },
                children: (0, i.jsx)(c.Button, {
                    color: c.Button.Colors.BRAND,
                    look: c.Button.Looks.FILLED,
                    size: c.Button.Sizes.MEDIUM,
                    children: 'Medium'
                })
            }),
            (0, i.jsx)('div', {
                style: { display: 'flex' },
                children: (0, i.jsx)(c.Button, {
                    color: c.Button.Colors.BRAND,
                    look: c.Button.Looks.FILLED,
                    size: c.Button.Sizes.LARGE,
                    children: 'Large'
                })
            }),
            (0, i.jsx)(j, {})
        ]
    });
}
function N() {
    let [e, t] = s.useState('1');
    return (0, i.jsxs)('div', {
        className: p.section,
        children: [
            (0, i.jsx)(c.Heading, {
                variant: 'heading-xl/semibold',
                children: 'TabBar'
            }),
            (0, i.jsxs)(c.TabBar, {
                type: 'top',
                look: 'brand',
                selectedItem: e,
                onItemSelect: (e) => t(e),
                className: p.tabBar,
                children: [
                    (0, i.jsx)(c.TabBar.Item, {
                        id: '1',
                        children: 'Tab 1'
                    }),
                    (0, i.jsx)(c.TabBar.Item, {
                        id: '2',
                        children: 'Tab 2'
                    }),
                    (0, i.jsx)(c.TabBar.Item, {
                        id: '3',
                        children: 'Tab 3'
                    })
                ]
            }),
            (0, i.jsxs)(c.Text, {
                variant: 'text-md/medium',
                children: ['Selected tab: ', e]
            })
        ]
    });
}
function A() {
    let [e, t] = s.useState(1),
        [n, r] = s.useState(!1),
        [l, a] = s.useState(5),
        [o, d] = s.useState(!1);
    return (0, i.jsxs)('div', {
        className: p.section,
        children: [
            (0, i.jsx)(c.Heading, {
                variant: 'heading-xl/semibold',
                children: 'Context Menus'
            }),
            (0, i.jsx)('span', {
                children: (0, i.jsx)(c.Popout, {
                    shouldShow: o,
                    renderPopout: () =>
                        (0, i.jsxs)(c.Menu, {
                            navId: 'demo',
                            'aria-label': 'Demo Actions',
                            onClose: () => null,
                            onSelect: () => null,
                            children: [
                                (0, i.jsxs)(c.MenuGroup, {
                                    label: 'Basic items',
                                    children: [
                                        (0, i.jsx)(c.MenuItem, {
                                            id: 'first',
                                            label: 'An option'
                                        }),
                                        (0, i.jsx)(c.MenuItem, {
                                            id: 'second',
                                            label: 'An option with an icon',
                                            icon: c.ChatIcon
                                        }),
                                        (0, i.jsxs)(c.MenuItem, {
                                            id: 'item-with-submenu',
                                            label: 'Item with submenu',
                                            children: [
                                                (0, i.jsx)(c.MenuItem, {
                                                    id: 'subitem-1',
                                                    label: 'Subitem 1'
                                                }),
                                                (0, i.jsx)(c.MenuItem, {
                                                    id: 'subitem-2',
                                                    label: 'Subitem 2'
                                                }),
                                                (0, i.jsx)(c.MenuItem, {
                                                    id: 'subitem-3',
                                                    label: 'Subitem 3'
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                (0, i.jsxs)(c.MenuGroup, {
                                    label: 'Inputs',
                                    children: [
                                        (0, i.jsx)(c.MenuCheckboxItem, {
                                            id: 'checkable',
                                            label: 'Checkbox',
                                            checked: n,
                                            action: () => r(!n)
                                        }),
                                        (0, i.jsx)(c.MenuRadioItem, {
                                            id: 'radio-one',
                                            group: 'a-group',
                                            label: 'Radio 1',
                                            action: () => t(1),
                                            checked: 1 === e
                                        }),
                                        (0, i.jsx)(c.MenuRadioItem, {
                                            id: 'radio-two',
                                            group: 'a-group',
                                            label: 'Radio 2',
                                            action: () => t(2),
                                            checked: 2 === e
                                        }),
                                        (0, i.jsx)(c.MenuRadioItem, {
                                            id: 'radio-three',
                                            group: 'a-group',
                                            label: 'Radio 3',
                                            action: () => t(3),
                                            checked: 3 === e
                                        }),
                                        (0, i.jsx)(c.MenuControlItem, {
                                            id: 'slider',
                                            label: 'Slider',
                                            control: (e, t) =>
                                                (0, i.jsx)(c.MenuSliderControl, {
                                                    ref: t,
                                                    value: l,
                                                    minValue: 0,
                                                    maxValue: 100,
                                                    onChange: (e) => a(e),
                                                    'aria-label': 'Slider'
                                                })
                                        })
                                    ]
                                }),
                                (0, i.jsx)(c.MenuSeparator, {}),
                                (0, i.jsx)(c.MenuItem, {
                                    id: 'danger',
                                    label: 'A destructive option',
                                    color: 'danger',
                                    icon: c.TrashIcon
                                })
                            ]
                        }),
                    children: () =>
                        (0, i.jsx)(c.Button, {
                            onClick: () => d(!o),
                            children: 'Toggle context menu'
                        })
                })
            })
        ]
    });
}
function b() {
    return (0, i.jsxs)('div', {
        className: p.section,
        children: [
            (0, i.jsx)(c.Heading, {
                variant: 'heading-xl/semibold',
                children: 'Tooltips'
            }),
            (0, i.jsxs)('div', {
                style: {
                    display: 'flex',
                    gap: 8,
                    flexWrap: 'wrap'
                },
                children: [
                    (0, i.jsx)(c.Tooltip, {
                        text: "Here's top aligned tooltip text!",
                        position: 'top',
                        children: (e) =>
                            (0, i.jsx)(c.Button, {
                                ...e,
                                children: 'Tooltip on the top'
                            })
                    }),
                    (0, i.jsx)(c.Tooltip, {
                        text: "Here's right aligned tooltip text!",
                        position: 'left',
                        children: (e) =>
                            (0, i.jsx)(c.Button, {
                                ...e,
                                children: 'Tooltip on the left'
                            })
                    }),
                    (0, i.jsx)(c.Tooltip, {
                        text: "Here's bottom aligned tooltip text!",
                        position: 'bottom',
                        children: (e) =>
                            (0, i.jsx)(c.Button, {
                                ...e,
                                children: 'Tooltip on the bottom'
                            })
                    }),
                    (0, i.jsx)(c.Tooltip, {
                        text: "Here's right aligned tooltip text!",
                        position: 'right',
                        children: (e) =>
                            (0, i.jsx)(c.Button, {
                                ...e,
                                children: 'Tooltip on the right'
                            })
                    })
                ]
            }),
            (0, i.jsx)('div', {})
        ]
    });
}
function v() {
    let [e, t] = s.useState(!1),
        [n, r] = s.useState(!1),
        [l, a] = s.useState('auto');
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                className: p.section,
                children: [
                    (0, i.jsx)(c.Heading, {
                        variant: 'heading-xl/semibold',
                        children: 'Checkboxes'
                    }),
                    (0, i.jsx)(c.Checkbox, {
                        value: e,
                        onChange: (e, n) => t(n),
                        children: (0, i.jsx)(c.Text, {
                            variant: 'text-md/medium',
                            children: 'Checkbox input'
                        })
                    }),
                    (0, i.jsx)(c.Checkbox, {
                        value: e,
                        onChange: (e, n) => t(n),
                        disabled: !0,
                        children: (0, i.jsx)(c.Text, {
                            variant: 'text-md/medium',
                            children: 'Disabled checkbox'
                        })
                    }),
                    (0, i.jsx)(c.Checkbox, {
                        value: e,
                        onChange: (e, n) => t(n),
                        readOnly: !0,
                        children: (0, i.jsx)(c.Text, {
                            variant: 'text-md/medium',
                            children: 'Read-only checkbox'
                        })
                    }),
                    (0, i.jsx)(c.Checkbox, {
                        value: e,
                        onChange: (e, n) => t(n),
                        type: c.Checkbox.Types.ROW,
                        children: (0, i.jsx)(c.Text, {
                            variant: 'text-md/medium',
                            children: 'Checkbox row'
                        })
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: p.section,
                children: [
                    (0, i.jsx)(c.Heading, {
                        variant: 'heading-xl/semibold',
                        children: 'Switches'
                    }),
                    (0, i.jsx)(c.FormSwitch, {
                        hideBorder: !0,
                        value: n,
                        onChange: (e) => r(e),
                        children: 'FormSwitch with a label'
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: p.section,
                children: [
                    (0, i.jsx)(c.Heading, {
                        variant: 'heading-xl/semibold',
                        children: 'Radio Buttons'
                    }),
                    (0, i.jsx)(c.FormItem, {
                        children: (0, i.jsx)(c.RadioGroup, {
                            onChange: (e) => {
                                let { value: t } = e;
                                return a(t);
                            },
                            options: [
                                {
                                    value: 'auto',
                                    name: 'Auto'
                                },
                                {
                                    value: '720p',
                                    name: '720p'
                                },
                                {
                                    value: '1080p',
                                    name: '1080p'
                                }
                            ],
                            value: l
                        })
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: p.section,
                children: [
                    (0, i.jsx)(c.Heading, {
                        variant: 'heading-xl/semibold',
                        children: 'Slider'
                    }),
                    (0, i.jsxs)('div', {
                        className: p.slider,
                        children: [
                            (0, i.jsx)(c.Text, {
                                variant: 'text-md/medium',
                                children: 'Standard slider'
                            }),
                            (0, i.jsx)(c.Slider, {
                                minValue: 0,
                                maxValue: 100,
                                initialValue: 50,
                                defaultValue: 50,
                                markers: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: p.slider,
                        children: [
                            (0, i.jsx)(c.Text, {
                                variant: 'text-md/medium',
                                children: 'Sticky markers'
                            }),
                            (0, i.jsx)(c.Slider, {
                                minValue: 0,
                                maxValue: 100,
                                initialValue: 50,
                                markers: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
                                stickToMarkers: !0
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: p.slider,
                        children: [
                            (0, i.jsx)(c.Text, {
                                variant: 'text-md/medium',
                                children: 'Non-uniform markers'
                            }),
                            (0, i.jsx)(c.Slider, {
                                minValue: 0,
                                maxValue: 100,
                                initialValue: 50,
                                markers: [0, 20, 50, 100],
                                equidistant: !1
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: p.slider,
                        children: [
                            (0, i.jsx)(c.Text, {
                                variant: 'text-md/medium',
                                children: 'Non-uniform equidistant markers'
                            }),
                            (0, i.jsx)(c.Slider, {
                                minValue: 0,
                                maxValue: 100,
                                initialValue: 50,
                                markers: [0, 20, 50, 100],
                                equidistant: !0
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: p.slider,
                        children: [
                            (0, i.jsx)(c.Text, {
                                variant: 'text-md/medium',
                                children: 'No markers'
                            }),
                            (0, i.jsx)(c.Slider, {
                                minValue: 0,
                                maxValue: 100,
                                initialValue: 50
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: p.slider,
                        children: [
                            (0, i.jsx)(c.Text, {
                                variant: 'text-md/medium',
                                children: 'Mini slider'
                            }),
                            (0, i.jsx)(c.Slider, {
                                mini: !0,
                                minValue: 0,
                                maxValue: 100,
                                initialValue: 50
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
function j() {
    return (0, i.jsxs)('div', {
        className: p.shinyButtonExamples,
        children: [
            (0, i.jsx)(c.ShinyButton, {
                size: c.Button.Sizes.MEDIUM,
                shineSize: c.ShinyButton.ShineSizes.SMALL,
                onClick: () => {},
                children: 'Shiny Button'
            }),
            (0, i.jsx)(c.ShinyButton, {
                size: c.Button.Sizes.MEDIUM,
                shineSize: c.ShinyButton.ShineSizes.SMALL,
                onlyShineOnHover: !0,
                onClick: () => {},
                children: 'Shine on Hover'
            })
        ]
    });
}
function O() {
    let [e, t] = s.useState(null),
        [n, r] = s.useState(null),
        [l, o] = s.useState([]),
        [d, u] = s.useState([]),
        [m, h] = s.useState([]);
    return (0, i.jsxs)('div', {
        className: p.searchableSelectExamples,
        children: [
            (0, i.jsx)(c.Heading, {
                variant: 'heading-xl/semibold',
                children: 'SearchableSelect'
            }),
            (0, i.jsx)(c.SearchableSelect, {
                placeholder: 'Single select',
                value: e,
                onChange: (e) => t(e),
                options: a.G
            }),
            (0, i.jsx)(c.SearchableSelect, {
                placeholder: 'Single select (clearable)',
                clearable: !0,
                value: n,
                onChange: (e) => r(e),
                options: a.G
            }),
            (0, i.jsx)(c.SearchableSelect, {
                placeholder: 'Multi select',
                multi: !0,
                value: l,
                onChange: (e) => o(e),
                options: a.G
            }),
            (0, i.jsx)(c.SearchableSelect, {
                placeholder: 'Multi select (clearable)',
                multi: !0,
                clearable: !0,
                value: m,
                onChange: (e) => h(e),
                options: a.G
            }),
            (0, i.jsx)(c.SearchableSelect, {
                placeholder: 'Multi select (custom pills)',
                multi: !0,
                value: d,
                onChange: (e) => u(e),
                options: a.G,
                hidePills: !0,
                customPillContainerClassName: p.customPillContainer,
                renderCustomPill: (e) =>
                    (0, i.jsx)('div', {
                        style: {
                            padding: 8,
                            border: '1px solid var(--bg-brand)',
                            borderRadius: 8
                        },
                        children: (0, i.jsx)(c.Text, {
                            variant: 'text-md/bold',
                            children: e.label
                        })
                    })
            })
        ]
    });
}
function R() {
    let [e, t] = s.useState(''),
        [n, r] = s.useState(''),
        [l, a] = s.useState('');
    return (0, i.jsxs)('div', {
        className: p.section,
        children: [
            (0, i.jsx)(c.Heading, {
                variant: 'heading-xl/semibold',
                children: 'TextInput'
            }),
            (0, i.jsx)(c.FormItem, {
                children: (0, i.jsx)(c.SearchBar, {
                    size: c.SearchBar.Sizes.MEDIUM,
                    placeholder: 'Search...',
                    onChange: (e) => a(e),
                    query: l,
                    onClear: () => a('')
                })
            }),
            (0, i.jsx)(c.FormItem, {
                title: 'Disabled',
                disabled: !0,
                children: (0, i.jsx)(c.TextInput, {
                    placeholder: 'Disabled',
                    disabled: !0
                })
            }),
            (0, i.jsx)(c.FormItem, {
                title: 'Error',
                children: (0, i.jsx)(c.TextInput, {
                    required: !0,
                    error: 'This must have a value'
                })
            }),
            (0, i.jsx)(c.FormItem, {
                title: 'Error',
                children: (0, i.jsx)(c.TextInput, {
                    defaultValue: 'Not a valid value',
                    error: 'This has an error.'
                })
            }),
            (0, i.jsx)(c.FormItem, {
                title: 'Read only',
                children: (0, i.jsx)(c.TextInput, {
                    value: 'Read-only, not-editable field',
                    editable: !1
                })
            }),
            (0, i.jsx)(c.FormItem, {
                title: 'Input with a label',
                children: (0, i.jsx)(c.TextInput, {
                    placeholder: 'Real placeholder',
                    value: e,
                    onChange: t
                })
            }),
            (0, i.jsx)(c.FormItem, {
                title: 'Text area',
                children: (0, i.jsx)(c.TextArea, {
                    placeholder: 'Text area placeholder',
                    showCharacterCount: !0,
                    value: n,
                    onChange: r
                })
            })
        ]
    });
}
function P() {
    let e = (0, o.e7)([d.Z], () => d.Z.gradientPreset);
    return (0, i.jsx)(c.ThemeProvider, {
        theme: g.BR.DARKER,
        disableAdaptiveTheme: !0,
        children: (t) =>
            (0, i.jsxs)('div', {
                className: l()(t, p.section),
                children: [
                    (0, i.jsx)(c.Button, {
                        color: c.Button.Colors.PRIMARY,
                        look: c.Button.Looks.FILLED,
                        fullWidth: !0,
                        children: 'Button'
                    }),
                    (0, i.jsx)(c.ThemeProvider, {
                        theme: g.BR.LIGHT,
                        children: (t) =>
                            (0, i.jsxs)('div', {
                                className: l()(t, p.section),
                                children: [
                                    (0, i.jsx)(c.Button, {
                                        color: c.Button.Colors.PRIMARY,
                                        look: c.Button.Looks.FILLED,
                                        fullWidth: !0,
                                        children: 'Button'
                                    }),
                                    (0, i.jsx)(c.ThemeProvider, {
                                        theme: g.BR.DARKER,
                                        children: (e) =>
                                            (0, i.jsx)('div', {
                                                className: l()(e, p.section),
                                                children: (0, i.jsx)(c.Button, {
                                                    color: c.Button.Colors.PRIMARY,
                                                    look: c.Button.Looks.FILLED,
                                                    fullWidth: !0,
                                                    children: 'Button'
                                                })
                                            })
                                    }),
                                    (0, i.jsx)(c.ThemeProvider, {
                                        gradient: e,
                                        children: (e) =>
                                            (0, i.jsx)('div', {
                                                className: l()(e, p.section),
                                                children: (0, i.jsx)(c.Button, {
                                                    color: c.Button.Colors.PRIMARY,
                                                    look: c.Button.Looks.FILLED,
                                                    fullWidth: !0,
                                                    children: 'Button'
                                                })
                                            })
                                    })
                                ]
                            })
                    })
                ]
            })
    });
}
