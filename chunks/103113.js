n.d(t, {
    Z: function () {
        return R;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(481060),
    s = n(727637),
    o = n(100527),
    l = n(906732),
    u = n(580552),
    c = n(688465),
    d = n(680295),
    f = n(5192),
    _ = n(785717),
    p = n(221292),
    h = n(687158),
    m = n(899007),
    g = n(648052),
    E = n(867176),
    v = n(280885),
    I = n(502762),
    b = n(530),
    T = n(679332),
    S = n(544989),
    y = n(171368),
    A = n(228168),
    N = n(388032),
    C = n(591156);
function R(e) {
    let { user: t, guildId: n, channelId: R, messageId: O, roleId: D, setPopoutRef: L, closePopout: x, disableUserProfileLink: w = __OVERLAY__, newAnalyticsLocations: M = [] } = e,
        P = (0, h.ZP)(t.id, n),
        { analyticsLocations: k } = (0, l.ZP)([...M, o.Z.BITE_SIZE_PROFILE_POPOUT]),
        U = (0, _.ZB)({
            layout: 'BITE_SIZE_POPOUT',
            userId: t.id,
            guildId: n,
            channelId: R,
            messageId: O,
            roleId: D
        }),
        B = i.useRef(null),
        G = (0, s.Z)(B);
    i.useEffect(() => {
        null == L || L(null == B ? void 0 : B.current);
    }, [B, L]);
    let Z = () => {
            null == x || x(),
                (0, y.openUserProfileModal)({
                    sourceAnalyticsLocations: k,
                    ...U
                });
        },
        F = !w && (0, u.Z)(t.id);
    return (0, r.jsx)(l.Gt, {
        value: k,
        children: (0, r.jsx)(_.Mt, {
            value: U,
            children: (0, r.jsxs)(a.Dialog, {
                ref: B,
                'aria-label': t.username,
                children: [
                    (0, r.jsxs)(I.Z, {
                        user: t,
                        displayProfile: P,
                        profileType: A.y0.BITE_SIZE,
                        children: [
                            (0, r.jsx)(S.Z, {
                                profileType: A.y0.BITE_SIZE,
                                children: (0, r.jsx)(T.Z, {
                                    user: t,
                                    viewProfileItem: F
                                        ? (0, r.jsx)(a.MenuItem, {
                                              id: 'view-profile',
                                              label: N.intl.string(N.t['+Xp3ho']),
                                              action: () => {
                                                  Z(),
                                                      (0, p.pQ)({
                                                          action: 'PRESS_VIEW_PROFILE',
                                                          analyticsLocations: k,
                                                          ...U
                                                      });
                                              }
                                          })
                                        : null
                                })
                            }),
                            (0, r.jsxs)('header', {
                                className: C.header,
                                children: [
                                    (0, r.jsx)(E.Z, {
                                        user: t,
                                        displayProfile: P,
                                        guildId: n,
                                        profileType: A.y0.BITE_SIZE
                                    }),
                                    (0, r.jsx)(m.Z, {
                                        user: t,
                                        displayProfile: P,
                                        guildId: n,
                                        channelId: R,
                                        profileType: A.y0.BITE_SIZE,
                                        onOpenProfile: F ? Z : void 0
                                    }),
                                    t.isClyde() && (0, r.jsx)(c.Z, { className: C.headerTag })
                                ]
                            }),
                            (0, r.jsxs)(a.Scroller, {
                                fade: !0,
                                className: C.body,
                                children: [
                                    (0, r.jsx)(b.Z, {
                                        user: t,
                                        profileType: A.y0.BITE_SIZE,
                                        nickname: f.ZP.getName(n, R, t),
                                        onOpenProfile: F ? Z : void 0,
                                        tags: (0, r.jsx)(g.Z, {
                                            displayProfile: P,
                                            profileType: A.y0.BITE_SIZE,
                                            onClose: x
                                        })
                                    }),
                                    (0, r.jsx)(v.Z, {
                                        userId: t.id,
                                        userBio: null == P ? void 0 : P.bio,
                                        setLineClamp: !1,
                                        textColor: 'header-primary'
                                    })
                                ]
                            }),
                            (0, r.jsx)('footer', { className: C.footer })
                        ]
                    }),
                    (null == P ? void 0 : P.profileEffectId) != null &&
                        (0, r.jsx)(d.Z, {
                            profileEffectId: null == P ? void 0 : P.profileEffectId,
                            isHovering: G
                        })
                ]
            })
        })
    });
}
