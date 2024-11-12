n.d(t, {
    Z: function () {
        return I;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(100621),
    l = n(442837),
    u = n(704215),
    c = n(481060),
    d = n(607070),
    f = n(243778),
    _ = n(594174),
    p = n(74538),
    h = n(921944),
    m = n(388032),
    g = n(489680);
let E = {
    tension: 750,
    mass: 2.5,
    friction: 70
};
function v(e) {
    let { tooltipText: t, headingText: n, textColor: i } = e,
        a = null != n;
    return (0, r.jsxs)('span', {
        className: a ? void 0 : g.tooltipContainer,
        children: [
            (0, r.jsxs)('span', {
                className: g.tooltipContainer,
                children: [
                    (0, r.jsx)(c.NitroWheelIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: g.nitroWheel
                    }),
                    a
                        ? (0, r.jsx)(c.Heading, {
                              color: null != i ? i : 'text-normal',
                              variant: 'heading-sm/semibold',
                              children: n
                          })
                        : null
                ]
            }),
            (0, r.jsx)(c.Text, {
                variant: a ? 'text-xs/normal' : 'text-sm/medium',
                color: null != i ? i : 'text-normal',
                children: t
            })
        ]
    });
}
function I(e) {
    let { checked: t, onClick: n, id: a = 'burst-reaction-toggle-button' } = e,
        I = (0, l.e7)([d.Z], () => d.Z.useReducedMotion),
        b = _.default.getCurrentUser(),
        S = null == b || (0, p.I5)(b) ? [u.z.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP] : [],
        [T, y] = (0, f.US)(S),
        [A, N] = i.useState(!1),
        [C, R] = (0, c.useSpring)(() => ({})),
        O = (0, o.animated)(c.SuperReactionIcon);
    i.useEffect(() => {
        let e = T === u.z.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP;
        e && (y(h.L.DISMISS), setTimeout(() => N(e), 200));
    }, [T, y]);
    let D = A ? m.intl.string(m.t['Osi/u7']) : t ? m.intl.string(m.t['5cRA/f']) : m.intl.string(m.t.buV4am),
        L = A ? m.intl.string(m.t.ORK94u) : void 0;
    return (0, r.jsxs)(c.TooltipContainer, {
        position: 'top',
        text: (0, r.jsx)(v, {
            textColor: 'always-white',
            tooltipText: D,
            headingText: L
        }),
        color: c.Tooltip.Colors.BRAND,
        forceOpen: A,
        'aria-label': D,
        tooltipClassName: g.tooltip,
        children: [
            (0, r.jsx)('input', {
                className: g.visuallyHidden,
                checked: t,
                onChange: function () {
                    R({
                        from: { rotate: t ? '360deg' : '0deg' },
                        to: { rotate: t ? '0deg' : '360deg' },
                        config: E
                    }),
                        null == n || n(),
                        N(!1);
                },
                id: a,
                type: 'checkbox'
            }),
            (0, r.jsxs)('label', {
                htmlFor: a,
                className: s()(g.label, { [g.labelChecked]: t }),
                children: [
                    t
                        ? (0, r.jsx)(c.Shine, {
                              className: g.shine,
                              shinePaused: I
                          })
                        : null,
                    (0, r.jsx)(O, {
                        style: I ? void 0 : C,
                        size: 'custom',
                        width: 20,
                        height: 20,
                        color: t ? 'white' : 'currentColor',
                        className: g.icon
                    }),
                    (0, r.jsx)('span', {
                        children: (0, r.jsx)(c.Text, {
                            className: g.visuallyHidden,
                            variant: 'text-sm/semibold',
                            children: m.intl.string(m.t.buV4am)
                        })
                    })
                ]
            })
        ]
    });
}
