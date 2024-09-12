t.d(n, {
    Z: function () {
        return R;
    }
}),
    t(47120);
var s = t(735250);
t(470079);
var i = t(481060),
    o = t(100527),
    l = t(906732),
    r = t(5192),
    a = t(785717),
    c = t(687158),
    d = t(899007),
    u = t(648052),
    _ = t(867176),
    I = t(438163),
    E = t(681837),
    f = t(502762),
    m = t(530),
    x = t(303674),
    Z = t(952124),
    p = t(53558),
    h = t(544989),
    S = t(934861),
    v = t(740628),
    T = t(398145),
    g = t(228168),
    A = t(981631),
    N = t(689938),
    L = t(272216);
function R(e) {
    let { user: n, currentUser: t, guildId: R, channelId: j, messageId: M, roleId: b, sessionId: O, initialSection: C, initialSubsection: P, transitionState: y, onClose: U, sourceAnalyticsLocations: D = [] } = e,
        F = R === A.ME ? void 0 : R,
        B = (0, c.ZP)(n.id, F),
        { analyticsLocations: G } = (0, l.ZP)([...D, o.Z.SIMPLIFIED_PROFILE_MODAL]),
        w = (0, a.ZB)({
            layout: 'SIMPLIFIED_MODAL',
            userId: n.id,
            sourceSessionId: O,
            guildId: F,
            channelId: j,
            messageId: M,
            roleId: b
        }),
        V = (0, T.Z)(n);
    return (0, s.jsx)(l.Gt, {
        value: G,
        children: (0, s.jsx)(a.Mt, {
            value: w,
            children: (0, s.jsx)(i.ModalRoot, {
                transitionState: y,
                className: L.root,
                hideShadow: !0,
                'aria-label': N.Z.Messages.USER_PROFILE_MODAL,
                children: (0, s.jsxs)(f.Z, {
                    user: n,
                    displayProfile: B,
                    profileType: g.y0.FULL_SIZE,
                    children: [
                        (0, s.jsx)(h.Z, {
                            profileType: g.y0.FULL_SIZE,
                            children: (0, s.jsx)(Z.Z, {
                                user: n,
                                guildId: F
                            })
                        }),
                        (0, s.jsxs)('header', {
                            children: [
                                (0, s.jsx)(_.Z, {
                                    user: n,
                                    displayProfile: B,
                                    profileType: g.y0.FULL_SIZE
                                }),
                                (0, s.jsxs)('div', {
                                    className: L.headerInner,
                                    children: [
                                        (0, s.jsx)(d.Z, {
                                            user: n,
                                            displayProfile: B,
                                            guildId: F,
                                            channelId: j,
                                            profileType: g.y0.FULL_SIZE
                                        }),
                                        (0, s.jsx)(I.Z, {
                                            user: n,
                                            profileType: g.y0.FULL_SIZE,
                                            hasEntered: y === i.ModalTransitionState.ENTERED,
                                            onClose: U
                                        }),
                                        (0, s.jsxs)('div', {
                                            className: L.headerButtons,
                                            children: [
                                                (0, s.jsx)(S.c, {
                                                    userId: n.id,
                                                    onClose: U,
                                                    className: L.messageTextButton
                                                }),
                                                (0, s.jsx)(S.v, {
                                                    userId: n.id,
                                                    onClose: U,
                                                    tooltipContainerClassName: L.messageIconButton
                                                }),
                                                (0, s.jsx)(p.Z, {
                                                    user: n,
                                                    guildId: F
                                                }),
                                                (0, s.jsx)(x.Z, { user: n })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, s.jsxs)('div', {
                            className: L.body,
                            children: [
                                (0, s.jsx)(m.Z, {
                                    user: n,
                                    profileType: g.y0.FULL_SIZE,
                                    nickname: r.ZP.getName(F, j, n),
                                    pronouns: null == B ? void 0 : B.pronouns,
                                    nicknameVariant: 'heading-xl/bold',
                                    nicknameIcons: (0, s.jsx)(E.Z, { userId: n.id }),
                                    tags: (0, s.jsx)(u.Z, {
                                        displayProfile: B,
                                        profileType: g.y0.FULL_SIZE,
                                        onClose: U
                                    })
                                }),
                                (0, s.jsx)(f.Z.Overlay, {
                                    className: L.overlay,
                                    children: (0, s.jsx)(v.Z, {
                                        user: n,
                                        currentUser: t,
                                        displayProfile: B,
                                        items: V,
                                        initialSection: null != C ? C : g.oh.BOT_INFO,
                                        initialSubsection: P,
                                        onClose: U
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
}
