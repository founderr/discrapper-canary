t.r(n),
    t.d(n, {
        default: function () {
            return W;
        }
    }),
    t(47120);
var l = t(200651),
    r = t(192379),
    i = t(120356),
    a = t.n(i),
    o = t(442837),
    s = t(481060),
    c = t(100527),
    d = t(906732),
    u = t(111028),
    x = t(252618),
    m = t(189432),
    h = t(189357),
    b = t(693546),
    _ = t(63568),
    C = t(246364),
    j = t(697379),
    g = t(98493),
    f = t(412222),
    v = t(223312),
    p = t(473403),
    N = t(984370),
    S = t(703656),
    T = t(171368),
    E = t(433355),
    I = t(592125),
    M = t(984933),
    A = t(430824),
    R = t(944486),
    Z = t(384433),
    k = t(241559),
    B = t(575766),
    L = t(901066),
    w = t(987491),
    y = t(305473),
    D = t(995596),
    P = t(937283),
    G = t(440857),
    O = t(707113),
    U = t(981631),
    z = t(176505),
    F = t(50493),
    H = t(388032),
    q = t(998810),
    K = t(247627);
function Y(e) {
    let { guild: n, previousChannel: t, currentTab: i, onTabSelect: a } = e,
        o = (0, _.jS)(n.id, 'Member Safety Page'),
        c = (0, j.W)(n.id),
        d = H.intl.string(H.t.oclz3d),
        m = H.intl.string(H.t.oclz3d);
    return (
        (0, x.Tt)({
            location: n.name,
            subsection: d
        }),
        (0, l.jsxs)(N.Z, {
            className: q.header,
            innerClassname: q.__invalid_innerHeader,
            channelId: z.oC.MEMBER_SAFETY,
            guildId: n.id,
            hideSearch: !0,
            toolbar:
                null != t
                    ? (0, l.jsx)(s.Button, {
                          className: q.returnButton,
                          size: s.Button.Sizes.SMALL,
                          look: s.Button.Looks.OUTLINED,
                          color: s.Button.Colors.PRIMARY,
                          onClick: () => {
                              null != t && (0, S.XU)(n.id, t.id);
                          },
                          children: (0, l.jsx)(s.Text, {
                              className: q.returnButtonText,
                              variant: 'text-xs/medium',
                              color: 'none',
                              children: H.intl.format(H.t.IX7oWl, {
                                  channelNameHook: () =>
                                      null == t
                                          ? null
                                          : (0, l.jsxs)(
                                                r.Fragment,
                                                {
                                                    children: [
                                                        (0, l.jsx)(p._, {
                                                            className: q.returnIcon,
                                                            guild: n,
                                                            channel: t
                                                        }),
                                                        (0, l.jsx)(u.Z, {
                                                            children: (0, l.jsx)(s.Text, {
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
                (0, l.jsx)(N.Z.Icon, {
                    icon: s.GroupIcon,
                    'aria-hidden': !0
                }),
                (0, l.jsx)(N.Z.Title, { children: m }),
                o &&
                    c &&
                    (0, l.jsx)(D.Z, {
                        guildId: n.id,
                        currentTab: i,
                        onTabSelect: a
                    })
            ]
        })
    );
}
function W(e) {
    let { guildId: n } = e,
        [t, i] = r.useState(Z.e.ALL_MEMBERS),
        u = (0, o.e7)([A.Z], () => A.Z.getGuild(n)),
        { analyticsLocations: x } = (0, d.ZP)(c.Z.MEMBER_SAFETY_PAGE),
        _ = (0, f.C)({ guildId: n }),
        { guildJoinRequests: j } = (0, v.j)({
            guildId: n,
            applicationStatus: 'ALL_MEMBERS' === t ? C.wB.SUBMITTED : t,
            sortOrder: _
        }),
        p = (0, k.n2)(n),
        N = (0, h.ms)(n, p),
        D = (0, o.e7)([R.Z], () => R.Z.getLastSelectedChannelId(n)),
        H = (0, o.e7)([I.Z], () => I.Z.getChannel(D)),
        W = r.useRef(null);
    (0, B.n)(n);
    let { fetchNextPage: J } = (0, g.m)({
            guildId: n,
            guildJoinRequests: j
        }),
        V = r.useCallback(async () => {
            var e;
            if (t === Z.e.ALL_MEMBERS) return;
            let n = null === (e = W.current) || void 0 === e ? void 0 : e.getScrollerState();
            if (null != n) n.scrollHeight - n.scrollTop - n.offsetHeight < 200 && (await J(_, t));
        }, [t, t, _, J]),
        X = r.useCallback(
            async (e) => {
                if (t !== e) {
                    if ((i(e), b.Z.setSelectedGuildJoinRequest(n, null), 'ALL_MEMBERS' !== e)) await J(_, e);
                }
            },
            [t, _, n, J]
        );
    r.useEffect(() => {
        if (!p && null != u) {
            var e;
            let n = null === (e = M.ZP.getDefaultChannel(u.id)) || void 0 === e ? void 0 : e.id;
            (0, S.XU)(u.id, n);
        }
    }, [u, p]);
    let Q = (0, o.e7)([E.ZP], () => null != E.ZP.getGuildSidebarState(n), [n]),
        $ = r.useCallback(
            (e) => {
                (0, h.By)(e.guildId, !0)
                    ? (0, m.r)(e.guildId, e.userId, z.oC.MEMBER_SAFETY, { modViewPanel: F.k.INFO })
                    : (0, T.openUserProfileModal)({
                          userId: e.userId,
                          guildId: e.guildId,
                          sourceAnalyticsLocations: x,
                          analyticsLocation: { section: U.jXE.MEMBER_SAFETY_PAGE }
                      });
            },
            [x]
        );
    if (null == u || !p) return null;
    let ee =
            t === Z.e.ALL_MEMBERS
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(y.Z, { guild: u }),
                          (0, l.jsx)(O.Z, {
                              guild: u,
                              onMemberSelect: $
                          })
                      ]
                  })
                : (0, l.jsx)(w.Z, {
                      guildId: u.id,
                      currentTab: t
                  }),
        en = t === Z.e.ALL_MEMBERS ? (0, l.jsx)(P.Z, { guildId: u.id }) : (0, l.jsx)(L.Z, { guildId: u.id });
    return (0, l.jsxs)(d.Gt, {
        value: x,
        children: [
            (0, l.jsxs)('div', {
                className: a()(K.chat, q.page, { [K.threadSidebarOpen]: Q }),
                children: [
                    (0, l.jsx)(Y, {
                        guild: u,
                        previousChannel: H,
                        currentTab: t,
                        onTabSelect: X
                    }),
                    (0, l.jsx)(s.AdvancedScroller, {
                        onScroll: V,
                        className: a()(q.scroller),
                        ref: W,
                        orientation: 'vertical',
                        children: (0, l.jsx)('div', {
                            className: a()(K.content, q.container),
                            children: ee
                        })
                    }),
                    (0, l.jsx)(G.Z, { guildId: u.id })
                ]
            }),
            N && en
        ]
    });
}
