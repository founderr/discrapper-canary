t.d(n, {
    Z: function () {
        return j;
    }
}),
    t(47120);
var i = t(735250);
t(470079);
var s = t(481060),
    o = t(100527),
    l = t(906732),
    r = t(5192),
    a = t(785717),
    c = t(318661),
    d = t(78675),
    u = t(741308),
    I = t(899007),
    _ = t(438163),
    f = t(681837),
    E = t(502762),
    m = t(530),
    p = t(645410),
    x = t(437758),
    v = t(357836),
    Z = t(544989),
    h = t(934861),
    S = t(616140),
    T = t(29530),
    A = t(228168),
    g = t(981631),
    N = t(689938),
    b = t(392214);
function j(e) {
    let { user: n, currentUser: t, guildId: j, channelId: L, messageId: R, roleId: C, sessionId: M, initialSection: O, initialSubsection: P, transitionState: y, onClose: U, sourceAnalyticsLocations: D = [] } = e,
        F = j === g.ME ? void 0 : j,
        B = (0, c.ZP)(n.id, F),
        { analyticsLocations: w } = (0, l.ZP)([...D, o.Z.SIMPLIFIED_PROFILE_MODAL]),
        G = (0, a.ZB)({
            layout: 'SIMPLIFIED_MODAL',
            userId: n.id,
            sourceSessionId: M,
            guildId: F,
            channelId: L,
            messageId: R,
            roleId: C
        }),
        k = (0, T.Z)(n);
    return (0, i.jsx)(l.Gt, {
        value: w,
        children: (0, i.jsx)(a.Mt, {
            value: G,
            children: (0, i.jsx)(s.ModalRoot, {
                transitionState: y,
                className: b.root,
                hideShadow: !0,
                'aria-label': N.Z.Messages.USER_PROFILE_MODAL,
                children: (0, i.jsxs)(E.Z, {
                    user: n,
                    displayProfile: B,
                    profileType: A.y0.FULL_SIZE,
                    children: [
                        (0, i.jsx)(Z.Z, {
                            profileType: A.y0.FULL_SIZE,
                            children: (0, i.jsx)(x.Z, {
                                user: n,
                                guildId: F
                            })
                        }),
                        (0, i.jsxs)('header', {
                            children: [
                                (0, i.jsx)(d.Z, {
                                    user: n,
                                    displayProfile: B,
                                    profileType: A.y0.FULL_SIZE,
                                    hasProfileEffect: (null == B ? void 0 : B.profileEffectId) != null
                                }),
                                (0, i.jsxs)('div', {
                                    className: b.headerInner,
                                    children: [
                                        (0, i.jsx)(I.Z, {
                                            user: n,
                                            displayProfile: B,
                                            guildId: F,
                                            channelId: L,
                                            profileType: A.y0.FULL_SIZE
                                        }),
                                        (0, i.jsxs)('div', {
                                            className: b.headerButtons,
                                            children: [
                                                (0, i.jsx)(h.c, {
                                                    userId: n.id,
                                                    onClose: U,
                                                    className: b.messageTextButton
                                                }),
                                                (0, i.jsx)(h.v, {
                                                    userId: n.id,
                                                    onClose: U,
                                                    tooltipContainerClassName: b.messageIconButton
                                                }),
                                                (0, i.jsx)(v.Z, {
                                                    user: n,
                                                    guildId: F
                                                }),
                                                (0, i.jsx)(p.Z, { user: n })
                                            ]
                                        }),
                                        (0, i.jsx)(_.Z, {
                                            user: n,
                                            profileType: A.y0.FULL_SIZE,
                                            hasEntered: y === s.ModalTransitionState.ENTERED,
                                            onClose: U
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, i.jsxs)('div', {
                            className: b.body,
                            children: [
                                (0, i.jsx)(m.Z, {
                                    user: n,
                                    profileType: A.y0.FULL_SIZE,
                                    nickname: r.ZP.getName(F, L, n),
                                    pronouns: null == B ? void 0 : B.pronouns,
                                    nicknameVariant: 'heading-xl/bold',
                                    nicknameIcons: (0, i.jsx)(f.Z, { userId: n.id }),
                                    tags: (0, i.jsx)(u.Z, {
                                        displayProfile: B,
                                        profileType: A.y0.FULL_SIZE,
                                        onClose: U
                                    })
                                }),
                                (0, i.jsx)(E.Z.Overlay, {
                                    className: b.overlay,
                                    children: (0, i.jsx)(S.Z, {
                                        user: n,
                                        currentUser: t,
                                        displayProfile: B,
                                        items: k,
                                        initialSection: null != O ? O : A.oh.BOT_INFO,
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
