t.d(n, {
    W: function () {
        return N;
    },
    Z: function () {
        return E;
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
    m = t(785717),
    x = t(221292),
    I = t(687158),
    p = t(471879),
    h = t(502762),
    v = t(475413),
    g = t(228168),
    Z = t(981631),
    _ = t(388032),
    j = t(884451),
    b = t(161068);
function E(e) {
    let { user: n, guildId: t, channelId: o, messageId: r, roleId: s, transitionState: f, onViewBlockedProfileClick: E, showGuildProfile: N = !0, sourceAnalyticsLocations: S = [] } = e,
        T = t === Z.ME ? void 0 : t,
        { analyticsLocations: y } = (0, d.ZP)([...S, a.Z.BLOCKED_PROFILE_MODAL]),
        P = (0, m.ZB)({
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
                description: _.intl.string(_.t.Kn2UDA)
            },
            {
                icon: c.DenyIcon,
                description: _.intl.string(_.t.QxrDY2)
            }
        ],
        A = (0, I.ZP)(n.id, N ? T : void 0),
        L = l.createRef();
    return (0, i.jsx)(d.Gt, {
        value: y,
        children: (0, i.jsx)(m.Mt, {
            value: P,
            children: (0, i.jsx)(c.ModalRoot, {
                transitionState: f,
                className: j.root,
                hideShadow: !0,
                'aria-label': _.intl.string(_.t['3N/J2t']),
                children: (0, i.jsx)(h.Z, {
                    user: n,
                    displayProfile: A,
                    profileType: g.y0.FULL_SIZE,
                    ref: L,
                    children: (0, i.jsxs)('div', {
                        className: j.container,
                        children: [
                            (0, i.jsx)('img', {
                                alt: '',
                                src: b,
                                className: j.previewForCollected,
                                'aria-hidden': !0
                            }),
                            (0, i.jsxs)('div', {
                                className: j.body,
                                children: [
                                    (0, i.jsx)(p.Z, {
                                        user: n,
                                        guildId: T
                                    }),
                                    (0, i.jsx)(c.Heading, {
                                        variant: 'heading-xl/bold',
                                        className: j.header,
                                        children: _.intl.string(_.t.VNJ7UF)
                                    }),
                                    (0, i.jsx)(c.Text, {
                                        variant: 'text-md/medium',
                                        children: _.intl.format(_.t.LXbngo, { username: n.username })
                                    }),
                                    (0, i.jsx)(c.Text, {
                                        variant: 'text-md/medium',
                                        children: _.intl.string(_.t['uBvD//'])
                                    }),
                                    (0, i.jsx)('div', {
                                        className: j.safetyTable,
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
                                    (0, i.jsx)(v.tG, {
                                        className: j.centeredButton,
                                        action: 'VIEW_BLOCKED_PROFILE',
                                        text: _.intl.string(_.t.iXAna2),
                                        autoFocus: !0,
                                        fullWidth: !1,
                                        onClick: () => {
                                            null == E || E(),
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
function N(e) {
    let { user: n, guildId: t, channelId: o, messageId: E, roleId: N, transitionState: S, onViewBlockedProfileClick: T, showGuildProfile: y = !0, sourceAnalyticsLocations: P = [] } = e,
        C = t === Z.ME ? void 0 : t,
        A = (0, s.e7)([f.Z], () => f.Z.isBlocked(n.id)),
        { analyticsLocations: L } = (0, d.ZP)([...P, A ? a.Z.BLOCKED_PROFILE_MODAL : a.Z.IGNORED_PROFILE_MODAL]),
        O = (0, m.ZB)({
            layout: A ? 'BLOCKED_PROFILE_MODAL' : 'IGNORED_PROFILE_MODAL',
            userId: n.id,
            guildId: C,
            channelId: o,
            messageId: E,
            roleId: N,
            showGuildProfile: y
        }),
        M = [
            {
                icon: c.CircleCheckIcon,
                description: _.intl.string(_.t.kcuWvb)
            },
            {
                icon: c.CircleCheckIcon,
                description: _.intl.string(A ? _.t.QxrDY2 : _.t.W6fjkZ)
            }
        ],
        R = (0, I.ZP)(n.id, y ? C : void 0),
        U = l.createRef();
    return (0, i.jsx)(d.Gt, {
        value: L,
        children: (0, i.jsx)(m.Mt, {
            value: O,
            children: (0, i.jsx)(c.ModalRoot, {
                transitionState: S,
                className: j.root,
                hideShadow: !0,
                'aria-label': _.intl.string(_.t['3N/J2t']),
                children: (0, i.jsx)(h.Z, {
                    user: n,
                    displayProfile: R,
                    profileType: g.y0.FULL_SIZE,
                    ref: U,
                    children: (0, i.jsxs)('div', {
                        className: j.container,
                        children: [
                            (0, i.jsx)('img', {
                                alt: '',
                                src: b,
                                className: j.previewForCollected,
                                'aria-hidden': !0
                            }),
                            (0, i.jsxs)('div', {
                                className: r()(j.body, j.bodySpacing),
                                children: [
                                    (0, i.jsx)(p.i, {
                                        user: n,
                                        guildId: C
                                    }),
                                    (0, i.jsxs)('div', {
                                        className: j.headerContainer,
                                        children: [
                                            (0, i.jsx)(c.Heading, {
                                                variant: 'heading-xl/bold',
                                                color: 'header-primary',
                                                children: _.intl.string(_.t.CCnxtr)
                                            }),
                                            (0, i.jsx)(c.Text, {
                                                variant: 'text-md/medium',
                                                color: 'header-primary',
                                                children: _.intl.format(A ? _.t.jpewd3 : _.t['5Aq1kZ'], { username: n.username })
                                            })
                                        ]
                                    }),
                                    (0, i.jsx)('div', {
                                        className: j.restrictedSafetyTable,
                                        children: M.map((e, n) => {
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
                                    (0, i.jsx)(v.tG, {
                                        action: A ? 'VIEW_BLOCKED_PROFILE' : 'VIEW_IGNORED_PROFILE',
                                        text: _.intl.string(_.t.HO0AxM),
                                        autoFocus: !0,
                                        fullWidth: !1,
                                        onClick: () => {
                                            null == T || T(),
                                                (0, x.pQ)({
                                                    action: 'VIEW_BLOCKED_PROFILE',
                                                    analyticsLocations: L,
                                                    ...O
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
