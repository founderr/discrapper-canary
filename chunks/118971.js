"use strict";
n.r(t), n.d(t, {
  default: function() {
    return eg
  }
}), n("424973"), n("222007");
var a = n("37983"),
  s = n("884691"),
  i = n("917351"),
  l = n.n(i),
  r = n("907002"),
  o = n("446674"),
  u = n("151426"),
  d = n("862337"),
  c = n("77078"),
  f = n("913144"),
  E = n("272030"),
  _ = n("366634"),
  h = n("241845"),
  C = n("656464"),
  I = n("84339"),
  T = n("614175"),
  S = n("180065"),
  m = n("768613"),
  p = n("812204"),
  A = n("685665"),
  g = n("619935"),
  N = n("731681"),
  R = n("185314"),
  O = n("453910"),
  L = n("862853"),
  v = n("10641"),
  M = n("384997"),
  P = n("149362"),
  D = n("145067"),
  y = n("754707"),
  x = n("93877"),
  b = n("167790"),
  U = n("81732"),
  G = n("518953"),
  j = n("341563"),
  w = n("240239"),
  k = n("6895"),
  F = n("817963"),
  H = n("1501"),
  B = n("689275"),
  V = n("12896"),
  Y = n("612246"),
  W = n("5667"),
  K = n("161778"),
  z = n("42203"),
  q = n("350522"),
  Q = n("162805"),
  Z = n("341542"),
  X = n("923959"),
  J = n("525065"),
  $ = n("305961"),
  ee = n("778588"),
  et = n("957255"),
  en = n("945956"),
  ea = n("568307"),
  es = n("697218"),
  ei = n("719923"),
  el = n("197881"),
  er = n("120817"),
  eo = n("951568"),
  eu = n("637667"),
  ed = n("828931"),
  ec = n("89956"),
  ef = n("421595"),
  eE = n("49111"),
  e_ = n("427474"),
  eh = n("994428"),
  eC = n("695838"),
  eI = n("782340"),
  eT = n("706904");
