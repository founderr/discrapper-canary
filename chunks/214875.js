"use strict";
n.r(t), n.d(t, {
  default: function() {
    return q
  }
}), n("702976"), n("222007");
var a = n("37983"),
  s = n("884691"),
  l = n("446674"),
  i = n("823411"),
  r = n("115718"),
  o = n("575365"),
  u = n("716241"),
  d = n("382483"),
  c = n("701916"),
  f = n("939398"),
  E = n("815553"),
  h = n("191145"),
  _ = n("605250"),
  C = n("619443"),
  I = n("963103"),
  S = n("778613"),
  m = n("398604"),
  p = n("123561"),
  T = n("288518"),
  g = n("834052"),
  A = n("845579"),
  N = n("42203"),
  R = n("546463"),
  O = n("26989"),
  v = n("305961"),
  L = n("42887"),
  M = n("377253"),
  P = n("957255"),
  D = n("945956"),
  y = n("568307"),
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
      canSendMessage: l,
      hasPendingMemberAction: i
    } = this.props;
    t && null != e && ((0, u.trackWithMetadata)(W.AnalyticEvents.CHANNEL_OPENED, {
      ...(0, u.getChannelOpenedMetadata)(e),
      channel_is_nsfw: n,
      parent_id: a,
      can_send_message: l,
      has_pending_member_action: i
    }), s && (0, u.trackWithMetadata)(W.AnalyticEvents.TEXT_IN_VOICE_OPENED, {
      channel_is_nsfw: n
    }))
  }
  componentDidUpdate(e) {
    var t, n, a;
    let {
      voiceChannelId: s,
      voiceChannelGuildId: l,
      voiceChannelType: o,
      voiceChannelBitrate: C,
      videoEnabled: I,
      isScreenSharing: S,
      runningGame: T,
      runningGamePid: O,
      selectedChannelId: L,
      selectedGuildId: P,
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
      let t = y.default.getCurrentGameForAnalytics(),
        n = null != t ? t.name : "",
        a = g.default.getStageInstanceByChannel(e.voiceChannelId),
        s = m.default.getActiveEventByChannel(e.voiceChannelId);
      B.default.track(W.AnalyticEvents.LEAVE_VOICE_CHANNEL, {
        channel_id: e.voiceChannelId,
        channel_type: e.voiceChannelType,
        channel_bitrate: e.voiceChannelBitrate,
        guild_id: e.voiceChannelGuildId,
        rtc_connection_id: D.default.getRTCConnectionId(),
        game_name: n,
        duration: D.default.getDuration(),
        game_platform: this.props.gamePlatform,
        game_id: this.props.gameId,
        media_session_id: D.default.getMediaSessionId(),
        stage_instance_id: null == a ? void 0 : a.id,
        guild_scheduled_event_id: null == s ? void 0 : s.id,
        ...(0, u.getVoiceStateMetadata)(e.voiceChannelGuildId, e.voiceChannelId, e.videoEnabled),
        ...D.default.getVoiceStateStats(),
        ...h.default.getSelectedParticipantStats(e.voiceChannelId)
      })
    }
    if (e.voiceChannelId !== s && null != s) {
      let e = y.default.getCurrentGameForAnalytics(),
        t = null != e ? e.name : "",
        n = g.default.getStageInstanceByChannel(s),
        a = m.default.getActiveEventByChannel(s);
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
        channel_bitrate: C,
        guild_id: l,
        game_name: t,
        game_platform: this.props.gamePlatform,
        game_id: this.props.gameId,
        stage_instance_id: null == n ? void 0 : n.id,
        guild_scheduled_event_id: null == a ? void 0 : a.id,
        ...(0, u.getCustomStatusMetadata)(l, s),
        ...(0, u.getVoiceStateMetadata)(l, s, I)
      })
    }
    if (e.runningGame !== T && null != T && !T.isLauncher) {
      let e = R.default.getGameByName(T.name),
        t = y.default.getOverrideForGame(T),
        n = v.default.getGuildIds(),
        a = A.ActivityRestrictedGuilds.getSetting(),
        s = n.filter(e => !a.includes(e)).slice(0, 200),
        l = null;
      l = null != t ? "custom_override" : null != e ? "verified_game" : "launcher";
      let o = (0, y.getOverlayGameStatus)(T);
      if (setTimeout(() => {
          var t;
          let n = Y.default.GetWindowFullscreenTypeByPid(T.pid, T.name, T.fullscreenType);
          B.default.track(W.AnalyticEvents.LAUNCH_GAME, {
            game: T.name,
            game_id: null == e ? null : e.id,
            verified: null != e,
            elevated: T.elevated,
            is_launcher: null !== (t = null == T ? void 0 : T.isLauncher) && void 0 !== t && t,
            game_platform: W.ActivityGamePlatforms.DESKTOP,
            detection_method: l,
            distributor: T.distributor,
            is_overlay_enabled: F.default.enabled,
            is_overlay_game_enabled: o.enabled,
            is_overlay_game_source: o.source,
            fullscreen_type: r.RunningProcessFullscreenType[n],
            overlay_method: K.OverlayMethod[o.overlayMethod],
            activity_status_enabled: A.ShowCurrentGame.getSetting(),
            activity_status_shared_guilds: s,
            current_user_status: U.default.getStatus(),
            game_detection_enabled: (0, y.isDetectionEnabled)(T)
          })
        }, 1e4), null != T.name && null != O && R.default.shouldReport(T.name)) {
        let e = T.name;
        i.default.identifyGame(O, e).then(e => i.default.reportUnverifiedGame(e)).catch(e => new(0, _.default)("AutoAnalytics").error("Cannot identify game", e))
      }
    }
    if ((e.videoEnabled !== I || e.isScreenSharing !== S) && null != s) {
      let e = "none",
        t = [S ? "screen" : null, I ? "camera" : null].filter(V.isNotNullish),
        n = null;
      S ? (e = "screen", n = (0, f.getDesktopSourceMetadata)()) : I && (e = "camera"), B.default.track(W.AnalyticEvents.VIDEO_INPUT_TOGGLED, {
        video_input_type: e,
        video_toggle_source: __OVERLAY__ ? "overlay" : "app",
        enabled_inputs: t,
        preview_enabled: A.AlwaysPreviewVideo.getSetting(),
        ...n,
        ...this.getGameMetadata(),
        ...(0, u.collectVoiceAnalyticsMetadata)(s)
      })
    }
    if (j && null != P && (P !== e.selectedGuildId || !e.connected || q && !e.isMemberPending)) {
      let e = {
        ...q ? {
          is_pending: q,
          preview_enabled: Q
        } : {},
        postable_channels: Z,
        premium_progress_bar_enabled: null !== (n = null === (t = v.default.getGuild(b.default.getGuildId())) || void 0 === t ? void 0 : t.premiumProgressBarEnabled) && void 0 !== n && n,
        viewing_all_channels: !G.default.isOptInEnabled(P),
        num_recent_channels: p.default.recentsChannelCount(P)
      };
      (0, u.trackWithMetadata)(W.AnalyticEvents.GUILD_VIEWED, e)
    } else j && null == P && w === W.Routes.FRIENDS && (!e.connected || k !== e.friendsTabSection || w !== e.homeLink) ? B.default.track(W.AnalyticEvents.FRIENDS_LIST_VIEWED, {
      tab_opened: k,
      ...(0, d.default)(),
      ...(0, E.getNowPlayingAnalytics)()
    }) : j && null == P && w === W.Routes.MESSAGE_REQUESTS && (!e.connected || w !== e.homeLink) && !this.isMessageRequestsInitialized && (this.isMessageRequestsInitialized = !0, B.default.track(W.AnalyticEvents.MESSAGE_REQUESTS_INITIALIZED, {
      num_message_requests: $
    }));
    if (j && null != L && (!e.connected || L !== e.selectedChannelId || P !== e.selectedGuildId)) {
      let t = e.selectedChannelId,
        n = N.default.getChannel(t),
        s = v.default.getGuild(null == n ? void 0 : n.getGuildId());
      if (null != t && null != n && null != s && s.publicUpdatesChannelId === t) {
        let e = M.default.getMessages(t),
          l = e.toArray().reverse(),
          i = l.find(e => {
            var t;
            return (0, H.hasFlag)(e.flags, W.MessageFlags.IS_CROSSPOST) && (null === (t = e.messageReference) || void 0 === t ? void 0 : t.guild_id) === "667560445975986187"
          });
        B.default.track(W.AnalyticEvents.ACK_COMMUNITY_MESSAGES, {
          last_message_id: null == i ? void 0 : i.id,
          last_message_reference_message_id: null == i ? void 0 : null === (a = i.messageReference) || void 0 === a ? void 0 : a.message_id,
          messages_loaded: e.hasFetched,
          ...(0, u.collectChannelAnalyticsMetadata)(n),
          ...(0, u.collectGuildAnalyticsMetadata)(s.id)
        })
      }
      let l = (0, c.collectThreadMetadata)(N.default.getChannel(L), !0);
      (0, u.trackWithMetadata)(W.AnalyticEvents.CHANNEL_OPENED, {
        channel_is_nsfw: z,
        parent_id: x,
        can_send_message: J,
        has_pending_member_action: ee,
        ...l,
        ...(0, u.getChannelOpenedMetadata)(L)
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
  let [t, n] = (0, l.useStateFromStoresArray)([x.default], () => [x.default.getVoiceChannelId(), x.default.getChannelId()], []), s = (0, l.useStateFromStores)([N.default], () => N.default.getChannel(n), [n]), i = (0, l.useStateFromStores)([h.default], () => (null == s ? void 0 : s.id) != null && h.default.getChatOpen(s.id), [s]), r = null == s ? void 0 : s.nsfw, u = null !== (e = null == s ? void 0 : s.parent_id) && void 0 !== e ? e : void 0, d = (0, l.useStateFromStores)([N.default], () => N.default.getChannel(t), [t]), c = (0, l.useStateFromStores)([b.default], () => b.default.getGuildId(), []), f = (0, l.useStateFromStores)([v.default], () => v.default.getGuild(c), [c]), E = (0, l.useStateFromStores)([j.default], () => j.default.getCurrentUser(), []), _ = (0, l.useStateFromStores)([O.default], () => {
    var e, t;
    return null != E && null != c && null !== (t = null === (e = O.default.getMember(c, E.id)) || void 0 === e ? void 0 : e.isPending) && void 0 !== t && t
  }, [E, c]), m = (0, l.useStateFromStores)([k.default], () => k.default.getState().section, []), p = (0, l.useStateFromStores)([w.default], () => w.default.getHomeLink(), []), g = (0, l.useStateFromStores)([C.default], () => C.default.isConnected(), []), [A, R] = (0, l.useStateFromStoresArray)([L.default], () => [L.default.isVideoEnabled(), L.default.isScreenSharing()], []), M = (0, l.useStateFromStores)([U.default], () => U.default.getPrimaryActivity(), []), D = (0, l.useStateFromStores)([y.default], () => y.default.getCurrentGameForAnalytics(), []), G = (0, I.default)(c), F = (0, l.useStateFromStores)([P.default], () => P.default.can(W.Permissions.SEND_MESSAGES, s)), B = (0, l.useStateFromStores)([T.default], () => T.default.getMessageRequestsCount(), []), H = (0, S.useHasPendingMemberAction)(null == f ? void 0 : f.id, null == s ? void 0 : s.id), V = {
    selectedChannelId: n,
    channelParentId: u,
    isNSFWChannel: r,
    selectedGuildId: c,
    friendsTabSection: m,
    homeLink: p,
    connected: g,
    videoEnabled: A,
    isScreenSharing: R,
    voiceChannelId: null == d ? void 0 : d.id,
    voiceChannelGuildId: null == d ? void 0 : d.getGuildId(),
    voiceChannelType: null == d ? void 0 : d.type,
    voiceChannelBitrate: null == d ? void 0 : d.bitrate,
    runningGame: D,
    runningGamePid: null != D ? D.pid : null,
    gamePlatform: (0, o.default)(M),
    gameName: null != M ? M.name : null,
    gameId: null != M ? M.application_id : null,
    gameExeName: null != D ? D.exeName : null,
    hasPreviewEnabled: null == f ? void 0 : f.features.has(W.GuildFeatures.PREVIEW_ENABLED),
    isMemberPending: _,
    postableChannelCount: G,
    isTextInVoice: i,
    canSendMessage: F,
    numMessageRequests: B,
    hasPendingMemberAction: H
  };
  return (0, a.jsx)(z, {
    ...V
  })
}