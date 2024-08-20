n(47120);
var a = n(735250),
    t = n(470079),
    r = n(442837),
    l = n(481060),
    i = n(970606),
    o = n(616230),
    c = n(777036),
    d = n(650774),
    u = n(430824),
    I = n(693546),
    E = n(246364),
    _ = n(98493),
    T = n(985159),
    N = n(328977),
    R = n(412222),
    C = n(223312),
    M = n(571728),
    m = n(572940),
    A = n(80487),
    x = n(146463),
    h = n(981631),
    S = n(689938),
    j = n(412449);
function P(e) {
    let { guild: s } = e;
    return (0, a.jsxs)('div', {
        className: j.setupHeader,
        children: [
            (0, a.jsxs)('div', {
                className: j.previewContainer,
                children: [
                    (0, a.jsx)(l.Heading, {
                        variant: 'heading-lg/bold',
                        children: S.Z.Messages.MEMBER_VERIFICATION_MEMBER_APPLICATION_SETUP
                    }),
                    (0, a.jsxs)(l.Button, {
                        color: l.Button.Colors.TRANSPARENT,
                        onClick: () => {
                            (0, l.openModalLazy)(async () => {
                                let { default: e } = await n.e('52657').then(n.bind(n, 645264));
                                return (n) =>
                                    (0, a.jsx)(e, {
                                        ...n,
                                        guildId: s.id,
                                        isPreview: !0
                                    });
                            });
                        },
                        size: l.ButtonSizes.SMALL,
                        'aria-label': S.Z.Messages.MEMBER_VERIFICATION_PREVIEW_APPLICATION,
                        innerClassName: j.previewButton,
                        children: [
                            (0, a.jsx)(l.EyeIcon, {
                                size: 'xs',
                                color: 'currentColor'
                            }),
                            S.Z.Messages.MEMBER_VERIFICATION_PREVIEW_APPLICATION
                        ]
                    })
                ]
            }),
            (0, a.jsx)(l.Text, {
                className: j.description,
                variant: 'text-sm/medium',
                color: 'header-secondary',
                children: S.Z.Messages.CLAN_APPLICATION_SETUP_HEADER.format({ guildName: s.name })
            })
        ]
    });
}
function g(e) {
    var s, n;
    let { guildId: g } = e,
        b = t.useRef(null),
        [v, p] = t.useState((0, T.z)({ guildId: g })),
        f = (0, R.C)({ guildId: g }),
        Z = (0, N.L)({ guildId: g }),
        B = null !== (s = (0, M.A)({ guildId: g })) && void 0 !== s ? s : 0,
        { guildJoinRequests: O } = (0, C.j)({
            guildId: g,
            applicationStatus: 'REVIEW_APPLICATION' === v ? E.wB.SUBMITTED : v,
            sortOrder: f
        }),
        L = (0, r.e7)([u.Z], () => u.Z.getGuild(g), [g]),
        D = (0, r.e7)([d.Z], () => d.Z.getMemberCount(g)),
        G = null != L && (null != D ? D : 0) >= L.maxMembers,
        { fetchNextPage: w } = (0, _.m)({
            guildId: g,
            guildJoinRequests: O
        }),
        U = t.useRef(!1);
    !U.current && ((U.current = !0), w(f, 'REVIEW_APPLICATION' === v ? E.wB.SUBMITTED : v));
    let V = t.useRef(!1);
    t.useEffect(() => {
        V.current = !0;
    }, [f, v]),
        t.useEffect(() => {
            if (V.current && 0 !== O.length && 'REVIEW_APPLICATION' !== v) {
                var e;
                (V.current = !1), I.Z.setSelectedGuildJoinRequest(g, O[0]), null === (e = b.current) || void 0 === e || e.scrollToTop();
            }
        }, [g, O, Z, v]);
    let F = t.useCallback(
            async (e) => {
                if ('REVIEW_APPLICATION' !== v) f !== e && (I.Z.setSelectedSortOrder(g, e), await w(e, v));
            },
            [v, f, g, w]
        ),
        y = t.useCallback(
            async (e) => {
                if (v !== e) {
                    if (
                        (p(e),
                        (0, i.Q2)({
                            guildId: g,
                            source: h.jXE.GUILD_MEMBER_VERIFICATION_APPLICATION_REVIEW,
                            tab: e
                        }),
                        I.Z.setSelectedGuildJoinRequest(g, null),
                        'REVIEW_APPLICATION' !== e)
                    )
                        I.Z.setSelectedApplicationTab(g, e), await w(f, e);
                }
            },
            [v, f, g, w]
        ),
        k = t.useCallback(async () => {
            var e;
            if ('REVIEW_APPLICATION' === v) return;
            let s = null === (e = b.current) || void 0 === e ? void 0 : e.getScrollerState();
            if (null != s) s.scrollHeight - s.scrollTop - s.offsetHeight < 200 && (await w(f, v));
        }, [v, f, w]),
        J = null !== (n = null == L ? void 0 : L.hasFeature(h.oNc.CLAN)) && void 0 !== n && n;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(A.Z, {
                currentTab: v,
                onTabItemSelect: y,
                pendingGuildJoinRequestsTotal: B,
                showSetupTab: J
            }),
            (0, a.jsx)('div', {
                className: j.content,
                children:
                    'REVIEW_APPLICATION' === v
                        ? null != L
                            ? (0, a.jsx)(l.ScrollerThin, {
                                  children: (0, a.jsxs)('div', {
                                      className: j.scrollerContent,
                                      children: [
                                          (0, a.jsx)(P, { guild: L }),
                                          (0, a.jsx)(o.Z, {
                                              guild: L,
                                              isClanContext: !0
                                          })
                                      ]
                                  })
                              })
                            : null
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  G &&
                                      (0, a.jsx)(c.Z, {
                                          messageType: c.Q.WARNING,
                                          textVariant: 'text-sm/medium',
                                          className: j.headerWarning,
                                          children: S.Z.Messages.CLAN_MAX_MEMBER_LIMIT_WARNING.format({ count: null == L ? void 0 : L.maxMembers })
                                      }),
                                  (0, a.jsx)('div', {
                                      className: j.listControls,
                                      children: (0, a.jsx)(m.Z, {
                                          className: j.sortSelect,
                                          sortOrder: f,
                                          onSortChange: F
                                      })
                                  }),
                                  (0, a.jsx)(l.Text, {
                                      className: j.description,
                                      variant: 'text-xs/normal',
                                      color: 'header-secondary',
                                      children: S.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_LIST_DESCRIPTION
                                  }),
                                  (0, a.jsx)(x.Z, {
                                      applicationStatus: v,
                                      guildJoinRequests: O,
                                      guildId: g,
                                      onScroll: k,
                                      listRef: b,
                                      atMaxMemberCapacity: G
                                  })
                              ]
                          })
            })
        ]
    });
}
s.Z = t.memo(function (e) {
    let { guildId: s } = e;
    return (0, a.jsx)(g, { guildId: s });
});
