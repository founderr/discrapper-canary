n.d(t, {
    Z: function () {
        return v;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(212433),
    u = n(442837),
    c = n(704215),
    d = n(481060),
    _ = n(607070),
    E = n(243778),
    f = n(594174),
    h = n(74538),
    p = n(921944),
    m = n(689938),
    I = n(489680);
let T = {
        tension: 750,
        mass: 2.5,
        friction: 70
    },
    g = 20;
function S(e) {
    let { tooltipText: t, headingText: n, textColor: r } = e,
        a = null != n;
    return (0, i.jsxs)('span', {
        className: a ? void 0 : I.tooltipContainer,
        children: [
            (0, i.jsxs)('span', {
                className: I.tooltipContainer,
                children: [
                    (0, i.jsx)(d.NitroWheelIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: I.nitroWheel
                    }),
                    a
                        ? (0, i.jsx)(d.Heading, {
                              color: null != r ? r : 'text-normal',
                              variant: 'heading-sm/semibold',
                              children: n
                          })
                        : null
                ]
            }),
            (0, i.jsx)(d.Text, {
                variant: a ? 'text-xs/normal' : 'text-sm/medium',
                color: null != r ? r : 'text-normal',
                children: t
            })
        ]
    });
}
function A(e) {
    return e ? m.Z.Messages.SUPER_REACTION_TOGGLE_ENABLED : m.Z.Messages.SUPER_REACTION_TOGGLE_DISABLED;
}
function v(e) {
    let { checked: t, onClick: n, id: r = 'burst-reaction-toggle-button' } = e,
        o = (0, u.e7)([_.Z], () => _.Z.useReducedMotion),
        v = f.default.getCurrentUser(),
        N = null == v || (0, h.I5)(v) ? [c.z.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP] : [],
        [O, R] = (0, E.US)(N),
        [C, y] = a.useState(!1),
        [L, b] = (0, d.useSpring)(() => ({})),
        D = (0, l.animated)(d.SuperReactionIcon);
    function M() {
        b({
            from: { rotate: t ? '360deg' : '0deg' },
            to: { rotate: t ? '0deg' : '360deg' },
            config: T
        }),
            null == n || n(),
            y(!1);
    }
    a.useEffect(() => {
        let e = O === c.z.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP;
        e && (R(p.L.DISMISS), setTimeout(() => y(e), 200));
    }, [O, R]);
    let P = C ? m.Z.Messages.SUPER_REACTIONS_UNLIMITED_NOTICE_DESCRIPTION_DESKTOP_V2 : A(t),
        U = C ? m.Z.Messages.SUPER_REACTIONS_UNLIMITED_NOTICE_TITLE : void 0;
    return (0, i.jsxs)(d.TooltipContainer, {
        position: 'top',
        text: (0, i.jsx)(S, {
            textColor: 'always-white',
            tooltipText: P,
            headingText: U
        }),
        color: d.Tooltip.Colors.BRAND,
        forceOpen: C,
        'aria-label': P,
        tooltipClassName: I.tooltip,
        children: [
            (0, i.jsx)('input', {
                className: I.visuallyHidden,
                checked: t,
                onChange: M,
                id: r,
                type: 'checkbox'
            }),
            (0, i.jsxs)('label', {
                htmlFor: r,
                className: s()(I.label, { [I.labelChecked]: t }),
                children: [
                    t
                        ? (0, i.jsx)(d.Shine, {
                              className: I.shine,
                              shinePaused: o
                          })
                        : null,
                    (0, i.jsx)(D, {
                        style: o ? void 0 : L,
                        size: 'custom',
                        width: g,
                        height: g,
                        color: t ? 'white' : 'currentColor',
                        className: I.icon
                    }),
                    (0, i.jsx)('span', {
                        children: (0, i.jsx)(d.Text, {
                            className: I.visuallyHidden,
                            variant: 'text-sm/semibold',
                            children: m.Z.Messages.SUPER_REACTION_TOGGLE_DISABLED
                        })
                    })
                ]
            })
        ]
    });
}
