n.d(t, {
    Z: function () {
        return M;
    }
});
var i = n(200651);
n(192379);
var s = n(442837),
    a = n(189156),
    l = n(699516),
    r = n(246946),
    o = n(5192),
    c = n(621853),
    u = n(719311),
    d = n(249978),
    h = n(172351),
    m = n(648052),
    p = n(280885),
    _ = n(483424),
    f = n(681837),
    E = n(91433),
    g = n(900927),
    C = n(678738),
    I = n(502762),
    T = n(530),
    x = n(827313),
    S = n(101638),
    v = n(228168),
    N = n(981631),
    A = n(689938),
    Z = n(299336);
function M(e) {
    let { user: t, currentUser: n, displayProfile: M, channel: b, isHovering: R, onOpenProfile: L } = e,
        j = (0, s.e7)([l.Z], () => l.Z.getRelationshipType(t.id)),
        P = (0, s.e7)([r.Z], () => r.Z.hidePersonalInformation),
        O = (0, s.e7)([c.Z], () => {
            var e;
            return null === (e = c.Z.getUserProfile(t.id)) || void 0 === e ? void 0 : e.application;
        }),
        { recentActivityEnabled: y } = (0, u.I)({ location: 'UserProfilePanelBody' }),
        { recentActivityStatusEnabled: D } = (0, d.U)({ location: 'UserProfilePanelBody' });
    return (0, i.jsxs)('div', {
        className: Z.body,
        children: [
            (0, i.jsx)(T.Z, {
                user: t,
                profileType: v.y0.PANEL,
                nickname: o.ZP.getName(null, b.id, t),
                pronouns: null == M ? void 0 : M.pronouns,
                onOpenProfile: L,
                tags: (0, i.jsx)(m.Z, {
                    displayProfile: M,
                    profileType: v.y0.PANEL
                }),
                nicknameIcons: (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(f.Z, { userId: t.id }),
                        !P &&
                            (0, i.jsx)(x.Z, {
                                userId: t.id,
                                isHovering: R,
                                onOpenProfile: L
                            })
                    ]
                })
            }),
            j === N.OGo.PENDING_INCOMING &&
                (0, i.jsx)(I.Z.Overlay, {
                    children: (0, i.jsx)(E.Z, {
                        user: t,
                        channelId: b.id
                    })
                }),
            t.isProvisional && (0, i.jsx)(a.Z, { look: 'profile' }),
            !y &&
                !D &&
                (0, i.jsx)(_.Z, {
                    user: t,
                    currentUser: n,
                    className: Z.activity
                }),
            (0, i.jsxs)(I.Z.Overlay, {
                className: Z.overlay,
                children: [
                    !P &&
                        (null == M ? void 0 : M.bio) != null &&
                        (null == M ? void 0 : M.bio) !== '' &&
                        (0, i.jsx)(C.Z, {
                            heading: A.Z.Messages.USER_POPOUT_ABOUT_ME,
                            headingColor: 'header-primary',
                            children: (0, i.jsx)(p.Z, {
                                userBio: M.bio,
                                animateOnHover: !0,
                                isHovering: R,
                                userId: t.id
                            })
                        }),
                    (null == O ? void 0 : O.popularApplicationCommandIds) != null &&
                        (0, i.jsx)(h.Z, {
                            applicationId: O.id,
                            commandIds: O.popularApplicationCommandIds,
                            channel: b
                        }),
                    (0, i.jsx)(C.Z, {
                        heading: t.bot ? A.Z.Messages.BOT_PROFILE_CREATED_ON : A.Z.Messages.USER_PROFILE_MEMBER_SINCE,
                        headingColor: 'header-primary',
                        children: (0, i.jsx)(g.Z, { userId: t.id })
                    })
                ]
            }),
            (y || D) &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(_.Z, {
                            user: t,
                            currentUser: n,
                            className: Z.activity
                        }),
                        (0, i.jsx)(S.Z, { user: t })
                    ]
                })
        ]
    });
}
