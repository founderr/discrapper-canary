"use strict";
a.r(t), a.d(t, {
  default: function() {
    return ep
  }
}), a("47120"), a("653041");
var n = a("735250"),
  s = a("470079"),
  l = a("392711"),
  i = a.n(l),
  r = a("718017"),
  o = a("442837"),
  u = a("524437"),
  d = a("846519"),
  c = a("481060"),
  f = a("570140"),
  E = a("239091"),
  h = a("269128"),
  _ = a("711237"),
  C = a("110924"),
  m = a("100527"),
  S = a("906732"),
  p = a("211242"),
  I = a("536687"),
  T = a("745837"),
  g = a("13228"),
  A = a("1259"),
  N = a("211644"),
  v = a("605236"),
  R = a("243778"),
  L = a("492162"),
  O = a("818634"),
  M = a("596557"),
  P = a("817520"),
  x = a("999309"),
  y = a("408987"),
  D = a("130734"),
  b = a("499137"),
  U = a("258871"),
  j = a("972264"),
  G = a("11352"),
  w = a("304445"),
  k = a("344185"),
  F = a("155409"),
  B = a("10401"),
  H = a("970731"),
  V = a("210887"),
  Y = a("592125"),
  W = a("796974"),
  K = a("486472"),
  z = a("984933"),
  q = a("650774"),
  Q = a("430824"),
  Z = a("819640"),
  X = a("496675"),
  J = a("19780"),
  $ = a("594174"),
  ee = a("74538"),
  et = a("374023"),
  ea = a("373274"),
  en = a("547042"),
  es = a("315174"),
  el = a("577718"),
  ei = a("156978"),
  er = a("591190"),
  eo = a("981631"),
  eu = a("652785"),
  ed = a("921944"),
  ec = a("647086"),
  ef = a("689938"),
  eE = a("957950");

