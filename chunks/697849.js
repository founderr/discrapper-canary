t.r(n), t(47120);
var i = t(200651),
    a = t(192379),
    l = t(442837),
    r = t(481060),
    d = t(100527),
    o = t(906732),
    c = t(313201),
    s = t(724912),
    u = t(41776),
    _ = t(592125),
    g = t(626135),
    p = t(981888),
    m = t(897285),
    I = t(924301),
    v = t(951539),
    h = t(592126),
    f = t(315416),
    E = t(711373),
    C = t(274311),
    T = t(854698),
    b = t(405613),
    L = t(285784),
    x = t(95291),
    S = t(187443),
    D = t(464766),
    U = t(724278),
    y = t(462747),
    N = t(462179),
    G = t(765305),
    Z = t(981631),
    j = t(706773);
function O(e) {
    let { guildEvent: n, guild: t, channel: a, onActionTaken: r, isHub: d, isMember: o, recurrenceId: c } = e,
        s = (0, I.xt)(n),
        _ = (0, l.e7)([I.ZP], () => I.ZP.isInterestedInEventRecurrence(n.id, c), [c, n]),
        g = (0, v.ZP)(n),
        p = (0, l.e7)([u.Z], () => u.Z.isLurking(t.id), [t.id]),
        m = (0, C.T)(null == a ? void 0 : a.id, n.id),
        h = (0, N.Z)({
            guild: t,
            channel: a,
            guildScheduledEvent: n,
            isActive: s,
            recurrenceId: c,
            onActionTaken: r
        }),
        { entity_type: f } = n;
    return d
        ? (0, i.jsx)(S.Z, {
              isActive: s,
              isUserLurking: p,
              rsvped: _,
              isMember: o,
              isDetailsView: !0,
              guildName: null == t ? void 0 : t.name,
              isChannelPublic: m,
              canInvite: g,
              ...h
          })
        : (0, i.jsx)(L.ZP, {
              isActive: s,
              isUserLurking: p,
              rsvped: _,
              isChannelPublic: m,
              canInvite: g,
              entityType: f,
              ...h
          });
}
n.default = (e) => {
    let { guildScheduledEventId: n, parentGuildId: t, transitionState: u, initialRecurrenceId: v, onClose: C } = e,
        { analyticsLocations: L } = (0, o.ZP)(d.Z.GUILD_EVENT_MODAL),
        [S, N] = a.useState(v),
        A = (0, l.e7)([I.ZP], () => I.ZP.getGuildScheduledEvent(n), [n]),
        z = null == A ? void 0 : A.id,
        B = null == A ? void 0 : A.guild_id,
        { guild: R, isMember: P } = (0, h.Z)(B, z),
        k = (0, s.Z)(t),
        H = null == A ? void 0 : A.channel_id,
        M = (0, l.e7)([_.Z], () => _.Z.getChannel(H), [H]),
        w = (0, c.Dt)(),
        [V, X] = a.useState(G.fL.EVENT_INFO),
        Y = (0, E.Z)(z, S),
        F = (0, f.Z)(B, z, S),
        [W, { loading: q, error: K }] = (0, p.Z)(() => m.Z.getGuildEventUsers(null == A ? void 0 : A.id, S, B));
    a.useEffect(() => {
        null == A
            ? C()
            : g.default.track(Z.rMx.OPEN_MODAL, {
                  type: G.zw,
                  guild_id: A.guild_id
              });
    }, [A, C]);
    let J = a.useRef(null),
        [Q, $] = a.useState(0);
    if (
        (a.useLayoutEffect(() => {
            var e, n;
            let t = (null == A ? void 0 : A.recurrence_rule) != null ? 16 : 0;
            $((null !== (n = null == J ? void 0 : null === (e = J.current) || void 0 === e ? void 0 : e.offsetHeight) && void 0 !== n ? n : 0) + t);
        }, [J, null == A ? void 0 : A.recurrence_rule]),
        null == A || null == R || (!P && !k))
    )
        return null;
    let ee = (e) => {
            if (e !== V) e === G.fL.RSVP_LIST && W(), X(e);
        },
        en = null != S ? S : (0, T.DK)(A);
    return (0, i.jsx)(o.Gt, {
        value: L,
        children: (0, i.jsxs)(r.ModalRoot, {
            size: r.ModalSize.MEDIUM,
            transitionState: u,
            'aria-labelledby': w,
            className: j.root,
            children: [
                (null == A ? void 0 : A.image) != null &&
                    (0, i.jsx)(x.Z, {
                        source: (0, b.Z)(A),
                        className: j.banner
                    }),
                (0, i.jsx)(D.Z, {
                    onClose: C,
                    selectedTab: V,
                    onTabSelected: ee,
                    userCount: F,
                    hasBanner: (null == A ? void 0 : A.image) != null,
                    isHub: k
                }),
                (0, i.jsx)('div', {
                    className: j.container,
                    children: (0, i.jsx)(r.ModalContent, {
                        className: j.contentContainer,
                        style: { height: Q },
                        children: (0, i.jsxs)(r.Slides, {
                            activeSlide: V,
                            width: 600,
                            centered: !1,
                            children: [
                                (0, i.jsx)(r.Slide, {
                                    id: G.fL.EVENT_INFO,
                                    children: (0, i.jsx)(U.Z, {
                                        guildEvent: A,
                                        guild: R,
                                        channel: M,
                                        headerId: w,
                                        onClose: C,
                                        onClickInterestedCount: () => ee(G.fL.RSVP_LIST),
                                        isHub: k,
                                        containerRef: J,
                                        recurrenceId: en,
                                        setRecurrenceId: N
                                    })
                                }),
                                (0, i.jsx)(r.Slide, {
                                    id: G.fL.RSVP_LIST,
                                    children: (0, i.jsx)(y.Z, {
                                        guildEvent: A,
                                        recurrenceId: en,
                                        eventUsers: Y,
                                        loading: q,
                                        containerHeight: Q,
                                        error: K
                                    })
                                })
                            ]
                        })
                    })
                }),
                (0, i.jsx)(r.ModalFooter, {
                    className: j.footer,
                    children: (0, i.jsx)(O, {
                        guildEvent: A,
                        isHub: k,
                        isMember: P,
                        guild: R,
                        channel: M,
                        onActionTaken: C,
                        recurrenceId: en
                    })
                })
            ]
        })
    });
};
