s.d(n, {
    Z: function () {
        return M;
    }
}),
    s(47120);
var t = s(735250),
    i = s(470079),
    o = s(481060),
    l = s(727637),
    r = s(100527),
    a = s(906732),
    c = s(680295),
    d = s(5192),
    u = s(785717),
    _ = s(687158),
    I = s(899007),
    E = s(648052),
    f = s(867176),
    m = s(280885),
    x = s(900927),
    Z = s(678738),
    h = s(502762),
    p = s(530),
    v = s(679332),
    S = s(544989),
    T = s(228168),
    g = s(981631),
    A = s(689938),
    N = s(272216),
    L = s(11633),
    j = s(722849);
function M(e) {
    let { user: n, guildId: s, channelId: M, messageId: b, roleId: R, sessionId: O, transitionState: C, onClose: P, sourceAnalyticsLocations: y = [] } = e,
        U = s === g.ME ? void 0 : s,
        D = (0, _.ZP)(n.id, U),
        { analyticsLocations: F } = (0, a.ZP)([...y, r.Z.SIMPLIFIED_PROFILE_MODAL]),
        B = (0, u.ZB)({
            layout: 'SIMPLIFIED_MODAL',
            userId: n.id,
            sourceSessionId: O,
            guildId: U,
            channelId: M,
            messageId: b,
            roleId: R
        }),
        G = i.createRef(),
        w = (0, l.Z)(G);
    return (0, t.jsx)(a.Gt, {
        value: F,
        children: (0, t.jsx)(u.Mt, {
            value: B,
            children: (0, t.jsxs)(o.ModalRoot, {
                transitionState: C,
                className: N.root,
                hideShadow: !0,
                'aria-label': A.Z.Messages.USER_PROFILE_MODAL,
                children: [
                    (0, t.jsxs)(h.Z, {
                        user: n,
                        displayProfile: D,
                        profileType: T.y0.FULL_SIZE,
                        ref: G,
                        children: [
                            (0, t.jsx)(S.Z, {
                                profileType: T.y0.FULL_SIZE,
                                children: (0, t.jsx)(v.Z, { user: n })
                            }),
                            (0, t.jsxs)('header', {
                                children: [
                                    (0, t.jsx)(f.Z, {
                                        user: n,
                                        displayProfile: D,
                                        profileType: T.y0.FULL_SIZE
                                    }),
                                    (0, t.jsx)('div', {
                                        className: N.headerInner,
                                        children: (0, t.jsx)(I.Z, {
                                            user: n,
                                            displayProfile: D,
                                            guildId: U,
                                            channelId: M,
                                            profileType: T.y0.FULL_SIZE
                                        })
                                    })
                                ]
                            }),
                            (0, t.jsxs)('div', {
                                className: N.body,
                                children: [
                                    (0, t.jsx)(p.Z, {
                                        user: n,
                                        profileType: T.y0.FULL_SIZE,
                                        nickname: d.ZP.getName(U, M, n),
                                        pronouns: null == D ? void 0 : D.pronouns,
                                        nicknameVariant: 'heading-xl/bold',
                                        tags: (0, t.jsx)(E.Z, {
                                            displayProfile: D,
                                            profileType: T.y0.FULL_SIZE,
                                            onClose: P
                                        })
                                    }),
                                    (0, t.jsx)(h.Z.Overlay, {
                                        className: N.overlay,
                                        children: (0, t.jsxs)('div', {
                                            className: j.container,
                                            children: [
                                                (0, t.jsx)(o.TabBar, {
                                                    className: j.tabBar,
                                                    type: 'top',
                                                    selectedItem: T.oh.BOT_INFO,
                                                    onItemSelect: g.dG4,
                                                    children: (0, t.jsx)(
                                                        o.TabBar.Item,
                                                        {
                                                            className: j.tabBarItem,
                                                            id: T.oh.BOT_INFO,
                                                            'aria-label': A.Z.Messages.USER_PROFILE_ABOUT_ME,
                                                            children: (0, t.jsx)(o.Text, {
                                                                variant: 'text-sm/normal',
                                                                children: A.Z.Messages.USER_PROFILE_ABOUT_ME
                                                            })
                                                        },
                                                        T.oh.BOT_INFO
                                                    )
                                                }),
                                                (0, t.jsxs)(o.ScrollerThin, {
                                                    fade: !0,
                                                    className: L.scroller,
                                                    children: [
                                                        (0, t.jsx)(m.Z, {
                                                            userId: n.id,
                                                            userBio: null == D ? void 0 : D.bio,
                                                            setLineClamp: !1
                                                        }),
                                                        (0, t.jsx)(Z.Z, {
                                                            heading: A.Z.Messages.BOT_PROFILE_CREATED_ON,
                                                            children: (0, t.jsx)(x.Z, {
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
                        (0, t.jsx)(c.Z, {
                            profileEffectId: null == D ? void 0 : D.profileEffectId,
                            isHovering: w
                        })
                ]
            })
        })
    });
}
