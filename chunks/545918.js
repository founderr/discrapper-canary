t.r(n),
    t.d(n, {
        default: function () {
            return K;
        }
    }),
    t(47120);
var l = t(200651),
    i = t(192379),
    r = t(120356),
    a = t.n(r),
    s = t(442837),
    o = t(481060),
    c = t(100527),
    d = t(906732),
    u = t(111028),
    m = t(252618),
    x = t(189432),
    h = t(189357),
    b = t(693546),
    C = t(863249),
    j = t(63568),
    g = t(246364),
    f = t(697379),
    v = t(98493),
    N = t(412222),
    _ = t(223312),
    E = t(473403),
    T = t(984370),
    I = t(703656),
    S = t(171368),
    p = t(433355),
    M = t(592125),
    R = t(984933),
    A = t(430824),
    Z = t(944486),
    k = t(384433),
    B = t(241559),
    w = t(575766),
    L = t(901066),
    D = t(987491),
    P = t(305473),
    y = t(995596),
    G = t(937283),
    O = t(440857),
    U = t(707113),
    z = t(981631),
    F = t(176505),
    q = t(50493),
    H = t(388032),
    J = t(998810),
    Y = t(247627);
function V(e) {
    let { guild: n, previousChannel: t, currentTab: r, onTabSelect: a } = e,
        s = (0, j.jS)(n.id, 'Member Safety Page'),
        c = (0, f.W)(n.id),
        d = H.intl.string(H.t.oclz3d),
        x = H.intl.string(H.t.oclz3d);
    return (
        (0, m.Tt)({
            location: n.name,
            subsection: d
        }),
        (0, l.jsxs)(T.Z, {
            className: J.header,
            innerClassname: J.__invalid_innerHeader,
            channelId: F.oC.MEMBER_SAFETY,
            guildId: n.id,
            hideSearch: !0,
            toolbar:
                null != t
                    ? (0, l.jsx)(o.Button, {
                          className: J.returnButton,
                          size: o.Button.Sizes.SMALL,
                          look: o.Button.Looks.OUTLINED,
                          color: o.Button.Colors.PRIMARY,
                          onClick: () => {
                              null != t && (0, I.XU)(n.id, t.id);
                          },
                          children: (0, l.jsx)(o.Text, {
                              className: J.returnButtonText,
                              variant: 'text-xs/medium',
                              color: 'none',
                              children: H.intl.format(H.t.IX7oWl, {
                                  channelNameHook: () =>
                                      null == t
                                          ? null
                                          : (0, l.jsxs)(
                                                i.Fragment,
                                                {
                                                    children: [
                                                        (0, l.jsx)(E._, {
                                                            className: J.returnIcon,
                                                            guild: n,
                                                            channel: t
                                                        }),
                                                        (0, l.jsx)(u.Z, {
                                                            children: (0, l.jsx)(o.Text, {
                                                                variant: 'text-xs/medium',
                                                                color: 'none',
                                                                children: t.name
                                                            })
                                                        })
                                                    ]
                                                },
                                                t.id
                                            )
                              })
                          })
                      })
                    : (0, l.jsx)('div', {}),
            children: [
                (0, l.jsx)(T.Z.Icon, {
                    icon: o.GroupIcon,
                    'aria-hidden': !0
                }),
                (0, l.jsx)(T.Z.Title, { children: x }),
                s &&
                    c &&
                    (0, l.jsx)(y.Z, {
                        guildId: n.id,
                        currentTab: r,
                        onTabSelect: a
                    })
            ]
        })
    );
}
function K(e) {
    let { guildId: n } = e,
        [t, r] = i.useState(k.e.ALL_MEMBERS),
        u = (0, s.e7)([A.Z], () => A.Z.getGuild(n)),
        { analyticsLocations: m } = (0, d.ZP)(c.Z.MEMBER_SAFETY_PAGE),
        f = (0, N.C)({ guildId: n }),
        E = (0, j.jS)(n, 'Member Safety Page'),
        { guildJoinRequests: T } = (0, _.j)({
            guildId: n,
            applicationStatus: 'ALL_MEMBERS' === t ? g.wB.SUBMITTED : t,
            sortOrder: f
        }),
        y = (0, B.n2)(n),
        H = (0, h.ms)(n, y),
        K = (0, s.e7)([Z.Z], () => Z.Z.getLastSelectedChannelId(n)),
        W = (0, s.e7)([M.Z], () => M.Z.getChannel(K)),
        Q = i.useRef(null);
    (0, w.n)(n);
    let { fetchNextPage: X } = (0, v.m)({
            guildId: n,
            guildJoinRequests: T
        }),
        $ = i.useCallback(async () => {
            var e;
            if (t === k.e.ALL_MEMBERS) return;
            let n = null === (e = Q.current) || void 0 === e ? void 0 : e.getScrollerState();
            if (null != n) n.scrollHeight - n.scrollTop - n.offsetHeight < 200 && (await X(f, t));
        }, [t, t, f, X]),
        ee = i.useCallback(
            async (e) => {
                if (t !== e) {
                    if (E) {
                        if ((r(e), b.Z.setSelectedGuildJoinRequest(n, null), 'ALL_MEMBERS' === e)) return;
                        await X(f, e);
                    }
                }
            },
            [t, E, n, X, f]
        );
    i.useEffect(() => {
        if (!y && null != u) {
            var e;
            let n = null === (e = R.ZP.getDefaultChannel(u.id)) || void 0 === e ? void 0 : e.id;
            (0, I.XU)(u.id, n);
        }
    }, [u, y]),
        i.useEffect(() => {
            E && C.ZP.fetchVerificationForm(n);
        }, [n, E]);
    let en = (0, s.e7)([p.ZP], () => null != p.ZP.getGuildSidebarState(n), [n]),
        et = i.useCallback(
            (e) => {
                (0, h.By)(e.guildId, !0)
                    ? (0, x.r)(e.guildId, e.userId, F.oC.MEMBER_SAFETY, { modViewPanel: q.k.INFO })
                    : (0, S.openUserProfileModal)({
                          userId: e.userId,
                          guildId: e.guildId,
                          sourceAnalyticsLocations: m,
                          analyticsLocation: { section: z.jXE.MEMBER_SAFETY_PAGE }
                      });
            },
            [m]
        );
    if (null == u || !y) return null;
    let el =
            t === k.e.ALL_MEMBERS
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(P.Z, { guild: u }),
                          (0, l.jsx)(U.Z, {
                              guild: u,
                              onMemberSelect: et
                          })
                      ]
                  })
                : (0, l.jsx)(D.Z, {
                      guildId: u.id,
                      currentTab: t
                  }),
        ei = t === k.e.ALL_MEMBERS ? (0, l.jsx)(G.Z, { guildId: u.id }) : (0, l.jsx)(L.Z, { guildId: u.id });
    return (0, l.jsxs)(d.Gt, {
        value: m,
        children: [
            (0, l.jsxs)('div', {
                className: a()(Y.chat, J.page, { [Y.threadSidebarOpen]: en }),
                children: [
                    (0, l.jsx)(V, {
                        guild: u,
                        previousChannel: W,
                        currentTab: t,
                        onTabSelect: ee
                    }),
                    (0, l.jsx)(o.AdvancedScroller, {
                        onScroll: $,
                        className: a()(J.scroller),
                        ref: Q,
                        orientation: 'vertical',
                        children: (0, l.jsx)('div', {
                            className: a()(Y.content, J.container),
                            children: el
                        })
                    }),
                    (0, l.jsx)(O.Z, { guildId: u.id })
                ]
            }),
            H && ei
        ]
    });
}
