s.d(n, {
    Z: function () {
        return h;
    }
}),
    s(47120);
var t = s(735250),
    i = s(470079),
    o = s(481060),
    l = s(100527),
    r = s(906732),
    a = s(138201),
    c = s(785717),
    d = s(221292),
    u = s(687158),
    I = s(471879),
    _ = s(502762),
    E = s(475413),
    f = s(228168),
    x = s(981631),
    m = s(689938),
    Z = s(493248),
    p = s(161068);
function h(e) {
    let { user: n, guildId: s, channelId: h, messageId: S, roleId: v, transitionState: T, onViewBlockedProfileClick: g, showGuildProfile: A = !0, sourceAnalyticsLocations: N = [] } = e,
        j = s === x.ME ? void 0 : s,
        { analyticsLocations: R } = (0, r.ZP)([...N, l.Z.BLOCKED_PROFILE_MODAL]),
        L = (0, c.ZB)({
            layout: 'BLOCKED_PROFILE_MODAL',
            userId: n.id,
            guildId: j,
            channelId: h,
            messageId: S,
            roleId: v,
            showGuildProfile: A
        }),
        b = [
            {
                icon: o.BellSlashIcon,
                description: m.Z.Messages.USER_PROFILE_BLOCKED_SPEED_BUMP_ACTION_SHEET_NOTIFIED
            },
            {
                icon: o.DenyIcon,
                description: m.Z.Messages.USER_PROFILE_BLOCKED_SPEED_BUMP_ACTION_SHEET_STILL_BLOCKED
            }
        ],
        M = (0, u.ZP)(n.id, A ? j : void 0),
        O = i.createRef();
    return (0, t.jsx)(r.Gt, {
        value: R,
        children: (0, t.jsx)(c.Mt, {
            value: L,
            children: (0, t.jsx)(o.ModalRoot, {
                transitionState: T,
                className: Z.root,
                hideShadow: !0,
                'aria-label': m.Z.Messages.USER_PROFILE_MODAL,
                children: (0, t.jsx)(_.Z, {
                    user: n,
                    displayProfile: M,
                    profileType: f.y0.FULL_SIZE,
                    ref: O,
                    children: (0, t.jsxs)('div', {
                        className: Z.container,
                        children: [
                            (0, t.jsx)('img', {
                                alt: '',
                                src: p,
                                className: Z.previewForCollected,
                                'aria-hidden': !0
                            }),
                            (0, t.jsxs)('div', {
                                className: Z.body,
                                children: [
                                    (0, t.jsx)(I.Z, {
                                        user: n,
                                        guildId: j
                                    }),
                                    (0, t.jsx)(o.Heading, {
                                        variant: 'heading-xl/bold',
                                        className: Z.header,
                                        children: m.Z.Messages.USER_PROFILE_BLOCKED_SPEED_BUMP_ACTION_SHEET_TITLE
                                    }),
                                    (0, t.jsx)(o.Text, {
                                        variant: 'text-md/medium',
                                        children: m.Z.Messages.USER_PROFILE_BLOCKED_PANEL_BODY_USERNAME.format({ username: n.username })
                                    }),
                                    (0, t.jsx)(o.Text, {
                                        variant: 'text-md/medium',
                                        children: m.Z.Messages.USER_PROFILE_BLOCKED_MODAL_BODY_CONFIRMATION
                                    }),
                                    (0, t.jsx)('div', {
                                        className: Z.safetyTable,
                                        children: b.map((e, n) => {
                                            let { icon: s, description: i } = e;
                                            return (0, t.jsx)(
                                                a.Z,
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
                                        text: m.Z.Messages.VIEW_PROFILE,
                                        autoFocus: !0,
                                        fullWidth: !1,
                                        onClick: () => {
                                            null == g || g(),
                                                (0, d.pQ)({
                                                    action: 'VIEW_BLOCKED_PROFILE',
                                                    analyticsLocations: R,
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
