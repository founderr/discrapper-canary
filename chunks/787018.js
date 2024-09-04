t.d(n, {
    Z: function () {
        return h;
    }
}),
    t(47120);
var s = t(735250),
    i = t(470079),
    o = t(481060),
    l = t(100527),
    r = t(906732),
    a = t(138201),
    c = t(785717),
    d = t(221292),
    u = t(318661),
    I = t(471879),
    _ = t(502762),
    E = t(475413),
    f = t(228168),
    m = t(981631),
    p = t(689938),
    x = t(493248),
    Z = t(161068);
function h(e) {
    let { user: n, guildId: t, channelId: h, messageId: v, roleId: S, transitionState: T, onViewBlockedProfileClick: A, showGuildProfile: g = !0, sourceAnalyticsLocations: N = [] } = e,
        L = t === m.ME ? void 0 : t,
        { analyticsLocations: R } = (0, r.ZP)([...N, l.Z.BLOCKED_PROFILE_MODAL]),
        j = (0, c.ZB)({
            layout: 'BLOCKED_PROFILE_MODAL',
            userId: n.id,
            guildId: L,
            channelId: h,
            messageId: v,
            roleId: S,
            showGuildProfile: g
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
        O = (0, u.ZP)(n.id, g ? L : void 0),
        P = i.createRef();
    return (0, s.jsx)(r.Gt, {
        value: R,
        children: (0, s.jsx)(c.Mt, {
            value: j,
            children: (0, s.jsx)(o.ModalRoot, {
                transitionState: T,
                className: x.root,
                hideShadow: !0,
                'aria-label': p.Z.Messages.USER_PROFILE_MODAL,
                children: (0, s.jsx)(_.Z, {
                    user: n,
                    displayProfile: O,
                    profileType: f.y0.FULL_SIZE,
                    ref: P,
                    children: (0, s.jsxs)('div', {
                        className: x.container,
                        children: [
                            (0, s.jsx)('img', {
                                alt: '',
                                src: Z,
                                className: x.previewForCollected,
                                'aria-hidden': !0
                            }),
                            (0, s.jsxs)('div', {
                                className: x.body,
                                children: [
                                    (0, s.jsx)(I.Z, {
                                        user: n,
                                        guildId: L
                                    }),
                                    (0, s.jsx)(o.Heading, {
                                        variant: 'heading-xl/bold',
                                        className: x.header,
                                        children: p.Z.Messages.USER_PROFILE_BLOCKED_SPEED_BUMP_ACTION_SHEET_TITLE
                                    }),
                                    (0, s.jsx)(o.Text, {
                                        variant: 'text-md/medium',
                                        children: p.Z.Messages.USER_PROFILE_BLOCKED_PANEL_BODY_USERNAME.format({ username: n.username })
                                    }),
                                    (0, s.jsx)(o.Text, {
                                        variant: 'text-md/medium',
                                        children: p.Z.Messages.USER_PROFILE_BLOCKED_MODAL_BODY_CONFIRMATION
                                    }),
                                    (0, s.jsx)('div', {
                                        className: x.safetyTable,
                                        children: M.map((e, n) => {
                                            let { icon: t, description: i } = e;
                                            return (0, s.jsx)(
                                                a.Z,
                                                {
                                                    icon: t,
                                                    title: i,
                                                    titleVariant: 'text-md/normal'
                                                },
                                                n
                                            );
                                        })
                                    }),
                                    (0, s.jsx)(E.tG, {
                                        className: x.centeredButton,
                                        action: 'VIEW_BLOCKED_PROFILE',
                                        text: p.Z.Messages.VIEW_PROFILE,
                                        autoFocus: !0,
                                        fullWidth: !1,
                                        onClick: () => {
                                            null == A || A(),
                                                (0, d.pQ)({
                                                    action: 'VIEW_BLOCKED_PROFILE',
                                                    analyticsLocations: R,
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
