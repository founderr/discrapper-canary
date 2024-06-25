n.d(t, {
  Z: function() {
    return W
  }
}), n(789020), n(47120);
var s = n(735250),
  i = n(470079),
  l = n(442837),
  a = n(224706),
  r = n(593472),
  o = n(603113),
  c = n(367907),
  u = n(731429),
  d = n(188471),
  E = n(176881),
  h = n(318885),
  _ = n(358221),
  I = n(710845),
  m = n(581567),
  T = n(594190),
  g = n(38618),
  p = n(501640),
  N = n(924301),
  S = n(734307),
  C = n(355298),
  A = n(427679),
  f = n(695346),
  Z = n(592125),
  L = n(77498),
  O = n(271383),
  v = n(430824),
  R = n(131951),
  P = n(375954),
  x = n(19780),
  M = n(944486),
  D = n(914010),
  b = n(885110),
  y = n(9156),
  j = n(594174),
  U = n(774343),
  G = n(974042),
  w = n(808506),
  k = n(626135),
  B = n(630388),
  H = n(823379),
  V = n(998502),
  F = n(981631),
  Y = n(987650);
class z extends i.PureComponent {
  componentDidMount() {
    let {
      selectedChannelId: e,
      connected: t,
      isNSFWChannel: n,
      isTextInVoice: s
    } = this.props;
    t && null != e && ((0, c.yw)(F.rMx.CHANNEL_OPENED, {
      ...(0, c.$H)(e)
    }), (0, d.a)(F.rMx.CHANNEL_OPENED_CLICKSTREAM, {
      channelId: e
    }), s && (0, c.yw)(F.rMx.TEXT_IN_VOICE_OPENED, {
      channel_is_nsfw: n
    }))
  }
  componentDidUpdate(e) {
    var t, n, s;
    let {
      voiceChannelId: i,
      voiceChannelGuildId: l,
      voiceChannelType: o,
      voiceChannelBitrate: g,
      videoEnabled: p,
      isScreenSharing: C,
      runningGame: O,
      runningGamePid: R,
      selectedChannelId: M,
      selectedGuildId: j,
      connected: U,
      homeLink: G,
      friendsTabSection: z,
      isNSFWChannel: W,
      isMemberPending: K,
      hasPreviewEnabled: q,
      postableChannelCount: Q,
      isTextInVoice: X,
      numMessageRequests: J
    } = this.props;
    if (e.voiceChannelId !== i && null != e.voiceChannelId) {
      let t = T.ZP.getCurrentGameForAnalytics(),
        n = null != t ? t.name : "",
        s = A.Z.getStageInstanceByChannel(e.voiceChannelId),
        i = N.ZP.getActiveEventByChannel(e.voiceChannelId);
      k.default.track(F.rMx.LEAVE_VOICE_CHANNEL, {
        channel_id: e.voiceChannelId,
        channel_type: e.voiceChannelType,
        channel_bitrate: e.voiceChannelBitrate,
        guild_id: e.voiceChannelGuildId,
        rtc_connection_id: x.Z.getRTCConnectionId(),
        game_name: n,
        duration: x.Z.getDuration(),
        game_platform: this.props.gamePlatform,
        game_id: this.props.gameId,
        media_session_id: x.Z.getMediaSessionId(),
        stage_instance_id: null == s ? void 0 : s.id,
        guild_scheduled_event_id: null == i ? void 0 : i.id,
        ...(0, c.kO)(e.voiceChannelGuildId, e.voiceChannelId, e.videoEnabled),
        ...x.Z.getVoiceStateStats(),
        ..._.Z.getSelectedParticipantStats(e.voiceChannelId)
      })
    }
    if (e.voiceChannelId !== i && null != i) {
      let e = T.ZP.getCurrentGameForAnalytics(),
        t = null != e ? e.name : "",
        n = A.Z.getStageInstanceByChannel(i),
        s = N.ZP.getActiveEventByChannel(i);
      (0, c.yw)(F.rMx.CHANNEL_OPENED, {
        ...(0, c.$H)(i)
      }), (0, d.a)(F.rMx.CHANNEL_OPENED_CLICKSTREAM, {
        channelId: i
      }), k.default.track(F.rMx.JOIN_VOICE_CHANNEL, {
        channel_id: i,
        channel_type: o,
        channel_bitrate: g,
        guild_id: l,
        game_name: t,
        game_platform: this.props.gamePlatform,
        game_id: this.props.gameId,
        stage_instance_id: null == n ? void 0 : n.id,
        guild_scheduled_event_id: null == s ? void 0 : s.id,
        ...(0, c.oG)(l, i),
        ...(0, c.kO)(l, i, p)
      })
    }
    if (e.runningGame !== O && null != O && !O.isLauncher) {
      let e = L.Z.getGameByName(O.name),
        t = T.ZP.getOverrideForGame(O),
        n = v.Z.getGuildIds(),
        s = f.SE.getSetting(),
        i = n.filter(e => !s.includes(e)).slice(0, 200),
        l = null;
      l = null != t ? "custom_override" : null != e ? "verified_game" : "launcher";
      let o = (0, T.jk)(O);
      if (setTimeout(() => {
          var t;
          let n = V.ZP.GetWindowFullscreenTypeByPid(O.pid, O.name, O.fullscreenType),
            {
              gameName: s,
              gameId: a,
              exe: c,
              distributor: u
            } = (0, m.G8)(O);
          k.default.track(F.rMx.LAUNCH_GAME, {
            game: s,
            game_id: a,
            verified: null != e && (0, m.vp)(c, null == e ? void 0 : e.executables),
            elevated: O.elevated,
            is_launcher: null !== (t = null == O ? void 0 : O.isLauncher) && void 0 !== t && t,
            game_platform: F.M7m.DESKTOP,
            detection_method: l,
            distributor: u,
            is_overlay_enabled: w.Z.enabled,
            is_overlay_game_enabled: o.enabled,
            is_overlay_game_source: o.source,
            fullscreen_type: r.Jx[n],
            overlay_method: Y.gl[o.overlayMethod],
            activity_status_enabled: f.G6.getSetting(),
            activity_status_shared_guilds: i,
            current_user_status: b.Z.getStatus(),
            game_detection_enabled: (0, T.ik)(O),
            executable_path: c
          })
        }, 1e4), null != O.name && null != R && L.Z.shouldReport(O.name)) {
        let e = O.name;
        a.Z.identifyGame(R, e).then(e => a.Z.reportUnverifiedGame(e)).catch(e => new I.Z("AutoAnalytics").error("Cannot identify game", e))
      }
    }
    if ((e.videoEnabled !== p || e.isScreenSharing !== C) && null != i) {
      let e = "none",
        t = [C ? "screen" : null, p ? "camera" : null].filter(H.lm),
        n = null;
      C ? (e = "screen", n = (0, h.t)()) : p && (e = "camera"), k.default.track(F.rMx.VIDEO_INPUT_TOGGLED, {
        video_input_type: e,
        video_toggle_source: __OVERLAY__ ? "overlay" : "app",
        enabled_inputs: t,
        preview_enabled: f.qF.getSetting(),
        ...n,
        ...this.getGameMetadata(),
        ...(0, c.AB)(i)
      })
    }
    if (U && null != j && (j !== e.selectedGuildId || !e.connected || K && !e.isMemberPending)) {
      let e = {
        ...K ? {
          is_pending: K,
          preview_enabled: q
        } : {},
        postable_channels: Q,
        premium_progress_bar_enabled: null !== (n = null === (t = v.Z.getGuild(D.Z.getGuildId())) || void 0 === t ? void 0 : t.premiumProgressBarEnabled) && void 0 !== n && n,
        viewing_all_channels: !y.ZP.isOptInEnabled(j),
        num_recent_channels: S.Z.recentsChannelCount(j)
      };
      (0, c.yw)(F.rMx.GUILD_VIEWED, e), (0, d.a)(F.rMx.GUILD_VIEWED_CLICKSTREAM, {
        guildId: j
      })
    } else U && null == j && G === F.Z5c.FRIENDS && (!e.connected || z !== e.friendsTabSection || G !== e.homeLink) ? (0, E.Z)({
      tab_opened: z
    }) : U && null == j && G === F.Z5c.MESSAGE_REQUESTS && (!e.connected || G !== e.homeLink) && !this.isMessageRequestsInitialized && (this.isMessageRequestsInitialized = !0, k.default.track(F.rMx.MESSAGE_REQUESTS_INITIALIZED, {
      num_message_requests: J
    }));
    if (U && null != M && (!e.connected || M !== e.selectedChannelId || j !== e.selectedGuildId)) {
      let t = e.selectedChannelId,
        n = Z.Z.getChannel(t),
        i = v.Z.getGuild(null == n ? void 0 : n.getGuildId());
      if (null != t && null != n && null != i && i.publicUpdatesChannelId === t) {
        let e = P.Z.getMessages(t),
          l = e.toArray().reverse().find(e => {
            var t;
            return (0, B.yE)(e.flags, F.iLy.IS_CROSSPOST) && (null === (t = e.messageReference) || void 0 === t ? void 0 : t.guild_id) === "667560445975986187"
          });
        k.default.track(F.rMx.ACK_COMMUNITY_MESSAGES, {
          last_message_id: null == l ? void 0 : l.id,
          last_message_reference_message_id: null == l ? void 0 : null === (s = l.messageReference) || void 0 === s ? void 0 : s.message_id,
          messages_loaded: e.hasFetched,
          ...(0, c.v_)(n),
          ...(0, c.hH)(i.id)
        })
      }
      let l = (0, u.K)(Z.Z.getChannel(M), !0);
      (0, c.yw)(F.rMx.CHANNEL_OPENED, {
        ...l,
        ...(0, c.$H)(M)
      }), (0, d.a)(F.rMx.CHANNEL_OPENED_CLICKSTREAM, {
        channelId: M
      }), X && (0, c.yw)(F.rMx.TEXT_IN_VOICE_OPENED, {
        channel_is_nsfw: W
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
    var t, n, s;
    super(...e), t = this, s = !1, (n = "isMessageRequestsInitialized") in t ? Object.defineProperty(t, n, {
      value: s,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = s
  }
}

function W() {
  let [e, t] = (0, l.Wu)([M.Z], () => [M.Z.getVoiceChannelId(), M.Z.getChannelId()], []), n = (0, l.e7)([Z.Z], () => Z.Z.getChannel(t), [t]), i = (0, l.e7)([_.Z], () => (null == n ? void 0 : n.id) != null && _.Z.getChatOpen(n.id), [n]), a = null == n ? void 0 : n.nsfw, r = (0, l.e7)([Z.Z], () => Z.Z.getChannel(e), [e]), c = (0, l.e7)([D.Z], () => D.Z.getGuildId(), []), u = (0, l.e7)([v.Z], () => v.Z.getGuild(c), [c]), d = (0, l.e7)([j.default], () => j.default.getCurrentUser(), []), E = (0, l.e7)([O.ZP], () => {
    var e, t;
    return null != d && null != c && null !== (t = null === (e = O.ZP.getMember(c, d.id)) || void 0 === e ? void 0 : e.isPending) && void 0 !== t && t
  }, [d, c]), h = (0, l.e7)([G.ZP], () => G.ZP.getState().section, []), I = (0, l.e7)([U.Z], () => U.Z.getHomeLink(), []), m = (0, l.e7)([g.Z], () => g.Z.isConnected(), []), [N, S] = (0, l.Wu)([R.Z], () => [R.Z.isVideoEnabled(), R.Z.isScreenSharing()], []), A = (0, l.e7)([b.Z], () => b.Z.getPrimaryActivity(), []), f = (0, l.e7)([T.ZP], () => T.ZP.getCurrentGameForAnalytics(), []), L = (0, p.Z)(c), P = (0, l.e7)([C.Z], () => C.Z.getMessageRequestsCount(), []), x = {
    selectedChannelId: t,
    isNSFWChannel: a,
    selectedGuildId: c,
    friendsTabSection: h,
    homeLink: I,
    connected: m,
    videoEnabled: N,
    isScreenSharing: S,
    voiceChannelId: null == r ? void 0 : r.id,
    voiceChannelGuildId: null == r ? void 0 : r.getGuildId(),
    voiceChannelType: null == r ? void 0 : r.type,
    voiceChannelBitrate: null == r ? void 0 : r.bitrate,
    runningGame: f,
    runningGamePid: null != f ? f.pid : null,
    gamePlatform: (0, o.Z)(A),
    gameName: null != A ? A.name : null,
    gameId: null != A ? A.application_id : null,
    gameExeName: null != f ? f.exeName : null,
    hasPreviewEnabled: null == u ? void 0 : u.features.has(F.oNc.PREVIEW_ENABLED),
    isMemberPending: E,
    postableChannelCount: L,
    isTextInVoice: i,
    numMessageRequests: P
  };
  return (0, s.jsx)(z, {
    ...x
  })
}