n.d(t, {
    Z: function () {
        return C;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(442837),
    o = n(481060),
    s = n(954138),
    l = n(979264),
    u = n(189156),
    c = n(699516),
    d = n(246946),
    _ = n(5192),
    E = n(648052),
    f = n(483424),
    h = n(681837),
    p = n(91433),
    m = n(502762),
    I = n(530),
    T = n(827313),
    g = n(420654),
    S = n(116854),
    A = n(166584),
    v = n(915014),
    N = n(228168),
    O = n(981631),
    R = n(451563);
function C(e) {
    let { user: t, currentUser: n, displayProfile: C, guild: y, isHovering: b, onOpenProfile: L, channelId: D, onClose: M } = e,
        P = _.ZP.getName(null == y ? void 0 : y.id, D, t),
        U = (0, a.e7)([c.Z], () => c.Z.getRelationshipType(t.id)),
        w = (0, a.e7)([d.Z], () => d.Z.hidePersonalInformation),
        x = (0, s.Z)('username'),
        G = i.useMemo(
            () => ({
                source: O.jXE.BITE_SIZE_PROFILE_POPOUT,
                tagUserId: t.id
            }),
            [t.id]
        );
    return (0, r.jsxs)(o.Scroller, {
        fade: !0,
        className: R.body,
        children: [
            (0, r.jsx)(I.Z, {
                user: t,
                profileType: N.y0.BITE_SIZE,
                onOpenProfile: L,
                usernameIcon:
                    t.hasAvatarForGuild(null == y ? void 0 : y.id) &&
                    (0, r.jsx)(S.Z, {
                        user: t,
                        nickname: P
                    }),
                nickname: P,
                pronouns: null == C ? void 0 : C.pronouns,
                tags: (0, r.jsx)(E.Z, {
                    displayProfile: C,
                    profileType: N.y0.BITE_SIZE,
                    onClose: M
                }),
                nicknameIcons: (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(h.Z, { userId: t.id }),
                        !w &&
                            (0, r.jsx)(T.Z, {
                                userId: t.id,
                                isHovering: b,
                                onOpenProfile: L
                            })
                    ]
                })
            }),
            U === O.OGo.PENDING_INCOMING &&
                (0, r.jsx)(m.Z.Overlay, {
                    children: (0, r.jsx)(p.Z, {
                        user: t,
                        guildId: null == y ? void 0 : y.id,
                        channelId: D
                    })
                }),
            t.id !== n.id &&
                (0, r.jsx)(v.Z, {
                    user: t,
                    onOpenProfile: (e) => (null == L ? void 0 : L({ section: e }))
                }),
            x &&
                (0, r.jsx)(l.ZP, {
                    userId: t.id,
                    inline: !1,
                    profileViewedAnalytics: G
                }),
            t.isProvisional()
                ? (0, r.jsx)(u.Z, { look: 'profile' })
                : (0, r.jsx)(g.Z, {
                      user: t,
                      bio: null == C ? void 0 : C.bio,
                      hidePersonalInformation: w,
                      onClose: M
                  }),
            (0, r.jsx)(f.Z, {
                user: t,
                currentUser: n,
                onClose: M,
                className: R.activity
            }),
            null != y &&
                (0, r.jsx)(A.Z, {
                    user: t,
                    currentUser: n,
                    guild: y
                })
        ]
    });
}
