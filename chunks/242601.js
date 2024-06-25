n.d(t, {
  Z: function() {
    return eN
  }
}), n(47120), n(653041);
var s = n(735250),
  i = n(470079),
  l = n(392711),
  a = n.n(l),
  r = n(920906),
  o = n(442837),
  c = n(704215),
  u = n(846519),
  d = n(481060),
  E = n(570140),
  h = n(239091),
  _ = n(269128),
  I = n(711237),
  m = n(110924),
  T = n(100527),
  g = n(906732),
  p = n(211242),
  N = n(536687),
  S = n(745837),
  C = n(13228),
  A = n(1259),
  f = n(211644),
  Z = n(605236),
  L = n(243778),
  O = n(492162),
  v = n(818634),
  R = n(596557),
  P = n(817520),
  x = n(999309),
  M = n(408987),
  D = n(130734),
  b = n(499137),
  y = n(258871),
  j = n(972264),
  U = n(11352),
  G = n(304445),
  w = n(344185),
  k = n(155409),
  B = n(10401),
  H = n(970731),
  V = n(210887),
  F = n(592125),
  Y = n(796974),
  z = n(486472),
  W = n(984933),
  K = n(650774),
  q = n(430824),
  Q = n(819640),
  X = n(496675),
  J = n(878884),
  $ = n(19780),
  ee = n(594174),
  et = n(74538),
  en = n(374023),
  es = n(373274),
  ei = n(547042),
  el = n(315174),
  ea = n(577718),
  er = n(156978),
  eo = n(591190),
  ec = n(981631),
  eu = n(652785),
  ed = n(921944),
  eE = n(647086),
  eh = n(689938),
  e_ = n(655674);

