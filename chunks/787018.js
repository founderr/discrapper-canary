t.d(n, {
    Z: function () {
        return Z;
    }
}),
    t(47120);
var i = t(200651),
    l = t(192379),
    o = t(481060),
    s = t(100527),
    r = t(906732),
    c = t(138201),
    a = t(785717),
    d = t(221292),
    u = t(687158),
    f = t(471879),
    m = t(502762),
    p = t(475413),
    x = t(228168),
    I = t(981631),
    h = t(388032),
    v = t(226691),
    g = t(161068);
function Z(e) {
    let { user: n, guildId: t, channelId: Z, messageId: _, roleId: b, transitionState: j, onViewBlockedProfileClick: E, showGuildProfile: T = !0, sourceAnalyticsLocations: N = [] } = e,
        S = t === I.ME ? void 0 : t,
        { analyticsLocations: y } = (0, r.ZP)([...N, s.Z.BLOCKED_PROFILE_MODAL]),
        P = (0, a.ZB)({
            layout: 'BLOCKED_PROFILE_MODAL',
            userId: n.id,
            guildId: S,
            channelId: Z,
            messageId: _,
            roleId: b,
            showGuildProfile: T
        }),
        A = [
            {
                icon: o.BellSlashIcon,
                description: h.intl.string(h.t.Kn2UDA)
            },
            {
                icon: o.DenyIcon,
                description: h.intl.string(h.t.QxrDY2)
            }
        ],
        C = (0, u.ZP)(n.id, T ? S : void 0),
        L = l.createRef();
    return (0, i.jsx)(r.Gt, {
        value: y,
        children: (0, i.jsx)(a.Mt, {
            value: P,
            children: (0, i.jsx)(o.ModalRoot, {
                transitionState: j,
                className: v.root,
                hideShadow: !0,
                'aria-label': h.intl.string(h.t['3N/J2t']),
                children: (0, i.jsx)(m.Z, {
                    user: n,
                    displayProfile: C,
                    profileType: x.y0.FULL_SIZE,
                    ref: L,
                    children: (0, i.jsxs)('div', {
                        className: v.container,
                        children: [
                            (0, i.jsx)('img', {
                                alt: '',
                                src: g,
                                className: v.previewForCollected,
                                'aria-hidden': !0
                            }),
                            (0, i.jsxs)('div', {
                                className: v.body,
                                children: [
                                    (0, i.jsx)(f.Z, {
                                        user: n,
                                        guildId: S
                                    }),
                                    (0, i.jsx)(o.Heading, {
                                        variant: 'heading-xl/bold',
                                        className: v.header,
                                        children: h.intl.string(h.t.VNJ7UF)
                                    }),
                                    (0, i.jsx)(o.Text, {
                                        variant: 'text-md/medium',
                                        children: h.intl.format(h.t.LXbngo, { username: n.username })
                                    }),
                                    (0, i.jsx)(o.Text, {
                                        variant: 'text-md/medium',
                                        children: h.intl.string(h.t['uBvD//'])
                                    }),
                                    (0, i.jsx)('div', {
                                        className: v.safetyTable,
                                        children: A.map((e, n) => {
                                            let { icon: t, description: l } = e;
                                            return (0, i.jsx)(
                                                c.Z,
                                                {
                                                    icon: t,
                                                    title: l,
                                                    titleVariant: 'text-md/normal'
                                                },
                                                n
                                            );
                                        })
                                    }),
                                    (0, i.jsx)(p.tG, {
                                        className: v.centeredButton,
                                        action: 'VIEW_BLOCKED_PROFILE',
                                        text: h.intl.string(h.t.iXAna2),
                                        autoFocus: !0,
                                        fullWidth: !1,
                                        onClick: () => {
                                            null == E || E(),
                                                (0, d.pQ)({
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
