n.d(t, {
    Z: function () {
        return A;
    }
});
var i = n(200651),
    l = n(442837),
    r = n(189156),
    a = n(699516),
    s = n(246946),
    o = n(5192),
    c = n(621853),
    d = n(719311),
    u = n(249978),
    h = n(172351),
    p = n(648052),
    m = n(280885),
    f = n(483424),
    g = n(681837),
    C = n(91433),
    x = n(900927),
    _ = n(944043),
    v = n(678738),
    I = n(502762),
    E = n(530),
    b = n(827313),
    N = n(101638),
    S = n(228168),
    Z = n(981631),
    T = n(388032),
    j = n(866669);
function A(e) {
    let { user: t, currentUser: n, displayProfile: A, channel: y, isHovering: P, onOpenProfile: M } = e,
        R = (0, l.e7)([a.Z], () => a.Z.getRelationshipType(t.id)),
        L = (0, l.e7)([s.Z], () => s.Z.hidePersonalInformation),
        k = (0, l.e7)([c.Z], () => {
            var e;
            return null === (e = c.Z.getUserProfile(t.id)) || void 0 === e ? void 0 : e.application;
        }),
        O = o.ZP.useName(y.guild_id, y.id, t),
        { recentActivityEnabled: D } = (0, d.I)({ location: 'UserProfilePanelBody' }),
        { recentActivityStatusEnabled: w } = (0, u.U)({ location: 'UserProfilePanelBody' });
    return (0, i.jsxs)('div', {
        className: j.body,
        children: [
            (0, i.jsx)(E.Z, {
                user: t,
                profileType: S.y0.PANEL,
                nickname: o.ZP.getName(null, y.id, t),
                pronouns: null == A ? void 0 : A.pronouns,
                onOpenProfile: M,
                tags: (0, i.jsx)(p.Z, {
                    displayProfile: A,
                    profileType: S.y0.PANEL
                }),
                nicknameIcons: (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(g.Z, { userId: t.id }),
                        !L &&
                            (0, i.jsx)(b.Z, {
                                userId: t.id,
                                isHovering: P,
                                onOpenProfile: M
                            })
                    ]
                })
            }),
            R === Z.OGo.PENDING_INCOMING &&
                (0, i.jsx)(I.Z.Overlay, {
                    children: (0, i.jsx)(C.Z, {
                        user: t,
                        channelId: y.id
                    })
                }),
            (0, i.jsx)(_.Z, {
                user: t,
                nickname: O,
                truncateLongName: !0
            }),
            t.isProvisional && (0, i.jsx)(r.Z, { look: 'profile' }),
            !D &&
                !w &&
                (0, i.jsx)(f.Z, {
                    user: t,
                    currentUser: n,
                    className: j.activity
                }),
            (0, i.jsxs)(I.Z.Overlay, {
                className: j.overlay,
                children: [
                    !L &&
                        (null == A ? void 0 : A.bio) != null &&
                        (null == A ? void 0 : A.bio) !== '' &&
                        (0, i.jsx)(v.Z, {
                            heading: T.intl.string(T.t['61W33d']),
                            headingColor: 'header-primary',
                            children: (0, i.jsx)(m.Z, {
                                userBio: A.bio,
                                animateOnHover: !0,
                                isHovering: P,
                                userId: t.id
                            })
                        }),
                    (null == k ? void 0 : k.popularApplicationCommandIds) != null &&
                        (0, i.jsx)(h.Z, {
                            applicationId: k.id,
                            commandIds: k.popularApplicationCommandIds,
                            channel: y
                        }),
                    (0, i.jsx)(v.Z, {
                        heading: t.bot ? T.intl.string(T.t['A//N4u']) : T.intl.string(T.t.a6XYDw),
                        headingColor: 'header-primary',
                        children: (0, i.jsx)(x.Z, { userId: t.id })
                    })
                ]
            }),
            (D || w) &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(f.Z, {
                            user: t,
                            currentUser: n,
                            className: j.activity
                        }),
                        (0, i.jsx)(N.Z, { user: t })
                    ]
                })
        ]
    });
}