function eI(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let em = 64,
  eT = "server-settings",
  eg = {
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
class ep extends i.PureComponent {
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
    this.setAnimatedValue(0), E.Z.subscribe("LAYER_PUSH", this.closeAllHeaderNotices), this.historyUnlisten = G.Z.addRouteChangeListener(this.handleHistoryChange);
    let {
      location: t
    } = G.Z.getHistory();
    (null === (e = t.state) || void 0 === e ? void 0 : e.shouldShowSubscribeTooltip) && this.showTimeout.start(1e3, () => this.setState({
      shouldShowSubscribeTooltip: !0
    }))
  }
  componentWillUnmount() {
    this.showTimeout.stop(), this.state.controller.dispose(), this.historyUnlisten(), E.Z.unsubscribe("LAYER_PUSH", this.closeAllHeaderNotices)
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
      anyLayerOpen: i
    } = this.props, {
      shouldShowSubscribeTooltip: l
    } = this.state;
    if (n) return (0, s.jsx)("div", {
      onClick: t => e ? null : t.stopPropagation(),
      children: (0, s.jsx)(k.Z, {
        tutorialId: eT,
        position: "bottom",
        inlineSpecs: eg,
        children: this.renderGuildHeaderDropdownButton(e)
      })
    });
    if (t) return (0, s.jsx)(d.Tooltip, {
      forceOpen: !0,
      color: d.TooltipColors.BRAND,
      position: "bottom",
      shouldShow: !e && !i,
      text: eh.Z.Messages.GUILD_TEMPLATES_UNSYNCED_TOOLTIP,
      "aria-label": eh.Z.Messages.GUILD_TEMPLATES_UNSYNCED_TOOLTIP,
      children: () => this.renderGuildHeaderDropdownButton(e)
    });
    if (!i && !e) return l ? (0, s.jsx)(d.Popout, {
      renderPopout: () => (0, s.jsx)("div", {
        onClick: e => e.stopPropagation(),
        children: (0, s.jsx)(H.ZP, {
          header: eh.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_HEADER_SUBSCRIBE_TOOLTIP_HEADER,
          content: eh.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_HEADER_SUBSCRIBE_TOOLTIP_TEXT,
          buttonCTA: eh.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_HEADER_SUBSCRIBE_TOOLTIP_CLOSE,
          onClick: this.handleCloseSubscribeTooltip
        })
      }),
      position: "bottom",
      align: "center",
      animation: d.Popout.Animation.TRANSLATE,
      shouldShow: !0,
      children: () => this.renderGuildHeaderDropdownButton(e)
    }) : this.renderGuildHeaderUpsellPopout(e);
    return this.renderGuildHeaderDropdownButton(e)
  }
  renderGuildHeader(e) {
    let {
      guild: t,
      isHeaderPopoutOpen: n,
      showGuildHeaderTutorial: i,
      showGuildTemplateDirtyTooltip: l,
      isGuildHeaderDismissibleTooltipShown: a,
      headerAnalyticsLocations: r
    } = this.props, {
      controller: o,
      renderBanner: c,
      bannerVisible: u,
      bannerVisibleHeight: E,
      communityInfoVisible: h
    } = this.state, _ = i || l || a;
    return null == t ? null : (0, s.jsx)(g.Gt, {
      value: r,
      children: (0, s.jsx)(d.LazyPopout, {
        renderPopout: this.renderMenuPopout,
        position: "bottom",
        align: "center",
        animation: d.Popout.Animation.SCALE,
        shouldShow: n,
        onRequestClose: () => {
          (0, v.l)(!1)
        },
        children: i => {
          let {
            onClick: l,
            ...a
          } = i;
          return (0, s.jsx)(el.ZP, {
            guild: t,
            controller: o,
            renderBanner: c,
            hasSubheader: e,
            bannerVisible: u,
            communityInfoVisible: h,
            guildBanner: this.getGuildBannerHash(),
            onClick: this.handleHeaderMenuToggle,
            onContextMenu: this.handleHeaderContextMenu,
            disableBannerAnimation: _,
            animationOverlayHeight: E,
            ...a,
            children: this.renderGuildHeaderNotices(n)
          })
        }
      })
    })
  }
  setAnimatedValue(e) {
    let {
      guild: t
    } = this.props, n = null != this.getGuildBannerHash(), s = null == t ? void 0 : t.hasCommunityInfoSubheader();
    if (null != t && (!!n || !!s)) n ? this.setAnimatedValueForBanner(e) : this.setAnimatedValueForGuildInfo(e)
  }
  setAnimatedValueForBanner(e) {
    let {
      renderBanner: t,
      communityInfoVisible: n,
      bannerVisible: s,
      bannerVisibleHeight: i,
      controller: l
    } = this.state;
    (e >= em && s || e < em && !s) && (s = !s), (e >= 88 && !t || e < 88 && t) && (t = !t), i = Math.max(88 - e, 0), n = s, (t !== this.state.renderBanner || s !== this.state.bannerVisible || i !== this.state.bannerVisibleHeight || n !== this.state.communityInfoVisible) && this.setState({
      renderBanner: t,
      bannerVisible: s,
      bannerVisibleHeight: i,
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
      enableStudyGroup: i,
      ...l
    } = this.props;
    if (e || null == t) return (0, s.jsx)(eo.Z, {
      withBannerPadding: null != t && null != this.getGuildBannerHash()
    });
    if (t.hasFeature(ec.oNc.HUB) && !i) return (0, s.jsx)("div", {
      className: e_.hubContainer,
      children: (0, s.jsx)(y.Z, {
        guild: t,
        channel: null != n ? n : W.ZP.getDefaultChannel(t.id)
      })
    });
    {
      let e = t.id === eE._ ? es.j : es.E;
      return (0, s.jsx)(e, {
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
    return (0, s.jsx)(L.Z, {
      contentTypes: [],
      children: n => {
        let {
          visibleContent: i,
          markAsDismissed: l
        } = n;
        switch (i) {
          case c.z.BASH_OUT_COACH_MARK:
            return (0, s.jsx)(ei.V, {
              channelId: null != e ? e : void 0,
              markAsDismissed: l,
              tutorialType: ei._.BASH_OUT
            });
          case c.z.ACTIVITIES_COACH_MARK_GAME_NIGHT:
            return (0, s.jsx)(ei.V, {
              channelId: null != e ? e : void 0,
              markAsDismissed: l,
              tutorialType: ei._.GAME_NIGHT
            });
          default:
            if (t) return (0, s.jsx)(S.Z, {});
            return (0, s.jsx)(s.Fragment, {})
        }
      }
    })
  }
  render() {
    let {
      guild: e,
      footerAnalyticsLocations: t
    } = this.props;
    return (0, s.jsxs)("nav", {
      className: e_.container,
      onContextMenu: this.handleContextMenu,
      "aria-label": eh.Z.Messages.GUILD_SIDEBAR_A11Y_LABEL.format({
        guildName: null != e ? e.toString() : ""
      }),
      children: [null != e && this.renderGuildHeader(this.state.hasGuildSubheader), null != e && (0, s.jsx)(er.Z, {
        guild: e,
        setHasSubheader: e => this.setState({
          hasGuildSubheader: e
        })
      }), this.renderChannelList(), (0, s.jsx)(g.Gt, {
        value: t,
        children: this.renderFooter()
      })]
    })
  }
  constructor(...e) {
    super(...e), eI(this, "historyUnlisten", () => {}), eI(this, "showTimeout", new u.V7), eI(this, "state", {
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
    }), eI(this, "handleHistoryChange", e => {
      null != e.state && e.state.shouldShowSubscribeTooltip && this.showTimeout.start(1e3, () => this.setState({
        shouldShowSubscribeTooltip: !0
      }))
    }), eI(this, "handleHeaderMenuToggle", e => {
      let {
        isHeaderPopoutOpen: t
      } = this.props;
      e.stopPropagation(), (0, v.l)(!t), this.closeAllHeaderNotices()
    }), eI(this, "handleContextMenu", e => {
      let {
        guild: t
      } = this.props;
      null != t && (0, h.jW)(e, async () => {
        let {
          default: e
        } = await n.e("92795").then(n.bind(n, 652171));
        return n => (0, s.jsx)(e, {
          ...n,
          guild: t
        })
      })
    }), eI(this, "handleHeaderContextMenu", e => {
      let {
        guild: t
      } = this.props;
      null != t && (0, h.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("49237"), n.e("99387"), n.e("96427"), n.e("33053"), n.e("50654"), n.e("7654"), n.e("44156"), n.e("70161"), n.e("85552"), n.e("58227"), n.e("43502"), n.e("33213")]).then(n.bind(n, 545135));
        return n => (0, s.jsx)(e, {
          ...n,
          guild: t
        })
      })
    }), eI(this, "closeAllHeaderNotices", () => {
      this.handleCloseSubscribeTooltip(), this.handleCloseTemplateDirtyTooltip(), this.handleCloseStudentHubPrivacySettingsTooltip()
    }), eI(this, "handleCloseStudentHubPrivacySettingsTooltip", () => {
      var e;
      let t = (0, Z.un)(c.z.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP),
        n = null === (e = this.props.guild) || void 0 === e ? void 0 : e.hasFeature(ec.oNc.HUB);
      !t && n && (0, Z.EW)(c.z.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP, {
        dismissAction: ed.L.AUTO
      })
    }), eI(this, "handleCloseSubscribeTooltip", () => {
      this.showTimeout.stop(), this.state.shouldShowSubscribeTooltip && this.setState({
        shouldShowSubscribeTooltip: !1
      })
    }), eI(this, "handleCloseTemplateDirtyTooltip", () => {
      let {
        guild: e,
        showGuildTemplateDirtyTooltip: t
      } = this.props;
      null != e && t && M.Z.hideGuildTemplateDirtyTooltip(e.id)
    }), eI(this, "renderMenuPopout", async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("46826")]).then(n.bind(n, 859432));
      return t => {
        let {
          closePopout: n
        } = t, {
          guild: i
        } = this.props;
        return null != i && (0, s.jsx)(e, {
          onClose: n,
          guild: i
        })
      }
    }), eI(this, "renderGuildHeaderUpsellPopout", e => {
      let {
        showGuildBoostingProgressBarUpsell: t,
        showGuildBoostingProgressBarSizeUpsell: n,
        showRoleSubscriptionUpsell: i,
        showDiscoveryTooltip: l,
        showInviteSplashUpsell: a,
        showDiscoveryLandingPageSettingsUpsell: r,
        showHubPrivacySettingsTooltip: o,
        showActiveThreadsNotice: u,
        showGuildSoundboardPermissionUpsell: d,
        showMediaChannelUpsell: E,
        showTierTemplatesUpsell: h,
        shouldRenderCustomNotificationSoundsCoachmark: _,
        guild: I,
        theme: m
      } = this.props;
      if (null == I) return this.renderGuildHeaderDropdownButton(e);
      let T = [];
      return (o && T.push(c.z.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP), u && T.push(c.z.GUILD_HEADER_ACTIVE_THREADS_NOTICE), t && T.push(c.z.GUILD_HEADER_PREMIUM_GUILD_PROGRESS), n && T.push(c.z.GUILD_HEADER_PROGRESS_BAR_SIZE_COACH_MARK), i && T.push(c.z.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL), d && T.push(c.z.GUILD_HEADER_SOUNDBOARD_PERMISSION), a && T.push(c.z.GUILD_HEADER_INVITE_SPLASH), l && T.push(c.z.GUILD_HEADER_SERVER_DISCOVERY_TOOLTIP), r && T.push(c.z.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL), 0 === T.length) ? this.renderGuildHeaderDropdownButton(e) : (E && T.push(c.z.MEDIA_CHANNEL_UPSELL), h && T.push(c.z.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL), _ && T.push(c.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_COACHMARK), (0, s.jsx)(ea.Z, {
        contentTypes: T,
        theme: m,
        guild: I,
        renderGuildHeaderDropdownButton: () => this.renderGuildHeaderDropdownButton(e)
      }))
    }), eI(this, "renderGuildHeaderDropdownButton", e => (0, s.jsx)(_.Z, {
      open: e,
      className: e_.dropdownButton
    })), eI(this, "pinBannerOrGuildInfo", e => {
      let {
        scrollTop: t
      } = e;
      this.setAnimatedValue(t)
    })
  }
}

