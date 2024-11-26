t.d(n, {
    W: function () {
        return S;
    },
    Z: function () {
        return N;
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
    x = t(785717),
    I = t(221292),
    p = t(687158),
    h = t(471879),
    v = t(502762),
    g = t(475413),
    Z = t(228168),
    _ = t(981631),
    j = t(388032),
    b = t(409308),
    E = t(161068);
function N(e) {
    let { user: n, guildId: t, channelId: o, messageId: r, roleId: s, transitionState: f, onViewBlockedProfileClick: m, showGuildProfile: N = !0, sourceAnalyticsLocations: S = [] } = e,
        T = t === _.ME ? void 0 : t,
        { analyticsLocations: y } = (0, d.ZP)([...S, a.Z.BLOCKED_PROFILE_MODAL]),
        P = (0, x.ZB)({
            layout: 'BLOCKED_PROFILE_MODAL',
            userId: n.id,
            guildId: T,
            channelId: o,
            messageId: r,
            roleId: s,
            showGuildProfile: N
        }),
        C = [
            {
                icon: c.BellSlashIcon,
                description: j.intl.string(j.t.Kn2UDA)
            },
            {
                icon: c.DenyIcon,
                description: j.intl.string(j.t.QxrDY2)
            }
        ],
        L = (0, p.ZP)(n.id, N ? T : void 0),
        A = l.createRef();
    return (0, i.jsx)(d.Gt, {
        value: y,
        children: (0, i.jsx)(x.Mt, {
            value: P,
            children: (0, i.jsx)(c.ModalRoot, {
                transitionState: f,
                className: b.root,
                hideShadow: !0,
                'aria-label': j.intl.string(j.t['3N/J2t']),
                children: (0, i.jsx)(v.Z, {
                    user: n,
                    displayProfile: L,
                    profileType: Z.y0.FULL_SIZE,
                    ref: A,
                    children: (0, i.jsxs)('div', {
                        className: b.container,
                        children: [
                            (0, i.jsx)('img', {
                                alt: '',
                                src: E,
                                className: b.previewForCollected,
                                'aria-hidden': !0
                            }),
                            (0, i.jsxs)('div', {
                                className: b.body,
                                children: [
                                    (0, i.jsx)(h.Z, {
                                        user: n,
                                        guildId: T
                                    }),
                                    (0, i.jsx)(c.Heading, {
                                        variant: 'heading-xl/bold',
                                        className: b.header,
                                        children: j.intl.string(j.t.VNJ7UF)
                                    }),
                                    (0, i.jsx)(c.Text, {
                                        variant: 'text-md/medium',
                                        children: j.intl.format(j.t.LXbngo, { username: n.username })
                                    }),
                                    (0, i.jsx)(c.Text, {
                                        variant: 'text-md/medium',
                                        children: j.intl.string(j.t['uBvD//'])
                                    }),
                                    (0, i.jsx)('div', {
                                        className: b.safetyTable,
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
                                    (0, i.jsx)(g.tG, {
                                        className: b.centeredButton,
                                        action: 'VIEW_BLOCKED_PROFILE',
                                        text: j.intl.string(j.t.iXAna2),
                                        autoFocus: !0,
                                        fullWidth: !1,
                                        onClick: () => {
                                            null == m || m(),
                                                (0, I.pQ)({
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
function S(e) {
    let { user: n, guildId: t, channelId: o, messageId: N, roleId: S, transitionState: T, onViewBlockedProfileClick: y, showGuildProfile: P = !0, sourceAnalyticsLocations: C = [] } = e,
        L = t === _.ME ? void 0 : t,
        A = (0, s.e7)([f.Z], () => f.Z.isBlocked(n.id)),
        { analyticsLocations: O } = (0, d.ZP)([...C, A ? a.Z.BLOCKED_PROFILE_MODAL : a.Z.IGNORED_PROFILE_MODAL]),
        M = (0, x.ZB)({
            layout: A ? 'BLOCKED_PROFILE_MODAL' : 'IGNORED_PROFILE_MODAL',
            userId: n.id,
            guildId: L,
            channelId: o,
            messageId: N,
            roleId: S,
            showGuildProfile: P
        }),
        R = [
            {
                icon: c.CircleCheckIcon,
                description: j.intl.string(j.t.kcuWvb)
            },
            {
                icon: c.CircleCheckIcon,
                description: j.intl.string(A ? j.t.QxrDY2 : j.t.W6fjkZ)
            }
        ],
        U = (0, p.ZP)(n.id, P ? L : void 0),
        B = l.createRef();
    return (0, i.jsx)(d.Gt, {
        value: O,
        children: (0, i.jsx)(x.Mt, {
            value: M,
            children: (0, i.jsx)(c.ModalRoot, {
                transitionState: T,
                className: b.root,
                hideShadow: !0,
                'aria-label': j.intl.string(j.t['3N/J2t']),
                children: (0, i.jsx)(v.Z, {
                    user: n,
                    displayProfile: U,
                    profileType: Z.y0.FULL_SIZE,
                    ref: B,
                    children: (0, i.jsxs)('div', {
                        className: b.container,
                        children: [
                            (0, i.jsx)('img', {
                                alt: '',
                                src: E,
                                className: b.previewForCollected,
                                'aria-hidden': !0
                            }),
                            (0, i.jsxs)('div', {
                                className: r()(b.body, b.bodySpacing),
                                children: [
                                    (0, i.jsx)(h.i, {
                                        user: n,
                                        guildId: L
                                    }),
                                    (0, i.jsxs)('div', {
                                        className: b.headerContainer,
                                        children: [
                                            (0, i.jsx)(c.Heading, {
                                                variant: 'heading-xl/bold',
                                                color: 'header-primary',
                                                children: j.intl.string(j.t.b33pLC)
                                            }),
                                            (0, i.jsx)(c.Text, {
                                                variant: 'text-md/medium',
                                                color: 'header-primary',
                                                children: j.intl.format(A ? j.t['8F+WNz'] : j.t['/cZp5u'], { username: m.ZP.getName(L, o, n) })
                                            })
                                        ]
                                    }),
                                    (0, i.jsx)('div', {
                                        className: b.restrictedSafetyTable,
                                        children: R.map((e, n) => {
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
                                    (0, i.jsx)(g.tG, {
                                        action: A ? 'VIEW_BLOCKED_PROFILE' : 'VIEW_IGNORED_PROFILE',
                                        text: j.intl.string(j.t['UJKH/v']),
                                        autoFocus: !0,
                                        fullWidth: !1,
                                        onClick: () => {
                                            null == y || y(),
                                                (0, I.pQ)({
                                                    action: 'VIEW_BLOCKED_PROFILE',
                                                    analyticsLocations: O,
                                                    ...M
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
