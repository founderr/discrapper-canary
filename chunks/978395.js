n.d(t, {
    Z: function () {
        return C;
    }
});
var r = n(200651);
n(192379);
var i = n(442837),
    a = n(481060),
    s = n(189156),
    o = n(699516),
    l = n(246946),
    u = n(5192),
    c = n(74538),
    d = n(816988),
    f = n(648052),
    _ = n(537006),
    p = n(483424),
    h = n(681837),
    m = n(91433),
    g = n(502762),
    E = n(530),
    v = n(827313),
    I = n(420654),
    b = n(116854),
    S = n(166584),
    T = n(915014),
    y = n(228168),
    A = n(981631),
    N = n(451563);
function C(e) {
    let { user: t, currentUser: n, displayProfile: C, guild: R, isHovering: O, onOpenProfile: D, channelId: L, onClose: x } = e,
        w = u.ZP.getName(null == R ? void 0 : R.id, L, t),
        M = (0, i.e7)([o.Z], () => o.Z.getRelationshipType(t.id)),
        P = (0, i.e7)([l.Z], () => l.Z.hidePersonalInformation),
        k = t.id === n.id,
        { dimissibleUpsellsEnabled: U } = (0, d.u)({ location: 'UserProfilePopoutBody' }),
        B = (0, c.I5)(n);
    return (0, r.jsxs)(a.Scroller, {
        fade: !0,
        className: N.body,
        children: [
            (0, r.jsx)(E.Z, {
                user: t,
                profileType: y.y0.BITE_SIZE,
                onOpenProfile: D,
                usernameIcon:
                    t.hasAvatarForGuild(null == R ? void 0 : R.id) &&
                    (0, r.jsx)(b.Z, {
                        user: t,
                        nickname: w
                    }),
                nickname: w,
                pronouns: null == C ? void 0 : C.pronouns,
                tags: (0, r.jsx)(f.Z, {
                    displayProfile: C,
                    profileType: y.y0.BITE_SIZE,
                    onClose: x
                }),
                nicknameIcons: (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(h.Z, { userId: t.id }),
                        !P &&
                            (0, r.jsx)(v.Z, {
                                userId: t.id,
                                isHovering: O,
                                onOpenProfile: D
                            })
                    ]
                })
            }),
            M === A.OGo.PENDING_INCOMING &&
                (0, r.jsx)(g.Z.Overlay, {
                    children: (0, r.jsx)(m.Z, {
                        user: t,
                        guildId: null == R ? void 0 : R.id,
                        channelId: L
                    })
                }),
            !k &&
                (0, r.jsx)(T.Z, {
                    user: t,
                    onOpenProfile: (e) => (null == D ? void 0 : D({ section: e }))
                }),
            t.isProvisional
                ? (0, r.jsx)(s.Z, { look: 'profile' })
                : (0, r.jsx)(I.Z, {
                      user: t,
                      bio: null == C ? void 0 : C.bio,
                      hidePersonalInformation: P,
                      onClose: x
                  }),
            U &&
                k &&
                (0, r.jsx)(_.Z, {
                    isPremiumUser: B,
                    onInteraction: x,
                    className: N.upsell
                }),
            (0, r.jsx)(p.Z, {
                user: t,
                currentUser: n,
                onClose: x,
                className: N.activity
            }),
            null != R &&
                (0, r.jsx)(S.Z, {
                    user: t,
                    currentUser: n,
                    guild: R
                })
        ]
    });
}
