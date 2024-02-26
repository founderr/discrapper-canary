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
  h = n("366634"),
  _ = n("241845"),
  C = n("656464"),
  I = n("84339"),
  S = n("180065"),
  m = n("812204"),
  p = n("685665"),
  T = n("619935"),
  g = n("731681"),
  A = n("947783"),
  N = n("303791"),
  R = n("453910"),
  v = n("862853"),
  O = n("10641"),
  L = n("384997"),
  M = n("149362"),
  P = n("145067"),
  D = n("754707"),
  y = n("93877"),
  x = n("167790"),
  b = n("81732"),
  U = n("518953"),
  G = n("341563"),
  j = n("240239"),
  w = n("6895"),
  k = n("1501"),
  F = n("689275"),
  B = n("12896"),
  H = n("612246"),
  V = n("5667"),
  Y = n("161778"),
  W = n("42203"),
  K = n("162805"),
  z = n("341542"),
  q = n("923959"),
  Q = n("525065"),
  Z = n("305961"),
  X = n("778588"),
  J = n("957255"),
  $ = n("945956"),
  ee = n("697218"),
  et = n("719923"),
  en = n("197881"),
  ea = n("120817"),
  es = n("951568"),
  el = n("637667"),
  ei = n("828931"),
  er = n("89956"),
  eo = n("421595"),
  eu = n("49111"),
  ed = n("427474"),
  ec = n("994428"),
  ef = n("695838"),
  eE = n("782340"),
  eh = n("271765");
