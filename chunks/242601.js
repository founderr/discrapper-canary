n.d(t, {
    Z: function () {
        return eC;
    }
}),
    n(47120),
    n(653041);
var i = n(200651),
    r = n(192379),
    l = n(392711),
    a = n.n(l),
    s = n(100621),
    o = n(442837),
    c = n(704215),
    d = n(846519),
    u = n(481060),
    h = n(570140),
    m = n(239091),
    p = n(269128),
    g = n(711237),
    f = n(110924),
    _ = n(100527),
    E = n(906732),
    I = n(211242),
    C = n(785203),
    v = n(745837),
    S = n(13228),
    N = n(1259),
    T = n(211644),
    A = n(605236),
    b = n(243778),
    x = n(492162),
    Z = n(818634),
    L = n(596557),
    y = n(817520),
    O = n(999309),
    R = n(408987),
    P = n(130734),
    j = n(499137),
    D = n(258871),
    M = n(972264),
    w = n(11352),
    k = n(304445),
    U = n(344185),
    G = n(155409),
    B = n(10401),
    V = n(970731),
    H = n(210887),
    F = n(592125),
    z = n(796974),
    Y = n(486472),
    W = n(984933),
    K = n(650774),
    q = n(430824),
    X = n(819640),
    Q = n(496675),
    J = n(878884),
    $ = n(19780),
    ee = n(594174),
    et = n(74538),
    en = n(374023),
    ei = n(373274),
    er = n(547042),
    el = n(315174),
    ea = n(577718),
    es = n(156978),
    eo = n(591190),
    ec = n(981631),
    ed = n(652785),
    eu = n(921944),
    eh = n(647086),
    em = n(388032),
    ep = n(541194);
