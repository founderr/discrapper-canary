s.d(n, {
    Z: function () {
        return h;
    }
}),
    s(47120);
var t = s(735250),
    i = s(470079),
    l = s(481060),
    o = s(100527),
    r = s(906732),
    c = s(138201),
    a = s(785717),
    d = s(221292),
    u = s(687158),
    I = s(471879),
    _ = s(502762),
    E = s(475413),
    f = s(228168),
    m = s(981631),
    x = s(689938),
    Z = s(226691),
    p = s(161068);
function h(e) {
    let { user: n, guildId: s, channelId: h, messageId: v, roleId: S, transitionState: T, onViewBlockedProfileClick: g, showGuildProfile: A = !0, sourceAnalyticsLocations: N = [] } = e,
        j = s === m.ME ? void 0 : s,
        { analyticsLocations: b } = (0, r.ZP)([...N, o.Z.BLOCKED_PROFILE_MODAL]),
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
                icon: l.BellSlashIcon,
                description: x.Z.Messages.USER_PROFILE_BLOCKED_SPEED_BUMP_ACTION_SHEET_NOTIFIED
            },
            {
                icon: l.DenyIcon,
                description: x.Z.Messages.USER_PROFILE_BLOCKED_SPEED_BUMP_ACTION_SHEET_STILL_BLOCKED
            }
        ],
        O = (0, u.ZP)(n.id, A ? j : void 0),
        R = i.createRef();
    return (0, t.jsx)(r.Gt, {
        value: b,
        children: (0, t.jsx)(a.Mt, {
            value: L,
            children: (0, t.jsx)(l.ModalRoot, {
                transitionState: T,
                className: Z.root,
                hideShadow: !0,
                'aria-label': x.Z.Messages.USER_PROFILE_MODAL,
                children: (0, t.jsx)(_.Z, {
                    user: n,
                    displayProfile: O,
                    profileType: f.y0.FULL_SIZE,
                    ref: R,
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
                                    (0, t.jsx)(l.Heading, {
                                        variant: 'heading-xl/bold',
                                        className: Z.header,
                                        children: x.Z.Messages.USER_PROFILE_BLOCKED_SPEED_BUMP_ACTION_SHEET_TITLE
                                    }),
                                    (0, t.jsx)(l.Text, {
                                        variant: 'text-md/medium',
                                        children: x.Z.Messages.USER_PROFILE_BLOCKED_PANEL_BODY_USERNAME.format({ username: n.username })
                                    }),
                                    (0, t.jsx)(l.Text, {
                                        variant: 'text-md/medium',
                                        children: x.Z.Messages.USER_PROFILE_BLOCKED_MODAL_BODY_CONFIRMATION
                                    }),
                                    (0, t.jsx)('div', {
                                        className: Z.safetyTable,
                                        children: M.map((e, n) => {
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
