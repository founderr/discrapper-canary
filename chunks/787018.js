s.d(n, {
    Z: function () {
        return p;
    }
}),
    s(47120);
var t = s(735250),
    i = s(470079),
    o = s(481060),
    l = s(100527),
    r = s(906732),
    c = s(138201),
    a = s(785717),
    d = s(221292),
    u = s(687158),
    _ = s(471879),
    I = s(502762),
    E = s(475413),
    f = s(228168),
    m = s(981631),
    x = s(689938),
    Z = s(226691),
    h = s(161068);
function p(e) {
    let { user: n, guildId: s, channelId: p, messageId: v, roleId: S, transitionState: T, onViewBlockedProfileClick: g, showGuildProfile: A = !0, sourceAnalyticsLocations: N = [] } = e,
        L = s === m.ME ? void 0 : s,
        { analyticsLocations: j } = (0, r.ZP)([...N, l.Z.BLOCKED_PROFILE_MODAL]),
        M = (0, a.ZB)({
            layout: 'BLOCKED_PROFILE_MODAL',
            userId: n.id,
            guildId: L,
            channelId: p,
            messageId: v,
            roleId: S,
            showGuildProfile: A
        }),
        b = [
            {
                icon: o.BellSlashIcon,
                description: x.Z.Messages.USER_PROFILE_BLOCKED_SPEED_BUMP_ACTION_SHEET_NOTIFIED
            },
            {
                icon: o.DenyIcon,
                description: x.Z.Messages.USER_PROFILE_BLOCKED_SPEED_BUMP_ACTION_SHEET_STILL_BLOCKED
            }
        ],
        R = (0, u.ZP)(n.id, A ? L : void 0),
        O = i.createRef();
    return (0, t.jsx)(r.Gt, {
        value: j,
        children: (0, t.jsx)(a.Mt, {
            value: M,
            children: (0, t.jsx)(o.ModalRoot, {
                transitionState: T,
                className: Z.root,
                hideShadow: !0,
                'aria-label': x.Z.Messages.USER_PROFILE_MODAL,
                children: (0, t.jsx)(I.Z, {
                    user: n,
                    displayProfile: R,
                    profileType: f.y0.FULL_SIZE,
                    ref: O,
                    children: (0, t.jsxs)('div', {
                        className: Z.container,
                        children: [
                            (0, t.jsx)('img', {
                                alt: '',
                                src: h,
                                className: Z.previewForCollected,
                                'aria-hidden': !0
                            }),
                            (0, t.jsxs)('div', {
                                className: Z.body,
                                children: [
                                    (0, t.jsx)(_.Z, {
                                        user: n,
                                        guildId: L
                                    }),
                                    (0, t.jsx)(o.Heading, {
                                        variant: 'heading-xl/bold',
                                        className: Z.header,
                                        children: x.Z.Messages.USER_PROFILE_BLOCKED_SPEED_BUMP_ACTION_SHEET_TITLE
                                    }),
                                    (0, t.jsx)(o.Text, {
                                        variant: 'text-md/medium',
                                        children: x.Z.Messages.USER_PROFILE_BLOCKED_PANEL_BODY_USERNAME.format({ username: n.username })
                                    }),
                                    (0, t.jsx)(o.Text, {
                                        variant: 'text-md/medium',
                                        children: x.Z.Messages.USER_PROFILE_BLOCKED_MODAL_BODY_CONFIRMATION
                                    }),
                                    (0, t.jsx)('div', {
                                        className: Z.safetyTable,
                                        children: b.map((e, n) => {
                                            let { icon: s, description: i } = e;
                                            return (0, t.jsx)(
                                                c.Z,
                                                {
                                                    icon: s,
                                                    title: i,
                                                    titleVariant: 'text-md/normal'
                                                },
                                                n
                                            );
                                        })
                                    }),
                                    (0, t.jsx)(E.tG, {
                                        className: Z.centeredButton,
                                        action: 'VIEW_BLOCKED_PROFILE',
                                        text: x.Z.Messages.VIEW_PROFILE,
                                        autoFocus: !0,
                                        fullWidth: !1,
                                        onClick: () => {
                                            null == g || g(),
                                                (0, d.pQ)({
                                                    action: 'VIEW_BLOCKED_PROFILE',
                                                    analyticsLocations: j,
                                                    ...M
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
