t.d(n, {
    W: function () {
        return T;
    },
    Z: function () {
        return S;
    }
}),
    t(47120);
var i = t(200651),
    l = t(192379),
    o = t(120356),
    r = t.n(o),
    s = t(442837),
    c = t(481060),
    a = t(100527),
    d = t(906732),
    u = t(138201),
    f = t(699516),
    m = t(5192),
    I = t(785717),
    x = t(221292),
    p = t(687158),
    h = t(471879),
    v = t(502762),
    g = t(848780),
    Z = t(475413),
    _ = t(228168),
    j = t(981631),
    b = t(388032),
    E = t(409308),
    N = t(161068);
function S(e) {
    let { user: n, guildId: t, channelId: o, messageId: r, roleId: s, transitionState: f, onViewBlockedProfileClick: m, showGuildProfile: g = !0, sourceAnalyticsLocations: S = [] } = e,
        T = t === j.ME ? void 0 : t,
        { analyticsLocations: y } = (0, d.ZP)([...S, a.Z.BLOCKED_PROFILE_MODAL]),
        P = (0, I.ZB)({
            layout: 'BLOCKED_PROFILE_MODAL',
            userId: n.id,
            guildId: T,
            channelId: o,
            messageId: r,
            roleId: s,
            showGuildProfile: g
        }),
        C = [
            {
                icon: c.BellSlashIcon,
                description: b.intl.string(b.t.Kn2UDA)
            },
            {
                icon: c.DenyIcon,
                description: b.intl.string(b.t.QxrDY2)
            }
        ],
        L = (0, p.ZP)(n.id, g ? T : void 0),
        A = l.createRef();
    return (0, i.jsx)(d.Gt, {
        value: y,
        children: (0, i.jsx)(I.Mt, {
            value: P,
            children: (0, i.jsx)(c.ModalRoot, {
                transitionState: f,
                className: E.root,
                hideShadow: !0,
                'aria-label': b.intl.string(b.t['3N/J2t']),
                children: (0, i.jsx)(v.Z, {
                    user: n,
                    displayProfile: L,
                    profileType: _.y0.FULL_SIZE,
                    ref: A,
                    children: (0, i.jsxs)('div', {
                        className: E.container,
                        children: [
                            (0, i.jsx)('img', {
                                alt: '',
                                src: N,
                                className: E.previewForCollected,
                                'aria-hidden': !0
                            }),
                            (0, i.jsxs)('div', {
                                className: E.body,
                                children: [
                                    (0, i.jsx)(h.Z, {
                                        user: n,
                                        guildId: T
                                    }),
                                    (0, i.jsx)(c.Heading, {
                                        variant: 'heading-xl/bold',
                                        className: E.header,
                                        children: b.intl.string(b.t.VNJ7UF)
                                    }),
                                    (0, i.jsx)(c.Text, {
                                        variant: 'text-md/medium',
                                        children: b.intl.format(b.t.LXbngo, { username: n.username })
                                    }),
                                    (0, i.jsx)(c.Text, {
                                        variant: 'text-md/medium',
                                        children: b.intl.string(b.t['uBvD//'])
                                    }),
                                    (0, i.jsx)('div', {
                                        className: E.safetyTable,
                                        children: C.map((e, n) => {
                                            let { icon: t, description: l } = e;
                                            return (0, i.jsx)(
                                                u.Z,
                                                {
                                                    icon: t,
                                                    title: l,
                                                    titleVariant: 'text-md/normal'
                                                },
                                                n
                                            );
                                        })
                                    }),
                                    (0, i.jsx)(Z.tG, {
                                        className: E.centeredButton,
                                        action: 'VIEW_BLOCKED_PROFILE',
                                        text: b.intl.string(b.t.iXAna2),
                                        autoFocus: !0,
                                        fullWidth: !1,
                                        onClick: () => {
                                            null == m || m(),
                                                (0, x.pQ)({
                                                    action: 'VIEW_BLOCKED_PROFILE',
                                                    analyticsLocations: y,
                                                    ...P
                                                });
                                        }
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        })
    });
}
function T(e) {
    let { user: n, guildId: t, channelId: o, messageId: S, roleId: T, transitionState: y, onViewBlockedProfileClick: P, showGuildProfile: C = !0, sourceAnalyticsLocations: L = [] } = e,
        A = t === j.ME ? void 0 : t,
        O = (0, s.e7)([f.Z], () => f.Z.isBlocked(n.id)),
        { analyticsLocations: R } = (0, d.ZP)([...L, O ? a.Z.BLOCKED_PROFILE_MODAL : a.Z.IGNORED_PROFILE_MODAL]),
        M = (0, I.ZB)({
            layout: O ? 'BLOCKED_PROFILE_MODAL' : 'IGNORED_PROFILE_MODAL',
            userId: n.id,
            guildId: A,
            channelId: o,
            messageId: S,
            roleId: T,
            showGuildProfile: C
        }),
        U = [
            {
                icon: c.CircleCheckIcon,
                description: b.intl.string(b.t.kcuWvb)
            },
            {
                icon: c.CircleCheckIcon,
                description: b.intl.string(O ? b.t.QxrDY2 : b.t.W6fjkZ)
            }
        ],
        B = (0, p.ZP)(n.id, C ? A : void 0),
        F = l.createRef();
    return (0, i.jsx)(d.Gt, {
        value: R,
        children: (0, i.jsx)(I.Mt, {
            value: M,
            children: (0, i.jsx)(c.ModalRoot, {
                transitionState: y,
                className: E.root,
                hideShadow: !0,
                'aria-label': b.intl.string(b.t['3N/J2t']),
                children: (0, i.jsx)(v.Z, {
                    user: n,
                    displayProfile: B,
                    profileType: _.y0.FULL_SIZE,
                    ref: F,
                    children: (0, i.jsxs)('div', {
                        className: E.container,
                        children: [
                            (0, i.jsx)('img', {
                                alt: '',
                                src: N,
                                className: E.previewForCollected,
                                'aria-hidden': !0
                            }),
                            (0, i.jsxs)('div', {
                                className: r()(E.body, E.bodySpacing),
                                children: [
                                    (0, i.jsx)(h.i, {
                                        user: n,
                                        guildId: A
                                    }),
                                    (0, i.jsxs)('div', {
                                        className: E.headerContainer,
                                        children: [
                                            (0, i.jsx)(c.Heading, {
                                                variant: 'heading-xl/bold',
                                                color: 'header-primary',
                                                children: b.intl.string(b.t.b33pLC)
                                            }),
                                            (0, i.jsx)(c.Text, {
                                                variant: 'text-md/medium',
                                                color: 'header-primary',
                                                children: b.intl.format(O ? b.t['8F+WNz'] : b.t['/cZp5u'], { username: m.ZP.getName(A, o, n) })
                                            })
                                        ]
                                    }),
                                    (0, i.jsx)('div', {
                                        className: E.restrictedSafetyTable,
                                        children: U.map((e, n) => {
                                            let { icon: t, description: l } = e;
                                            return (0, i.jsx)(
                                                u.Z,
                                                {
                                                    icon: t,
                                                    title: l,
                                                    titleVariant: 'text-md/normal'
                                                },
                                                n
                                            );
                                        })
                                    }),
                                    (0, i.jsxs)(c.Stack, {
                                        align: 'center',
                                        children: [
                                            (0, i.jsx)(Z.tG, {
                                                action: O ? 'VIEW_BLOCKED_PROFILE' : 'VIEW_IGNORED_PROFILE',
                                                text: b.intl.string(b.t['UJKH/v']),
                                                autoFocus: !0,
                                                fullWidth: !1,
                                                onClick: () => {
                                                    null == P || P(),
                                                        (0, x.pQ)({
                                                            action: O ? 'VIEW_BLOCKED_PROFILE' : 'VIEW_IGNORED_PROFILE',
                                                            analyticsLocations: R,
                                                            ...M
                                                        });
                                                }
                                            }),
                                            (0, i.jsx)(g.Z, {
                                                userId: n.id,
                                                onClick: () => {
                                                    null == P || P(),
                                                        (0, x.pQ)({
                                                            action: 'DONT_SHOW_AGAIN_IGNORED_PROFILE',
                                                            analyticsLocations: R,
                                                            ...M
                                                        });
                                                }
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        })
    });
}
