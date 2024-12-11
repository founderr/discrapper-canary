t.r(n),
    t.d(n, {
        default: function () {
            return f;
        }
    }),
    t(47120);
var l = t(200651),
    r = t(192379),
    i = t(831209),
    a = t(442837),
    o = t(481060),
    s = t(688465),
    c = t(430824),
    d = t(626135),
    u = t(369994),
    x = t(162157),
    m = t(533244),
    h = t(487419),
    b = t(821312),
    _ = t(676770),
    C = t(981631),
    j = t(388032),
    g = t(343854);
function f(e) {
    let { guildId: n, transitionState: t, onClose: f, analyticsData: v } = e,
        p = (0, a.e7)([c.Z], () => c.Z.getGuild(n), [n]),
        N = !!(null == p ? void 0 : p.hasFeature(C.oNc.INVITES_DISABLED)),
        [S] = r.useState(!1),
        [T, E] = r.useState(_.Fl),
        I = (0, a.e7)([h.Z], () => h.Z.getGuildIncident(n)),
        M = (0, x.BT)(p),
        A = (0, m.SG)(I) || N,
        R = (0, m.sN)(I),
        [Z, k] = r.useState(A),
        [B, L] = r.useState(R),
        [w, y] = r.useState(!1),
        D = Z !== A || B !== R || w,
        P = N && !M;
    if (null == p) return f(), null;
    function G() {
        k((e) => !e);
    }
    return (0, l.jsxs)(o.ModalRoot, {
        transitionState: t,
        size: o.ModalSize.MEDIUM,
        children: [
            (0, l.jsx)(o.ModalHeader, {
                separator: !0,
                children: (0, l.jsxs)('div', {
                    className: g.headerContainer,
                    children: [
                        (0, l.jsx)(o.LockIcon, {
                            size: 'xs',
                            color: i.Z.INTERACTIVE_NORMAL
                        }),
                        (0, l.jsx)(o.Heading, {
                            color: 'header-primary',
                            variant: 'heading-md/semibold',
                            children: j.intl.string(j.t.oCYAc3)
                        }),
                        (0, l.jsx)(s.Z, {})
                    ]
                })
            }),
            (0, l.jsx)(o.ModalContent, {
                children: (0, l.jsxs)('div', {
                    className: g.mainContainer,
                    children: [
                        (0, l.jsx)(o.Select, {
                            placeholder: j.intl.string(j.t.vKYZzc),
                            options: (0, _.c1)(),
                            select: (e) => {
                                E(e), y(!0);
                            },
                            isSelected: (e) => e === T,
                            serialize: (e) => String(e)
                        }),
                        (0, l.jsxs)('div', {
                            className: g.pauseContainer,
                            children: [
                                (0, l.jsxs)('div', {
                                    className: g.pauseText,
                                    children: [
                                        (0, l.jsx)(o.Text, {
                                            variant: 'text-md/semibold',
                                            color: 'header-primary',
                                            children: j.intl.string(j.t.Uwsjn5)
                                        }),
                                        (0, l.jsx)(o.Text, {
                                            variant: 'text-sm/normal',
                                            color: 'text-muted',
                                            children: j.intl.string(j.t.qPJkZm)
                                        })
                                    ]
                                }),
                                (0, l.jsx)(o.Tooltip, {
                                    text: j.intl.string(j.t['9GPbsb']),
                                    shouldShow: N,
                                    children: (e) =>
                                        (0, l.jsx)('div', {
                                            ...e,
                                            children: (0, l.jsx)(o.Switch, {
                                                className: g.toggle,
                                                onChange: G,
                                                checked: Z,
                                                disabled: P
                                            })
                                        })
                                })
                            ]
                        }),
                        (0, l.jsxs)('div', {
                            className: g.pauseContainer,
                            children: [
                                (0, l.jsxs)('div', {
                                    className: g.pauseText,
                                    children: [
                                        (0, l.jsx)(o.Text, {
                                            variant: 'text-md/semibold',
                                            color: 'header-primary',
                                            children: j.intl.string(j.t.wrDmAw)
                                        }),
                                        (0, l.jsx)(o.Text, {
                                            variant: 'text-sm/normal',
                                            color: 'text-muted',
                                            children: j.intl.string(j.t.UQbJW1)
                                        })
                                    ]
                                }),
                                (0, l.jsx)(o.Switch, {
                                    className: g.toggle,
                                    onChange: function () {
                                        L((e) => !e);
                                    },
                                    checked: B
                                })
                            ]
                        })
                    ]
                })
            }),
            (0, l.jsxs)(o.ModalFooter, {
                children: [
                    (0, l.jsx)(o.Button, {
                        onClick: () => {
                            (A || R) && !Z && !B
                                ? ((0, u.n)(p.id, !1, !1),
                                  (0, o.openModalLazy)(() =>
                                      Promise.resolve((e) =>
                                          (0, l.jsx)(b.Z, {
                                              ...e,
                                              guildId: n
                                          })
                                      )
                                  ))
                                : (0, u.n)(p.id, Z, B, T);
                            let { source: e, alertType: t, messageId: r } = v;
                            d.default.track(C.rMx.GUILD_RAID_INTERVENTION_STATE_CHANGE, {
                                guild_id: n,
                                source: e,
                                raid_alert_id: r,
                                raid_alert_type: t,
                                intervention_type_enabled: (0, m.sO)(Z, B),
                                intervention_type_disabled: (0, m.lk)(Z, B),
                                duration: 60 * T
                            }),
                                f();
                        },
                        color: o.Button.Colors.BRAND,
                        look: o.Button.Looks.FILLED,
                        submitting: S,
                        disabled: !D,
                        children: j.intl.string(j.t['pwm/z8'])
                    }),
                    (0, l.jsx)(o.Button, {
                        onClick: f,
                        color: o.Button.Colors.PRIMARY,
                        look: o.Button.Looks.LINK,
                        disabled: S,
                        children: j.intl.string(j.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
}
