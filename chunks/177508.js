t.d(s, {
    Z: function () {
        return _;
    }
}),
    t(390547),
    t(47120);
var n = t(735250),
    a = t(470079),
    i = t(120356),
    r = t.n(i),
    o = t(971809),
    l = t(481060),
    c = t(522967);
let d = Object.keys(l.Button.Colors).filter((e) => 'CUSTOM' !== e),
    u = Object.keys(l.Button.Looks).filter((e) => 'BLANK' !== e);
function _() {
    let e = d.flatMap((e) => [
        ...u.map((s) =>
            (0, n.jsxs)(
                l.Button,
                {
                    color: l.Button.Colors[e],
                    look: l.Button.Looks[s],
                    children: [e, ' - ', s]
                },
                e + s
            )
        ),
        (0, n.jsx)('hr', { className: c.sectionDivider }, e + 'divider')
    ]);
    return (0, n.jsxs)('div', {
        children: [
            (0, n.jsx)(l.Heading, {
                variant: 'heading-xl/semibold',
                children: 'Buttons'
            }),
            (0, n.jsxs)('div', {
                className: c.buttons,
                children: [
                    (0, n.jsx)('div', {
                        className: r()('theme-dark', c.section),
                        children: e
                    }),
                    (0, n.jsx)('div', {
                        className: r()('theme-light', c.section),
                        children: e
                    })
                ]
            }),
            (0, n.jsx)(E, {}),
            (0, n.jsx)(T, {})
        ]
    });
}
function E() {
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
function T() {
    let [e, s] = a.useState(null),
        [t, i] = a.useState(null),
        [r, d] = a.useState([]),
        [u, _] = a.useState([]),
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
                value: u,
                onChange: (e) => _(e),
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
