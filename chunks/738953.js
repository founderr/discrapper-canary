n.d(t, {
    Z: function () {
        return k;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(100621),
    s = n(442837),
    o = n(481060),
    l = n(727637),
    u = n(616780),
    c = n(100527),
    d = n(906732),
    f = n(680295),
    _ = n(271383),
    h = n(430824),
    p = n(785717),
    m = n(221292),
    g = n(687158),
    E = n(326094),
    v = n(510659),
    I = n(113557),
    S = n(867176),
    T = n(169979),
    b = n(451834),
    y = n(502762),
    A = n(544989),
    N = n(481932),
    C = n(195387),
    R = n(272510),
    O = n(171368),
    D = n(978395),
    L = n(161572),
    x = n(228168),
    w = n(981631),
    M = n(388032),
    P = n(451563);
function k(e) {
    let { user: t, currentUser: n, guildId: k, channelId: U, messageId: G, roleId: B, closePopout: Z, setPopoutRef: F, disableUserProfileLink: V = __OVERLAY__, newAnalyticsLocations: H = [] } = e,
        { analyticsLocations: j } = (0, d.ZP)([...H, c.Z.BITE_SIZE_PROFILE_POPOUT]),
        Y = (0, E.Z)({
            user: t,
            currentUser: n,
            location: w.Sbl.BITE_SIZE_POPOUT
        }),
        W = (0, p.ZB)({
            layout: Y ? 'BITE_SIZE_POPOUT' : 'BITE_SIZE_POPOUT_RESTRICTED_BLOCKER_PROFILE',
            userId: t.id,
            guildId: k,
            channelId: U,
            messageId: G,
            roleId: B
        }),
        K = (0, s.e7)([h.Z], () => (null != k ? h.Z.getGuild(k) : null)),
        z = (0, s.e7)([_.ZP], () => (null != k ? _.ZP.getMember(k, t.id) : null)),
        q = i.useMemo(() => (null != k ? { [k]: [t.id] } : {}), [k, t.id]);
    (0, u.$)(q);
    let Q = i.useRef(null),
        X = (0, g.ZP)(t.id, k),
        J = (0, l.Z)(Q),
        $ = (0, v.$m)(),
        ee = (0, o.useSpring)({
            opacity: null != $.interactionType ? 1 : 0,
            config: { duration: 150 }
        });
    i.useEffect(() => {
        null == F || F(null == Q ? void 0 : Q.current);
    }, [Q, F]);
    let et = (e) => {
        null == Z || Z(),
            (0, O.openUserProfileModal)({
                sourceAnalyticsLocations: j,
                ...W,
                ...e
            });
    };
    return (0, r.jsx)(d.Gt, {
        value: j,
        children: (0, r.jsx)(p.Mt, {
            value: W,
            shouldTrackViewOnMount: null == z || null != z.fullProfileLoadedTimestamp,
            children: (0, r.jsx)(v.NJ, {
                value: $,
                children: (0, r.jsxs)(o.Dialog, {
                    ref: Q,
                    'aria-label': t.username,
                    children: [
                        (0, r.jsxs)(y.Z, {
                            user: t,
                            displayProfile: X,
                            profileType: x.y0.BITE_SIZE,
                            children: [
                                null != $.interactionType &&
                                    (0, r.jsx)(a.animated.div, {
                                        style: ee,
                                        className: P.backdrop
                                    }),
                                (0, r.jsxs)(A.Z, {
                                    profileType: x.y0.BITE_SIZE,
                                    children: [
                                        (0, r.jsx)(C.Z, {
                                            shouldShowTooltip: null === $.interactionType,
                                            user: t,
                                            guildId: k,
                                            channelId: U,
                                            onClose: Z
                                        }),
                                        (0, r.jsx)(N.Z, {
                                            shouldShowTooltip: null === $.interactionType,
                                            profileType: x.y0.BITE_SIZE,
                                            user: t
                                        }),
                                        t.id !== n.id &&
                                            (0, r.jsx)(R.Z, {
                                                user: t,
                                                guildId: k,
                                                viewProfileItem: V
                                                    ? null
                                                    : (0, r.jsx)(o.MenuItem, {
                                                          id: 'view-profile',
                                                          label: M.intl.string(M.t['+Xp3ho']),
                                                          action: () => {
                                                              et(),
                                                                  (0, m.pQ)({
                                                                      action: 'PRESS_VIEW_PROFILE',
                                                                      analyticsLocations: j,
                                                                      ...W
                                                                  });
                                                          }
                                                      })
                                            })
                                    ]
                                }),
                                (0, r.jsxs)('header', {
                                    className: P.header,
                                    children: [
                                        (0, r.jsx)(S.Z, {
                                            user: t,
                                            displayProfile: X,
                                            guildId: k,
                                            profileType: x.y0.BITE_SIZE
                                        }),
                                        (0, r.jsx)(b.Z, {
                                            userId: t.id,
                                            className: P.toast,
                                            onClose: Z
                                        }),
                                        (0, r.jsx)(I.Z, {
                                            location: 'UserProfilePopout',
                                            user: t,
                                            displayProfile: X,
                                            guildId: k,
                                            channelId: U,
                                            profileType: x.y0.BITE_SIZE,
                                            onOpenProfile: V ? void 0 : et
                                        }),
                                        (0, r.jsx)(T.Z, {
                                            location: 'UserProfilePopout',
                                            user: t,
                                            guildId: k,
                                            channelId: U,
                                            profileType: x.y0.BITE_SIZE,
                                            onCloseProfile: Z
                                        })
                                    ]
                                }),
                                (0, r.jsx)(D.Z, {
                                    user: t,
                                    currentUser: n,
                                    displayProfile: X,
                                    guild: K,
                                    isHovering: null == $.interactionType && J,
                                    onOpenProfile: V ? void 0 : et,
                                    channelId: U,
                                    onClose: Z
                                }),
                                (0, r.jsx)(L.Z, {
                                    user: t,
                                    guildId: k,
                                    channelId: U,
                                    onClose: Z
                                })
                            ]
                        }),
                        (null == X ? void 0 : X.profileEffectId) != null &&
                            (0, r.jsx)(f.Z, {
                                profileEffectId: null == X ? void 0 : X.profileEffectId,
                                isHovering: J
                            })
                    ]
                })
            })
        })
    });
}
