n.d(t, {
    Z: function () {
        return L;
    }
});
var r = n(735250);
n(470079);
var i = n(442837),
    a = n(481060),
    s = n(592125),
    o = n(944486),
    l = n(246946),
    u = n(5192),
    c = n(621853),
    d = n(27144),
    _ = n(172351),
    E = n(648052),
    f = n(483424),
    h = n(681837),
    p = n(678738),
    I = n(530),
    m = n(303674),
    T = n(53558),
    g = n(827313),
    S = n(407541),
    A = n(420654),
    N = n(166584),
    O = n(915014),
    R = n(228168),
    v = n(689938),
    C = n(84040),
    y = n(115879);
function L(e) {
    let { user: t, currentUser: n, displayProfile: L, guild: D, isHovering: b, onOpenProfile: M, channelId: P, onClose: U } = e,
        w = u.ZP.getName(null == D ? void 0 : D.id, P, t),
        x = (0, i.e7)([c.Z], () => {
            var e;
            return null === (e = c.Z.getUserProfile(t.id)) || void 0 === e ? void 0 : e.application;
        }),
        G = (0, i.e7)([s.Z, o.Z], () => s.Z.getChannel(o.Z.getChannelId())),
        k = (0, i.e7)([l.Z], () => l.Z.hidePersonalInformation),
        { newActivityCardsEnabled: B } = (0, d.z)({ location: 'BotUserProfilePopoutBody' });
    return (0, r.jsxs)(a.Scroller, {
        fade: !0,
        className: y.body,
        children: [
            (0, r.jsx)(I.Z, {
                user: t,
                profileType: R.y0.BITE_SIZE,
                onOpenProfile: M,
                nickname: w,
                pronouns: null == L ? void 0 : L.pronouns,
                tags: (0, r.jsx)(E.Z, {
                    displayProfile: L,
                    profileType: R.y0.BITE_SIZE,
                    onClose: U
                }),
                nicknameIcons: (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(h.Z, { userId: t.id }),
                        !k &&
                            (0, r.jsx)(g.Z, {
                                userId: t.id,
                                isHovering: b,
                                onOpenProfile: M
                            })
                    ]
                })
            }),
            (0, r.jsx)(O.Z, {
                user: t,
                onOpenProfile: (e) => (null == M ? void 0 : M({ section: e }))
            }),
            (0, r.jsxs)('div', {
                className: C.buttons,
                children: [
                    (0, r.jsx)(m.Z, {
                        user: t,
                        className: C.button
                    }),
                    (0, r.jsx)(T.Z, {
                        user: t,
                        guildId: null == D ? void 0 : D.id,
                        className: C.button
                    })
                ]
            }),
            (0, r.jsx)(A.Z, {
                user: t,
                bio: null == L ? void 0 : L.bio,
                hidePersonalInformation: k,
                onClose: U
            }),
            B
                ? (0, r.jsx)(f.Z, {
                      user: t,
                      currentUser: n,
                      onClose: U,
                      className: y.activity
                  })
                : (0, r.jsx)(S.Z, {
                      user: t,
                      guild: D,
                      channelId: P,
                      onClose: U
                  }),
            (null == x ? void 0 : x.popularApplicationCommandIds) != null &&
                null != G &&
                (0, r.jsx)(_.Z, {
                    applicationId: x.id,
                    commandIds: x.popularApplicationCommandIds,
                    channel: G,
                    guildId: null == D ? void 0 : D.id,
                    onClick: U
                }),
            null != D &&
                (0, r.jsx)(p.Z, {
                    heading: v.Z.Messages.ROLES,
                    children: (0, r.jsx)(N.Z, {
                        user: t,
                        currentUser: n,
                        guild: D
                    })
                })
        ]
    });
}