let e_ = 64,
  eC = "server-settings",
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
class eS extends s.PureComponent {
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
    this.setAnimatedValue(0), f.default.subscribe("LAYER_PUSH", this.closeAllHeaderNotices), this.historyUnlisten = k.default.addRouteChangeListener(this.handleHistoryChange);
    let {
      location: t
    } = k.default.getHistory();
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
        tutorialId: eC,
        position: "bottom",
        inlineSpecs: eI,
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
        children: (0, a.jsx)(V.default, {
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
      HeaderAnalyticsLocationProvider: r
    } = this.props, {
      controller: o,
      renderBanner: u,
      bannerVisible: d,
      bannerVisibleHeight: f,
      communityInfoVisible: E
    } = this.state, h = s || l || i;
    return null == t ? null : (0, a.jsx)(r, {
      children: (0, a.jsx)(c.LazyPopout, {
        renderPopout: this.renderMenuPopout,
        position: "bottom",
        align: "center",
        animation: c.Popout.Animation.SCALE,
        shouldShow: n,
        onRequestClose: () => {
          (0, P.showGuildHeaderPopout)(!1)
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
    (e >= e_ && a || e < e_ && !a) && (a = !a), (e >= 88 && !t || e < 88 && t) && (t = !t), s = Math.max(88 - e, 0), n = a, (t !== this.state.renderBanner || a !== this.state.bannerVisible || s !== this.state.bannerVisibleHeight || n !== this.state.communityInfoVisible) && this.setState({
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
        children: (0, a.jsx)(j.default, {
          guild: t,
          channel: null != n ? n : q.default.getDefaultChannel(t.id)
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
      shouldRenderGarticPhoneCoachMark: t,
      shouldRenderClipsEducation: n,
      showKrunkerStrikeCoachmark: s
    } = this.props, l = [];
    return t && l.push(u.DismissibleContent.ACTIVITY_COACH_MARK_GARTIC_PHONE), s && l.push(u.DismissibleContent.KRUNKER_STRIKE_COACHMARK), (0, a.jsx)(L.default, {
      contentTypes: l,
      children: t => {
        let {
          visibleContent: s,
          markAsDismissed: l
        } = t;
        switch (s) {
          case u.DismissibleContent.BASH_OUT_COACH_MARK:
            return (0, a.jsx)(es.EmbeddedActivityTutorial, {
              channelId: null != e ? e : void 0,
              markAsDismissed: l,
              tutorialType: es.TutorialType.BASH_OUT
            });
          case u.DismissibleContent.ACTIVITY_COACH_MARK_GARTIC_PHONE:
            return (0, a.jsx)(es.EmbeddedActivityTutorial, {
              channelId: null != e ? e : void 0,
              markAsDismissed: l,
              tutorialType: es.TutorialType.GARTIC_PHONE
            });
          case u.DismissibleContent.ACTIVITIES_COACH_MARK_GAME_NIGHT:
            return (0, a.jsx)(es.EmbeddedActivityTutorial, {
              channelId: null != e ? e : void 0,
              markAsDismissed: l,
              tutorialType: es.TutorialType.GAME_NIGHT
            });
          case u.DismissibleContent.KRUNKER_STRIKE_COACHMARK:
            return (0, a.jsx)(es.EmbeddedActivityTutorial, {
              channelId: null != e ? e : void 0,
              markAsDismissed: l,
              tutorialType: es.TutorialType.KRUNKER_STRIKE
            });
          default:
            if (n) return (0, a.jsx)(A.default, {});
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
      e.stopPropagation(), (0, P.showGuildHeaderPopout)(!t), this.closeAllHeaderNotices()
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
      let t = (0, O.isDismissibleContentDismissed)(u.DismissibleContent.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP),
        n = null === (e = this.props.guild) || void 0 === e ? void 0 : e.hasFeature(eu.GuildFeatures.HUB);
      !t && n && (0, O.markDismissibleContentAsDismissed)(u.DismissibleContent.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP, {
        dismissAction: ec.ContentDismissActionType.AUTO
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
      null != e && t && b.default.hideGuildTemplateDirtyTooltip(e.id)
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
        guild: h,
        theme: _
      } = this.props;
      if (null == h) return this.renderGuildHeaderDropdownButton(e);
      let C = [];
      return (o && C.push(u.DismissibleContent.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP), d && C.push(u.DismissibleContent.GUILD_HEADER_ACTIVE_THREADS_NOTICE), t && C.push(u.DismissibleContent.GUILD_HEADER_PREMIUM_GUILD_PROGRESS), n && C.push(u.DismissibleContent.GUILD_HEADER_PROGRESS_BAR_SIZE_COACH_MARK), s && C.push(u.DismissibleContent.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL), c && C.push(u.DismissibleContent.GUILD_HEADER_SOUNDBOARD_PERMISSION), i && C.push(u.DismissibleContent.GUILD_HEADER_INVITE_SPLASH), l && C.push(u.DismissibleContent.GUILD_HEADER_SERVER_DISCOVERY_TOOLTIP), r && C.push(u.DismissibleContent.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL), 0 === C.length) ? this.renderGuildHeaderDropdownButton(e) : (f && C.push(u.DismissibleContent.MEDIA_CHANNEL_UPSELL), E && C.push(u.DismissibleContent.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL), (0, a.jsx)(ei.default, {
        contentTypes: C,
        theme: _,
        guild: h,
        renderGuildHeaderDropdownButton: () => this.renderGuildHeaderDropdownButton(e)
      }))
    }, this.renderGuildHeaderDropdownButton = e => (0, a.jsx)(h.default, {
      open: e,
      className: eh.dropdownButton
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
  } = e, d = (0, o.useStateFromStores)([Z.default], () => Z.default.getGuild(n));
  (0, _.useGlobalTriggerDebugging)(n);
  let f = (0, M.default)(n),
    E = (0, o.useStateFromStores)([K.default], () => K.default.getGuildDimensions(n).scrollTo),
    h = (0, o.useStateFromStores)([$.default], () => $.default.getChannelId()),
    [A, L, b] = (0, o.useStateFromStoresArray)([J.default], () => [J.default.can(eu.Permissions.MANAGE_GUILD, d), J.default.can(eu.Permissions.MANAGE_ROLES, d), J.default.can(eu.Permissions.MANAGE_THREADS, d)]),
    j = (0, o.useStateFromStores)([z.default], () => z.default.isUnavailable(n)),
    k = (0, o.useStateFromStores)([ee.default], () => ee.default.getCurrentUser()),
    B = (0, o.useStateFromStores)([Y.default], () => Y.default.darkSidebar ? eu.ThemeTypes.DARK : Y.default.theme),
    {
      enableStudyGroup: V
    } = (0, G.useHubStudyGroupExperiment)(d),
    q = (0, v.default)(e => e.currentlyShown.has(u.DismissibleContent.NAGBAR_NOTICE_CONNECT_PLAYSTATION)),
    [ea, es] = s.useState(!q),
    el = (0, I.default)(n),
    {
      AnalyticsLocationProvider: ei
    } = (0, p.default)(m.default.GUILD_HEADER),
    {
      AnalyticsLocationProvider: er
    } = (0, p.default)(m.default.GUILD_CHANNEL_LIST_FOOTER);
  s.useEffect(() => {
    n !== el && es(!q)
  }, [n, el, q]);
  let [eo, ef] = (0, v.default)(e => [ed.CHANNEL_NOTICES.some(t => e.currentlyShown.has(t.dismissibleContentType)), e.currentlyShownGroup.has(ec.DismissibleContentGroupName.GUILD_HEADER_TOOLTIPS)]), eE = (0, g.default)(d), eh = (0, c.useModalsStore)(c.hasAnyModalOpenSelector), e_ = (0, o.useStateFromStores)([X.default], () => X.default.hasLayers()), eI = (0, o.useStateFromStores)([H.default], () => H.default.shouldShow(eC)), em = A && (null == d ? void 0 : d.premiumProgressBarEnabled) === !1 && !en.ProcessArgs.isDisallowPopupsSet(), ep = (0, o.useStateFromStores)([Q.default], () => Q.default.getMemberCount(n)), eT = A && null != ep && ep >= 30 && (null == d ? void 0 : d.premiumProgressBarEnabled) === !1 && !en.ProcessArgs.isDisallowPopupsSet(), eg = L && null != d && (d.hasFeature(eu.GuildFeatures.COMMUNITY) || null != ep && ep > 50), eA = (0, x.default)(n), eN = (0, R.useLowerMemberCountRequirements)(n), eR = (null == d ? void 0 : d.hasFeature(eu.GuildFeatures.HUB)) === !0, ev = A && (null == d ? void 0 : d.hasFeature(eu.GuildFeatures.DISCOVERABLE)) === !0, eO = (0, T.useBlockedPaymentsConfig)(), eL = (A || (null == d ? void 0 : d.premiumTier) === eu.BoostedGuildTiers.NONE) && !en.ProcessArgs.isDisallowPopupsSet() && !eO, eM = (0, o.useStateFromStores)([U.default, X.default], () => null != d && null != k && A && !X.default.hasLayers() && U.default.shouldShowGuildTemplateDirtyTooltip(n)), eP = (0, o.useStateFromStores)([W.default], () => W.default.getChannel(r)), {
    isPopoutOpen: eD
  } = (0, P.useGuildHeaderPopoutStore)(), ey = null !== (t = null == d ? void 0 : d.hasFeature(eu.GuildFeatures.COMMUNITY)) && void 0 !== t && t, ex = (0, o.useStateFromStores)([F.default], () => !i.isEmpty(F.default.getThreadsForGuild(n))), eb = et.default.isNewUser(k), eU = ea && !eb, {
    enabled: eG
  } = S.ActivityCoachMarkGarticPhoneExperiment.useExperiment({
    location: "91c8a9_3"
  }, {
    autoTrackExposure: !0
  }), ej = ea && eG, ew = (0, N.default)(k);
  (0, D.default)(d);
  let ek = (0, O.useIsDismissibleContentDismissed)(u.DismissibleContent.PREMIUM_TUTORIAL_SERVER_MENU_TOOLTIP),
    eF = (0, w.default)(n),
    eB = (0, y.default)(n),
    eH = (0, C.useShowKrunkerStrikeCoachmark)();
  return (0, a.jsx)(eS, {
    guildId: n,
    hideSelectedChannel: l,
    guild: d,
    scrollToChannel: E,
    selectedChannelId: l ? null : r,
    selectedChannel: eP,
    selectedVoiceChannelId: h,
    voiceStates: f,
    isUnavailable: j,
    theme: B,
    user: k,
    hasChannelNotice: null != eE || eo,
    anyLayerOpen: eh || e_,
    showGuildBoostingProgressBarUpsell: em,
    showGuildBoostingProgressBarSizeUpsell: eT,
    showInviteSplashUpsell: eL,
    showDiscoveryLandingPageSettingsUpsell: ev,
    showGuildHeaderTutorial: eI,
    showGuildTemplateDirtyTooltip: eM,
    showRoleSubscriptionUpsell: eA,
    showDiscoveryTooltip: eN,
    showHubPrivacySettingsTooltip: eR,
    showNewUnreadsBar: ey,
    showActiveThreadsNotice: b && null != ep && ep >= 200 && ex,
    showGuildSoundboardPermissionUpsell: eg,
    showMediaChannelUpsell: eF,
    showTierTemplatesUpsell: eB,
    isHeaderPopoutOpen: eD,
    enableStudyGroup: V,
    isGuildHeaderDismissibleTooltipShown: ef,
    canShowCoachMarkAtBottom: ea,
    HeaderAnalyticsLocationProvider: ei,
    FooterAnalyticsLocationProvider: er,
    shouldRenderGarticPhoneCoachMark: ej,
    shouldRenderClipsEducation: ew,
    isTutorialHighlightDismissed: ek,
    shouldRenderBurstCoachmark: eU,
    showKrunkerStrikeCoachmark: eH
  })
}