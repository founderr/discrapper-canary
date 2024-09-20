n.d(t, {
    Z: function () {
        return x;
    }
}),
    n(47120);
var r = n(735250),
    i = n(470079),
    a = n(442837),
    s = n(481060),
    o = n(727637),
    l = n(58540),
    u = n(100527),
    c = n(906732),
    d = n(680295),
    _ = n(271383),
    E = n(430824),
    f = n(785717),
    h = n(221292),
    p = n(687158),
    I = n(326094),
    m = n(510659),
    T = n(113557),
    S = n(867176),
    g = n(169979),
    A = n(119096),
    N = n(502762),
    O = n(544989),
    R = n(481932),
    v = n(195387),
    C = n(272510),
    y = n(171368),
    L = n(978395),
    D = n(161572),
    b = n(228168),
    M = n(981631),
    P = n(689938),
    U = n(451563);
function w(e) {
    let { user: t, currentUser: n, guildId: w, channelId: x, messageId: G, roleId: k, closePopout: B, setPopoutRef: F, disableUserProfileLink: V = __OVERLAY__, newAnalyticsLocations: H = [] } = e,
        { analyticsLocations: Z } = (0, c.ZP)([...H, u.Z.BITE_SIZE_PROFILE_POPOUT]),
        Y = (0, I.Z)({
            user: t,
            currentUser: n,
            location: M.Sbl.BITE_SIZE_POPOUT
        }),
        j = (0, f.ZB)({
            layout: Y ? 'BITE_SIZE_POPOUT' : 'BITE_SIZE_POPOUT_RESTRICTED_BLOCKER_PROFILE',
            userId: t.id,
            guildId: w,
            channelId: x,
            messageId: G,
            roleId: k
        }),
        W = (0, a.e7)([E.Z], () => (null != w ? E.Z.getGuild(w) : null)),
        K = (0, a.e7)([_.ZP], () => (null != w ? _.ZP.getMember(w, t.id) : null)),
        z = i.useMemo(() => (null != w ? { [w]: [t.id] } : {}), [w, t.id]);
    (0, l.$)(z);
    let q = i.useRef(null),
        Q = (0, p.ZP)(t.id, w),
        X = (0, o.Z)(q),
        { interactionType: $ } = (0, m.X)();
    i.useEffect(() => {
        null == F || F(null == q ? void 0 : q.current);
    }, [q, F]);
    let J = (e) => {
        null == B || B(),
            (0, y.openUserProfileModal)({
                sourceAnalyticsLocations: Z,
                ...j,
                ...e
            });
    };
    return (0, r.jsx)(c.Gt, {
        value: Z,
        children: (0, r.jsx)(f.Mt, {
            value: j,
            shouldTrackViewOnMount: null == K || null != K.fullProfileLoadedTimestamp,
            children: (0, r.jsxs)(s.Dialog, {
                ref: q,
                'aria-label': t.username,
                children: [
                    (0, r.jsxs)(N.Z, {
                        user: t,
                        displayProfile: Q,
                        profileType: b.y0.BITE_SIZE,
                        children: [
                            null != $ && (0, r.jsx)('div', { className: U.backdrop }),
                            (0, r.jsxs)(O.Z, {
                                profileType: b.y0.BITE_SIZE,
                                children: [
                                    (0, r.jsx)(v.Z, {
                                        user: t,
                                        guildId: w,
                                        channelId: x,
                                        onClose: B
                                    }),
                                    (0, r.jsx)(R.Z, {
                                        profileType: b.y0.BITE_SIZE,
                                        user: t
                                    }),
                                    t.id !== n.id &&
                                        (0, r.jsx)(C.Z, {
                                            user: t,
                                            guildId: w,
                                            viewProfileItem: V
                                                ? null
                                                : (0, r.jsx)(s.MenuItem, {
                                                      id: 'view-profile',
                                                      label: P.Z.Messages.VIEW_FULL_PROFILE,
                                                      action: () => {
                                                          J(),
                                                              (0, h.pQ)({
                                                                  action: 'PRESS_VIEW_PROFILE',
                                                                  analyticsLocations: Z,
                                                                  ...j
                                                              });
                                                      }
                                                  })
                                        })
                                ]
                            }),
                            (0, r.jsxs)('header', {
                                className: U.header,
                                children: [
                                    (0, r.jsx)(S.Z, {
                                        user: t,
                                        displayProfile: Q,
                                        guildId: w,
                                        profileType: b.y0.BITE_SIZE
                                    }),
                                    (0, r.jsx)(A.Z, {
                                        userId: t.id,
                                        className: U.toast
                                    }),
                                    (0, r.jsx)(T.Z, {
                                        location: 'UserProfilePopout',
                                        user: t,
                                        displayProfile: Q,
                                        guildId: w,
                                        channelId: x,
                                        profileType: b.y0.BITE_SIZE,
                                        onOpenProfile: V ? void 0 : J
                                    }),
                                    (0, r.jsx)(g.Z, {
                                        location: 'UserProfilePopout',
                                        user: t,
                                        guildId: w,
                                        channelId: x,
                                        profileType: b.y0.BITE_SIZE,
                                        onClose: B
                                    })
                                ]
                            }),
                            (0, r.jsx)(L.Z, {
                                user: t,
                                currentUser: n,
                                displayProfile: Q,
                                guild: W,
                                isHovering: X,
                                onOpenProfile: V ? void 0 : J,
                                channelId: x,
                                onClose: B
                            }),
                            (0, r.jsx)(D.Z, {
                                user: t,
                                guildId: w,
                                channelId: x,
                                onClose: B
                            })
                        ]
                    }),
                    (null == Q ? void 0 : Q.profileEffectId) != null &&
                        (0, r.jsx)(d.Z, {
                            profileEffectId: null == Q ? void 0 : Q.profileEffectId,
                            isHovering: X
                        })
                ]
            })
        })
    });
}
function x(e) {
    return (0, r.jsx)(m.N, { children: (0, r.jsx)(w, { ...e }) });
}
