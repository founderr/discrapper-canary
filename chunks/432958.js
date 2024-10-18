n.d(t, {
    Z: function () {
        return I;
    }
});
var i = n(735250),
    s = n(470079),
    a = n(597312),
    l = n(481060),
    r = n(410030),
    o = n(100527),
    c = n(906732),
    u = n(785717),
    d = n(221292),
    h = n(687158),
    p = n(471879),
    m = n(502762),
    _ = n(475413),
    f = n(228168),
    E = n(689938),
    g = n(351094),
    C = n(321975);
function I(e) {
    let { user: t, channel: n, onViewBlockedProfileClick: I } = e,
        T = (0, h.ZP)(t.id),
        x = (0, r.ZP)(),
        { analyticsLocations: v } = (0, c.ZP)(o.Z.BLOCKED_PROFILE_PANEL),
        S = (0, u.ZB)({
            layout: 'BLOCKED_PROFILE_PANEL',
            userId: t.id,
            channelId: n.id
        }),
        N = s.useRef(null);
    return (0, i.jsx)(c.Gt, {
        value: v,
        children: (0, i.jsx)(u.Mt, {
            value: S,
            children: (0, i.jsx)(m.Z, {
                ref: N,
                user: t,
                displayProfile: T,
                profileType: f.y0.PANEL,
                themeOverride: x,
                className: g.container,
                children: (0, i.jsx)(a.u2, {
                    children: (0, i.jsxs)('div', {
                        className: g.container,
                        children: [
                            (0, i.jsx)('img', {
                                alt: '',
                                src: C,
                                className: g.previewForCollected,
                                'aria-hidden': !0
                            }),
                            (0, i.jsxs)('div', {
                                className: g.body,
                                children: [
                                    (0, i.jsx)(p.Z, {
                                        user: t,
                                        guildId: null
                                    }),
                                    (0, i.jsx)(l.Heading, {
                                        variant: 'heading-lg/bold',
                                        className: g.header,
                                        children: E.Z.Messages.USER_PROFILE_BLOCKED_SPEED_BUMP_ACTION_SHEET_TITLE
                                    }),
                                    (0, i.jsx)(l.Text, {
                                        variant: 'text-sm/medium',
                                        children: E.Z.Messages.USER_PROFILE_BLOCKED_PANEL_BODY_USERNAME.format({ username: t.username })
                                    }),
                                    (0, i.jsx)(l.Text, {
                                        variant: 'text-sm/medium',
                                        children: E.Z.Messages.USER_PROFILE_BLOCKED_PANEL_BODY_CONFIRMATION
                                    }),
                                    (0, i.jsx)(_.tG, {
                                        className: g.centeredButton,
                                        action: 'VIEW_BLOCKED_PROFILE',
                                        text: E.Z.Messages.VIEW_PROFILE,
                                        autoFocus: !0,
                                        fullWidth: !1,
                                        onClick: () => {
                                            null == I || I(),
                                                (0, d.pQ)({
                                                    action: 'VIEW_BLOCKED_PROFILE',
                                                    analyticsLocations: v,
                                                    ...S
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
