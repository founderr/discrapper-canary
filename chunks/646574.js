n.d(t, {
    Z: function () {
        return S;
    }
}),
    n(47120);
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(212433),
    l = n(442837),
    u = n(704215),
    c = n(481060),
    d = n(607070),
    _ = n(243778),
    E = n(594174),
    f = n(74538),
    h = n(921944),
    p = n(689938),
    I = n(489680);
let m = {
    tension: 750,
    mass: 2.5,
    friction: 70
};
function T(e) {
    let { tooltipText: t, headingText: n, textColor: i } = e,
        a = null != n;
    return (0, r.jsxs)('span', {
        className: a ? void 0 : I.tooltipContainer,
        children: [
            (0, r.jsxs)('span', {
                className: I.tooltipContainer,
                children: [
                    (0, r.jsx)(c.NitroWheelIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: I.nitroWheel
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
function S(e) {
    let { checked: t, onClick: n, id: a = 'burst-reaction-toggle-button' } = e,
        S = (0, l.e7)([d.Z], () => d.Z.useReducedMotion),
        g = E.default.getCurrentUser(),
        A = null == g || (0, f.I5)(g) ? [u.z.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP] : [],
        [N, R] = (0, _.US)(A),
        [O, v] = i.useState(!1),
        [C, L] = (0, c.useSpring)(() => ({})),
        D = (0, o.animated)(c.SuperReactionIcon);
    i.useEffect(() => {
        let e = N === u.z.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP;
        e && (R(h.L.DISMISS), setTimeout(() => v(e), 200));
    }, [N, R]);
    let y = O ? p.Z.Messages.SUPER_REACTIONS_UNLIMITED_NOTICE_DESCRIPTION_DESKTOP_V2 : t ? p.Z.Messages.SUPER_REACTION_TOGGLE_ENABLED : p.Z.Messages.SUPER_REACTION_TOGGLE_DISABLED,
        b = O ? p.Z.Messages.SUPER_REACTIONS_UNLIMITED_NOTICE_TITLE : void 0;
    return (0, r.jsxs)(c.TooltipContainer, {
        position: 'top',
        text: (0, r.jsx)(T, {
            textColor: 'always-white',
            tooltipText: y,
            headingText: b
        }),
        color: c.Tooltip.Colors.BRAND,
        forceOpen: O,
        'aria-label': y,
        tooltipClassName: I.tooltip,
        children: [
            (0, r.jsx)('input', {
                className: I.visuallyHidden,
                checked: t,
                onChange: function () {
                    L({
                        from: { rotate: t ? '360deg' : '0deg' },
                        to: { rotate: t ? '0deg' : '360deg' },
                        config: m
                    }),
                        null == n || n(),
                        v(!1);
                },
                id: a,
                type: 'checkbox'
            }),
            (0, r.jsxs)('label', {
                htmlFor: a,
                className: s()(I.label, { [I.labelChecked]: t }),
                children: [
                    t
                        ? (0, r.jsx)(c.Shine, {
                              className: I.shine,
                              shinePaused: S
                          })
                        : null,
                    (0, r.jsx)(D, {
                        style: S ? void 0 : C,
                        size: 'custom',
                        width: 20,
                        height: 20,
                        color: t ? 'white' : 'currentColor',
                        className: I.icon
                    }),
                    (0, r.jsx)('span', {
                        children: (0, r.jsx)(c.Text, {
                            className: I.visuallyHidden,
                            variant: 'text-sm/semibold',
                            children: p.Z.Messages.SUPER_REACTION_TOGGLE_DISABLED
                        })
                    })
                ]
            })
        ]
    });
}
