n.d(t, {
    Z: function () {
        return R;
    }
});
var i = n(735250), a = n(470079), s = n(597312), l = n(727637), r = n(410030), o = n(100527), c = n(906732), d = n(580552), u = n(680295), h = n(5192), p = n(785717), m = n(318661), _ = n(741308), f = n(588822), E = n(900927), C = n(678738), g = n(502762), I = n(530), x = n(679332), T = n(544989), v = n(171368), N = n(308829), S = n(354810), Z = n(228168), A = n(689938), M = n(642402), b = n(790884);
function R(e) {
    let {
            user: t,
            channel: n
        } = e, R = __OVERLAY__ || !(0, d.Z)(t.id), {analyticsLocations: j} = (0, c.ZP)(o.Z.PROFILE_PANEL), L = (0, m.ZP)(t.id), P = (0, r.ZP)(), O = a.useRef(null), y = (0, l.Z)(O), D = e => {
            (0, v.openUserProfileModal)({
                sourceAnalyticsLocations: j,
                userId: t.id,
                channelId: n.id,
                ...e
            });
        };
    return (0, i.jsx)(c.Gt, {
        value: j,
        children: (0, i.jsx)(p.Mt, {
            layout: 'SIMPLIFIED_DM_PANEL',
            userId: t.id,
            channelId: n.id,
            children: (0, i.jsxs)(g.Z, {
                ref: O,
                user: t,
                displayProfile: L,
                profileType: Z.y0.PANEL,
                themeOverride: P,
                className: M.container,
                children: [
                    (0, i.jsxs)(s.u2, {
                        children: [
                            (0, i.jsx)(T.Z, {
                                profileType: Z.y0.PANEL,
                                children: (0, i.jsx)(x.Z, { user: t })
                            }),
                            (0, i.jsx)(S.Z, {
                                user: t,
                                displayProfile: L,
                                channel: n,
                                isHovering: y,
                                onOpenProfile: R ? void 0 : D
                            }),
                            (0, i.jsxs)('div', {
                                className: b.body,
                                children: [
                                    (0, i.jsx)(I.Z, {
                                        user: t,
                                        profileType: Z.y0.PANEL,
                                        nickname: h.ZP.getName(null, n.id, t),
                                        pronouns: null == L ? void 0 : L.pronouns,
                                        onOpenProfile: R ? void 0 : D,
                                        tags: (0, i.jsx)(_.Z, {
                                            displayProfile: L,
                                            profileType: Z.y0.PANEL
                                        })
                                    }),
                                    (0, i.jsxs)(g.Z.Overlay, {
                                        className: b.overlay,
                                        children: [
                                            (0, i.jsx)(C.Z, {
                                                title: A.Z.Messages.USER_POPOUT_ABOUT_ME,
                                                headingColor: 'header-primary',
                                                children: (0, i.jsx)(f.Z, {
                                                    userBio: null == L ? void 0 : L.bio,
                                                    userId: t.id,
                                                    animateOnHover: !0,
                                                    isHovering: y
                                                })
                                            }),
                                            (0, i.jsx)(C.Z, {
                                                title: A.Z.Messages.USER_PROFILE_MEMBER_SINCE,
                                                headingColor: 'header-primary',
                                                children: (0, i.jsx)(E.Z, { userId: t.id })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, i.jsx)(N.Z, {
                        user: t,
                        channelId: n.id
                    }),
                    (null == L ? void 0 : L.profileEffectId) != null && (0, i.jsx)(u.Z, {
                        profileEffectId: null == L ? void 0 : L.profileEffectId,
                        isHovering: y
                    })
                ]
            })
        })
    });
}
