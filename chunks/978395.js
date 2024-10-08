n.d(t, {
    Z: function () {
        return O;
    }
});
var r = n(735250);
n(470079);
var i = n(442837),
    a = n(481060),
    s = n(189156),
    o = n(699516),
    l = n(246946),
    u = n(5192),
    c = n(648052),
    d = n(483424),
    _ = n(681837),
    E = n(91433),
    f = n(502762),
    h = n(530),
    p = n(827313),
    I = n(420654),
    m = n(116854),
    T = n(166584),
    S = n(915014),
    g = n(228168),
    A = n(981631),
    N = n(451563);
function O(e) {
    let { user: t, currentUser: n, displayProfile: O, guild: R, isHovering: v, onOpenProfile: C, channelId: L, onClose: y } = e,
        D = u.ZP.getName(null == R ? void 0 : R.id, L, t),
        b = (0, i.e7)([o.Z], () => o.Z.getRelationshipType(t.id)),
        M = (0, i.e7)([l.Z], () => l.Z.hidePersonalInformation);
    return (0, r.jsxs)(a.Scroller, {
        fade: !0,
        className: N.body,
        children: [
            (0, r.jsx)(h.Z, {
                user: t,
                profileType: g.y0.BITE_SIZE,
                onOpenProfile: C,
                usernameIcon:
                    t.hasAvatarForGuild(null == R ? void 0 : R.id) &&
                    (0, r.jsx)(m.Z, {
                        user: t,
                        nickname: D
                    }),
                nickname: D,
                pronouns: null == O ? void 0 : O.pronouns,
                tags: (0, r.jsx)(c.Z, {
                    displayProfile: O,
                    profileType: g.y0.BITE_SIZE,
                    onClose: y
                }),
                nicknameIcons: (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(_.Z, { userId: t.id }),
                        !M &&
                            (0, r.jsx)(p.Z, {
                                userId: t.id,
                                isHovering: v,
                                onOpenProfile: C
                            })
                    ]
                })
            }),
            b === A.OGo.PENDING_INCOMING &&
                (0, r.jsx)(f.Z.Overlay, {
                    children: (0, r.jsx)(E.Z, {
                        user: t,
                        guildId: null == R ? void 0 : R.id,
                        channelId: L
                    })
                }),
            t.id !== n.id &&
                (0, r.jsx)(S.Z, {
                    user: t,
                    onOpenProfile: (e) => (null == C ? void 0 : C({ section: e }))
                }),
            t.isProvisional
                ? (0, r.jsx)(s.Z, { look: 'profile' })
                : (0, r.jsx)(I.Z, {
                      user: t,
                      bio: null == O ? void 0 : O.bio,
                      hidePersonalInformation: M,
                      onClose: y
                  }),
            (0, r.jsx)(d.Z, {
                user: t,
                currentUser: n,
                onClose: y,
                className: N.activity
            }),
            null != R &&
                (0, r.jsx)(T.Z, {
                    user: t,
                    currentUser: n,
                    guild: R
                })
        ]
    });
}
