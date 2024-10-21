t.d(s, {
    Z: function () {
        return E;
    }
}),
    t(47120),
    t(390547);
var n = t(200651),
    a = t(192379),
    i = t(120356),
    r = t.n(i),
    o = t(971809),
    l = t(481060),
    c = t(303431);
let d = Object.keys(l.Button.Colors).filter((e) => 'CUSTOM' !== e),
    _ = Object.keys(l.Button.Looks).filter((e) => 'BLANK' !== e),
    u = Object.keys(l.Button.Sizes).filter((e) => 'NONE' !== e);
function E() {
    return (0, n.jsxs)('div', {
        children: [(0, n.jsx)(T, {}), (0, n.jsx)(C, {}), (0, n.jsx)(g, {}), (0, n.jsx)(m, {}), (0, n.jsx)(N, {}), (0, n.jsx)(I, {}), (0, n.jsx)(S, {})]
    });
}
function T() {
    let [e, s] = a.useState(!1),
        t = d.flatMap((e) => [
            ..._.map((s) =>
                (0, n.jsxs)(
                    l.Button,
                    {
                        color: l.Button.Colors[e],
                        look: l.Button.Looks[s],
                        fullWidth: !0,
                        style: { textTransform: 'capitalize' },
                        children: [e.toLowerCase(), ' - ', s.toLowerCase()]
                    },
                    e + s
                )
            ),
            (0, n.jsx)('hr', { className: c.sectionDivider }, e + 'divider')
        ]),
        i = u.flatMap((e) =>
            (0, n.jsx)(l.Button, {
                color: l.Button.Colors.BRAND,
                look: l.Button.Looks.FILLED,
                size: l.Button.Sizes[e],
                fullWidth: !0,
                style: { textTransform: 'capitalize' },
                children: e.toLowerCase()
            })
        );
    return (0, n.jsxs)('div', {
        className: c.section,
        children: [
            (0, n.jsx)(l.Heading, {
                variant: 'heading-xl/semibold',
                children: 'Buttons'
            }),
            (0, n.jsx)(l.Checkbox, {
                value: e,
                onChange: (e, t) => s(t),
                children: (0, n.jsx)(l.Text, {
                    variant: 'text-md/medium',
                    children: 'Show all buttons (WIP)'
                })
            }),
            e
                ? (0, n.jsxs)('div', {
                      className: c.buttons,
                      children: [
                          (0, n.jsx)('div', {
                              className: r()('theme-darker', c.section),
                              children: t
                          }),
                          (0, n.jsx)('div', {
                              className: r()('theme-light', c.section),
                              children: t
                          }),
                          (0, n.jsxs)('div', {
                              className: r()('theme-darker', c.section),
                              children: [
                                  (0, n.jsx)(l.Button, {
                                      color: l.Button.Colors.BRAND,
                                      look: l.Button.Looks.FILLED,
                                      disabled: !0,
                                      children: 'Disabled'
                                  }),
                                  i
                              ]
                          }),
                          (0, n.jsxs)('div', {
                              className: r()('theme-light', c.section),
                              children: [
                                  (0, n.jsx)(l.Button, {
                                      color: l.Button.Colors.BRAND,
                                      look: l.Button.Looks.FILLED,
                                      disabled: !0,
                                      children: 'Disabled'
                                  }),
                                  i
                              ]
                          })
                      ]
                  })
                : null,
            (0, n.jsx)('div', {
                style: { display: 'flex' },
                children: (0, n.jsx)(l.Button, {
                    color: l.Button.Colors.BRAND,
                    look: l.Button.Looks.FILLED,
                    size: l.Button.Sizes.TINY,
                    children: 'Tiny'
                })
            }),
            (0, n.jsx)('div', {
                style: { display: 'flex' },
                children: (0, n.jsx)(l.Button, {
                    color: l.Button.Colors.BRAND,
                    look: l.Button.Looks.FILLED,
                    size: l.Button.Sizes.SMALL,
                    children: 'Small'
                })
            }),
            (0, n.jsx)('div', {
                style: { display: 'flex' },
                children: (0, n.jsx)(l.Button, {
                    color: l.Button.Colors.BRAND,
                    look: l.Button.Looks.FILLED,
                    size: l.Button.Sizes.MEDIUM,
                    children: 'Medium'
                })
            }),
            (0, n.jsx)('div', {
                style: { display: 'flex' },
                children: (0, n.jsx)(l.Button, {
                    color: l.Button.Colors.BRAND,
                    look: l.Button.Looks.FILLED,
                    size: l.Button.Sizes.LARGE,
                    children: 'Large'
                })
            }),
            (0, n.jsx)(A, {})
        ]
    });
}
function S() {
    let [e, s] = a.useState('1');
    return (0, n.jsxs)('div', {
        className: c.section,
        children: [
            (0, n.jsx)(l.Heading, {
                variant: 'heading-xl/semibold',
                children: 'TabBar'
            }),
            (0, n.jsxs)(l.TabBar, {
                type: 'top',
                look: 'brand',
                selectedItem: e,
                onItemSelect: (e) => s(e),
                className: c.tabBar,
                children: [
                    (0, n.jsx)(l.TabBar.Item, {
                        id: '1',
                        children: 'Tab 1'
                    }),
                    (0, n.jsx)(l.TabBar.Item, {
                        id: '2',
                        children: 'Tab 2'
                    }),
                    (0, n.jsx)(l.TabBar.Item, {
                        id: '3',
                        children: 'Tab 3'
                    })
                ]
            }),
            (0, n.jsxs)(l.Text, {
                variant: 'text-md/medium',
                children: ['Selected tab: ', e]
            })
        ]
    });
}
function I() {
    let [e, s] = a.useState(1),
        [t, i] = a.useState(!1),
        [r, o] = a.useState(5),
        [d, _] = a.useState(!1);
    return (0, n.jsxs)('div', {
        className: c.section,
        children: [
            (0, n.jsx)(l.Heading, {
                variant: 'heading-xl/semibold',
                children: 'Context Menus'
            }),
            (0, n.jsx)('span', {
                children: (0, n.jsx)(l.Popout, {
                    shouldShow: d,
                    renderPopout: () =>
                        (0, n.jsxs)(l.Menu, {
                            navId: 'demo',
                            'aria-label': 'Demo Actions',
                            onClose: () => null,
                            onSelect: () => null,
                            children: [
                                (0, n.jsxs)(l.MenuGroup, {
                                    label: 'Basic items',
                                    children: [
                                        (0, n.jsx)(l.MenuItem, {
                                            id: 'first',
                                            label: 'An option'
                                        }),
                                        (0, n.jsx)(l.MenuItem, {
                                            id: 'second',
                                            label: 'An option with an icon',
                                            icon: l.ChatIcon
                                        }),
                                        (0, n.jsxs)(l.MenuItem, {
                                            id: 'item-with-submenu',
                                            label: 'Item with submenu',
                                            children: [
                                                (0, n.jsx)(l.MenuItem, {
                                                    id: 'subitem-1',
                                                    label: 'Subitem 1'
                                                }),
                                                (0, n.jsx)(l.MenuItem, {
                                                    id: 'subitem-2',
                                                    label: 'Subitem 2'
                                                }),
                                                (0, n.jsx)(l.MenuItem, {
                                                    id: 'subitem-3',
                                                    label: 'Subitem 3'
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                (0, n.jsxs)(l.MenuGroup, {
                                    label: 'Inputs',
                                    children: [
                                        (0, n.jsx)(l.MenuCheckboxItem, {
                                            id: 'checkable',
                                            label: 'Checkbox',
                                            checked: t,
                                            action: () => i(!t)
                                        }),
                                        (0, n.jsx)(l.MenuRadioItem, {
                                            id: 'radio-one',
                                            group: 'a-group',
                                            label: 'Radio 1',
                                            action: () => s(1),
                                            checked: 1 === e
                                        }),
                                        (0, n.jsx)(l.MenuRadioItem, {
                                            id: 'radio-two',
                                            group: 'a-group',
                                            label: 'Radio 2',
                                            action: () => s(2),
                                            checked: 2 === e
                                        }),
                                        (0, n.jsx)(l.MenuRadioItem, {
                                            id: 'radio-three',
                                            group: 'a-group',
                                            label: 'Radio 3',
                                            action: () => s(3),
                                            checked: 3 === e
                                        }),
                                        (0, n.jsx)(l.MenuControlItem, {
                                            id: 'slider',
                                            label: 'Slider',
                                            control: (e, s) =>
                                                (0, n.jsx)(l.MenuSliderControl, {
                                                    ref: s,
                                                    value: r,
                                                    minValue: 0,
                                                    maxValue: 100,
                                                    onChange: (e) => o(e),
                                                    'aria-label': 'Slider'
                                                })
                                        })
                                    ]
                                }),
                                (0, n.jsx)(l.MenuSeparator, {}),
                                (0, n.jsx)(l.MenuItem, {
                                    id: 'danger',
                                    label: 'A destructive option',
                                    color: 'danger',
                                    icon: l.TrashIcon
                                })
                            ]
                        }),
                    children: () =>
                        (0, n.jsx)(l.Button, {
                            onClick: () => _(!d),
                            children: 'Toggle context menu'
                        })
                })
            })
        ]
    });
}
function N() {
    return (0, n.jsxs)('div', {
        className: c.section,
        children: [
            (0, n.jsx)(l.Heading, {
                variant: 'heading-xl/semibold',
                children: 'Tooltips'
            }),
            (0, n.jsxs)('div', {
                style: {
                    display: 'flex',
                    gap: 8,
                    flexWrap: 'wrap'
                },
                children: [
                    (0, n.jsx)(l.Tooltip, {
                        text: "Here's top aligned tooltip text!",
                        position: 'top',
                        children: (e) =>
                            (0, n.jsx)(l.Button, {
                                ...e,
                                children: 'Tooltip on the top'
                            })
                    }),
                    (0, n.jsx)(l.Tooltip, {
                        text: "Here's right aligned tooltip text!",
                        position: 'left',
                        children: (e) =>
                            (0, n.jsx)(l.Button, {
                                ...e,
                                children: 'Tooltip on the left'
                            })
                    }),
                    (0, n.jsx)(l.Tooltip, {
                        text: "Here's bottom aligned tooltip text!",
                        position: 'bottom',
                        children: (e) =>
                            (0, n.jsx)(l.Button, {
                                ...e,
                                children: 'Tooltip on the bottom'
                            })
                    }),
                    (0, n.jsx)(l.Tooltip, {
                        text: "Here's right aligned tooltip text!",
                        position: 'right',
                        children: (e) =>
                            (0, n.jsx)(l.Button, {
                                ...e,
                                children: 'Tooltip on the right'
                            })
                    })
                ]
            }),
            (0, n.jsx)('div', {})
        ]
    });
}
function m() {
    let [e, s] = a.useState(!1),
        [t, i] = a.useState(!1),
        [r, o] = a.useState('auto');
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)('div', {
                className: c.section,
                children: [
                    (0, n.jsx)(l.Heading, {
                        variant: 'heading-xl/semibold',
                        children: 'Checkboxes'
                    }),
                    (0, n.jsx)(l.Checkbox, {
                        value: e,
                        onChange: (e, t) => s(t),
                        children: (0, n.jsx)(l.Text, {
                            variant: 'text-md/medium',
                            children: 'Checkbox input'
                        })
                    }),
                    (0, n.jsx)(l.Checkbox, {
                        value: e,
                        onChange: (e, t) => s(t),
                        disabled: !0,
                        children: (0, n.jsx)(l.Text, {
                            variant: 'text-md/medium',
                            children: 'Disabled checkbox'
                        })
                    }),
                    (0, n.jsx)(l.Checkbox, {
                        value: e,
                        onChange: (e, t) => s(t),
                        readOnly: !0,
                        children: (0, n.jsx)(l.Text, {
                            variant: 'text-md/medium',
                            children: 'Read-only checkbox'
                        })
                    }),
                    (0, n.jsx)(l.Checkbox, {
                        value: e,
                        onChange: (e, t) => s(t),
                        type: l.Checkbox.Types.ROW,
                        children: (0, n.jsx)(l.Text, {
                            variant: 'text-md/medium',
                            children: 'Checkbox row'
                        })
                    })
                ]
            }),
            (0, n.jsxs)('div', {
                className: c.section,
                children: [
                    (0, n.jsx)(l.Heading, {
                        variant: 'heading-xl/semibold',
                        children: 'Switches'
                    }),
                    (0, n.jsx)(l.FormSwitch, {
                        hideBorder: !0,
                        value: t,
                        onChange: (e) => i(e),
                        children: 'FormSwitch with a label'
                    })
                ]
            }),
            (0, n.jsxs)('div', {
                className: c.section,
                children: [
                    (0, n.jsx)(l.Heading, {
                        variant: 'heading-xl/semibold',
                        children: 'Radio Buttons'
                    }),
                    (0, n.jsx)(l.FormItem, {
                        children: (0, n.jsx)(l.RadioGroup, {
                            onChange: (e) => {
                                let { value: s } = e;
                                return o(s);
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
                            value: r
                        })
                    })
                ]
            }),
            (0, n.jsxs)('div', {
                className: c.section,
                children: [
                    (0, n.jsx)(l.Heading, {
                        variant: 'heading-xl/semibold',
                        children: 'Slider'
                    }),
                    (0, n.jsxs)('div', {
                        className: c.slider,
                        children: [
                            (0, n.jsx)(l.Text, {
                                variant: 'text-md/medium',
                                children: 'Standard slider'
                            }),
                            (0, n.jsx)(l.Slider, {
                                minValue: 0,
                                maxValue: 100,
                                initialValue: 50,
                                defaultValue: 50,
                                markers: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
                            })
                        ]
                    }),
                    (0, n.jsxs)('div', {
                        className: c.slider,
                        children: [
                            (0, n.jsx)(l.Text, {
                                variant: 'text-md/medium',
                                children: 'Sticky markers'
                            }),
                            (0, n.jsx)(l.Slider, {
                                minValue: 0,
                                maxValue: 100,
                                initialValue: 50,
                                markers: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
                                stickToMarkers: !0
                            })
                        ]
                    }),
                    (0, n.jsxs)('div', {
                        className: c.slider,
                        children: [
                            (0, n.jsx)(l.Text, {
                                variant: 'text-md/medium',
                                children: 'Non-uniform markers'
                            }),
                            (0, n.jsx)(l.Slider, {
                                minValue: 0,
                                maxValue: 100,
                                initialValue: 50,
                                markers: [0, 20, 50, 100],
                                equidistant: !1
                            })
                        ]
                    }),
                    (0, n.jsxs)('div', {
                        className: c.slider,
                        children: [
                            (0, n.jsx)(l.Text, {
                                variant: 'text-md/medium',
                                children: 'Non-uniform equidistant markers'
                            }),
                            (0, n.jsx)(l.Slider, {
                                minValue: 0,
                                maxValue: 100,
                                initialValue: 50,
                                markers: [0, 20, 50, 100],
                                equidistant: !0
                            })
                        ]
                    }),
                    (0, n.jsxs)('div', {
                        className: c.slider,
                        children: [
                            (0, n.jsx)(l.Text, {
                                variant: 'text-md/medium',
                                children: 'No markers'
                            }),
                            (0, n.jsx)(l.Slider, {
                                minValue: 0,
                                maxValue: 100,
                                initialValue: 50
                            })
                        ]
                    }),
                    (0, n.jsxs)('div', {
                        className: c.slider,
                        children: [
                            (0, n.jsx)(l.Text, {
                                variant: 'text-md/medium',
                                children: 'Mini slider'
                            }),
                            (0, n.jsx)(l.Slider, {
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
function A() {
    return (0, n.jsxs)('div', {
        className: c.shinyButtonExamples,
        children: [
            (0, n.jsx)(l.ShinyButton, {
                size: l.Button.Sizes.MEDIUM,
                shineSize: l.ShinyButton.ShineSizes.SMALL,
                onClick: () => {},
                children: 'Shiny Button'
            }),
            (0, n.jsx)(l.ShinyButton, {
                size: l.Button.Sizes.MEDIUM,
                shineSize: l.ShinyButton.ShineSizes.SMALL,
                onlyShineOnHover: !0,
                onClick: () => {},
                children: 'Shine on Hover'
            })
        ]
    });
}
function C() {
    let [e, s] = a.useState(null),
        [t, i] = a.useState(null),
        [r, d] = a.useState([]),
        [_, u] = a.useState([]),
        [E, T] = a.useState([]);
    return (0, n.jsxs)('div', {
        className: c.searchableSelectExamples,
        children: [
            (0, n.jsx)(l.Heading, {
                variant: 'heading-xl/semibold',
                children: 'SearchableSelect'
            }),
            (0, n.jsx)(l.SearchableSelect, {
                placeholder: 'Single select',
                value: e,
                onChange: (e) => s(e),
                options: o.G
            }),
            (0, n.jsx)(l.SearchableSelect, {
                placeholder: 'Single select (clearable)',
                clearable: !0,
                value: t,
                onChange: (e) => i(e),
                options: o.G
            }),
            (0, n.jsx)(l.SearchableSelect, {
                placeholder: 'Multi select',
                multi: !0,
                value: r,
                onChange: (e) => d(e),
                options: o.G
            }),
            (0, n.jsx)(l.SearchableSelect, {
                placeholder: 'Multi select (clearable)',
                multi: !0,
                clearable: !0,
                value: E,
                onChange: (e) => T(e),
                options: o.G
            }),
            (0, n.jsx)(l.SearchableSelect, {
                placeholder: 'Multi select (custom pills)',
                multi: !0,
                value: _,
                onChange: (e) => u(e),
                options: o.G,
                hidePills: !0,
                customPillContainerClassName: c.customPillContainer,
                renderCustomPill: (e) =>
                    (0, n.jsx)('div', {
                        style: {
                            padding: 8,
                            border: '1px solid var(--bg-brand)',
                            borderRadius: 8
                        },
                        children: (0, n.jsx)(l.Text, {
                            variant: 'text-md/bold',
                            children: e.label
                        })
                    })
            })
        ]
    });
}
function g() {
    let [e, s] = a.useState(''),
        [t, i] = a.useState(''),
        [r, o] = a.useState('');
    return (0, n.jsxs)('div', {
        className: c.section,
        children: [
            (0, n.jsx)(l.Heading, {
                variant: 'heading-xl/semibold',
                children: 'TextInput'
            }),
            (0, n.jsx)(l.FormItem, {
                children: (0, n.jsx)(l.SearchBar, {
                    size: l.SearchBar.Sizes.MEDIUM,
                    placeholder: 'Search...',
                    onChange: (e) => o(e),
                    query: r,
                    onClear: () => o('')
                })
            }),
            (0, n.jsx)(l.FormItem, {
                title: 'Disabled',
                disabled: !0,
                children: (0, n.jsx)(l.TextInput, {
                    placeholder: 'Disabled',
                    disabled: !0
                })
            }),
            (0, n.jsx)(l.FormItem, {
                title: 'Error',
                children: (0, n.jsx)(l.TextInput, {
                    required: !0,
                    error: 'This must have a value'
                })
            }),
            (0, n.jsx)(l.FormItem, {
                title: 'Error',
                children: (0, n.jsx)(l.TextInput, {
                    defaultValue: 'Not a valid value',
                    error: 'This has an error.'
                })
            }),
            (0, n.jsx)(l.FormItem, {
                title: 'Read only',
                children: (0, n.jsx)(l.TextInput, {
                    value: 'Read-only, not-editable field',
                    editable: !1
                })
            }),
            (0, n.jsx)(l.FormItem, {
                title: 'Input with a label',
                children: (0, n.jsx)(l.TextInput, {
                    placeholder: 'Real placeholder',
                    value: e,
                    onChange: s
                })
            }),
            (0, n.jsx)(l.FormItem, {
                title: 'Text area',
                children: (0, n.jsx)(l.TextArea, {
                    placeholder: 'Text area placeholder',
                    showCharacterCount: !0,
                    value: t,
                    onChange: i
                })
            })
        ]
    });
}
