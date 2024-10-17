t.d(n, {
    Z: function () {
        return N;
    }
}),
    t(47120);
var o = t(735250),
    i = t(470079),
    s = t(481060),
    l = t(727637),
    c = t(100527),
    r = t(906732),
    a = t(680295),
    d = t(5192),
    u = t(785717),
    _ = t(687158),
    I = t(899007),
    E = t(648052),
    f = t(867176),
    p = t(280885),
    Z = t(900927),
    h = t(678738),
    x = t(502762),
    m = t(530),
    S = t(679332),
    T = t(544989),
    v = t(228168),
    g = t(981631),
    A = t(689938),
    O = t(272216),
    L = t(11633),
    b = t(722849);
function N(e) {
    let { user: n, guildId: t, channelId: N, messageId: M, roleId: C, sessionId: R, transitionState: j, onClose: P, sourceAnalyticsLocations: y = [] } = e,
        U = t === g.ME ? void 0 : t,
        B = (0, _.ZP)(n.id, U),
        { analyticsLocations: D } = (0, r.ZP)([...y, c.Z.SIMPLIFIED_PROFILE_MODAL]),
        F = (0, u.ZB)({
            layout: 'SIMPLIFIED_MODAL',
            userId: n.id,
            sourceSessionId: R,
            guildId: U,
            channelId: N,
            messageId: M,
            roleId: C
        }),
        G = i.createRef(),
        w = (0, l.Z)(G);
    return (0, o.jsx)(r.Gt, {
        value: D,
        children: (0, o.jsx)(u.Mt, {
            value: F,
            children: (0, o.jsxs)(s.ModalRoot, {
                transitionState: j,
                className: O.root,
                hideShadow: !0,
                'aria-label': A.Z.Messages.USER_PROFILE_MODAL,
                children: [
                    (0, o.jsxs)(x.Z, {
                        user: n,
                        displayProfile: B,
                        profileType: v.y0.FULL_SIZE,
                        ref: G,
                        children: [
                            (0, o.jsx)(T.Z, {
                                profileType: v.y0.FULL_SIZE,
                                children: (0, o.jsx)(S.Z, { user: n })
                            }),
                            (0, o.jsxs)('header', {
                                children: [
                                    (0, o.jsx)(f.Z, {
                                        user: n,
                                        displayProfile: B,
                                        profileType: v.y0.FULL_SIZE
                                    }),
                                    (0, o.jsx)('div', {
                                        className: O.headerInner,
                                        children: (0, o.jsx)(I.Z, {
                                            user: n,
                                            displayProfile: B,
                                            guildId: U,
                                            channelId: N,
                                            profileType: v.y0.FULL_SIZE
                                        })
                                    })
                                ]
                            }),
                            (0, o.jsxs)('div', {
                                className: O.body,
                                children: [
                                    (0, o.jsx)(m.Z, {
                                        user: n,
                                        profileType: v.y0.FULL_SIZE,
                                        nickname: d.ZP.getName(U, N, n),
                                        pronouns: null == B ? void 0 : B.pronouns,
                                        nicknameVariant: 'heading-xl/bold',
                                        tags: (0, o.jsx)(E.Z, {
                                            displayProfile: B,
                                            profileType: v.y0.FULL_SIZE,
                                            onClose: P
                                        })
                                    }),
                                    (0, o.jsx)(x.Z.Overlay, {
                                        className: O.overlay,
                                        children: (0, o.jsxs)('div', {
                                            className: b.container,
                                            children: [
                                                (0, o.jsx)(s.TabBar, {
                                                    className: b.tabBar,
                                                    type: 'top',
                                                    selectedItem: v.oh.BOT_INFO,
                                                    onItemSelect: g.dG4,
                                                    children: (0, o.jsx)(
                                                        s.TabBar.Item,
                                                        {
                                                            className: b.tabBarItem,
                                                            id: v.oh.BOT_INFO,
                                                            'aria-label': A.Z.Messages.USER_PROFILE_ABOUT_ME,
                                                            children: (0, o.jsx)(s.Text, {
                                                                variant: 'text-sm/normal',
                                                                children: A.Z.Messages.USER_PROFILE_ABOUT_ME
                                                            })
                                                        },
                                                        v.oh.BOT_INFO
                                                    )
                                                }),
                                                (0, o.jsxs)(s.ScrollerThin, {
                                                    fade: !0,
                                                    className: L.scroller,
                                                    children: [
                                                        (0, o.jsx)(p.Z, {
                                                            userId: n.id,
                                                            userBio: null == B ? void 0 : B.bio,
                                                            setLineClamp: !1
                                                        }),
                                                        (0, o.jsx)(h.Z, {
                                                            heading: A.Z.Messages.BOT_PROFILE_CREATED_ON,
                                                            children: (0, o.jsx)(Z.Z, {
                                                                userId: n.id,
                                                                guildId: U,
                                                                tooltipDelay: v.vB
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
                    (null == B ? void 0 : B.profileEffectId) != null &&
                        (0, o.jsx)(a.Z, {
                            profileEffectId: null == B ? void 0 : B.profileEffectId,
                            isHovering: w
                        })
                ]
            })
        })
    });
}
