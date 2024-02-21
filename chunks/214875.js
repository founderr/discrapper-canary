"use strict";
n.r(t), n.d(t, {
  default: function() {
    return q
  }
}), n("702976"), n("222007");
var a = n("37983"),
  s = n("884691"),
  i = n("446674"),
  l = n("823411"),
  r = n("115718"),
  o = n("575365"),
  u = n("716241"),
  d = n("382483"),
  c = n("701916"),
  f = n("939398"),
  E = n("815553"),
  h = n("191145"),
  _ = n("605250"),
  C = n("161454"),
  I = n("619443"),
  S = n("963103"),
  m = n("778613"),
  p = n("398604"),
  T = n("123561"),
  g = n("288518"),
  A = n("834052"),
  N = n("845579"),
  R = n("42203"),
  O = n("546463"),
  v = n("26989"),
  L = n("305961"),
  M = n("42887"),
  P = n("377253"),
  D = n("957255"),
  y = n("945956"),
  x = n("18494"),
  b = n("162771"),
  U = n("101125"),
  G = n("282109"),
  j = n("697218"),
  w = n("330338"),
  k = n("545429"),
  F = n("860957"),
  B = n("599110"),
  H = n("568734"),
  V = n("449008"),
  Y = n("50885"),
  W = n("49111"),
  K = n("6791");
