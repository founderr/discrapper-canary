t.d(n, {
    Z: function () {
        return y;
    }
}),
    t(47120);
var i = t(200651);
t(192379);
var l = t(481060),
    o = t(100527),
    r = t(906732),
    s = t(5192),
    c = t(785717),
    a = t(687158),
    d = t(899007),
    u = t(648052),
    f = t(867176),
    m = t(438163),
    I = t(681837),
    x = t(502762),
    p = t(530),
    h = t(871604),
    v = t(952124),
    g = t(53558),
    Z = t(544989),
    _ = t(934861),
    j = t(740628),
    b = t(398145),
    E = t(228168),
    N = t(981631),
    S = t(388032),
    T = t(272216);
function y(e) {
    let { user: n, currentUser: t, guildId: y, channelId: P, messageId: C, roleId: L, sessionId: A, initialSection: O, initialSubsection: M, transitionState: R, onClose: U, sourceAnalyticsLocations: B = [] } = e,
        F = y === N.ME ? void 0 : y,
        D = (0, a.ZP)(n.id, F),
        { analyticsLocations: G } = (0, r.ZP)([...B, o.Z.SIMPLIFIED_PROFILE_MODAL]),
        w = (0, c.ZB)({
            layout: 'SIMPLIFIED_MODAL',
            userId: n.id,
            sourceSessionId: A,
            guildId: F,
            channelId: P,
            messageId: C,
            roleId: L
        }),
        k = (0, b.Z)(n);
    return (0, i.jsx)(r.Gt, {
        value: G,
        children: (0, i.jsx)(c.Mt, {
            value: w,
            children: (0, i.jsx)(l.ModalRoot, {
                transitionState: R,
                className: T.root,
                hideShadow: !0,
                'aria-label': S.intl.string(S.t['3N/J2t']),
                children: (0, i.jsxs)(x.Z, {
                    user: n,
                    displayProfile: D,
                    profileType: E.y0.FULL_SIZE,
                    children: [
                        (0, i.jsx)(Z.Z, {
                            profileType: E.y0.FULL_SIZE,
                            children: (0, i.jsx)(v.Z, {
                                user: n,
                                guildId: F
                            })
                        }),
                        (0, i.jsxs)('header', {
                            children: [
                                (0, i.jsx)(f.Z, {
                                    user: n,
                                    displayProfile: D,
                                    profileType: E.y0.FULL_SIZE
                                }),
                                (0, i.jsxs)('div', {
                                    className: T.headerInner,
                                    children: [
                                        (0, i.jsx)(d.Z, {
                                            user: n,
                                            displayProfile: D,
                                            guildId: F,
                                            channelId: P,
                                            profileType: E.y0.FULL_SIZE
                                        }),
                                        (0, i.jsx)(m.Z, {
                                            user: n,
                                            profileType: E.y0.FULL_SIZE,
                                            hasEntered: R === l.ModalTransitionState.ENTERED,
                                            onCloseProfile: U
                                        }),
                                        (0, i.jsxs)('div', {
                                            className: T.headerButtons,
                                            children: [
                                                (0, i.jsx)(_.c, {
                                                    userId: n.id,
                                                    onClose: U,
                                                    className: T.messageTextButton
                                                }),
                                                (0, i.jsx)(_.v, {
                                                    userId: n.id,
                                                    onClose: U,
                                                    tooltipContainerClassName: T.messageIconButton
                                                }),
                                                (0, i.jsx)(g.Z, {
                                                    user: n,
                                                    guildId: F
                                                }),
                                                (0, i.jsx)(h.Z, { user: n })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, i.jsxs)('div', {
                            className: T.body,
                            children: [
                                (0, i.jsx)(p.Z, {
                                    user: n,
                                    profileType: E.y0.FULL_SIZE,
                                    nickname: s.ZP.getName(F, P, n),
                                    pronouns: null == D ? void 0 : D.pronouns,
                                    nicknameVariant: 'heading-xl/bold',
                                    nicknameIcons: (0, i.jsx)(I.Z, { userId: n.id }),
                                    tags: (0, i.jsx)(u.Z, {
                                        displayProfile: D,
                                        profileType: E.y0.FULL_SIZE,
                                        onClose: U
                                    })
                                }),
                                (0, i.jsx)(x.Z.Overlay, {
                                    className: T.overlay,
                                    children: (0, i.jsx)(j.Z, {
                                        user: n,
                                        currentUser: t,
                                        displayProfile: D,
                                        items: k,
                                        initialSection: null != O ? O : E.oh.BOT_INFO,
                                        initialSubsection: M,
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
