n.d(t, {
    Z: function () {
        return P;
    }
});
var i = n(200651),
    s = n(192379),
    a = n(597312),
    l = n(481060),
    r = n(727637),
    o = n(410030),
    c = n(100527),
    u = n(906732),
    d = n(580552),
    h = n(688465),
    p = n(680295),
    m = n(5192),
    _ = n(785717),
    f = n(221292),
    E = n(687158),
    g = n(899007),
    C = n(648052),
    I = n(867176),
    T = n(280885),
    x = n(900927),
    v = n(678738),
    S = n(502762),
    N = n(530),
    A = n(679332),
    Z = n(544989),
    M = n(171368),
    b = n(228168),
    R = n(689938),
    L = n(337319),
    j = n(299336);
function P(e) {
    let { user: t, channel: n } = e,
        P = __OVERLAY__ || !(0, d.Z)(t.id),
        O = (0, E.ZP)(t.id),
        y = (0, o.ZP)(),
        { analyticsLocations: D } = (0, u.ZP)(c.Z.PROFILE_PANEL),
        U = (0, _.ZB)({
            layout: 'SIMPLIFIED_DM_PANEL',
            userId: t.id,
            channelId: n.id
        }),
        k = s.useRef(null),
        w = (0, r.Z)(k),
        B = (e) => {
            (0, M.openUserProfileModal)({
                sourceAnalyticsLocations: D,
                ...U,
                ...e
            });
        };
    return (0, i.jsx)(u.Gt, {
        value: D,
        children: (0, i.jsx)(_.Mt, {
            value: U,
            children: (0, i.jsxs)(S.Z, {
                ref: k,
                user: t,
                displayProfile: O,
                profileType: b.y0.PANEL,
                themeOverride: y,
                className: L.container,
                children: [
                    (0, i.jsxs)(a.u2, {
                        children: [
                            (0, i.jsx)(Z.Z, {
                                profileType: b.y0.PANEL,
                                children: (0, i.jsx)(A.Z, { user: t })
                            }),
                            (0, i.jsxs)('header', {
                                className: L.header,
                                children: [
                                    (0, i.jsx)(I.Z, {
                                        user: t,
                                        displayProfile: O,
                                        profileType: b.y0.PANEL,
                                        animateOnHover: !w
                                    }),
                                    (0, i.jsx)(g.Z, {
                                        user: t,
                                        displayProfile: O,
                                        channelId: n.id,
                                        profileType: b.y0.PANEL,
                                        onOpenProfile: P ? void 0 : B
                                    }),
                                    t.isClyde() && (0, i.jsx)(h.Z, { className: L.headerTag })
                                ]
                            }),
                            (0, i.jsxs)('div', {
                                className: j.body,
                                children: [
                                    (0, i.jsx)(N.Z, {
                                        user: t,
                                        profileType: b.y0.PANEL,
                                        nickname: m.ZP.getName(null, n.id, t),
                                        pronouns: null == O ? void 0 : O.pronouns,
                                        onOpenProfile: P ? void 0 : B,
                                        tags: (0, i.jsx)(C.Z, {
                                            displayProfile: O,
                                            profileType: b.y0.PANEL
                                        })
                                    }),
                                    (0, i.jsxs)(S.Z.Overlay, {
                                        className: j.overlay,
                                        children: [
                                            (0, i.jsx)(v.Z, {
                                                heading: R.Z.Messages.USER_POPOUT_ABOUT_ME,
                                                headingColor: 'header-primary',
                                                children: (0, i.jsx)(T.Z, {
                                                    userBio: null == O ? void 0 : O.bio,
                                                    userId: t.id,
                                                    animateOnHover: !0,
                                                    isHovering: w
                                                })
                                            }),
                                            (0, i.jsx)(v.Z, {
                                                heading: R.Z.Messages.BOT_PROFILE_CREATED_ON,
                                                headingColor: 'header-primary',
                                                children: (0, i.jsx)(x.Z, { userId: t.id })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    !P &&
                        (0, i.jsx)('footer', {
                            className: L.footer,
                            children: (0, i.jsx)(l.Button, {
                                fullWidth: !0,
                                size: l.Button.Sizes.LARGE,
                                look: l.Button.Looks.BLANK,
                                color: L.footerButtonColor,
                                onClick: () => {
                                    B(),
                                        (0, f.pQ)({
                                            action: 'PRESS_VIEW_PROFILE',
                                            analyticsLocations: D,
                                            ...U
                                        });
                                },
                                children: R.Z.Messages.VIEW_FULL_PROFILE
                            })
                        }),
                    (null == O ? void 0 : O.profileEffectId) != null &&
                        (0, i.jsx)(p.Z, {
                            profileEffectId: null == O ? void 0 : O.profileEffectId,
                            isHovering: w
                        })
                ]
            })
        })
    });
}
