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
    c = t(906732),
    a = t(680295),
    d = t(5192),
    u = t(785717),
    _ = t(687158),
    I = t(899007),
    E = t(648052),
    f = t(867176),
    m = t(280885),
    x = t(900927),
    p = t(678738),
    Z = t(502762),
    h = t(530),
    v = t(679332),
    S = t(544989),
    T = t(228168),
    g = t(981631),
    A = t(689938),
    N = t(272216),
    j = t(11633),
    b = t(722849);
function L(e) {
    let { user: n, guildId: t, channelId: L, messageId: M, roleId: O, sessionId: R, transitionState: C, onClose: P, sourceAnalyticsLocations: y = [] } = e,
        U = t === g.ME ? void 0 : t,
        D = (0, _.ZP)(n.id, U),
        { analyticsLocations: B } = (0, c.ZP)([...y, r.Z.SIMPLIFIED_PROFILE_MODAL]),
        F = (0, u.ZB)({
            layout: 'SIMPLIFIED_MODAL',
            userId: n.id,
            sourceSessionId: R,
            guildId: U,
            channelId: L,
            messageId: M,
            roleId: O
        }),
        G = s.createRef(),
        w = (0, l.Z)(G);
    return (0, i.jsx)(c.Gt, {
        value: B,
        children: (0, i.jsx)(u.Mt, {
            value: F,
            children: (0, i.jsxs)(o.ModalRoot, {
                transitionState: C,
                className: N.root,
                hideShadow: !0,
                'aria-label': A.Z.Messages.USER_PROFILE_MODAL,
                children: [
                    (0, i.jsxs)(Z.Z, {
                        user: n,
                        displayProfile: D,
                        profileType: T.y0.FULL_SIZE,
                        ref: G,
                        children: [
                            (0, i.jsx)(S.Z, {
                                profileType: T.y0.FULL_SIZE,
                                children: (0, i.jsx)(v.Z, { user: n })
                            }),
                            (0, i.jsxs)('header', {
                                children: [
                                    (0, i.jsx)(f.Z, {
                                        user: n,
                                        displayProfile: D,
                                        profileType: T.y0.FULL_SIZE
                                    }),
                                    (0, i.jsx)('div', {
                                        className: N.headerInner,
                                        children: (0, i.jsx)(I.Z, {
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
                                    (0, i.jsx)(h.Z, {
                                        user: n,
                                        profileType: T.y0.FULL_SIZE,
                                        nickname: d.ZP.getName(U, L, n),
                                        pronouns: null == D ? void 0 : D.pronouns,
                                        nicknameVariant: 'heading-xl/bold',
                                        tags: (0, i.jsx)(E.Z, {
                                            displayProfile: D,
                                            profileType: T.y0.FULL_SIZE,
                                            onClose: P
                                        })
                                    }),
                                    (0, i.jsx)(Z.Z.Overlay, {
                                        className: N.overlay,
                                        children: (0, i.jsxs)('div', {
                                            className: b.container,
                                            children: [
                                                (0, i.jsx)(o.TabBar, {
                                                    className: b.tabBar,
                                                    type: 'top',
                                                    selectedItem: T.oh.BOT_INFO,
                                                    onItemSelect: g.dG4,
                                                    children: (0, i.jsx)(
                                                        o.TabBar.Item,
                                                        {
                                                            className: b.tabBarItem,
                                                            id: T.oh.BOT_INFO,
                                                            'aria-label': A.Z.Messages.USER_PROFILE_ABOUT_ME,
                                                            children: (0, i.jsx)(o.Text, {
                                                                variant: 'text-sm/normal',
                                                                children: A.Z.Messages.USER_PROFILE_ABOUT_ME
                                                            })
                                                        },
                                                        T.oh.BOT_INFO
                                                    )
                                                }),
                                                (0, i.jsxs)(o.ScrollerThin, {
                                                    fade: !0,
                                                    className: j.scroller,
                                                    children: [
                                                        (0, i.jsx)(m.Z, {
                                                            userId: n.id,
                                                            userBio: null == D ? void 0 : D.bio,
                                                            setLineClamp: !1
                                                        }),
                                                        (0, i.jsx)(p.Z, {
                                                            heading: A.Z.Messages.BOT_PROFILE_CREATED_ON,
                                                            children: (0, i.jsx)(x.Z, {
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
                        (0, i.jsx)(a.Z, {
                            profileEffectId: null == D ? void 0 : D.profileEffectId,
                            isHovering: w
                        })
                ]
            })
        })
    });
}
