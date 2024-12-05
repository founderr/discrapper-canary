n.d(t, {
    Z: function () {
        return R;
    }
});
var r = n(200651),
    i = n(442837),
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
    g = n(944043),
    E = n(502762),
    v = n(530),
    I = n(827313),
    T = n(420654),
    b = n(116854),
    S = n(166584),
    y = n(915014),
    A = n(228168),
    N = n(981631),
    C = n(591156);
function R(e) {
    let { user: t, currentUser: n, displayProfile: R, guild: O, isHovering: D, onOpenProfile: L, channelId: x, onClose: w } = e,
        P = u.ZP.useName(null == O ? void 0 : O.id, x, t),
        M = (0, i.e7)([o.Z], () => o.Z.getRelationshipType(t.id)),
        k = (0, i.e7)([l.Z], () => l.Z.hidePersonalInformation),
        U = t.id === n.id,
        { dimissibleUpsellsEnabled: B } = (0, d.u)({ location: 'UserProfilePopoutBody' }),
        G = (0, c.I5)(n);
    return (0, r.jsxs)(a.Scroller, {
        fade: !0,
        className: C.body,
        children: [
            (0, r.jsx)(v.Z, {
                user: t,
                profileType: A.y0.BITE_SIZE,
                onOpenProfile: L,
                usernameIcon:
                    t.hasAvatarForGuild(null == O ? void 0 : O.id) &&
                    (0, r.jsx)(b.Z, {
                        user: t,
                        nickname: P
                    }),
                nickname: P,
                pronouns: null == R ? void 0 : R.pronouns,
                tags: (0, r.jsx)(f.Z, {
                    displayProfile: R,
                    profileType: A.y0.BITE_SIZE,
                    onClose: w
                }),
                nicknameIcons: (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(h.Z, { userId: t.id }),
                        !k &&
                            (0, r.jsx)(I.Z, {
                                userId: t.id,
                                isHovering: D,
                                onOpenProfile: L
                            })
                    ]
                })
            }),
            M === N.OGo.PENDING_INCOMING &&
                (0, r.jsx)(E.Z.Overlay, {
                    children: (0, r.jsx)(m.Z, {
                        user: t,
                        guildId: null == O ? void 0 : O.id,
                        channelId: x
                    })
                }),
            (0, r.jsx)(g.Z, { user: t }),
            !U &&
                (0, r.jsx)(y.Z, {
                    user: t,
                    onOpenProfile: (e) => (null == L ? void 0 : L({ section: e }))
                }),
            t.isProvisional
                ? (0, r.jsx)(s.Z, { look: 'profile' })
                : (0, r.jsx)(T.Z, {
                      user: t,
                      bio: null == R ? void 0 : R.bio,
                      hidePersonalInformation: k,
                      onClose: w
                  }),
            B &&
                U &&
                (0, r.jsx)(_.Z, {
                    isPremiumUser: G,
                    onInteraction: w,
                    className: C.upsell
                }),
            (0, r.jsx)(p.Z, {
                user: t,
                currentUser: n,
                profileGuildId: null == R ? void 0 : R.guildId,
                onClose: w,
                className: C.activity
            }),
            null != O &&
                (0, r.jsx)(S.Z, {
                    user: t,
                    currentUser: n,
                    guild: O
                })
        ]
    });
}