class z extends s.PureComponent {
  componentDidMount() {
    let {
      selectedChannelId: e,
      connected: t,
      isNSFWChannel: n,
      channelParentId: a,
      isTextInVoice: s,
      canSendMessage: i,
      hasPendingMemberAction: l
    } = this.props;
    t && null != e && ((0, u.trackWithMetadata)(W.AnalyticEvents.CHANNEL_OPENED, {
      ...(0, u.getChannelOpenedMetadata)(e),
      channel_is_nsfw: n,
      parent_id: a,
      can_send_message: i,
      has_pending_member_action: l
    }), s && (0, u.trackWithMetadata)(W.AnalyticEvents.TEXT_IN_VOICE_OPENED, {
      channel_is_nsfw: n
    }))
  }
  componentDidUpdate(e) {
    var t, n, a;
    let {
      voiceChannelId: s,
      voiceChannelGuildId: i,
      voiceChannelType: o,
      voiceChannelBitrate: I,
      videoEnabled: S,
      isScreenSharing: m,
      runningGame: g,
      runningGamePid: v,
      selectedChannelId: M,
      selectedGuildId: D,
      channelParentId: x,
      connected: j,
      homeLink: w,
      friendsTabSection: k,
      isNSFWChannel: z,
      isMemberPending: q,
      hasPreviewEnabled: Q,
      postableChannelCount: Z,
      isTextInVoice: X,
      canSendMessage: J,
      numMessageRequests: $,
      hasPendingMemberAction: ee
    } = this.props;
    if (e.voiceChannelId !== s && null != e.voiceChannelId) {
      let t = C.default.getCurrentGameForAnalytics(),
        n = null != t ? t.name : "",
        a = A.default.getStageInstanceByChannel(e.voiceChannelId),
        s = p.default.getActiveEventByChannel(e.voiceChannelId);
      B.default.track(W.AnalyticEvents.LEAVE_VOICE_CHANNEL, {
        channel_id: e.voiceChannelId,
        channel_type: e.voiceChannelType,
        channel_bitrate: e.voiceChannelBitrate,
        guild_id: e.voiceChannelGuildId,
        rtc_connection_id: y.default.getRTCConnectionId(),
        game_name: n,
        duration: y.default.getDuration(),
        game_platform: this.props.gamePlatform,
        game_id: this.props.gameId,
        media_session_id: y.default.getMediaSessionId(),
        stage_instance_id: null == a ? void 0 : a.id,
        guild_scheduled_event_id: null == s ? void 0 : s.id,
        ...(0, u.getVoiceStateMetadata)(e.voiceChannelGuildId, e.voiceChannelId, e.videoEnabled),
        ...y.default.getVoiceStateStats(),
        ...h.default.getSelectedParticipantStats(e.voiceChannelId)
      })
    }
    if (e.voiceChannelId !== s && null != s) {
      let e = C.default.getCurrentGameForAnalytics(),
        t = null != e ? e.name : "",
        n = A.default.getStageInstanceByChannel(s),
        a = p.default.getActiveEventByChannel(s);
      (0, u.trackWithMetadata)(W.AnalyticEvents.CHANNEL_OPENED, {
        ...(0, u.getChannelOpenedMetadata)(s),
        channel_id: s,
        channel_is_nsfw: z,
        parent_id: x,
        can_send_message: J,
        has_pending_member_action: ee
      }), B.default.track(W.AnalyticEvents.JOIN_VOICE_CHANNEL, {
        channel_id: s,
        channel_type: o,
        channel_bitrate: I,
        guild_id: i,
        game_name: t,
        game_platform: this.props.gamePlatform,
        game_id: this.props.gameId,
        stage_instance_id: null == n ? void 0 : n.id,
        guild_scheduled_event_id: null == a ? void 0 : a.id,
        ...(0, u.getCustomStatusMetadata)(i, s),
        ...(0, u.getVoiceStateMetadata)(i, s, S)
      })
    }
    if (e.runningGame !== g && null != g && !g.isLauncher) {
      let e = O.default.getGameByName(g.name),
        t = C.default.getOverrideForGame(g),
        n = L.default.getGuildIds(),
        a = N.ActivityRestrictedGuilds.getSetting(),
        s = n.filter(e => !a.includes(e)).slice(0, 200),
        i = null;
      i = null != t ? "custom_override" : null != e ? "verified_game" : "launcher";
      let o = (0, C.getOverlayGameStatus)(g);
      if (setTimeout(() => {
          var t;
          let n = Y.default.GetWindowFullscreenTypeByPid(g.pid, g.name, g.fullscreenType);
          B.default.track(W.AnalyticEvents.LAUNCH_GAME, {
            game: g.name,
            game_id: null == e ? null : e.id,
            verified: null != e,
            elevated: g.elevated,
            is_launcher: null !== (t = null == g ? void 0 : g.isLauncher) && void 0 !== t && t,
            game_platform: W.ActivityGamePlatforms.DESKTOP,
            detection_method: i,
            distributor: g.distributor,
            is_overlay_enabled: F.default.enabled,
            is_overlay_game_enabled: o.enabled,
            is_overlay_game_source: o.source,
            fullscreen_type: r.RunningProcessFullscreenType[n],
            overlay_method: K.OverlayMethod[o.overlayMethod],
            activity_status_enabled: N.ShowCurrentGame.getSetting(),
            activity_status_shared_guilds: s,
            current_user_status: U.default.getStatus(),
            game_detection_enabled: (0, C.isDetectionEnabled)(g)
          })
        }, 1e4), null != g.name && null != v && O.default.shouldReport(g.name)) {
        let e = g.name;
        l.default.identifyGame(v, e).then(e => l.default.reportUnverifiedGame(e)).catch(e => new(0, _.default)("AutoAnalytics").error("Cannot identify game", e))
      }
    }
    if ((e.videoEnabled !== S || e.isScreenSharing !== m) && null != s) {
      let e = "none",
        t = [m ? "screen" : null, S ? "camera" : null].filter(V.isNotNullish),
        n = null;
      m ? (e = "screen", n = (0, f.getDesktopSourceMetadata)()) : S && (e = "camera"), B.default.track(W.AnalyticEvents.VIDEO_INPUT_TOGGLED, {
        video_input_type: e,
        video_toggle_source: __OVERLAY__ ? "overlay" : "app",
        enabled_inputs: t,
        preview_enabled: N.AlwaysPreviewVideo.getSetting(),
        ...n,
        ...this.getGameMetadata(),
        ...(0, u.collectVoiceAnalyticsMetadata)(s)
      })
    }
    if (j && null != D && (D !== e.selectedGuildId || !e.connected || q && !e.isMemberPending)) {
      let e = {
        ...q ? {
          is_pending: q,
          preview_enabled: Q
        } : {},
        postable_channels: Z,
        premium_progress_bar_enabled: null !== (n = null === (t = L.default.getGuild(b.default.getGuildId())) || void 0 === t ? void 0 : t.premiumProgressBarEnabled) && void 0 !== n && n,
        viewing_all_channels: !G.default.isOptInEnabled(D),
        num_recent_channels: T.default.recentsChannelCount(D)
      };
      (0, u.trackWithMetadata)(W.AnalyticEvents.GUILD_VIEWED, e)
    } else j && null == D && w === W.Routes.FRIENDS && (!e.connected || k !== e.friendsTabSection || w !== e.homeLink) ? B.default.track(W.AnalyticEvents.FRIENDS_LIST_VIEWED, {
      tab_opened: k,
      ...(0, d.default)(),
      ...(0, E.getNowPlayingAnalytics)()
    }) : j && null == D && w === W.Routes.MESSAGE_REQUESTS && (!e.connected || w !== e.homeLink) && !this.isMessageRequestsInitialized && (this.isMessageRequestsInitialized = !0, B.default.track(W.AnalyticEvents.MESSAGE_REQUESTS_INITIALIZED, {
      num_message_requests: $
    }));
    if (j && null != M && (!e.connected || M !== e.selectedChannelId || D !== e.selectedGuildId)) {
      let t = e.selectedChannelId,
        n = R.default.getChannel(t),
        s = L.default.getGuild(null == n ? void 0 : n.getGuildId());
      if (null != t && null != n && null != s && s.publicUpdatesChannelId === t) {
        let e = P.default.getMessages(t),
          i = e.toArray().reverse(),
          l = i.find(e => {
            var t;
            return (0, H.hasFlag)(e.flags, W.MessageFlags.IS_CROSSPOST) && (null === (t = e.messageReference) || void 0 === t ? void 0 : t.guild_id) === "667560445975986187"
          });
        B.default.track(W.AnalyticEvents.ACK_COMMUNITY_MESSAGES, {
          last_message_id: null == l ? void 0 : l.id,
          last_message_reference_message_id: null == l ? void 0 : null === (a = l.messageReference) || void 0 === a ? void 0 : a.message_id,
          messages_loaded: e.hasFetched,
          ...(0, u.collectChannelAnalyticsMetadata)(n),
          ...(0, u.collectGuildAnalyticsMetadata)(s.id)
        })
      }
      let i = (0, c.collectThreadMetadata)(R.default.getChannel(M), !0);
      (0, u.trackWithMetadata)(W.AnalyticEvents.CHANNEL_OPENED, {
        channel_is_nsfw: z,
        parent_id: x,
        can_send_message: J,
        has_pending_member_action: ee,
        ...i,
        ...(0, u.getChannelOpenedMetadata)(M)
      }), X && (0, u.trackWithMetadata)(W.AnalyticEvents.TEXT_IN_VOICE_OPENED, {
        channel_is_nsfw: z
      })
    }
  }
  getGameMetadata() {
    return {
      game_platform: this.props.gamePlatform,
      game_name: this.props.gameName,
      game_exe_name: this.props.gameExeName,
      game_id: this.props.gameId
    }
  }
  render() {
    return null
  }
  constructor(...e) {
    super(...e), this.isMessageRequestsInitialized = !1
  }
}

