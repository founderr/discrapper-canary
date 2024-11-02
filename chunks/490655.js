t(47120), t(653041);
var i = t(200651),
    l = t(192379),
    r = t(392711),
    a = t.n(r),
    o = t(442837),
    s = t(481060),
    d = t(139387),
    c = t(503089),
    u = t(231757),
    m = t(600164),
    h = t(106976),
    p = t(488915),
    g = t(984933),
    f = t(496675),
    x = t(585483),
    b = t(63063),
    v = t(919196),
    C = t(731072),
    I = t(494118),
    N = t(491500),
    T = t(351644),
    _ = t(108053),
    j = t(981631),
    S = t(388032),
    E = t(194639);
function Z(e, n) {
    switch (e) {
        case j.b4C.APPLICATION:
            var t;
            return null !== (t = null == n ? void 0 : n.application.name) && void 0 !== t ? t : '';
        case j.b4C.OVERVIEW:
            return S.intl.string(S.t.s69NLC);
        case j.b4C.CHANNEL_FOLLOWING:
            return S.intl.string(S.t.OrV60t);
        case j.b4C.TWITCH:
            return S.intl.string(S.t.q4pBGx);
        case j.b4C.WEBHOOKS:
            return S.intl.string(S.t.xOg4SE);
        case j.b4C.YOUTUBE:
            return S.intl.string(S.t.aS6cKy);
        case j.b4C.CHANNELS_SYNCING:
            return S.intl.string(S.t.tqtDXF);
        default:
            return '';
    }
}
n.Z = l.memo(function (e) {
    let { section: n, sectionId: t, guild: r, channel: A, integrations: y, editedIntegration: R, webhooks: O, editedWebhook: L, isFetching: k, refToScroller: w, errors: M, hasChanges: B } = e,
        P = (0, o.e7)([g.ZP], () => (null != r ? g.ZP.getDefaultChannel(r.id) : null)),
        D = (0, o.cj)([g.ZP], () => g.ZP.getChannels(null == r ? void 0 : r.id)),
        U = (0, o.cj)([f.Z], () =>
            a().keyBy(
                D.SELECTABLE.map((e) => e.channel).filter((e) => f.Z.can(j.Plq.MANAGE_WEBHOOKS, e)),
                'id'
            )
        ),
        G = (0, o.cj)([f.Z], () =>
            a().keyBy(
                D.VOCAL.map((e) => e.channel).filter((e) => e.isGuildVocal() && f.Z.can(j.Plq.MANAGE_WEBHOOKS, e)),
                'id'
            )
        ),
        F = null != A ? A : P,
        H = n === j.b4C.APPLICATION ? t : null,
        [W, z] = l.useState(c.$x),
        V = l.useCallback(
            () =>
                B()
                    ? (x.S.dispatch(j.CkL.SHAKE_APP, {
                          duration: 300,
                          intensity: W
                      }),
                      z(Math.min(W + c.d7, c.w6)),
                      x.S.dispatch(j.CkL.EMPHASIZE_NOTICE),
                      !1)
                    : (z(c.$x), !0),
            [B, W]
        ),
        K = l.useCallback((e) => !!V() && (d.Z.setSection(e), !0), [V]),
        {
            applicationIntegrations: q,
            applicationBotIds: Y,
            builtInIntegrations: J,
            customWebhooks: Q,
            followedChannelWebhooks: X
        } = l.useMemo(() => {
            let e = {},
                n = {},
                t = {},
                i = [],
                l = [];
            if (null != y)
                for (let i of y)
                    if ('discord' === i.type) {
                        if (null != i.application) {
                            var r;
                            (e[i.application.id] = {
                                application: i.application,
                                integration: i,
                                webhooks: []
                            }),
                                (null === (r = i.application.bot) || void 0 === r ? void 0 : r.id) !== void 0 && (n[i.application.bot.id] = i.application.id);
                        }
                    } else !(i.type in t) && (t[i.type] = []), t[i.type].push(i);
            for (let n of O) {
                if (n.channel_id in U || n.channel_id in G) null != n.application_id && n.application_id in e ? e[n.application_id].webhooks.push(n) : n.type === j.ylB.CHANNEL_FOLLOWER ? l.push(n) : i.push(n);
            }
            return {
                applicationIntegrations: e,
                applicationBotIds: n,
                builtInIntegrations: t,
                customWebhooks: i,
                followedChannelWebhooks: l
            };
        }, [y, U, G, O]);
    l.useEffect(() => {
        if (!k)
            switch (n) {
                case j.b4C.TWITCH:
                    null == J[j.ABu.TWITCH] && d.Z.setSection(j.b4C.OVERVIEW);
                    break;
                case j.b4C.YOUTUBE:
                    null == J[j.ABu.YOUTUBE] && d.Z.setSection(j.b4C.OVERVIEW);
                    break;
                case j.b4C.APPLICATION:
                    (null == H || !(H in Y || H in q)) && d.Z.setSection(j.b4C.OVERVIEW);
            }
    }, [q, Y, J, H, n, k]),
        l.useEffect(() => {
            if ((null == r ? void 0 : r.id) != null) p.Z.getEntitlementsForGuildFetchState(r.id) === p.M.NOT_FETCHED && h.i1(r.id);
        }, [null == r ? void 0 : r.id]);
    let $ = null;
    switch (n) {
        case j.b4C.TWITCH:
            null != J[j.ABu.TWITCH] &&
                ($ = (0, i.jsx)(C.Z, {
                    guild: r,
                    integrations: J[j.ABu.TWITCH],
                    editedIntegration: R,
                    labelText: S.intl.string(S.t.q4pBGx),
                    platformType: j.ABu.TWITCH,
                    descriptionText: S.intl.string(S.t.V9kNqq),
                    helpText: S.intl.format(S.t.ro1jEB, {
                        connectAction: () =>
                            (0, u.Z)({
                                platformType: j.ABu.TWITCH,
                                location: 'Integration Settings'
                            }),
                        helpdeskArticle: b.Z.getArticleURL(j.BhN.TWITCH_INTEGRATION)
                    }),
                    canNavigate: V
                }));
            break;
        case j.b4C.YOUTUBE:
            null != J[j.ABu.YOUTUBE] &&
                ($ = (0, i.jsx)(C.Z, {
                    guild: r,
                    integrations: J[j.ABu.YOUTUBE],
                    editedIntegration: R,
                    labelText: S.intl.string(S.t.aS6cKy),
                    platformType: j.ABu.YOUTUBE,
                    descriptionText: S.intl.string(S.t['7Tv7JC']),
                    helpText: S.intl.format(S.t['4OSAQ0'], {
                        connectAction: () => (0, u.Z)({ platformType: j.ABu.YOUTUBE }),
                        helpdeskArticle: b.Z.getArticleURL(j.BhN.YOUTUBE_INTEGRATION)
                    }),
                    canNavigate: V
                }));
            break;
        case j.b4C.APPLICATION:
            var ee;
            let en = null != H ? (null !== (ee = q[Y[H]]) && void 0 !== ee ? ee : q[H]) : null;
            null != en &&
                ($ = (0, i.jsx)(v.Z, {
                    guild: r,
                    applicationIntegration: en,
                    editedWebhook: L,
                    selectableWebhookChannels: U,
                    errors: M,
                    canNavigate: V
                }));
            break;
        case j.b4C.CHANNEL_FOLLOWING:
            $ = (0, i.jsx)(I.Z, {
                followedChannelWebhooks: X,
                editedWebhook: L,
                selectableWebhookChannels: U,
                canNavigate: V,
                errors: M
            });
            break;
        case j.b4C.WEBHOOKS:
            $ = (0, i.jsx)(_.Z, {
                guild: r,
                channel: A,
                customWebhooks: Q,
                editedWebhook: L,
                selectableWebhookChannels: {
                    ...U,
                    ...G
                },
                canNavigate: V,
                refToScroller: w,
                errors: M
            });
            break;
        case j.b4C.CHANNELS_SYNCING:
            $ = (0, i.jsx)(N.Z, { guild: r });
            break;
        default:
            $ = (0, i.jsx)(T.Z, {
                guild: r,
                channel: A,
                applicationIntegrations: q,
                builtInIntegrations: J,
                customWebhooks: Q,
                followedChannelWebhooks: X,
                isLoading: k || null == r,
                canCreateWebhook: null != F,
                onManageCustomWebhooks: () => {
                    d.Z.setSection(j.b4C.WEBHOOKS);
                },
                onManageFollowedChannels: () => {
                    d.Z.setSection(j.b4C.CHANNEL_FOLLOWING);
                },
                onManageApplication: (e) => {
                    d.Z.setSection(j.b4C.APPLICATION, e);
                },
                onManageBuiltIn: (e) => {
                    switch (e) {
                        case j.ABu.TWITCH:
                            d.Z.setSection(j.b4C.TWITCH);
                            break;
                        case j.ABu.YOUTUBE:
                            d.Z.setSection(j.b4C.YOUTUBE);
                    }
                },
                onManageChannelsSyncing: () => {
                    d.Z.setSection(j.b4C.CHANNELS_SYNCING);
                }
            });
    }
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(m.Z, {
                align: m.Z.Align.CENTER,
                className: E.breadcrumbs,
                children:
                    n === j.b4C.OVERVIEW
                        ? (0, i.jsx)(s.FormTitle, {
                              tag: 'h1',
                              children: Z(j.b4C.OVERVIEW)
                          })
                        : (0, i.jsx)(s.Breadcrumbs, {
                              activeId: n.toString(),
                              breadcrumbs: [j.b4C.OVERVIEW, n].map((e) => ({
                                  id: e.toString(),
                                  label: Z(e, q[H])
                              })),
                              onBreadcrumbClick: (e) => {
                                  if (n !== parseInt(e.id)) K(parseInt(e.id));
                              },
                              renderCustomBreadcrumb: (e, n) =>
                                  (0, i.jsx)(s.FormTitle, {
                                      tag: 'h1',
                                      className: n ? E.breadcrumbActive : E.breadcrumbInactive,
                                      children: e.label
                                  })
                          })
            }),
            $
        ]
    });
});