function eN(e) {
  var t;
  let {
    guildId: n,
    hideSelectedChannel: l,
    selectedChannelId: r
  } = e, u = (0, o.e7)([q.Z], () => q.Z.getGuild(n));
  (0, I.J_)(n);
  let E = (0, O.Z)(n),
    h = (0, o.e7)([Y.Z], () => Y.Z.getGuildDimensions(n).scrollTo),
    _ = (0, o.e7)([$.Z], () => $.Z.getChannelId()),
    [S, L, M] = (0, o.Wu)([X.Z], () => [X.Z.can(ec.Plq.MANAGE_GUILD, u), X.Z.can(ec.Plq.MANAGE_ROLES, u), X.Z.can(ec.Plq.MANAGE_THREADS, u)]),
    y = (0, o.e7)([z.Z], () => z.Z.isUnavailable(n)),
    G = (0, o.e7)([ee.default], () => ee.default.getCurrentUser()),
    k = (0, o.e7)([V.Z], () => V.Z.darkSidebar ? ec.BRd.DARK : V.Z.theme),
    {
      enableStudyGroup: H
    } = (0, b.s)(u),
    W = (0, f.ZP)(e => e.currentlyShown.has(c.z.NAGBAR_NOTICE_CONNECT_PLAYSTATION)),
    [es, ei] = i.useState(!W),
    el = (0, m.Z)(n),
    {
      analyticsLocations: ea
    } = (0, g.ZP)(T.Z.GUILD_HEADER),
    {
      analyticsLocations: er
    } = (0, g.ZP)(T.Z.GUILD_CHANNEL_LIST_FOOTER);
  i.useEffect(() => {
    n !== el && ei(!W)
  }, [n, el, W]);
  let [eo, eE] = (0, f.ZP)(e => [eu.XN.some(t => e.currentlyShown.has(t.dismissibleContentType)), e.currentlyShownGroup.has(ed.R.GUILD_HEADER_TOOLTIPS)]), eh = (0, N.Z)(u), e_ = (0, d.useModalsStore)(d.hasAnyModalOpenSelector), eI = (0, o.e7)([Q.Z], () => Q.Z.hasLayers()), em = (0, o.e7)([B.Z], () => B.Z.shouldShow(eT)), eg = S && (null == u ? void 0 : u.premiumProgressBarEnabled) === !1 && !en.s.isDisallowPopupsSet(), eN = (0, o.e7)([K.Z], () => K.Z.getMemberCount(n)), eS = S && null != eN && eN >= 30 && (null == u ? void 0 : u.premiumProgressBarEnabled) === !1 && !en.s.isDisallowPopupsSet(), eC = L && null != u && (u.hasFeature(ec.oNc.COMMUNITY) || null != eN && eN > 50), eA = (0, x.Z)(n), ef = (0, A._)(n), eZ = (null == u ? void 0 : u.hasFeature(ec.oNc.HUB)) === !0, eL = S && (null == u ? void 0 : u.hasFeature(ec.oNc.DISCOVERABLE)) === !0, eO = (0, p.Q)(), ev = (S || (null == u ? void 0 : u.premiumTier) === ec.Eu4.NONE) && !en.s.isDisallowPopupsSet() && !eO, eR = (0, o.e7)([D.Z, Q.Z], () => null != u && null != G && S && !Q.Z.hasLayers() && D.Z.shouldShowGuildTemplateDirtyTooltip(n)), eP = (0, o.e7)([F.Z], () => F.Z.getChannel(r)), {
    isPopoutOpen: ex
  } = (0, v.y)(), eM = null !== (t = null == u ? void 0 : u.hasFeature(ec.oNc.COMMUNITY)) && void 0 !== t && t, eD = (0, o.e7)([w.Z], () => !a().isEmpty(w.Z.getThreadsForGuild(n))), eb = et.ZP.isNewUser(G), ey = es && !eb, ej = (0, C.Z)(G);
  (0, R.Z)(u);
  let eU = (0, Z.wE)(c.z.PREMIUM_TUTORIAL_SERVER_MENU_TOOLTIP),
    eG = (0, j.Z)(n),
    ew = (0, P.Z)(n),
    ek = (0, o.e7)([$.Z], () => $.Z.getChannelId()),
    eB = (0, o.e7)([J.Z], () => J.Z.desyncedVoiceStatesCount),
    eH = U.Y.useExperiment({
      location: "GuildSidebar"
    }, {
      autoTrackExposure: !0
    }).enabled;
  return (0, s.jsx)(ep, {
    guildId: n,
    hideSelectedChannel: l,
    guild: u,
    scrollToChannel: h,
    selectedChannelId: l ? null : r,
    selectedChannel: eP,
    selectedVoiceChannelId: _,
    voiceStates: E,
    rtcConnectedChannelId: ek,
    rtcDesyncedVoiceStatesCount: eB,
    isUnavailable: y,
    theme: k,
    user: G,
    hasChannelNotice: null != eh || eo,
    anyLayerOpen: e_ || eI,
    showGuildBoostingProgressBarUpsell: eg,
    showGuildBoostingProgressBarSizeUpsell: eS,
    showInviteSplashUpsell: ev,
    showDiscoveryLandingPageSettingsUpsell: eL,
    showGuildHeaderTutorial: em,
    showGuildTemplateDirtyTooltip: eR,
    showRoleSubscriptionUpsell: eA,
    showDiscoveryTooltip: ef,
    showHubPrivacySettingsTooltip: eZ,
    showNewUnreadsBar: eM,
    showActiveThreadsNotice: M && null != eN && eN >= 200 && eD,
    showGuildSoundboardPermissionUpsell: eC,
    showMediaChannelUpsell: eG,
    showTierTemplatesUpsell: ew,
    isHeaderPopoutOpen: ex,
    enableStudyGroup: H,
    isGuildHeaderDismissibleTooltipShown: eE,
    canShowCoachMarkAtBottom: es,
    headerAnalyticsLocations: ea,
    footerAnalyticsLocations: er,
    shouldRenderClipsEducation: ej,
    isTutorialHighlightDismissed: eU,
    shouldRenderBurstCoachmark: ey,
    shouldRenderCustomNotificationSoundsCoachmark: eH
  })
}