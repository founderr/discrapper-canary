n.d(t, {
    Z: function () {
        return eI;
    }
}),
    n(47120),
    n(653041);
var i = n(200651),
    r = n(192379),
    l = n(392711),
    a = n.n(l),
    s = n(752877),
    o = n(232713),
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
    N = n(745837),
    S = n(13228),
    T = n(211644),
    b = n(605236),
    x = n(243778),
    A = n(492162),
    Z = n(818634),
    L = n(596557),
    y = n(817520),
    P = n(999309),
    O = n(408987),
    R = n(130734),
    j = n(499137),
    D = n(258871),
    M = n(972264),
    w = n(11352),
    k = n(304445),
    U = n(344185),
    G = n(155409),
    B = n(10401),
    H = n(970731),
    V = n(210887),
    F = n(592125),
    z = n(796974),
    W = n(486472),
    Y = n(984933),
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
    er = n(315174),
    el = n(577718),
    ea = n(156978),
    es = n(591190),
    eo = n(981631),
    ec = n(652785),
    ed = n(921944),
    eu = n(647086),
    eh = n(388032),
    em = n(325382);
function ep(e, t, n) {
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
let eg = 64,
    ef = 'server-settings',
    e_ = {
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
class eE extends r.PureComponent {
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
        this.setAnimatedValue(0), m.Z.subscribe('LAYER_PUSH', this.closeAllHeaderNotices), (this.historyUnlisten = k.Z.addRouteChangeListener(this.handleHistoryChange));
        let { location: t } = k.Z.getHistory();
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
                children: (0, i.jsx)(G.Z, {
                    tutorialId: ef,
                    position: 'bottom',
                    inlineSpecs: e_,
                    children: this.renderGuildHeaderDropdownButton(e)
                })
            });
        if (t)
            return (0, i.jsx)(h.Tooltip, {
                forceOpen: !0,
                color: h.TooltipColors.BRAND,
                position: 'bottom',
                shouldShow: !e && !r,
                text: eh.intl.string(eh.t.sFSrFB),
                'aria-label': eh.intl.string(eh.t.sFSrFB),
                children: () => this.renderGuildHeaderDropdownButton(e)
            });
        if (!r && !e)
            return l
                ? (0, i.jsx)(h.Popout, {
                      renderPopout: () =>
                          (0, i.jsx)('div', {
                              onClick: (e) => e.stopPropagation(),
                              children: (0, i.jsx)(H.ZP, {
                                  header: eh.intl.string(eh.t['Q3qa4+']),
                                  content: eh.intl.string(eh.t.UyHD4O),
                                  buttonCTA: eh.intl.string(eh.t.U9PrMz),
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
                          (0, Z.l)(!1);
                      },
                      children: (r) => {
                          let { onClick: l, ...a } = r;
                          return (0, i.jsx)(er.ZP, {
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
        ((e >= eg && i) || (e < eg && !i)) && (i = !i),
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
        if (e || null == t) return (0, i.jsx)(es.Z, { withBannerPadding: null != t && null != this.getGuildBannerHash() });
        if (t.hasFeature(eo.oNc.HUB) && !r)
            return (0, i.jsx)('div', {
                className: em.hubContainer,
                children: (0, i.jsx)(D.Z, {
                    guild: t,
                    channel: null != n ? n : Y.ZP.getDefaultChannel(t.id)
                })
            });
        {
            let e = t.id === eu._ ? ei.j : ei.E;
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
        let { shouldRenderClipsEducation: e } = this.props;
        return (0, i.jsx)(x.ZP, {
            contentTypes: [],
            children: (t) => {
                let { visibleContent: n } = t;
                return e ? (0, i.jsx)(N.Z, {}) : (0, i.jsx)(i.Fragment, {});
            }
        });
    }
    render() {
        let { guild: e, footerAnalyticsLocations: t } = this.props;
        return (0, i.jsxs)('nav', {
            className: em.container,
            onContextMenu: this.handleContextMenu,
            'aria-label': eh.intl.formatToPlainString(eh.t.nj5gAQ, { guildName: null != e ? e.toString() : '' }),
            children: [
                null != e && this.renderGuildHeader(this.state.hasGuildSubheader),
                null != e &&
                    (0, i.jsx)(ea.Z, {
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
            ep(this, 'historyUnlisten', () => {}),
            ep(this, 'showTimeout', new u.V7()),
            ep(this, 'state', {
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
            ep(this, 'handleHistoryChange', (e) => {
                null != e.state && e.state.shouldShowSubscribeTooltip && this.showTimeout.start(1000, () => this.setState({ shouldShowSubscribeTooltip: !0 }));
            }),
            ep(this, 'handleHeaderMenuToggle', (e) => {
                let { isHeaderPopoutOpen: t } = this.props;
                e.stopPropagation(), (0, Z.l)(!t), this.closeAllHeaderNotices();
            }),
            ep(this, 'handleContextMenu', (e) => {
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
            ep(this, 'handleHeaderContextMenu', (e) => {
                let { guild: t } = this.props;
                null != t &&
                    (0, p.jW)(e, async () => {
                        let { default: e } = await Promise.all([n.e('63288'), n.e('33053'), n.e('17298'), n.e('7654'), n.e('98479'), n.e('31113'), n.e('85552'), n.e('58227'), n.e('16114'), n.e('61720'), n.e('33213'), n.e('43954')]).then(n.bind(n, 545135));
                        return (n) =>
                            (0, i.jsx)(e, {
                                ...n,
                                guild: t
                            });
                    });
            }),
            ep(this, 'closeAllHeaderNotices', () => {
                this.handleCloseSubscribeTooltip(), this.handleCloseTemplateDirtyTooltip(), this.handleCloseStudentHubPrivacySettingsTooltip();
            }),
            ep(this, 'handleCloseStudentHubPrivacySettingsTooltip', () => {
                var e;
                let t = (0, b.un)(d.z.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP),
                    n = null === (e = this.props.guild) || void 0 === e ? void 0 : e.hasFeature(eo.oNc.HUB);
                !t && n && (0, b.EW)(d.z.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP, { dismissAction: ed.L.AUTO });
            }),
            ep(this, 'handleCloseSubscribeTooltip', () => {
                this.showTimeout.stop(), this.state.shouldShowSubscribeTooltip && this.setState({ shouldShowSubscribeTooltip: !1 });
            }),
            ep(this, 'handleCloseTemplateDirtyTooltip', () => {
                let { guild: e, showGuildTemplateDirtyTooltip: t } = this.props;
                null != e && t && O.Z.hideGuildTemplateDirtyTooltip(e.id);
            }),
            ep(this, 'renderMenuPopout', async () => {
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
            ep(this, 'renderGuildHeaderUpsellPopout', (e) => {
                let { showGuildBoostingProgressBarUpsell: t, showGuildBoostingProgressBarSizeUpsell: n, showRoleSubscriptionUpsell: r, showInviteSplashUpsell: l, showDiscoveryLandingPageSettingsUpsell: a, showHubPrivacySettingsTooltip: s, showActiveThreadsNotice: o, showGuildSoundboardPermissionUpsell: c, showMediaChannelUpsell: u, showTierTemplatesUpsell: h, shouldRenderCustomNotificationSoundsCoachmark: m, guild: p, theme: g } = this.props;
                if (null == p) return this.renderGuildHeaderDropdownButton(e);
                let f = [];
                return (s && f.push(d.z.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP), o && f.push(d.z.GUILD_HEADER_ACTIVE_THREADS_NOTICE), t && f.push(d.z.GUILD_HEADER_PREMIUM_GUILD_PROGRESS), n && f.push(d.z.GUILD_HEADER_PROGRESS_BAR_SIZE_COACH_MARK), r && f.push(d.z.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL), c && f.push(d.z.GUILD_HEADER_SOUNDBOARD_PERMISSION), l && f.push(d.z.GUILD_HEADER_INVITE_SPLASH), a && f.push(d.z.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL), 0 === f.length)
                    ? this.renderGuildHeaderDropdownButton(e)
                    : (u && f.push(d.z.MEDIA_CHANNEL_UPSELL),
                      h && f.push(d.z.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL),
                      m && f.push(d.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_COACHMARK),
                      (0, i.jsx)(el.Z, {
                          contentTypes: f,
                          theme: g,
                          guild: p,
                          renderGuildHeaderDropdownButton: () => this.renderGuildHeaderDropdownButton(e)
                      }));
            }),
            ep(this, 'renderGuildHeaderDropdownButton', (e) =>
                (0, i.jsx)(g.Z, {
                    open: e,
                    className: em.dropdownButton
                })
            ),
            ep(this, 'pinBannerOrGuildInfo', (e) => {
                let { scrollTop: t } = e;
                this.setAnimatedValue(t);
            });
    }
}
function eI(e) {
    var t;
    let { guildId: n, hideSelectedChannel: l, selectedChannelId: s } = e,
        u = (0, c.e7)([q.Z], () => q.Z.getGuild(n));
    (0, f.J_)(n);
    let m = (0, A.Z)(n),
        p = (0, c.e7)([z.Z], () => z.Z.getGuildDimensions(n).scrollTo),
        g = (0, c.e7)([$.Z], () => $.Z.getChannelId()),
        [N, x, O] = (0, c.Wu)([Q.Z], () => [Q.Z.can(eo.Plq.MANAGE_GUILD, u), Q.Z.can(eo.Plq.MANAGE_ROLES, u), Q.Z.can(eo.Plq.MANAGE_THREADS, u)]),
        D = (0, c.e7)([W.Z], () => W.Z.isUnavailable(n)),
        k = (0, c.e7)([ee.default], () => ee.default.getCurrentUser()),
        G = (0, c.e7)([V.Z], () => (V.Z.darkSidebar ? eo.BRd.DARK : V.Z.theme)),
        { enableStudyGroup: H } = (0, j.s)(u),
        Y = (0, T.ZP)((e) => e.currentlyShown.has(d.z.NAGBAR_NOTICE_CONNECT_PLAYSTATION)),
        [ei, er] = r.useState(!Y),
        el = (0, _.Z)(n),
        { analyticsLocations: ea } = (0, I.ZP)(E.Z.GUILD_HEADER),
        { analyticsLocations: es } = (0, I.ZP)(E.Z.GUILD_CHANNEL_LIST_FOOTER);
    r.useEffect(() => {
        n !== el && er(!Y);
    }, [n, el, Y]);
    let [eu, eh] = (0, T.ZP)((e) => [ec.XN.some((t) => e.currentlyShown.has(t.dismissibleContentType)), e.currentlyShownGroup.has(ed.R.GUILD_HEADER_TOOLTIPS)], o.X),
        em = (0, v.Z)(u),
        ep = (0, h.useModalsStore)(h.hasAnyModalOpenSelector),
        eg = (0, c.e7)([X.Z], () => X.Z.hasLayers()),
        e_ = (0, c.e7)([B.Z], () => B.Z.shouldShow(ef)),
        eI = N && (null == u ? void 0 : u.premiumProgressBarEnabled) === !1 && !en.s.isDisallowPopupsSet(),
        eC = (0, c.e7)([K.Z], () => K.Z.getMemberCount(n)),
        ev = N && null != eC && eC >= 30 && (null == u ? void 0 : u.premiumProgressBarEnabled) === !1 && !en.s.isDisallowPopupsSet(),
        eN = x && null != u && (u.hasFeature(eo.oNc.COMMUNITY) || (null != eC && eC > 50)),
        eS = (0, P.Z)(n),
        eT = (null == u ? void 0 : u.hasFeature(eo.oNc.HUB)) === !0,
        eb = N && (null == u ? void 0 : u.hasFeature(eo.oNc.DISCOVERABLE)) === !0,
        ex = (0, C.Q)(),
        eA = (N || (null == u ? void 0 : u.premiumTier) === eo.Eu4.NONE) && !en.s.isDisallowPopupsSet() && !ex,
        eZ = (0, c.e7)([R.Z, X.Z], () => null != u && null != k && N && !X.Z.hasLayers() && R.Z.shouldShowGuildTemplateDirtyTooltip(n)),
        eL = (0, c.e7)([F.Z], () => F.Z.getChannel(s)),
        { isPopoutOpen: ey } = (0, Z.y)(),
        eP = null !== (t = null == u ? void 0 : u.hasFeature(eo.oNc.COMMUNITY)) && void 0 !== t && t,
        eO = (0, c.e7)([U.Z], () => !a().isEmpty(U.Z.getThreadsForGuild(n))),
        eR = et.ZP.isNewUser(k),
        ej = ei && !eR,
        eD = (0, S.Z)(k);
    (0, L.Z)(u);
    let eM = (0, b.wE)(d.z.PREMIUM_TUTORIAL_SERVER_MENU_TOOLTIP),
        ew = (0, M.Z)(n),
        ek = (0, y.Z)(n),
        eU = (0, c.e7)([$.Z], () => $.Z.getChannelId()),
        eG = (0, c.e7)([J.Z], () => J.Z.desyncedVoiceStatesCount),
        eB = w.Y.useExperiment({ location: 'GuildSidebar' }, { autoTrackExposure: !0 }).enabled;
    return (0, i.jsx)(eE, {
        guildId: n,
        hideSelectedChannel: l,
        guild: u,
        scrollToChannel: p,
        selectedChannelId: l ? null : s,
        selectedChannel: eL,
        selectedVoiceChannelId: g,
        voiceStates: m,
        rtcConnectedChannelId: eU,
        rtcDesyncedVoiceStatesCount: eG,
        isUnavailable: D,
        theme: G,
        user: k,
        hasChannelNotice: null != em || eu,
        anyLayerOpen: ep || eg,
        showGuildBoostingProgressBarUpsell: eI,
        showGuildBoostingProgressBarSizeUpsell: ev,
        showInviteSplashUpsell: eA,
        showDiscoveryLandingPageSettingsUpsell: eb,
        showGuildHeaderTutorial: e_,
        showGuildTemplateDirtyTooltip: eZ,
        showRoleSubscriptionUpsell: eS,
        showHubPrivacySettingsTooltip: eT,
        showNewUnreadsBar: eP,
        showActiveThreadsNotice: O && null != eC && eC >= 200 && eO,
        showGuildSoundboardPermissionUpsell: eN,
        showMediaChannelUpsell: ew,
        showTierTemplatesUpsell: ek,
        isHeaderPopoutOpen: ey,
        enableStudyGroup: H,
        isGuildHeaderDismissibleTooltipShown: eh,
        canShowCoachMarkAtBottom: ei,
        headerAnalyticsLocations: ea,
        footerAnalyticsLocations: es,
        shouldRenderClipsEducation: eD,
        isTutorialHighlightDismissed: eM,
        shouldRenderBurstCoachmark: ej,
        shouldRenderCustomNotificationSoundsCoachmark: eB
    });
}
