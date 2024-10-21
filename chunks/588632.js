t.d(n, {
    Z: function () {
        return g;
    }
}),
    t(47120);
var l = t(200651),
    a = t(192379),
    o = t(658722),
    r = t.n(o),
    i = t(692547),
    s = t(481060),
    c = t(596454),
    d = t(285888),
    u = t(689938),
    m = t(481455);
function h(e) {
    return null != e && (null != e.id || null != e.name);
}
let v = {
    ...d.v,
    control: (e, n) => {
        let { isDisabled: t, menuIsOpen: l } = n;
        return {
            ...e,
            backgroundColor: 'var(--input-background)',
            borderColor: 'var(--input-background)',
            opacity: t ? 0.6 : 1,
            boxShadow: void 0,
            borderRadius: l ? '8px 8px 0 0' : '8px',
            minHeight: 40,
            transition: 'border 0.15s ease',
            cursor: t ? 'not-allowed' : void 0,
            pointerEvents: t ? 'none' : void 0,
            '&:hover': { borderColor: 'var(--input-background)' }
        };
    },
    valueContainer: (e) => ({
        ...e,
        padding: '8px',
        display: 'flex',
        flexDirection: 'row',
        gap: '8px',
        cursor: 'text'
    }),
    indicatorsContainer: (e) => ({
        ...e,
        alignItems: 'flex-start',
        paddingTop: 4
    }),
    option: (e, n) => {
        let { isSelected: t, isFocused: l } = n;
        return {
            ...e,
            ...(t
                ? {
                      backgroundColor: 'var(--background-modifier-selected)',
                      color: 'var(--interactive-active)'
                  }
                : l
                  ? {
                        backgroundColor: 'var(--background-modifier-hover)',
                        color: 'var(--interactive-hover)'
                    }
                  : {
                        backgroundColor: 'transparent',
                        color: 'var(--interactive-normal)'
                    }),
            cursor: 'pointer',
            display: 'flex',
            padding: 12,
            alignItems: 'center',
            minHeight: 40,
            '&:active': {
                backgroundColor: 'var(--background-modifier-selected)',
                color: 'var(--interactive-active)'
            },
            '&:hover [data-hover=true]': { opacity: 1 }
        };
    }
};
function g(e) {
    let { options: n, value: t, onChange: o, canBeNew: g, memberCounts: x } = e,
        p = (e) => {
            e.preventDefault(), e.stopPropagation();
        },
        C = a.useCallback(
            (e) => {
                var a, r, i, d;
                return (0, l.jsxs)('div', {
                    className: m.selectValuePill,
                    onMouseDown: p,
                    children: [
                        h(e.emoji) &&
                            (0, l.jsx)(c.Z, {
                                emojiId: null === (a = e.emoji) || void 0 === a ? void 0 : a.id,
                                emojiName: null === (r = e.emoji) || void 0 === r ? void 0 : r.name,
                                animated: null !== (d = null === (i = e.emoji) || void 0 === i ? void 0 : i.animated) && void 0 !== d && d
                            }),
                        (0, l.jsx)(s.Text, {
                            variant: 'text-sm/normal',
                            children: e.title
                        }),
                        (0, l.jsx)(s.Clickable, {
                            className: m.selectValuePillClose,
                            onClick: () => {
                                o(n.filter((n) => t.includes(n.id) && n.id !== e.id));
                            },
                            children: (0, l.jsx)(s.XSmallIcon, {
                                size: 'md',
                                color: 'currentColor',
                                className: m.selectValuePillCloseIcon
                            })
                        })
                    ]
                });
            },
            [o, n, t]
        ),
        f = a.useCallback(
            (e) => {
                var n, t, a, o;
                let r = null == x || null == e.roleIds ? 0 : Math.max(...e.roleIds.map((e) => x[e])),
                    d = null != x && r > 0;
                return (0, l.jsxs)('div', {
                    className: m.selectOption,
                    children: [
                        (0, l.jsxs)('div', {
                            className: m.selectOptionTitle,
                            children: [
                                h(e.emoji) &&
                                    (0, l.jsx)(c.Z, {
                                        emojiId: null === (n = e.emoji) || void 0 === n ? void 0 : n.id,
                                        emojiName: null === (t = e.emoji) || void 0 === t ? void 0 : t.name,
                                        animated: null !== (o = null === (a = e.emoji) || void 0 === a ? void 0 : a.animated) && void 0 !== o && o
                                    }),
                                (0, l.jsx)(s.Text, {
                                    variant: 'text-sm/normal',
                                    children: e.title
                                })
                            ]
                        }),
                        g &&
                            e.isUnseen &&
                            (0, l.jsx)(s.TextBadge, {
                                color: i.Z.unsafe_rawColors.BRAND_260.css,
                                text: u.Z.Messages.NEW,
                                className: m.optionNewBadge
                            }),
                        d &&
                            (0, l.jsx)('div', {
                                className: m.selectOptionMemberCount,
                                'data-hover': !0,
                                children: (0, l.jsx)(s.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'always-white',
                                    children: u.Z.Messages.ONBOARDING_OPTION_ROLE_COUNTS.format({ memberCount: r })
                                })
                            })
                    ]
                });
            },
            [g, x]
        ),
        N = a.useCallback((e, n) => {
            let { data: t } = e;
            return 0 === n.length || r()(n.toLowerCase(), t.title.toLowerCase());
        }, []);
    return (0, l.jsx)(d.Z, {
        styleOverrides: v,
        clearable: !1,
        isMulti: !0,
        options: n,
        onChange: o,
        value: t,
        closeMenuOnSelect: !1,
        multiValueRenderer: C,
        optionRenderer: f,
        filterOption: N
    });
}
