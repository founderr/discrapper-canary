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
    c = t(138201),
    a = t(785717),
    d = t(221292),
    u = t(687158),
    _ = t(471879),
    I = t(502762),
    E = t(475413),
    f = t(228168),
    m = t(981631),
    x = t(689938),
    Z = t(226691),
    p = t(161068);
function h(e) {
    let { user: n, guildId: t, channelId: h, messageId: v, roleId: S, transitionState: T, onViewBlockedProfileClick: g, showGuildProfile: A = !0, sourceAnalyticsLocations: N = [] } = e,
        j = t === m.ME ? void 0 : t,
        { analyticsLocations: b } = (0, r.ZP)([...N, l.Z.BLOCKED_PROFILE_MODAL]),
        L = (0, a.ZB)({
            layout: 'BLOCKED_PROFILE_MODAL',
            userId: n.id,
            guildId: j,
            channelId: h,
            messageId: v,
            roleId: S,
            showGuildProfile: A
        }),
        M = [
            {
                icon: o.BellSlashIcon,
                description: x.Z.Messages.USER_PROFILE_BLOCKED_SPEED_BUMP_ACTION_SHEET_NOTIFIED
            },
            {
                icon: o.DenyIcon,
                description: x.Z.Messages.USER_PROFILE_BLOCKED_SPEED_BUMP_ACTION_SHEET_STILL_BLOCKED
            }
        ],
        O = (0, u.ZP)(n.id, A ? j : void 0),
        R = i.createRef();
    return (0, s.jsx)(r.Gt, {
        value: b,
        children: (0, s.jsx)(a.Mt, {
            value: L,
            children: (0, s.jsx)(o.ModalRoot, {
                transitionState: T,
                className: Z.root,
                hideShadow: !0,
                'aria-label': x.Z.Messages.USER_PROFILE_MODAL,
                children: (0, s.jsx)(I.Z, {
                    user: n,
                    displayProfile: O,
                    profileType: f.y0.FULL_SIZE,
                    ref: R,
                    children: (0, s.jsxs)('div', {
                        className: Z.container,
                        children: [
                            (0, s.jsx)('img', {
                                alt: '',
                                src: p,
                                className: Z.previewForCollected,
                                'aria-hidden': !0
                            }),
                            (0, s.jsxs)('div', {
                                className: Z.body,
                                children: [
                                    (0, s.jsx)(_.Z, {
                                        user: n,
                                        guildId: j
                                    }),
                                    (0, s.jsx)(o.Heading, {
                                        variant: 'heading-xl/bold',
                                        className: Z.header,
                                        children: x.Z.Messages.USER_PROFILE_BLOCKED_SPEED_BUMP_ACTION_SHEET_TITLE
                                    }),
                                    (0, s.jsx)(o.Text, {
                                        variant: 'text-md/medium',
                                        children: x.Z.Messages.USER_PROFILE_BLOCKED_PANEL_BODY_USERNAME.format({ username: n.username })
                                    }),
                                    (0, s.jsx)(o.Text, {
                                        variant: 'text-md/medium',
                                        children: x.Z.Messages.USER_PROFILE_BLOCKED_MODAL_BODY_CONFIRMATION
                                    }),
                                    (0, s.jsx)('div', {
                                        className: Z.safetyTable,
                                        children: M.map((e, n) => {
                                            let { icon: t, description: i } = e;
                                            return (0, s.jsx)(
                                                c.Z,
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
                                        className: Z.centeredButton,
                                        action: 'VIEW_BLOCKED_PROFILE',
                                        text: x.Z.Messages.VIEW_PROFILE,
                                        autoFocus: !0,
                                        fullWidth: !1,
                                        onClick: () => {
                                            null == g || g(),
                                                (0, d.pQ)({
                                                    action: 'VIEW_BLOCKED_PROFILE',
                                                    analyticsLocations: b,
                                                    ...L
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
