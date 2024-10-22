t.d(n, {
    Z: function () {
        return P;
    }
}),
    t(47120);
var i = t(200651),
    s = t(192379),
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
    p = t(900927),
    x = t(678738),
    Z = t(502762),
    h = t(530),
    S = t(679332),
    v = t(544989),
    T = t(228168),
    g = t(981631),
    N = t(689938),
    A = t(272216),
    b = t(11633),
    j = t(722849);
function P(e) {
    let { user: n, guildId: t, channelId: P, messageId: M, roleId: L, sessionId: R, transitionState: O, onClose: C, sourceAnalyticsLocations: y = [] } = e,
        U = t === g.ME ? void 0 : t,
        B = (0, _.ZP)(n.id, U),
        { analyticsLocations: D } = (0, c.ZP)([...y, r.Z.SIMPLIFIED_PROFILE_MODAL]),
        F = (0, u.ZB)({
            layout: 'SIMPLIFIED_MODAL',
            userId: n.id,
            sourceSessionId: R,
            guildId: U,
            channelId: P,
            messageId: M,
            roleId: L
        }),
        G = s.createRef(),
        w = (0, l.Z)(G);
    return (0, i.jsx)(c.Gt, {
        value: D,
        children: (0, i.jsx)(u.Mt, {
            value: F,
            children: (0, i.jsxs)(o.ModalRoot, {
                transitionState: O,
                className: A.root,
                hideShadow: !0,
                'aria-label': N.Z.Messages.USER_PROFILE_MODAL,
                children: [
                    (0, i.jsxs)(Z.Z, {
                        user: n,
                        displayProfile: B,
                        profileType: T.y0.FULL_SIZE,
                        ref: G,
                        children: [
                            (0, i.jsx)(v.Z, {
                                profileType: T.y0.FULL_SIZE,
                                children: (0, i.jsx)(S.Z, { user: n })
                            }),
                            (0, i.jsxs)('header', {
                                children: [
                                    (0, i.jsx)(f.Z, {
                                        user: n,
                                        displayProfile: B,
                                        profileType: T.y0.FULL_SIZE
                                    }),
                                    (0, i.jsx)('div', {
                                        className: A.headerInner,
                                        children: (0, i.jsx)(I.Z, {
                                            user: n,
                                            displayProfile: B,
                                            guildId: U,
                                            channelId: P,
                                            profileType: T.y0.FULL_SIZE
                                        })
                                    })
                                ]
                            }),
                            (0, i.jsxs)('div', {
                                className: A.body,
                                children: [
                                    (0, i.jsx)(h.Z, {
                                        user: n,
                                        profileType: T.y0.FULL_SIZE,
                                        nickname: d.ZP.getName(U, P, n),
                                        pronouns: null == B ? void 0 : B.pronouns,
                                        nicknameVariant: 'heading-xl/bold',
                                        tags: (0, i.jsx)(E.Z, {
                                            displayProfile: B,
                                            profileType: T.y0.FULL_SIZE,
                                            onClose: C
                                        })
                                    }),
                                    (0, i.jsx)(Z.Z.Overlay, {
                                        className: A.overlay,
                                        children: (0, i.jsxs)('div', {
                                            className: j.container,
                                            children: [
                                                (0, i.jsx)(o.TabBar, {
                                                    className: j.tabBar,
                                                    type: 'top',
                                                    selectedItem: T.oh.BOT_INFO,
                                                    onItemSelect: g.dG4,
                                                    children: (0, i.jsx)(
                                                        o.TabBar.Item,
                                                        {
                                                            className: j.tabBarItem,
                                                            id: T.oh.BOT_INFO,
                                                            'aria-label': N.Z.Messages.USER_PROFILE_ABOUT_ME,
                                                            children: (0, i.jsx)(o.Text, {
                                                                variant: 'text-sm/normal',
                                                                children: N.Z.Messages.USER_PROFILE_ABOUT_ME
                                                            })
                                                        },
                                                        T.oh.BOT_INFO
                                                    )
                                                }),
                                                (0, i.jsxs)(o.ScrollerThin, {
                                                    fade: !0,
                                                    className: b.scroller,
                                                    children: [
                                                        (0, i.jsx)(m.Z, {
                                                            userId: n.id,
                                                            userBio: null == B ? void 0 : B.bio,
                                                            setLineClamp: !1
                                                        }),
                                                        (0, i.jsx)(x.Z, {
                                                            heading: N.Z.Messages.BOT_PROFILE_CREATED_ON,
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
                    (null == B ? void 0 : B.profileEffectId) != null &&
                        (0, i.jsx)(a.Z, {
                            profileEffectId: null == B ? void 0 : B.profileEffectId,
                            isHovering: w
                        })
                ]
            })
        })
    });
}
