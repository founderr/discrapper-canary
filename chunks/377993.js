n.d(t, {
    Z: function () {
        return k;
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
    p = n(82295),
    m = n(554300),
    _ = n(556084),
    f = n(184301),
    E = n(347475),
    g = n(158776),
    C = n(699516),
    I = n(111583),
    T = n(594174),
    x = n(626135),
    S = n(768581),
    v = n(585483),
    N = n(233870),
    A = n(51144),
    Z = n(998502),
    M = n(276264),
    b = n(981631),
    R = n(689938),
    L = n(226686),
    P = n(204394);
let j = [],
    O = Z.ZP.getEnableHardwareAcceleration();
function y(e) {
    let { user: t, channel: s, status: u, activities: d } = e,
        h = (0, l.e7)([I.Z], () => null != I.Z.getTypingUsers(s.id)[t.id]),
        p = (0, l.e7)([T.default], () => T.default.getCurrentUser()),
        m = (0, l.e7)([g.Z], () => g.Z.isMobileOnline(t.id)),
        _ = (0, l.e7)([C.Z], () => C.Z.getNickname(t.id)),
        x = (e) => {
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
        preload: () => (0, f.Z)(t, { channelId: s.id }),
        renderPopout: (e) =>
            (0, i.jsx)(E.Z, {
                ...e,
                userId: t.id,
                channelId: s.id
            }),
        position: a.tq ? 'window_center' : 'left',
        spacing: 16,
        onShiftClick: () => {
            let e = '@'.concat(A.ZP.getUserTag(t, { decoration: 'never' })),
                n = '<@'.concat(t.id, '>');
            v.S.dispatchToLastSubscribed(b.CkL.INSERT_TEXT, {
                plainText: e,
                rawText: n
            }),
                c.Z.startTyping(s.id);
        },
        children: (e) =>
            (0, i.jsx)(
                M.Z,
                {
                    user: t,
                    currentUser: p,
                    isOwner: t.id === s.ownerId,
                    ownerTooltipText: R.Z.Messages.GROUP_OWNER,
                    shouldAnimateStatus: O,
                    isTyping: h,
                    status: u,
                    activities: d,
                    channel: s,
                    onContextMenu: x,
                    isMobile: m,
                    nick: _,
                    ...e
                },
                t.id
            )
    });
}
function D(e) {
    var t;
    let { integration: l, channel: c } = e,
        u = s.useCallback(
            (e) => {
                (0, o.jW)(e, async () => {
                    let { default: e } = await n.e('37969').then(n.bind(n, 496281));
                    return (t) =>
                        (0, i.jsx)(e, {
                            ...t,
                            channel: c,
                            integration: l
                        });
                });
            },
            [l, c]
        ),
        d = l.application.bot,
        p = S.ZP.getApplicationIconURL({
            id: l.application.id,
            icon: l.application.icon,
            bot: null === (t = l.application) || void 0 === t ? void 0 : t.bot,
            botIconFirst: !0
        });
    return null != d
        ? (0, i.jsx)(r.Popout, {
              preload: () => (0, f.Z)(d.id, p, { channelId: c.id }),
              renderPopout: (e) =>
                  (0, i.jsx)(E.Z, {
                      ...e,
                      userId: d.id,
                      channelId: c.id
                  }),
              position: a.tq ? 'window_center' : 'left',
              spacing: 16,
              children: (e) =>
                  (0, i.jsx)(m.Z, {
                      onContextMenu: u,
                      className: L.member,
                      name: (0, i.jsx)('span', {
                          className: L.username,
                          children: l.application.name
                      }),
                      avatar: (0, i.jsx)(r.Avatar, {
                          size: r.AvatarSizes.SIZE_32,
                          src: p,
                          'aria-label': l.application.name,
                          statusTooltip: !0
                      }),
                      decorators: (0, i.jsx)(h.Z, {
                          className: L.botTag,
                          verified: null == d ? void 0 : d.isVerifiedBot()
                      }),
                      id: l.application.id,
                      focusProps: {
                          offset: {
                              top: 4,
                              bottom: 4,
                              left: 4,
                              right: 4
                          }
                      },
                      ...e
                  })
          })
        : null;
}
function U(e, t) {
    if (e.listItems.length !== t.listItems.length) return !1;
    for (let n = 0; n < e.listItems.length; n++) {
        let i = e.listItems[n],
            s = t.listItems[n];
        if (i.user !== s.user || i.status !== s.status || i.activities !== s.activities) return !1;
    }
    return !0;
}
function k(e) {
    var t;
    let { channel: a } = e,
        o = T.default.getCurrentUser(),
        c = null == o ? void 0 : o.isStaff(),
        { analyticsLocations: f } = (0, d.ZP)(u.Z.MEMBER_LIST);
    let { listItems: E } =
            ((t = a),
            (0, l.e7)(
                [C.Z, T.default, g.Z],
                () => {
                    let e = (0, N.T)(t.recipients, T.default),
                        n = {};
                    for (let t of e) {
                        var i, s, a;
                        C.Z.isFriend(t.id) || t.id === (null === (i = T.default.getCurrentUser()) || void 0 === i ? void 0 : i.id)
                            ? (n[t.id] = {
                                  status: null !== (s = g.Z.getStatus(t.id)) && void 0 !== s ? s : b.Skl.OFFLINE,
                                  activities: null !== (a = g.Z.getActivities(t.id)) && void 0 !== a ? a : j
                              })
                            : (n[t.id] = {
                                  status: b.Skl.OFFLINE,
                                  activities: j
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
                U
            )),
        { installedIntegrations: I, applicationsShelf: S, fetched: v, appsInGDMEnabled: A, availableApplications: Z } = (0, _.j)({ channelId: a.id });
    s.useEffect(() => {
        x.default.track(b.rMx.MEMBER_LIST_VIEWED, {
            channel_id: a.id,
            channel_type: a.type,
            guild_id: a.guild_id
        });
    }, [a.guild_id, a.id, a.type]);
    let M = c && E.every((e) => e.user.isStaff());
    return (0, i.jsx)(d.Gt, {
        value: f,
        children: (0, i.jsx)('div', {
            className: P.membersWrap,
            children: (0, i.jsxs)(r.Scroller, {
                className: P.members,
                fade: !0,
                children: [
                    (0, i.jsxs)(p.Z, {
                        className: P.membersGroup,
                        children: [''.concat(R.Z.Messages.MEMBERS, '\u2014').concat(E.length, ' '), M && (0, i.jsx)(h.Z, { type: h.Z.Types.STAFF_ONLY_DM })]
                    }),
                    E.map((e) =>
                        (0, i.jsx)(
                            y,
                            {
                                user: e.user,
                                status: e.status,
                                activities: e.activities,
                                channel: a
                            },
                            e.user.id
                        )
                    ),
                    A &&
                        (I.length > 0 || (v && S.length > 0)) &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(p.Z, {
                                    className: P.membersGroup,
                                    children: ''.concat(R.Z.Messages.APPS, '\u2014').concat(I.length)
                                }),
                                I.map((e) =>
                                    (0, i.jsx)(
                                        D,
                                        {
                                            integration: e,
                                            channel: a
                                        },
                                        e.application.id
                                    )
                                ),
                                Z.length > 0 &&
                                    (0, i.jsx)(m.Z, {
                                        className: L.member,
                                        onClick: () => {
                                            (0, r.openModalLazy)(async () => {
                                                let { default: e } = await n.e('4536').then(n.bind(n, 422677));
                                                return (t) =>
                                                    (0, i.jsx)(e, {
                                                        ...t,
                                                        channelId: a.id
                                                    });
                                            });
                                        },
                                        avatar: (0, i.jsx)('div', {
                                            className: P.appIconWrapper,
                                            children: (0, i.jsx)(r.PlusSmallIcon, {
                                                size: 'sm',
                                                color: 'currentColor'
                                            })
                                        }),
                                        name: R.Z.Messages.PRIVATE_CHANNEL_ADD_APPS
                                    })
                            ]
                        })
                ]
            })
        })
    });
}
