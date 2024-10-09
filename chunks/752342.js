t.d(n, {
    Z: function () {
        return b;
    }
}),
    t(47120);
var s = t(735250);
t(470079);
var i = t(481060),
    o = t(100527),
    l = t(906732),
    r = t(5192),
    c = t(785717),
    a = t(687158),
    d = t(899007),
    u = t(648052),
    _ = t(867176),
    I = t(438163),
    E = t(681837),
    f = t(502762),
    m = t(530),
    x = t(871604),
    Z = t(952124),
    p = t(53558),
    h = t(544989),
    v = t(934861),
    S = t(740628),
    T = t(398145),
    g = t(228168),
    A = t(981631),
    N = t(689938),
    j = t(272216);
function b(e) {
    let { user: n, currentUser: t, guildId: b, channelId: L, messageId: M, roleId: O, sessionId: R, initialSection: C, initialSubsection: P, transitionState: y, onClose: U, sourceAnalyticsLocations: D = [] } = e,
        B = b === A.ME ? void 0 : b,
        F = (0, a.ZP)(n.id, B),
        { analyticsLocations: G } = (0, l.ZP)([...D, o.Z.SIMPLIFIED_PROFILE_MODAL]),
        w = (0, c.ZB)({
            layout: 'SIMPLIFIED_MODAL',
            userId: n.id,
            sourceSessionId: R,
            guildId: B,
            channelId: L,
            messageId: M,
            roleId: O
        }),
        k = (0, T.Z)(n);
    return (0, s.jsx)(l.Gt, {
        value: G,
        children: (0, s.jsx)(c.Mt, {
            value: w,
            children: (0, s.jsx)(i.ModalRoot, {
                transitionState: y,
                className: j.root,
                hideShadow: !0,
                'aria-label': N.Z.Messages.USER_PROFILE_MODAL,
                children: (0, s.jsxs)(f.Z, {
                    user: n,
                    displayProfile: F,
                    profileType: g.y0.FULL_SIZE,
                    children: [
                        (0, s.jsx)(h.Z, {
                            profileType: g.y0.FULL_SIZE,
                            children: (0, s.jsx)(Z.Z, {
                                user: n,
                                guildId: B
                            })
                        }),
                        (0, s.jsxs)('header', {
                            children: [
                                (0, s.jsx)(_.Z, {
                                    user: n,
                                    displayProfile: F,
                                    profileType: g.y0.FULL_SIZE
                                }),
                                (0, s.jsxs)('div', {
                                    className: j.headerInner,
                                    children: [
                                        (0, s.jsx)(d.Z, {
                                            user: n,
                                            displayProfile: F,
                                            guildId: B,
                                            channelId: L,
                                            profileType: g.y0.FULL_SIZE
                                        }),
                                        (0, s.jsx)(I.Z, {
                                            user: n,
                                            profileType: g.y0.FULL_SIZE,
                                            hasEntered: y === i.ModalTransitionState.ENTERED,
                                            onCloseProfile: U
                                        }),
                                        (0, s.jsxs)('div', {
                                            className: j.headerButtons,
                                            children: [
                                                (0, s.jsx)(v.c, {
                                                    userId: n.id,
                                                    onClose: U,
                                                    className: j.messageTextButton
                                                }),
                                                (0, s.jsx)(v.v, {
                                                    userId: n.id,
                                                    onClose: U,
                                                    tooltipContainerClassName: j.messageIconButton
                                                }),
                                                (0, s.jsx)(p.Z, {
                                                    user: n,
                                                    guildId: B
                                                }),
                                                (0, s.jsx)(x.Z, { user: n })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, s.jsxs)('div', {
                            className: j.body,
                            children: [
                                (0, s.jsx)(m.Z, {
                                    user: n,
                                    profileType: g.y0.FULL_SIZE,
                                    nickname: r.ZP.getName(B, L, n),
                                    pronouns: null == F ? void 0 : F.pronouns,
                                    nicknameVariant: 'heading-xl/bold',
                                    nicknameIcons: (0, s.jsx)(E.Z, { userId: n.id }),
                                    tags: (0, s.jsx)(u.Z, {
                                        displayProfile: F,
                                        profileType: g.y0.FULL_SIZE,
                                        onClose: U
                                    })
                                }),
                                (0, s.jsx)(f.Z.Overlay, {
                                    className: j.overlay,
                                    children: (0, s.jsx)(S.Z, {
                                        user: n,
                                        currentUser: t,
                                        displayProfile: F,
                                        items: k,
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
