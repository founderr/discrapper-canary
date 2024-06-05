"use strict";
n.r(t), n.d(t, {
  default: function() {
    return eI
  }
}), n("47120"), n("653041");
var a = n("735250"),
  s = n("470079"),
  l = n("392711"),
  i = n.n(l),
  r = n("920906"),
  o = n("442837"),
  u = n("704215"),
  d = n("846519"),
  c = n("481060"),
  f = n("570140"),
  E = n("239091"),
  h = n("269128"),
  _ = n("711237"),
  C = n("110924"),
  m = n("100527"),
  S = n("906732"),
  p = n("211242"),
  I = n("536687"),
  T = n("745837"),
  g = n("13228"),
  A = n("1259"),
  N = n("211644"),
  v = n("605236"),
  R = n("243778"),
  O = n("492162"),
  L = n("818634"),
  M = n("596557"),
  P = n("817520"),
  x = n("999309"),
  y = n("408987"),
  D = n("130734"),
  b = n("499137"),
  U = n("258871"),
  j = n("972264"),
  G = n("11352"),
  w = n("304445"),
  k = n("344185"),
  B = n("155409"),
  F = n("10401"),
  H = n("970731"),
  V = n("210887"),
  Y = n("592125"),
  W = n("796974"),
  K = n("486472"),
  z = n("984933"),
  Q = n("650774"),
  q = n("430824"),
  Z = n("819640"),
  X = n("496675"),
  J = n("878884"),
  $ = n("19780"),
  ee = n("594174"),
  et = n("74538"),
  en = n("374023"),
  ea = n("373274"),
  es = n("547042"),
  el = n("315174"),
  ei = n("577718"),
  er = n("156978"),
  eo = n("591190"),
  eu = n("981631"),
  ed = n("652785"),
  ec = n("921944"),
  ef = n("647086"),
  eE = n("689938"),
  eh = n("925058");