function eh(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e
}
let e_ = 64,
  eC = "server-settings",
  em = {
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
class eS extends s.PureComponent {
  static getDerivedStateFromProps(e) {
    let {
      guild: t,
      hasChannelNotice: a
    } = e;
    return null == t || null == t.banner || a ? {
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
      showGuildHeaderTutorial: a,
      anyLayerOpen: s
    } = this.props, {
      shouldShowSubscribeTooltip: l
    } = this.state;
    if (a) return (0, n.jsx)("div", {
      onClick: t => e ? null : t.stopPropagation(),
      children: (0, n.jsx)(F.default, {
        tutorialId: eC,
        position: "bottom",
        inlineSpecs: em,
        children: this.renderGuildHeaderDropdownButton(e)
      })
    });
    if (t) return (0, n.jsx)(c.Tooltip, {
      forceOpen: !0,
      color: c.TooltipColors.BRAND,
      position: "bottom",
      shouldShow: !e && !s,
      text: ef.default.Messages.GUILD_TEMPLATES_UNSYNCED_TOOLTIP,
      "aria-label": ef.default.Messages.GUILD_TEMPLATES_UNSYNCED_TOOLTIP,
      children: () => this.renderGuildHeaderDropdownButton(e)
    });
    if (!s && !e) return l ? (0, n.jsx)(c.Popout, {
      renderPopout: () => (0, n.jsx)("div", {
        onClick: e => e.stopPropagation(),
        children: (0, n.jsx)(H.default, {
          header: ef.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_HEADER_SUBSCRIBE_TOOLTIP_HEADER,
          content: ef.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_HEADER_SUBSCRIBE_TOOLTIP_TEXT,
          buttonCTA: ef.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_HEADER_SUBSCRIBE_TOOLTIP_CLOSE,
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
      isHeaderPopoutOpen: a,
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
    return null == t ? null : (0, n.jsx)(S.AnalyticsLocationProvider, {
      value: r,
      children: (0, n.jsx)(c.LazyPopout, {
        renderPopout: this.renderMenuPopout,
        position: "bottom",
        align: "center",
        animation: c.Popout.Animation.SCALE,
        shouldShow: a,
        onRequestClose: () => {
          (0, O.showGuildHeaderPopout)(!1)
        },
        children: s => {
          let {
            onClick: l,
            ...i
          } = s;
          return (0, n.jsx)(es.default, {
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
            children: this.renderGuildHeaderNotices(a)
          })
        }
      })
    })
  }
  setAnimatedValue(e) {
    let {
      guild: t
    } = this.props, a = null != this.getGuildBannerHash(), n = null == t ? void 0 : t.hasCommunityInfoSubheader();
    null != t && (a || n) && (a ? this.setAnimatedValueForBanner(e) : this.setAnimatedValueForGuildInfo(e))
  }
  setAnimatedValueForBanner(e) {
    let {
      renderBanner: t,
      communityInfoVisible: a,
      bannerVisible: n,
      bannerVisibleHeight: s,
      controller: l
    } = this.state;
    (e >= e_ && n || e < e_ && !n) && (n = !n), (e >= 88 && !t || e < 88 && t) && (t = !t), s = Math.max(88 - e, 0), a = n, (t !== this.state.renderBanner || n !== this.state.bannerVisible || s !== this.state.bannerVisibleHeight || a !== this.state.communityInfoVisible) && this.setState({
      renderBanner: t,
      bannerVisible: n,
      bannerVisibleHeight: s,
      communityInfoVisible: a
    }), l.update({
      value: Math.min(1, Math.max(0, 1 - e / 88)),
      immediate: !0
    }).start()
  }
  setAnimatedValueForGuildInfo(e) {
    let {
      communityInfoVisible: t,
      controller: a
    } = this.state;
    (e >= 20 && t || e < 20 && !t) && (t = !t), t !== this.state.communityInfoVisible && this.setState({
      communityInfoVisible: t
    }), a.update({
      value: Math.min(1, Math.max(0, 1 - e / 20)),
      immediate: !0
    }).start()
  }
  renderChannelList() {
    let {
      isUnavailable: e,
      guild: t,
      selectedChannel: a,
      enableStudyGroup: s,
      ...l
    } = this.props;
    if (e || null == t) return (0, n.jsx)(er.default, {
      withBannerPadding: null != t && null != this.getGuildBannerHash()
    });
    {
      if (t.hasFeature(eo.GuildFeatures.HUB) && !s) return (0, n.jsx)("div", {
        className: eE.hubContainer,
        children: (0, n.jsx)(U.default, {
          guild: t,
          channel: null != a ? a : z.default.getDefaultChannel(t.id)
        })
      });
      let e = t.id === ec.FAVORITES_RAW_GUILD_ID ? ea.FavoritesChannelList : ea.GuildChannelList;
      return (0, n.jsx)(e, {
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
    return (0, n.jsx)(R.default, {
      contentTypes: [],
      children: a => {
        let {
          visibleContent: s,
          markAsDismissed: l
        } = a;
        switch (s) {
          case u.DismissibleContent.BASH_OUT_COACH_MARK:
            return (0, n.jsx)(en.EmbeddedActivityTutorial, {
              channelId: null != e ? e : void 0,
              markAsDismissed: l,
              tutorialType: en.TutorialType.BASH_OUT
            });
          case u.DismissibleContent.ACTIVITIES_COACH_MARK_GAME_NIGHT:
            return (0, n.jsx)(en.EmbeddedActivityTutorial, {
              channelId: null != e ? e : void 0,
              markAsDismissed: l,
              tutorialType: en.TutorialType.GAME_NIGHT
            });
          default:
            if (t) return (0, n.jsx)(T.default, {});
            return (0, n.jsx)(n.Fragment, {})
        }
      }
    })
  }
  render() {
    let {
      guild: e,
      footerAnalyticsLocations: t
    } = this.props;
    return (0, n.jsxs)("nav", {
      className: eE.container,
      onContextMenu: this.handleContextMenu,
      "aria-label": ef.default.Messages.GUILD_SIDEBAR_A11Y_LABEL.format({
        guildName: null != e ? e.toString() : ""
      }),
      children: [null != e && this.renderGuildHeader(this.state.hasGuildSubheader), null != e && (0, n.jsx)(ei.default, {
        guild: e,
        setHasSubheader: e => this.setState({
          hasGuildSubheader: e
        })
      }), this.renderChannelList(), (0, n.jsx)(S.AnalyticsLocationProvider, {
        value: t,
        children: this.renderFooter()
      })]
    })
  }
  constructor(...e) {
    super(...e), eh(this, "historyUnlisten", () => {}), eh(this, "showTimeout", new d.Timeout), eh(this, "state", {
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
    }), eh(this, "handleHistoryChange", e => {
      null != e.state && e.state.shouldShowSubscribeTooltip && this.showTimeout.start(1e3, () => this.setState({
        shouldShowSubscribeTooltip: !0
      }))
    }), eh(this, "handleHeaderMenuToggle", e => {
      let {
        isHeaderPopoutOpen: t
      } = this.props;
      e.stopPropagation(), (0, O.showGuildHeaderPopout)(!t), this.closeAllHeaderNotices()
    }), eh(this, "handleContextMenu", e => {
      let {
        guild: t
      } = this.props;
      null != t && (0, E.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await a.e("92795").then(a.bind(a, "652171"));
        return a => (0, n.jsx)(e, {
          ...a,
          guild: t
        })
      })
    }), eh(this, "handleHeaderContextMenu", e => {
      let {
        guild: t
      } = this.props;
      null != t && (0, E.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await Promise.all([a.e("49237"), a.e("99387"), a.e("66635"), a.e("33053"), a.e("49146"), a.e("75475"), a.e("58227"), a.e("85093"), a.e("85552"), a.e("43502"), a.e("69760"), a.e("33213")]).then(a.bind(a, "545135"));
        return a => (0, n.jsx)(e, {
          ...a,
          guild: t
        })
      })
    }), eh(this, "closeAllHeaderNotices", () => {
      this.handleCloseSubscribeTooltip(), this.handleCloseTemplateDirtyTooltip(), this.handleCloseStudentHubPrivacySettingsTooltip()
    }), eh(this, "handleCloseStudentHubPrivacySettingsTooltip", () => {
      var e;
      let t = (0, v.isDismissibleContentDismissed)(u.DismissibleContent.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP),
        a = null === (e = this.props.guild) || void 0 === e ? void 0 : e.hasFeature(eo.GuildFeatures.HUB);
      !t && a && (0, v.markDismissibleContentAsDismissed)(u.DismissibleContent.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP, {
        dismissAction: ed.ContentDismissActionType.AUTO
      })
    }), eh(this, "handleCloseSubscribeTooltip", () => {
      this.showTimeout.stop(), this.state.shouldShowSubscribeTooltip && this.setState({
        shouldShowSubscribeTooltip: !1
      })
    }), eh(this, "handleCloseTemplateDirtyTooltip", () => {
      let {
        guild: e,
        showGuildTemplateDirtyTooltip: t
      } = this.props;
      null != e && t && y.default.hideGuildTemplateDirtyTooltip(e.id)
    }), eh(this, "renderMenuPopout", async () => {
      let {
        default: e
      } = await Promise.all([a.e("49237"), a.e("99387"), a.e("69760"), a.e("46826")]).then(a.bind(a, "859432"));
      return t => {
        let {
          closePopout: a
        } = t, {
          guild: s
        } = this.props;
        return null != s && (0, n.jsx)(e, {
          onClose: a,
          guild: s
        })
      }
    }), eh(this, "renderGuildHeaderUpsellPopout", e => {
      let {
        showGuildBoostingProgressBarUpsell: t,
        showGuildBoostingProgressBarSizeUpsell: a,
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
      return (o && m.push(u.DismissibleContent.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP), d && m.push(u.DismissibleContent.GUILD_HEADER_ACTIVE_THREADS_NOTICE), t && m.push(u.DismissibleContent.GUILD_HEADER_PREMIUM_GUILD_PROGRESS), a && m.push(u.DismissibleContent.GUILD_HEADER_PROGRESS_BAR_SIZE_COACH_MARK), s && m.push(u.DismissibleContent.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL), c && m.push(u.DismissibleContent.GUILD_HEADER_SOUNDBOARD_PERMISSION), i && m.push(u.DismissibleContent.GUILD_HEADER_INVITE_SPLASH), l && m.push(u.DismissibleContent.GUILD_HEADER_SERVER_DISCOVERY_TOOLTIP), r && m.push(u.DismissibleContent.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL), 0 === m.length) ? this.renderGuildHeaderDropdownButton(e) : (f && m.push(u.DismissibleContent.MEDIA_CHANNEL_UPSELL), E && m.push(u.DismissibleContent.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL), h && m.push(u.DismissibleContent.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_COACHMARK), (0, n.jsx)(el.default, {
        contentTypes: m,
        theme: C,
        guild: _,
        renderGuildHeaderDropdownButton: () => this.renderGuildHeaderDropdownButton(e)
      }))
    }), eh(this, "renderGuildHeaderDropdownButton", e => (0, n.jsx)(h.default, {
      open: e,
      className: eE.dropdownButton
    })), eh(this, "pinBannerOrGuildInfo", e => {
      let {
        scrollTop: t
      } = e;
      this.setAnimatedValue(t)
    })
  }
}

function ep(e) {
  var t;
  let {
    guildId: a,
    hideSelectedChannel: l,
    selectedChannelId: r
  } = e, d = (0, o.useStateFromStores)([Q.default], () => Q.default.getGuild(a));
  (0, _.useGlobalTriggerDebugging)(a);
  let f = (0, L.default)(a),
    E = (0, o.useStateFromStores)([W.default], () => W.default.getGuildDimensions(a).scrollTo),
    h = (0, o.useStateFromStores)([J.default], () => J.default.getChannelId()),
    [T, R, y] = (0, o.useStateFromStoresArray)([X.default], () => [X.default.can(eo.Permissions.MANAGE_GUILD, d), X.default.can(eo.Permissions.MANAGE_ROLES, d), X.default.can(eo.Permissions.MANAGE_THREADS, d)]),
    U = (0, o.useStateFromStores)([K.default], () => K.default.isUnavailable(a)),
    w = (0, o.useStateFromStores)([$.default], () => $.default.getCurrentUser()),
    F = (0, o.useStateFromStores)([V.default], () => V.default.darkSidebar ? eo.ThemeTypes.DARK : V.default.theme),
    {
      enableStudyGroup: H
    } = (0, b.useHubStudyGroupExperiment)(d),
    z = (0, N.default)(e => e.currentlyShown.has(u.DismissibleContent.NAGBAR_NOTICE_CONNECT_PLAYSTATION)),
    [ea, en] = s.useState(!z),
    es = (0, C.default)(a),
    {
      analyticsLocations: el
    } = (0, S.default)(m.default.GUILD_HEADER),
    {
      analyticsLocations: ei
    } = (0, S.default)(m.default.GUILD_CHANNEL_LIST_FOOTER);
  s.useEffect(() => {
    a !== es && en(!z)
  }, [a, es, z]);
  let [er, ec] = (0, N.default)(e => [eu.CHANNEL_NOTICES.some(t => e.currentlyShown.has(t.dismissibleContentType)), e.currentlyShownGroup.has(ed.DismissibleContentGroupName.GUILD_HEADER_TOOLTIPS)]), ef = (0, I.default)(d), eE = (0, c.useModalsStore)(c.hasAnyModalOpenSelector), eh = (0, o.useStateFromStores)([Z.default], () => Z.default.hasLayers()), e_ = (0, o.useStateFromStores)([B.default], () => B.default.shouldShow(eC)), em = T && (null == d ? void 0 : d.premiumProgressBarEnabled) === !1 && !et.ProcessArgs.isDisallowPopupsSet(), ep = (0, o.useStateFromStores)([q.default], () => q.default.getMemberCount(a)), eI = T && null != ep && ep >= 30 && (null == d ? void 0 : d.premiumProgressBarEnabled) === !1 && !et.ProcessArgs.isDisallowPopupsSet(), eT = R && null != d && (d.hasFeature(eo.GuildFeatures.COMMUNITY) || null != ep && ep > 50), eg = (0, x.default)(a), eA = (0, A.useLowerMemberCountRequirements)(a), eN = (null == d ? void 0 : d.hasFeature(eo.GuildFeatures.HUB)) === !0, ev = T && (null == d ? void 0 : d.hasFeature(eo.GuildFeatures.DISCOVERABLE)) === !0, eR = (0, p.useBlockedPaymentsConfig)(), eL = (T || (null == d ? void 0 : d.premiumTier) === eo.BoostedGuildTiers.NONE) && !et.ProcessArgs.isDisallowPopupsSet() && !eR, eO = (0, o.useStateFromStores)([D.default, Z.default], () => null != d && null != w && T && !Z.default.hasLayers() && D.default.shouldShowGuildTemplateDirtyTooltip(a)), eM = (0, o.useStateFromStores)([Y.default], () => Y.default.getChannel(r)), {
    isPopoutOpen: eP
  } = (0, O.useGuildHeaderPopoutStore)(), ex = null !== (t = null == d ? void 0 : d.hasFeature(eo.GuildFeatures.COMMUNITY)) && void 0 !== t && t, ey = (0, o.useStateFromStores)([k.default], () => !i().isEmpty(k.default.getThreadsForGuild(a))), eD = ee.default.isNewUser(w), eb = ea && !eD, eU = (0, g.default)(w);
  (0, M.default)(d);
  let ej = (0, v.useIsDismissibleContentDismissed)(u.DismissibleContent.PREMIUM_TUTORIAL_SERVER_MENU_TOOLTIP),
    eG = (0, j.default)(a),
    ew = (0, P.default)(a),
    ek = G.CustomNotificationSoundExperiment.useExperiment({
      location: "GuildSidebar"
    }, {
      autoTrackExposure: !0
    }).enabled;
  return (0, n.jsx)(eS, {
    guildId: a,
    hideSelectedChannel: l,
    guild: d,
    scrollToChannel: E,
    selectedChannelId: l ? null : r,
    selectedChannel: eM,
    selectedVoiceChannelId: h,
    voiceStates: f,
    isUnavailable: U,
    theme: F,
    user: w,
    hasChannelNotice: null != ef || er,
    anyLayerOpen: eE || eh,
    showGuildBoostingProgressBarUpsell: em,
    showGuildBoostingProgressBarSizeUpsell: eI,
    showInviteSplashUpsell: eL,
    showDiscoveryLandingPageSettingsUpsell: ev,
    showGuildHeaderTutorial: e_,
    showGuildTemplateDirtyTooltip: eO,
    showRoleSubscriptionUpsell: eg,
    showDiscoveryTooltip: eA,
    showHubPrivacySettingsTooltip: eN,
    showNewUnreadsBar: ex,
    showActiveThreadsNotice: y && null != ep && ep >= 200 && ey,
    showGuildSoundboardPermissionUpsell: eT,
    showMediaChannelUpsell: eG,
    showTierTemplatesUpsell: ew,
    isHeaderPopoutOpen: eP,
    enableStudyGroup: H,
    isGuildHeaderDismissibleTooltipShown: ec,
    canShowCoachMarkAtBottom: ea,
    headerAnalyticsLocations: el,
    footerAnalyticsLocations: ei,
    shouldRenderClipsEducation: eU,
    isTutorialHighlightDismissed: ej,
    shouldRenderBurstCoachmark: eb,
    shouldRenderCustomNotificationSoundsCoachmark: ek
  })
}