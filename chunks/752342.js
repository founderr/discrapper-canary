t.d(n, {
    Z: function () {
        return j;
    }
}),
    t(47120);
var i = t(200651);
t(192379);
var s = t(481060),
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
    p = t(871604),
    x = t(952124),
    Z = t(53558),
    h = t(544989),
    S = t(934861),
    v = t(740628),
    T = t(398145),
    g = t(228168),
    N = t(981631),
    A = t(689938),
    b = t(272216);
function j(e) {
    let { user: n, currentUser: t, guildId: j, channelId: P, messageId: M, roleId: L, sessionId: R, initialSection: O, initialSubsection: C, transitionState: y, onClose: U, sourceAnalyticsLocations: B = [] } = e,
        D = j === N.ME ? void 0 : j,
        F = (0, a.ZP)(n.id, D),
        { analyticsLocations: G } = (0, l.ZP)([...B, o.Z.SIMPLIFIED_PROFILE_MODAL]),
        w = (0, c.ZB)({
            layout: 'SIMPLIFIED_MODAL',
            userId: n.id,
            sourceSessionId: R,
            guildId: D,
            channelId: P,
            messageId: M,
            roleId: L
        }),
        k = (0, T.Z)(n);
    return (0, i.jsx)(l.Gt, {
        value: G,
        children: (0, i.jsx)(c.Mt, {
            value: w,
            children: (0, i.jsx)(s.ModalRoot, {
                transitionState: y,
                className: b.root,
                hideShadow: !0,
                'aria-label': A.Z.Messages.USER_PROFILE_MODAL,
                children: (0, i.jsxs)(f.Z, {
                    user: n,
                    displayProfile: F,
                    profileType: g.y0.FULL_SIZE,
                    children: [
                        (0, i.jsx)(h.Z, {
                            profileType: g.y0.FULL_SIZE,
                            children: (0, i.jsx)(x.Z, {
                                user: n,
                                guildId: D
                            })
                        }),
                        (0, i.jsxs)('header', {
                            children: [
                                (0, i.jsx)(_.Z, {
                                    user: n,
                                    displayProfile: F,
                                    profileType: g.y0.FULL_SIZE
                                }),
                                (0, i.jsxs)('div', {
                                    className: b.headerInner,
                                    children: [
                                        (0, i.jsx)(d.Z, {
                                            user: n,
                                            displayProfile: F,
                                            guildId: D,
                                            channelId: P,
                                            profileType: g.y0.FULL_SIZE
                                        }),
                                        (0, i.jsx)(I.Z, {
                                            user: n,
                                            profileType: g.y0.FULL_SIZE,
                                            hasEntered: y === s.ModalTransitionState.ENTERED,
                                            onCloseProfile: U
                                        }),
                                        (0, i.jsxs)('div', {
                                            className: b.headerButtons,
                                            children: [
                                                (0, i.jsx)(S.c, {
                                                    userId: n.id,
                                                    onClose: U,
                                                    className: b.messageTextButton
                                                }),
                                                (0, i.jsx)(S.v, {
                                                    userId: n.id,
                                                    onClose: U,
                                                    tooltipContainerClassName: b.messageIconButton
                                                }),
                                                (0, i.jsx)(Z.Z, {
                                                    user: n,
                                                    guildId: D
                                                }),
                                                (0, i.jsx)(p.Z, { user: n })
                                            ]
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
                                    profileType: g.y0.FULL_SIZE,
                                    nickname: r.ZP.getName(D, P, n),
                                    pronouns: null == F ? void 0 : F.pronouns,
                                    nicknameVariant: 'heading-xl/bold',
                                    nicknameIcons: (0, i.jsx)(E.Z, { userId: n.id }),
                                    tags: (0, i.jsx)(u.Z, {
                                        displayProfile: F,
                                        profileType: g.y0.FULL_SIZE,
                                        onClose: U
                                    })
                                }),
                                (0, i.jsx)(f.Z.Overlay, {
                                    className: b.overlay,
                                    children: (0, i.jsx)(v.Z, {
                                        user: n,
                                        currentUser: t,
                                        displayProfile: F,
                                        items: k,
                                        initialSection: null != O ? O : g.oh.BOT_INFO,
                                        initialSubsection: C,
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
