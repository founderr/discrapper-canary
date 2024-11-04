n.d(t, {
    Z: function () {
        return X;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    s = n.n(r),
    a = n(392711),
    o = n.n(a),
    c = n(91192),
    u = n(924826),
    d = n(873546),
    h = n(442837),
    m = n(481060),
    p = n(239091),
    f = n(144144),
    g = n(607070),
    C = n(100527),
    x = n(906732),
    v = n(82295),
    _ = n(91218),
    I = n(623624),
    E = n(518738),
    b = n(965376),
    S = n(159299),
    Z = n(184301),
    T = n(347475),
    N = n(199902),
    j = n(271383),
    A = n(430824),
    y = n(158776),
    P = n(885110),
    M = n(111583),
    R = n(594174),
    L = n(499033),
    k = n(626135),
    O = n(585483),
    w = n(700785),
    D = n(51144),
    U = n(998502),
    B = n(276264),
    H = n(981631),
    F = n(388032),
    G = n(305338),
    V = n(204394);
let z = U.ZP.getEnableHardwareAcceleration(),
    W = 44 + B.x,
    Y = l.memo(function (e) {
        let { channel: t, sectionId: r, userId: s, guildOwnerId: a } = e,
            o = (0, h.e7)([M.Z], () => M.Z.isTyping(t.id, s)),
            u = (0, h.e7)([j.ZP], () => j.ZP.getMember(t.guild_id, s)),
            g = (0, h.e7)(
                [A.Z],
                () => {
                    var e;
                    return (null == u ? void 0 : u.colorRoleId) != null ? (null === (e = A.Z.getRole(t.guild_id, u.colorRoleId)) || void 0 === e ? void 0 : e.name) : void 0;
                },
                [t.guild_id, u]
            ),
            C = (0, h.e7)([R.default], () => R.default.getUser(s)),
            x = (0, h.e7)([R.default], () => R.default.getCurrentUser()),
            v = (null == C ? void 0 : C.id) === (null == x ? void 0 : x.id),
            _ = (0, h.e7)([y.Z, P.Z], () => (v ? P.Z.getStatus() : y.Z.getStatus(s, t.guild_id))),
            E = (0, h.e7)([y.Z], () => y.Z.isMobileOnline(s)),
            b = (0, h.e7)([y.Z, P.Z], () => (v ? P.Z.getActivities() : y.Z.getActivities(s, t.guild_id))),
            L = (0, h.e7)([N.Z], () => N.Z.getAnyStreamForUser(s)),
            k = (0, c.JA)(s),
            w = (0, h.e7)([S.Z], () => S.Z.canUserViewChannel(t.id, r, s)),
            U = (null == C ? void 0 : C.id) != null && C.id === a,
            G = l.useCallback(
                (e) => {
                    null != C &&
                        (0, p.jW)(e, async () => {
                            let { default: e } = await Promise.all([n.e('79695'), n.e('70675')]).then(n.bind(n, 654663));
                            return (n) =>
                                (0, i.jsx)(e, {
                                    ...n,
                                    user: C,
                                    guildId: t.guild_id,
                                    channel: t
                                });
                        });
                },
                [C, t]
            ),
            V = l.useCallback(() => {
                if (null == C) return;
                let e = '@'.concat(D.ZP.getUserTag(C, { decoration: 'never' })),
                    n = '<@'.concat(C.id, '>');
                O.S.dispatchToLastSubscribed(H.CkL.INSERT_TEXT, {
                    plainText: e,
                    rawText: n
                }),
                    f.Z.startTyping(t.id);
            }, [C, t]),
            W = l.useCallback(
                (e) => {
                    e.stopPropagation(),
                        (0, I.f)({
                            guildId: t.guild_id,
                            location: {
                                section: H.jXE.THREAD_MEMBER_LIST,
                                object: H.qAy.BOOST_GEM_ICON
                            }
                        });
                },
                [t.guild_id]
            );
        if (null == C) return null;
        let Y = null == u ? void 0 : u.premiumSince;
        return (0, i.jsx)(m.Popout, {
            preload: () =>
                (0, Z.Z)(C, {
                    guildId: t.guild_id,
                    channelId: t.id
                }),
            renderPopout: (e) =>
                (0, i.jsx)(T.Z, {
                    ...e,
                    userId: C.id,
                    guildId: t.guild_id,
                    channelId: t.id
                }),
            position: d.tq ? 'window_center' : 'left',
            spacing: 16,
            onShiftClick: V,
            children: (e, n) => {
                let { isShown: l } = n;
                return (0, i.jsx)(B.Z, {
                    onContextMenu: G,
                    shouldAnimateStatus: z,
                    user: C,
                    currentUser: x,
                    nick: null == u ? void 0 : u.nick,
                    status: _,
                    activities: b,
                    colorString: null == u ? void 0 : u.colorString,
                    colorRoleName: g,
                    isTyping: o,
                    channel: t,
                    guildId: t.guild_id,
                    isMobile: E,
                    selected: l,
                    applicationStream: L,
                    premiumSince: null == Y ? null : new Date(Y),
                    onClickPremiumGuildIcon: W,
                    itemProps: k,
                    lostPermissionTooltipText: w ? void 0 : F.intl.string(F.t['/QcoT0']),
                    isOwner: U,
                    ...e
                });
            }
        });
    }),
    K = l.memo(function (e) {
        let { id: t, label: n, count: l, guildId: r } = e,
            s = (0, E.p9)({
                roleId: t,
                guildId: r,
                size: 16
            });
        return t === H.Skl.UNKNOWN
            ? (0, i.jsx)('div', {
                  className: V.membersGroup,
                  children: (0, i.jsx)('div', { className: V.memberGroupsPlaceholder })
              })
            : (0, i.jsxs)(v.Z, {
                  className: V.membersGroup,
                  'aria-label': F.intl.formatToPlainString(F.t.UaqbkZ, {
                      title: n,
                      count: l
                  }),
                  children: [
                      null != s
                          ? (0, i.jsx)(_.Z, {
                                className: V.roleIcon,
                                ...s
                            })
                          : null,
                      (0, i.jsxs)('span', {
                          'aria-hidden': !0,
                          children: [n, ' \u2014 ', l]
                      })
                  ]
              });
    }),
    q = l.memo(function (e) {
        let { channel: t } = e;
        return t.type === H.d4z.PRIVATE_THREAD
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)('div', { className: G.divider }),
                      (0, i.jsxs)(m.Text, {
                          variant: 'text-xs/bold',
                          color: 'header-secondary',
                          className: G.private,
                          children: [
                              (0, i.jsx)(m.LockIcon, {
                                  size: 'xxs',
                                  color: 'currentColor'
                              }),
                              '\xA0',
                              F.intl.string(F.t.BTLTAg)
                          ]
                      }),
                      (0, i.jsx)(m.Text, {
                          variant: 'text-sm/normal',
                          color: 'header-secondary',
                          className: G.instructions,
                          children: F.intl.string(F.t.Hsd8hI)
                      })
                  ]
              })
            : null;
    });
