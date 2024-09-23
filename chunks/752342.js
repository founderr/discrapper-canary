s.d(n, {
    Z: function () {
        return j;
    }
}),
    s(47120);
var t = s(735250);
s(470079);
var i = s(481060),
    o = s(100527),
    l = s(906732),
    r = s(5192),
    c = s(785717),
    a = s(687158),
    d = s(899007),
    u = s(648052),
    _ = s(867176),
    I = s(438163),
    E = s(681837),
    f = s(502762),
    m = s(530),
    x = s(303674),
    Z = s(952124),
    h = s(53558),
    p = s(544989),
    v = s(934861),
    S = s(740628),
    T = s(398145),
    g = s(228168),
    A = s(981631),
    N = s(689938),
    L = s(272216);
function j(e) {
    let { user: n, currentUser: s, guildId: j, channelId: M, messageId: b, roleId: R, sessionId: O, initialSection: C, initialSubsection: P, transitionState: y, onClose: U, sourceAnalyticsLocations: D = [] } = e,
        F = j === A.ME ? void 0 : j,
        B = (0, a.ZP)(n.id, F),
        { analyticsLocations: G } = (0, l.ZP)([...D, o.Z.SIMPLIFIED_PROFILE_MODAL]),
        w = (0, c.ZB)({
            layout: 'SIMPLIFIED_MODAL',
            userId: n.id,
            sourceSessionId: O,
            guildId: F,
            channelId: M,
            messageId: b,
            roleId: R
        }),
        k = (0, T.Z)(n);
    return (0, t.jsx)(l.Gt, {
        value: G,
        children: (0, t.jsx)(c.Mt, {
            value: w,
            children: (0, t.jsx)(i.ModalRoot, {
                transitionState: y,
                className: L.root,
                hideShadow: !0,
                'aria-label': N.Z.Messages.USER_PROFILE_MODAL,
                children: (0, t.jsxs)(f.Z, {
                    user: n,
                    displayProfile: B,
                    profileType: g.y0.FULL_SIZE,
                    children: [
                        (0, t.jsx)(p.Z, {
                            profileType: g.y0.FULL_SIZE,
                            children: (0, t.jsx)(Z.Z, {
                                user: n,
                                guildId: F
                            })
                        }),
                        (0, t.jsxs)('header', {
                            children: [
                                (0, t.jsx)(_.Z, {
                                    user: n,
                                    displayProfile: B,
                                    profileType: g.y0.FULL_SIZE
                                }),
                                (0, t.jsxs)('div', {
                                    className: L.headerInner,
                                    children: [
                                        (0, t.jsx)(d.Z, {
                                            user: n,
                                            displayProfile: B,
                                            guildId: F,
                                            channelId: M,
                                            profileType: g.y0.FULL_SIZE
                                        }),
                                        (0, t.jsx)(I.Z, {
                                            user: n,
                                            profileType: g.y0.FULL_SIZE,
                                            hasEntered: y === i.ModalTransitionState.ENTERED,
                                            onCloseProfile: U
                                        }),
                                        (0, t.jsxs)('div', {
                                            className: L.headerButtons,
                                            children: [
                                                (0, t.jsx)(v.c, {
                                                    userId: n.id,
                                                    onClose: U,
                                                    className: L.messageTextButton
                                                }),
                                                (0, t.jsx)(v.v, {
                                                    userId: n.id,
                                                    onClose: U,
                                                    tooltipContainerClassName: L.messageIconButton
                                                }),
                                                (0, t.jsx)(h.Z, {
                                                    user: n,
                                                    guildId: F
                                                }),
                                                (0, t.jsx)(x.Z, { user: n })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, t.jsxs)('div', {
                            className: L.body,
                            children: [
                                (0, t.jsx)(m.Z, {
                                    user: n,
                                    profileType: g.y0.FULL_SIZE,
                                    nickname: r.ZP.getName(F, M, n),
                                    pronouns: null == B ? void 0 : B.pronouns,
                                    nicknameVariant: 'heading-xl/bold',
                                    nicknameIcons: (0, t.jsx)(E.Z, { userId: n.id }),
                                    tags: (0, t.jsx)(u.Z, {
                                        displayProfile: B,
                                        profileType: g.y0.FULL_SIZE,
                                        onClose: U
                                    })
                                }),
                                (0, t.jsx)(f.Z.Overlay, {
                                    className: L.overlay,
                                    children: (0, t.jsx)(S.Z, {
                                        user: n,
                                        currentUser: s,
                                        displayProfile: B,
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
