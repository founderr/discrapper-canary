t.d(n, {
    Z: function () {
        return Z;
    }
}),
    t(47120);
var i = t(735250),
    s = t(470079),
    o = t(481060),
    l = t(100527),
    r = t(906732),
    a = t(138201),
    c = t(785717),
    d = t(221292),
    u = t(318661),
    I = t(299261),
    _ = t(502762),
    f = t(475413),
    E = t(228168),
    m = t(981631),
    p = t(689938),
    x = t(493248),
    v = t(161068);
function Z(e) {
    let { user: n, guildId: t, channelId: Z, messageId: h, roleId: S, transitionState: T, onViewBlockedProfileClick: A, showGuildProfile: g = !0, sourceAnalyticsLocations: N = [] } = e,
        b = t === m.ME ? void 0 : t,
        { analyticsLocations: j } = (0, r.ZP)([...N, l.Z.BLOCKED_PROFILE_MODAL]),
        L = (0, c.ZB)({
            layout: 'BLOCKED_PROFILE_MODAL',
            userId: n.id,
            guildId: b,
            channelId: Z,
            messageId: h,
            roleId: S,
            showGuildProfile: g
        }),
        R = [
            {
                icon: o.BellSlashIcon,
                description: p.Z.Messages.USER_PROFILE_BLOCKED_SPEED_BUMP_ACTION_SHEET_NOTIFIED
            },
            {
                icon: o.DenyIcon,
                description: p.Z.Messages.USER_PROFILE_BLOCKED_SPEED_BUMP_ACTION_SHEET_STILL_BLOCKED
            }
        ],
        C = (0, u.ZP)(n.id, g ? b : void 0),
        M = s.createRef();
    return (0, i.jsx)(r.Gt, {
        value: j,
        children: (0, i.jsx)(c.Mt, {
            value: L,
            children: (0, i.jsx)(o.ModalRoot, {
                transitionState: T,
                className: x.root,
                hideShadow: !0,
                'aria-label': p.Z.Messages.USER_PROFILE_MODAL,
                children: (0, i.jsx)(_.Z, {
                    user: n,
                    displayProfile: C,
                    profileType: E.y0.FULL_SIZE,
                    ref: M,
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
                                    (0, i.jsx)(I.Z, {
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
                                        children: R.map((e, n) => {
                                            let { icon: t, description: s } = e;
                                            return (0, i.jsx)(
                                                a.Z,
                                                {
                                                    icon: t,
                                                    title: s,
                                                    titleVariant: 'text-md/normal'
                                                },
                                                n
                                            );
                                        })
                                    }),
                                    (0, i.jsx)(f.tG, {
                                        className: x.centeredButton,
                                        action: 'VIEW_BLOCKED_PROFILE',
                                        text: p.Z.Messages.VIEW_PROFILE,
                                        autoFocus: !0,
                                        fullWidth: !1,
                                        onClick: () => {
                                            null == A || A(),
                                                (0, d.pQ)({
                                                    action: 'VIEW_BLOCKED_PROFILE',
                                                    analyticsLocations: j,
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
