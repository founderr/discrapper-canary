n.d(t, {
    Z: function () {
        return U;
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
    I = n(428785),
    m = n(78675),
    T = n(113557),
    g = n(169979),
    S = n(119096),
    A = n(502762),
    N = n(544989),
    v = n(481932),
    O = n(195387),
    R = n(272510),
    C = n(171368),
    y = n(958120),
    D = n(215633),
    L = n(228168),
    b = n(981631),
    M = n(689938),
    P = n(122269);
function U(e) {
    let { user: t, currentUser: n, guildId: U, channelId: w, messageId: x, roleId: G, closePopout: k, setPopoutRef: B, disableUserProfileLink: F = __OVERLAY__, newAnalyticsLocations: V = [] } = e,
        { analyticsLocations: H } = (0, c.ZP)([...V, u.Z.BITE_SIZE_PROFILE_POPOUT]),
        Z = (0, I.Z)({
            user: t,
            currentUser: n,
            location: b.Sbl.BITE_SIZE_POPOUT
        }),
        Y = (0, f.ZB)({
            layout: Z ? 'BITE_SIZE_POPOUT' : 'BITE_SIZE_POPOUT_RESTRICTED_BLOCKER_PROFILE',
            userId: t.id,
            guildId: U,
            channelId: w,
            messageId: x,
            roleId: G
        }),
        j = (0, a.e7)([E.Z], () => (null != U ? E.Z.getGuild(U) : null)),
        W = (0, a.e7)([_.ZP], () => (null != U ? _.ZP.getMember(U, t.id) : null)),
        K = i.useMemo(() => (null != U ? { [U]: [t.id] } : {}), [U, t.id]);
    (0, l.$)(K);
    let z = i.useRef(null),
        q = (0, p.ZP)(t.id, U),
        Q = (0, o.Z)(z),
        [X, $] = i.useState(!1),
        [J, ee] = i.useState(!1),
        [et, en] = i.useState(!1);
    i.useEffect(() => {
        null == B || B(null == z ? void 0 : z.current);
    }, [z, B]);
    let [er, ei] = i.useState(),
        [ea, es] = i.useState(),
        eo = (e) => {
            ei(e.interactionType), es(e.interactionSourceType);
        },
        el = (e) => {
            null == k || k(),
                (0, C.openUserProfileModal)({
                    sourceAnalyticsLocations: H,
                    ...Y,
                    ...e
                });
        };
    return (0, r.jsx)(c.Gt, {
        value: H,
        children: (0, r.jsx)(f.Mt, {
            value: Y,
            shouldTrackViewOnMount: null == W || null != W.fullProfileLoadedTimestamp,
            children: (0, r.jsxs)(s.Dialog, {
                ref: z,
                'aria-label': t.username,
                children: [
                    (0, r.jsxs)(A.Z, {
                        user: t,
                        displayProfile: q,
                        profileType: L.y0.BITE_SIZE,
                        children: [
                            (0, r.jsxs)(N.Z, {
                                profileType: L.y0.BITE_SIZE,
                                children: [
                                    (0, r.jsx)(O.Z, {
                                        user: t,
                                        guildId: U,
                                        channelId: w,
                                        onClose: k
                                    }),
                                    (0, r.jsx)(v.Z, {
                                        profileType: L.y0.BITE_SIZE,
                                        user: t
                                    }),
                                    t.id !== n.id &&
                                        (0, r.jsx)(R.Z, {
                                            user: t,
                                            guildId: U,
                                            viewProfileItem: F
                                                ? null
                                                : (0, r.jsx)(s.MenuItem, {
                                                      id: 'view-profile',
                                                      label: M.Z.Messages.VIEW_FULL_PROFILE,
                                                      action: () => {
                                                          el(),
                                                              (0, h.pQ)({
                                                                  action: 'PRESS_VIEW_PROFILE',
                                                                  analyticsLocations: H,
                                                                  ...Y
                                                              });
                                                      }
                                                  })
                                        })
                                ]
                            }),
                            (0, r.jsxs)('header', {
                                className: P.header,
                                children: [
                                    null != er && (0, r.jsx)('div', { className: P.backdrop }),
                                    (0, r.jsx)(m.Z, {
                                        user: t,
                                        displayProfile: q,
                                        guildId: U,
                                        profileType: L.y0.BITE_SIZE
                                    }),
                                    (0, r.jsx)(S.Z, {
                                        isReply: et,
                                        sent: J,
                                        shown: X,
                                        className: P.toast
                                    }),
                                    (0, r.jsx)(T.Z, {
                                        location: 'BiteSizeProfilePopout',
                                        user: t,
                                        displayProfile: q,
                                        guildId: U,
                                        channelId: w,
                                        profileType: L.y0.BITE_SIZE,
                                        onOpenProfile: F ? void 0 : el,
                                        isInteractionSource: ea === L.n_.AVATAR || ea === L.n_.STATUS,
                                        onInteraction: eo,
                                        setInteractionToastShown: $,
                                        setInteractionSent: ee,
                                        setIsReplyInteraction: en,
                                        showReplyPopout: er === L.P.REPLY && ea === L.n_.AVATAR
                                    }),
                                    (0, r.jsx)(g.Z, {
                                        location: 'BiteSizeProfilePopout',
                                        user: t,
                                        guildId: U,
                                        channelId: w,
                                        profileType: L.y0.BITE_SIZE,
                                        isInteractionSource: ea === L.n_.STATUS,
                                        onInteraction: eo,
                                        onClose: k,
                                        setInteractionToastShown: $,
                                        setInteractionSent: ee,
                                        setIsReplyInteraction: en,
                                        showReplyPopout: er === L.P.REPLY && ea === L.n_.STATUS
                                    })
                                ]
                            }),
                            (0, r.jsx)(y.Z, {
                                user: t,
                                currentUser: n,
                                displayProfile: q,
                                guild: j,
                                isHovering: Q,
                                onOpenProfile: F ? void 0 : el,
                                channelId: w,
                                onClose: k
                            }),
                            (0, r.jsx)(D.Z, {
                                user: t,
                                guildId: U,
                                channelId: w,
                                onClose: k
                            })
                        ]
                    }),
                    (null == q ? void 0 : q.profileEffectId) != null &&
                        (0, r.jsx)(d.Z, {
                            profileEffectId: null == q ? void 0 : q.profileEffectId,
                            isHovering: Q
                        })
                ]
            })
        })
    });
}
