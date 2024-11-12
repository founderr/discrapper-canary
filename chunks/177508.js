n.d(t, {
    Z: function () {
        return x;
    }
}),
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
    u = n(231338),
    m = n(303431);
let h = Object.keys(c.Button.Colors).filter((e) => 'CUSTOM' !== e),
    g = Object.keys(c.Button.Looks).filter((e) => 'BLANK' !== e),
    p = Object.keys(c.Button.Sizes).filter((e) => 'NONE' !== e);
function x() {
    return (0, i.jsxs)('div', {
        children: [(0, i.jsx)(S, {}), (0, i.jsx)(I, {}), (0, i.jsx)(N, {}), (0, i.jsx)(_, {}), (0, i.jsx)(E, {}), (0, i.jsx)(C, {}), (0, i.jsx)(T, {}), (0, i.jsx)(A, {})]
    });
}
function S() {
    let [e, t] = s.useState(!1),
        n = h.flatMap((e) => [
            ...g.map((t) =>
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
            (0, i.jsx)('hr', { className: m.sectionDivider }, e + 'divider')
        ]),
        r = p.flatMap((e) =>
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
        className: m.section,
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
                      className: m.buttons,
                      children: [
                          (0, i.jsx)(c.ThemeProvider, {
                              theme: u.BR.DARKER,
                              children: (e) =>
                                  (0, i.jsx)('div', {
                                      className: l()(e, m.section),
                                      children: n
                                  })
                          }),
                          (0, i.jsx)(c.ThemeProvider, {
                              theme: u.BR.LIGHT,
                              children: (e) =>
                                  (0, i.jsx)('div', {
                                      className: l()(e, m.section),
                                      children: n
                                  })
                          }),
                          (0, i.jsx)(c.ThemeProvider, {
                              theme: u.BR.DARKER,
                              children: (e) =>
                                  (0, i.jsxs)('div', {
                                      className: l()(e, m.section),
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
                              theme: u.BR.LIGHT,
                              children: (e) =>
                                  (0, i.jsxs)('div', {
                                      className: l()(e, m.section),
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
            (0, i.jsx)(f, {})
        ]
    });
}
function T() {
    let [e, t] = s.useState('1');
    return (0, i.jsxs)('div', {
        className: m.section,
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
                className: m.tabBar,
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
function C() {
    let [e, t] = s.useState(1),
        [n, r] = s.useState(!1),
        [l, a] = s.useState(5),
        [o, d] = s.useState(!1);
    return (0, i.jsxs)('div', {
        className: m.section,
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
function E() {
    return (0, i.jsxs)('div', {
        className: m.section,
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
function _() {
    let [e, t] = s.useState(!1),
        [n, r] = s.useState(!1),
        [l, a] = s.useState('auto');
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                className: m.section,
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
                className: m.section,
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
                className: m.section,
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
                className: m.section,
                children: [
                    (0, i.jsx)(c.Heading, {
                        variant: 'heading-xl/semibold',
                        children: 'Slider'
                    }),
                    (0, i.jsxs)('div', {
                        className: m.slider,
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
                        className: m.slider,
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
                        className: m.slider,
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
                        className: m.slider,
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
                        className: m.slider,
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
                        className: m.slider,
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
function f() {
    return (0, i.jsxs)('div', {
        className: m.shinyButtonExamples,
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
function I() {
    let [e, t] = s.useState(null),
        [n, r] = s.useState(null),
        [l, o] = s.useState([]),
        [d, u] = s.useState([]),
        [h, g] = s.useState([]);
    return (0, i.jsxs)('div', {
        className: m.searchableSelectExamples,
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
                value: h,
                onChange: (e) => g(e),
                options: a.G
            }),
            (0, i.jsx)(c.SearchableSelect, {
                placeholder: 'Multi select (custom pills)',
                multi: !0,
                value: d,
                onChange: (e) => u(e),
                options: a.G,
                hidePills: !0,
                customPillContainerClassName: m.customPillContainer,
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
function N() {
    let [e, t] = s.useState(''),
        [n, r] = s.useState(''),
        [l, a] = s.useState('');
    return (0, i.jsxs)('div', {
        className: m.section,
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
function A() {
    let e = (0, o.e7)([d.Z], () => d.Z.gradientPreset);
    return (0, i.jsx)(c.ThemeProvider, {
        theme: u.BR.DARKER,
        disableColorMixing: !0,
        children: (t) =>
            (0, i.jsxs)('div', {
                className: l()(t, m.section),
                children: [
                    (0, i.jsx)(c.Button, {
                        color: c.Button.Colors.PRIMARY,
                        look: c.Button.Looks.FILLED,
                        fullWidth: !0,
                        children: 'Button'
                    }),
                    (0, i.jsx)(c.ThemeProvider, {
                        theme: u.BR.LIGHT,
                        children: (t) =>
                            (0, i.jsxs)('div', {
                                className: l()(t, m.section),
                                children: [
                                    (0, i.jsx)(c.Button, {
                                        color: c.Button.Colors.PRIMARY,
                                        look: c.Button.Looks.FILLED,
                                        fullWidth: !0,
                                        children: 'Button'
                                    }),
                                    (0, i.jsx)(c.ThemeProvider, {
                                        theme: u.BR.DARKER,
                                        children: (e) =>
                                            (0, i.jsx)('div', {
                                                className: l()(e, m.section),
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
                                                className: l()(e, m.section),
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
