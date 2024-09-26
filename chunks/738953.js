n.d(t, {
    Z: function () {
        return x;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(442837),
    s = n(481060),
    l = n(727637),
    u = n(58540),
    c = n(100527),
    d = n(906732),
    _ = n(680295),
    E = n(271383),
    f = n(430824),
    h = n(785717),
    p = n(221292),
    m = n(687158),
    I = n(326094),
    T = n(510659),
    g = n(113557),
    S = n(867176),
    A = n(169979),
    v = n(119096),
    N = n(502762),
    O = n(544989),
    R = n(481932),
    C = n(195387),
    y = n(272510),
    L = n(171368),
    b = n(978395),
    D = n(161572),
    M = n(228168),
    P = n(981631),
    U = n(689938),
    w = n(451563);
function x(e) {
    let { user: t, currentUser: n, guildId: r, channelId: x, messageId: G, roleId: k, closePopout: B, setPopoutRef: F, disableUserProfileLink: Z = __OVERLAY__, newAnalyticsLocations: V = [] } = e,
        { analyticsLocations: H } = (0, d.ZP)([...V, c.Z.BITE_SIZE_PROFILE_POPOUT]),
        Y = (0, I.Z)({
            user: t,
            currentUser: n,
            location: P.Sbl.BITE_SIZE_POPOUT
        }),
        j = (0, h.ZB)({
            layout: Y ? 'BITE_SIZE_POPOUT' : 'BITE_SIZE_POPOUT_RESTRICTED_BLOCKER_PROFILE',
            userId: t.id,
            guildId: r,
            channelId: x,
            messageId: G,
            roleId: k
        }),
        W = (0, o.e7)([f.Z], () => (null != r ? f.Z.getGuild(r) : null)),
        K = (0, o.e7)([E.ZP], () => (null != r ? E.ZP.getMember(r, t.id) : null)),
        z = a.useMemo(() => (null != r ? { [r]: [t.id] } : {}), [r, t.id]);
    (0, u.$)(z);
    let q = a.useRef(null),
        Q = (0, m.ZP)(t.id, r),
        X = (0, l.Z)(q),
        $ = (0, T.$m)();
    a.useEffect(() => {
        null == F || F(null == q ? void 0 : q.current);
    }, [q, F]);
    let J = (e) => {
            null == B || B(),
                (0, L.openUserProfileModal)({
                    sourceAnalyticsLocations: H,
                    ...j,
                    ...e
                });
        },
        ee = () =>
            Z
                ? null
                : (0, i.jsx)(s.MenuItem, {
                      id: 'view-profile',
                      label: U.Z.Messages.VIEW_FULL_PROFILE,
                      action: () => {
                          J(),
                              (0, p.pQ)({
                                  action: 'PRESS_VIEW_PROFILE',
                                  analyticsLocations: H,
                                  ...j
                              });
                      }
                  });
    return (0, i.jsx)(d.Gt, {
        value: H,
        children: (0, i.jsx)(h.Mt, {
            value: j,
            shouldTrackViewOnMount: null == K || null != K.fullProfileLoadedTimestamp,
            children: (0, i.jsx)(T.NJ, {
                value: $,
                children: (0, i.jsxs)(s.Dialog, {
                    ref: q,
                    'aria-label': t.username,
                    children: [
                        (0, i.jsxs)(N.Z, {
                            user: t,
                            displayProfile: Q,
                            profileType: M.y0.BITE_SIZE,
                            children: [
                                null != $.interactionType && (0, i.jsx)('div', { className: w.backdrop }),
                                (0, i.jsxs)(O.Z, {
                                    profileType: M.y0.BITE_SIZE,
                                    children: [
                                        (0, i.jsx)(C.Z, {
                                            user: t,
                                            guildId: r,
                                            channelId: x,
                                            onClose: B
                                        }),
                                        (0, i.jsx)(R.Z, {
                                            profileType: M.y0.BITE_SIZE,
                                            user: t
                                        }),
                                        t.id !== n.id &&
                                            (0, i.jsx)(y.Z, {
                                                user: t,
                                                guildId: r,
                                                viewProfileItem: ee()
                                            })
                                    ]
                                }),
                                (0, i.jsxs)('header', {
                                    className: w.header,
                                    children: [
                                        (0, i.jsx)(S.Z, {
                                            user: t,
                                            displayProfile: Q,
                                            guildId: r,
                                            profileType: M.y0.BITE_SIZE
                                        }),
                                        (0, i.jsx)(v.Z, {
                                            userId: t.id,
                                            className: w.toast
                                        }),
                                        (0, i.jsx)(g.Z, {
                                            location: 'UserProfilePopout',
                                            user: t,
                                            displayProfile: Q,
                                            guildId: r,
                                            channelId: x,
                                            profileType: M.y0.BITE_SIZE,
                                            onOpenProfile: Z ? void 0 : J
                                        }),
                                        (0, i.jsx)(A.Z, {
                                            location: 'UserProfilePopout',
                                            user: t,
                                            guildId: r,
                                            channelId: x,
                                            profileType: M.y0.BITE_SIZE,
                                            onCloseProfile: B
                                        })
                                    ]
                                }),
                                (0, i.jsx)(b.Z, {
                                    user: t,
                                    currentUser: n,
                                    displayProfile: Q,
                                    guild: W,
                                    isHovering: X,
                                    onOpenProfile: Z ? void 0 : J,
                                    channelId: x,
                                    onClose: B
                                }),
                                (0, i.jsx)(D.Z, {
                                    user: t,
                                    guildId: r,
                                    channelId: x,
                                    onClose: B
                                })
                            ]
                        }),
                        (null == Q ? void 0 : Q.profileEffectId) != null &&
                            (0, i.jsx)(_.Z, {
                                profileEffectId: null == Q ? void 0 : Q.profileEffectId,
                                isHovering: X
                            })
                    ]
                })
            })
        })
    });
}
