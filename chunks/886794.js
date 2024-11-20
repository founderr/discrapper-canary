t.d(n, {
    Z: function () {
        return P;
    }
}),
    t(47120);
var i = t(200651),
    l = t(192379),
    o = t(481060),
    r = t(727637),
    s = t(100527),
    c = t(906732),
    a = t(680295),
    d = t(5192),
    u = t(785717),
    f = t(687158),
    m = t(899007),
    x = t(648052),
    I = t(867176),
    p = t(280885),
    h = t(900927),
    v = t(678738),
    g = t(502762),
    Z = t(530),
    _ = t(679332),
    j = t(544989),
    b = t(228168),
    E = t(981631),
    N = t(388032),
    S = t(272216),
    T = t(11633),
    y = t(722849);
function P(e) {
    let { user: n, guildId: t, channelId: P, messageId: C, roleId: A, sessionId: L, transitionState: O, onClose: M, sourceAnalyticsLocations: R = [] } = e,
        U = t === E.ME ? void 0 : t,
        B = (0, f.ZP)(n.id, U),
        { analyticsLocations: F } = (0, c.ZP)([...R, s.Z.SIMPLIFIED_PROFILE_MODAL]),
        D = (0, u.ZB)({
            layout: 'SIMPLIFIED_MODAL',
            userId: n.id,
            sourceSessionId: L,
            guildId: U,
            channelId: P,
            messageId: C,
            roleId: A
        }),
        G = l.createRef(),
        w = (0, r.Z)(G);
    return (0, i.jsx)(c.Gt, {
        value: F,
        children: (0, i.jsx)(u.Mt, {
            value: D,
            children: (0, i.jsxs)(o.ModalRoot, {
                transitionState: O,
                className: S.root,
                hideShadow: !0,
                'aria-label': N.intl.string(N.t['3N/J2t']),
                children: [
                    (0, i.jsxs)(g.Z, {
                        user: n,
                        displayProfile: B,
                        profileType: b.y0.FULL_SIZE,
                        ref: G,
                        children: [
                            (0, i.jsx)(j.Z, {
                                profileType: b.y0.FULL_SIZE,
                                children: (0, i.jsx)(_.Z, { user: n })
                            }),
                            (0, i.jsxs)('header', {
                                children: [
                                    (0, i.jsx)(I.Z, {
                                        user: n,
                                        displayProfile: B,
                                        profileType: b.y0.FULL_SIZE
                                    }),
                                    (0, i.jsx)('div', {
                                        className: S.headerInner,
                                        children: (0, i.jsx)(m.Z, {
                                            user: n,
                                            displayProfile: B,
                                            guildId: U,
                                            channelId: P,
                                            profileType: b.y0.FULL_SIZE
                                        })
                                    })
                                ]
                            }),
                            (0, i.jsxs)('div', {
                                className: S.body,
                                children: [
                                    (0, i.jsx)(Z.Z, {
                                        user: n,
                                        profileType: b.y0.FULL_SIZE,
                                        nickname: d.ZP.getName(U, P, n),
                                        pronouns: null == B ? void 0 : B.pronouns,
                                        nicknameVariant: 'heading-xl/bold',
                                        tags: (0, i.jsx)(x.Z, {
                                            displayProfile: B,
                                            profileType: b.y0.FULL_SIZE,
                                            onClose: M
                                        })
                                    }),
                                    (0, i.jsx)(g.Z.Overlay, {
                                        className: S.overlay,
                                        children: (0, i.jsxs)('div', {
                                            className: y.container,
                                            children: [
                                                (0, i.jsx)(o.TabBar, {
                                                    className: y.tabBar,
                                                    type: 'top',
                                                    selectedItem: b.oh.BOT_INFO,
                                                    onItemSelect: E.dG4,
                                                    children: (0, i.jsx)(
                                                        o.TabBar.Item,
                                                        {
                                                            className: y.tabBarItem,
                                                            id: b.oh.BOT_INFO,
                                                            'aria-label': N.intl.string(N.t.jGoPJS),
                                                            children: (0, i.jsx)(o.Text, {
                                                                variant: 'text-sm/normal',
                                                                children: N.intl.string(N.t.jGoPJS)
                                                            })
                                                        },
                                                        b.oh.BOT_INFO
                                                    )
                                                }),
                                                (0, i.jsxs)(o.ScrollerThin, {
                                                    fade: !0,
                                                    className: T.scroller,
                                                    children: [
                                                        (0, i.jsx)(p.Z, {
                                                            userId: n.id,
                                                            userBio: null == B ? void 0 : B.bio,
                                                            setLineClamp: !1
                                                        }),
                                                        (0, i.jsx)(v.Z, {
                                                            heading: N.intl.string(N.t['A//N4u']),
                                                            children: (0, i.jsx)(h.Z, {
                                                                userId: n.id,
                                                                guildId: U,
                                                                tooltipDelay: b.vB
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
