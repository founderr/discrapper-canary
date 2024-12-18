n.d(t, {
    Z: function () {
        return Y;
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
    N = n(734307),
    S = n(355298),
    T = n(829907),
    b = n(427679),
    x = n(695346),
    A = n(592125),
    Z = n(77498),
    L = n(271383),
    P = n(430824),
    y = n(131951),
    O = n(375954),
    R = n(19780),
    j = n(944486),
    D = n(914010),
    M = n(885110),
    w = n(9156),
    k = n(594174),
    U = n(774343),
    G = n(974042),
    B = n(808506),
    H = n(626135),
    V = n(630388),
    F = n(823379),
    z = n(981631);
class W extends r.PureComponent {
    componentDidMount() {
        let { selectedChannelId: e, connected: t, isNSFWChannel: n, isTextInVoice: i } = this.props;
        t && null != e && ((0, d.yw)(z.rMx.CHANNEL_OPENED, { ...(0, d.$H)(e) }), (0, h.a)(z.rMx.CHANNEL_OPENED_CLICKSTREAM, { channelId: e }), i && (0, d.yw)(z.rMx.TEXT_IN_VOICE_OPENED, { channel_is_nsfw: n }));
    }
    componentDidUpdate(e) {
        var t, n, i;
        let { voiceChannelId: r, voiceChannelGuildId: l, voiceChannelType: c, voiceChannelBitrate: I, videoEnabled: C, isScreenSharing: S, runningGame: L, runningGamePid: y, selectedChannelId: j, selectedGuildId: k, connected: U, homeLink: G, friendsTabSection: W, isNSFWChannel: Y, isMemberPending: K, hasPreviewEnabled: q, postableChannelCount: X, isTextInVoice: Q, numMessageRequests: J } = this.props;
        if (e.voiceChannelId !== r && null != e.voiceChannelId) {
            let t = E.ZP.getCurrentGameForAnalytics(),
                n = null != t ? t.name : '',
                i = b.Z.getStageInstanceByChannel(e.voiceChannelId),
                r = v.ZP.getActiveEventByChannel(e.voiceChannelId);
            H.default.track(z.rMx.LEAVE_VOICE_CHANNEL, {
                channel_id: e.voiceChannelId,
                channel_type: e.voiceChannelType,
                channel_bitrate: e.voiceChannelBitrate,
                guild_id: e.voiceChannelGuildId,
                rtc_connection_id: R.Z.getRTCConnectionId(),
                game_name: n,
                duration: R.Z.getDuration(),
                game_platform: this.props.gamePlatform,
                game_id: this.props.gameId,
                media_session_id: R.Z.getMediaSessionId(),
                stage_instance_id: null == i ? void 0 : i.id,
                guild_scheduled_event_id: null == r ? void 0 : r.id,
                ...(0, d.kO)(e.voiceChannelGuildId, e.voiceChannelId, e.videoEnabled),
                ...R.Z.getVoiceStateStats(),
                ...g.Z.getSelectedParticipantStats(e.voiceChannelId)
            });
        }
        if (e.voiceChannelId !== r && null != r) {
            let e = E.ZP.getCurrentGameForAnalytics(),
                t = null != e ? e.name : '',
                n = b.Z.getStageInstanceByChannel(r),
                i = v.ZP.getActiveEventByChannel(r);
            (0, d.yw)(z.rMx.CHANNEL_OPENED, { ...(0, d.$H)(r) }),
                (0, h.a)(z.rMx.CHANNEL_OPENED_CLICKSTREAM, { channelId: r }),
                H.default.track(z.rMx.JOIN_VOICE_CHANNEL, {
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
        if (e.runningGame !== L && null != L && !L.isLauncher) {
            let e = Z.Z.getGameByName(L.name),
                t = E.ZP.getOverrideForGame(L),
                n = P.Z.getGuildIds(),
                i = x.SE.getSetting(),
                d = n.filter((e) => !i.includes(e)).slice(0, 200),
                u = null;
            u = null != t ? 'custom_override' : null != e ? 'verified_game' : 'launcher';
            let h = (0, E.b6)(L);
            if (
                (setTimeout(async () => {
                    var t;
                    let n = await (0, T.hj)(L.pid),
                        { gameName: i, gameId: a, exe: m, distributor: p } = (0, _.G8)(L);
                    H.default.track(z.rMx.LAUNCH_GAME, {
                        game: i,
                        game_id: a,
                        verified: null != e && (0, _.vp)(m, null == e ? void 0 : e.executables),
                        elevated: L.elevated,
                        is_launcher: null !== (t = null == L ? void 0 : L.isLauncher) && void 0 !== t && t,
                        game_platform: z.M7m.DESKTOP,
                        detection_method: u,
                        distributor: p,
                        is_overlay_enabled: B.Z.enabled,
                        is_overlay_game_enabled: h.enabled,
                        is_overlay_game_source: h.source,
                        fullscreen_type: null != n ? s.Jx[n] : s.Jx.UNKNOWN.toString(),
                        overlay_method: o.gl[h.overlayMethod],
                        activity_status_enabled: x.G6.getSetting(),
                        activity_status_shared_guilds: d,
                        current_user_status: M.Z.getStatus(),
                        game_detection_enabled: (0, E.ik)(L),
                        executable_path: m,
                        voice_channel_id: r,
                        voice_channel_type: c,
                        voice_channel_bitrate: I,
                        voice_channel_guild_id: l
                    }),
                        null != m && E.ZP.addExecutableTrackedByAnalytics(m);
                }, 10000),
                null != L.name && null != y && Z.Z.shouldReport(L.name))
            ) {
                let e = L.name;
                a.Z.identifyGame(y, e)
                    .then((e) => a.Z.reportUnverifiedGame(e))
                    .catch((e) => new f.Z('AutoAnalytics').error('Cannot identify game', e));
            }
        }
        if ((e.videoEnabled !== C || e.isScreenSharing !== S) && null != r) {
            let e = 'none',
                t = [S ? 'screen' : null, C ? 'camera' : null].filter(F.lm),
                n = null;
            S ? ((e = 'screen'), (n = (0, p.t)())) : C && (e = 'camera'),
                H.default.track(z.rMx.VIDEO_INPUT_TOGGLED, {
                    video_input_type: e,
                    video_toggle_source: __OVERLAY__ ? 'overlay' : 'app',
                    enabled_inputs: t,
                    preview_enabled: x.qF.getSetting(),
                    ...n,
                    ...this.getGameMetadata(),
                    ...(0, d.AB)(r)
                });
        }
        if (U && null != k && (k !== e.selectedGuildId || !e.connected || (K && !e.isMemberPending))) {
            let e = {
                ...(K
                    ? {
                          is_pending: K,
                          preview_enabled: q
                      }
                    : {}),
                postable_channels: X,
                premium_progress_bar_enabled: null !== (n = null === (t = P.Z.getGuild(D.Z.getGuildId())) || void 0 === t ? void 0 : t.premiumProgressBarEnabled) && void 0 !== n && n,
                viewing_all_channels: !w.ZP.isOptInEnabled(k),
                num_recent_channels: N.Z.recentsChannelCount(k)
            };
            (0, d.yw)(z.rMx.GUILD_VIEWED, e), (0, h.a)(z.rMx.GUILD_VIEWED_CLICKSTREAM, { guildId: k });
        } else U && null == k && G === z.Z5c.FRIENDS && (!e.connected || W !== e.friendsTabSection || G !== e.homeLink) ? (0, m.Z)({ tab_opened: W }) : U && null == k && G === z.Z5c.MESSAGE_REQUESTS && (!e.connected || G !== e.homeLink) && !this.isMessageRequestsInitialized && ((this.isMessageRequestsInitialized = !0), H.default.track(z.rMx.MESSAGE_REQUESTS_INITIALIZED, { num_message_requests: J }));
        if (U && null != j && (!e.connected || j !== e.selectedChannelId || k !== e.selectedGuildId)) {
            let t = e.selectedChannelId,
                n = A.Z.getChannel(t),
                r = P.Z.getGuild(null == n ? void 0 : n.getGuildId());
            if (null != t && null != n && null != r && r.publicUpdatesChannelId === t) {
                let e = O.Z.getMessages(t),
                    l = e
                        .toArray()
                        .reverse()
                        .find((e) => {
                            var t;
                            return (0, V.yE)(e.flags, z.iLy.IS_CROSSPOST) && (null === (t = e.messageReference) || void 0 === t ? void 0 : t.guild_id) === '667560445975986187';
                        });
                H.default.track(z.rMx.ACK_COMMUNITY_MESSAGES, {
                    last_message_id: null == l ? void 0 : l.id,
                    last_message_reference_message_id: null == l ? void 0 : null === (i = l.messageReference) || void 0 === i ? void 0 : i.message_id,
                    messages_loaded: e.hasFetched,
                    ...(0, d.v_)(n),
                    ...(0, d.hH)(r.id)
                });
            }
            let l = (0, u.K)(A.Z.getChannel(j), !0);
            (0, d.yw)(z.rMx.CHANNEL_OPENED, {
                ...l,
                ...(0, d.$H)(j)
            }),
                (0, h.a)(z.rMx.CHANNEL_OPENED_CLICKSTREAM, { channelId: j }),
                Q && (0, d.yw)(z.rMx.TEXT_IN_VOICE_OPENED, { channel_is_nsfw: Y });
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
function Y() {
    let [e, t] = (0, l.Wu)([j.Z], () => [j.Z.getVoiceChannelId(), j.Z.getChannelId()], []),
        n = (0, l.e7)([A.Z], () => A.Z.getChannel(t), [t]),
        r = (0, l.e7)([g.Z], () => (null == n ? void 0 : n.id) != null && g.Z.getChatOpen(n.id), [n]),
        a = null == n ? void 0 : n.nsfw,
        o = (0, l.e7)([A.Z], () => A.Z.getChannel(e), [e]),
        s = (0, l.e7)([D.Z], () => D.Z.getGuildId(), []),
        d = (0, l.e7)([P.Z], () => P.Z.getGuild(s), [s]),
        u = (0, l.e7)([k.default], () => k.default.getCurrentUser(), []),
        h = (0, l.e7)(
            [L.ZP],
            () => {
                var e, t;
                return null != u && null != s && null !== (t = null === (e = L.ZP.getMember(s, u.id)) || void 0 === e ? void 0 : e.isPending) && void 0 !== t && t;
            },
            [u, s]
        ),
        m = (0, l.e7)([G.ZP], () => G.ZP.getState().section, []),
        p = (0, l.e7)([U.Z], () => U.Z.getHomeLink(), []),
        f = (0, l.e7)([I.Z], () => I.Z.isConnected(), []),
        [_, v] = (0, l.Wu)([y.Z], () => [y.Z.isVideoEnabled(), y.Z.isScreenSharing()], []),
        N = (0, l.e7)([M.Z], () => M.Z.getPrimaryActivity(), []),
        T = (0, l.e7)([E.ZP], () => E.ZP.getCurrentGameForAnalytics(), []),
        b = (0, C.Z)(s),
        x = (0, l.e7)([S.Z], () => S.Z.getMessageRequestsCount(), []),
        Z = {
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
            gamePlatform: (0, c.Z)(N),
            gameName: null != N ? N.name : null,
            gameId: null != N ? N.application_id : null,
            gameExeName: null != T ? T.exeName : null,
            hasPreviewEnabled: null == d ? void 0 : d.features.has(z.oNc.PREVIEW_ENABLED),
            isMemberPending: h,
            postableChannelCount: b,
            isTextInVoice: r,
            numMessageRequests: x
        };
    return (0, i.jsx)(W, { ...Z });
}
