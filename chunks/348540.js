n.d(t, {
    Z: function () {
        return j;
    }
});
var i = n(200651);
n(192379);
var l = n(442837),
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
    v = n(678738),
    _ = n(502762),
    I = n(530),
    E = n(827313),
    b = n(101638),
    N = n(228168),
    Z = n(981631),
    S = n(388032),
    T = n(237563);
function j(e) {
    let { user: t, currentUser: n, displayProfile: j, channel: A, isHovering: y, onOpenProfile: P } = e,
        M = (0, l.e7)([a.Z], () => a.Z.getRelationshipType(t.id)),
        R = (0, l.e7)([s.Z], () => s.Z.hidePersonalInformation),
        L = (0, l.e7)([c.Z], () => {
            var e;
            return null === (e = c.Z.getUserProfile(t.id)) || void 0 === e ? void 0 : e.application;
        }),
        { recentActivityEnabled: k } = (0, d.I)({ location: 'UserProfilePanelBody' }),
        { recentActivityStatusEnabled: O } = (0, u.U)({ location: 'UserProfilePanelBody' });
    return (0, i.jsxs)('div', {
        className: T.body,
        children: [
            (0, i.jsx)(I.Z, {
                user: t,
                profileType: N.y0.PANEL,
                nickname: o.ZP.getName(null, A.id, t),
                pronouns: null == j ? void 0 : j.pronouns,
                onOpenProfile: P,
                tags: (0, i.jsx)(p.Z, {
                    displayProfile: j,
                    profileType: N.y0.PANEL
                }),
                nicknameIcons: (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(g.Z, { userId: t.id }),
                        !R &&
                            (0, i.jsx)(E.Z, {
                                userId: t.id,
                                isHovering: y,
                                onOpenProfile: P
                            })
                    ]
                })
            }),
            M === Z.OGo.PENDING_INCOMING &&
                (0, i.jsx)(_.Z.Overlay, {
                    children: (0, i.jsx)(C.Z, {
                        user: t,
                        channelId: A.id
                    })
                }),
            t.isProvisional && (0, i.jsx)(r.Z, { look: 'profile' }),
            !k &&
                !O &&
                (0, i.jsx)(f.Z, {
                    user: t,
                    currentUser: n,
                    className: T.activity
                }),
            (0, i.jsxs)(_.Z.Overlay, {
                className: T.overlay,
                children: [
                    !R &&
                        (null == j ? void 0 : j.bio) != null &&
                        (null == j ? void 0 : j.bio) !== '' &&
                        (0, i.jsx)(v.Z, {
                            heading: S.intl.string(S.t['61W33d']),
                            headingColor: 'header-primary',
                            children: (0, i.jsx)(m.Z, {
                                userBio: j.bio,
                                animateOnHover: !0,
                                isHovering: y,
                                userId: t.id
                            })
                        }),
                    (null == L ? void 0 : L.popularApplicationCommandIds) != null &&
                        (0, i.jsx)(h.Z, {
                            applicationId: L.id,
                            commandIds: L.popularApplicationCommandIds,
                            channel: A
                        }),
                    (0, i.jsx)(v.Z, {
                        heading: t.bot ? S.intl.string(S.t['A//N4u']) : S.intl.string(S.t.a6XYDw),
                        headingColor: 'header-primary',
                        children: (0, i.jsx)(x.Z, { userId: t.id })
                    })
                ]
            }),
            (k || O) &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(f.Z, {
                            user: t,
                            currentUser: n,
                            className: T.activity
                        }),
                        (0, i.jsx)(b.Z, { user: t })
                    ]
                })
        ]
    });
}
