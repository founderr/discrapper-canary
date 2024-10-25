n.d(t, {
    Z: function () {
        return j;
    }
}),
    n(47120),
    n(653041);
var i = n(200651),
    s = n(192379),
    a = n(873546),
    l = n(442837),
    r = n(481060),
    o = n(239091),
    c = n(144144),
    u = n(100527),
    d = n(906732),
    h = n(385499),
    m = n(82295),
    p = n(184301),
    _ = n(347475),
    f = n(158776),
    E = n(699516),
    g = n(111583),
    C = n(594174),
    I = n(626135),
    T = n(585483),
    x = n(233870),
    S = n(51144),
    v = n(998502),
    N = n(276264),
    A = n(981631),
    Z = n(689938),
    M = n(204394);
let b = [],
    R = v.ZP.getEnableHardwareAcceleration();
function L(e) {
    let { user: t, channel: s, status: u, activities: d } = e,
        h = (0, l.e7)([g.Z], () => null != g.Z.getTypingUsers(s.id)[t.id]),
        m = (0, l.e7)([C.default], () => C.default.getCurrentUser()),
        I = (0, l.e7)([f.Z], () => f.Z.isMobileOnline(t.id)),
        x = (0, l.e7)([E.Z], () => E.Z.getNickname(t.id)),
        v = (e) => {
            (0, o.jW)(e, async () => {
                let { default: e } = await Promise.all([n.e('79695'), n.e('92453'), n.e('18283')]).then(n.bind(n, 354589));
                return (n) =>
                    (0, i.jsx)(e, {
                        ...n,
                        user: t,
                        channel: s
                    });
            });
        };
    return (0, i.jsx)(r.Popout, {
        preload: () => (0, p.Z)(t, { channelId: s.id }),
        renderPopout: (e) =>
            (0, i.jsx)(_.Z, {
                ...e,
                userId: t.id,
                channelId: s.id
            }),
        position: a.tq ? 'window_center' : 'left',
        spacing: 16,
        onShiftClick: () => {
            let e = '@'.concat(S.ZP.getUserTag(t, { decoration: 'never' })),
                n = '<@'.concat(t.id, '>');
            T.S.dispatchToLastSubscribed(A.CkL.INSERT_TEXT, {
                plainText: e,
                rawText: n
            }),
                c.Z.startTyping(s.id);
        },
        children: (e) =>
            (0, i.jsx)(
                N.Z,
                {
                    user: t,
                    currentUser: m,
                    isOwner: t.id === s.ownerId,
                    ownerTooltipText: Z.Z.Messages.GROUP_OWNER,
                    shouldAnimateStatus: R,
                    isTyping: h,
                    status: u,
                    activities: d,
                    channel: s,
                    onContextMenu: v,
                    isMobile: I,
                    nick: x,
                    ...e
                },
                t.id
            )
    });
}
function P(e, t) {
    if (e.listItems.length !== t.listItems.length) return !1;
    for (let n = 0; n < e.listItems.length; n++) {
        let i = e.listItems[n],
            s = t.listItems[n];
        if (i.user !== s.user || i.status !== s.status || i.activities !== s.activities) return !1;
    }
    return !0;
}
function j(e) {
    var t;
    let { channel: n } = e,
        a = C.default.getCurrentUser(),
        o = null == a ? void 0 : a.isStaff(),
        { analyticsLocations: c } = (0, d.ZP)(u.Z.MEMBER_LIST);
    let { listItems: p } =
        ((t = n),
        (0, l.e7)(
            [E.Z, C.default, f.Z],
            () => {
                let e = (0, x.T)(t.recipients, C.default),
                    n = {};
                for (let t of e) {
                    var i, s, a;
                    E.Z.isFriend(t.id) || t.id === (null === (i = C.default.getCurrentUser()) || void 0 === i ? void 0 : i.id)
                        ? (n[t.id] = {
                              status: null !== (s = f.Z.getStatus(t.id)) && void 0 !== s ? s : A.Skl.OFFLINE,
                              activities: null !== (a = f.Z.getActivities(t.id)) && void 0 !== a ? a : b
                          })
                        : (n[t.id] = {
                              status: A.Skl.OFFLINE,
                              activities: b
                          });
                }
                let l = [];
                for (let t of e) {
                    let e = {
                        user: t,
                        status: n[t.id].status,
                        activities: n[t.id].activities
                    };
                    l.push(e);
                }
                return { listItems: l };
            },
            [t],
            P
        ));
    s.useEffect(() => {
        I.default.track(A.rMx.MEMBER_LIST_VIEWED, {
            channel_id: n.id,
            channel_type: n.type,
            guild_id: n.guild_id
        });
    }, [n.guild_id, n.id, n.type]);
    let _ = o && p.every((e) => e.user.isStaff());
    return (0, i.jsx)(d.Gt, {
        value: c,
        children: (0, i.jsx)('div', {
            className: M.membersWrap,
            children: (0, i.jsxs)(r.Scroller, {
                className: M.members,
                fade: !0,
                children: [
                    (0, i.jsxs)(m.Z, {
                        className: M.membersGroup,
                        children: [''.concat(Z.Z.Messages.MEMBERS, '\u2014').concat(p.length, ' '), _ && (0, i.jsx)(h.Z, { type: h.Z.Types.STAFF_ONLY_DM })]
                    }),
                    p.map((e) =>
                        (0, i.jsx)(
                            L,
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
