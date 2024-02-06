"use strict";
n.r(t), n.d(t, {
  default: function() {
    return eA
  }
}), n("424973"), n("222007");
var a = n("37983"),
  s = n("884691"),
  l = n("917351"),
  i = n.n(l),
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
  p = n("768613"),
  m = n("812204"),
  A = n("685665"),
  g = n("619935"),
  N = n("731681"),
  R = n("947783"),
  O = n("303791"),
  L = n("453910"),
  v = n("862853"),
  M = n("10641"),
  P = n("384997"),
  D = n("149362"),
  y = n("145067"),
  x = n("754707"),
  b = n("93877"),
  U = n("167790"),
  G = n("81732"),
  j = n("518953"),
  w = n("341563"),
  k = n("240239"),
  F = n("6895"),
  B = n("817963"),
  H = n("1501"),
  V = n("689275"),
  Y = n("12896"),
  W = n("612246"),
  K = n("5667"),
  z = n("161778"),
  q = n("42203"),
  Q = n("162805"),
  Z = n("341542"),
  X = n("923959"),
  J = n("525065"),
  $ = n("305961"),
  ee = n("778588"),
  et = n("957255"),
  en = n("945956"),
  ea = n("697218"),
  es = n("719923"),
  el = n("197881"),
  ei = n("120817"),
  er = n("951568"),
  eo = n("637667"),
  eu = n("828931"),
  ed = n("89956"),
  ec = n("421595"),
  ef = n("49111"),
  eE = n("427474"),
  e_ = n("994428"),
  eh = n("695838"),
  eC = n("782340"),
  eI = n("706904");
