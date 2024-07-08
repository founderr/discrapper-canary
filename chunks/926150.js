n.d(t, {
    Z: function () {
        return A;
    }
});
var i = n(735250);
n(470079);
var a = n(442837), s = n(699516), l = n(246946), r = n(5192), o = n(332390), c = n(824572), d = n(621853), u = n(741308), h = n(588822), p = n(940730), m = n(681837), _ = n(91433), f = n(900927), E = n(724593), C = n(678738), g = n(502762), I = n(530), x = n(580512), T = n(765365), v = n(228168), N = n(981631), S = n(689938), Z = n(790884);
function A(e) {
    let {
            user: t,
            displayProfile: n,
            channel: A,
            isHovering: M,
            onOpenProfile: b
        } = e, {improvedPanelFriendingEnabled: R} = (0, c.O)({ location: 'SimplifiedProfilePanelBody' }), {activeInviteToCallCtaEnabled: j} = (0, o.l)({ location: 'BiteSizeProfileDirectMessageSection' }), L = (0, T.Z)({ user: t }), P = (0, a.e7)([s.Z], () => s.Z.getRelationshipType(t.id)), O = (0, a.e7)([l.Z], () => l.Z.hidePersonalInformation), y = (0, a.e7)([d.Z], () => {
            var e;
            return null === (e = d.Z.getUserProfile(t.id)) || void 0 === e ? void 0 : e.application;
        });
    return (0, i.jsxs)('div', {
        className: Z.body,
        children: [
            (0, i.jsx)(I.Z, {
                user: t,
                profileType: v.y0.PANEL,
                nickname: r.ZP.getName(null, A.id, t),
                pronouns: null == n ? void 0 : n.pronouns,
                onOpenProfile: b,
                tags: (0, i.jsx)(u.Z, {
                    displayProfile: n,
                    profileType: v.y0.PANEL
                }),
                nicknameIcons: (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(m.Z, { userId: t.id }),
                        !O && (0, i.jsx)(E.Z, {
                            user: t,
                            isHovering: M,
                            onOpenProfile: () => b({ subsection: v.Tb.NOTE })
                        })
                    ]
                })
            }),
            R && P === N.OGo.PENDING_INCOMING && (0, i.jsx)(g.Z.Overlay, {
                children: (0, i.jsx)(_.Z, {
                    user: t,
                    channelId: A.id
                })
            }),
            j && L,
            (0, i.jsx)(x.Z, {
                user: t,
                channelId: A.id
            }),
            (0, i.jsxs)(g.Z.Overlay, {
                className: Z.overlay,
                children: [
                    !O && (null == n ? void 0 : n.bio) != null && (null == n ? void 0 : n.bio) !== '' && (0, i.jsx)(C.Z, {
                        title: S.Z.Messages.USER_POPOUT_ABOUT_ME,
                        headingColor: 'header-primary',
                        children: (0, i.jsx)(h.Z, {
                            userBio: n.bio,
                            animateOnHover: !0,
                            isHovering: M,
                            userId: t.id
                        })
                    }),
                    (null == y ? void 0 : y.popularApplicationCommandIds) != null && (0, i.jsx)(p.Z, {
                        applicationId: y.id,
                        commandIds: y.popularApplicationCommandIds,
                        channel: A
                    }),
                    (0, i.jsx)(C.Z, {
                        title: S.Z.Messages.USER_PROFILE_MEMBER_SINCE,
                        headingColor: 'header-primary',
                        children: (0, i.jsx)(f.Z, { userId: t.id })
                    })
                ]
            })
        ]
    });
}
