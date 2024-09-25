n.d(t, {
    Z: function () {
        return b;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(481060),
    s = n(727637),
    l = n(100527),
    u = n(906732),
    c = n(580552),
    d = n(688465),
    _ = n(680295),
    E = n(5192),
    f = n(785717),
    h = n(221292),
    p = n(687158),
    m = n(899007),
    I = n(648052),
    T = n(867176),
    g = n(280885),
    S = n(502762),
    A = n(530),
    v = n(679332),
    N = n(544989),
    O = n(171368),
    R = n(228168),
    C = n(689938),
    y = n(451563);
function b(e) {
    let { user: t, guildId: n, channelId: r, messageId: b, roleId: L, setPopoutRef: D, closePopout: M, disableUserProfileLink: P = __OVERLAY__, newAnalyticsLocations: U = [] } = e,
        w = (0, p.ZP)(t.id, n),
        { analyticsLocations: x } = (0, u.ZP)([...U, l.Z.BITE_SIZE_PROFILE_POPOUT]),
        G = (0, f.ZB)({
            layout: 'BITE_SIZE_POPOUT',
            userId: t.id,
            guildId: n,
            channelId: r,
            messageId: b,
            roleId: L
        }),
        k = a.useRef(null),
        B = (0, s.Z)(k);
    a.useEffect(() => {
        null == D || D(null == k ? void 0 : k.current);
    }, [k, D]);
    let F = () => {
            null == M || M(),
                (0, O.openUserProfileModal)({
                    sourceAnalyticsLocations: x,
                    ...G
                });
        },
        Z = !P && (0, c.Z)(t.id),
        V = () =>
            Z
                ? (0, i.jsx)(o.MenuItem, {
                      id: 'view-profile',
                      label: C.Z.Messages.VIEW_FULL_PROFILE,
                      action: () => {
                          F(),
                              (0, h.pQ)({
                                  action: 'PRESS_VIEW_PROFILE',
                                  analyticsLocations: x,
                                  ...G
                              });
                      }
                  })
                : null;
    return (0, i.jsx)(u.Gt, {
        value: x,
        children: (0, i.jsx)(f.Mt, {
            value: G,
            children: (0, i.jsxs)(o.Dialog, {
                ref: k,
                'aria-label': t.username,
                children: [
                    (0, i.jsxs)(S.Z, {
                        user: t,
                        displayProfile: w,
                        profileType: R.y0.BITE_SIZE,
                        children: [
                            (0, i.jsx)(N.Z, {
                                profileType: R.y0.BITE_SIZE,
                                children: (0, i.jsx)(v.Z, {
                                    user: t,
                                    viewProfileItem: V()
                                })
                            }),
                            (0, i.jsxs)('header', {
                                className: y.header,
                                children: [
                                    (0, i.jsx)(T.Z, {
                                        user: t,
                                        displayProfile: w,
                                        guildId: n,
                                        profileType: R.y0.BITE_SIZE
                                    }),
                                    (0, i.jsx)(m.Z, {
                                        user: t,
                                        displayProfile: w,
                                        guildId: n,
                                        channelId: r,
                                        profileType: R.y0.BITE_SIZE,
                                        onOpenProfile: Z ? F : void 0
                                    }),
                                    t.isClyde() && (0, i.jsx)(d.Z, { className: y.headerTag })
                                ]
                            }),
                            (0, i.jsxs)(o.Scroller, {
                                fade: !0,
                                className: y.body,
                                children: [
                                    (0, i.jsx)(A.Z, {
                                        user: t,
                                        profileType: R.y0.BITE_SIZE,
                                        nickname: E.ZP.getName(n, r, t),
                                        onOpenProfile: Z ? F : void 0,
                                        tags: (0, i.jsx)(I.Z, {
                                            displayProfile: w,
                                            profileType: R.y0.BITE_SIZE,
                                            onClose: M
                                        })
                                    }),
                                    (0, i.jsx)(g.Z, {
                                        userId: t.id,
                                        userBio: null == w ? void 0 : w.bio,
                                        setLineClamp: !1,
                                        textColor: 'header-primary'
                                    })
                                ]
                            }),
                            (0, i.jsx)('footer', { className: y.footer })
                        ]
                    }),
                    (null == w ? void 0 : w.profileEffectId) != null &&
                        (0, i.jsx)(_.Z, {
                            profileEffectId: null == w ? void 0 : w.profileEffectId,
                            isHovering: B
                        })
                ]
            })
        })
    });
}
