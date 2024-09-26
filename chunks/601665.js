n.d(t, {
    Z: function () {
        return y;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(442837),
    s = n(481060),
    l = n(727637),
    u = n(100527),
    c = n(906732),
    d = n(271383),
    _ = n(430824),
    E = n(785717),
    f = n(221292),
    h = n(687158),
    p = n(899007),
    m = n(867176),
    I = n(438163),
    T = n(502762),
    g = n(952124),
    S = n(544989),
    A = n(171368),
    v = n(895697),
    N = n(161572),
    O = n(228168),
    R = n(689938),
    C = n(451563);
function y(e) {
    let { user: t, currentUser: n, guildId: r, channelId: y, messageId: L, roleId: b, closePopout: D, setPopoutRef: M, disableUserProfileLink: P = __OVERLAY__, newAnalyticsLocations: U = [] } = e,
        { analyticsLocations: w } = (0, c.ZP)([...U, u.Z.BITE_SIZE_PROFILE_POPOUT]),
        x = (0, E.ZB)({
            layout: 'BITE_SIZE_POPOUT',
            userId: t.id,
            guildId: r,
            channelId: y,
            messageId: L,
            roleId: b
        }),
        G = (0, h.ZP)(t.id, r),
        k = (0, o.e7)([_.Z], () => (null != r ? _.Z.getGuild(r) : null)),
        B = (0, o.e7)([d.ZP], () => (null != r ? d.ZP.getMember(r, t.id) : null)),
        F = a.useRef(null),
        Z = (0, l.Z)(F);
    a.useEffect(() => {
        null == M || M(null == F ? void 0 : F.current);
    }, [F, M]);
    let V = (e) => {
            null == D || D(),
                (0, A.openUserProfileModal)({
                    sourceAnalyticsLocations: w,
                    ...x,
                    ...e
                });
        },
        H = () =>
            P
                ? null
                : (0, i.jsx)(s.MenuItem, {
                      id: 'view-profile',
                      label: R.Z.Messages.VIEW_FULL_PROFILE,
                      action: () => {
                          V(),
                              (0, f.pQ)({
                                  action: 'PRESS_VIEW_PROFILE',
                                  analyticsLocations: w,
                                  ...x
                              });
                      }
                  });
    return (0, i.jsx)(c.Gt, {
        value: w,
        children: (0, i.jsx)(E.Mt, {
            value: x,
            shouldTrackViewOnMount: null == B || null != B.fullProfileLoadedTimestamp,
            children: (0, i.jsx)(s.Dialog, {
                ref: F,
                'aria-label': t.username,
                children: (0, i.jsxs)(T.Z, {
                    user: t,
                    displayProfile: G,
                    profileType: O.y0.BITE_SIZE,
                    children: [
                        (0, i.jsx)(S.Z, {
                            profileType: O.y0.BITE_SIZE,
                            children: (0, i.jsx)(g.Z, {
                                user: t,
                                guildId: r,
                                viewProfileItem: H()
                            })
                        }),
                        (0, i.jsxs)('header', {
                            className: C.header,
                            children: [
                                (0, i.jsx)(m.Z, {
                                    user: t,
                                    displayProfile: G,
                                    guildId: r,
                                    profileType: O.y0.BITE_SIZE
                                }),
                                (0, i.jsx)(p.Z, {
                                    user: t,
                                    displayProfile: G,
                                    guildId: r,
                                    channelId: y,
                                    profileType: O.y0.BITE_SIZE,
                                    onOpenProfile: P ? void 0 : V
                                }),
                                (0, i.jsx)(I.Z, {
                                    user: t,
                                    profileType: O.y0.BITE_SIZE,
                                    onCloseProfile: D
                                })
                            ]
                        }),
                        (0, i.jsx)(v.Z, {
                            user: t,
                            currentUser: n,
                            displayProfile: G,
                            guild: k,
                            isHovering: Z,
                            onOpenProfile: P ? void 0 : V,
                            channelId: y,
                            onClose: D
                        }),
                        (0, i.jsx)(N.Z, {
                            user: t,
                            guildId: r,
                            channelId: y,
                            onClose: D
                        })
                    ]
                })
            })
        })
    });
}