let eS = 64,
  em = "server-settings",
  ep = {
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
class eA extends s.PureComponent {
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
    this.setAnimatedValue(0), f.default.subscribe("LAYER_PUSH", this.closeAllHeaderNotices), this.historyUnlisten = H.default.addRouteChangeListener(this.handleHistoryChange);
    let {
      location: t
    } = H.default.getHistory();
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
      shouldShowSubscribeTooltip: i
    } = this.state;
    if (n) return (0, a.jsx)("div", {
      onClick: t => e ? null : t.stopPropagation(),
      children: (0, a.jsx)(V.default, {
        tutorialId: em,
        position: "bottom",
        inlineSpecs: ep,
        children: this.renderGuildHeaderDropdownButton(e)
      })
    });
    if (t) return (0, a.jsx)(c.Tooltip, {
      forceOpen: !0,
      color: c.TooltipColors.BRAND,
      position: "bottom",
      shouldShow: !e && !s,
      text: eI.default.Messages.GUILD_TEMPLATES_UNSYNCED_TOOLTIP,
      "aria-label": eI.default.Messages.GUILD_TEMPLATES_UNSYNCED_TOOLTIP,
      children: () => this.renderGuildHeaderDropdownButton(e)
    });
    if (!s && !e) return i ? (0, a.jsx)(c.Popout, {
      renderPopout: () => (0, a.jsx)("div", {
        onClick: e => e.stopPropagation(),
        children: (0, a.jsx)(W.default, {
          header: eI.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_HEADER_SUBSCRIBE_TOOLTIP_HEADER,
          content: eI.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_HEADER_SUBSCRIBE_TOOLTIP_TEXT,
          buttonCTA: eI.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_HEADER_SUBSCRIBE_TOOLTIP_CLOSE,
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
      showGuildTemplateDirtyTooltip: i,
      isGuildHeaderDismissibleTooltipShown: l,
      HeaderAnalyticsLocationProvider: r
    } = this.props, {
      controller: o,
      renderBanner: u,
      bannerVisible: d,
      bannerVisibleHeight: f,
      communityInfoVisible: E
    } = this.state, _ = s || i || l;
    return null == t ? null : (0, a.jsx)(r, {
      children: (0, a.jsx)(c.LazyPopout, {
        renderPopout: this.renderMenuPopout,
        position: "bottom",
        align: "center",
        animation: c.Popout.Animation.SCALE,
        shouldShow: n,
        onRequestClose: () => {
          (0, D.showGuildHeaderPopout)(!1)
        },
        children: s => {
          let {
            onClick: i,
            ...l
          } = s;
          return (0, a.jsx)(eu.default, {
            guild: t,
            controller: o,
            renderBanner: u,
            hasSubheader: e,
            bannerVisible: d,
            communityInfoVisible: E,
            guildBanner: this.getGuildBannerHash(),
            onClick: this.handleHeaderMenuToggle,
            onContextMenu: this.handleHeaderContextMenu,
            disableBannerAnimation: _,
            animationOverlayHeight: f,
            ...l,
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
      controller: i
    } = this.state;
    (e >= eS && a || e < eS && !a) && (a = !a), (e >= 88 && !t || e < 88 && t) && (t = !t), s = Math.max(88 - e, 0), n = a, (t !== this.state.renderBanner || a !== this.state.bannerVisible || s !== this.state.bannerVisibleHeight || n !== this.state.communityInfoVisible) && this.setState({
      renderBanner: t,
      bannerVisible: a,
      bannerVisibleHeight: s,
      communityInfoVisible: n
    }), i.update({
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
      ...i
    } = this.props;
    if (e || null == t) return (0, a.jsx)(ef.default, {
      withBannerPadding: null != t && null != this.getGuildBannerHash()
    });
    {
      if (t.hasFeature(eE.GuildFeatures.HUB) && !s) return (0, a.jsx)("div", {
        className: eT.hubContainer,
        children: (0, a.jsx)(w.default, {
          guild: t,
          channel: null != n ? n : X.default.getDefaultChannel(t.id)
        })
      });
      let e = t.id === eC.FAVORITES_RAW_GUILD_ID ? er.FavoritesChannelList : er.GuildChannelList;
      return (0, a.jsx)(e, {
        guild: t,
        ...i,
        guildBanner: this.getGuildBannerHash(),
        hasGuildSubheader: this.state.hasGuildSubheader,
        onScroll: null != t && (null != this.getGuildBannerHash() || t.hasCommunityInfoSubheader()) ? this.pinBannerOrGuildInfo : null
      })
    }
  }
  renderFooter() {
    let {
      selectedChannelId: e,
      shouldRenderBashOutCoachMark: t,
      shouldRenderGarticPhoneCoachMark: n,
      shouldRenderActivitiesGameNightCoachMark: s,
      isEligibleForClipsPremiumEarlyAccessCoachmark: i,
      showKrunkerStrikeCoachmark: l
    } = this.props, r = [];
    return t && r.push(u.DismissibleContent.BASH_OUT_COACH_MARK), n && r.push(u.DismissibleContent.ACTIVITY_COACH_MARK_GARTIC_PHONE), s && r.push(u.DismissibleContent.ACTIVITIES_COACH_MARK_GAME_NIGHT), i && r.push(u.DismissibleContent.CLIPS_GUILD_PANEL_PREMIUM_EARLY_ACCESS_COACHMARK), l && r.push(u.DismissibleContent.KRUNKER_STRIKE_COACHMARK), (0, a.jsx)(M.default, {
      contentTypes: r,
      children: t => {
        let {
          visibleContent: n,
          markAsDismissed: s
        } = t;
        switch (n) {
          case u.DismissibleContent.BASH_OUT_COACH_MARK:
            return (0, a.jsx)(eo.EmbeddedActivityTutorial, {
              channelId: null != e ? e : void 0,
              markAsDismissed: s,
              tutorialType: eo.TutorialType.BASH_OUT
            });
          case u.DismissibleContent.ACTIVITY_COACH_MARK_GARTIC_PHONE:
            return (0, a.jsx)(eo.EmbeddedActivityTutorial, {
              channelId: null != e ? e : void 0,
              markAsDismissed: s,
              tutorialType: eo.TutorialType.GARTIC_PHONE
            });
          case u.DismissibleContent.ACTIVITIES_COACH_MARK_GAME_NIGHT:
            return (0, a.jsx)(eo.EmbeddedActivityTutorial, {
              channelId: null != e ? e : void 0,
              markAsDismissed: s,
              tutorialType: eo.TutorialType.GAME_NIGHT
            });
          case u.DismissibleContent.CLIPS_GUILD_PANEL_PREMIUM_EARLY_ACCESS_COACHMARK:
            return (0, a.jsx)(R.default, {
              markAsDismissed: s
            });
          case u.DismissibleContent.KRUNKER_STRIKE_COACHMARK:
            return (0, a.jsx)(eo.EmbeddedActivityTutorial, {
              channelId: null != e ? e : void 0,
              markAsDismissed: s,
              tutorialType: eo.TutorialType.KRUNKER_STRIKE
            });
          default:
            return (0, a.jsx)(a.Fragment, {})
        }
      }
    })
  }
  render() {
    let {
      guild: e,
      FooterAnalyticsLocationProvider: t
    } = this.props;
    return (0, a.jsxs)("nav", {
      className: eT.container,
      onContextMenu: this.handleContextMenu,
      "aria-label": eI.default.Messages.GUILD_SIDEBAR_A11Y_LABEL.format({
        guildName: null != e ? e.toString() : ""
      }),
      children: [null != e && this.renderGuildHeader(this.state.hasGuildSubheader), null != e && (0, a.jsx)(ec.default, {
        guild: e,
        setHasSubheader: e => this.setState({
          hasGuildSubheader: e
        })
      }), this.renderChannelList(), (0, a.jsx)(t, {
        children: this.renderFooter()
      })]
    })
  }
  constructor(...e) {
    super(...e), this.historyUnlisten = () => {}, this.showTimeout = new d.Timeout, this.state = {
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
    }, this.handleHistoryChange = e => {
      null != e.state && e.state.shouldShowSubscribeTooltip && this.showTimeout.start(1e3, () => this.setState({
        shouldShowSubscribeTooltip: !0
      }))
    }, this.handleHeaderMenuToggle = e => {
      let {
        isHeaderPopoutOpen: t
      } = this.props;
      e.stopPropagation(), (0, D.showGuildHeaderPopout)(!t), this.closeAllHeaderNotices()
    }, this.handleContextMenu = e => {
      let {
        guild: t
      } = this.props;
      null != t && (0, E.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await n.el("358060").then(n.bind(n, "358060"));
        return n => (0, a.jsx)(e, {
          ...n,
          guild: t
        })
      })
    }, this.handleHeaderContextMenu = e => {
      let {
        guild: t
      } = this.props;
      null != t && (0, E.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await n.el("374705").then(n.bind(n, "374705"));
        return n => (0, a.jsx)(e, {
          ...n,
          guild: t
        })
      })
    }, this.closeAllHeaderNotices = () => {
      this.handleCloseSubscribeTooltip(), this.handleCloseTemplateDirtyTooltip(), this.handleCloseStudentHubPrivacySettingsTooltip()
    }, this.handleCloseStudentHubPrivacySettingsTooltip = () => {
      var e;
      let t = (0, v.isDismissibleContentDismissed)(u.DismissibleContent.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP),
        n = null === (e = this.props.guild) || void 0 === e ? void 0 : e.hasFeature(eE.GuildFeatures.HUB);
      !t && n && (0, v.markDismissibleContentAsDismissed)(u.DismissibleContent.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP, {
        dismissAction: eh.ContentDismissActionType.AUTO
      })
    }, this.handleCloseSubscribeTooltip = () => {
      this.showTimeout.stop(), this.state.shouldShowSubscribeTooltip && this.setState({
        shouldShowSubscribeTooltip: !1
      })
    }, this.handleCloseTemplateDirtyTooltip = () => {
      let {
        guild: e,
        showGuildTemplateDirtyTooltip: t
      } = this.props;
      null != e && t && U.default.hideGuildTemplateDirtyTooltip(e.id)
    }, this.renderMenuPopout = async () => {
      let {
        default: e
      } = await n.el("992996").then(n.bind(n, "992996"));
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
    }, this.renderGuildHeaderUpsellPopout = e => {
      let {
        showGuildBoostingProgressBarUpsell: t,
        showGuildBoostingProgressBarSizeUpsell: n,
        showRoleSubscriptionUpsell: s,
        showDiscoveryTooltip: i,
        showInviteSplashUpsell: l,
        showDiscoveryLandingPageSettingsUpsell: r,
        showHubPrivacySettingsTooltip: o,
        showActiveThreadsNotice: d,
        showGuildSoundboardPermissionUpsell: c,
        showMediaChannelUpsell: f,
        showTierTemplatesUpsell: E,
        showInventoryGuildSettingsRollbackModminCoachmark: _,
        guild: h,
        theme: C
      } = this.props;
      if (null == h) return this.renderGuildHeaderDropdownButton(e);
      let I = [];
      return (o && I.push(u.DismissibleContent.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP), d && I.push(u.DismissibleContent.GUILD_HEADER_ACTIVE_THREADS_NOTICE), t && I.push(u.DismissibleContent.GUILD_HEADER_PREMIUM_GUILD_PROGRESS), n && I.push(u.DismissibleContent.GUILD_HEADER_PROGRESS_BAR_SIZE_COACH_MARK), s && I.push(u.DismissibleContent.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL), c && I.push(u.DismissibleContent.GUILD_HEADER_SOUNDBOARD_PERMISSION), l && I.push(u.DismissibleContent.GUILD_HEADER_INVITE_SPLASH), i && I.push(u.DismissibleContent.GUILD_HEADER_SERVER_DISCOVERY_TOOLTIP), r && I.push(u.DismissibleContent.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL), 0 === I.length) ? this.renderGuildHeaderDropdownButton(e) : (f && I.push(u.DismissibleContent.MEDIA_CHANNEL_UPSELL), E && I.push(u.DismissibleContent.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL), _ && I.push(u.DismissibleContent.INVENTORY_GUILD_SETTINGS_MODMIN_COACHMARK_ROLLBACK), (0, a.jsx)(ed.default, {
        contentTypes: I,
        theme: C,
        guild: h,
        renderGuildHeaderDropdownButton: () => this.renderGuildHeaderDropdownButton(e)
      }))
    }, this.renderGuildHeaderDropdownButton = e => (0, a.jsx)(_.default, {
      open: e,
      className: eT.dropdownButton
    }), this.pinBannerOrGuildInfo = e => {
      let {
        scrollTop: t
      } = e;
      this.setAnimatedValue(t)
    }
  }
}

function eg(e) {
  var t;
  let {
    guildId: n,
    hideSelectedChannel: i,
    selectedChannelId: r
  } = e, d = (0, o.useStateFromStores)([$.default], () => $.default.getGuild(n));
  (0, h.useGlobalTriggerDebugging)(n);
  let f = (0, P.default)(n),
    E = (0, o.useStateFromStores)([Q.default], () => Q.default.getGuildDimensions(n).scrollTo),
    _ = (0, o.useStateFromStores)([en.default], () => en.default.getChannelId()),
    [R, M, U] = (0, o.useStateFromStoresArray)([et.default], () => [et.default.can(eE.Permissions.MANAGE_GUILD, d), et.default.can(eE.Permissions.MANAGE_ROLES, d), et.default.can(eE.Permissions.MANAGE_THREADS, d)]),
    w = (0, o.useStateFromStores)([Z.default], () => Z.default.isUnavailable(n)),
    H = (0, o.useStateFromStores)([es.default], () => es.default.getCurrentUser()),
    V = (0, o.useStateFromStores)([K.default], () => K.default.darkSidebar ? eE.ThemeTypes.DARK : K.default.theme),
    {
      enableStudyGroup: W
    } = (0, j.useHubStudyGroupExperiment)(d),
    X = (0, L.default)(e => e.currentlyShown.has(u.DismissibleContent.NAGBAR_NOTICE_CONNECT_PLAYSTATION)),
    [er, eo] = s.useState(!X),
    eu = (0, I.default)(n),
    {
      AnalyticsLocationProvider: ed
    } = (0, A.default)(p.default.GUILD_HEADER),
    {
      AnalyticsLocationProvider: ec
    } = (0, A.default)(p.default.GUILD_CHANNEL_LIST_FOOTER);
  s.useEffect(() => {
    n !== eu && eo(!X)
  }, [n, eu, X]);
  let [ef, eC] = (0, L.default)(e => [e_.CHANNEL_NOTICES.some(t => e.currentlyShown.has(t.dismissibleContentType)), e.currentlyShownGroup.has(eh.DismissibleContentGroupName.GUILD_HEADER_TOOLTIPS)]), eI = (0, N.default)(d), eT = (0, c.useModalsStore)(c.hasAnyModalOpenSelector), eS = (0, o.useStateFromStores)([ee.default], () => ee.default.hasLayers()), ep = (0, o.useStateFromStores)([Y.default], () => Y.default.shouldShow(em)), eg = R && (null == d ? void 0 : d.premiumProgressBarEnabled) === !1 && !el.ProcessArgs.isDisallowPopupsSet(), eN = (0, o.useStateFromStores)([J.default], () => J.default.getMemberCount(n)), eR = R && null != eN && eN >= 30 && (null == d ? void 0 : d.premiumProgressBarEnabled) === !1 && !el.ProcessArgs.isDisallowPopupsSet(), eO = M && null != d && (d.hasFeature(eE.GuildFeatures.COMMUNITY) || null != eN && eN > 50), eL = (0, b.default)(n), ev = (0, O.useLowerMemberCountRequirements)(n), eM = (null == d ? void 0 : d.hasFeature(eE.GuildFeatures.HUB)) === !0, eP = R && (null == d ? void 0 : d.hasFeature(eE.GuildFeatures.DISCOVERABLE)) === !0, eD = (0, g.useBlockedPaymentsConfig)(), ey = (R || (null == d ? void 0 : d.premiumTier) === eE.BoostedGuildTiers.NONE) && !el.ProcessArgs.isDisallowPopupsSet() && !eD, ex = (0, o.useStateFromStores)([G.default, ee.default], () => null != d && null != H && R && !ee.default.hasLayers() && G.default.shouldShowGuildTemplateDirtyTooltip(n)), eb = (0, o.useStateFromStores)([z.default], () => z.default.getChannel(r)), {
    isPopoutOpen: eU
  } = (0, D.useGuildHeaderPopoutStore)(), eG = null !== (t = null == d ? void 0 : d.hasFeature(eE.GuildFeatures.COMMUNITY)) && void 0 !== t && t, ej = (0, o.useStateFromStores)([B.default], () => !l.isEmpty(B.default.getThreadsForGuild(n))), {
    enabled: ew
  } = m.BashOutCoachMarkExperiment.useExperiment({
    location: "91c8a9_2"
  }, {
    autoTrackExposure: !0
  }), ek = ei.default.canUsePremiumActivities(H), eF = ei.default.isNewUser(H), eH = er && ew && ek, eB = er && !eF, {
    enabled: eV
  } = S.ActivityCoachMarkGarticPhoneExperiment.useExperiment({
    location: "91c8a9_3"
  }, {
    autoTrackExposure: !0
  }), eY = er && eV, {
    enabled: eW
  } = T.ActivitiesGameNightExperiment.useExperiment({
    location: "91c8a9_4"
  }, {
    autoTrackExposure: !0
  }), eK = er && eW, ez = (0, o.useStateFromStores)([ea.default], () => ea.default.getVisibleGame()), eq = (0, o.useStateFromStores)([q.default], () => q.default.hasConsented(eE.Consents.PERSONALIZATION));
  (0, y.default)(d);
  let eQ = (0, v.useIsDismissibleContentDismissed)(u.DismissibleContent.PREMIUM_TUTORIAL_SERVER_MENU_TOOLTIP),
    eZ = (0, k.default)(n),
    eX = (0, x.default)(n),
    eJ = (0, F.useShouldShowInventoryGuildSettingsCoachmark)(d),
    e$ = (0, C.useShowKrunkerStrikeCoachmark)();
  return (0, a.jsx)(eA, {
    guildId: n,
    hideSelectedChannel: i,
    guild: d,
    scrollToChannel: E,
    selectedChannelId: i ? null : r,
    selectedChannel: eb,
    selectedVoiceChannelId: _,
    voiceStates: f,
    isUnavailable: w,
    theme: V,
    user: H,
    hasChannelNotice: null != eI || ef,
    anyLayerOpen: eT || eS,
    showGuildBoostingProgressBarUpsell: eg,
    showGuildBoostingProgressBarSizeUpsell: eR,
    showInviteSplashUpsell: ey,
    showDiscoveryLandingPageSettingsUpsell: eP,
    showGuildHeaderTutorial: ep,
    showGuildTemplateDirtyTooltip: ex,
    showRoleSubscriptionUpsell: eL,
    showDiscoveryTooltip: ev,
    showHubPrivacySettingsTooltip: eM,
    showNewUnreadsBar: eG,
    showActiveThreadsNotice: U && null != eN && eN >= 200 && ej,
    showGuildSoundboardPermissionUpsell: eO,
    showMediaChannelUpsell: eZ,
    showInventoryGuildSettingsRollbackModminCoachmark: eJ,
    showTierTemplatesUpsell: eX,
    isHeaderPopoutOpen: eU,
    enableStudyGroup: W,
    isGuildHeaderDismissibleTooltipShown: eC,
    canShowCoachMarkAtBottom: er,
    HeaderAnalyticsLocationProvider: ed,
    FooterAnalyticsLocationProvider: ec,
    shouldRenderBashOutCoachMark: eH,
    shouldRenderGarticPhoneCoachMark: eY,
    shouldRenderActivitiesGameNightCoachMark: eK,
    isEligibleForClipsPremiumEarlyAccessCoachmark: null != ez && eq,
    isTutorialHighlightDismissed: eQ,
    shouldRenderBurstCoachmark: eB,
    showKrunkerStrikeCoachmark: e$
  })
}