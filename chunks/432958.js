n.d(t, {
    A: function () {
        return S;
    },
    Z: function () {
        return N;
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
    v = n(475413),
    I = n(228168),
    E = n(388032),
    b = n(351094),
    Z = n(321975);
function N(e) {
    let { user: t, channel: n, onViewBlockedProfileClick: r } = e,
        a = (0, C.ZP)(t.id),
        o = (0, d.ZP)(),
        { analyticsLocations: p } = (0, h.ZP)(u.Z.BLOCKED_PROFILE_PANEL),
        m = (0, f.ZB)({
            layout: 'BLOCKED_PROFILE_PANEL',
            userId: t.id,
            channelId: n.id
        }),
        N = l.useRef(null);
    return (0, i.jsx)(h.Gt, {
        value: p,
        children: (0, i.jsx)(f.Mt, {
            value: m,
            children: (0, i.jsx)(_.Z, {
                ref: N,
                user: t,
                displayProfile: a,
                profileType: I.y0.PANEL,
                themeOverride: o,
                children: (0, i.jsx)(s.u2, {
                    children: (0, i.jsxs)('div', {
                        className: b.container,
                        children: [
                            (0, i.jsx)('img', {
                                alt: '',
                                src: Z,
                                className: b.previewForCollected,
                                'aria-hidden': !0
                            }),
                            (0, i.jsxs)('div', {
                                className: b.body,
                                children: [
                                    (0, i.jsx)(x.Z, {
                                        user: t,
                                        guildId: null
                                    }),
                                    (0, i.jsx)(c.Heading, {
                                        variant: 'heading-lg/bold',
                                        className: b.header,
                                        children: E.intl.string(E.t.VNJ7UF)
                                    }),
                                    (0, i.jsx)(c.Text, {
                                        variant: 'text-sm/medium',
                                        children: E.intl.format(E.t.LXbngo, { username: t.username })
                                    }),
                                    (0, i.jsx)(c.Text, {
                                        variant: 'text-sm/medium',
                                        children: E.intl.string(E.t['20WzZ2'])
                                    }),
                                    (0, i.jsx)(v.tG, {
                                        className: b.centeredButton,
                                        action: 'VIEW_BLOCKED_PROFILE',
                                        text: E.intl.string(E.t.iXAna2),
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
function S(e) {
    let { user: t, channel: n, onViewBlockedProfileClick: r } = e,
        N = (0, C.ZP)(t.id),
        S = (0, d.ZP)(),
        T = (0, o.e7)([p.Z], () => p.Z.isBlocked(t.id)),
        { analyticsLocations: j } = (0, h.ZP)(T ? u.Z.BLOCKED_PROFILE_PANEL : u.Z.IGNORED_PROFILE_PANEL),
        A = (0, f.ZB)({
            layout: T ? 'BLOCKED_PROFILE_PANEL' : 'IGNORED_PROFILE_PANEL',
            userId: t.id,
            channelId: n.id
        }),
        y = l.useRef(null);
    return (0, i.jsx)(h.Gt, {
        value: j,
        children: (0, i.jsx)(f.Mt, {
            value: A,
            children: (0, i.jsx)(_.Z, {
                ref: y,
                user: t,
                displayProfile: N,
                profileType: I.y0.PANEL,
                themeOverride: S,
                children: (0, i.jsx)(s.u2, {
                    children: (0, i.jsxs)('div', {
                        className: b.container,
                        children: [
                            (0, i.jsx)('img', {
                                alt: '',
                                src: Z,
                                className: b.previewForCollected,
                                'aria-hidden': !0
                            }),
                            (0, i.jsxs)('div', {
                                className: a()(b.body, b.bodySpacing),
                                children: [
                                    (0, i.jsxs)('div', {
                                        className: b.headerContainer,
                                        children: [
                                            (0, i.jsx)(x.i, { user: t }),
                                            (0, i.jsx)(c.Heading, {
                                                variant: 'heading-lg/bold',
                                                children: E.intl.string(E.t.b33pLC)
                                            }),
                                            (0, i.jsx)(c.Text, {
                                                variant: 'text-sm/medium',
                                                children: E.intl.format(T ? E.t['8F+WNz'] : E.t['/cZp5u'], { username: m.ZP.getName(n.guild_id, n.id, t) })
                                            })
                                        ]
                                    }),
                                    (0, i.jsx)(v.tG, {
                                        action: 'VIEW_BLOCKED_PROFILE',
                                        text: E.intl.string(E.t['UJKH/v']),
                                        autoFocus: !0,
                                        fullWidth: !1,
                                        onClick: () => {
                                            null == r || r(),
                                                (0, g.pQ)({
                                                    action: 'VIEW_BLOCKED_PROFILE',
                                                    analyticsLocations: j,
                                                    ...A
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
