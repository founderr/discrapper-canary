t.d(n, {
    Z: function () {
        return U;
    }
}),
    t(653041),
    t(47120);
var i = t(200651),
    l = t(192379),
    r = t(120356),
    a = t.n(r),
    o = t(658722),
    s = t.n(o),
    d = t(442837),
    c = t(780384),
    u = t(481060),
    m = t(37234),
    h = t(410030),
    p = t(726542),
    g = t(132871),
    f = t(147890),
    x = t(835473),
    b = t(231757),
    v = t(600164),
    C = t(685929),
    I = t(163400),
    N = t(553795),
    T = t(496675),
    _ = t(626135),
    j = t(768581),
    S = t(63063),
    E = t(709054),
    Z = t(51144),
    A = t(327934),
    y = t(585835),
    R = t(997787),
    O = t(981631),
    L = t(388032),
    k = t(560551),
    w = t(509399),
    M = t(790904),
    B = t(609182);
function P(e, n) {
    return n.includes(e);
}
function D(e) {
    let { query: n, setQuery: t } = e,
        r = l.useCallback(
            (e) => {
                t(e);
            },
            [t]
        );
    return (0, i.jsx)('div', {
        className: k.searchContainer,
        children: (0, i.jsx)(u.SearchBar, {
            size: u.SearchBar.Sizes.MEDIUM,
            query: n,
            onChange: r,
            onClear: () => t(''),
            placeholder: L.intl.string(L.t['5prvKS']),
            'aria-label': L.intl.string(L.t['5prvKS'])
        })
    });
}
function U(e) {
    var n, t, r, o, U, G, F, H;
    let { guild: W, channel: z, applicationIntegrations: V, builtInIntegrations: K, customWebhooks: q, followedChannelWebhooks: Y, isLoading: J, canCreateWebhook: Q, onManageBuiltIn: X, onManageCustomWebhooks: $, onManageFollowedChannels: ee, onManageApplication: en, onManageChannelsSyncing: et } = e,
        ei = (0, h.ZP)(),
        [el, er] = l.useState(''),
        { isFetchingConnections: ea, accounts: eo } = (0, d.cj)(
            [N.Z],
            () => ({
                isFetchingConnections: N.Z.isFetching(),
                accounts: N.Z.getAccounts()
            }),
            []
        ),
        { canManageWebhooks: es, canManageGuild: ed } = (0, d.cj)(
            [T.Z],
            () => ({
                canManageWebhooks: (null != W && T.Z.can(O.Plq.MANAGE_WEBHOOKS, W)) || (null != z && T.Z.can(O.Plq.MANAGE_WEBHOOKS, z)),
                canManageGuild: null != W && null == z && T.Z.can(O.Plq.MANAGE_GUILD, W)
            }),
            [W, z]
        ),
        ec = (0, C.Y)(z),
        eu = (0, x.q)(null == z ? void 0 : null === (n = z.linkedLobby) || void 0 === n ? void 0 : n.application_id),
        em = (0, I.F)(null == W ? void 0 : W.id),
        {
            availableTwitchIntegrations: eh,
            availableYoutubeIntegrations: ep,
            guildTwitchIntegrations: eg,
            guildYoutubeIntegrations: ef
        } = l.useMemo(() => {
            var e, n, t, i, l, r, a, o;
            return {
                availableTwitchIntegrations: null !== (l = null === (e = K.twitch) || void 0 === e ? void 0 : e.length) && void 0 !== l ? l : 0,
                availableYoutubeIntegrations: null !== (r = null === (n = K.youtube) || void 0 === n ? void 0 : n.length) && void 0 !== r ? r : 0,
                guildTwitchIntegrations: null !== (a = null === (t = K.twitch) || void 0 === t ? void 0 : t.filter((e) => e.enabled).length) && void 0 !== a ? a : 0,
                guildYoutubeIntegrations: null !== (o = null === (i = K.youtube) || void 0 === i ? void 0 : i.filter((e) => e.enabled).length) && void 0 !== o ? o : 0
            };
        }, [K.twitch, K.youtube]),
        { showTwitchCard: ex, showYoutubeCard: eb } = l.useMemo(() => {
            if (ea || !ed)
                return {
                    showTwitchCard: !1,
                    showYoutubeCard: !1
                };
            let e = null == W ? void 0 : W.hasFeature(O.oNc.COMMUNITY),
                n = eo.filter((e) => e.type === O.ABu.TWITCH).length > 0,
                t = eo.filter((e) => e.type === O.ABu.YOUTUBE).length > 0;
            return {
                showTwitchCard: eh > 0 || (!n && e),
                showYoutubeCard: ep > 0 || (!t && e)
            };
        }, [ea, ed, W, eo, eh, ep]),
        ev = Object.values(V).length,
        eC = l.useMemo(() => {
            let e = ev > 100 ? P : s();
            return Object.values(V).filter((n) => {
                var t, i, l;
                let { application: r } = n;
                return (t = r), (i = el), (l = e), !!('' === (i = i.trim().toLowerCase()) || t.id === i || l(i, t.name.toLowerCase()) || (null != t.bot && l(i, t.bot.username.toLowerCase()))) || !1;
            });
        }, [V, ev, el]),
        eI = (0, d.e7)(
            [R.Z],
            () => {
                if (null != W) return eC.find((e) => R.Z.canShowOverviewTooltip(W.id, e.integration.id));
            },
            [eC, W]
        ),
        eN = l.useMemo(() => (void 0 !== eI ? [eI, ...eC.filter((e) => e.integration.id !== eI.integration.id)] : eC), [eC, eI]),
        eT = (0, u.useModalsStore)(u.hasAnyModalOpenSelector),
        [e_, ej] = l.useState(!1),
        eS = l.useRef(0),
        eE = () => {
            ej(!0),
                clearTimeout(eS.current),
                (eS.current = setTimeout(() => {
                    ej(!1);
                }, 200));
        };
    l.useEffect(() => (window.addEventListener('scroll', eE, !0), () => window.removeEventListener('scroll', eE)));
    let eZ = eN.map((e) => {
            let n = !eT && e.integration.id === (null == eI ? void 0 : eI.integration.id);
            return (function (e, n, t, l, r) {
                var a;
                let { application: o, integration: s } = n,
                    d = [];
                return (
                    null != s.user
                        ? d.push({
                              icon: u.ClockIcon,
                              text: L.intl.formatToPlainString(L.t.Nu9sam, {
                                  timestamp: E.default.extractTimestamp(s.id),
                                  user: Z.ZP.getUserTag(s.user)
                              })
                          })
                        : d.push({
                              icon: u.ClockIcon,
                              text: L.intl.formatToPlainString(L.t.gcdJ8P, { timestamp: E.default.extractTimestamp(s.id) })
                          }),
                    (0, i.jsx)(
                        y.Z,
                        {
                            name: o.name,
                            imageSrc: null !== (a = o.getIconURL(48)) && void 0 !== a ? a : j.pK['0'],
                            integration: n,
                            buttonText: L.intl.string(L.t['Z/qRnJ']),
                            hasNextSection: !0,
                            onButtonClick: () => {
                                t(o.id),
                                    _.default.track(O.rMx.APP_MANAGE_CTA_CLICKED, {
                                        application_id: o.id,
                                        guild_id: null == e ? void 0 : e.id,
                                        is_admin: null != e ? T.Z.can(O.Plq.ADMINISTRATOR, e) : void 0
                                    });
                            },
                            details: d,
                            guildId: null == e ? void 0 : e.id,
                            isScrolling: l,
                            canShowMigrationTooltip: r
                        },
                        'integration-'.concat(s.id)
                    )
                );
            })(W, e, en, e_, n);
        }),
        eA = (0, i.jsx)('div', { className: k.footerImage });
    0 === eZ.length &&
        ed &&
        ((eZ = (function (e, n, t) {
            let l = (0, c.wj)(e) ? M : B,
                r = (0, i.jsxs)(v.Z, {
                    direction: v.Z.Direction.VERTICAL,
                    align: v.Z.Align.CENTER,
                    className: k.emptyStateWrapper,
                    children: [
                        (0, i.jsx)('img', {
                            alt: '',
                            src: l,
                            className: k.emptyStateSearchImage
                        }),
                        (0, i.jsx)(u.Card, {
                            editable: !0,
                            className: k.emptyStateCard,
                            children: (0, i.jsx)(u.Text, {
                                color: 'text-muted',
                                variant: 'text-sm/normal',
                                children: L.intl.string(L.t.EVWFNj)
                            })
                        })
                    ]
                }),
                a = (0, i.jsx)(u.Card, {
                    editable: !0,
                    className: k.emptyStateCard,
                    children: (0, i.jsxs)('div', {
                        className: k.emptyStateText,
                        children: [
                            (0, i.jsx)('img', {
                                alt: '',
                                src: w,
                                className: k.emptyStateImage
                            }),
                            (0, i.jsx)(u.Heading, {
                                color: 'header-secondary',
                                variant: 'heading-xl/bold',
                                children: L.intl.string(L.t.nQQeFB)
                            }),
                            (0, i.jsx)(u.Text, {
                                color: 'header-secondary',
                                variant: 'text-sm/normal',
                                children: L.intl.format(L.t.snvKU1, {
                                    handleGoToAppDirectory: () => {
                                        (0, f.goToAppDirectory)({
                                            guildId: t,
                                            entrypoint: { name: g.ApplicationDirectoryEntrypointNames.GUILD_INTEGRATION_SETTINGS }
                                        }),
                                            (0, m.xf)();
                                    }
                                })
                            })
                        ]
                    })
                });
            return n > 0 ? r : a;
        })(ei, ev, null == W ? void 0 : W.id)),
        (eA = null));
    let ey = S.Z.getArticleURL(O.BhN.INTEGRATIONS),
        eR = null != z ? L.t.YV0vh4 : L.t.FnZEJi,
        eO = [];
    if (es) {
        let e, n;
        if (
            (eO.push(
                ((t = q.length),
                (r = Q),
                (o = $),
                t > 0 ? (n = (0, i.jsx)(u.ChevronLargeRightIcon, { size: 'xs' })) : (e = L.intl.string(L.t.lOQqJC)),
                (0, i.jsx)(
                    y.Z,
                    {
                        name: L.intl.string(L.t.xOg4SE),
                        icon: u.WebhookIcon,
                        buttonText: e,
                        buttonDisabled: !r,
                        trailing: n,
                        onButtonClick: o,
                        hasNextSection: t > 0,
                        details: [{ text: L.intl.formatToPlainString(L.t['6HqDfX'], { count: t }) }]
                    },
                    'webhooks'
                ))
            ),
            (null == z ? void 0 : z.type) !== O.d4z.GUILD_VOICE && ((null == z ? void 0 : z.type) == null || !O.TPd.GUILD_THREADS_ONLY.has(z.type)))
        ) {
            let e, n, t;
            eO.push(
                ((U = Y.length),
                (G = ee),
                U > 0 ? ((t = (0, i.jsx)(u.ChevronLargeRightIcon, { size: 'xs' })), (n = G)) : ((e = L.intl.string(L.t['ZwSt+f'])), (n = () => open(S.Z.getArticleURL(O.BhN.CHANNEL_FOLLOWING)))),
                (0, i.jsx)(
                    y.Z,
                    {
                        name: L.intl.string(L.t.OrV60t),
                        icon: u.ChannelsFollowedIcon,
                        buttonText: e,
                        onButtonClick: n,
                        trailing: t,
                        hasNextSection: U > 0,
                        details: [{ text: L.intl.formatToPlainString(L.t.JUNGIS, { count: U }) }]
                    },
                    'channels-followed'
                ))
            );
        }
    }
    if (null == z && em.length > 0) {
        eO.push(
            ((F = em.length),
            (H = et),
            (0, i.jsx)(
                y.Z,
                {
                    name: L.intl.string(L.t.tqtDXF),
                    icon: u.RefreshIcon,
                    trailing: (0, i.jsx)(u.ChevronLargeRightIcon, { size: 'xs' }),
                    onButtonClick: H,
                    hasNextSection: !0,
                    details: [{ text: L.intl.formatToPlainString(L.t['puxS4+'], { count: F }) }]
                },
                'channels-syncing'
            ))
        );
    }
    ex &&
        eO.push(
            (function (e, n, t) {
                let l, r, a, o;
                let s = p.Z.get(O.ABu.TWITCH);
                return (
                    e > 0
                        ? ((o = (0, i.jsx)(u.ChevronLargeRightIcon, { size: 'xs' })), (r = L.intl.formatToPlainString(L.t.FFpnT0, { count: n })), (a = () => t(O.ABu.TWITCH)))
                        : ((l = L.intl.string(L.t.bkvGkp)),
                          (r = L.intl.string(L.t.Qq3X2N)),
                          (a = () =>
                              (0, b.Z)({
                                  platformType: O.ABu.TWITCH,
                                  location: 'Integration Settings'
                              }))),
                    (0, i.jsx)(
                        y.Z,
                        {
                            name: L.intl.string(L.t.q4pBGx),
                            icon: s.icon.whiteSVG,
                            iconBackgroundColor: s.color,
                            iconClassName: k.platformIcon,
                            buttonText: l,
                            onButtonClick: a,
                            trailing: o,
                            hasNextSection: e > 0,
                            details: [{ text: r }]
                        },
                        'integrations-twitch'
                    )
                );
            })(eh, eg, X)
        ),
        eb &&
            eO.push(
                (function (e, n, t) {
                    let l, r, a, o;
                    let s = p.Z.get(O.ABu.YOUTUBE);
                    return (
                        e > 0
                            ? ((o = (0, i.jsx)(u.ChevronLargeRightIcon, { size: 'xs' })), (r = L.intl.formatToPlainString(L.t.b2g5vL, { count: n })), (a = () => t(O.ABu.YOUTUBE)))
                            : ((l = L.intl.string(L.t.xEyQ3d)),
                              (r = L.intl.string(L.t.T0ivgY)),
                              (a = () =>
                                  (0, b.Z)({
                                      platformType: O.ABu.YOUTUBE,
                                      location: 'Integration Settings'
                                  }))),
                        (0, i.jsx)(
                            y.Z,
                            {
                                name: L.intl.string(L.t.aS6cKy),
                                icon: s.icon.whiteSVG,
                                iconBackgroundColor: s.color,
                                iconClassName: k.platformIcon,
                                buttonText: l,
                                onButtonClick: a,
                                trailing: o,
                                hasNextSection: e > 0,
                                details: [{ text: r }]
                            },
                            'integrations-youtube'
                        )
                    );
                })(ep, ef, X)
            );
    let eL = null != z && ec && null != eu;
    return (0, i.jsxs)(u.FormSection, {
        className: a()(null != eA ? k.footerPlaceholder : null),
        children: [
            (0, i.jsx)(u.FormText, {
                type: u.FormTextTypes.DESCRIPTION,
                children: L.intl.format(eR, { helpdeskArticle: ey })
            }),
            (0, i.jsx)(u.FormDivider, { className: k.divider }),
            J || ea || null == W
                ? (0, i.jsx)(u.Spinner, {
                      className: k.__invalid_spinner,
                      type: u.Spinner.Type.SPINNING_CIRCLE
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          eO,
                          eL &&
                              (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      eO.length > 0 ? (0, i.jsx)(u.FormDivider, { className: k.divider }) : null,
                                      (0, i.jsx)(u.Heading, {
                                          variant: 'heading-md/semibold',
                                          className: k.sectionHeader,
                                          children: L.intl.string(L.t.oAvIAg)
                                      }),
                                      (0, i.jsx)(A.I, {
                                          channel: z,
                                          application: eu,
                                          showApplicationImage: !0,
                                          name: eu.name,
                                          hasNextSection: !0,
                                          iconClassName: k.linkedLobbyIcon,
                                          trailing: (0, i.jsx)(u.PencilIcon, { size: 'xs' })
                                      })
                                  ]
                              }),
                          ed
                              ? (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        eO.length > 0 || eL ? (0, i.jsx)(u.FormDivider, { className: k.divider }) : null,
                                        (0, i.jsx)(u.Heading, {
                                            variant: 'heading-md/semibold',
                                            className: k.sectionHeader,
                                            children: L.intl.string(L.t.pUBKho)
                                        }),
                                        ev > 4
                                            ? (0, i.jsx)(D, {
                                                  query: el,
                                                  setQuery: er
                                              })
                                            : null,
                                        eZ
                                    ]
                                })
                              : null,
                          eA
                      ]
                  })
        ]
    });
}
