t.d(n, {
    Z: function () {
        return b;
    }
}),
    t(47120);
var o = t(735250);
t(470079);
var i = t(481060),
    s = t(100527),
    l = t(906732),
    c = t(5192),
    r = t(785717),
    a = t(687158),
    d = t(899007),
    u = t(648052),
    _ = t(867176),
    I = t(438163),
    E = t(681837),
    f = t(502762),
    p = t(530),
    Z = t(871604),
    h = t(952124),
    x = t(53558),
    m = t(544989),
    S = t(934861),
    T = t(740628),
    v = t(398145),
    g = t(228168),
    A = t(981631),
    O = t(689938),
    L = t(272216);
function b(e) {
    let { user: n, currentUser: t, guildId: b, channelId: N, messageId: M, roleId: C, sessionId: R, initialSection: j, initialSubsection: P, transitionState: y, onClose: U, sourceAnalyticsLocations: B = [] } = e,
        D = b === A.ME ? void 0 : b,
        F = (0, a.ZP)(n.id, D),
        { analyticsLocations: G } = (0, l.ZP)([...B, s.Z.SIMPLIFIED_PROFILE_MODAL]),
        w = (0, r.ZB)({
            layout: 'SIMPLIFIED_MODAL',
            userId: n.id,
            sourceSessionId: R,
            guildId: D,
            channelId: N,
            messageId: M,
            roleId: C
        }),
        V = (0, v.Z)(n);
    return (0, o.jsx)(l.Gt, {
        value: G,
        children: (0, o.jsx)(r.Mt, {
            value: w,
            children: (0, o.jsx)(i.ModalRoot, {
                transitionState: y,
                className: L.root,
                hideShadow: !0,
                'aria-label': O.Z.Messages.USER_PROFILE_MODAL,
                children: (0, o.jsxs)(f.Z, {
                    user: n,
                    displayProfile: F,
                    profileType: g.y0.FULL_SIZE,
                    children: [
                        (0, o.jsx)(m.Z, {
                            profileType: g.y0.FULL_SIZE,
                            children: (0, o.jsx)(h.Z, {
                                user: n,
                                guildId: D
                            })
                        }),
                        (0, o.jsxs)('header', {
                            children: [
                                (0, o.jsx)(_.Z, {
                                    user: n,
                                    displayProfile: F,
                                    profileType: g.y0.FULL_SIZE
                                }),
                                (0, o.jsxs)('div', {
                                    className: L.headerInner,
                                    children: [
                                        (0, o.jsx)(d.Z, {
                                            user: n,
                                            displayProfile: F,
                                            guildId: D,
                                            channelId: N,
                                            profileType: g.y0.FULL_SIZE
                                        }),
                                        (0, o.jsx)(I.Z, {
                                            user: n,
                                            profileType: g.y0.FULL_SIZE,
                                            hasEntered: y === i.ModalTransitionState.ENTERED,
                                            onCloseProfile: U
                                        }),
                                        (0, o.jsxs)('div', {
                                            className: L.headerButtons,
                                            children: [
                                                (0, o.jsx)(S.c, {
                                                    userId: n.id,
                                                    onClose: U,
                                                    className: L.messageTextButton
                                                }),
                                                (0, o.jsx)(S.v, {
                                                    userId: n.id,
                                                    onClose: U,
                                                    tooltipContainerClassName: L.messageIconButton
                                                }),
                                                (0, o.jsx)(x.Z, {
                                                    user: n,
                                                    guildId: D
                                                }),
                                                (0, o.jsx)(Z.Z, { user: n })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, o.jsxs)('div', {
                            className: L.body,
                            children: [
                                (0, o.jsx)(p.Z, {
                                    user: n,
                                    profileType: g.y0.FULL_SIZE,
                                    nickname: c.ZP.getName(D, N, n),
                                    pronouns: null == F ? void 0 : F.pronouns,
                                    nicknameVariant: 'heading-xl/bold',
                                    nicknameIcons: (0, o.jsx)(E.Z, { userId: n.id }),
                                    tags: (0, o.jsx)(u.Z, {
                                        displayProfile: F,
                                        profileType: g.y0.FULL_SIZE,
                                        onClose: U
                                    })
                                }),
                                (0, o.jsx)(f.Z.Overlay, {
                                    className: L.overlay,
                                    children: (0, o.jsx)(T.Z, {
                                        user: n,
                                        currentUser: t,
                                        displayProfile: F,
                                        items: V,
                                        initialSection: null != j ? j : g.oh.BOT_INFO,
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