function eg(e, t, n) {
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
let ef = 64,
    e_ = 'server-settings',
    eE = {
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
class eI extends r.PureComponent {
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
        this.setAnimatedValue(0), h.Z.subscribe('LAYER_PUSH', this.closeAllHeaderNotices), (this.historyUnlisten = k.Z.addRouteChangeListener(this.handleHistoryChange));
        let { location: t } = k.Z.getHistory();
        (null === (e = t.state) || void 0 === e ? void 0 : e.shouldShowSubscribeTooltip) && this.showTimeout.start(1000, () => this.setState({ shouldShowSubscribeTooltip: !0 }));
    }
    componentWillUnmount() {
        this.showTimeout.stop(), this.state.controller.dispose(), this.historyUnlisten(), h.Z.unsubscribe('LAYER_PUSH', this.closeAllHeaderNotices);
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
                children: (0, i.jsx)(G.Z, {
                    tutorialId: e_,
                    position: 'bottom',
                    inlineSpecs: eE,
                    children: this.renderGuildHeaderDropdownButton(e)
                })
            });
        if (t)
            return (0, i.jsx)(u.Tooltip, {
                forceOpen: !0,
                color: u.TooltipColors.BRAND,
                position: 'bottom',
                shouldShow: !e && !r,
                text: em.intl.string(em.t.sFSrFB),
                'aria-label': em.intl.string(em.t.sFSrFB),
                children: () => this.renderGuildHeaderDropdownButton(e)
            });
        if (!r && !e)
            return l
                ? (0, i.jsx)(u.Popout, {
                      renderPopout: () =>
                          (0, i.jsx)('div', {
                              onClick: (e) => e.stopPropagation(),
                              children: (0, i.jsx)(V.ZP, {
                                  header: em.intl.string(em.t['Q3qa4+']),
                                  content: em.intl.string(em.t.UyHD4O),
                                  buttonCTA: em.intl.string(em.t.U9PrMz),
                                  onClick: this.handleCloseSubscribeTooltip
                              })
                          }),
                      position: 'bottom',
                      align: 'center',
                      animation: u.Popout.Animation.TRANSLATE,
                      shouldShow: !0,
                      children: () => this.renderGuildHeaderDropdownButton(e)
                  })
                : this.renderGuildHeaderUpsellPopout(e);
        return this.renderGuildHeaderDropdownButton(e);
    }
    renderGuildHeader(e) {
        let { guild: t, isHeaderPopoutOpen: n, showGuildHeaderTutorial: r, showGuildTemplateDirtyTooltip: l, isGuildHeaderDismissibleTooltipShown: a, headerAnalyticsLocations: s } = this.props,
            { controller: o, renderBanner: c, bannerVisible: d, bannerVisibleHeight: h, communityInfoVisible: m } = this.state,
            p = r || l || a;
        return null == t
            ? null
            : (0, i.jsx)(E.Gt, {
                  value: s,
                  children: (0, i.jsx)(u.LazyPopout, {
                      renderPopout: this.renderMenuPopout,
                      position: 'bottom',
                      align: 'center',
                      animation: u.Popout.Animation.SCALE,
                      shouldShow: n,
                      onRequestClose: () => {
                          (0, Z.l)(!1);
                      },
                      children: (r) => {
                          let { onClick: l, ...a } = r;
                          return (0, i.jsx)(el.ZP, {
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
                              animationOverlayHeight: h,
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
        ((e >= ef && i) || (e < ef && !i)) && (i = !i),
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
        if (e || null == t) return (0, i.jsx)(eo.Z, { withBannerPadding: null != t && null != this.getGuildBannerHash() });
        if (t.hasFeature(ec.oNc.HUB) && !r)
            return (0, i.jsx)('div', {
                className: ep.hubContainer,
                children: (0, i.jsx)(D.Z, {
                    guild: t,
                    channel: null != n ? n : W.ZP.getDefaultChannel(t.id)
                })
            });
        {
            let e = t.id === eh._ ? ei.j : ei.E;
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
        return (0, i.jsx)(b.ZP, {
            contentTypes: [],
            children: (n) => {
                let { visibleContent: r, markAsDismissed: l } = n;
                switch (r) {
                    case c.z.BASH_OUT_COACH_MARK:
                        return (0, i.jsx)(er.V, {
                            channelId: null != e ? e : void 0,
                            markAsDismissed: l,
                            tutorialType: er._.BASH_OUT
                        });
                    case c.z.ACTIVITIES_COACH_MARK_GAME_NIGHT:
                        return (0, i.jsx)(er.V, {
                            channelId: null != e ? e : void 0,
                            markAsDismissed: l,
                            tutorialType: er._.GAME_NIGHT
                        });
                    default:
                        if (t) return (0, i.jsx)(v.Z, {});
                        return (0, i.jsx)(i.Fragment, {});
                }
            }
        });
    }
    render() {
        let { guild: e, footerAnalyticsLocations: t } = this.props;
        return (0, i.jsxs)('nav', {
            className: ep.container,
            onContextMenu: this.handleContextMenu,
            'aria-label': em.intl.formatToPlainString(em.t.nj5gAQ, { guildName: null != e ? e.toString() : '' }),
            children: [
                null != e && this.renderGuildHeader(this.state.hasGuildSubheader),
                null != e &&
                    (0, i.jsx)(es.Z, {
                        guild: e,
                        setHasSubheader: (e) => this.setState({ hasGuildSubheader: e })
                    }),
                this.renderChannelList(),
                (0, i.jsx)(E.Gt, {
                    value: t,
                    children: this.renderFooter()
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            eg(this, 'historyUnlisten', () => {}),
            eg(this, 'showTimeout', new d.V7()),
            eg(this, 'state', {
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
            eg(this, 'handleHistoryChange', (e) => {
                null != e.state && e.state.shouldShowSubscribeTooltip && this.showTimeout.start(1000, () => this.setState({ shouldShowSubscribeTooltip: !0 }));
            }),
            eg(this, 'handleHeaderMenuToggle', (e) => {
                let { isHeaderPopoutOpen: t } = this.props;
                e.stopPropagation(), (0, Z.l)(!t), this.closeAllHeaderNotices();
            }),
            eg(this, 'handleContextMenu', (e) => {
                let { guild: t } = this.props;
                null != t &&
                    (0, m.jW)(e, async () => {
                        let { default: e } = await n.e('92795').then(n.bind(n, 652171));
                        return (n) =>
                            (0, i.jsx)(e, {
                                ...n,
                                guild: t
                            });
                    });
            }),
            eg(this, 'handleHeaderContextMenu', (e) => {
                let { guild: t } = this.props;
                null != t &&
                    (0, m.jW)(e, async () => {
                        let { default: e } = await Promise.all([n.e('33053'), n.e('15669'), n.e('7654'), n.e('44156'), n.e('44294'), n.e('85552'), n.e('58227'), n.e('16114'), n.e('28161'), n.e('33213'), n.e('75658')]).then(n.bind(n, 545135));
                        return (n) =>
                            (0, i.jsx)(e, {
                                ...n,
                                guild: t
                            });
                    });
            }),
            eg(this, 'closeAllHeaderNotices', () => {
                this.handleCloseSubscribeTooltip(), this.handleCloseTemplateDirtyTooltip(), this.handleCloseStudentHubPrivacySettingsTooltip();
            }),
            eg(this, 'handleCloseStudentHubPrivacySettingsTooltip', () => {
                var e;
                let t = (0, A.un)(c.z.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP),
                    n = null === (e = this.props.guild) || void 0 === e ? void 0 : e.hasFeature(ec.oNc.HUB);
                !t && n && (0, A.EW)(c.z.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP, { dismissAction: eu.L.AUTO });
            }),
            eg(this, 'handleCloseSubscribeTooltip', () => {
                this.showTimeout.stop(), this.state.shouldShowSubscribeTooltip && this.setState({ shouldShowSubscribeTooltip: !1 });
            }),
            eg(this, 'handleCloseTemplateDirtyTooltip', () => {
                let { guild: e, showGuildTemplateDirtyTooltip: t } = this.props;
                null != e && t && R.Z.hideGuildTemplateDirtyTooltip(e.id);
            }),
            eg(this, 'renderMenuPopout', async () => {
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
            eg(this, 'renderGuildHeaderUpsellPopout', (e) => {
                let { showGuildBoostingProgressBarUpsell: t, showGuildBoostingProgressBarSizeUpsell: n, showRoleSubscriptionUpsell: r, showDiscoveryTooltip: l, showInviteSplashUpsell: a, showDiscoveryLandingPageSettingsUpsell: s, showHubPrivacySettingsTooltip: o, showActiveThreadsNotice: d, showGuildSoundboardPermissionUpsell: u, showMediaChannelUpsell: h, showTierTemplatesUpsell: m, shouldRenderCustomNotificationSoundsCoachmark: p, guild: g, theme: f } = this.props;
                if (null == g) return this.renderGuildHeaderDropdownButton(e);
                let _ = [];
                return (o && _.push(c.z.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP), d && _.push(c.z.GUILD_HEADER_ACTIVE_THREADS_NOTICE), t && _.push(c.z.GUILD_HEADER_PREMIUM_GUILD_PROGRESS), n && _.push(c.z.GUILD_HEADER_PROGRESS_BAR_SIZE_COACH_MARK), r && _.push(c.z.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL), u && _.push(c.z.GUILD_HEADER_SOUNDBOARD_PERMISSION), a && _.push(c.z.GUILD_HEADER_INVITE_SPLASH), l && _.push(c.z.GUILD_HEADER_SERVER_DISCOVERY_TOOLTIP), s && _.push(c.z.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL), 0 === _.length)
                    ? this.renderGuildHeaderDropdownButton(e)
                    : (h && _.push(c.z.MEDIA_CHANNEL_UPSELL),
                      m && _.push(c.z.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL),
                      p && _.push(c.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_COACHMARK),
                      (0, i.jsx)(ea.Z, {
                          contentTypes: _,
                          theme: f,
                          guild: g,
                          renderGuildHeaderDropdownButton: () => this.renderGuildHeaderDropdownButton(e)
                      }));
            }),
            eg(this, 'renderGuildHeaderDropdownButton', (e) =>
                (0, i.jsx)(p.Z, {
                    open: e,
                    className: ep.dropdownButton
                })
            ),
            eg(this, 'pinBannerOrGuildInfo', (e) => {
                let { scrollTop: t } = e;
                this.setAnimatedValue(t);
            });
    }
}
function eC(e) {
    var t;
    let { guildId: n, hideSelectedChannel: l, selectedChannelId: s } = e,
        d = (0, o.e7)([q.Z], () => q.Z.getGuild(n));
    (0, g.J_)(n);
    let h = (0, x.Z)(n),
        m = (0, o.e7)([z.Z], () => z.Z.getGuildDimensions(n).scrollTo),
        p = (0, o.e7)([$.Z], () => $.Z.getChannelId()),
        [v, b, R] = (0, o.Wu)([Q.Z], () => [Q.Z.can(ec.Plq.MANAGE_GUILD, d), Q.Z.can(ec.Plq.MANAGE_ROLES, d), Q.Z.can(ec.Plq.MANAGE_THREADS, d)]),
        D = (0, o.e7)([Y.Z], () => Y.Z.isUnavailable(n)),
        k = (0, o.e7)([ee.default], () => ee.default.getCurrentUser()),
        G = (0, o.e7)([H.Z], () => (H.Z.darkSidebar ? ec.BRd.DARK : H.Z.theme)),
        { enableStudyGroup: V } = (0, j.s)(d),
        W = (0, T.ZP)((e) => e.currentlyShown.has(c.z.NAGBAR_NOTICE_CONNECT_PLAYSTATION)),
        [ei, er] = r.useState(!W),
        el = (0, f.Z)(n),
        { analyticsLocations: ea } = (0, E.ZP)(_.Z.GUILD_HEADER),
        { analyticsLocations: es } = (0, E.ZP)(_.Z.GUILD_CHANNEL_LIST_FOOTER);
    r.useEffect(() => {
        n !== el && er(!W);
    }, [n, el, W]);
    let [eo, eh] = (0, T.ZP)((e) => [ed.XN.some((t) => e.currentlyShown.has(t.dismissibleContentType)), e.currentlyShownGroup.has(eu.R.GUILD_HEADER_TOOLTIPS)]),
        em = (0, C.Z)(d),
        ep = (0, u.useModalsStore)(u.hasAnyModalOpenSelector),
        eg = (0, o.e7)([X.Z], () => X.Z.hasLayers()),
        ef = (0, o.e7)([B.Z], () => B.Z.shouldShow(e_)),
        eE = v && (null == d ? void 0 : d.premiumProgressBarEnabled) === !1 && !en.s.isDisallowPopupsSet(),
        eC = (0, o.e7)([K.Z], () => K.Z.getMemberCount(n)),
        ev = v && null != eC && eC >= 30 && (null == d ? void 0 : d.premiumProgressBarEnabled) === !1 && !en.s.isDisallowPopupsSet(),
        eS = b && null != d && (d.hasFeature(ec.oNc.COMMUNITY) || (null != eC && eC > 50)),
        eN = (0, O.Z)(n),
        eT = (0, N._)(n),
        eA = (null == d ? void 0 : d.hasFeature(ec.oNc.HUB)) === !0,
        eb = v && (null == d ? void 0 : d.hasFeature(ec.oNc.DISCOVERABLE)) === !0,
        ex = (0, I.Q)(),
        eZ = (v || (null == d ? void 0 : d.premiumTier) === ec.Eu4.NONE) && !en.s.isDisallowPopupsSet() && !ex,
        eL = (0, o.e7)([P.Z, X.Z], () => null != d && null != k && v && !X.Z.hasLayers() && P.Z.shouldShowGuildTemplateDirtyTooltip(n)),
        ey = (0, o.e7)([F.Z], () => F.Z.getChannel(s)),
        { isPopoutOpen: eO } = (0, Z.y)(),
        eR = null !== (t = null == d ? void 0 : d.hasFeature(ec.oNc.COMMUNITY)) && void 0 !== t && t,
        eP = (0, o.e7)([U.Z], () => !a().isEmpty(U.Z.getThreadsForGuild(n))),
        ej = et.ZP.isNewUser(k),
        eD = ei && !ej,
        eM = (0, S.Z)(k);
    (0, L.Z)(d);
    let ew = (0, A.wE)(c.z.PREMIUM_TUTORIAL_SERVER_MENU_TOOLTIP),
        ek = (0, M.Z)(n),
        eU = (0, y.Z)(n),
        eG = (0, o.e7)([$.Z], () => $.Z.getChannelId()),
        eB = (0, o.e7)([J.Z], () => J.Z.desyncedVoiceStatesCount),
        eV = w.Y.useExperiment({ location: 'GuildSidebar' }, { autoTrackExposure: !0 }).enabled;
    return (0, i.jsx)(eI, {
        guildId: n,
        hideSelectedChannel: l,
        guild: d,
        scrollToChannel: m,
        selectedChannelId: l ? null : s,
        selectedChannel: ey,
        selectedVoiceChannelId: p,
        voiceStates: h,
        rtcConnectedChannelId: eG,
        rtcDesyncedVoiceStatesCount: eB,
        isUnavailable: D,
        theme: G,
        user: k,
        hasChannelNotice: null != em || eo,
        anyLayerOpen: ep || eg,
        showGuildBoostingProgressBarUpsell: eE,
        showGuildBoostingProgressBarSizeUpsell: ev,
        showInviteSplashUpsell: eZ,
        showDiscoveryLandingPageSettingsUpsell: eb,
        showGuildHeaderTutorial: ef,
        showGuildTemplateDirtyTooltip: eL,
        showRoleSubscriptionUpsell: eN,
        showDiscoveryTooltip: eT,
        showHubPrivacySettingsTooltip: eA,
        showNewUnreadsBar: eR,
        showActiveThreadsNotice: R && null != eC && eC >= 200 && eP,
        showGuildSoundboardPermissionUpsell: eS,
        showMediaChannelUpsell: ek,
        showTierTemplatesUpsell: eU,
        isHeaderPopoutOpen: eO,
        enableStudyGroup: V,
        isGuildHeaderDismissibleTooltipShown: eh,
        canShowCoachMarkAtBottom: ei,
        headerAnalyticsLocations: ea,
        footerAnalyticsLocations: es,
        shouldRenderClipsEducation: eM,
        isTutorialHighlightDismissed: ew,
        shouldRenderBurstCoachmark: eD,
        shouldRenderCustomNotificationSoundsCoachmark: eV
    });
}
