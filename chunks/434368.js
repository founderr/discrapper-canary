n.d(t, {
    Z: function () {
        return b;
    }
});
var l = n(200651),
    o = n(192379),
    a = n(498607),
    i = n.n(a),
    r = n(399606),
    s = n(481060),
    c = n(203893),
    C = n(910693),
    d = n(893966),
    u = n(527379),
    m = n(981631),
    h = n(388032),
    x = n(389173);
function b(e) {
    let { guildId: t, onClose: n } = e,
        a = (0, r.e7)([d.Z], () => d.Z.getSearchStateByGuildId(t), [t], i()),
        b = (0, C.dW)(t),
        f = o.useCallback(() => {
            !a.requireUnusualDmActivity && b(C.aY.UNUSUAL_DM_ACTIVITY),
                (0, u.Dr)(t, {
                    ...a,
                    requireUnusualDmActivity: !a.requireUnusualDmActivity
                });
        }, [t, a, b]),
        g = o.useCallback(() => {
            !a.requireCommunicationDisabled && b(C.aY.COMMUNICATION_DISABLED),
                (0, u.Dr)(t, {
                    ...a,
                    requireCommunicationDisabled: !a.requireCommunicationDisabled
                });
        }, [t, a, b]),
        p = o.useCallback(() => {
            !a.requireUnusualAccountActivity && b(C.aY.UNUSUAL_ACCOUNT_ACTIVITY),
                (0, u.Dr)(t, {
                    ...a,
                    requireUnusualAccountActivity: !a.requireUnusualAccountActivity
                });
        }, [t, a, b]),
        H = o.useCallback(() => {
            !a.requireUsernameQuarantined && b(C.aY.USERNAME_QUARANTINED),
                (0, u.Dr)(t, {
                    ...a,
                    requireUsernameQuarantined: !a.requireUsernameQuarantined
                });
        }, [t, a, b]);
    return (0, l.jsx)(s.Menu, {
        navId: 'member-safety-flags',
        onClose: n,
        'aria-label': h.intl.string(h.t.k9m8Rk),
        onSelect: m.dG4,
        children: (0, l.jsxs)(s.MenuGroup, {
            children: [
                (0, l.jsx)(s.MenuCheckboxItem, {
                    id: 'toggle-require-unusual-dm-activity',
                    label: (0, l.jsxs)('div', {
                        className: x.checkboxLabel,
                        children: [
                            (0, l.jsx)(s.ChatWarningIcon, {
                                size: 'custom',
                                color: 'currentColor',
                                width: 16,
                                height: 16,
                                className: x.unusualDMLabelIcon
                            }),
                            h.intl.string(h.t.ZRnONz)
                        ]
                    }),
                    action: f,
                    checked: a.requireUnusualDmActivity
                }),
                (0, l.jsx)(s.MenuCheckboxItem, {
                    id: 'toggle-require-communication-disabled',
                    label: (0, l.jsxs)('div', {
                        className: x.checkboxLabel,
                        children: [
                            (0, l.jsx)(s.ClockWarningIcon, {
                                size: 'custom',
                                color: 'currentColor',
                                width: 16,
                                height: 16,
                                className: x.timeoutLabelIcon
                            }),
                            h.intl.string(h.t.z3wbj4)
                        ]
                    }),
                    action: g,
                    checked: a.requireCommunicationDisabled
                }),
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(s.MenuCheckboxItem, {
                            id: 'toggle-require-unusual-account-activity',
                            label: (0, l.jsxs)('div', {
                                className: x.checkboxLabel,
                                children: [
                                    (0, l.jsx)(c.Z, {
                                        width: 16,
                                        height: 16,
                                        className: x.unusualAccountActivityLabelIcon
                                    }),
                                    h.intl.string(h.t.DIQsDw)
                                ]
                            }),
                            action: p,
                            checked: a.requireUnusualAccountActivity
                        }),
                        (0, l.jsx)(s.MenuCheckboxItem, {
                            id: 'toggle-require-username-quarantined',
                            label: (0, l.jsxs)('div', {
                                className: x.checkboxLabel,
                                children: [
                                    (0, l.jsx)(s.ChatXIcon, {
                                        size: 'custom',
                                        color: 'currentColor',
                                        width: 16,
                                        height: 16,
                                        className: x.quarantinedLabelIcon
                                    }),
                                    h.intl.string(h.t.Jloklp)
                                ]
                            }),
                            action: H,
                            checked: a.requireUsernameQuarantined
                        })
                    ]
                })
            ]
        })
    });
}
