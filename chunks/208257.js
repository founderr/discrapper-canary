n(47120);
var i = n(200651),
    l = n(192379),
    r = n(442837),
    a = n(481060),
    s = n(970606),
    o = n(122051),
    c = n(650774),
    d = n(430824),
    u = n(496675),
    m = n(693546),
    h = n(246364),
    x = n(98493),
    b = n(985159),
    j = n(328977),
    p = n(412222),
    g = n(223312),
    v = n(571728),
    f = n(572940),
    C = n(80487),
    I = n(146463),
    R = n(981631),
    E = n(388032),
    T = n(958681);
function S(e) {
    let { guild: t } = e;
    return (0, i.jsxs)('div', {
        className: T.setupHeader,
        children: [
            (0, i.jsxs)('div', {
                className: T.previewContainer,
                children: [
                    (0, i.jsx)(a.Heading, {
                        variant: 'heading-lg/bold',
                        children: E.intl.string(E.t.aOQWKi)
                    }),
                    (0, i.jsxs)(a.Button, {
                        color: a.Button.Colors.TRANSPARENT,
                        onClick: () => {
                            (0, a.openModalLazy)(async () => {
                                let { default: e } = await n.e('52657').then(n.bind(n, 645264));
                                return (n) =>
                                    (0, i.jsx)(e, {
                                        ...n,
                                        guildId: t.id,
                                        isPreview: !0
                                    });
                            });
                        },
                        size: a.ButtonSizes.SMALL,
                        'aria-label': E.intl.string(E.t.rqfRdX),
                        innerClassName: T.previewButton,
                        children: [
                            (0, i.jsx)(a.EyeIcon, {
                                size: 'xs',
                                color: 'currentColor'
                            }),
                            E.intl.string(E.t.rqfRdX)
                        ]
                    })
                ]
            }),
            (0, i.jsx)(a.Text, {
                className: T.description,
                variant: 'text-sm/medium',
                color: 'header-secondary',
                children: E.intl.format(E.t.xpB4Ym, { guildName: t.name })
            })
        ]
    });
}
function _(e) {
    var t, n;
    let { guildId: _, isSidebarOpen: N } = e,
        A = l.useRef(null),
        [Z, w] = l.useState((0, b.z)({ guildId: _ })),
        P = (0, p.C)({ guildId: _ }),
        B = (0, j.L)({ guildId: _ }),
        M = null !== (t = (0, v.A)({ guildId: _ })) && void 0 !== t ? t : 0,
        { guildJoinRequests: y } = (0, g.j)({
            guildId: _,
            applicationStatus: 'REVIEW_APPLICATION' === Z ? h.wB.SUBMITTED : Z,
            sortOrder: P
        }),
        k = (0, r.e7)([d.Z], () => d.Z.getGuild(_), [_]),
        U = (0, r.e7)([c.Z], () => c.Z.getMemberCount(_)),
        D = null != k && (null != U ? U : 0) >= k.maxMembers,
        { fetchNextPage: L } = (0, x.m)({
            guildId: _,
            guildJoinRequests: y
        }),
        O = (0, r.e7)([u.Z], () => u.Z.can(R.Plq.KICK_MEMBERS, k)),
        q = l.useRef(!1);
    !q.current && ((q.current = !0), L(P, 'REVIEW_APPLICATION' === Z ? h.wB.SUBMITTED : Z)),
        l.useEffect(() => {
            !O && w('REVIEW_APPLICATION');
        }, [O]);
    let J = l.useRef(!1);
    l.useEffect(() => {
        J.current = !0;
    }, [P, Z]),
        l.useEffect(() => {
            if (J.current && 0 !== y.length && 'REVIEW_APPLICATION' !== Z) {
                var e;
                (J.current = !1), m.Z.setSelectedGuildJoinRequest(_, y[0]), null === (e = A.current) || void 0 === e || e.scrollToTop();
            }
        }, [_, y, B, Z]);
    let V = l.useCallback(
            async (e) => {
                if ('REVIEW_APPLICATION' !== Z) P !== e && (m.Z.setSelectedSortOrder(_, e), await L(e, Z));
            },
            [Z, P, _, L]
        ),
        z = l.useCallback(
            async (e) => {
                if (Z !== e) {
                    if (
                        (w(e),
                        (0, s.Q2)({
                            guildId: _,
                            source: R.jXE.GUILD_MEMBER_VERIFICATION_APPLICATION_REVIEW,
                            tab: e
                        }),
                        m.Z.setSelectedGuildJoinRequest(_, null),
                        'REVIEW_APPLICATION' !== e)
                    )
                        m.Z.setSelectedApplicationTab(_, e), await L(P, e);
                }
            },
            [Z, P, _, L]
        ),
        F = l.useCallback(async () => {
            var e;
            if ('REVIEW_APPLICATION' === Z) return;
            let t = null === (e = A.current) || void 0 === e ? void 0 : e.getScrollerState();
            if (null != t) t.scrollHeight - t.scrollTop - t.offsetHeight < 200 && (await L(P, Z));
        }, [Z, P, L]),
        W = null !== (n = null == k ? void 0 : k.hasFeature(R.oNc.CLAN)) && void 0 !== n && n;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(C.Z, {
                currentTab: Z,
                onTabItemSelect: z,
                pendingGuildJoinRequestsTotal: M,
                showSetupTab: W,
                canActionJoinRequests: O,
                isSidebarOpen: N
            }),
            (0, i.jsx)('div', {
                className: T.content,
                children:
                    'REVIEW_APPLICATION' === Z
                        ? null != k
                            ? (0, i.jsx)(a.ScrollerThin, {
                                  children: (0, i.jsxs)('div', {
                                      className: T.scrollerContent,
                                      children: [
                                          (0, i.jsx)(S, { guild: k }),
                                          (0, i.jsx)(o.Z, {
                                              guild: k,
                                              isClanContext: !0
                                          })
                                      ]
                                  })
                              })
                            : null
                        : (0, i.jsxs)(i.Fragment, {
                              children: [
                                  O &&
                                      D &&
                                      (0, i.jsx)(a.HelpMessage, {
                                          messageType: a.HelpMessageTypes.WARNING,
                                          textVariant: 'text-sm/medium',
                                          className: T.headerWarning,
                                          children: E.intl.format(E.t.o3mLzM, { count: null == k ? void 0 : k.maxMembers })
                                      }),
                                  (0, i.jsx)('div', {
                                      className: T.listControls,
                                      children: (0, i.jsx)(f.Z, {
                                          className: T.sortSelect,
                                          sortOrder: P,
                                          onSortChange: V
                                      })
                                  }),
                                  (0, i.jsx)(a.Text, {
                                      className: T.description,
                                      variant: 'text-xs/normal',
                                      color: 'header-secondary',
                                      children: E.intl.string(E.t.OCorGR)
                                  }),
                                  (0, i.jsx)(I.Z, {
                                      applicationStatus: Z,
                                      guildJoinRequests: y,
                                      guildId: _,
                                      onScroll: F,
                                      listRef: A,
                                      atMaxMemberCapacity: D
                                  })
                              ]
                          })
            })
        ]
    });
}
t.Z = l.memo(function (e) {
    let { guildId: t, isSidebarOpen: n } = e;
    return (0, i.jsx)(_, {
        guildId: t,
        isSidebarOpen: n
    });
});