function e_(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let eC = 64,
  em = "server-settings",
  eS = {
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
class ep extends s.PureComponent {
  static getDerivedStateFromProps(e) {
    let {
      guild: t,
      hasChannelNotice: n
    } = e;
    return null == t || null == t.banner || n ? {
      renderBanner: !1,
      bannerVisible: !1
    } : null
  }
  componentDidMount() {
    var e;
    this.setAnimatedValue(0), f.default.subscribe("LAYER_PUSH", this.closeAllHeaderNotices), this.historyUnlisten = w.default.addRouteChangeListener(this.handleHistoryChange);
    let {
      location: t
    } = w.default.getHistory();
    (null === (e = t.state) || void 0 === e ? void 0 : e.shouldShowSubscribeTooltip) && this.showTimeout.start(1e3, () => this.setState({
      shouldShowSubscribeTooltip: !0
    }))
  }
  componentWillUnmount() {
    this.showTimeout.stop(), this.state.controller.dispose(), this.historyUnlisten(), f.default.unsubscribe("LAYER_PUSH", this.closeAllHeaderNotices)
  }
  getGuildBannerHash() {
    let {
      guild: e,
      hasChannelNotice: t
    } = this.props;
    return null == e || t ? null : e.banner
  }
  renderGuildHeaderNotices(e) {
    let {
      showGuildTemplateDirtyTooltip: t,
      showGuildHeaderTutorial: n,
      anyLayerOpen: s
    } = this.props, {
      shouldShowSubscribeTooltip: l
    } = this.state;
    if (n) return (0, a.jsx)("div", {
      onClick: t => e ? null : t.stopPropagation(),
      children: (0, a.jsx)(B.default, {
        tutorialId: em,
        position: "bottom",
        inlineSpecs: eS,
        children: this.renderGuildHeaderDropdownButton(e)
      })
    });
    if (t) return (0, a.jsx)(c.Tooltip, {
      forceOpen: !0,
      color: c.TooltipColors.BRAND,
      position: "bottom",
      shouldShow: !e && !s,
      text: eE.default.Messages.GUILD_TEMPLATES_UNSYNCED_TOOLTIP,
      "aria-label": eE.default.Messages.GUILD_TEMPLATES_UNSYNCED_TOOLTIP,
      children: () => this.renderGuildHeaderDropdownButton(e)
    });
    if (!s && !e) return l ? (0, a.jsx)(c.Popout, {
      renderPopout: () => (0, a.jsx)("div", {
        onClick: e => e.stopPropagation(),
        children: (0, a.jsx)(H.default, {
          header: eE.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_HEADER_SUBSCRIBE_TOOLTIP_HEADER,
          content: eE.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_HEADER_SUBSCRIBE_TOOLTIP_TEXT,
          buttonCTA: eE.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_HEADER_SUBSCRIBE_TOOLTIP_CLOSE,
          onClick: this.handleCloseSubscribeTooltip
        })
      }),
      position: "bottom",
      align: "center",
      animation: c.Popout.Animation.TRANSLATE,
      shouldShow: !0,
      children: () => this.renderGuildHeaderDropdownButton(e)
    }) : this.renderGuildHeaderUpsellPopout(e);
    return this.renderGuildHeaderDropdownButton(e)
  }
  renderGuildHeader(e) {
    let {
      guild: t,
      isHeaderPopoutOpen: n,
      showGuildHeaderTutorial: s,
      showGuildTemplateDirtyTooltip: l,
      isGuildHeaderDismissibleTooltipShown: i,
      headerAnalyticsLocations: r
    } = this.props, {
      controller: o,
      renderBanner: u,
      bannerVisible: d,
      bannerVisibleHeight: f,
      communityInfoVisible: E
    } = this.state, h = s || l || i;
    return null == t ? null : (0, a.jsx)(S.AnalyticsLocationProvider, {
      value: r,
      children: (0, a.jsx)(c.LazyPopout, {
        renderPopout: this.renderMenuPopout,
        position: "bottom",
        align: "center",
        animation: c.Popout.Animation.SCALE,
        shouldShow: n,
        onRequestClose: () => {
          (0, L.showGuildHeaderPopout)(!1)
        },
        children: s => {
          let {
            onClick: l,
            ...i
          } = s;
          return (0, a.jsx)(el.default, {
            guild: t,
            controller: o,
            renderBanner: u,
            hasSubheader: e,
            bannerVisible: d,
            communityInfoVisible: E,
            guildBanner: this.getGuildBannerHash(),
            onClick: this.handleHeaderMenuToggle,
            onContextMenu: this.handleHeaderContextMenu,
            disableBannerAnimation: h,
            animationOverlayHeight: f,
            ...i,
            children: this.renderGuildHeaderNotices(n)
          })
        }
      })
    })
  }
  setAnimatedValue(e) {
    let {
      guild: t
    } = this.props, n = null != this.getGuildBannerHash(), a = null == t ? void 0 : t.hasCommunityInfoSubheader();
    null != t && (n || a) && (n ? this.setAnimatedValueForBanner(e) : this.setAnimatedValueForGuildInfo(e))
  }
  setAnimatedValueForBanner(e) {
    let {
      renderBanner: t,
      communityInfoVisible: n,
      bannerVisible: a,
      bannerVisibleHeight: s,
      controller: l
    } = this.state;
    (e >= eC && a || e < eC && !a) && (a = !a), (e >= 88 && !t || e < 88 && t) && (t = !t), s = Math.max(88 - e, 0), n = a, (t !== this.state.renderBanner || a !== this.state.bannerVisible || s !== this.state.bannerVisibleHeight || n !== this.state.communityInfoVisible) && this.setState({
      renderBanner: t,
      bannerVisible: a,
      bannerVisibleHeight: s,
      communityInfoVisible: n
    }), l.update({
      value: Math.min(1, Math.max(0, 1 - e / 88)),
      immediate: !0
    }).start()
  }
  setAnimatedValueForGuildInfo(e) {
    let {
      communityInfoVisible: t,
      controller: n
    } = this.state;
    (e >= 20 && t || e < 20 && !t) && (t = !t), t !== this.state.communityInfoVisible && this.setState({
      communityInfoVisible: t
    }), n.update({
      value: Math.min(1, Math.max(0, 1 - e / 20)),
      immediate: !0
    }).start()
  }
  renderChannelList() {
    let {
      isUnavailable: e,
      guild: t,
      selectedChannel: n,
      enableStudyGroup: s,
      ...l
    } = this.props;
    if (e || null == t) return (0, a.jsx)(eo.default, {
      withBannerPadding: null != t && null != this.getGuildBannerHash()
    });
    {
      if (t.hasFeature(eu.GuildFeatures.HUB) && !s) return (0, a.jsx)("div", {
        className: eh.hubContainer,
        children: (0, a.jsx)(U.default, {
          guild: t,
          channel: null != n ? n : z.default.getDefaultChannel(t.id)
        })
      });
      let e = t.id === ef.FAVORITES_RAW_GUILD_ID ? ea.FavoritesChannelList : ea.GuildChannelList;
      return (0, a.jsx)(e, {
        guild: t,
        ...l,
        guildBanner: this.getGuildBannerHash(),
        hasGuildSubheader: this.state.hasGuildSubheader,
        onScroll: null != t && (null != this.getGuildBannerHash() || t.hasCommunityInfoSubheader()) ? this.pinBannerOrGuildInfo : null
      })
    }
  }
  renderFooter() {
    let {
      selectedChannelId: e,
      shouldRenderClipsEducation: t
    } = this.props;
    return (0, a.jsx)(R.default, {
      contentTypes: [],
      children: n => {
        let {
          visibleContent: s,
          markAsDismissed: l
        } = n;
        switch (s) {
          case u.DismissibleContent.BASH_OUT_COACH_MARK:
            return (0, a.jsx)(es.EmbeddedActivityTutorial, {
              channelId: null != e ? e : void 0,
              markAsDismissed: l,
              tutorialType: es.TutorialType.BASH_OUT
            });
          case u.DismissibleContent.ACTIVITIES_COACH_MARK_GAME_NIGHT:
            return (0, a.jsx)(es.EmbeddedActivityTutorial, {
              channelId: null != e ? e : void 0,
              markAsDismissed: l,
              tutorialType: es.TutorialType.GAME_NIGHT
            });
          default:
            if (t) return (0, a.jsx)(T.default, {});
            return (0, a.jsx)(a.Fragment, {})
        }
      }
    })
  }
  render() {
    let {
      guild: e,
      footerAnalyticsLocations: t
    } = this.props;
    return (0, a.jsxs)("nav", {
      className: eh.container,
      onContextMenu: this.handleContextMenu,
      "aria-label": eE.default.Messages.GUILD_SIDEBAR_A11Y_LABEL.format({
        guildName: null != e ? e.toString() : ""
      }),
      children: [null != e && this.renderGuildHeader(this.state.hasGuildSubheader), null != e && (0, a.jsx)(er.default, {
        guild: e,
        setHasSubheader: e => this.setState({
          hasGuildSubheader: e
        })
      }), this.renderChannelList(), (0, a.jsx)(S.AnalyticsLocationProvider, {
        value: t,
        children: this.renderFooter()
      })]
    })
  }
  constructor(...e) {
    super(...e), e_(this, "historyUnlisten", () => {}), e_(this, "showTimeout", new d.Timeout), e_(this, "state", {
      controller: new r.Controller({
        value: 1,
        immediate: !0
      }),
      renderBanner: !1,
      bannerVisible: !1,
      communityInfoVisible: !1,
      shouldShowSubscribeTooltip: !1,
      bannerVisibleHeight: 88,
      hasGuildSubheader: !1
    }), e_(this, "handleHistoryChange", e => {
      null != e.state && e.state.shouldShowSubscribeTooltip && this.showTimeout.start(1e3, () => this.setState({
        shouldShowSubscribeTooltip: !0
      }))
    }), e_(this, "handleHeaderMenuToggle", e => {
      let {
        isHeaderPopoutOpen: t
      } = this.props;
      e.stopPropagation(), (0, L.showGuildHeaderPopout)(!t), this.closeAllHeaderNotices()
    }), e_(this, "handleContextMenu", e => {
      let {
        guild: t
      } = this.props;
      null != t && (0, E.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await n.e("92795").then(n.bind(n, "652171"));
        return n => (0, a.jsx)(e, {
          ...n,
          guild: t
        })
      })
    }), e_(this, "handleHeaderContextMenu", e => {
      let {
        guild: t
      } = this.props;
      null != t && (0, E.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("49237"), n.e("99387"), n.e("96427"), n.e("33053"), n.e("49146"), n.e("75475"), n.e("85093"), n.e("85552"), n.e("58227"), n.e("43502"), n.e("69760"), n.e("33213")]).then(n.bind(n, "545135"));
        return n => (0, a.jsx)(e, {
          ...n,
          guild: t
        })
      })
    }), e_(this, "closeAllHeaderNotices", () => {
      this.handleCloseSubscribeTooltip(), this.handleCloseTemplateDirtyTooltip(), this.handleCloseStudentHubPrivacySettingsTooltip()
    }), e_(this, "handleCloseStudentHubPrivacySettingsTooltip", () => {
      var e;
      let t = (0, v.isDismissibleContentDismissed)(u.DismissibleContent.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP),
        n = null === (e = this.props.guild) || void 0 === e ? void 0 : e.hasFeature(eu.GuildFeatures.HUB);
      !t && n && (0, v.markDismissibleContentAsDismissed)(u.DismissibleContent.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP, {
        dismissAction: ec.ContentDismissActionType.AUTO
      })
    }), e_(this, "handleCloseSubscribeTooltip", () => {
      this.showTimeout.stop(), this.state.shouldShowSubscribeTooltip && this.setState({
        shouldShowSubscribeTooltip: !1
      })
    }), e_(this, "handleCloseTemplateDirtyTooltip", () => {
      let {
        guild: e,
        showGuildTemplateDirtyTooltip: t
      } = this.props;
      null != e && t && y.default.hideGuildTemplateDirtyTooltip(e.id)
    }), e_(this, "renderMenuPopout", async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("69760"), n.e("46826")]).then(n.bind(n, "859432"));
      return t => {
        let {
          closePopout: n
        } = t, {
          guild: s
        } = this.props;
        return null != s && (0, a.jsx)(e, {
          onClose: n,
          guild: s
        })
      }
    }), e_(this, "renderGuildHeaderUpsellPopout", e => {
      let {
        showGuildBoostingProgressBarUpsell: t,
        showGuildBoostingProgressBarSizeUpsell: n,
        showRoleSubscriptionUpsell: s,
        showDiscoveryTooltip: l,
        showInviteSplashUpsell: i,
        showDiscoveryLandingPageSettingsUpsell: r,
        showHubPrivacySettingsTooltip: o,
        showActiveThreadsNotice: d,
        showGuildSoundboardPermissionUpsell: c,
        showMediaChannelUpsell: f,
        showTierTemplatesUpsell: E,
        shouldRenderCustomNotificationSoundsCoachmark: h,
        guild: _,
        theme: C
      } = this.props;
      if (null == _) return this.renderGuildHeaderDropdownButton(e);
      let m = [];
      return (o && m.push(u.DismissibleContent.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP), d && m.push(u.DismissibleContent.GUILD_HEADER_ACTIVE_THREADS_NOTICE), t && m.push(u.DismissibleContent.GUILD_HEADER_PREMIUM_GUILD_PROGRESS), n && m.push(u.DismissibleContent.GUILD_HEADER_PROGRESS_BAR_SIZE_COACH_MARK), s && m.push(u.DismissibleContent.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL), c && m.push(u.DismissibleContent.GUILD_HEADER_SOUNDBOARD_PERMISSION), i && m.push(u.DismissibleContent.GUILD_HEADER_INVITE_SPLASH), l && m.push(u.DismissibleContent.GUILD_HEADER_SERVER_DISCOVERY_TOOLTIP), r && m.push(u.DismissibleContent.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL), 0 === m.length) ? this.renderGuildHeaderDropdownButton(e) : (f && m.push(u.DismissibleContent.MEDIA_CHANNEL_UPSELL), E && m.push(u.DismissibleContent.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL), h && m.push(u.DismissibleContent.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_COACHMARK), (0, a.jsx)(ei.default, {
        contentTypes: m,
        theme: C,
        guild: _,
        renderGuildHeaderDropdownButton: () => this.renderGuildHeaderDropdownButton(e)
      }))
    }), e_(this, "renderGuildHeaderDropdownButton", e => (0, a.jsx)(h.default, {
      open: e,
      className: eh.dropdownButton
    })), e_(this, "pinBannerOrGuildInfo", e => {
      let {
        scrollTop: t
      } = e;
      this.setAnimatedValue(t)
    })
  }
}

