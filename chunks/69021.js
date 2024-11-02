t.d(n, {
    Z: function () {
        return s;
    }
}),
    t(653041);
var r = t(200651);
t(192379);
var o = t(442837),
    i = t(481060),
    l = t(179658),
    a = t(482215),
    c = t(906467),
    u = t(857192),
    d = t(594174);
function s() {
    let {
            layoutDebuggingEnabled: e,
            isStaff: n,
            isDeveloper: t
        } = (0, o.cj)([u.default, d.default, c.Z], () => {
            var e;
            return {
                layoutDebuggingEnabled: u.default.layoutDebuggingEnabled,
                isStaff: (null === (e = d.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff()) === !0,
                isDeveloper: c.Z.isDeveloper
            };
        }),
        { horizontalSpacing: s, verticalSpacing: g, maxHorizontalSpacing: m, maxVerticalSpacing: b } = (0, a.i)(),
        { setHorizontalSpacing: f, setVerticalSpacing: p } = a.i.getState(),
        _ = [];
    return (
        n &&
            t &&
            (_.push(
                (0, r.jsx)(
                    i.MenuCheckboxItem,
                    {
                        id: 'layout-debugging',
                        label: 'Enable Layout Debugging',
                        checked: e,
                        action: () => {
                            (0, l.y)({ layoutDebuggingEnabled: !e });
                        }
                    },
                    'layout-debugging'
                )
            ),
            e &&
                (_.push(
                    (0, r.jsx)(
                        i.MenuControlItem,
                        {
                            id: 'horizontal-spacing',
                            label: 'Horizontal Spacing',
                            control: (e, n) =>
                                (0, r.jsx)(i.MenuSliderControl, {
                                    ...e,
                                    ref: n,
                                    value: s,
                                    minValue: 0,
                                    maxValue: m,
                                    onChange: (e) => f(e),
                                    renderValue: (e) => ''.concat(Math.round(e), 'px'),
                                    'aria-label': 'Horizontal Spacing'
                                })
                        },
                        'horizontal-spacing'
                    )
                ),
                _.push(
                    (0, r.jsx)(
                        i.MenuControlItem,
                        {
                            id: 'vertical-spacing',
                            label: 'Vertical Spacing',
                            control: (e, n) =>
                                (0, r.jsx)(i.MenuSliderControl, {
                                    ...e,
                                    ref: n,
                                    value: g,
                                    minValue: 0,
                                    maxValue: b,
                                    onChange: (e) => p(e),
                                    'aria-label': 'Horizontal Spacing',
                                    renderValue: (e) => ''.concat(Math.round(e), 'px')
                                })
                        },
                        'vertical-spacing'
                    )
                ))),
        0 === _.length ? null : (0, r.jsx)(r.Fragment, { children: _ })
    );
}