let eT = 64,
  eS = "server-settings",
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
class em extends s.PureComponent {
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
      shouldShowSubscribeTooltip: l
    } = this.state;
    if (n) return (0, a.jsx)("div", {
      onClick: t => e ? null : t.stopPropagation(),
      children: (0, a.jsx)(Y.default, {
        tutorialId: eS,
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
      text: eC.default.Messages.GUILD_TEMPLATES_UNSYNCED_TOOLTIP,
      "aria-label": eC.default.Messages.GUILD_TEMPLATES_UNSYNCED_TOOLTIP,
      children: () => this.renderGuildHeaderDropdownButton(e)
    });
    if (!s && !e) return l ? (0, a.jsx)(c.Popout, {
      renderPopout: () => (0, a.jsx)("div", {
        onClick: e => e.stopPropagation(),
        children: (0, a.jsx)(K.default, {
          header: eC.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_HEADER_SUBSCRIBE_TOOLTIP_HEADER,
          content: eC.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_HEADER_SUBSCRIBE_TOOLTIP_TEXT,
          buttonCTA: eC.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_HEADER_SUBSCRIBE_TOOLTIP_CLOSE,
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
      HeaderAnalyticsLocationProvider: r
    } = this.props, {
      controller: o,
      renderBanner: u,
      bannerVisible: d,
      bannerVisibleHeight: f,
      communityInfoVisible: E
    } = this.state, _ = s || l || i;
    return null == t ? null : (0, a.jsx)(r, {
      children: (0, a.jsx)(c.LazyPopout, {
        renderPopout: this.renderMenuPopout,
        position: "bottom",
        align: "center",
        animation: c.Popout.Animation.SCALE,
        shouldShow: n,
        onRequestClose: () => {
          (0, y.showGuildHeaderPopout)(!1)
        },
        children: s => {
          let {
            onClick: l,
            ...i
          } = s;
          return (0, a.jsx)(eo.default, {
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
    (e >= eT && a || e < eT && !a) && (a = !a), (e >= 88 && !t || e < 88 && t) && (t = !t), s = Math.max(88 - e, 0), n = a, (t !== this.state.renderBanner || a !== this.state.bannerVisible || s !== this.state.bannerVisibleHeight || n !== this.state.communityInfoVisible) && this.setState({
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
    if (e || null == t) return (0, a.jsx)(ec.default, {
      withBannerPadding: null != t && null != this.getGuildBannerHash()
    });
    {
      if (t.hasFeature(ef.GuildFeatures.HUB) && !s) return (0, a.jsx)("div", {
        className: eI.hubContainer,
        children: (0, a.jsx)(k.default, {
          guild: t,
          channel: null != n ? n : X.default.getDefaultChannel(t.id)
        })
      });
      let e = t.id === eh.FAVORITES_RAW_GUILD_ID ? ei.FavoritesChannelList : ei.GuildChannelList;
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
      shouldRenderBashOutCoachMark: t,
      shouldRenderGarticPhoneCoachMark: n,
      shouldRenderActivitiesGameNightCoachMark: s,
      shouldRenderClipsEducation: l,
      showKrunkerStrikeCoachmark: i
    } = this.props, r = [];
    return t && r.push(u.DismissibleContent.BASH_OUT_COACH_MARK), n && r.push(u.DismissibleContent.ACTIVITY_COACH_MARK_GARTIC_PHONE), s && r.push(u.DismissibleContent.ACTIVITIES_COACH_MARK_GAME_NIGHT), i && r.push(u.DismissibleContent.KRUNKER_STRIKE_COACHMARK), (0, a.jsx)(P.default, {
      contentTypes: r,
      children: t => {
        let {
          visibleContent: n,
          markAsDismissed: s
        } = t;
        switch (n) {
          case u.DismissibleContent.BASH_OUT_COACH_MARK:
            return (0, a.jsx)(er.EmbeddedActivityTutorial, {
              channelId: null != e ? e : void 0,
              markAsDismissed: s,
              tutorialType: er.TutorialType.BASH_OUT
            });
          case u.DismissibleContent.ACTIVITY_COACH_MARK_GARTIC_PHONE:
            return (0, a.jsx)(er.EmbeddedActivityTutorial, {
              channelId: null != e ? e : void 0,
              markAsDismissed: s,
              tutorialType: er.TutorialType.GARTIC_PHONE
            });
          case u.DismissibleContent.ACTIVITIES_COACH_MARK_GAME_NIGHT:
            return (0, a.jsx)(er.EmbeddedActivityTutorial, {
              channelId: null != e ? e : void 0,
              markAsDismissed: s,
              tutorialType: er.TutorialType.GAME_NIGHT
            });
          case u.DismissibleContent.KRUNKER_STRIKE_COACHMARK:
            return (0, a.jsx)(er.EmbeddedActivityTutorial, {
              channelId: null != e ? e : void 0,
              markAsDismissed: s,
              tutorialType: er.TutorialType.KRUNKER_STRIKE
            });
          default:
            if (l) return (0, a.jsx)(R.default, {});
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
      className: eI.container,
      onContextMenu: this.handleContextMenu,
      "aria-label": eC.default.Messages.GUILD_SIDEBAR_A11Y_LABEL.format({
        guildName: null != e ? e.toString() : ""
      }),
      children: [null != e && this.renderGuildHeader(this.state.hasGuildSubheader), null != e && (0, a.jsx)(ed.default, {
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
      e.stopPropagation(), (0, y.showGuildHeaderPopout)(!t), this.closeAllHeaderNotices()
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
      let t = (0, M.isDismissibleContentDismissed)(u.DismissibleContent.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP),
        n = null === (e = this.props.guild) || void 0 === e ? void 0 : e.hasFeature(ef.GuildFeatures.HUB);
      !t && n && (0, M.markDismissibleContentAsDismissed)(u.DismissibleContent.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP, {
        dismissAction: e_.ContentDismissActionType.AUTO
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
      null != e && t && G.default.hideGuildTemplateDirtyTooltip(e.id)
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
        showDiscoveryTooltip: l,
        showInviteSplashUpsell: i,
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
      return (o && I.push(u.DismissibleContent.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP), d && I.push(u.DismissibleContent.GUILD_HEADER_ACTIVE_THREADS_NOTICE), t && I.push(u.DismissibleContent.GUILD_HEADER_PREMIUM_GUILD_PROGRESS), n && I.push(u.DismissibleContent.GUILD_HEADER_PROGRESS_BAR_SIZE_COACH_MARK), s && I.push(u.DismissibleContent.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL), c && I.push(u.DismissibleContent.GUILD_HEADER_SOUNDBOARD_PERMISSION), i && I.push(u.DismissibleContent.GUILD_HEADER_INVITE_SPLASH), l && I.push(u.DismissibleContent.GUILD_HEADER_SERVER_DISCOVERY_TOOLTIP), r && I.push(u.DismissibleContent.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL), 0 === I.length) ? this.renderGuildHeaderDropdownButton(e) : (f && I.push(u.DismissibleContent.MEDIA_CHANNEL_UPSELL), E && I.push(u.DismissibleContent.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL), _ && I.push(u.DismissibleContent.INVENTORY_GUILD_SETTINGS_MODMIN_COACHMARK_ROLLBACK), (0, a.jsx)(eu.default, {
        contentTypes: I,
        theme: C,
        guild: h,
        renderGuildHeaderDropdownButton: () => this.renderGuildHeaderDropdownButton(e)
      }))
    }, this.renderGuildHeaderDropdownButton = e => (0, a.jsx)(_.default, {
      open: e,
      className: eI.dropdownButton
    }), this.pinBannerOrGuildInfo = e => {
      let {
        scrollTop: t
      } = e;
      this.setAnimatedValue(t)
    }
  }
}

function eA(e) {
  var t;
  let {
    guildId: n,
    hideSelectedChannel: l,
    selectedChannelId: r
  } = e, d = (0, o.useStateFromStores)([$.default], () => $.default.getGuild(n));
  (0, h.useGlobalTriggerDebugging)(n);
  let f = (0, D.default)(n),
    E = (0, o.useStateFromStores)([Q.default], () => Q.default.getGuildDimensions(n).scrollTo),
    _ = (0, o.useStateFromStores)([en.default], () => en.default.getChannelId()),
    [R, P, G] = (0, o.useStateFromStoresArray)([et.default], () => [et.default.can(ef.Permissions.MANAGE_GUILD, d), et.default.can(ef.Permissions.MANAGE_ROLES, d), et.default.can(ef.Permissions.MANAGE_THREADS, d)]),
    k = (0, o.useStateFromStores)([Z.default], () => Z.default.isUnavailable(n)),
    H = (0, o.useStateFromStores)([ea.default], () => ea.default.getCurrentUser()),
    Y = (0, o.useStateFromStores)([z.default], () => z.default.darkSidebar ? ef.ThemeTypes.DARK : z.default.theme),
    {
      enableStudyGroup: K
    } = (0, w.useHubStudyGroupExperiment)(d),
    X = (0, v.default)(e => e.currentlyShown.has(u.DismissibleContent.NAGBAR_NOTICE_CONNECT_PLAYSTATION)),
    [ei, er] = s.useState(!X),
    eo = (0, I.default)(n),
    {
      AnalyticsLocationProvider: eu
    } = (0, A.default)(m.default.GUILD_HEADER),
    {
      AnalyticsLocationProvider: ed
    } = (0, A.default)(m.default.GUILD_CHANNEL_LIST_FOOTER);
  s.useEffect(() => {
    n !== eo && er(!X)
  }, [n, eo, X]);
  let [ec, eh] = (0, v.default)(e => [eE.CHANNEL_NOTICES.some(t => e.currentlyShown.has(t.dismissibleContentType)), e.currentlyShownGroup.has(e_.DismissibleContentGroupName.GUILD_HEADER_TOOLTIPS)]), eC = (0, N.default)(d), eI = (0, c.useModalsStore)(c.hasAnyModalOpenSelector), eT = (0, o.useStateFromStores)([ee.default], () => ee.default.hasLayers()), ep = (0, o.useStateFromStores)([W.default], () => W.default.shouldShow(eS)), eA = R && (null == d ? void 0 : d.premiumProgressBarEnabled) === !1 && !el.ProcessArgs.isDisallowPopupsSet(), eg = (0, o.useStateFromStores)([J.default], () => J.default.getMemberCount(n)), eN = R && null != eg && eg >= 30 && (null == d ? void 0 : d.premiumProgressBarEnabled) === !1 && !el.ProcessArgs.isDisallowPopupsSet(), eR = P && null != d && (d.hasFeature(ef.GuildFeatures.COMMUNITY) || null != eg && eg > 50), eO = (0, U.default)(n), eL = (0, L.useLowerMemberCountRequirements)(n), ev = (null == d ? void 0 : d.hasFeature(ef.GuildFeatures.HUB)) === !0, eM = R && (null == d ? void 0 : d.hasFeature(ef.GuildFeatures.DISCOVERABLE)) === !0, eP = (0, g.useBlockedPaymentsConfig)(), eD = (R || (null == d ? void 0 : d.premiumTier) === ef.BoostedGuildTiers.NONE) && !el.ProcessArgs.isDisallowPopupsSet() && !eP, ey = (0, o.useStateFromStores)([j.default, ee.default], () => null != d && null != H && R && !ee.default.hasLayers() && j.default.shouldShowGuildTemplateDirtyTooltip(n)), ex = (0, o.useStateFromStores)([q.default], () => q.default.getChannel(r)), {
    isPopoutOpen: eb
  } = (0, y.useGuildHeaderPopoutStore)(), eU = null !== (t = null == d ? void 0 : d.hasFeature(ef.GuildFeatures.COMMUNITY)) && void 0 !== t && t, eG = (0, o.useStateFromStores)([V.default], () => !i.isEmpty(V.default.getThreadsForGuild(n))), {
    enabled: ej
  } = p.BashOutCoachMarkExperiment.useExperiment({
    location: "91c8a9_2"
  }, {
    autoTrackExposure: !0
  }), ew = es.default.canUsePremiumActivities(H), ek = es.default.isNewUser(H), eF = ei && ej && ew, eB = ei && !ek, {
    enabled: eH
  } = S.ActivityCoachMarkGarticPhoneExperiment.useExperiment({
    location: "91c8a9_3"
  }, {
    autoTrackExposure: !0
  }), eV = ei && eH, {
    enabled: eY
  } = T.ActivitiesGameNightExperiment.useExperiment({
    location: "91c8a9_4"
  }, {
    autoTrackExposure: !0
  }), eW = ei && eY, eK = (0, O.default)(H);
  (0, x.default)(d);
  let ez = (0, M.useIsDismissibleContentDismissed)(u.DismissibleContent.PREMIUM_TUTORIAL_SERVER_MENU_TOOLTIP),
    eq = (0, F.default)(n),
    eQ = (0, b.default)(n),
    eZ = (0, B.useShouldShowInventoryGuildSettingsCoachmark)(d),
    eX = (0, C.useShowKrunkerStrikeCoachmark)();
  return (0, a.jsx)(em, {
    guildId: n,
    hideSelectedChannel: l,
    guild: d,
    scrollToChannel: E,
    selectedChannelId: l ? null : r,
    selectedChannel: ex,
    selectedVoiceChannelId: _,
    voiceStates: f,
    isUnavailable: k,
    theme: Y,
    user: H,
    hasChannelNotice: null != eC || ec,
    anyLayerOpen: eI || eT,
    showGuildBoostingProgressBarUpsell: eA,
    showGuildBoostingProgressBarSizeUpsell: eN,
    showInviteSplashUpsell: eD,
    showDiscoveryLandingPageSettingsUpsell: eM,
    showGuildHeaderTutorial: ep,
    showGuildTemplateDirtyTooltip: ey,
    showRoleSubscriptionUpsell: eO,
    showDiscoveryTooltip: eL,
    showHubPrivacySettingsTooltip: ev,
    showNewUnreadsBar: eU,
    showActiveThreadsNotice: G && null != eg && eg >= 200 && eG,
    showGuildSoundboardPermissionUpsell: eR,
    showMediaChannelUpsell: eq,
    showInventoryGuildSettingsRollbackModminCoachmark: eZ,
    showTierTemplatesUpsell: eQ,
    isHeaderPopoutOpen: eb,
    enableStudyGroup: K,
    isGuildHeaderDismissibleTooltipShown: eh,
    canShowCoachMarkAtBottom: ei,
    HeaderAnalyticsLocationProvider: eu,
    FooterAnalyticsLocationProvider: ed,
    shouldRenderBashOutCoachMark: eF,
    shouldRenderGarticPhoneCoachMark: eV,
    shouldRenderActivitiesGameNightCoachMark: eW,
    shouldRenderClipsEducation: eK,
    isTutorialHighlightDismissed: ez,
    shouldRenderBurstCoachmark: eB,
    showKrunkerStrikeCoachmark: eX
  })
}