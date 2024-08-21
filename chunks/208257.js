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
    I = n(496675),
    E = n(693546),
    _ = n(246364),
    T = n(98493),
    N = n(985159),
    R = n(328977),
    C = n(412222),
    M = n(223312),
    m = n(571728),
    A = n(572940),
    x = n(80487),
    h = n(146463),
    S = n(981631),
    P = n(689938),
    j = n(412449);
function g(e) {
    let { guild: s } = e;
    return (0, a.jsxs)('div', {
        className: j.setupHeader,
        children: [
            (0, a.jsxs)('div', {
                className: j.previewContainer,
                children: [
                    (0, a.jsx)(l.Heading, {
                        variant: 'heading-lg/bold',
                        children: P.Z.Messages.MEMBER_VERIFICATION_MEMBER_APPLICATION_SETUP
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
                        'aria-label': P.Z.Messages.MEMBER_VERIFICATION_PREVIEW_APPLICATION,
                        innerClassName: j.previewButton,
                        children: [
                            (0, a.jsx)(l.EyeIcon, {
                                size: 'xs',
                                color: 'currentColor'
                            }),
                            P.Z.Messages.MEMBER_VERIFICATION_PREVIEW_APPLICATION
                        ]
                    })
                ]
            }),
            (0, a.jsx)(l.Text, {
                className: j.description,
                variant: 'text-sm/medium',
                color: 'header-secondary',
                children: P.Z.Messages.CLAN_APPLICATION_SETUP_HEADER.format({ guildName: s.name })
            })
        ]
    });
}
function b(e) {
    var s, n;
    let { guildId: b } = e,
        v = t.useRef(null),
        [p, f] = t.useState((0, N.z)({ guildId: b })),
        Z = (0, C.C)({ guildId: b }),
        B = (0, R.L)({ guildId: b }),
        O = null !== (s = (0, m.A)({ guildId: b })) && void 0 !== s ? s : 0,
        { guildJoinRequests: L } = (0, M.j)({
            guildId: b,
            applicationStatus: 'REVIEW_APPLICATION' === p ? _.wB.SUBMITTED : p,
            sortOrder: Z
        }),
        D = (0, r.e7)([u.Z], () => u.Z.getGuild(b), [b]),
        G = (0, r.e7)([d.Z], () => d.Z.getMemberCount(b)),
        w = null != D && (null != G ? G : 0) >= D.maxMembers,
        { fetchNextPage: U } = (0, T.m)({
            guildId: b,
            guildJoinRequests: L
        }),
        V = (0, r.e7)([I.Z], () => I.Z.can(S.Plq.KICK_MEMBERS, D)),
        F = t.useRef(!1);
    !F.current && ((F.current = !0), U(Z, 'REVIEW_APPLICATION' === p ? _.wB.SUBMITTED : p)),
        t.useEffect(() => {
            !V && f('REVIEW_APPLICATION');
        }, [V]);
    let y = t.useRef(!1);
    t.useEffect(() => {
        y.current = !0;
    }, [Z, p]),
        t.useEffect(() => {
            if (y.current && 0 !== L.length && 'REVIEW_APPLICATION' !== p) {
                var e;
                (y.current = !1), E.Z.setSelectedGuildJoinRequest(b, L[0]), null === (e = v.current) || void 0 === e || e.scrollToTop();
            }
        }, [b, L, B, p]);
    let k = t.useCallback(
            async (e) => {
                if ('REVIEW_APPLICATION' !== p) Z !== e && (E.Z.setSelectedSortOrder(b, e), await U(e, p));
            },
            [p, Z, b, U]
        ),
        J = t.useCallback(
            async (e) => {
                if (p !== e) {
                    if (
                        (f(e),
                        (0, i.Q2)({
                            guildId: b,
                            source: S.jXE.GUILD_MEMBER_VERIFICATION_APPLICATION_REVIEW,
                            tab: e
                        }),
                        E.Z.setSelectedGuildJoinRequest(b, null),
                        'REVIEW_APPLICATION' !== e)
                    )
                        E.Z.setSelectedApplicationTab(b, e), await U(Z, e);
                }
            },
            [p, Z, b, U]
        ),
        q = t.useCallback(async () => {
            var e;
            if ('REVIEW_APPLICATION' === p) return;
            let s = null === (e = v.current) || void 0 === e ? void 0 : e.getScrollerState();
            if (null != s) s.scrollHeight - s.scrollTop - s.offsetHeight < 200 && (await U(Z, p));
        }, [p, Z, U]),
        W = null !== (n = null == D ? void 0 : D.hasFeature(S.oNc.CLAN)) && void 0 !== n && n;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(x.Z, {
                currentTab: p,
                onTabItemSelect: J,
                pendingGuildJoinRequestsTotal: O,
                showSetupTab: W,
                canActionJoinRequests: V
            }),
            (0, a.jsx)('div', {
                className: j.content,
                children:
                    'REVIEW_APPLICATION' === p
                        ? null != D
                            ? (0, a.jsx)(l.ScrollerThin, {
                                  children: (0, a.jsxs)('div', {
                                      className: j.scrollerContent,
                                      children: [
                                          (0, a.jsx)(g, { guild: D }),
                                          (0, a.jsx)(o.Z, {
                                              guild: D,
                                              isClanContext: !0
                                          })
                                      ]
                                  })
                              })
                            : null
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  V &&
                                      w &&
                                      (0, a.jsx)(c.Z, {
                                          messageType: c.Q.WARNING,
                                          textVariant: 'text-sm/medium',
                                          className: j.headerWarning,
                                          children: P.Z.Messages.CLAN_MAX_MEMBER_LIMIT_WARNING.format({ count: null == D ? void 0 : D.maxMembers })
                                      }),
                                  (0, a.jsx)('div', {
                                      className: j.listControls,
                                      children: (0, a.jsx)(A.Z, {
                                          className: j.sortSelect,
                                          sortOrder: Z,
                                          onSortChange: k
                                      })
                                  }),
                                  (0, a.jsx)(l.Text, {
                                      className: j.description,
                                      variant: 'text-xs/normal',
                                      color: 'header-secondary',
                                      children: P.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_LIST_DESCRIPTION
                                  }),
                                  (0, a.jsx)(h.Z, {
                                      applicationStatus: p,
                                      guildJoinRequests: L,
                                      guildId: b,
                                      onScroll: q,
                                      listRef: v,
                                      atMaxMemberCapacity: w
                                  })
                              ]
                          })
            })
        ]
    });
}
s.Z = t.memo(function (e) {
    let { guildId: s } = e;
    return (0, a.jsx)(b, { guildId: s });
});
