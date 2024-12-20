n.d(t, {
    Z: function () {
        return q;
    }
}),
    n(789020),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(442837),
    a = n(224706),
    o = n(615287),
    s = n(593472),
    c = n(603113),
    d = n(367907),
    u = n(731429),
    h = n(188471),
    m = n(176881),
    p = n(318885),
    g = n(358221),
    f = n(710845),
    _ = n(581567),
    E = n(594190),
    I = n(38618),
    C = n(501640),
    v = n(924301),
    S = n(734307),
    N = n(355298),
    T = n(371651),
    b = n(829907),
    x = n(427679),
    A = n(695346),
    Z = n(592125),
    L = n(77498),
    P = n(271383),
    y = n(430824),
    O = n(131951),
    R = n(375954),
    j = n(19780),
    D = n(944486),
    M = n(914010),
    w = n(885110),
    k = n(9156),
    U = n(594174),
    G = n(774343),
    B = n(974042),
    H = n(808506),
    V = n(237997),
    F = n(626135),
    z = n(630388),
    W = n(823379),
    Y = n(981631);
class K extends r.PureComponent {
    componentDidMount() {
        let { selectedChannelId: e, connected: t, isNSFWChannel: n, isTextInVoice: i } = this.props;
        t && null != e && ((0, d.yw)(Y.rMx.CHANNEL_OPENED, { ...(0, d.$H)(e) }), (0, h.a)(Y.rMx.CHANNEL_OPENED_CLICKSTREAM, { channelId: e }), i && (0, d.yw)(Y.rMx.TEXT_IN_VOICE_OPENED, { channel_is_nsfw: n }));
    }
    componentDidUpdate(e) {
        var t, n, i;
        let { voiceChannelId: r, voiceChannelGuildId: l, voiceChannelType: c, voiceChannelBitrate: I, videoEnabled: C, isScreenSharing: N, runningGame: P, runningGamePid: O, selectedChannelId: D, selectedGuildId: U, connected: G, homeLink: B, friendsTabSection: K, isNSFWChannel: q, isMemberPending: X, hasPreviewEnabled: Q, postableChannelCount: J, isTextInVoice: $, numMessageRequests: ee } = this.props;
        if (e.voiceChannelId !== r && null != e.voiceChannelId) {
            let t = E.ZP.getCurrentGameForAnalytics(),
                n = null != t ? t.name : '',
                i = x.Z.getStageInstanceByChannel(e.voiceChannelId),
                r = v.ZP.getActiveEventByChannel(e.voiceChannelId);
            F.default.track(Y.rMx.LEAVE_VOICE_CHANNEL, {
                channel_id: e.voiceChannelId,
                channel_type: e.voiceChannelType,
                channel_bitrate: e.voiceChannelBitrate,
                guild_id: e.voiceChannelGuildId,
                rtc_connection_id: j.Z.getRTCConnectionId(),
                game_name: n,
                duration: j.Z.getDuration(),
                game_platform: this.props.gamePlatform,
                game_id: this.props.gameId,
                media_session_id: j.Z.getMediaSessionId(),
                stage_instance_id: null == i ? void 0 : i.id,
                guild_scheduled_event_id: null == r ? void 0 : r.id,
                ...(0, d.kO)(e.voiceChannelGuildId, e.voiceChannelId, e.videoEnabled),
                ...j.Z.getVoiceStateStats(),
                ...g.Z.getSelectedParticipantStats(e.voiceChannelId)
            });
        }
        if (e.voiceChannelId !== r && null != r) {
            let e = E.ZP.getCurrentGameForAnalytics(),
                t = null != e ? e.name : '',
                n = x.Z.getStageInstanceByChannel(r),
                i = v.ZP.getActiveEventByChannel(r);
            (0, d.yw)(Y.rMx.CHANNEL_OPENED, { ...(0, d.$H)(r) }), (0, h.a)(Y.rMx.CHANNEL_OPENED_CLICKSTREAM, { channelId: r });
            let a = null,
                s = V.Z.getFocusedPID();
            null != s && T.Z.getOverlayMethod(s) !== o.gl.Disabled && (V.Z.isInstanceLocked() ? (a = Y.ADE.OVERLAY_LOCKED_ACTIVATED) : !V.Z.isInstanceLocked() && (a = V.Z.isPinned(Y.Odu.TEXT) ? Y.ADE.OVERLAY_UNLOCKED_PINNED : Y.ADE.OVERLAY_UNLOCKED)),
                F.default.track(Y.rMx.JOIN_VOICE_CHANNEL, {
                    location: a,
                    channel_id: r,
                    channel_type: c,
                    channel_bitrate: I,
                    guild_id: l,
                    game_name: t,
                    game_platform: this.props.gamePlatform,
                    game_id: this.props.gameId,
                    stage_instance_id: null == n ? void 0 : n.id,
                    guild_scheduled_event_id: null == i ? void 0 : i.id,
                    ...(0, d.oG)(l, r),
                    ...(0, d.kO)(l, r, C)
                });
        }
        if (e.runningGame !== P && null != P && !P.isLauncher) {
            let e = L.Z.getGameByName(P.name),
                t = E.ZP.getOverrideForGame(P),
                n = y.Z.getGuildIds(),
                i = A.SE.getSetting(),
                d = n.filter((e) => !i.includes(e)).slice(0, 200),
                u = null;
            u = null != t ? 'custom_override' : null != e ? 'verified_game' : 'launcher';
            let h = (0, E.b6)(P);
            if (
                (setTimeout(async () => {
                    var t;
                    let n = await (0, b.hj)(P.pid),
                        { gameName: i, gameId: a, exe: m, distributor: p } = (0, _.G8)(P);
                    F.default.track(Y.rMx.LAUNCH_GAME, {
                        game: i,
                        game_id: a,
                        verified: null != e && (0, _.vp)(m, null == e ? void 0 : e.executables),
                        elevated: P.elevated,
                        is_launcher: null !== (t = null == P ? void 0 : P.isLauncher) && void 0 !== t && t,
                        game_platform: Y.M7m.DESKTOP,
                        detection_method: u,
                        distributor: p,
                        is_overlay_enabled: H.Z.enabled,
                        is_overlay_game_enabled: h.enabled,
                        is_overlay_game_source: h.source,
                        fullscreen_type: null != n ? s.Jx[n] : s.Jx.UNKNOWN.toString(),
                        overlay_method: o.gl[h.overlayMethod],
                        activity_status_enabled: A.G6.getSetting(),
                        activity_status_shared_guilds: d,
                        current_user_status: w.Z.getStatus(),
                        game_detection_enabled: (0, E.ik)(P),
                        executable_path: m,
                        voice_channel_id: r,
                        voice_channel_type: c,
                        voice_channel_bitrate: I,
                        voice_channel_guild_id: l
                    }),
                        null != m && E.ZP.addExecutableTrackedByAnalytics(m);
                }, 10000),
                null != P.name && null != O && L.Z.shouldReport(P.name))
            ) {
                let e = P.name;
                a.Z.identifyGame(O, e)
                    .then((e) => a.Z.reportUnverifiedGame(e))
                    .catch((e) => new f.Z('AutoAnalytics').error('Cannot identify game', e));
            }
        }
        if ((e.videoEnabled !== C || e.isScreenSharing !== N) && null != r) {
            let e = 'none',
                t = [N ? 'screen' : null, C ? 'camera' : null].filter(W.lm),
                n = null;
            N ? ((e = 'screen'), (n = (0, p.t)())) : C && (e = 'camera'),
                F.default.track(Y.rMx.VIDEO_INPUT_TOGGLED, {
                    video_input_type: e,
                    video_toggle_source: __OVERLAY__ ? 'overlay' : 'app',
                    enabled_inputs: t,
                    preview_enabled: A.qF.getSetting(),
                    ...n,
                    ...this.getGameMetadata(),
                    ...(0, d.AB)(r)
                });
        }
        if (G && null != U && (U !== e.selectedGuildId || !e.connected || (X && !e.isMemberPending))) {
            let e = {
                ...(X
                    ? {
                          is_pending: X,
                          preview_enabled: Q
                      }
                    : {}),
                postable_channels: J,
                premium_progress_bar_enabled: null !== (n = null === (t = y.Z.getGuild(M.Z.getGuildId())) || void 0 === t ? void 0 : t.premiumProgressBarEnabled) && void 0 !== n && n,
                viewing_all_channels: !k.ZP.isOptInEnabled(U),
                num_recent_channels: S.Z.recentsChannelCount(U)
            };
            (0, d.yw)(Y.rMx.GUILD_VIEWED, e), (0, h.a)(Y.rMx.GUILD_VIEWED_CLICKSTREAM, { guildId: U });
        } else G && null == U && B === Y.Z5c.FRIENDS && (!e.connected || K !== e.friendsTabSection || B !== e.homeLink) ? (0, m.Z)({ tab_opened: K }) : G && null == U && B === Y.Z5c.MESSAGE_REQUESTS && (!e.connected || B !== e.homeLink) && !this.isMessageRequestsInitialized && ((this.isMessageRequestsInitialized = !0), F.default.track(Y.rMx.MESSAGE_REQUESTS_INITIALIZED, { num_message_requests: ee }));
        if (G && null != D && (!e.connected || D !== e.selectedChannelId || U !== e.selectedGuildId)) {
            let t = e.selectedChannelId,
                n = Z.Z.getChannel(t),
                r = y.Z.getGuild(null == n ? void 0 : n.getGuildId());
            if (null != t && null != n && null != r && r.publicUpdatesChannelId === t) {
                let e = R.Z.getMessages(t),
                    l = e
                        .toArray()
                        .reverse()
                        .find((e) => {
                            var t;
                            return (0, z.yE)(e.flags, Y.iLy.IS_CROSSPOST) && (null === (t = e.messageReference) || void 0 === t ? void 0 : t.guild_id) === '667560445975986187';
                        });
                F.default.track(Y.rMx.ACK_COMMUNITY_MESSAGES, {
                    last_message_id: null == l ? void 0 : l.id,
                    last_message_reference_message_id: null == l ? void 0 : null === (i = l.messageReference) || void 0 === i ? void 0 : i.message_id,
                    messages_loaded: e.hasFetched,
                    ...(0, d.v_)(n),
                    ...(0, d.hH)(r.id)
                });
            }
            let l = (0, u.K)(Z.Z.getChannel(D), !0);
            (0, d.yw)(Y.rMx.CHANNEL_OPENED, {
                ...l,
                ...(0, d.$H)(D)
            }),
                (0, h.a)(Y.rMx.CHANNEL_OPENED_CLICKSTREAM, { channelId: D }),
                $ && (0, d.yw)(Y.rMx.TEXT_IN_VOICE_OPENED, { channel_is_nsfw: q });
        }
    }
    getGameMetadata() {
        return {
            game_platform: this.props.gamePlatform,
            game_name: this.props.gameName,
            game_exe_name: this.props.gameExeName,
            game_id: this.props.gameId
        };
    }
    render() {
        return null;
    }
    constructor(...e) {
        var t, n, i;
        super(...e),
            (t = this),
            (i = !1),
            (n = 'isMessageRequestsInitialized') in t
                ? Object.defineProperty(t, n, {
                      value: i,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (t[n] = i);
    }
}
function q() {
    let [e, t] = (0, l.Wu)([D.Z], () => [D.Z.getVoiceChannelId(), D.Z.getChannelId()], []),
        n = (0, l.e7)([Z.Z], () => Z.Z.getChannel(t), [t]),
        r = (0, l.e7)([g.Z], () => (null == n ? void 0 : n.id) != null && g.Z.getChatOpen(n.id), [n]),
        a = null == n ? void 0 : n.nsfw,
        o = (0, l.e7)([Z.Z], () => Z.Z.getChannel(e), [e]),
        s = (0, l.e7)([M.Z], () => M.Z.getGuildId(), []),
        d = (0, l.e7)([y.Z], () => y.Z.getGuild(s), [s]),
        u = (0, l.e7)([U.default], () => U.default.getCurrentUser(), []),
        h = (0, l.e7)(
            [P.ZP],
            () => {
                var e, t;
                return null != u && null != s && null !== (t = null === (e = P.ZP.getMember(s, u.id)) || void 0 === e ? void 0 : e.isPending) && void 0 !== t && t;
            },
            [u, s]
        ),
        m = (0, l.e7)([B.ZP], () => B.ZP.getState().section, []),
        p = (0, l.e7)([G.Z], () => G.Z.getHomeLink(), []),
        f = (0, l.e7)([I.Z], () => I.Z.isConnected(), []),
        [_, v] = (0, l.Wu)([O.Z], () => [O.Z.isVideoEnabled(), O.Z.isScreenSharing()], []),
        S = (0, l.e7)([w.Z], () => w.Z.getPrimaryActivity(), []),
        T = (0, l.e7)([E.ZP], () => E.ZP.getCurrentGameForAnalytics(), []),
        b = (0, C.Z)(s),
        x = (0, l.e7)([N.Z], () => N.Z.getMessageRequestsCount(), []),
        A = {
            selectedChannelId: t,
            isNSFWChannel: a,
            selectedGuildId: s,
            friendsTabSection: m,
            homeLink: p,
            connected: f,
            videoEnabled: _,
            isScreenSharing: v,
            voiceChannelId: null == o ? void 0 : o.id,
            voiceChannelGuildId: null == o ? void 0 : o.getGuildId(),
            voiceChannelType: null == o ? void 0 : o.type,
            voiceChannelBitrate: null == o ? void 0 : o.bitrate,
            runningGame: T,
            runningGamePid: null != T ? T.pid : null,
            gamePlatform: (0, c.Z)(S),
            gameName: null != S ? S.name : null,
            gameId: null != S ? S.application_id : null,
            gameExeName: null != T ? T.exeName : null,
            hasPreviewEnabled: null == d ? void 0 : d.features.has(Y.oNc.PREVIEW_ENABLED),
            isMemberPending: h,
            postableChannelCount: b,
            isTextInVoice: r,
            numMessageRequests: x
        };
    return (0, i.jsx)(K, { ...A });
}
