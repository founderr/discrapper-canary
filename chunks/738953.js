n.d(t, {
    Z: function () {
        return G;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(526629),
    s = n(442837),
    l = n(481060),
    u = n(727637),
    c = n(58540),
    d = n(100527),
    _ = n(906732),
    E = n(680295),
    f = n(271383),
    h = n(430824),
    p = n(785717),
    m = n(221292),
    I = n(687158),
    T = n(326094),
    g = n(510659),
    S = n(113557),
    A = n(867176),
    v = n(169979),
    N = n(119096),
    O = n(502762),
    R = n(544989),
    C = n(481932),
    y = n(195387),
    L = n(272510),
    b = n(171368),
    D = n(978395),
    M = n(161572),
    P = n(228168),
    U = n(981631),
    w = n(689938),
    x = n(451563);
function G(e) {
    let { user: t, currentUser: n, guildId: r, channelId: G, messageId: k, roleId: B, closePopout: F, setPopoutRef: Z, disableUserProfileLink: V = __OVERLAY__, newAnalyticsLocations: H = [] } = e,
        { analyticsLocations: Y } = (0, _.ZP)([...H, d.Z.BITE_SIZE_PROFILE_POPOUT]),
        j = (0, T.Z)({
            user: t,
            currentUser: n,
            location: U.Sbl.BITE_SIZE_POPOUT
        }),
        W = (0, p.ZB)({
            layout: j ? 'BITE_SIZE_POPOUT' : 'BITE_SIZE_POPOUT_RESTRICTED_BLOCKER_PROFILE',
            userId: t.id,
            guildId: r,
            channelId: G,
            messageId: k,
            roleId: B
        }),
        K = (0, s.e7)([h.Z], () => (null != r ? h.Z.getGuild(r) : null)),
        z = (0, s.e7)([f.ZP], () => (null != r ? f.ZP.getMember(r, t.id) : null)),
        q = a.useMemo(() => (null != r ? { [r]: [t.id] } : {}), [r, t.id]);
    (0, c.$)(q);
    let Q = a.useRef(null),
        X = (0, I.ZP)(t.id, r),
        $ = (0, u.Z)(Q),
        J = (0, g.$m)(),
        ee = (0, l.useSpring)({
            opacity: null != J.interactionType ? 1 : 0,
            config: { duration: 150 }
        });
    a.useEffect(() => {
        null == Z || Z(null == Q ? void 0 : Q.current);
    }, [Q, Z]);
    let et = (e) => {
            null == F || F(),
                (0, b.openUserProfileModal)({
                    sourceAnalyticsLocations: Y,
                    ...W,
                    ...e
                });
        },
        en = () =>
            V
                ? null
                : (0, i.jsx)(l.MenuItem, {
                      id: 'view-profile',
                      label: w.Z.Messages.VIEW_FULL_PROFILE,
                      action: () => {
                          et(),
                              (0, m.pQ)({
                                  action: 'PRESS_VIEW_PROFILE',
                                  analyticsLocations: Y,
                                  ...W
                              });
                      }
                  });
    return (0, i.jsx)(_.Gt, {
        value: Y,
        children: (0, i.jsx)(p.Mt, {
            value: W,
            shouldTrackViewOnMount: null == z || null != z.fullProfileLoadedTimestamp,
            children: (0, i.jsx)(g.NJ, {
                value: J,
                children: (0, i.jsxs)(l.Dialog, {
                    ref: Q,
                    'aria-label': t.username,
                    children: [
                        (0, i.jsxs)(O.Z, {
                            user: t,
                            displayProfile: X,
                            profileType: P.y0.BITE_SIZE,
                            children: [
                                null != J.interactionType &&
                                    (0, i.jsx)(o.animated.div, {
                                        style: ee,
                                        className: x.backdrop
                                    }),
                                (0, i.jsxs)(R.Z, {
                                    profileType: P.y0.BITE_SIZE,
                                    children: [
                                        (0, i.jsx)(y.Z, {
                                            user: t,
                                            guildId: r,
                                            channelId: G,
                                            onClose: F
                                        }),
                                        (0, i.jsx)(C.Z, {
                                            profileType: P.y0.BITE_SIZE,
                                            user: t
                                        }),
                                        t.id !== n.id &&
                                            (0, i.jsx)(L.Z, {
                                                user: t,
                                                guildId: r,
                                                viewProfileItem: en()
                                            })
                                    ]
                                }),
                                (0, i.jsxs)('header', {
                                    className: x.header,
                                    children: [
                                        (0, i.jsx)(A.Z, {
                                            user: t,
                                            displayProfile: X,
                                            guildId: r,
                                            profileType: P.y0.BITE_SIZE
                                        }),
                                        (0, i.jsx)(N.Z, {
                                            userId: t.id,
                                            className: x.toast,
                                            onClose: F
                                        }),
                                        (0, i.jsx)(S.Z, {
                                            location: 'UserProfilePopout',
                                            user: t,
                                            displayProfile: X,
                                            guildId: r,
                                            channelId: G,
                                            profileType: P.y0.BITE_SIZE,
                                            onOpenProfile: V ? void 0 : et
                                        }),
                                        (0, i.jsx)(v.Z, {
                                            location: 'UserProfilePopout',
                                            user: t,
                                            guildId: r,
                                            channelId: G,
                                            profileType: P.y0.BITE_SIZE,
                                            onCloseProfile: F
                                        })
                                    ]
                                }),
                                (0, i.jsx)(D.Z, {
                                    user: t,
                                    currentUser: n,
                                    displayProfile: X,
                                    guild: K,
                                    isHovering: null == J.interactionType && $,
                                    onOpenProfile: V ? void 0 : et,
                                    channelId: G,
                                    onClose: F
                                }),
                                (0, i.jsx)(M.Z, {
                                    user: t,
                                    guildId: r,
                                    channelId: G,
                                    onClose: F
                                })
                            ]
                        }),
                        (null == X ? void 0 : X.profileEffectId) != null &&
                            (0, i.jsx)(E.Z, {
                                profileEffectId: null == X ? void 0 : X.profileEffectId,
                                isHovering: $
                            })
                    ]
                })
            })
        })
    });
}
