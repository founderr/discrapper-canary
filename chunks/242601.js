n.d(t, {
    Z: function () {
        return ev;
    }
}),
    n(47120),
    n(653041);
var i = n(200651),
    r = n(192379),
    l = n(392711),
    a = n.n(l),
    s = n(100621),
    o = n(976649),
    c = n(442837),
    d = n(704215),
    u = n(846519),
    h = n(481060),
    m = n(570140),
    p = n(239091),
    g = n(269128),
    f = n(711237),
    _ = n(110924),
    E = n(100527),
    I = n(906732),
    C = n(211242),
    v = n(785203),
    S = n(745837),
    N = n(13228),
    T = n(1259),
    A = n(211644),
    b = n(605236),
    x = n(243778),
    Z = n(492162),
    L = n(818634),
    y = n(596557),
    O = n(817520),
    R = n(999309),
    P = n(408987),
    j = n(130734),
    D = n(499137),
    M = n(258871),
    w = n(972264),
    k = n(11352),
    U = n(304445),
    G = n(344185),
    B = n(155409),
    V = n(10401),
    H = n(970731),
    F = n(210887),
    z = n(592125),
    Y = n(796974),
    W = n(486472),
    K = n(984933),
    q = n(650774),
    X = n(430824),
    Q = n(819640),
    J = n(496675),
    $ = n(878884),
    ee = n(19780),
    et = n(594174),
    en = n(74538),
    ei = n(374023),
    er = n(373274),
    el = n(547042),
    ea = n(315174),
    es = n(577718),
    eo = n(156978),
    ec = n(591190),
    ed = n(981631),
    eu = n(652785),
    eh = n(921944),
    em = n(647086),
    ep = n(388032),
    eg = n(114778);
