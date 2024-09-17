t.d(n, {
    Z: function () {
        return U;
    }
}),
    t(653041),
    t(47120);
var i = t(735250),
    a = t(470079),
    s = t(120356),
    l = t.n(s),
    o = t(658722),
    r = t.n(o),
    d = t(442837),
    c = t(780384),
    u = t(481060),
    I = t(37234),
    m = t(410030),
    _ = t(726542),
    N = t(132871),
    E = t(147890),
    T = t(835473),
    h = t(231757),
    g = t(600164),
    p = t(685929),
    f = t(296023),
    O = t(553795),
    x = t(496675),
    C = t(626135),
    S = t(768581),
    A = t(63063),
    R = t(709054),
    b = t(51144),
    Z = t(585835),
    v = t(997787),
    M = t(981631),
    L = t(689938),
    j = t(560551),
    D = t(509399),
    P = t(790904),
    B = t(609182);
function y(e) {
    var n;
    let { channel: s, application: l } = e,
        o = (0, f.w)(s),
        r = a.useCallback(
            () =>
                (0, u.openModalLazy)(async () => {
                    let { default: e } = await t.e('14089').then(t.bind(t, 262528));
                    return (n) =>
                        (0, i.jsx)(e, {
                            ...n,
                            channel: s,
                            application: l
                        });
                }),
            [l, s]
        );
    return (0, i.jsx)(
        Z.Z,
        {
            name: l.name,
            imageSrc: null !== (n = l.getIconURL(48)) && void 0 !== n ? n : S.pK['0'],
            iconClassName: j.linkedLobbyIcon,
            buttonText: L.Z.Messages.EDIT,
            onButtonClick: r,
            hasNextSection: !0,
            details: null != o ? [{ text: o }] : void 0
        },
        'linked-lobby'
    );
}
function G(e, n) {
    return n.includes(e);
}
function k(e) {
    let { query: n, setQuery: t } = e,
        s = a.useCallback(
            (e) => {
                t(e);
            },
            [t]
        );
    return (0, i.jsx)('div', {
        className: j.searchContainer,
        children: (0, i.jsx)(u.SearchBar, {
            size: u.SearchBar.Sizes.MEDIUM,
            query: n,
            onChange: s,
            onClear: () => t(''),
            placeholder: L.Z.Messages.INTEGRATIONS_SEARCH,
            'aria-label': L.Z.Messages.INTEGRATIONS_SEARCH
        })
    });
}
function U(e) {
    var n, t, s, o, f, U;
    let { guild: H, channel: w, applicationIntegrations: W, builtInIntegrations: F, customWebhooks: V, followedChannelWebhooks: K, isLoading: Y, canCreateWebhook: z, onManageBuiltIn: q, onManageCustomWebhooks: X, onManageFollowedChannels: J, onManageApplication: Q } = e,
        $ = (0, m.ZP)(),
        [ee, en] = a.useState(''),
        { isFetchingConnections: et, accounts: ei } = (0, d.cj)(
            [O.Z],
            () => ({
                isFetchingConnections: O.Z.isFetching(),
                accounts: O.Z.getAccounts()
            }),
            []
        ),
        { canManageWebhooks: ea, canManageGuild: es } = (0, d.cj)(
            [x.Z],
            () => ({
                canManageWebhooks: (null != H && x.Z.can(M.Plq.MANAGE_WEBHOOKS, H)) || (null != w && x.Z.can(M.Plq.MANAGE_WEBHOOKS, w)),
                canManageGuild: null != H && null == w && x.Z.can(M.Plq.MANAGE_GUILD, H)
            }),
            [H, w]
        ),
        el = (0, p.Y)(w),
        eo = (0, T.q)(null == w ? void 0 : null === (n = w.linkedLobby) || void 0 === n ? void 0 : n.application_id),
        {
            availableTwitchIntegrations: er,
            availableYoutubeIntegrations: ed,
            guildTwitchIntegrations: ec,
            guildYoutubeIntegrations: eu
        } = a.useMemo(() => {
            var e, n, t, i, a, s, l, o;
            return {
                availableTwitchIntegrations: null !== (a = null === (e = F.twitch) || void 0 === e ? void 0 : e.length) && void 0 !== a ? a : 0,
                availableYoutubeIntegrations: null !== (s = null === (n = F.youtube) || void 0 === n ? void 0 : n.length) && void 0 !== s ? s : 0,
                guildTwitchIntegrations: null !== (l = null === (t = F.twitch) || void 0 === t ? void 0 : t.filter((e) => e.enabled).length) && void 0 !== l ? l : 0,
                guildYoutubeIntegrations: null !== (o = null === (i = F.youtube) || void 0 === i ? void 0 : i.filter((e) => e.enabled).length) && void 0 !== o ? o : 0
            };
        }, [F.twitch, F.youtube]),
        { showTwitchCard: eI, showYoutubeCard: em } = a.useMemo(() => {
            if (et || !es)
                return {
                    showTwitchCard: !1,
                    showYoutubeCard: !1
                };
            let e = null == H ? void 0 : H.hasFeature(M.oNc.COMMUNITY),
                n = ei.filter((e) => e.type === M.ABu.TWITCH).length > 0,
                t = ei.filter((e) => e.type === M.ABu.YOUTUBE).length > 0;
            return {
                showTwitchCard: er > 0 || (!n && e),
                showYoutubeCard: ed > 0 || (!t && e)
            };
        }, [et, es, H, ei, er, ed]),
        e_ = Object.values(W).length,
        eN = a.useMemo(() => {
            let e = e_ > 100 ? G : r();
            return Object.values(W).filter((n) => {
                var t, i, a;
                let { application: s } = n;
                return (t = s), (i = ee), (a = e), !!('' === (i = i.trim().toLowerCase()) || t.id === i || a(i, t.name.toLowerCase()) || (null != t.bot && a(i, t.bot.username.toLowerCase()))) || !1;
            });
        }, [W, e_, ee]),
        eE = (0, d.e7)(
            [v.Z],
            () => {
                if (null != H) return eN.find((e) => v.Z.canShowOverviewTooltip(H.id, e.integration.id));
            },
            [eN, H]
        ),
        eT = a.useMemo(() => (void 0 !== eE ? [eE, ...eN.filter((e) => e.integration.id !== eE.integration.id)] : eN), [eN, eE]),
        eh = (0, u.useModalsStore)(u.hasAnyModalOpenSelector),
        [eg, ep] = a.useState(!1),
        ef = a.useRef(0),
        eO = () => {
            ep(!0),
                clearTimeout(ef.current),
                (ef.current = setTimeout(() => {
                    ep(!1);
                }, 200));
        };
    a.useEffect(() => (window.addEventListener('scroll', eO, !0), () => window.removeEventListener('scroll', eO)));
    let ex = eT.map((e) => {
            let n = !eh && e.integration.id === (null == eE ? void 0 : eE.integration.id);
            return (function (e, n, t, a, s) {
                var l;
                let { application: o, integration: r } = n,
                    d = [];
                return (
                    null != r.user
                        ? d.push({
                              icon: u.ClockIcon,
                              text: L.Z.Messages.INTEGRATION_ADDED_USER_DATE.format({
                                  timestamp: R.default.extractTimestamp(r.id),
                                  user: b.ZP.getUserTag(r.user)
                              })
                          })
                        : d.push({
                              icon: u.ClockIcon,
                              text: L.Z.Messages.INTEGRATION_ADDED_DATE.format({ timestamp: R.default.extractTimestamp(r.id) })
                          }),
                    (0, i.jsx)(
                        Z.Z,
                        {
                            name: o.name,
                            imageSrc: null !== (l = o.getIconURL(48)) && void 0 !== l ? l : S.pK['0'],
                            integration: n,
                            buttonText: L.Z.Messages.INTEGRATIONS_APPLICATION_BUTTON,
                            hasNextSection: !0,
                            onButtonClick: () => {
                                t(o.id),
                                    C.default.track(M.rMx.APP_MANAGE_CTA_CLICKED, {
                                        application_id: o.id,
                                        guild_id: null == e ? void 0 : e.id,
                                        is_admin: null != e ? x.Z.can(M.Plq.ADMINISTRATOR, e) : void 0
                                    });
                            },
                            details: d,
                            guildId: null == e ? void 0 : e.id,
                            isScrolling: a,
                            canShowMigrationTooltip: s
                        },
                        'integration-'.concat(r.id)
                    )
                );
            })(H, e, Q, eg, n);
        }),
        eC = (0, i.jsx)('div', { className: j.footerImage });
    0 === ex.length &&
        es &&
        ((ex = (function (e, n, t) {
            let a = (0, c.wj)(e) ? P : B,
                s = (0, i.jsxs)(g.Z, {
                    direction: g.Z.Direction.VERTICAL,
                    align: g.Z.Align.CENTER,
                    className: j.emptyStateWrapper,
                    children: [
                        (0, i.jsx)('img', {
                            alt: '',
                            src: a,
                            className: j.emptyStateSearchImage
                        }),
                        (0, i.jsx)(u.Card, {
                            editable: !0,
                            className: j.emptyStateCard,
                            children: (0, i.jsx)(u.Text, {
                                color: 'text-muted',
                                variant: 'text-sm/normal',
                                children: L.Z.Messages.INTEGRATIONS_SEARCH_NO_MATCH
                            })
                        })
                    ]
                }),
                l = (0, i.jsx)(u.Card, {
                    editable: !0,
                    className: j.emptyStateCard,
                    children: (0, i.jsxs)('div', {
                        className: j.emptyStateText,
                        children: [
                            (0, i.jsx)('img', {
                                alt: '',
                                src: D,
                                className: j.emptyStateImage
                            }),
                            (0, i.jsx)(u.Heading, {
                                color: 'header-secondary',
                                variant: 'heading-xl/bold',
                                children: L.Z.Messages.INTEGRATIONS_OVERVIEW_NO_APPLICATIONS
                            }),
                            (0, i.jsx)(u.Text, {
                                color: 'header-secondary',
                                variant: 'text-sm/normal',
                                children: L.Z.Messages.INTEGRATIONS_OVERVIEW_NO_APPLICATIONS_APP_DIRECTORY_CTA.format({
                                    handleGoToAppDirectory: () => {
                                        (0, E.goToAppDirectory)({
                                            guildId: t,
                                            entrypoint: { name: N.ApplicationDirectoryEntrypointNames.GUILD_INTEGRATION_SETTINGS }
                                        }),
                                            (0, I.xf)();
                                    }
                                })
                            })
                        ]
                    })
                });
            return n > 0 ? s : l;
        })($, e_, null == H ? void 0 : H.id)),
        (eC = null));
    let eS = A.Z.getArticleURL(M.BhN.INTEGRATIONS),
        eA = null != w ? L.Z.Messages.INTEGRATIONS_OVERVIEW_DESCRIPTION_CHANNEL : L.Z.Messages.INTEGRATIONS_OVERVIEW_DESCRIPTION_GUILD,
        eR = [];
    if (ea) {
        let e;
        if (
            (eR.push(
                ((t = V.length),
                (s = z),
                (o = X),
                (e = t > 0 ? L.Z.Messages.INTEGRATIONS_WEBHOOKS_BUTTON : L.Z.Messages.INTEGRATIONS_WEBHOOKS_EMPTY_BUTTON),
                (0, i.jsx)(
                    Z.Z,
                    {
                        name: L.Z.Messages.INTEGRATIONS_WEBHOOKS,
                        icon: u.WebhookIcon,
                        buttonText: e,
                        buttonDisabled: !s,
                        onButtonClick: o,
                        hasNextSection: t > 0,
                        details: [{ text: L.Z.Messages.INTEGRATIONS_WEBHOOKS_SUMMARY.format({ count: t }) }]
                    },
                    'webhooks'
                ))
            ),
            (null == w ? void 0 : w.type) !== M.d4z.GUILD_VOICE && ((null == w ? void 0 : w.type) == null || !M.TPd.GUILD_THREADS_ONLY.has(w.type)))
        ) {
            let e, n;
            eR.push(
                ((f = K.length),
                (U = J),
                f > 0 ? ((e = L.Z.Messages.INTEGRATIONS_CHANNEL_FOLLOWING_BUTTON), (n = U)) : ((e = L.Z.Messages.INTEGRATIONS_CHANNEL_FOLLOWING_EMPTY_BUTTON), (n = () => open(A.Z.getArticleURL(M.BhN.CHANNEL_FOLLOWING)))),
                (0, i.jsx)(
                    Z.Z,
                    {
                        name: L.Z.Messages.INTEGRATIONS_CHANNEL_FOLLOWING,
                        icon: u.ChannelsFollowedIcon,
                        buttonText: e,
                        onButtonClick: n,
                        hasNextSection: f > 0,
                        details: [{ text: L.Z.Messages.INTEGRATIONS_CHANNEL_FOLLOWING_SUMMARY.format({ count: f }) }]
                    },
                    'channels-followed'
                ))
            );
        }
    }
    eI &&
        eR.push(
            (function (e, n, t) {
                let a, s, l;
                let o = _.Z.get(M.ABu.TWITCH);
                return (
                    e > 0
                        ? ((a = L.Z.Messages.INTEGRATIONS_TWITCH_BUTTON), (s = L.Z.Messages.INTEGRATIONS_TWITCH_SUMMARY.format({ count: n })), (l = () => t(M.ABu.TWITCH)))
                        : ((a = L.Z.Messages.INTEGRATIONS_TWITCH_EMPTY_BUTTON),
                          (s = L.Z.Messages.INTEGRATIONS_TWITCH_EMPTY_SUMMARY),
                          (l = () =>
                              (0, h.Z)({
                                  platformType: M.ABu.TWITCH,
                                  location: 'Integration Settings'
                              }))),
                    (0, i.jsx)(
                        Z.Z,
                        {
                            name: L.Z.Messages.INTEGRATIONS_TWITCH,
                            icon: o.icon.whiteSVG,
                            iconBackgroundColor: o.color,
                            iconClassName: j.platformIcon,
                            buttonText: a,
                            onButtonClick: l,
                            hasNextSection: e > 0,
                            details: [{ text: s }]
                        },
                        'integrations-twitch'
                    )
                );
            })(er, ec, q)
        ),
        em &&
            eR.push(
                (function (e, n, t) {
                    let a, s, l;
                    let o = _.Z.get(M.ABu.YOUTUBE);
                    return (
                        e > 0
                            ? ((a = L.Z.Messages.INTEGRATIONS_YOUTUBE_BUTTON), (s = L.Z.Messages.INTEGRATIONS_YOUTUBE_SUMMARY.format({ count: n })), (l = () => t(M.ABu.YOUTUBE)))
                            : ((a = L.Z.Messages.INTEGRATIONS_YOUTUBE_EMPTY_BUTTON),
                              (s = L.Z.Messages.INTEGRATIONS_YOUTUBE_EMPTY_SUMMARY),
                              (l = () =>
                                  (0, h.Z)({
                                      platformType: M.ABu.YOUTUBE,
                                      location: 'Integration Settings'
                                  }))),
                        (0, i.jsx)(
                            Z.Z,
                            {
                                name: L.Z.Messages.INTEGRATIONS_YOUTUBE,
                                icon: o.icon.whiteSVG,
                                iconBackgroundColor: o.color,
                                iconClassName: j.platformIcon,
                                buttonText: a,
                                onButtonClick: l,
                                hasNextSection: e > 0,
                                details: [{ text: s }]
                            },
                            'integrations-youtube'
                        )
                    );
                })(ed, eu, q)
            );
    let eb = null != w && el && null != eo;
    return (0, i.jsxs)(u.FormSection, {
        className: l()(null != eC ? j.footerPlaceholder : null),
        children: [
            (0, i.jsx)(u.FormText, {
                type: u.FormTextTypes.DESCRIPTION,
                children: eA.format({ helpdeskArticle: eS })
            }),
            (0, i.jsx)(u.FormDivider, { className: j.divider }),
            Y || et || null == H
                ? (0, i.jsx)(u.Spinner, {
                      className: j.__invalid_spinner,
                      type: u.Spinner.Type.SPINNING_CIRCLE
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          eR,
                          eb &&
                              (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      eR.length > 0 ? (0, i.jsx)(u.FormDivider, { className: j.divider }) : null,
                                      (0, i.jsx)(u.Heading, {
                                          variant: 'heading-md/semibold',
                                          className: j.sectionHeader,
                                          children: L.Z.Messages.INTEGRATIONS_LINKED_LOBBY_SECTION_TITLE
                                      }),
                                      (0, i.jsx)(y, {
                                          channel: w,
                                          application: eo
                                      })
                                  ]
                              }),
                          es
                              ? (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        eR.length > 0 || eb ? (0, i.jsx)(u.FormDivider, { className: j.divider }) : null,
                                        (0, i.jsx)(u.Heading, {
                                            variant: 'heading-md/semibold',
                                            className: j.sectionHeader,
                                            children: L.Z.Messages.INTEGRATIONS_APPLICATION_SECTION
                                        }),
                                        e_ > 4
                                            ? (0, i.jsx)(k, {
                                                  query: ee,
                                                  setQuery: en
                                              })
                                            : null,
                                        ex
                                    ]
                                })
                              : null,
                          eC
                      ]
                  })
        ]
    });
}
