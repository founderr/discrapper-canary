s.d(n, {
    Z: function () {
        return b;
    }
}),
    s(47120);
var t = s(735250);
s(470079);
var i = s(481060),
    l = s(100527),
    o = s(906732),
    r = s(5192),
    c = s(785717),
    a = s(687158),
    d = s(899007),
    u = s(648052),
    I = s(867176),
    _ = s(438163),
    E = s(681837),
    f = s(502762),
    m = s(530),
    x = s(303674),
    Z = s(952124),
    p = s(53558),
    h = s(544989),
    v = s(934861),
    S = s(740628),
    T = s(398145),
    g = s(228168),
    A = s(981631),
    N = s(689938),
    j = s(272216);
function b(e) {
    let { user: n, currentUser: s, guildId: b, channelId: L, messageId: M, roleId: O, sessionId: R, initialSection: C, initialSubsection: P, transitionState: y, onClose: U, sourceAnalyticsLocations: D = [] } = e,
        B = b === A.ME ? void 0 : b,
        F = (0, a.ZP)(n.id, B),
        { analyticsLocations: G } = (0, o.ZP)([...D, l.Z.SIMPLIFIED_PROFILE_MODAL]),
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
    return (0, t.jsx)(o.Gt, {
        value: G,
        children: (0, t.jsx)(c.Mt, {
            value: w,
            children: (0, t.jsx)(i.ModalRoot, {
                transitionState: y,
                className: j.root,
                hideShadow: !0,
                'aria-label': N.Z.Messages.USER_PROFILE_MODAL,
                children: (0, t.jsxs)(f.Z, {
                    user: n,
                    displayProfile: F,
                    profileType: g.y0.FULL_SIZE,
                    children: [
                        (0, t.jsx)(h.Z, {
                            profileType: g.y0.FULL_SIZE,
                            children: (0, t.jsx)(Z.Z, {
                                user: n,
                                guildId: B
                            })
                        }),
                        (0, t.jsxs)('header', {
                            children: [
                                (0, t.jsx)(I.Z, {
                                    user: n,
                                    displayProfile: F,
                                    profileType: g.y0.FULL_SIZE
                                }),
                                (0, t.jsxs)('div', {
                                    className: j.headerInner,
                                    children: [
                                        (0, t.jsx)(d.Z, {
                                            user: n,
                                            displayProfile: F,
                                            guildId: B,
                                            channelId: L,
                                            profileType: g.y0.FULL_SIZE
                                        }),
                                        (0, t.jsx)(_.Z, {
                                            user: n,
                                            profileType: g.y0.FULL_SIZE,
                                            hasEntered: y === i.ModalTransitionState.ENTERED,
                                            onCloseProfile: U
                                        }),
                                        (0, t.jsxs)('div', {
                                            className: j.headerButtons,
                                            children: [
                                                (0, t.jsx)(v.c, {
                                                    userId: n.id,
                                                    onClose: U,
                                                    className: j.messageTextButton
                                                }),
                                                (0, t.jsx)(v.v, {
                                                    userId: n.id,
                                                    onClose: U,
                                                    tooltipContainerClassName: j.messageIconButton
                                                }),
                                                (0, t.jsx)(p.Z, {
                                                    user: n,
                                                    guildId: B
                                                }),
                                                (0, t.jsx)(x.Z, { user: n })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, t.jsxs)('div', {
                            className: j.body,
                            children: [
                                (0, t.jsx)(m.Z, {
                                    user: n,
                                    profileType: g.y0.FULL_SIZE,
                                    nickname: r.ZP.getName(B, L, n),
                                    pronouns: null == F ? void 0 : F.pronouns,
                                    nicknameVariant: 'heading-xl/bold',
                                    nicknameIcons: (0, t.jsx)(E.Z, { userId: n.id }),
                                    tags: (0, t.jsx)(u.Z, {
                                        displayProfile: F,
                                        profileType: g.y0.FULL_SIZE,
                                        onClose: U
                                    })
                                }),
                                (0, t.jsx)(f.Z.Overlay, {
                                    className: j.overlay,
                                    children: (0, t.jsx)(S.Z, {
                                        user: n,
                                        currentUser: s,
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
