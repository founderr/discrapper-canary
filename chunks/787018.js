t.d(n, {
    Z: function () {
        return h;
    }
}),
    t(47120);
var i = t(200651),
    s = t(192379),
    o = t(481060),
    l = t(100527),
    r = t(906732),
    c = t(138201),
    a = t(785717),
    d = t(221292),
    u = t(687158),
    _ = t(471879),
    I = t(502762),
    E = t(475413),
    f = t(228168),
    m = t(981631),
    p = t(689938),
    x = t(226691),
    Z = t(161068);
function h(e) {
    let { user: n, guildId: t, channelId: h, messageId: S, roleId: v, transitionState: T, onViewBlockedProfileClick: g, showGuildProfile: N = !0, sourceAnalyticsLocations: A = [] } = e,
        b = t === m.ME ? void 0 : t,
        { analyticsLocations: j } = (0, r.ZP)([...A, l.Z.BLOCKED_PROFILE_MODAL]),
        P = (0, a.ZB)({
            layout: 'BLOCKED_PROFILE_MODAL',
            userId: n.id,
            guildId: b,
            channelId: h,
            messageId: S,
            roleId: v,
            showGuildProfile: N
        }),
        M = [
            {
                icon: o.BellSlashIcon,
                description: p.Z.Messages.USER_PROFILE_BLOCKED_SPEED_BUMP_ACTION_SHEET_NOTIFIED
            },
            {
                icon: o.DenyIcon,
                description: p.Z.Messages.USER_PROFILE_BLOCKED_SPEED_BUMP_ACTION_SHEET_STILL_BLOCKED
            }
        ],
        L = (0, u.ZP)(n.id, N ? b : void 0),
        R = s.createRef();
    return (0, i.jsx)(r.Gt, {
        value: j,
        children: (0, i.jsx)(a.Mt, {
            value: P,
            children: (0, i.jsx)(o.ModalRoot, {
                transitionState: T,
                className: x.root,
                hideShadow: !0,
                'aria-label': p.Z.Messages.USER_PROFILE_MODAL,
                children: (0, i.jsx)(I.Z, {
                    user: n,
                    displayProfile: L,
                    profileType: f.y0.FULL_SIZE,
                    ref: R,
                    children: (0, i.jsxs)('div', {
                        className: x.container,
                        children: [
                            (0, i.jsx)('img', {
                                alt: '',
                                src: Z,
                                className: x.previewForCollected,
                                'aria-hidden': !0
                            }),
                            (0, i.jsxs)('div', {
                                className: x.body,
                                children: [
                                    (0, i.jsx)(_.Z, {
                                        user: n,
                                        guildId: b
                                    }),
                                    (0, i.jsx)(o.Heading, {
                                        variant: 'heading-xl/bold',
                                        className: x.header,
                                        children: p.Z.Messages.USER_PROFILE_BLOCKED_SPEED_BUMP_ACTION_SHEET_TITLE
                                    }),
                                    (0, i.jsx)(o.Text, {
                                        variant: 'text-md/medium',
                                        children: p.Z.Messages.USER_PROFILE_BLOCKED_PANEL_BODY_USERNAME.format({ username: n.username })
                                    }),
                                    (0, i.jsx)(o.Text, {
                                        variant: 'text-md/medium',
                                        children: p.Z.Messages.USER_PROFILE_BLOCKED_MODAL_BODY_CONFIRMATION
                                    }),
                                    (0, i.jsx)('div', {
                                        className: x.safetyTable,
                                        children: M.map((e, n) => {
                                            let { icon: t, description: s } = e;
                                            return (0, i.jsx)(
                                                c.Z,
                                                {
                                                    icon: t,
                                                    title: s,
                                                    titleVariant: 'text-md/normal'
                                                },
                                                n
                                            );
                                        })
                                    }),
                                    (0, i.jsx)(E.tG, {
                                        className: x.centeredButton,
                                        action: 'VIEW_BLOCKED_PROFILE',
                                        text: p.Z.Messages.VIEW_PROFILE,
                                        autoFocus: !0,
                                        fullWidth: !1,
                                        onClick: () => {
                                            null == g || g(),
                                                (0, d.pQ)({
                                                    action: 'VIEW_BLOCKED_PROFILE',
                                                    analyticsLocations: j,
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
