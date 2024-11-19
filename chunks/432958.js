n.d(t, {
    A: function () {
        return N;
    },
    Z: function () {
        return Z;
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
    m = n(785717),
    f = n(221292),
    g = n(687158),
    C = n(471879),
    x = n(502762),
    _ = n(475413),
    v = n(228168),
    I = n(388032),
    E = n(222470),
    b = n(321975);
function Z(e) {
    let { user: t, channel: n, onViewBlockedProfileClick: r } = e,
        a = (0, g.ZP)(t.id),
        o = (0, d.ZP)(),
        { analyticsLocations: p } = (0, h.ZP)(u.Z.BLOCKED_PROFILE_PANEL),
        Z = (0, m.ZB)({
            layout: 'BLOCKED_PROFILE_PANEL',
            userId: t.id,
            channelId: n.id
        }),
        N = l.useRef(null);
    return (0, i.jsx)(h.Gt, {
        value: p,
        children: (0, i.jsx)(m.Mt, {
            value: Z,
            children: (0, i.jsx)(x.Z, {
                ref: N,
                user: t,
                displayProfile: a,
                profileType: v.y0.PANEL,
                themeOverride: o,
                children: (0, i.jsx)(s.u2, {
                    children: (0, i.jsxs)('div', {
                        className: E.container,
                        children: [
                            (0, i.jsx)('img', {
                                alt: '',
                                src: b,
                                className: E.previewForCollected,
                                'aria-hidden': !0
                            }),
                            (0, i.jsxs)('div', {
                                className: E.body,
                                children: [
                                    (0, i.jsx)(C.Z, {
                                        user: t,
                                        guildId: null
                                    }),
                                    (0, i.jsx)(c.Heading, {
                                        variant: 'heading-lg/bold',
                                        className: E.header,
                                        children: I.intl.string(I.t.VNJ7UF)
                                    }),
                                    (0, i.jsx)(c.Text, {
                                        variant: 'text-sm/medium',
                                        children: I.intl.format(I.t.LXbngo, { username: t.username })
                                    }),
                                    (0, i.jsx)(c.Text, {
                                        variant: 'text-sm/medium',
                                        children: I.intl.string(I.t['20WzZ2'])
                                    }),
                                    (0, i.jsx)(_.tG, {
                                        className: E.centeredButton,
                                        action: 'VIEW_BLOCKED_PROFILE',
                                        text: I.intl.string(I.t.iXAna2),
                                        autoFocus: !0,
                                        fullWidth: !1,
                                        onClick: () => {
                                            null == r || r(),
                                                (0, f.pQ)({
                                                    action: 'VIEW_BLOCKED_PROFILE',
                                                    analyticsLocations: p,
                                                    ...Z
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
    let { user: t, channel: n, onViewBlockedProfileClick: r } = e,
        Z = (0, g.ZP)(t.id),
        N = (0, d.ZP)(),
        S = (0, o.e7)([p.Z], () => p.Z.isBlocked(t.id)),
        { analyticsLocations: T } = (0, h.ZP)(S ? u.Z.BLOCKED_PROFILE_PANEL : u.Z.IGNORED_PROFILE_PANEL),
        j = (0, m.ZB)({
            layout: S ? 'BLOCKED_PROFILE_PANEL' : 'IGNORED_PROFILE_PANEL',
            userId: t.id,
            channelId: n.id
        }),
        A = l.useRef(null);
    return (0, i.jsx)(h.Gt, {
        value: T,
        children: (0, i.jsx)(m.Mt, {
            value: j,
            children: (0, i.jsx)(x.Z, {
                ref: A,
                user: t,
                displayProfile: Z,
                profileType: v.y0.PANEL,
                themeOverride: N,
                children: (0, i.jsx)(s.u2, {
                    children: (0, i.jsxs)('div', {
                        className: E.container,
                        children: [
                            (0, i.jsx)('img', {
                                alt: '',
                                src: b,
                                className: E.previewForCollected,
                                'aria-hidden': !0
                            }),
                            (0, i.jsxs)('div', {
                                className: a()(E.body, E.bodySpacing),
                                children: [
                                    (0, i.jsxs)('div', {
                                        className: E.headerContainer,
                                        children: [
                                            (0, i.jsx)(C.i, { user: t }),
                                            (0, i.jsx)(c.Heading, {
                                                variant: 'heading-lg/bold',
                                                children: I.intl.string(I.t.CCnxtr)
                                            }),
                                            (0, i.jsx)(c.Text, {
                                                variant: 'text-sm/medium',
                                                children: I.intl.format(S ? I.t['4d+1oK'] : I.t['17zhY2'], { username: t.username })
                                            })
                                        ]
                                    }),
                                    (0, i.jsx)(_.tG, {
                                        action: 'VIEW_BLOCKED_PROFILE',
                                        text: I.intl.string(I.t.HO0AxM),
                                        autoFocus: !0,
                                        fullWidth: !1,
                                        onClick: () => {
                                            null == r || r(),
                                                (0, f.pQ)({
                                                    action: 'VIEW_BLOCKED_PROFILE',
                                                    analyticsLocations: T,
                                                    ...j
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