function q() {
  var e;
  let [t, n] = (0, i.useStateFromStoresArray)([x.default], () => [x.default.getVoiceChannelId(), x.default.getChannelId()], []), s = (0, i.useStateFromStores)([R.default], () => R.default.getChannel(n), [n]), l = (0, i.useStateFromStores)([h.default], () => (null == s ? void 0 : s.id) != null && h.default.getChatOpen(s.id), [s]), r = null == s ? void 0 : s.nsfw, u = null !== (e = null == s ? void 0 : s.parent_id) && void 0 !== e ? e : void 0, d = (0, i.useStateFromStores)([R.default], () => R.default.getChannel(t), [t]), c = (0, i.useStateFromStores)([b.default], () => b.default.getGuildId(), []), f = (0, i.useStateFromStores)([L.default], () => L.default.getGuild(c), [c]), E = (0, i.useStateFromStores)([j.default], () => j.default.getCurrentUser(), []), _ = (0, i.useStateFromStores)([v.default], () => {
    var e, t;
    return null != E && null != c && null !== (t = null === (e = v.default.getMember(c, E.id)) || void 0 === e ? void 0 : e.isPending) && void 0 !== t && t
  }, [E, c]), p = (0, i.useStateFromStores)([k.default], () => k.default.getState().section, []), T = (0, i.useStateFromStores)([w.default], () => w.default.getHomeLink(), []), A = (0, i.useStateFromStores)([I.default], () => I.default.isConnected(), []), [N, O] = (0, i.useStateFromStoresArray)([M.default], () => [M.default.isVideoEnabled(), M.default.isScreenSharing()], []), P = (0, i.useStateFromStores)([U.default], () => U.default.getPrimaryActivity(), []), y = (0, i.useStateFromStores)([C.default], () => C.default.getCurrentGameForAnalytics(), []), G = (0, S.default)(c), F = (0, i.useStateFromStores)([D.default], () => D.default.can(W.Permissions.SEND_MESSAGES, s)), B = (0, i.useStateFromStores)([g.default], () => g.default.getMessageRequestsCount(), []), H = (0, m.useHasPendingMemberAction)(null == f ? void 0 : f.id, null == s ? void 0 : s.id), V = {
    selectedChannelId: n,
    channelParentId: u,
    isNSFWChannel: r,
    selectedGuildId: c,
    friendsTabSection: p,
    homeLink: T,
    connected: A,
    videoEnabled: N,
    isScreenSharing: O,
    voiceChannelId: null == d ? void 0 : d.id,
    voiceChannelGuildId: null == d ? void 0 : d.getGuildId(),
    voiceChannelType: null == d ? void 0 : d.type,
    voiceChannelBitrate: null == d ? void 0 : d.bitrate,
    runningGame: y,
    runningGamePid: null != y ? y.pid : null,
    gamePlatform: (0, o.default)(P),
    gameName: null != P ? P.name : null,
    gameId: null != P ? P.application_id : null,
    gameExeName: null != y ? y.exeName : null,
    hasPreviewEnabled: null == f ? void 0 : f.features.has(W.GuildFeatures.PREVIEW_ENABLED),
    isMemberPending: _,
    postableChannelCount: G,
    isTextInVoice: l,
    canSendMessage: F,
    numMessageRequests: B,
    hasPendingMemberAction: H
  };
  return (0, a.jsx)(z, {
    ...V
  })
}