function eI(e) {
  var t;
  let {
    guildId: n,
    hideSelectedChannel: l,
    selectedChannelId: r
  } = e, d = (0, o.useStateFromStores)([q.default], () => q.default.getGuild(n));
  (0, _.useGlobalTriggerDebugging)(n);
  let f = (0, O.default)(n),
    E = (0, o.useStateFromStores)([W.default], () => W.default.getGuildDimensions(n).scrollTo),
    h = (0, o.useStateFromStores)([$.default], () => $.default.getChannelId()),
    [T, R, y] = (0, o.useStateFromStoresArray)([X.default], () => [X.default.can(eu.Permissions.MANAGE_GUILD, d), X.default.can(eu.Permissions.MANAGE_ROLES, d), X.default.can(eu.Permissions.MANAGE_THREADS, d)]),
    U = (0, o.useStateFromStores)([K.default], () => K.default.isUnavailable(n)),
    w = (0, o.useStateFromStores)([ee.default], () => ee.default.getCurrentUser()),
    B = (0, o.useStateFromStores)([V.default], () => V.default.darkSidebar ? eu.ThemeTypes.DARK : V.default.theme),
    {
      enableStudyGroup: H
    } = (0, b.useHubStudyGroupExperiment)(d),
    z = (0, N.default)(e => e.currentlyShown.has(u.DismissibleContent.NAGBAR_NOTICE_CONNECT_PLAYSTATION)),
    [ea, es] = s.useState(!z),
    el = (0, C.default)(n),
    {
      analyticsLocations: ei
    } = (0, S.default)(m.default.GUILD_HEADER),
    {
      analyticsLocations: er
    } = (0, S.default)(m.default.GUILD_CHANNEL_LIST_FOOTER);
  s.useEffect(() => {
    n !== el && es(!z)
  }, [n, el, z]);
  let [eo, ef] = (0, N.default)(e => [ed.CHANNEL_NOTICES.some(t => e.currentlyShown.has(t.dismissibleContentType)), e.currentlyShownGroup.has(ec.DismissibleContentGroupName.GUILD_HEADER_TOOLTIPS)]), eE = (0, I.default)(d), eh = (0, c.useModalsStore)(c.hasAnyModalOpenSelector), e_ = (0, o.useStateFromStores)([Z.default], () => Z.default.hasLayers()), eC = (0, o.useStateFromStores)([F.default], () => F.default.shouldShow(em)), eS = T && (null == d ? void 0 : d.premiumProgressBarEnabled) === !1 && !en.ProcessArgs.isDisallowPopupsSet(), eI = (0, o.useStateFromStores)([Q.default], () => Q.default.getMemberCount(n)), eT = T && null != eI && eI >= 30 && (null == d ? void 0 : d.premiumProgressBarEnabled) === !1 && !en.ProcessArgs.isDisallowPopupsSet(), eg = R && null != d && (d.hasFeature(eu.GuildFeatures.COMMUNITY) || null != eI && eI > 50), eA = (0, x.default)(n), eN = (0, A.useLowerMemberCountRequirements)(n), ev = (null == d ? void 0 : d.hasFeature(eu.GuildFeatures.HUB)) === !0, eR = T && (null == d ? void 0 : d.hasFeature(eu.GuildFeatures.DISCOVERABLE)) === !0, eO = (0, p.useBlockedPaymentsConfig)(), eL = (T || (null == d ? void 0 : d.premiumTier) === eu.BoostedGuildTiers.NONE) && !en.ProcessArgs.isDisallowPopupsSet() && !eO, eM = (0, o.useStateFromStores)([D.default, Z.default], () => null != d && null != w && T && !Z.default.hasLayers() && D.default.shouldShowGuildTemplateDirtyTooltip(n)), eP = (0, o.useStateFromStores)([Y.default], () => Y.default.getChannel(r)), {
    isPopoutOpen: ex
  } = (0, L.useGuildHeaderPopoutStore)(), ey = null !== (t = null == d ? void 0 : d.hasFeature(eu.GuildFeatures.COMMUNITY)) && void 0 !== t && t, eD = (0, o.useStateFromStores)([k.default], () => !i().isEmpty(k.default.getThreadsForGuild(n))), eb = et.default.isNewUser(w), eU = ea && !eb, ej = (0, g.default)(w);
  (0, M.default)(d);
  let eG = (0, v.useIsDismissibleContentDismissed)(u.DismissibleContent.PREMIUM_TUTORIAL_SERVER_MENU_TOOLTIP),
    ew = (0, j.default)(n),
    ek = (0, P.default)(n),
    eB = (0, o.useStateFromStores)([$.default], () => $.default.getChannelId()),
    eF = (0, o.useStateFromStores)([J.default], () => J.default.desyncedVoiceStatesCount),
    eH = G.CustomNotificationSoundExperiment.useExperiment({
      location: "GuildSidebar"
    }, {
      autoTrackExposure: !0
    }).enabled;
  return (0, a.jsx)(ep, {
    guildId: n,
    hideSelectedChannel: l,
    guild: d,
    scrollToChannel: E,
    selectedChannelId: l ? null : r,
    selectedChannel: eP,
    selectedVoiceChannelId: h,
    voiceStates: f,
    rtcConnectedChannelId: eB,
    rtcDesyncedVoiceStatesCount: eF,
    isUnavailable: U,
    theme: B,
    user: w,
    hasChannelNotice: null != eE || eo,
    anyLayerOpen: eh || e_,
    showGuildBoostingProgressBarUpsell: eS,
    showGuildBoostingProgressBarSizeUpsell: eT,
    showInviteSplashUpsell: eL,
    showDiscoveryLandingPageSettingsUpsell: eR,
    showGuildHeaderTutorial: eC,
    showGuildTemplateDirtyTooltip: eM,
    showRoleSubscriptionUpsell: eA,
    showDiscoveryTooltip: eN,
    showHubPrivacySettingsTooltip: ev,
    showNewUnreadsBar: ey,
    showActiveThreadsNotice: y && null != eI && eI >= 200 && eD,
    showGuildSoundboardPermissionUpsell: eg,
    showMediaChannelUpsell: ew,
    showTierTemplatesUpsell: ek,
    isHeaderPopoutOpen: ex,
    enableStudyGroup: H,
    isGuildHeaderDismissibleTooltipShown: ef,
    canShowCoachMarkAtBottom: ea,
    headerAnalyticsLocations: ei,
    footerAnalyticsLocations: er,
    shouldRenderClipsEducation: ej,
    isTutorialHighlightDismissed: eG,
    shouldRenderBurstCoachmark: eU,
    shouldRenderCustomNotificationSoundsCoachmark: eH
  })
}