n.d(t, {
    Z: function () {
        return C;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(442837),
    s = n(481060),
    o = n(727637),
    l = n(100527),
    u = n(906732),
    c = n(271383),
    d = n(430824),
    f = n(785717),
    _ = n(221292),
    p = n(687158),
    h = n(899007),
    m = n(867176),
    g = n(438163),
    E = n(502762),
    v = n(952124),
    I = n(544989),
    b = n(171368),
    S = n(895697),
    T = n(161572),
    y = n(228168),
    A = n(388032),
    N = n(451563);
function C(e) {
    let { user: t, currentUser: n, guildId: C, channelId: R, messageId: O, roleId: D, closePopout: L, setPopoutRef: x, disableUserProfileLink: w = __OVERLAY__, newAnalyticsLocations: M = [] } = e,
        { analyticsLocations: P } = (0, u.ZP)([...M, l.Z.BITE_SIZE_PROFILE_POPOUT]),
        k = (0, f.ZB)({
            layout: 'BITE_SIZE_POPOUT',
            userId: t.id,
            guildId: C,
            channelId: R,
            messageId: O,
            roleId: D
        }),
        U = (0, p.ZP)(t.id, C),
        G = (0, a.e7)([d.Z], () => (null != C ? d.Z.getGuild(C) : null)),
        B = (0, a.e7)([c.ZP], () => (null != C ? c.ZP.getMember(C, t.id) : null)),
        Z = i.useRef(null),
        F = (0, o.Z)(Z);
    i.useEffect(() => {
        null == x || x(null == Z ? void 0 : Z.current);
    }, [Z, x]);
    let V = (e) => {
        null == L || L(),
            (0, b.openUserProfileModal)({
                sourceAnalyticsLocations: P,
                ...k,
                ...e
            });
    };
    return (0, r.jsx)(u.Gt, {
        value: P,
        children: (0, r.jsx)(f.Mt, {
            value: k,
            shouldTrackViewOnMount: null == B || null != B.fullProfileLoadedTimestamp,
            children: (0, r.jsx)(s.Dialog, {
                ref: Z,
                'aria-label': t.username,
                children: (0, r.jsxs)(E.Z, {
                    user: t,
                    displayProfile: U,
                    profileType: y.y0.BITE_SIZE,
                    children: [
                        (0, r.jsx)(I.Z, {
                            profileType: y.y0.BITE_SIZE,
                            children: (0, r.jsx)(v.Z, {
                                user: t,
                                guildId: C,
                                viewProfileItem: w
                                    ? null
                                    : (0, r.jsx)(s.MenuItem, {
                                          id: 'view-profile',
                                          label: A.intl.string(A.t['+Xp3ho']),
                                          action: () => {
                                              V(),
                                                  (0, _.pQ)({
                                                      action: 'PRESS_VIEW_PROFILE',
                                                      analyticsLocations: P,
                                                      ...k
                                                  });
                                          }
                                      })
                            })
                        }),
                        (0, r.jsxs)('header', {
                            className: N.header,
                            children: [
                                (0, r.jsx)(m.Z, {
                                    user: t,
                                    displayProfile: U,
                                    guildId: C,
                                    profileType: y.y0.BITE_SIZE
                                }),
                                (0, r.jsx)(h.Z, {
                                    user: t,
                                    displayProfile: U,
                                    guildId: C,
                                    channelId: R,
                                    profileType: y.y0.BITE_SIZE,
                                    onOpenProfile: w ? void 0 : V
                                }),
                                (0, r.jsx)(g.Z, {
                                    user: t,
                                    profileType: y.y0.BITE_SIZE,
                                    onCloseProfile: L
                                })
                            ]
                        }),
                        (0, r.jsx)(S.Z, {
                            user: t,
                            currentUser: n,
                            displayProfile: U,
                            guild: G,
                            isHovering: F,
                            onOpenProfile: w ? void 0 : V,
                            channelId: R,
                            onClose: L
                        }),
                        (0, r.jsx)(T.Z, {
                            user: t,
                            guildId: C,
                            channelId: R,
                            onClose: L
                        })
                    ]
                })
            })
        })
    });
}
