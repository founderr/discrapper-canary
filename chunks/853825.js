t.d(n, {
    Z: function () {
        return L;
    }
}),
    t(47120);
var i = t(735250),
    s = t(470079),
    o = t(481060),
    l = t(727637),
    r = t(100527),
    a = t(906732),
    c = t(680295),
    d = t(5192),
    u = t(785717),
    I = t(318661),
    _ = t(78675),
    f = t(741308),
    E = t(588822),
    m = t(899007),
    p = t(900927),
    x = t(678738),
    v = t(502762),
    Z = t(530),
    h = t(679332),
    S = t(544989),
    T = t(228168),
    A = t(981631),
    g = t(689938),
    N = t(392214),
    b = t(408277),
    j = t(455749);
function L(e) {
    let { user: n, guildId: t, channelId: L, messageId: R, roleId: C, sessionId: M, transitionState: O, onClose: P, sourceAnalyticsLocations: y = [] } = e,
        U = t === A.ME ? void 0 : t,
        D = (0, I.ZP)(n.id, U),
        { analyticsLocations: F } = (0, a.ZP)([...y, r.Z.SIMPLIFIED_PROFILE_MODAL]),
        B = (0, u.ZB)({
            layout: 'SIMPLIFIED_MODAL',
            userId: n.id,
            sourceSessionId: M,
            guildId: U,
            channelId: L,
            messageId: R,
            roleId: C
        }),
        w = s.createRef(),
        G = (0, l.Z)(w);
    return (0, i.jsx)(a.Gt, {
        value: F,
        children: (0, i.jsx)(u.Mt, {
            value: B,
            children: (0, i.jsxs)(o.ModalRoot, {
                transitionState: O,
                className: N.root,
                hideShadow: !0,
                'aria-label': g.Z.Messages.USER_PROFILE_MODAL,
                children: [
                    (0, i.jsxs)(v.Z, {
                        user: n,
                        displayProfile: D,
                        profileType: T.y0.FULL_SIZE,
                        ref: w,
                        children: [
                            (0, i.jsx)(S.Z, {
                                profileType: T.y0.FULL_SIZE,
                                children: (0, i.jsx)(h.Z, { user: n })
                            }),
                            (0, i.jsxs)('header', {
                                children: [
                                    (0, i.jsx)(_.Z, {
                                        user: n,
                                        displayProfile: D,
                                        profileType: T.y0.FULL_SIZE,
                                        hasProfileEffect: (null == D ? void 0 : D.profileEffectId) != null
                                    }),
                                    (0, i.jsx)('div', {
                                        className: N.headerInner,
                                        children: (0, i.jsx)(m.Z, {
                                            user: n,
                                            displayProfile: D,
                                            guildId: U,
                                            channelId: L,
                                            profileType: T.y0.FULL_SIZE
                                        })
                                    })
                                ]
                            }),
                            (0, i.jsxs)('div', {
                                className: N.body,
                                children: [
                                    (0, i.jsx)(Z.Z, {
                                        user: n,
                                        profileType: T.y0.FULL_SIZE,
                                        nickname: d.ZP.getName(U, L, n),
                                        pronouns: null == D ? void 0 : D.pronouns,
                                        nicknameVariant: 'heading-xl/bold',
                                        tags: (0, i.jsx)(f.Z, {
                                            displayProfile: D,
                                            profileType: T.y0.FULL_SIZE,
                                            onClose: P
                                        })
                                    }),
                                    (0, i.jsx)(v.Z.Overlay, {
                                        className: N.overlay,
                                        children: (0, i.jsxs)('div', {
                                            className: j.container,
                                            children: [
                                                (0, i.jsx)(o.TabBar, {
                                                    className: j.tabBar,
                                                    type: 'top',
                                                    selectedItem: T.oh.BOT_INFO,
                                                    onItemSelect: A.dG4,
                                                    children: (0, i.jsx)(
                                                        o.TabBar.Item,
                                                        {
                                                            className: j.tabBarItem,
                                                            id: T.oh.BOT_INFO,
                                                            'aria-label': g.Z.Messages.USER_PROFILE_ABOUT_ME,
                                                            children: (0, i.jsx)(o.Text, {
                                                                variant: 'text-sm/normal',
                                                                children: g.Z.Messages.USER_PROFILE_ABOUT_ME
                                                            })
                                                        },
                                                        T.oh.BOT_INFO
                                                    )
                                                }),
                                                (0, i.jsxs)(o.ScrollerThin, {
                                                    fade: !0,
                                                    className: b.scroller,
                                                    children: [
                                                        (0, i.jsx)(E.Z, {
                                                            userId: n.id,
                                                            userBio: null == D ? void 0 : D.bio,
                                                            setLineClamp: !1
                                                        }),
                                                        (0, i.jsx)(x.Z, {
                                                            heading: g.Z.Messages.BOT_PROFILE_CREATED_ON,
                                                            children: (0, i.jsx)(p.Z, {
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
                        (0, i.jsx)(c.Z, {
                            profileEffectId: null == D ? void 0 : D.profileEffectId,
                            isHovering: G
                        })
                ]
            })
        })
    });
}