function X(e) {
    let { channel: t, guild: n } = e,
        r = 'members-'.concat(t.id),
        { analyticsLocations: a } = (0, x.ZP)(C.Z.MEMBER_LIST),
        d = (0, b.D)(t.id, n),
        p = d.filter((e) => e.userIds.length > 0).reverse()[0],
        { navigator: f, listRef: v } = (function (e, t) {
            let n = (0, h.e7)([g.Z], () => g.Z.keyboardModeEnabled),
                i = l.useRef(null),
                r = l.useCallback(
                    (e, n) => {
                        let l = i.current;
                        if (null == l) return;
                        let r = parseInt(n, 10),
                            [s, a] = l.getSectionRowFromIndex(r),
                            o = 0 === s && 0 === a ? t : 0;
                        l.scrollToIndex({
                            section: s,
                            row: a,
                            padding: o,
                            callback: () => {
                                requestAnimationFrame(() => {
                                    var t;
                                    return null === (t = document.querySelector(e)) || void 0 === t ? void 0 : t.focus({ preventScroll: !0 });
                                });
                            }
                        });
                    },
                    [t]
                ),
                s = l.useCallback(
                    () =>
                        new Promise((e) => {
                            let t = i.current;
                            if (null == t) return e();
                            t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                        }),
                    []
                ),
                a = l.useCallback(
                    () =>
                        new Promise((e) => {
                            let t = i.current;
                            if (null == t) return e();
                            t.scrollToBottom({
                                callback() {
                                    requestAnimationFrame(() => setTimeout(e, 100));
                                }
                            });
                        }),
                    []
                );
            return {
                navigator: (0, u.ZP)({
                    id: e,
                    setFocus: r,
                    isEnabled: n,
                    scrollToStart: s,
                    scrollToEnd: a
                }),
                listRef: i
            };
        })(r, W),
        _ = 0 === d.length || d.every((e) => 0 === e.userIds.length);
    if (
        (l.useEffect(() => {
            k.default.track(H.rMx.MEMBER_LIST_VIEWED, {
                channel_id: t.id,
                channel_type: t.type,
                guild_id: t.guild_id
            });
        }, [t.guild_id, t.id, t.type]),
        _)
    )
        return (0, i.jsx)(J, { channel: t });
    let I = o().omit(f.containerProps, ['ref']),
        E = w.iJ(n);
    return (0, i.jsx)(x.Gt, {
        value: a,
        children: (0, i.jsx)(c.bG, {
            navigator: f,
            children: (0, i.jsx)(m.FocusJumpSection, {
                children: (e) =>
                    (0, i.jsx)('div', {
                        className: s()(V.membersWrap, V.hiddenMembers),
                        children: (0, i.jsx)(
                            m.List,
                            {
                                ref: v,
                                className: V.members,
                                paddingTop: 0,
                                sectionHeight: 40,
                                renderSection: (e) => {
                                    let { section: t } = e,
                                        l = d[t];
                                    return (0, i.jsx)(
                                        K,
                                        {
                                            id: l.id,
                                            label: l.label,
                                            count: l.userIds.length,
                                            guildId: n.id
                                        },
                                        l.id
                                    );
                                },
                                rowHeight: W,
                                renderRow: (e) => {
                                    let { section: n, row: l } = e,
                                        { userIds: r, id: s } = d[n];
                                    return (0, i.jsx)(
                                        Y,
                                        {
                                            channel: t,
                                            sectionId: s,
                                            userId: r[l],
                                            guildOwnerId: E
                                        },
                                        r[l]
                                    );
                                },
                                footerHeight: (e) => (d[e] === p && t.type === H.d4z.PRIVATE_THREAD ? 80 : 0),
                                renderFooter: (e) => (d[e.section] === p ? (0, i.jsx)(q, { channel: t }, 'footer') : null),
                                innerAriaLabel: F.intl.string(F.t['9Oq93t']),
                                innerTag: 'ul',
                                sections: d.map((e) => e.userIds.length),
                                fade: !0,
                                ...I,
                                ...e
                            },
                            r
                        )
                    })
            })
        })
    });
}
function J(e) {
    let { channel: t } = e;
    return (0, i.jsxs)('div', {
        className: s()(V.membersWrap, V.hiddenMembers, V.members, G.emptyState),
        children: [
            (0, i.jsx)(m.Text, {
                className: G.emptyStateHeader,
                variant: 'text-xs/bold',
                color: 'interactive-normal',
                children: F.intl.string(F.t['9Oq93t'])
            }),
            (0, i.jsxs)('div', {
                className: G.emptyStateIconContainer,
                children: [
                    (0, i.jsx)('div', {
                        className: G.emptyStateIcon,
                        children: (0, i.jsx)(m.GroupIcon, {
                            size: 'lg',
                            color: 'currentColor'
                        })
                    }),
                    (0, i.jsx)(L.Z, { className: G.emptyStateStars })
                ]
            }),
            (0, i.jsx)(m.Heading, {
                variant: 'heading-md/semibold',
                children: t.isForumPost() ? F.intl.string(F.t.p0UgNT) : F.intl.string(F.t['9/n5v7'])
            }),
            (0, i.jsx)(m.Text, {
                className: G.emptyStateSubtext,
                variant: 'text-sm/normal',
                color: 'header-secondary',
                children: F.intl.string(F.t.emw8UF)
            })
        ]
    });
}
