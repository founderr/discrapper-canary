n.d(t, {
    Z: function () {
        return _;
    }
});
var i = n(200651),
    l = n(192379),
    a = n(597312),
    r = n(481060),
    s = n(410030),
    o = n(100527),
    c = n(906732),
    d = n(785717),
    u = n(221292),
    h = n(687158),
    p = n(471879),
    m = n(502762),
    f = n(475413),
    g = n(228168),
    C = n(388032),
    x = n(351094),
    v = n(321975);
function _(e) {
    let { user: t, channel: n, onViewBlockedProfileClick: _ } = e,
        I = (0, h.ZP)(t.id),
        E = (0, s.ZP)(),
        { analyticsLocations: b } = (0, c.ZP)(o.Z.BLOCKED_PROFILE_PANEL),
        N = (0, d.ZB)({
            layout: 'BLOCKED_PROFILE_PANEL',
            userId: t.id,
            channelId: n.id
        }),
        Z = l.useRef(null);
    return (0, i.jsx)(c.Gt, {
        value: b,
        children: (0, i.jsx)(d.Mt, {
            value: N,
            children: (0, i.jsx)(m.Z, {
                ref: Z,
                user: t,
                displayProfile: I,
                profileType: g.y0.PANEL,
                themeOverride: E,
                className: x.container,
                children: (0, i.jsx)(a.u2, {
                    children: (0, i.jsxs)('div', {
                        className: x.container,
                        children: [
                            (0, i.jsx)('img', {
                                alt: '',
                                src: v,
                                className: x.previewForCollected,
                                'aria-hidden': !0
                            }),
                            (0, i.jsxs)('div', {
                                className: x.body,
                                children: [
                                    (0, i.jsx)(p.Z, {
                                        user: t,
                                        guildId: null
                                    }),
                                    (0, i.jsx)(r.Heading, {
                                        variant: 'heading-lg/bold',
                                        className: x.header,
                                        children: C.intl.string(C.t.VNJ7UF)
                                    }),
                                    (0, i.jsx)(r.Text, {
                                        variant: 'text-sm/medium',
                                        children: C.intl.format(C.t.LXbngo, { username: t.username })
                                    }),
                                    (0, i.jsx)(r.Text, {
                                        variant: 'text-sm/medium',
                                        children: C.intl.string(C.t['20WzZ2'])
                                    }),
                                    (0, i.jsx)(f.tG, {
                                        className: x.centeredButton,
                                        action: 'VIEW_BLOCKED_PROFILE',
                                        text: C.intl.string(C.t.iXAna2),
                                        autoFocus: !0,
                                        fullWidth: !1,
                                        onClick: () => {
                                            null == _ || _(),
                                                (0, u.pQ)({
                                                    action: 'VIEW_BLOCKED_PROFILE',
                                                    analyticsLocations: b,
                                                    ...N
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
