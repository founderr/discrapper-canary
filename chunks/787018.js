t.d(n, {
    Z: function () {
        return m;
    }
}),
    t(47120);
var o = t(735250),
    i = t(470079),
    s = t(481060),
    l = t(100527),
    c = t(906732),
    r = t(138201),
    a = t(785717),
    d = t(221292),
    u = t(687158),
    _ = t(471879),
    I = t(502762),
    E = t(475413),
    f = t(228168),
    p = t(981631),
    Z = t(689938),
    h = t(226691),
    x = t(161068);
function m(e) {
    let { user: n, guildId: t, channelId: m, messageId: S, roleId: T, transitionState: v, onViewBlockedProfileClick: g, showGuildProfile: A = !0, sourceAnalyticsLocations: O = [] } = e,
        L = t === p.ME ? void 0 : t,
        { analyticsLocations: b } = (0, c.ZP)([...O, l.Z.BLOCKED_PROFILE_MODAL]),
        N = (0, a.ZB)({
            layout: 'BLOCKED_PROFILE_MODAL',
            userId: n.id,
            guildId: L,
            channelId: m,
            messageId: S,
            roleId: T,
            showGuildProfile: A
        }),
        M = [
            {
                icon: s.BellSlashIcon,
                description: Z.Z.Messages.USER_PROFILE_BLOCKED_SPEED_BUMP_ACTION_SHEET_NOTIFIED
            },
            {
                icon: s.DenyIcon,
                description: Z.Z.Messages.USER_PROFILE_BLOCKED_SPEED_BUMP_ACTION_SHEET_STILL_BLOCKED
            }
        ],
        C = (0, u.ZP)(n.id, A ? L : void 0),
        R = i.createRef();
    return (0, o.jsx)(c.Gt, {
        value: b,
        children: (0, o.jsx)(a.Mt, {
            value: N,
            children: (0, o.jsx)(s.ModalRoot, {
                transitionState: v,
                className: h.root,
                hideShadow: !0,
                'aria-label': Z.Z.Messages.USER_PROFILE_MODAL,
                children: (0, o.jsx)(I.Z, {
                    user: n,
                    displayProfile: C,
                    profileType: f.y0.FULL_SIZE,
                    ref: R,
                    children: (0, o.jsxs)('div', {
                        className: h.container,
                        children: [
                            (0, o.jsx)('img', {
                                alt: '',
                                src: x,
                                className: h.previewForCollected,
                                'aria-hidden': !0
                            }),
                            (0, o.jsxs)('div', {
                                className: h.body,
                                children: [
                                    (0, o.jsx)(_.Z, {
                                        user: n,
                                        guildId: L
                                    }),
                                    (0, o.jsx)(s.Heading, {
                                        variant: 'heading-xl/bold',
                                        className: h.header,
                                        children: Z.Z.Messages.USER_PROFILE_BLOCKED_SPEED_BUMP_ACTION_SHEET_TITLE
                                    }),
                                    (0, o.jsx)(s.Text, {
                                        variant: 'text-md/medium',
                                        children: Z.Z.Messages.USER_PROFILE_BLOCKED_PANEL_BODY_USERNAME.format({ username: n.username })
                                    }),
                                    (0, o.jsx)(s.Text, {
                                        variant: 'text-md/medium',
                                        children: Z.Z.Messages.USER_PROFILE_BLOCKED_MODAL_BODY_CONFIRMATION
                                    }),
                                    (0, o.jsx)('div', {
                                        className: h.safetyTable,
                                        children: M.map((e, n) => {
                                            let { icon: t, description: i } = e;
                                            return (0, o.jsx)(
                                                r.Z,
                                                {
                                                    icon: t,
                                                    title: i,
                                                    titleVariant: 'text-md/normal'
                                                },
                                                n
                                            );
                                        })
                                    }),
                                    (0, o.jsx)(E.tG, {
                                        className: h.centeredButton,
                                        action: 'VIEW_BLOCKED_PROFILE',
                                        text: Z.Z.Messages.VIEW_PROFILE,
                                        autoFocus: !0,
                                        fullWidth: !1,
                                        onClick: () => {
                                            null == g || g(),
                                                (0, d.pQ)({
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
