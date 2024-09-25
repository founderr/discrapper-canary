n.d(t, {
    Z: function () {
        return S;
    }
});
var i = n(735250);
n(470079);
var s = n(442837),
    a = n(699516),
    l = n(246946),
    r = n(5192),
    o = n(621853),
    c = n(172351),
    u = n(648052),
    d = n(280885),
    h = n(483424),
    m = n(681837),
    p = n(91433),
    _ = n(900927),
    f = n(678738),
    E = n(502762),
    g = n(530),
    C = n(827313),
    I = n(228168),
    T = n(981631),
    x = n(689938),
    v = n(299336);
function S(e) {
    let { user: t, currentUser: n, displayProfile: S, channel: N, isHovering: A, onOpenProfile: Z } = e,
        M = (0, s.e7)([a.Z], () => a.Z.getRelationshipType(t.id)),
        b = (0, s.e7)([l.Z], () => l.Z.hidePersonalInformation),
        R = (0, s.e7)([o.Z], () => {
            var e;
            return null === (e = o.Z.getUserProfile(t.id)) || void 0 === e ? void 0 : e.application;
        });
    return (0, i.jsxs)('div', {
        className: v.body,
        children: [
            (0, i.jsx)(g.Z, {
                user: t,
                profileType: I.y0.PANEL,
                nickname: r.ZP.getName(null, N.id, t),
                pronouns: null == S ? void 0 : S.pronouns,
                onOpenProfile: Z,
                tags: (0, i.jsx)(u.Z, {
                    displayProfile: S,
                    profileType: I.y0.PANEL
                }),
                nicknameIcons: (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(m.Z, { userId: t.id }),
                        !b &&
                            (0, i.jsx)(C.Z, {
                                userId: t.id,
                                isHovering: A,
                                onOpenProfile: Z
                            })
                    ]
                })
            }),
            M === T.OGo.PENDING_INCOMING &&
                (0, i.jsx)(E.Z.Overlay, {
                    children: (0, i.jsx)(p.Z, {
                        user: t,
                        channelId: N.id
                    })
                }),
            (0, i.jsx)(h.Z, {
                user: t,
                currentUser: n,
                className: v.activity
            }),
            (0, i.jsxs)(E.Z.Overlay, {
                className: v.overlay,
                children: [
                    !b &&
                        (null == S ? void 0 : S.bio) != null &&
                        (null == S ? void 0 : S.bio) !== '' &&
                        (0, i.jsx)(f.Z, {
                            heading: x.Z.Messages.USER_POPOUT_ABOUT_ME,
                            headingColor: 'header-primary',
                            children: (0, i.jsx)(d.Z, {
                                userBio: S.bio,
                                animateOnHover: !0,
                                isHovering: A,
                                userId: t.id
                            })
                        }),
                    (null == R ? void 0 : R.popularApplicationCommandIds) != null &&
                        (0, i.jsx)(c.Z, {
                            applicationId: R.id,
                            commandIds: R.popularApplicationCommandIds,
                            channel: N
                        }),
                    (0, i.jsx)(f.Z, {
                        heading: t.bot ? x.Z.Messages.BOT_PROFILE_CREATED_ON : x.Z.Messages.USER_PROFILE_MEMBER_SINCE,
                        headingColor: 'header-primary',
                        children: (0, i.jsx)(_.Z, { userId: t.id })
                    })
                ]
            })
        ]
    });
}
