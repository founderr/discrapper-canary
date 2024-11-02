n.d(t, {
    Z: function () {
        return R;
    }
}),
    n(47120),
    n(653041);
var i = n(200651),
    l = n(192379),
    r = n(873546),
    a = n(442837),
    s = n(481060),
    o = n(239091),
    c = n(144144),
    u = n(100527),
    d = n(906732),
    h = n(385499),
    m = n(82295),
    p = n(184301),
    f = n(347475),
    g = n(158776),
    C = n(699516),
    x = n(111583),
    v = n(594174),
    _ = n(626135),
    I = n(585483),
    E = n(233870),
    b = n(51144),
    S = n(998502),
    Z = n(276264),
    T = n(981631),
    N = n(388032),
    j = n(204394);
let A = [],
    y = S.ZP.getEnableHardwareAcceleration();
function P(e) {
    let { user: t, channel: l, status: u, activities: d } = e,
        h = (0, a.e7)([x.Z], () => null != x.Z.getTypingUsers(l.id)[t.id]),
        m = (0, a.e7)([v.default], () => v.default.getCurrentUser()),
        _ = (0, a.e7)([g.Z], () => g.Z.isMobileOnline(t.id)),
        E = (0, a.e7)([C.Z], () => C.Z.getNickname(t.id)),
        S = (e) => {
            (0, o.jW)(e, async () => {
                let { default: e } = await Promise.all([n.e('79695'), n.e('92453'), n.e('18283')]).then(n.bind(n, 354589));
                return (n) =>
                    (0, i.jsx)(e, {
                        ...n,
                        user: t,
                        channel: l
                    });
            });
        };
    return (0, i.jsx)(s.Popout, {
        preload: () => (0, p.Z)(t, { channelId: l.id }),
        renderPopout: (e) =>
            (0, i.jsx)(f.Z, {
                ...e,
                userId: t.id,
                channelId: l.id
            }),
        position: r.tq ? 'window_center' : 'left',
        spacing: 16,
        onShiftClick: () => {
            let e = '@'.concat(b.ZP.getUserTag(t, { decoration: 'never' })),
                n = '<@'.concat(t.id, '>');
            I.S.dispatchToLastSubscribed(T.CkL.INSERT_TEXT, {
                plainText: e,
                rawText: n
            }),
                c.Z.startTyping(l.id);
        },
        children: (e) =>
            (0, i.jsx)(
                Z.Z,
                {
                    user: t,
                    currentUser: m,
                    isOwner: t.id === l.ownerId,
                    ownerTooltipText: N.intl.string(N.t['MRXZ+/']),
                    shouldAnimateStatus: y,
                    isTyping: h,
                    status: u,
                    activities: d,
                    channel: l,
                    onContextMenu: S,
                    isMobile: _,
                    nick: E,
                    ...e
                },
                t.id
            )
    });
}
function M(e, t) {
    if (e.listItems.length !== t.listItems.length) return !1;
    for (let n = 0; n < e.listItems.length; n++) {
        let i = e.listItems[n],
            l = t.listItems[n];
        if (i.user !== l.user || i.status !== l.status || i.activities !== l.activities) return !1;
    }
    return !0;
}
function R(e) {
    var t;
    let { channel: n } = e,
        r = v.default.getCurrentUser(),
        o = null == r ? void 0 : r.isStaff(),
        { analyticsLocations: c } = (0, d.ZP)(u.Z.MEMBER_LIST);
    let { listItems: p } =
        ((t = n),
        (0, a.e7)(
            [C.Z, v.default, g.Z],
            () => {
                let e = (0, E.T)(t.recipients, v.default),
                    n = {};
                for (let t of e) {
                    var i, l, r;
                    C.Z.isFriend(t.id) || t.id === (null === (i = v.default.getCurrentUser()) || void 0 === i ? void 0 : i.id)
                        ? (n[t.id] = {
                              status: null !== (l = g.Z.getStatus(t.id)) && void 0 !== l ? l : T.Skl.OFFLINE,
                              activities: null !== (r = g.Z.getActivities(t.id)) && void 0 !== r ? r : A
                          })
                        : (n[t.id] = {
                              status: T.Skl.OFFLINE,
                              activities: A
                          });
                }
                let a = [];
                for (let t of e) {
                    let e = {
                        user: t,
                        status: n[t.id].status,
                        activities: n[t.id].activities
                    };
                    a.push(e);
                }
                return { listItems: a };
            },
            [t],
            M
        ));
    l.useEffect(() => {
        _.default.track(T.rMx.MEMBER_LIST_VIEWED, {
            channel_id: n.id,
            channel_type: n.type,
            guild_id: n.guild_id
        });
    }, [n.guild_id, n.id, n.type]);
    let f = o && p.every((e) => e.user.isStaff());
    return (0, i.jsx)(d.Gt, {
        value: c,
        children: (0, i.jsx)('div', {
            className: j.membersWrap,
            children: (0, i.jsxs)(s.Scroller, {
                className: j.members,
                fade: !0,
                children: [
                    (0, i.jsxs)(m.Z, {
                        className: j.membersGroup,
                        children: [''.concat(N.intl.string(N.t['9Oq93t']), '\u2014').concat(p.length, ' '), f && (0, i.jsx)(h.Z, { type: h.Z.Types.STAFF_ONLY_DM })]
                    }),
                    p.map((e) =>
                        (0, i.jsx)(
                            P,
                            {
                                user: e.user,
                                status: e.status,
                                activities: e.activities,
                                channel: n
                            },
                            e.user.id
                        )
                    )
                ]
            })
        })
    });
}
