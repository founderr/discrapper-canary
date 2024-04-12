"use strict";
a.r(t), a.d(t, {
  default: function() {
    return eS
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
  O = a("492162"),
  L = a("818634"),
  M = a("596557"),
  P = a("817520"),
  x = a("999309"),
  y = a("408987"),
  D = a("130734"),
  b = a("499137"),
  U = a("258871"),
  j = a("972264"),
  G = a("304445"),
  w = a("344185"),
  k = a("155409"),
  F = a("10401"),
  H = a("970731"),
  B = a("210887"),
  V = a("592125"),
  Y = a("796974"),
  W = a("486472"),
  K = a("984933"),
  z = a("650774"),
  q = a("430824"),
  Q = a("819640"),
  Z = a("496675"),
  X = a("19780"),
  J = a("594174"),
  $ = a("74538"),
  ee = a("374023"),
  et = a("373274"),
  ea = a("547042"),
  en = a("315174"),
  es = a("577718"),
  el = a("156978"),
  ei = a("591190"),
  er = a("981631"),
  eo = a("652785"),
  eu = a("921944"),
  ed = a("647086"),
  ec = a("689938"),
  ef = a("54449");

function eE(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e
}
let eh = 64,
  e_ = "server-settings",
  eC = {
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
class em extends s.PureComponent {
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
    this.setAnimatedValue(0), f.default.subscribe("LAYER_PUSH", this.closeAllHeaderNotices), this.historyUnlisten = G.default.addRouteChangeListener(this.handleHistoryChange);
    let {
      location: t
    } = G.default.getHistory();
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
      children: (0, n.jsx)(k.default, {
        tutorialId: e_,
        position: "bottom",
        inlineSpecs: eC,
        children: this.renderGuildHeaderDropdownButton(e)
      })
    });
    if (t) return (0, n.jsx)(c.Tooltip, {
      forceOpen: !0,
      color: c.TooltipColors.BRAND,
      position: "bottom",
      shouldShow: !e && !s,
      text: ec.default.Messages.GUILD_TEMPLATES_UNSYNCED_TOOLTIP,
      "aria-label": ec.default.Messages.GUILD_TEMPLATES_UNSYNCED_TOOLTIP,
      children: () => this.renderGuildHeaderDropdownButton(e)
    });
    if (!s && !e) return l ? (0, n.jsx)(c.Popout, {
      renderPopout: () => (0, n.jsx)("div", {
        onClick: e => e.stopPropagation(),
        children: (0, n.jsx)(H.default, {
          header: ec.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_HEADER_SUBSCRIBE_TOOLTIP_HEADER,
          content: ec.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_HEADER_SUBSCRIBE_TOOLTIP_TEXT,
          buttonCTA: ec.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_HEADER_SUBSCRIBE_TOOLTIP_CLOSE,
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
          (0, L.showGuildHeaderPopout)(!1)
        },
        children: s => {
          let {
            onClick: l,
            ...i
          } = s;
          return (0, n.jsx)(en.default, {
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
    (e >= eh && n || e < eh && !n) && (n = !n), (e >= 88 && !t || e < 88 && t) && (t = !t), s = Math.max(88 - e, 0), a = n, (t !== this.state.renderBanner || n !== this.state.bannerVisible || s !== this.state.bannerVisibleHeight || a !== this.state.communityInfoVisible) && this.setState({
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
    if (e || null == t) return (0, n.jsx)(ei.default, {
      withBannerPadding: null != t && null != this.getGuildBannerHash()
    });
    {
      if (t.hasFeature(er.GuildFeatures.HUB) && !s) return (0, n.jsx)("div", {
        className: ef.hubContainer,
        children: (0, n.jsx)(U.default, {
          guild: t,
          channel: null != a ? a : K.default.getDefaultChannel(t.id)
        })
      });
      let e = t.id === ed.FAVORITES_RAW_GUILD_ID ? et.FavoritesChannelList : et.GuildChannelList;
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
            return (0, n.jsx)(ea.EmbeddedActivityTutorial, {
              channelId: null != e ? e : void 0,
              markAsDismissed: l,
              tutorialType: ea.TutorialType.BASH_OUT
            });
          case u.DismissibleContent.ACTIVITIES_COACH_MARK_GAME_NIGHT:
            return (0, n.jsx)(ea.EmbeddedActivityTutorial, {
              channelId: null != e ? e : void 0,
              markAsDismissed: l,
              tutorialType: ea.TutorialType.GAME_NIGHT
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
      className: ef.container,
      onContextMenu: this.handleContextMenu,
      "aria-label": ec.default.Messages.GUILD_SIDEBAR_A11Y_LABEL.format({
        guildName: null != e ? e.toString() : ""
      }),
      children: [null != e && this.renderGuildHeader(this.state.hasGuildSubheader), null != e && (0, n.jsx)(el.default, {
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
    super(...e), eE(this, "historyUnlisten", () => {}), eE(this, "showTimeout", new d.Timeout), eE(this, "state", {
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
    }), eE(this, "handleHistoryChange", e => {
      null != e.state && e.state.shouldShowSubscribeTooltip && this.showTimeout.start(1e3, () => this.setState({
        shouldShowSubscribeTooltip: !0
      }))
    }), eE(this, "handleHeaderMenuToggle", e => {
      let {
        isHeaderPopoutOpen: t
      } = this.props;
      e.stopPropagation(), (0, L.showGuildHeaderPopout)(!t), this.closeAllHeaderNotices()
    }), eE(this, "handleContextMenu", e => {
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
    }), eE(this, "handleHeaderContextMenu", e => {
      let {
        guild: t
      } = this.props;
      null != t && (0, E.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await Promise.all([a.e("49237"), a.e("99387"), a.e("66635"), a.e("33053"), a.e("49146"), a.e("75475"), a.e("85093"), a.e("85552"), a.e("58227"), a.e("43502"), a.e("69760"), a.e("33213")]).then(a.bind(a, "545135"));
        return a => (0, n.jsx)(e, {
          ...a,
          guild: t
        })
      })
    }), eE(this, "closeAllHeaderNotices", () => {
      this.handleCloseSubscribeTooltip(), this.handleCloseTemplateDirtyTooltip(), this.handleCloseStudentHubPrivacySettingsTooltip()
    }), eE(this, "handleCloseStudentHubPrivacySettingsTooltip", () => {
      var e;
      let t = (0, v.isDismissibleContentDismissed)(u.DismissibleContent.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP),
        a = null === (e = this.props.guild) || void 0 === e ? void 0 : e.hasFeature(er.GuildFeatures.HUB);
      !t && a && (0, v.markDismissibleContentAsDismissed)(u.DismissibleContent.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP, {
        dismissAction: eu.ContentDismissActionType.AUTO
      })
    }), eE(this, "handleCloseSubscribeTooltip", () => {
      this.showTimeout.stop(), this.state.shouldShowSubscribeTooltip && this.setState({
        shouldShowSubscribeTooltip: !1
      })
    }), eE(this, "handleCloseTemplateDirtyTooltip", () => {
      let {
        guild: e,
        showGuildTemplateDirtyTooltip: t
      } = this.props;
      null != e && t && y.default.hideGuildTemplateDirtyTooltip(e.id)
    }), eE(this, "renderMenuPopout", async () => {
      let {
        default: e
      } = await Promise.all([a.e("99387"), a.e("69760"), a.e("46826")]).then(a.bind(a, "859432"));
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
    }), eE(this, "renderGuildHeaderUpsellPopout", e => {
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
        guild: h,
        theme: _
      } = this.props;
      if (null == h) return this.renderGuildHeaderDropdownButton(e);
      let C = [];
      return (o && C.push(u.DismissibleContent.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP), d && C.push(u.DismissibleContent.GUILD_HEADER_ACTIVE_THREADS_NOTICE), t && C.push(u.DismissibleContent.GUILD_HEADER_PREMIUM_GUILD_PROGRESS), a && C.push(u.DismissibleContent.GUILD_HEADER_PROGRESS_BAR_SIZE_COACH_MARK), s && C.push(u.DismissibleContent.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL), c && C.push(u.DismissibleContent.GUILD_HEADER_SOUNDBOARD_PERMISSION), i && C.push(u.DismissibleContent.GUILD_HEADER_INVITE_SPLASH), l && C.push(u.DismissibleContent.GUILD_HEADER_SERVER_DISCOVERY_TOOLTIP), r && C.push(u.DismissibleContent.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL), 0 === C.length) ? this.renderGuildHeaderDropdownButton(e) : (f && C.push(u.DismissibleContent.MEDIA_CHANNEL_UPSELL), E && C.push(u.DismissibleContent.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL), (0, n.jsx)(es.default, {
        contentTypes: C,
        theme: _,
        guild: h,
        renderGuildHeaderDropdownButton: () => this.renderGuildHeaderDropdownButton(e)
      }))
    }), eE(this, "renderGuildHeaderDropdownButton", e => (0, n.jsx)(h.default, {
      open: e,
      className: ef.dropdownButton
    })), eE(this, "pinBannerOrGuildInfo", e => {
      let {
        scrollTop: t
      } = e;
      this.setAnimatedValue(t)
    })
  }
}

function eS(e) {
  var t;
  let {
    guildId: a,
    hideSelectedChannel: l,
    selectedChannelId: r
  } = e, d = (0, o.useStateFromStores)([q.default], () => q.default.getGuild(a));
  (0, _.useGlobalTriggerDebugging)(a);
  let f = (0, O.default)(a),
    E = (0, o.useStateFromStores)([Y.default], () => Y.default.getGuildDimensions(a).scrollTo),
    h = (0, o.useStateFromStores)([X.default], () => X.default.getChannelId()),
    [T, R, y] = (0, o.useStateFromStoresArray)([Z.default], () => [Z.default.can(er.Permissions.MANAGE_GUILD, d), Z.default.can(er.Permissions.MANAGE_ROLES, d), Z.default.can(er.Permissions.MANAGE_THREADS, d)]),
    U = (0, o.useStateFromStores)([W.default], () => W.default.isUnavailable(a)),
    G = (0, o.useStateFromStores)([J.default], () => J.default.getCurrentUser()),
    k = (0, o.useStateFromStores)([B.default], () => B.default.darkSidebar ? er.ThemeTypes.DARK : B.default.theme),
    {
      enableStudyGroup: H
    } = (0, b.useHubStudyGroupExperiment)(d),
    K = (0, N.default)(e => e.currentlyShown.has(u.DismissibleContent.NAGBAR_NOTICE_CONNECT_PLAYSTATION)),
    [et, ea] = s.useState(!K),
    en = (0, C.default)(a),
    {
      analyticsLocations: es
    } = (0, S.default)(m.default.GUILD_HEADER),
    {
      analyticsLocations: el
    } = (0, S.default)(m.default.GUILD_CHANNEL_LIST_FOOTER);
  s.useEffect(() => {
    a !== en && ea(!K)
  }, [a, en, K]);
  let [ei, ed] = (0, N.default)(e => [eo.CHANNEL_NOTICES.some(t => e.currentlyShown.has(t.dismissibleContentType)), e.currentlyShownGroup.has(eu.DismissibleContentGroupName.GUILD_HEADER_TOOLTIPS)]), ec = (0, I.default)(d), ef = (0, c.useModalsStore)(c.hasAnyModalOpenSelector), eE = (0, o.useStateFromStores)([Q.default], () => Q.default.hasLayers()), eh = (0, o.useStateFromStores)([F.default], () => F.default.shouldShow(e_)), eC = T && (null == d ? void 0 : d.premiumProgressBarEnabled) === !1 && !ee.ProcessArgs.isDisallowPopupsSet(), eS = (0, o.useStateFromStores)([z.default], () => z.default.getMemberCount(a)), ep = T && null != eS && eS >= 30 && (null == d ? void 0 : d.premiumProgressBarEnabled) === !1 && !ee.ProcessArgs.isDisallowPopupsSet(), eI = R && null != d && (d.hasFeature(er.GuildFeatures.COMMUNITY) || null != eS && eS > 50), eT = (0, x.default)(a), eg = (0, A.useLowerMemberCountRequirements)(a), eA = (null == d ? void 0 : d.hasFeature(er.GuildFeatures.HUB)) === !0, eN = T && (null == d ? void 0 : d.hasFeature(er.GuildFeatures.DISCOVERABLE)) === !0, ev = (0, p.useBlockedPaymentsConfig)(), eR = (T || (null == d ? void 0 : d.premiumTier) === er.BoostedGuildTiers.NONE) && !ee.ProcessArgs.isDisallowPopupsSet() && !ev, eO = (0, o.useStateFromStores)([D.default, Q.default], () => null != d && null != G && T && !Q.default.hasLayers() && D.default.shouldShowGuildTemplateDirtyTooltip(a)), eL = (0, o.useStateFromStores)([V.default], () => V.default.getChannel(r)), {
    isPopoutOpen: eM
  } = (0, L.useGuildHeaderPopoutStore)(), eP = null !== (t = null == d ? void 0 : d.hasFeature(er.GuildFeatures.COMMUNITY)) && void 0 !== t && t, ex = (0, o.useStateFromStores)([w.default], () => !i().isEmpty(w.default.getThreadsForGuild(a))), ey = $.default.isNewUser(G), eD = et && !ey, eb = (0, g.default)(G);
  (0, M.default)(d);
  let eU = (0, v.useIsDismissibleContentDismissed)(u.DismissibleContent.PREMIUM_TUTORIAL_SERVER_MENU_TOOLTIP),
    ej = (0, j.default)(a),
    eG = (0, P.default)(a);
  return (0, n.jsx)(em, {
    guildId: a,
    hideSelectedChannel: l,
    guild: d,
    scrollToChannel: E,
    selectedChannelId: l ? null : r,
    selectedChannel: eL,
    selectedVoiceChannelId: h,
    voiceStates: f,
    isUnavailable: U,
    theme: k,
    user: G,
    hasChannelNotice: null != ec || ei,
    anyLayerOpen: ef || eE,
    showGuildBoostingProgressBarUpsell: eC,
    showGuildBoostingProgressBarSizeUpsell: ep,
    showInviteSplashUpsell: eR,
    showDiscoveryLandingPageSettingsUpsell: eN,
    showGuildHeaderTutorial: eh,
    showGuildTemplateDirtyTooltip: eO,
    showRoleSubscriptionUpsell: eT,
    showDiscoveryTooltip: eg,
    showHubPrivacySettingsTooltip: eA,
    showNewUnreadsBar: eP,
    showActiveThreadsNotice: y && null != eS && eS >= 200 && ex,
    showGuildSoundboardPermissionUpsell: eI,
    showMediaChannelUpsell: ej,
    showTierTemplatesUpsell: eG,
    isHeaderPopoutOpen: eM,
    enableStudyGroup: H,
    isGuildHeaderDismissibleTooltipShown: ed,
    canShowCoachMarkAtBottom: et,
    headerAnalyticsLocations: es,
    footerAnalyticsLocations: el,
    shouldRenderClipsEducation: eb,
    isTutorialHighlightDismissed: eU,
    shouldRenderBurstCoachmark: eD
  })
}