function ef(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let e_ = 64,
    eE = 'server-settings',
    eI = {
        origin: {
            x: -8,
            y: -48
        },
        targetWidth: 40,
        targetHeight: 40,
        offset: {
            x: 0,
            y: 0
        }
    };
class eC extends r.PureComponent {
    static getDerivedStateFromProps(e) {
        let { guild: t, hasChannelNotice: n } = e;
        return null == t || null == t.banner || n
            ? {
                  renderBanner: !1,
                  bannerVisible: !1
              }
            : null;
    }
    componentDidMount() {
        var e;
        this.setAnimatedValue(0), m.Z.subscribe('LAYER_PUSH', this.closeAllHeaderNotices), (this.historyUnlisten = U.Z.addRouteChangeListener(this.handleHistoryChange));
        let { location: t } = U.Z.getHistory();
        (null === (e = t.state) || void 0 === e ? void 0 : e.shouldShowSubscribeTooltip) && this.showTimeout.start(1000, () => this.setState({ shouldShowSubscribeTooltip: !0 }));
    }
    componentWillUnmount() {
        this.showTimeout.stop(), this.state.controller.dispose(), this.historyUnlisten(), m.Z.unsubscribe('LAYER_PUSH', this.closeAllHeaderNotices);
    }
    getGuildBannerHash() {
        let { guild: e, hasChannelNotice: t } = this.props;
        return null == e || t ? null : e.banner;
    }
    renderGuildHeaderNotices(e) {
        let { showGuildTemplateDirtyTooltip: t, showGuildHeaderTutorial: n, anyLayerOpen: r } = this.props,
            { shouldShowSubscribeTooltip: l } = this.state;
        if (n)
            return (0, i.jsx)('div', {
                onClick: (t) => (e ? null : t.stopPropagation()),
                children: (0, i.jsx)(B.Z, {
                    tutorialId: eE,
                    position: 'bottom',
                    inlineSpecs: eI,
                    children: this.renderGuildHeaderDropdownButton(e)
                })
            });
        if (t)
            return (0, i.jsx)(h.Tooltip, {
                forceOpen: !0,
                color: h.TooltipColors.BRAND,
                position: 'bottom',
                shouldShow: !e && !r,
                text: ep.intl.string(ep.t.sFSrFB),
                'aria-label': ep.intl.string(ep.t.sFSrFB),
                children: () => this.renderGuildHeaderDropdownButton(e)
            });
        if (!r && !e)
            return l
                ? (0, i.jsx)(h.Popout, {
                      renderPopout: () =>
                          (0, i.jsx)('div', {
                              onClick: (e) => e.stopPropagation(),
                              children: (0, i.jsx)(H.ZP, {
                                  header: ep.intl.string(ep.t['Q3qa4+']),
                                  content: ep.intl.string(ep.t.UyHD4O),
                                  buttonCTA: ep.intl.string(ep.t.U9PrMz),
                                  onClick: this.handleCloseSubscribeTooltip
                              })
                          }),
                      position: 'bottom',
                      align: 'center',
                      animation: h.Popout.Animation.TRANSLATE,
                      shouldShow: !0,
                      children: () => this.renderGuildHeaderDropdownButton(e)
                  })
                : this.renderGuildHeaderUpsellPopout(e);
        return this.renderGuildHeaderDropdownButton(e);
    }
    renderGuildHeader(e) {
        let { guild: t, isHeaderPopoutOpen: n, showGuildHeaderTutorial: r, showGuildTemplateDirtyTooltip: l, isGuildHeaderDismissibleTooltipShown: a, headerAnalyticsLocations: s } = this.props,
            { controller: o, renderBanner: c, bannerVisible: d, bannerVisibleHeight: u, communityInfoVisible: m } = this.state,
            p = r || l || a;
        return null == t
            ? null
            : (0, i.jsx)(I.Gt, {
                  value: s,
                  children: (0, i.jsx)(h.LazyPopout, {
                      renderPopout: this.renderMenuPopout,
                      position: 'bottom',
                      align: 'center',
                      animation: h.Popout.Animation.SCALE,
                      shouldShow: n,
                      onRequestClose: () => {
                          (0, L.l)(!1);
                      },
                      children: (r) => {
                          let { onClick: l, ...a } = r;
                          return (0, i.jsx)(ea.ZP, {
                              guild: t,
                              controller: o,
                              renderBanner: c,
                              hasSubheader: e,
                              bannerVisible: d,
                              communityInfoVisible: m,
                              guildBanner: this.getGuildBannerHash(),
                              onClick: this.handleHeaderMenuToggle,
                              onContextMenu: this.handleHeaderContextMenu,
                              disableBannerAnimation: p,
                              animationOverlayHeight: u,
                              ...a,
                              children: this.renderGuildHeaderNotices(n)
                          });
                      }
                  })
              });
    }
    setAnimatedValue(e) {
        let { guild: t } = this.props,
            n = null != this.getGuildBannerHash(),
            i = null == t ? void 0 : t.hasCommunityInfoSubheader();
        if (null != t && (!!n || !!i)) n ? this.setAnimatedValueForBanner(e) : this.setAnimatedValueForGuildInfo(e);
    }
    setAnimatedValueForBanner(e) {
        let { renderBanner: t, communityInfoVisible: n, bannerVisible: i, bannerVisibleHeight: r, controller: l } = this.state;
        ((e >= e_ && i) || (e < e_ && !i)) && (i = !i),
            ((e >= 88 && !t) || (e < 88 && t)) && (t = !t),
            (r = Math.max(88 - e, 0)),
            (n = i),
            (t !== this.state.renderBanner || i !== this.state.bannerVisible || r !== this.state.bannerVisibleHeight || n !== this.state.communityInfoVisible) &&
                this.setState({
                    renderBanner: t,
                    bannerVisible: i,
                    bannerVisibleHeight: r,
                    communityInfoVisible: n
                }),
            l
                .update({
                    value: Math.min(1, Math.max(0, 1 - e / 88)),
                    immediate: !0
                })
                .start();
    }
    setAnimatedValueForGuildInfo(e) {
        let { communityInfoVisible: t, controller: n } = this.state;
        ((e >= 20 && t) || (e < 20 && !t)) && (t = !t),
            t !== this.state.communityInfoVisible && this.setState({ communityInfoVisible: t }),
            n
                .update({
                    value: Math.min(1, Math.max(0, 1 - e / 20)),
                    immediate: !0
                })
                .start();
    }
    renderChannelList() {
        let { isUnavailable: e, guild: t, selectedChannel: n, enableStudyGroup: r, ...l } = this.props;
        if (e || null == t) return (0, i.jsx)(ec.Z, { withBannerPadding: null != t && null != this.getGuildBannerHash() });
        if (t.hasFeature(ed.oNc.HUB) && !r)
            return (0, i.jsx)('div', {
                className: eg.hubContainer,
                children: (0, i.jsx)(M.Z, {
                    guild: t,
                    channel: null != n ? n : K.ZP.getDefaultChannel(t.id)
                })
            });
        {
            let e = t.id === em._ ? er.j : er.E;
            return (0, i.jsx)(e, {
                guild: t,
                ...l,
                guildBanner: this.getGuildBannerHash(),
                hasGuildSubheader: this.state.hasGuildSubheader,
                onScroll: null != t && (null != this.getGuildBannerHash() || t.hasCommunityInfoSubheader()) ? this.pinBannerOrGuildInfo : null
            });
        }
    }
    renderFooter() {
        let { selectedChannelId: e, shouldRenderClipsEducation: t } = this.props;
        return (0, i.jsx)(x.ZP, {
            contentTypes: [],
            children: (n) => {
                let { visibleContent: r, markAsDismissed: l } = n;
                switch (r) {
                    case d.z.BASH_OUT_COACH_MARK:
                        return (0, i.jsx)(el.V, {
                            channelId: null != e ? e : void 0,
                            markAsDismissed: l,
                            tutorialType: el._.BASH_OUT
                        });
                    case d.z.ACTIVITIES_COACH_MARK_GAME_NIGHT:
                        return (0, i.jsx)(el.V, {
                            channelId: null != e ? e : void 0,
                            markAsDismissed: l,
                            tutorialType: el._.GAME_NIGHT
                        });
                    default:
                        if (t) return (0, i.jsx)(S.Z, {});
                        return (0, i.jsx)(i.Fragment, {});
                }
            }
        });
    }
    render() {
        let { guild: e, footerAnalyticsLocations: t } = this.props;
        return (0, i.jsxs)('nav', {
            className: eg.container,
            onContextMenu: this.handleContextMenu,
            'aria-label': ep.intl.formatToPlainString(ep.t.nj5gAQ, { guildName: null != e ? e.toString() : '' }),
            children: [
                null != e && this.renderGuildHeader(this.state.hasGuildSubheader),
                null != e &&
                    (0, i.jsx)(eo.Z, {
                        guild: e,
                        setHasSubheader: (e) => this.setState({ hasGuildSubheader: e })
                    }),
                this.renderChannelList(),
                (0, i.jsx)(I.Gt, {
                    value: t,
                    children: this.renderFooter()
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            ef(this, 'historyUnlisten', () => {}),
            ef(this, 'showTimeout', new u.V7()),
            ef(this, 'state', {
                controller: new s.Controller({
                    value: 1,
                    immediate: !0
                }),
                renderBanner: !1,
                bannerVisible: !1,
                communityInfoVisible: !1,
                shouldShowSubscribeTooltip: !1,
                bannerVisibleHeight: 88,
                hasGuildSubheader: !1
            }),
            ef(this, 'handleHistoryChange', (e) => {
                null != e.state && e.state.shouldShowSubscribeTooltip && this.showTimeout.start(1000, () => this.setState({ shouldShowSubscribeTooltip: !0 }));
            }),
            ef(this, 'handleHeaderMenuToggle', (e) => {
                let { isHeaderPopoutOpen: t } = this.props;
                e.stopPropagation(), (0, L.l)(!t), this.closeAllHeaderNotices();
            }),
            ef(this, 'handleContextMenu', (e) => {
                let { guild: t } = this.props;
                null != t &&
                    (0, p.jW)(e, async () => {
                        let { default: e } = await n.e('92795').then(n.bind(n, 652171));
                        return (n) =>
                            (0, i.jsx)(e, {
                                ...n,
                                guild: t
                            });
                    });
            }),
            ef(this, 'handleHeaderContextMenu', (e) => {
                let { guild: t } = this.props;
                null != t &&
                    (0, p.jW)(e, async () => {
                        let { default: e } = await Promise.all([n.e('33053'), n.e('15669'), n.e('7654'), n.e('44156'), n.e('16141'), n.e('85552'), n.e('58227'), n.e('16114'), n.e('28356'), n.e('33213'), n.e('41115')]).then(n.bind(n, 545135));
                        return (n) =>
                            (0, i.jsx)(e, {
                                ...n,
                                guild: t
                            });
                    });
            }),
            ef(this, 'closeAllHeaderNotices', () => {
                this.handleCloseSubscribeTooltip(), this.handleCloseTemplateDirtyTooltip(), this.handleCloseStudentHubPrivacySettingsTooltip();
            }),
            ef(this, 'handleCloseStudentHubPrivacySettingsTooltip', () => {
                var e;
                let t = (0, b.un)(d.z.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP),
                    n = null === (e = this.props.guild) || void 0 === e ? void 0 : e.hasFeature(ed.oNc.HUB);
                !t && n && (0, b.EW)(d.z.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP, { dismissAction: eh.L.AUTO });
            }),
            ef(this, 'handleCloseSubscribeTooltip', () => {
                this.showTimeout.stop(), this.state.shouldShowSubscribeTooltip && this.setState({ shouldShowSubscribeTooltip: !1 });
            }),
            ef(this, 'handleCloseTemplateDirtyTooltip', () => {
                let { guild: e, showGuildTemplateDirtyTooltip: t } = this.props;
                null != e && t && P.Z.hideGuildTemplateDirtyTooltip(e.id);
            }),
            ef(this, 'renderMenuPopout', async () => {
                let { default: e } = await n.e('46826').then(n.bind(n, 859432));
                return (t) => {
                    let { closePopout: n } = t,
                        { guild: r } = this.props;
                    return (
                        null != r &&
                        (0, i.jsx)(e, {
                            onClose: n,
                            guild: r
                        })
                    );
                };
            }),
            ef(this, 'renderGuildHeaderUpsellPopout', (e) => {
                let { showGuildBoostingProgressBarUpsell: t, showGuildBoostingProgressBarSizeUpsell: n, showRoleSubscriptionUpsell: r, showDiscoveryTooltip: l, showInviteSplashUpsell: a, showDiscoveryLandingPageSettingsUpsell: s, showHubPrivacySettingsTooltip: o, showActiveThreadsNotice: c, showGuildSoundboardPermissionUpsell: u, showMediaChannelUpsell: h, showTierTemplatesUpsell: m, shouldRenderCustomNotificationSoundsCoachmark: p, guild: g, theme: f } = this.props;
                if (null == g) return this.renderGuildHeaderDropdownButton(e);
                let _ = [];
                return (o && _.push(d.z.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP), c && _.push(d.z.GUILD_HEADER_ACTIVE_THREADS_NOTICE), t && _.push(d.z.GUILD_HEADER_PREMIUM_GUILD_PROGRESS), n && _.push(d.z.GUILD_HEADER_PROGRESS_BAR_SIZE_COACH_MARK), r && _.push(d.z.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL), u && _.push(d.z.GUILD_HEADER_SOUNDBOARD_PERMISSION), a && _.push(d.z.GUILD_HEADER_INVITE_SPLASH), l && _.push(d.z.GUILD_HEADER_SERVER_DISCOVERY_TOOLTIP), s && _.push(d.z.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL), 0 === _.length)
                    ? this.renderGuildHeaderDropdownButton(e)
                    : (h && _.push(d.z.MEDIA_CHANNEL_UPSELL),
                      m && _.push(d.z.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL),
                      p && _.push(d.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_COACHMARK),
                      (0, i.jsx)(es.Z, {
                          contentTypes: _,
                          theme: f,
                          guild: g,
                          renderGuildHeaderDropdownButton: () => this.renderGuildHeaderDropdownButton(e)
                      }));
            }),
            ef(this, 'renderGuildHeaderDropdownButton', (e) =>
                (0, i.jsx)(g.Z, {
                    open: e,
                    className: eg.dropdownButton
                })
            ),
            ef(this, 'pinBannerOrGuildInfo', (e) => {
                let { scrollTop: t } = e;
                this.setAnimatedValue(t);
            });
    }
}
function ev(e) {
    var t;
    let { guildId: n, hideSelectedChannel: l, selectedChannelId: s } = e,
        u = (0, c.e7)([X.Z], () => X.Z.getGuild(n));
    (0, f.J_)(n);
    let m = (0, Z.Z)(n),
        p = (0, c.e7)([Y.Z], () => Y.Z.getGuildDimensions(n).scrollTo),
        g = (0, c.e7)([ee.Z], () => ee.Z.getChannelId()),
        [S, x, P] = (0, c.Wu)([J.Z], () => [J.Z.can(ed.Plq.MANAGE_GUILD, u), J.Z.can(ed.Plq.MANAGE_ROLES, u), J.Z.can(ed.Plq.MANAGE_THREADS, u)]),
        M = (0, c.e7)([W.Z], () => W.Z.isUnavailable(n)),
        U = (0, c.e7)([et.default], () => et.default.getCurrentUser()),
        B = (0, c.e7)([F.Z], () => (F.Z.darkSidebar ? ed.BRd.DARK : F.Z.theme)),
        { enableStudyGroup: H } = (0, D.s)(u),
        K = (0, A.ZP)((e) => e.currentlyShown.has(d.z.NAGBAR_NOTICE_CONNECT_PLAYSTATION)),
        [er, el] = r.useState(!K),
        ea = (0, _.Z)(n),
        { analyticsLocations: es } = (0, I.ZP)(E.Z.GUILD_HEADER),
        { analyticsLocations: eo } = (0, I.ZP)(E.Z.GUILD_CHANNEL_LIST_FOOTER);
    r.useEffect(() => {
        n !== ea && el(!K);
    }, [n, ea, K]);
    let [ec, em] = (0, A.ZP)((e) => [eu.XN.some((t) => e.currentlyShown.has(t.dismissibleContentType)), e.currentlyShownGroup.has(eh.R.GUILD_HEADER_TOOLTIPS)], o.X),
        ep = (0, v.Z)(u),
        eg = (0, h.useModalsStore)(h.hasAnyModalOpenSelector),
        ef = (0, c.e7)([Q.Z], () => Q.Z.hasLayers()),
        e_ = (0, c.e7)([V.Z], () => V.Z.shouldShow(eE)),
        eI = S && (null == u ? void 0 : u.premiumProgressBarEnabled) === !1 && !ei.s.isDisallowPopupsSet(),
        ev = (0, c.e7)([q.Z], () => q.Z.getMemberCount(n)),
        eS = S && null != ev && ev >= 30 && (null == u ? void 0 : u.premiumProgressBarEnabled) === !1 && !ei.s.isDisallowPopupsSet(),
        eN = x && null != u && (u.hasFeature(ed.oNc.COMMUNITY) || (null != ev && ev > 50)),
        eT = (0, R.Z)(n),
        eA = (0, T._)(n),
        eb = (null == u ? void 0 : u.hasFeature(ed.oNc.HUB)) === !0,
        ex = S && (null == u ? void 0 : u.hasFeature(ed.oNc.DISCOVERABLE)) === !0,
        eZ = (0, C.Q)(),
        eL = (S || (null == u ? void 0 : u.premiumTier) === ed.Eu4.NONE) && !ei.s.isDisallowPopupsSet() && !eZ,
        ey = (0, c.e7)([j.Z, Q.Z], () => null != u && null != U && S && !Q.Z.hasLayers() && j.Z.shouldShowGuildTemplateDirtyTooltip(n)),
        eO = (0, c.e7)([z.Z], () => z.Z.getChannel(s)),
        { isPopoutOpen: eR } = (0, L.y)(),
        eP = null !== (t = null == u ? void 0 : u.hasFeature(ed.oNc.COMMUNITY)) && void 0 !== t && t,
        ej = (0, c.e7)([G.Z], () => !a().isEmpty(G.Z.getThreadsForGuild(n))),
        eD = en.ZP.isNewUser(U),
        eM = er && !eD,
        ew = (0, N.Z)(U);
    (0, y.Z)(u);
    let ek = (0, b.wE)(d.z.PREMIUM_TUTORIAL_SERVER_MENU_TOOLTIP),
        eU = (0, w.Z)(n),
        eG = (0, O.Z)(n),
        eB = (0, c.e7)([ee.Z], () => ee.Z.getChannelId()),
        eV = (0, c.e7)([$.Z], () => $.Z.desyncedVoiceStatesCount),
        eH = k.Y.useExperiment({ location: 'GuildSidebar' }, { autoTrackExposure: !0 }).enabled;
    return (0, i.jsx)(eC, {
        guildId: n,
        hideSelectedChannel: l,
        guild: u,
        scrollToChannel: p,
        selectedChannelId: l ? null : s,
        selectedChannel: eO,
        selectedVoiceChannelId: g,
        voiceStates: m,
        rtcConnectedChannelId: eB,
        rtcDesyncedVoiceStatesCount: eV,
        isUnavailable: M,
        theme: B,
        user: U,
        hasChannelNotice: null != ep || ec,
        anyLayerOpen: eg || ef,
        showGuildBoostingProgressBarUpsell: eI,
        showGuildBoostingProgressBarSizeUpsell: eS,
        showInviteSplashUpsell: eL,
        showDiscoveryLandingPageSettingsUpsell: ex,
        showGuildHeaderTutorial: e_,
        showGuildTemplateDirtyTooltip: ey,
        showRoleSubscriptionUpsell: eT,
        showDiscoveryTooltip: eA,
        showHubPrivacySettingsTooltip: eb,
        showNewUnreadsBar: eP,
        showActiveThreadsNotice: P && null != ev && ev >= 200 && ej,
        showGuildSoundboardPermissionUpsell: eN,
        showMediaChannelUpsell: eU,
        showTierTemplatesUpsell: eG,
        isHeaderPopoutOpen: eR,
        enableStudyGroup: H,
        isGuildHeaderDismissibleTooltipShown: em,
        canShowCoachMarkAtBottom: er,
        headerAnalyticsLocations: es,
        footerAnalyticsLocations: eo,
        shouldRenderClipsEducation: ew,
        isTutorialHighlightDismissed: ek,
        shouldRenderBurstCoachmark: eM,
        shouldRenderCustomNotificationSoundsCoachmark: eH
    });
}
