t.r(n), t(47120);
var l = t(735250),
    i = t(470079),
    r = t(442837),
    a = t(481060),
    o = t(100527),
    c = t(906732),
    s = t(313201),
    d = t(724912),
    u = t(41776),
    _ = t(592125),
    h = t(626135),
    v = t(981888),
    f = t(897285),
    E = t(924301),
    g = t(951539),
    m = t(592126),
    x = t(315416),
    I = t(711373),
    Z = t(274311),
    b = t(854698),
    N = t(405613),
    T = t(285784),
    C = t(95291),
    p = t(187443),
    j = t(464766),
    S = t(724278),
    L = t(462747),
    R = t(462179),
    y = t(765305),
    k = t(981631),
    P = t(828819);
function M(e) {
    let { guildEvent: n, guild: t, channel: i, onActionTaken: a, isHub: o, isMember: c, recurrenceId: s } = e,
        d = (0, E.xt)(n),
        _ = (0, r.e7)([E.ZP], () => E.ZP.isInterestedInEventRecurrence(n.id, s), [s, n]),
        h = (0, g.ZP)(n),
        v = (0, r.e7)([u.Z], () => u.Z.isLurking(t.id), [t.id]),
        f = (0, Z.T)(null == i ? void 0 : i.id, n.id),
        m = (0, R.Z)({
            guild: t,
            channel: i,
            guildScheduledEvent: n,
            isActive: d,
            recurrenceId: s,
            onActionTaken: a
        }),
        { entity_type: x } = n;
    return o
        ? (0, l.jsx)(p.Z, {
              isActive: d,
              isUserLurking: v,
              rsvped: _,
              isMember: c,
              isDetailsView: !0,
              guildName: null == t ? void 0 : t.name,
              isChannelPublic: f,
              canInvite: h,
              ...m
          })
        : (0, l.jsx)(T.ZP, {
              isActive: d,
              isUserLurking: v,
              rsvped: _,
              isChannelPublic: f,
              canInvite: h,
              entityType: x,
              ...m
          });
}
n.default = (e) => {
    let { guildScheduledEventId: n, parentGuildId: t, transitionState: u, initialRecurrenceId: g, onClose: Z } = e,
        { analyticsLocations: T } = (0, c.ZP)(o.Z.GUILD_EVENT_MODAL),
        [p, R] = i.useState(g),
        D = (0, r.e7)([E.ZP], () => E.ZP.getGuildScheduledEvent(n), [n]),
        A = null == D ? void 0 : D.id,
        B = null == D ? void 0 : D.guild_id,
        { guild: G, isMember: U } = (0, m.Z)(B, A),
        w = (0, d.Z)(t),
        O = null == D ? void 0 : D.channel_id,
        V = (0, r.e7)([_.Z], () => _.Z.getChannel(O), [O]),
        F = (0, s.Dt)(),
        [H, z] = i.useState(y.fL.EVENT_INFO),
        X = (0, I.Z)(A, p),
        W = (0, x.Z)(B, A, p),
        [Y, { loading: J, error: K }] = (0, v.Z)(() => f.Z.getGuildEventUsers(null == D ? void 0 : D.id, p, B));
    i.useEffect(() => {
        null == D
            ? Z()
            : h.default.track(k.rMx.OPEN_MODAL, {
                  type: y.zw,
                  guild_id: D.guild_id
              });
    }, [D, Z]);
    let q = i.useRef(null),
        [Q, $] = i.useState(0);
    if (
        (i.useLayoutEffect(() => {
            var e, n;
            let t = (null == D ? void 0 : D.recurrence_rule) != null ? 16 : 0;
            $((null !== (n = null == q ? void 0 : null === (e = q.current) || void 0 === e ? void 0 : e.offsetHeight) && void 0 !== n ? n : 0) + t);
        }, [q, null == D ? void 0 : D.recurrence_rule]),
        null == D || null == G || (!U && !w))
    )
        return null;
    let ee = (e) => {
            if (e !== H) e === y.fL.RSVP_LIST && Y(), z(e);
        },
        en = null != p ? p : (0, b.DK)(D);
    return (0, l.jsx)(c.Gt, {
        value: T,
        children: (0, l.jsxs)(a.ModalRoot, {
            size: a.ModalSize.MEDIUM,
            transitionState: u,
            'aria-labelledby': F,
            className: P.root,
            children: [
                (null == D ? void 0 : D.image) != null &&
                    (0, l.jsx)(C.Z, {
                        source: (0, N.Z)(D),
                        className: P.banner
                    }),
                (0, l.jsx)(j.Z, {
                    onClose: Z,
                    selectedTab: H,
                    onTabSelected: ee,
                    userCount: W,
                    hasBanner: (null == D ? void 0 : D.image) != null,
                    isHub: w
                }),
                (0, l.jsx)('div', {
                    className: P.container,
                    children: (0, l.jsx)(a.ModalContent, {
                        className: P.contentContainer,
                        style: { height: Q },
                        children: (0, l.jsxs)(a.Slides, {
                            activeSlide: H,
                            width: 600,
                            centered: !1,
                            children: [
                                (0, l.jsx)(a.Slide, {
                                    id: y.fL.EVENT_INFO,
                                    children: (0, l.jsx)(S.Z, {
                                        guildEvent: D,
                                        guild: G,
                                        channel: V,
                                        headerId: F,
                                        onClose: Z,
                                        onClickInterestedCount: () => ee(y.fL.RSVP_LIST),
                                        isHub: w,
                                        containerRef: q,
                                        recurrenceId: en,
                                        setRecurrenceId: R
                                    })
                                }),
                                (0, l.jsx)(a.Slide, {
                                    id: y.fL.RSVP_LIST,
                                    children: (0, l.jsx)(L.Z, {
                                        guildEvent: D,
                                        recurrenceId: en,
                                        eventUsers: X,
                                        loading: J,
                                        containerHeight: Q,
                                        error: K
                                    })
                                })
                            ]
                        })
                    })
                }),
                (0, l.jsx)(a.ModalFooter, {
                    className: P.footer,
                    children: (0, l.jsx)(M, {
                        guildEvent: D,
                        isHub: w,
                        isMember: U,
                        guild: G,
                        channel: V,
                        onActionTaken: Z,
                        recurrenceId: en
                    })
                })
            ]
        })
    });
};
