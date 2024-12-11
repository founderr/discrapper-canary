n(47120);
var i = n(200651),
    r = n(192379),
    o = n(442837),
    a = n(481060),
    l = n(970606),
    c = n(122051),
    s = n(650774),
    d = n(430824),
    u = n(496675),
    f = n(693546),
    b = n(246364),
    _ = n(98493),
    m = n(985159),
    p = n(328977),
    C = n(412222),
    x = n(223312),
    v = n(571728),
    I = n(572940),
    h = n(80487),
    g = n(146463),
    T = n(981631),
    E = n(388032),
    R = n(991154);
function S(e) {
    let { guild: t } = e;
    return (0, i.jsxs)('div', {
        className: R.setupHeader,
        children: [
            (0, i.jsxs)('div', {
                className: R.previewContainer,
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
                        innerClassName: R.previewButton,
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
                className: R.description,
                variant: 'text-sm/medium',
                color: 'header-secondary',
                children: E.intl.format(E.t.xpB4Ym, { guildName: t.name })
            })
        ]
    });
}
function j(e) {
    var t, n;
    let { guildId: j, isSidebarOpen: A } = e,
        w = r.useRef(null),
        [B, P] = r.useState((0, m.z)({ guildId: j })),
        N = (0, C.C)({ guildId: j }),
        k = (0, p.L)({ guildId: j }),
        M = null !== (t = (0, v.A)({ guildId: j })) && void 0 !== t ? t : 0,
        { guildJoinRequests: Z } = (0, x.j)({
            guildId: j,
            applicationStatus: 'REVIEW_APPLICATION' === B ? b.wB.SUBMITTED : B,
            sortOrder: N
        }),
        F = (0, o.e7)([d.Z], () => d.Z.getGuild(j), [j]),
        y = (0, o.e7)([s.Z], () => s.Z.getMemberCount(j)),
        L = null != F && (null != y ? y : 0) >= F.maxMembers,
        { fetchNextPage: O } = (0, _.m)({
            guildId: j,
            guildJoinRequests: Z
        }),
        W = (0, o.e7)([u.Z], () => u.Z.can(T.Plq.KICK_MEMBERS, F)),
        H = r.useRef(!1);
    !H.current && ((H.current = !0), O(N, 'REVIEW_APPLICATION' === B ? b.wB.SUBMITTED : B)),
        r.useEffect(() => {
            !W && P('REVIEW_APPLICATION');
        }, [W]);
    let V = r.useRef(!1);
    r.useEffect(() => {
        V.current = !0;
    }, [N, B]),
        r.useEffect(() => {
            if (V.current && 0 !== Z.length && 'REVIEW_APPLICATION' !== B) {
                var e;
                (V.current = !1), f.Z.setSelectedGuildJoinRequest(j, Z[0]), null === (e = w.current) || void 0 === e || e.scrollToTop();
            }
        }, [j, Z, k, B]);
    let D = r.useCallback(
            async (e) => {
                if ('REVIEW_APPLICATION' !== B) N !== e && (f.Z.setSelectedSortOrder(j, e), await O(e, B));
            },
            [B, N, j, O]
        ),
        U = r.useCallback(
            async (e) => {
                if (B !== e) {
                    if (
                        (P(e),
                        (0, l.Q2)({
                            guildId: j,
                            source: T.jXE.GUILD_MEMBER_VERIFICATION_APPLICATION_REVIEW,
                            tab: e
                        }),
                        f.Z.setSelectedGuildJoinRequest(j, null),
                        'REVIEW_APPLICATION' !== e)
                    )
                        f.Z.setSelectedApplicationTab(j, e), await O(N, e);
                }
            },
            [B, N, j, O]
        ),
        G = r.useCallback(async () => {
            var e;
            if ('REVIEW_APPLICATION' === B) return;
            let t = null === (e = w.current) || void 0 === e ? void 0 : e.getScrollerState();
            if (null != t) t.scrollHeight - t.scrollTop - t.offsetHeight < 200 && (await O(N, B));
        }, [B, N, O]),
        q = null !== (n = null == F ? void 0 : F.hasFeature(T.oNc.CLAN)) && void 0 !== n && n;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(h.Z, {
                currentTab: B,
                onTabItemSelect: U,
                pendingGuildJoinRequestsTotal: M,
                showSetupTab: q,
                canActionJoinRequests: W,
                isSidebarOpen: A
            }),
            (0, i.jsx)('div', {
                className: R.content,
                children:
                    'REVIEW_APPLICATION' === B
                        ? null != F
                            ? (0, i.jsx)(a.ScrollerThin, {
                                  children: (0, i.jsxs)('div', {
                                      className: R.scrollerContent,
                                      children: [
                                          (0, i.jsx)(S, { guild: F }),
                                          (0, i.jsx)(c.Z, {
                                              guild: F,
                                              isClanContext: !0
                                          })
                                      ]
                                  })
                              })
                            : null
                        : (0, i.jsxs)(i.Fragment, {
                              children: [
                                  W &&
                                      L &&
                                      (0, i.jsx)(a.HelpMessage, {
                                          messageType: a.HelpMessageTypes.WARNING,
                                          textVariant: 'text-sm/medium',
                                          className: R.headerWarning,
                                          children: E.intl.format(E.t.o3mLzM, { count: null == F ? void 0 : F.maxMembers })
                                      }),
                                  (0, i.jsx)('div', {
                                      className: R.listControls,
                                      children: (0, i.jsx)(I.Z, {
                                          className: R.sortSelect,
                                          sortOrder: N,
                                          onSortChange: D
                                      })
                                  }),
                                  (0, i.jsx)(a.Text, {
                                      className: R.description,
                                      variant: 'text-xs/normal',
                                      color: 'header-secondary',
                                      children: E.intl.string(E.t.OCorGR)
                                  }),
                                  (0, i.jsx)(g.Z, {
                                      applicationStatus: B,
                                      guildJoinRequests: Z,
                                      guildId: j,
                                      onScroll: G,
                                      listRef: w,
                                      atMaxMemberCapacity: L
                                  })
                              ]
                          })
            })
        ]
    });
}
t.Z = r.memo(function (e) {
    let { guildId: t, isSidebarOpen: n } = e;
    return (0, i.jsx)(j, {
        guildId: t,
        isSidebarOpen: n
    });
});
