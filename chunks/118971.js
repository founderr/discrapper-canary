"use strict";
n.r(t), n.d(t, {
  default: function() {
    return em
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
  g = n("685665"),
  A = n("619935"),
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
  B = n("1501"),
  H = n("689275"),
  V = n("12896"),
  Y = n("612246"),
  W = n("5667"),
  K = n("161778"),
  z = n("42203"),
  q = n("162805"),
  Q = n("341542"),
  Z = n("923959"),
  X = n("525065"),
  J = n("305961"),
  $ = n("778588"),
  ee = n("957255"),
  et = n("945956"),
  en = n("697218"),
  ea = n("719923"),
  es = n("197881"),
  el = n("120817"),
  ei = n("951568"),
  er = n("637667"),
  eo = n("828931"),
  eu = n("89956"),
  ed = n("421595"),
  ec = n("49111"),
  ef = n("427474"),
  eE = n("994428"),
  e_ = n("695838"),
  eh = n("782340"),
  eC = n("706904");
let eI = 64,
  eT = "server-settings",
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
    this.setAnimatedValue(0), f.default.subscribe("LAYER_PUSH", this.closeAllHeaderNotices), this.historyUnlisten = B.default.addRouteChangeListener(this.handleHistoryChange);
    let {
      location: t
    } = B.default.getHistory();
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
      children: (0, a.jsx)(V.default, {
        tutorialId: eT,
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
      text: eh.default.Messages.GUILD_TEMPLATES_UNSYNCED_TOOLTIP,
      "aria-label": eh.default.Messages.GUILD_TEMPLATES_UNSYNCED_TOOLTIP,
      children: () => this.renderGuildHeaderDropdownButton(e)
    });
    if (!s && !e) return l ? (0, a.jsx)(c.Popout, {
      renderPopout: () => (0, a.jsx)("div", {
        onClick: e => e.stopPropagation(),
        children: (0, a.jsx)(W.default, {
          header: eh.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_HEADER_SUBSCRIBE_TOOLTIP_HEADER,
          content: eh.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_HEADER_SUBSCRIBE_TOOLTIP_TEXT,
          buttonCTA: eh.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_HEADER_SUBSCRIBE_TOOLTIP_CLOSE,
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
          return (0, a.jsx)(er.default, {
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
    (e >= eI && a || e < eI && !a) && (a = !a), (e >= 88 && !t || e < 88 && t) && (t = !t), s = Math.max(88 - e, 0), n = a, (t !== this.state.renderBanner || a !== this.state.bannerVisible || s !== this.state.bannerVisibleHeight || n !== this.state.communityInfoVisible) && this.setState({
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
    if (e || null == t) return (0, a.jsx)(ed.default, {
      withBannerPadding: null != t && null != this.getGuildBannerHash()
    });
    {
      if (t.hasFeature(ec.GuildFeatures.HUB) && !s) return (0, a.jsx)("div", {
        className: eC.hubContainer,
        children: (0, a.jsx)(k.default, {
          guild: t,
          channel: null != n ? n : Z.default.getDefaultChannel(t.id)
        })
      });
      let e = t.id === e_.FAVORITES_RAW_GUILD_ID ? el.FavoritesChannelList : el.GuildChannelList;
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
            return (0, a.jsx)(ei.EmbeddedActivityTutorial, {
              channelId: null != e ? e : void 0,
              markAsDismissed: s,
              tutorialType: ei.TutorialType.BASH_OUT
            });
          case u.DismissibleContent.ACTIVITY_COACH_MARK_GARTIC_PHONE:
            return (0, a.jsx)(ei.EmbeddedActivityTutorial, {
              channelId: null != e ? e : void 0,
              markAsDismissed: s,
              tutorialType: ei.TutorialType.GARTIC_PHONE
            });
          case u.DismissibleContent.ACTIVITIES_COACH_MARK_GAME_NIGHT:
            return (0, a.jsx)(ei.EmbeddedActivityTutorial, {
              channelId: null != e ? e : void 0,
              markAsDismissed: s,
              tutorialType: ei.TutorialType.GAME_NIGHT
            });
          case u.DismissibleContent.KRUNKER_STRIKE_COACHMARK:
            return (0, a.jsx)(ei.EmbeddedActivityTutorial, {
              channelId: null != e ? e : void 0,
              markAsDismissed: s,
              tutorialType: ei.TutorialType.KRUNKER_STRIKE
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
      className: eC.container,
      onContextMenu: this.handleContextMenu,
      "aria-label": eh.default.Messages.GUILD_SIDEBAR_A11Y_LABEL.format({
        guildName: null != e ? e.toString() : ""
      }),
      children: [null != e && this.renderGuildHeader(this.state.hasGuildSubheader), null != e && (0, a.jsx)(eu.default, {
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
        n = null === (e = this.props.guild) || void 0 === e ? void 0 : e.hasFeature(ec.GuildFeatures.HUB);
      !t && n && (0, M.markDismissibleContentAsDismissed)(u.DismissibleContent.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP, {
        dismissAction: eE.ContentDismissActionType.AUTO
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
        guild: _,
        theme: h
      } = this.props;
      if (null == _) return this.renderGuildHeaderDropdownButton(e);
      let C = [];
      return (o && C.push(u.DismissibleContent.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP), d && C.push(u.DismissibleContent.GUILD_HEADER_ACTIVE_THREADS_NOTICE), t && C.push(u.DismissibleContent.GUILD_HEADER_PREMIUM_GUILD_PROGRESS), n && C.push(u.DismissibleContent.GUILD_HEADER_PROGRESS_BAR_SIZE_COACH_MARK), s && C.push(u.DismissibleContent.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL), c && C.push(u.DismissibleContent.GUILD_HEADER_SOUNDBOARD_PERMISSION), i && C.push(u.DismissibleContent.GUILD_HEADER_INVITE_SPLASH), l && C.push(u.DismissibleContent.GUILD_HEADER_SERVER_DISCOVERY_TOOLTIP), r && C.push(u.DismissibleContent.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL), 0 === C.length) ? this.renderGuildHeaderDropdownButton(e) : (f && C.push(u.DismissibleContent.MEDIA_CHANNEL_UPSELL), E && C.push(u.DismissibleContent.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL), (0, a.jsx)(eo.default, {
        contentTypes: C,
        theme: h,
        guild: _,
        renderGuildHeaderDropdownButton: () => this.renderGuildHeaderDropdownButton(e)
      }))
    }, this.renderGuildHeaderDropdownButton = e => (0, a.jsx)(_.default, {
      open: e,
      className: eC.dropdownButton
    }), this.pinBannerOrGuildInfo = e => {
      let {
        scrollTop: t
      } = e;
      this.setAnimatedValue(t)
    }
  }
}

function em(e) {
  var t;
  let {
    guildId: n,
    hideSelectedChannel: l,
    selectedChannelId: r
  } = e, d = (0, o.useStateFromStores)([J.default], () => J.default.getGuild(n));
  (0, h.useGlobalTriggerDebugging)(n);
  let f = (0, D.default)(n),
    E = (0, o.useStateFromStores)([q.default], () => q.default.getGuildDimensions(n).scrollTo),
    _ = (0, o.useStateFromStores)([et.default], () => et.default.getChannelId()),
    [R, P, G] = (0, o.useStateFromStoresArray)([ee.default], () => [ee.default.can(ec.Permissions.MANAGE_GUILD, d), ee.default.can(ec.Permissions.MANAGE_ROLES, d), ee.default.can(ec.Permissions.MANAGE_THREADS, d)]),
    k = (0, o.useStateFromStores)([Q.default], () => Q.default.isUnavailable(n)),
    B = (0, o.useStateFromStores)([en.default], () => en.default.getCurrentUser()),
    V = (0, o.useStateFromStores)([K.default], () => K.default.darkSidebar ? ec.ThemeTypes.DARK : K.default.theme),
    {
      enableStudyGroup: W
    } = (0, w.useHubStudyGroupExperiment)(d),
    Z = (0, v.default)(e => e.currentlyShown.has(u.DismissibleContent.NAGBAR_NOTICE_CONNECT_PLAYSTATION)),
    [el, ei] = s.useState(!Z),
    er = (0, I.default)(n),
    {
      AnalyticsLocationProvider: eo
    } = (0, g.default)(m.default.GUILD_HEADER),
    {
      AnalyticsLocationProvider: eu
    } = (0, g.default)(m.default.GUILD_CHANNEL_LIST_FOOTER);
  s.useEffect(() => {
    n !== er && ei(!Z)
  }, [n, er, Z]);
  let [ed, e_] = (0, v.default)(e => [ef.CHANNEL_NOTICES.some(t => e.currentlyShown.has(t.dismissibleContentType)), e.currentlyShownGroup.has(eE.DismissibleContentGroupName.GUILD_HEADER_TOOLTIPS)]), eh = (0, N.default)(d), eC = (0, c.useModalsStore)(c.hasAnyModalOpenSelector), eI = (0, o.useStateFromStores)([$.default], () => $.default.hasLayers()), eS = (0, o.useStateFromStores)([Y.default], () => Y.default.shouldShow(eT)), em = R && (null == d ? void 0 : d.premiumProgressBarEnabled) === !1 && !es.ProcessArgs.isDisallowPopupsSet(), eg = (0, o.useStateFromStores)([X.default], () => X.default.getMemberCount(n)), eA = R && null != eg && eg >= 30 && (null == d ? void 0 : d.premiumProgressBarEnabled) === !1 && !es.ProcessArgs.isDisallowPopupsSet(), eN = P && null != d && (d.hasFeature(ec.GuildFeatures.COMMUNITY) || null != eg && eg > 50), eR = (0, U.default)(n), eO = (0, L.useLowerMemberCountRequirements)(n), eL = (null == d ? void 0 : d.hasFeature(ec.GuildFeatures.HUB)) === !0, ev = R && (null == d ? void 0 : d.hasFeature(ec.GuildFeatures.DISCOVERABLE)) === !0, eM = (0, A.useBlockedPaymentsConfig)(), eP = (R || (null == d ? void 0 : d.premiumTier) === ec.BoostedGuildTiers.NONE) && !es.ProcessArgs.isDisallowPopupsSet() && !eM, eD = (0, o.useStateFromStores)([j.default, $.default], () => null != d && null != B && R && !$.default.hasLayers() && j.default.shouldShowGuildTemplateDirtyTooltip(n)), ey = (0, o.useStateFromStores)([z.default], () => z.default.getChannel(r)), {
    isPopoutOpen: ex
  } = (0, y.useGuildHeaderPopoutStore)(), eb = null !== (t = null == d ? void 0 : d.hasFeature(ec.GuildFeatures.COMMUNITY)) && void 0 !== t && t, eU = (0, o.useStateFromStores)([H.default], () => !i.isEmpty(H.default.getThreadsForGuild(n))), {
    enabled: eG
  } = p.BashOutCoachMarkExperiment.useExperiment({
    location: "91c8a9_2"
  }, {
    autoTrackExposure: !0
  }), ej = ea.default.canUsePremiumActivities(B), ew = ea.default.isNewUser(B), ek = el && eG && ej, eF = el && !ew, {
    enabled: eB
  } = S.ActivityCoachMarkGarticPhoneExperiment.useExperiment({
    location: "91c8a9_3"
  }, {
    autoTrackExposure: !0
  }), eH = el && eB, {
    enabled: eV
  } = T.ActivitiesGameNightExperiment.useExperiment({
    location: "91c8a9_4"
  }, {
    autoTrackExposure: !0
  }), eY = el && eV, eW = (0, O.default)(B);
  (0, x.default)(d);
  let eK = (0, M.useIsDismissibleContentDismissed)(u.DismissibleContent.PREMIUM_TUTORIAL_SERVER_MENU_TOOLTIP),
    ez = (0, F.default)(n),
    eq = (0, b.default)(n),
    eQ = (0, C.useShowKrunkerStrikeCoachmark)();
  return (0, a.jsx)(ep, {
    guildId: n,
    hideSelectedChannel: l,
    guild: d,
    scrollToChannel: E,
    selectedChannelId: l ? null : r,
    selectedChannel: ey,
    selectedVoiceChannelId: _,
    voiceStates: f,
    isUnavailable: k,
    theme: V,
    user: B,
    hasChannelNotice: null != eh || ed,
    anyLayerOpen: eC || eI,
    showGuildBoostingProgressBarUpsell: em,
    showGuildBoostingProgressBarSizeUpsell: eA,
    showInviteSplashUpsell: eP,
    showDiscoveryLandingPageSettingsUpsell: ev,
    showGuildHeaderTutorial: eS,
    showGuildTemplateDirtyTooltip: eD,
    showRoleSubscriptionUpsell: eR,
    showDiscoveryTooltip: eO,
    showHubPrivacySettingsTooltip: eL,
    showNewUnreadsBar: eb,
    showActiveThreadsNotice: G && null != eg && eg >= 200 && eU,
    showGuildSoundboardPermissionUpsell: eN,
    showMediaChannelUpsell: ez,
    showTierTemplatesUpsell: eq,
    isHeaderPopoutOpen: ex,
    enableStudyGroup: W,
    isGuildHeaderDismissibleTooltipShown: e_,
    canShowCoachMarkAtBottom: el,
    HeaderAnalyticsLocationProvider: eo,
    FooterAnalyticsLocationProvider: eu,
    shouldRenderBashOutCoachMark: ek,
    shouldRenderGarticPhoneCoachMark: eH,
    shouldRenderActivitiesGameNightCoachMark: eY,
    shouldRenderClipsEducation: eW,
    isTutorialHighlightDismissed: eK,
    shouldRenderBurstCoachmark: eF,
    showKrunkerStrikeCoachmark: eQ
  })
}