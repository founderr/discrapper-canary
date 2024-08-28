t.d(n, {
    Z: function () {
        return j;
    }
}),
    t(47120);
var s = t(735250),
    i = t(470079),
    o = t(481060),
    l = t(727637),
    r = t(100527),
    a = t(906732),
    c = t(680295),
    d = t(5192),
    u = t(785717),
    I = t(318661),
    _ = t(78675),
    E = t(741308),
    f = t(588822),
    m = t(899007),
    p = t(900927),
    x = t(678738),
    Z = t(502762),
    h = t(530),
    v = t(679332),
    S = t(544989),
    T = t(228168),
    A = t(981631),
    g = t(689938),
    N = t(392214),
    L = t(408277),
    R = t(455749);
function j(e) {
    let { user: n, guildId: t, channelId: j, messageId: M, roleId: b, sessionId: O, transitionState: P, onClose: C, sourceAnalyticsLocations: y = [] } = e,
        U = t === A.ME ? void 0 : t,
        D = (0, I.ZP)(n.id, U),
        { analyticsLocations: F } = (0, a.ZP)([...y, r.Z.SIMPLIFIED_PROFILE_MODAL]),
        B = (0, u.ZB)({
            layout: 'SIMPLIFIED_MODAL',
            userId: n.id,
            sourceSessionId: O,
            guildId: U,
            channelId: j,
            messageId: M,
            roleId: b
        }),
        w = i.createRef(),
        G = (0, l.Z)(w);
    return (0, s.jsx)(a.Gt, {
        value: F,
        children: (0, s.jsx)(u.Mt, {
            value: B,
            children: (0, s.jsxs)(o.ModalRoot, {
                transitionState: P,
                className: N.root,
                hideShadow: !0,
                'aria-label': g.Z.Messages.USER_PROFILE_MODAL,
                children: [
                    (0, s.jsxs)(Z.Z, {
                        user: n,
                        displayProfile: D,
                        profileType: T.y0.FULL_SIZE,
                        ref: w,
                        children: [
                            (0, s.jsx)(S.Z, {
                                profileType: T.y0.FULL_SIZE,
                                children: (0, s.jsx)(v.Z, { user: n })
                            }),
                            (0, s.jsxs)('header', {
                                children: [
                                    (0, s.jsx)(_.Z, {
                                        user: n,
                                        displayProfile: D,
                                        profileType: T.y0.FULL_SIZE
                                    }),
                                    (0, s.jsx)('div', {
                                        className: N.headerInner,
                                        children: (0, s.jsx)(m.Z, {
                                            user: n,
                                            displayProfile: D,
                                            guildId: U,
                                            channelId: j,
                                            profileType: T.y0.FULL_SIZE
                                        })
                                    })
                                ]
                            }),
                            (0, s.jsxs)('div', {
                                className: N.body,
                                children: [
                                    (0, s.jsx)(h.Z, {
                                        user: n,
                                        profileType: T.y0.FULL_SIZE,
                                        nickname: d.ZP.getName(U, j, n),
                                        pronouns: null == D ? void 0 : D.pronouns,
                                        nicknameVariant: 'heading-xl/bold',
                                        tags: (0, s.jsx)(E.Z, {
                                            displayProfile: D,
                                            profileType: T.y0.FULL_SIZE,
                                            onClose: C
                                        })
                                    }),
                                    (0, s.jsx)(Z.Z.Overlay, {
                                        className: N.overlay,
                                        children: (0, s.jsxs)('div', {
                                            className: R.container,
                                            children: [
                                                (0, s.jsx)(o.TabBar, {
                                                    className: R.tabBar,
                                                    type: 'top',
                                                    selectedItem: T.oh.BOT_INFO,
                                                    onItemSelect: A.dG4,
                                                    children: (0, s.jsx)(
                                                        o.TabBar.Item,
                                                        {
                                                            className: R.tabBarItem,
                                                            id: T.oh.BOT_INFO,
                                                            'aria-label': g.Z.Messages.USER_PROFILE_ABOUT_ME,
                                                            children: (0, s.jsx)(o.Text, {
                                                                variant: 'text-sm/normal',
                                                                children: g.Z.Messages.USER_PROFILE_ABOUT_ME
                                                            })
                                                        },
                                                        T.oh.BOT_INFO
                                                    )
                                                }),
                                                (0, s.jsxs)(o.ScrollerThin, {
                                                    fade: !0,
                                                    className: L.scroller,
                                                    children: [
                                                        (0, s.jsx)(f.Z, {
                                                            userId: n.id,
                                                            userBio: null == D ? void 0 : D.bio,
                                                            setLineClamp: !1
                                                        }),
                                                        (0, s.jsx)(x.Z, {
                                                            heading: g.Z.Messages.BOT_PROFILE_CREATED_ON,
                                                            children: (0, s.jsx)(p.Z, {
                                                                userId: n.id,
                                                                guildId: U,
                                                                tooltipDelay: T.vB
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    (null == D ? void 0 : D.profileEffectId) != null &&
                        (0, s.jsx)(c.Z, {
                            profileEffectId: null == D ? void 0 : D.profileEffectId,
                            isHovering: G
                        })
                ]
            })
        })
    });
}
