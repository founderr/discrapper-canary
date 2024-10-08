n.d(t, {
    Z: function () {
        return E;
    }
}),
    n(47120);
var i = n(735250),
    s = n(470079),
    a = n(120356),
    l = n.n(a),
    r = n(442837),
    o = n(780384),
    c = n(481060),
    u = n(393238),
    d = n(410030),
    h = n(607070),
    p = n(466794),
    m = n(677413),
    _ = n(546240),
    f = n(952009);
function E(e) {
    let { checked: t, labelText: n, tooltipText: a, canToggle: E, iconAltText: g, onChange: C, tooltipColor: I, className: T, id: x = 'fancybutton-toggle', collapseWhenChecked: v = !0, onClick: S, disabled: N } = e,
        A = (0, r.e7)([h.Z], () => h.Z.useReducedMotion),
        [Z, M] = s.useState(!1),
        b = (0, d.ZP)(),
        R = (0, o.wj)(b) || t ? f : _,
        { width: L = 0, ref: j } = (0, u.Z)(),
        { width: P = 0, ref: O } = (0, u.Z)();
    return (0, i.jsxs)(c.TooltipContainer, {
        text: (0, i.jsx)(p.X, {
            textColor: 'always-white',
            tooltipText: a
        }),
        position: 'top',
        color: null != I ? I : N ? c.Tooltip.Colors.BLACK : c.Tooltip.Colors.BRAND,
        'aria-label': a,
        tooltipClassName: m.tooltip,
        className: m.tooltipContainer,
        children: [
            (0, i.jsx)('input', {
                className: m.visuallyHidden,
                checked: t,
                onChange: function () {
                    if (E) {
                        let e = !t;
                        M(!0), null == C || C(e);
                    }
                    'function' == typeof S && S();
                },
                id: x,
                type: 'checkbox',
                disabled: N
            }),
            (0, i.jsxs)('label', {
                htmlFor: x,
                className: l()(m.label, T, {
                    [m.transition]: Z,
                    [m.labelChecked]: t,
                    [m.labelUnchecked]: !t && !E
                }),
                style: v ? { width: t ? L : L + P } : void 0,
                children: [
                    t
                        ? (0, i.jsx)(c.Shine, {
                              className: m.shine,
                              shinePaused: A
                          })
                        : null,
                    (0, i.jsx)('img', {
                        ref: j,
                        src: R,
                        alt: g
                    }),
                    (0, i.jsx)('span', {
                        ref: O,
                        children: (0, i.jsx)(c.Text, {
                            className: l()(m.burstText, {
                                [m.visuallyHidden]: t && v,
                                [m.burstTextChecked]: t
                            }),
                            variant: 'text-sm/semibold',
                            children: n
                        })
                    })
                ]
            })
        ]
    });
}
