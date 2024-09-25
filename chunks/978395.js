n.d(t, {
    Z: function () {
        return R;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(442837),
    o = n(481060),
    s = n(954138),
    l = n(979264),
    u = n(699516),
    c = n(246946),
    d = n(5192),
    _ = n(648052),
    E = n(483424),
    f = n(681837),
    h = n(91433),
    p = n(502762),
    m = n(530),
    I = n(827313),
    T = n(420654),
    g = n(116854),
    S = n(166584),
    A = n(915014),
    v = n(228168),
    N = n(981631),
    O = n(451563);
function R(e) {
    let { user: t, currentUser: n, displayProfile: R, guild: C, isHovering: y, onOpenProfile: b, channelId: L, onClose: D } = e,
        M = d.ZP.getName(null == C ? void 0 : C.id, L, t),
        P = (0, a.e7)([u.Z], () => u.Z.getRelationshipType(t.id)),
        U = (0, a.e7)([c.Z], () => c.Z.hidePersonalInformation),
        w = (0, s.Z)('username'),
        x = i.useMemo(
            () => ({
                source: N.jXE.BITE_SIZE_PROFILE_POPOUT,
                tagUserId: t.id
            }),
            [t.id]
        );
    return (0, r.jsxs)(o.Scroller, {
        fade: !0,
        className: O.body,
        children: [
            (0, r.jsx)(m.Z, {
                user: t,
                profileType: v.y0.BITE_SIZE,
                onOpenProfile: b,
                usernameIcon:
                    t.hasAvatarForGuild(null == C ? void 0 : C.id) &&
                    (0, r.jsx)(g.Z, {
                        user: t,
                        nickname: M
                    }),
                nickname: M,
                pronouns: null == R ? void 0 : R.pronouns,
                tags: (0, r.jsx)(_.Z, {
                    displayProfile: R,
                    profileType: v.y0.BITE_SIZE,
                    onClose: D
                }),
                nicknameIcons: (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(f.Z, { userId: t.id }),
                        !U &&
                            (0, r.jsx)(I.Z, {
                                userId: t.id,
                                isHovering: y,
                                onOpenProfile: b
                            })
                    ]
                })
            }),
            P === N.OGo.PENDING_INCOMING &&
                (0, r.jsx)(p.Z.Overlay, {
                    children: (0, r.jsx)(h.Z, {
                        user: t,
                        guildId: null == C ? void 0 : C.id,
                        channelId: L
                    })
                }),
            t.id !== n.id &&
                (0, r.jsx)(A.Z, {
                    user: t,
                    onOpenProfile: (e) => (null == b ? void 0 : b({ section: e }))
                }),
            w &&
                (0, r.jsx)(l.ZP, {
                    userId: t.id,
                    inline: !1,
                    profileViewedAnalytics: x
                }),
            (0, r.jsx)(T.Z, {
                user: t,
                bio: null == R ? void 0 : R.bio,
                hidePersonalInformation: U,
                onClose: D
            }),
            (0, r.jsx)(E.Z, {
                user: t,
                currentUser: n,
                onClose: D,
                className: O.activity
            }),
            null != C &&
                (0, r.jsx)(S.Z, {
                    user: t,
                    currentUser: n,
                    guild: C
                })
        ]
    });
}
