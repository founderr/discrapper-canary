n.d(t, {
    A: function () {
        return T;
    },
    Z: function () {
        return S;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(597312),
    o = n(442837),
    c = n(481060),
    d = n(410030),
    u = n(100527),
    h = n(906732),
    p = n(699516),
    m = n(5192),
    f = n(785717),
    g = n(221292),
    C = n(687158),
    x = n(471879),
    _ = n(502762),
    v = n(848780),
    I = n(475413),
    E = n(228168),
    b = n(388032),
    N = n(562296),
    Z = n(321975);
function S(e) {
    let { user: t, channel: n, onViewBlockedProfileClick: r } = e,
        a = (0, C.ZP)(t.id),
        o = (0, d.ZP)(),
        { analyticsLocations: p } = (0, h.ZP)(u.Z.BLOCKED_PROFILE_PANEL),
        m = (0, f.ZB)({
            layout: 'BLOCKED_PROFILE_PANEL',
            userId: t.id,
            channelId: n.id
        }),
        v = l.useRef(null);
    return (0, i.jsx)(h.Gt, {
        value: p,
        children: (0, i.jsx)(f.Mt, {
            value: m,
            children: (0, i.jsx)(_.Z, {
                ref: v,
                user: t,
                displayProfile: a,
                profileType: E.y0.PANEL,
                themeOverride: o,
                children: (0, i.jsx)(s.u2, {
                    children: (0, i.jsxs)('div', {
                        className: N.container,
                        children: [
                            (0, i.jsx)('img', {
                                alt: '',
                                src: Z,
                                className: N.previewForCollected,
                                'aria-hidden': !0
                            }),
                            (0, i.jsxs)('div', {
                                className: N.body,
                                children: [
                                    (0, i.jsx)(x.Z, {
                                        user: t,
                                        guildId: null
                                    }),
                                    (0, i.jsx)(c.Heading, {
                                        variant: 'heading-lg/bold',
                                        className: N.header,
                                        children: b.intl.string(b.t.VNJ7UF)
                                    }),
                                    (0, i.jsx)(c.Text, {
                                        variant: 'text-sm/medium',
                                        children: b.intl.format(b.t.LXbngo, { username: t.username })
                                    }),
                                    (0, i.jsx)(c.Text, {
                                        variant: 'text-sm/medium',
                                        children: b.intl.string(b.t['20WzZ2'])
                                    }),
                                    (0, i.jsx)(I.tG, {
                                        className: N.centeredButton,
                                        action: 'VIEW_BLOCKED_PROFILE',
                                        text: b.intl.string(b.t.iXAna2),
                                        autoFocus: !0,
                                        fullWidth: !1,
                                        onClick: () => {
                                            null == r || r(),
                                                (0, g.pQ)({
                                                    action: 'VIEW_BLOCKED_PROFILE',
                                                    analyticsLocations: p,
                                                    ...m
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
    let { user: t, channel: n, onViewBlockedProfileClick: r } = e,
        S = (0, C.ZP)(t.id),
        T = (0, d.ZP)(),
        j = (0, o.e7)([p.Z], () => p.Z.isBlocked(t.id)),
        { analyticsLocations: A } = (0, h.ZP)(j ? u.Z.BLOCKED_PROFILE_PANEL : u.Z.IGNORED_PROFILE_PANEL),
        y = (0, f.ZB)({
            layout: j ? 'BLOCKED_PROFILE_PANEL' : 'IGNORED_PROFILE_PANEL',
            userId: t.id,
            channelId: n.id
        }),
        P = l.useRef(null);
    return (0, i.jsx)(h.Gt, {
        value: A,
        children: (0, i.jsx)(f.Mt, {
            value: y,
            children: (0, i.jsx)(_.Z, {
                ref: P,
                user: t,
                displayProfile: S,
                profileType: E.y0.PANEL,
                themeOverride: T,
                children: (0, i.jsx)(s.u2, {
                    children: (0, i.jsxs)('div', {
                        className: N.container,
                        children: [
                            (0, i.jsx)('img', {
                                alt: '',
                                src: Z,
                                className: N.previewForCollected,
                                'aria-hidden': !0
                            }),
                            (0, i.jsxs)('div', {
                                className: a()(N.body, N.bodySpacing),
                                children: [
                                    (0, i.jsxs)('div', {
                                        className: N.headerContainer,
                                        children: [
                                            (0, i.jsx)(x.i, { user: t }),
                                            (0, i.jsx)(c.Heading, {
                                                variant: 'heading-lg/bold',
                                                children: b.intl.string(b.t.b33pLC)
                                            }),
                                            (0, i.jsx)(c.Text, {
                                                variant: 'text-sm/medium',
                                                children: b.intl.format(j ? b.t['8F+WNz'] : b.t['/cZp5u'], { username: m.ZP.getName(n.guild_id, n.id, t) })
                                            })
                                        ]
                                    }),
                                    (0, i.jsxs)(c.Stack, {
                                        align: 'center',
                                        children: [
                                            (0, i.jsx)(I.tG, {
                                                action: j ? 'VIEW_BLOCKED_PROFILE' : 'VIEW_IGNORED_PROFILE',
                                                text: b.intl.string(b.t['UJKH/v']),
                                                autoFocus: !0,
                                                fullWidth: !1,
                                                onClick: () => {
                                                    null == r || r(),
                                                        (0, g.pQ)({
                                                            action: j ? 'VIEW_BLOCKED_PROFILE' : 'VIEW_IGNORED_PROFILE',
                                                            analyticsLocations: A,
                                                            ...y
                                                        });
                                                }
                                            }),
                                            (0, i.jsx)(v.Z, {
                                                userId: t.id,
                                                onClick: () => {
                                                    null == r || r(),
                                                        (0, g.pQ)({
                                                            action: 'DONT_SHOW_AGAIN_IGNORED_PROFILE',
                                                            analyticsLocations: A,
                                                            ...y
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
