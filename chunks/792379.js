n.d(t, {
    Z: function () {
        return R;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(597312),
    s = n(481060),
    a = n(727637),
    o = n(410030),
    c = n(100527),
    u = n(906732),
    d = n(580552),
    h = n(688465),
    m = n(680295),
    p = n(5192),
    f = n(785717),
    g = n(221292),
    C = n(687158),
    x = n(899007),
    v = n(648052),
    _ = n(867176),
    I = n(280885),
    E = n(900927),
    b = n(678738),
    S = n(502762),
    Z = n(530),
    T = n(679332),
    N = n(544989),
    j = n(171368),
    A = n(228168),
    y = n(388032),
    P = n(337319),
    M = n(299336);
function R(e) {
    let { user: t, channel: n } = e,
        R = __OVERLAY__ || !(0, d.Z)(t.id),
        L = (0, C.ZP)(t.id),
        k = (0, o.ZP)(),
        { analyticsLocations: O } = (0, u.ZP)(c.Z.PROFILE_PANEL),
        w = (0, f.ZB)({
            layout: 'SIMPLIFIED_DM_PANEL',
            userId: t.id,
            channelId: n.id
        }),
        D = l.useRef(null),
        U = (0, a.Z)(D),
        B = (e) => {
            (0, j.openUserProfileModal)({
                sourceAnalyticsLocations: O,
                ...w,
                ...e
            });
        };
    return (0, i.jsx)(u.Gt, {
        value: O,
        children: (0, i.jsx)(f.Mt, {
            value: w,
            children: (0, i.jsxs)(S.Z, {
                ref: D,
                user: t,
                displayProfile: L,
                profileType: A.y0.PANEL,
                themeOverride: k,
                className: P.container,
                children: [
                    (0, i.jsxs)(r.u2, {
                        children: [
                            (0, i.jsx)(N.Z, {
                                profileType: A.y0.PANEL,
                                children: (0, i.jsx)(T.Z, { user: t })
                            }),
                            (0, i.jsxs)('header', {
                                className: P.header,
                                children: [
                                    (0, i.jsx)(_.Z, {
                                        user: t,
                                        displayProfile: L,
                                        profileType: A.y0.PANEL,
                                        animateOnHover: !U
                                    }),
                                    (0, i.jsx)(x.Z, {
                                        user: t,
                                        displayProfile: L,
                                        channelId: n.id,
                                        profileType: A.y0.PANEL,
                                        onOpenProfile: R ? void 0 : B
                                    }),
                                    t.isClyde() && (0, i.jsx)(h.Z, { className: P.headerTag })
                                ]
                            }),
                            (0, i.jsxs)('div', {
                                className: M.body,
                                children: [
                                    (0, i.jsx)(Z.Z, {
                                        user: t,
                                        profileType: A.y0.PANEL,
                                        nickname: p.ZP.getName(null, n.id, t),
                                        pronouns: null == L ? void 0 : L.pronouns,
                                        onOpenProfile: R ? void 0 : B,
                                        tags: (0, i.jsx)(v.Z, {
                                            displayProfile: L,
                                            profileType: A.y0.PANEL
                                        })
                                    }),
                                    (0, i.jsxs)(S.Z.Overlay, {
                                        className: M.overlay,
                                        children: [
                                            (0, i.jsx)(b.Z, {
                                                heading: y.intl.string(y.t['61W33d']),
                                                headingColor: 'header-primary',
                                                children: (0, i.jsx)(I.Z, {
                                                    userBio: null == L ? void 0 : L.bio,
                                                    userId: t.id,
                                                    animateOnHover: !0,
                                                    isHovering: U
                                                })
                                            }),
                                            (0, i.jsx)(b.Z, {
                                                heading: y.intl.string(y.t['A//N4u']),
                                                headingColor: 'header-primary',
                                                children: (0, i.jsx)(E.Z, { userId: t.id })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    !R &&
                        (0, i.jsx)('footer', {
                            className: P.footer,
                            children: (0, i.jsx)(s.Button, {
                                fullWidth: !0,
                                size: s.Button.Sizes.LARGE,
                                look: s.Button.Looks.BLANK,
                                color: P.footerButtonColor,
                                onClick: () => {
                                    B(),
                                        (0, g.pQ)({
                                            action: 'PRESS_VIEW_PROFILE',
                                            analyticsLocations: O,
                                            ...w
                                        });
                                },
                                children: y.intl.string(y.t['+Xp3ho'])
                            })
                        }),
                    (null == L ? void 0 : L.profileEffectId) != null &&
                        (0, i.jsx)(m.Z, {
                            profileEffectId: null == L ? void 0 : L.profileEffectId,
                            isHovering: U
                        })
                ]
            })
        })
    });
}
