n.d(t, {
    Z: function () {
        return M;
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
    p = n(318661),
    I = n(78675),
    m = n(113557),
    T = n(169979),
    g = n(119096),
    S = n(502762),
    A = n(544989),
    N = n(481932),
    v = n(195387),
    O = n(272510),
    R = n(171368),
    C = n(958120),
    y = n(215633),
    D = n(228168),
    L = n(689938),
    b = n(122269);
function M(e) {
    let { user: t, currentUser: n, guildId: M, channelId: P, messageId: U, roleId: w, closePopout: x, setPopoutRef: G, disableUserProfileLink: k = __OVERLAY__, newAnalyticsLocations: B = [] } = e,
        { analyticsLocations: F } = (0, c.ZP)([...B, u.Z.BITE_SIZE_PROFILE_POPOUT]),
        V = (0, f.ZB)({
            layout: 'BITE_SIZE_POPOUT',
            userId: t.id,
            guildId: M,
            channelId: P,
            messageId: U,
            roleId: w
        }),
        H = (0, a.e7)([E.Z], () => (null != M ? E.Z.getGuild(M) : null)),
        Z = (0, a.e7)([_.ZP], () => (null != M ? _.ZP.getMember(M, t.id) : null)),
        Y = i.useMemo(() => (null != M ? { [M]: [t.id] } : {}), [M, t.id]);
    (0, l.$)(Y);
    let j = i.useRef(null),
        W = (0, p.ZP)(t.id, M),
        K = (0, o.Z)(j),
        [z, q] = i.useState(!1),
        [Q, X] = i.useState(!1),
        [$, J] = i.useState(!1);
    i.useEffect(() => {
        null == G || G(null == j ? void 0 : j.current);
    }, [j, G]);
    let [ee, et] = i.useState(),
        [en, er] = i.useState(),
        ei = (e) => {
            et(e.interactionType), er(e.interactionSourceType);
        },
        ea = (e) => {
            null == x || x(),
                (0, R.openUserProfileModal)({
                    sourceAnalyticsLocations: F,
                    ...V,
                    ...e
                });
        };
    return (0, r.jsx)(c.Gt, {
        value: F,
        children: (0, r.jsx)(f.Mt, {
            value: V,
            shouldTrackViewOnMount: null == Z || null != Z.fullProfileLoadedTimestamp,
            children: (0, r.jsxs)(s.Dialog, {
                ref: j,
                'aria-label': t.username,
                children: [
                    (0, r.jsxs)(S.Z, {
                        user: t,
                        displayProfile: W,
                        profileType: D.y0.BITE_SIZE,
                        children: [
                            (0, r.jsxs)(A.Z, {
                                profileType: D.y0.BITE_SIZE,
                                children: [
                                    (0, r.jsx)(v.Z, {
                                        user: t,
                                        guildId: M,
                                        channelId: P,
                                        onClose: x
                                    }),
                                    (0, r.jsx)(N.Z, {
                                        profileType: D.y0.BITE_SIZE,
                                        user: t
                                    }),
                                    t.id !== n.id &&
                                        (0, r.jsx)(O.Z, {
                                            user: t,
                                            guildId: M,
                                            viewProfileItem: k
                                                ? null
                                                : (0, r.jsx)(s.MenuItem, {
                                                      id: 'view-profile',
                                                      label: L.Z.Messages.VIEW_FULL_PROFILE,
                                                      action: () => {
                                                          ea(),
                                                              (0, h.pQ)({
                                                                  action: 'PRESS_VIEW_PROFILE',
                                                                  analyticsLocations: F,
                                                                  ...V
                                                              });
                                                      }
                                                  })
                                        })
                                ]
                            }),
                            (0, r.jsxs)('header', {
                                className: b.header,
                                children: [
                                    null != ee && (0, r.jsx)('div', { className: b.backdrop }),
                                    (0, r.jsx)(I.Z, {
                                        user: t,
                                        displayProfile: W,
                                        guildId: M,
                                        profileType: D.y0.BITE_SIZE,
                                        hasProfileEffect: (null == W ? void 0 : W.profileEffectId) != null
                                    }),
                                    (0, r.jsx)(g.Z, {
                                        isReply: $,
                                        sent: Q,
                                        shown: z,
                                        className: b.toast
                                    }),
                                    (0, r.jsx)(m.Z, {
                                        location: 'BiteSizeProfilePopout',
                                        user: t,
                                        displayProfile: W,
                                        guildId: M,
                                        channelId: P,
                                        profileType: D.y0.BITE_SIZE,
                                        onOpenProfile: k ? void 0 : ea,
                                        isInteractionSource: en === D.n_.AVATAR || en === D.n_.STATUS,
                                        onInteraction: ei,
                                        setInteractionToastShown: q,
                                        setInteractionSent: X,
                                        setIsReplyInteraction: J,
                                        showReplyPopout: ee === D.P.REPLY && en === D.n_.AVATAR
                                    }),
                                    (0, r.jsx)(T.Z, {
                                        location: 'BiteSizeProfilePopout',
                                        user: t,
                                        guildId: M,
                                        channelId: P,
                                        profileType: D.y0.BITE_SIZE,
                                        isInteractionSource: en === D.n_.STATUS,
                                        onInteraction: ei,
                                        onClose: x,
                                        setInteractionToastShown: q,
                                        setInteractionSent: X,
                                        setIsReplyInteraction: J,
                                        showReplyPopout: ee === D.P.REPLY && en === D.n_.STATUS
                                    })
                                ]
                            }),
                            (0, r.jsx)(C.Z, {
                                user: t,
                                currentUser: n,
                                displayProfile: W,
                                guild: H,
                                isHovering: K,
                                onOpenProfile: k ? void 0 : ea,
                                channelId: P,
                                onClose: x
                            }),
                            (0, r.jsx)(y.Z, {
                                user: t,
                                guildId: M,
                                channelId: P,
                                onClose: x
                            })
                        ]
                    }),
                    (null == W ? void 0 : W.profileEffectId) != null &&
                        (0, r.jsx)(d.Z, {
                            profileEffectId: null == W ? void 0 : W.profileEffectId,
                            isHovering: K
                        })
                ]
            })
        })
    });
}
