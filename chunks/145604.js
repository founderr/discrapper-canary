n.d(t, {
    Z: function () {
        return W;
    }
}),
    n(789020),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(442837),
    a = n(224706),
    s = n(593472),
    o = n(603113),
    c = n(367907),
    d = n(731429),
    u = n(188471),
    h = n(176881),
    m = n(318885),
    p = n(358221),
    g = n(710845),
    f = n(581567),
    _ = n(594190),
    E = n(38618),
    I = n(501640),
    C = n(924301),
    v = n(734307),
    S = n(355298),
    N = n(427679),
    T = n(695346),
    A = n(592125),
    b = n(77498),
    x = n(271383),
    Z = n(430824),
    L = n(131951),
    y = n(375954),
    O = n(19780),
    R = n(944486),
    P = n(914010),
    j = n(885110),
    D = n(9156),
    M = n(594174),
    w = n(774343),
    k = n(974042),
    U = n(808506),
    G = n(626135),
    B = n(630388),
    V = n(823379),
    H = n(998502),
    F = n(981631),
    z = n(987650);
class Y extends r.PureComponent {
    componentDidMount() {
        let { selectedChannelId: e, connected: t, isNSFWChannel: n, isTextInVoice: i } = this.props;
        t && null != e && ((0, c.yw)(F.rMx.CHANNEL_OPENED, { ...(0, c.$H)(e) }), (0, u.a)(F.rMx.CHANNEL_OPENED_CLICKSTREAM, { channelId: e }), i && (0, c.yw)(F.rMx.TEXT_IN_VOICE_OPENED, { channel_is_nsfw: n }));
    }
    componentDidUpdate(e) {
        var t, n, i;
        let { voiceChannelId: r, voiceChannelGuildId: l, voiceChannelType: o, voiceChannelBitrate: E, videoEnabled: I, isScreenSharing: S, runningGame: x, runningGamePid: L, selectedChannelId: R, selectedGuildId: M, connected: w, homeLink: k, friendsTabSection: Y, isNSFWChannel: W, isMemberPending: K, hasPreviewEnabled: q, postableChannelCount: X, isTextInVoice: Q, numMessageRequests: J } = this.props;
        if (e.voiceChannelId !== r && null != e.voiceChannelId) {
            let t = _.ZP.getCurrentGameForAnalytics(),
                n = null != t ? t.name : '',
                i = N.Z.getStageInstanceByChannel(e.voiceChannelId),
                r = C.ZP.getActiveEventByChannel(e.voiceChannelId);
            G.default.track(F.rMx.LEAVE_VOICE_CHANNEL, {
                channel_id: e.voiceChannelId,
                channel_type: e.voiceChannelType,
                channel_bitrate: e.voiceChannelBitrate,
                guild_id: e.voiceChannelGuildId,
                rtc_connection_id: O.Z.getRTCConnectionId(),
                game_name: n,
                duration: O.Z.getDuration(),
                game_platform: this.props.gamePlatform,
                game_id: this.props.gameId,
                media_session_id: O.Z.getMediaSessionId(),
                stage_instance_id: null == i ? void 0 : i.id,
                guild_scheduled_event_id: null == r ? void 0 : r.id,
                ...(0, c.kO)(e.voiceChannelGuildId, e.voiceChannelId, e.videoEnabled),
                ...O.Z.getVoiceStateStats(),
                ...p.Z.getSelectedParticipantStats(e.voiceChannelId)
            });
        }
        if (e.voiceChannelId !== r && null != r) {
            let e = _.ZP.getCurrentGameForAnalytics(),
                t = null != e ? e.name : '',
                n = N.Z.getStageInstanceByChannel(r),
                i = C.ZP.getActiveEventByChannel(r);
            (0, c.yw)(F.rMx.CHANNEL_OPENED, { ...(0, c.$H)(r) }),
                (0, u.a)(F.rMx.CHANNEL_OPENED_CLICKSTREAM, { channelId: r }),
                G.default.track(F.rMx.JOIN_VOICE_CHANNEL, {
                    channel_id: r,
                    channel_type: o,
                    channel_bitrate: E,
                    guild_id: l,
                    game_name: t,
                    game_platform: this.props.gamePlatform,
                    game_id: this.props.gameId,
                    stage_instance_id: null == n ? void 0 : n.id,
                    guild_scheduled_event_id: null == i ? void 0 : i.id,
                    ...(0, c.oG)(l, r),
                    ...(0, c.kO)(l, r, I)
                });
        }
        if (e.runningGame !== x && null != x && !x.isLauncher) {
            let e = b.Z.getGameByName(x.name),
                t = _.ZP.getOverrideForGame(x),
                n = Z.Z.getGuildIds(),
                i = T.SE.getSetting(),
                c = n.filter((e) => !i.includes(e)).slice(0, 200),
                d = null;
            d = null != t ? 'custom_override' : null != e ? 'verified_game' : 'launcher';
            let u = (0, _.jk)(x);
            if (
                (setTimeout(() => {
                    var t;
                    let n = H.ZP.GetWindowFullscreenTypeByPid(x.pid, x.name, x.fullscreenType),
                        { gameName: i, gameId: a, exe: h, distributor: m } = (0, f.G8)(x);
                    G.default.track(F.rMx.LAUNCH_GAME, {
                        game: i,
                        game_id: a,
                        verified: null != e && (0, f.vp)(h, null == e ? void 0 : e.executables),
                        elevated: x.elevated,
                        is_launcher: null !== (t = null == x ? void 0 : x.isLauncher) && void 0 !== t && t,
                        game_platform: F.M7m.DESKTOP,
                        detection_method: d,
                        distributor: m,
                        is_overlay_enabled: U.Z.enabled,
                        is_overlay_game_enabled: u.enabled,
                        is_overlay_game_source: u.source,
                        fullscreen_type: s.Jx[n],
                        overlay_method: z.gl[u.overlayMethod],
                        activity_status_enabled: T.G6.getSetting(),
                        activity_status_shared_guilds: c,
                        current_user_status: j.Z.getStatus(),
                        game_detection_enabled: (0, _.ik)(x),
                        executable_path: h,
                        voice_channel_id: r,
                        voice_channel_type: o,
                        voice_channel_bitrate: E,
                        voice_channel_guild_id: l
                    }),
                        null != h && _.ZP.addExecutableTrackedByAnalytics(h);
                }, 10000),
                null != x.name && null != L && b.Z.shouldReport(x.name))
            ) {
                let e = x.name;
                a.Z.identifyGame(L, e)
                    .then((e) => a.Z.reportUnverifiedGame(e))
                    .catch((e) => new g.Z('AutoAnalytics').error('Cannot identify game', e));
            }
        }
        if ((e.videoEnabled !== I || e.isScreenSharing !== S) && null != r) {
            let e = 'none',
                t = [S ? 'screen' : null, I ? 'camera' : null].filter(V.lm),
                n = null;
            S ? ((e = 'screen'), (n = (0, m.t)())) : I && (e = 'camera'),
                G.default.track(F.rMx.VIDEO_INPUT_TOGGLED, {
                    video_input_type: e,
                    video_toggle_source: __OVERLAY__ ? 'overlay' : 'app',
                    enabled_inputs: t,
                    preview_enabled: T.qF.getSetting(),
                    ...n,
                    ...this.getGameMetadata(),
                    ...(0, c.AB)(r)
                });
        }
        if (w && null != M && (M !== e.selectedGuildId || !e.connected || (K && !e.isMemberPending))) {
            let e = {
                ...(K
                    ? {
                          is_pending: K,
                          preview_enabled: q
                      }
                    : {}),
                postable_channels: X,
                premium_progress_bar_enabled: null !== (n = null === (t = Z.Z.getGuild(P.Z.getGuildId())) || void 0 === t ? void 0 : t.premiumProgressBarEnabled) && void 0 !== n && n,
                viewing_all_channels: !D.ZP.isOptInEnabled(M),
                num_recent_channels: v.Z.recentsChannelCount(M)
            };
            (0, c.yw)(F.rMx.GUILD_VIEWED, e), (0, u.a)(F.rMx.GUILD_VIEWED_CLICKSTREAM, { guildId: M });
        } else w && null == M && k === F.Z5c.FRIENDS && (!e.connected || Y !== e.friendsTabSection || k !== e.homeLink) ? (0, h.Z)({ tab_opened: Y }) : w && null == M && k === F.Z5c.MESSAGE_REQUESTS && (!e.connected || k !== e.homeLink) && !this.isMessageRequestsInitialized && ((this.isMessageRequestsInitialized = !0), G.default.track(F.rMx.MESSAGE_REQUESTS_INITIALIZED, { num_message_requests: J }));
        if (w && null != R && (!e.connected || R !== e.selectedChannelId || M !== e.selectedGuildId)) {
            let t = e.selectedChannelId,
                n = A.Z.getChannel(t),
                r = Z.Z.getGuild(null == n ? void 0 : n.getGuildId());
            if (null != t && null != n && null != r && r.publicUpdatesChannelId === t) {
                let e = y.Z.getMessages(t),
                    l = e
                        .toArray()
                        .reverse()
                        .find((e) => {
                            var t;
                            return (0, B.yE)(e.flags, F.iLy.IS_CROSSPOST) && (null === (t = e.messageReference) || void 0 === t ? void 0 : t.guild_id) === '667560445975986187';
                        });
                G.default.track(F.rMx.ACK_COMMUNITY_MESSAGES, {
                    last_message_id: null == l ? void 0 : l.id,
                    last_message_reference_message_id: null == l ? void 0 : null === (i = l.messageReference) || void 0 === i ? void 0 : i.message_id,
                    messages_loaded: e.hasFetched,
                    ...(0, c.v_)(n),
                    ...(0, c.hH)(r.id)
                });
            }
            let l = (0, d.K)(A.Z.getChannel(R), !0);
            (0, c.yw)(F.rMx.CHANNEL_OPENED, {
                ...l,
                ...(0, c.$H)(R)
            }),
                (0, u.a)(F.rMx.CHANNEL_OPENED_CLICKSTREAM, { channelId: R }),
                Q && (0, c.yw)(F.rMx.TEXT_IN_VOICE_OPENED, { channel_is_nsfw: W });
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
function W() {
    let [e, t] = (0, l.Wu)([R.Z], () => [R.Z.getVoiceChannelId(), R.Z.getChannelId()], []),
        n = (0, l.e7)([A.Z], () => A.Z.getChannel(t), [t]),
        r = (0, l.e7)([p.Z], () => (null == n ? void 0 : n.id) != null && p.Z.getChatOpen(n.id), [n]),
        a = null == n ? void 0 : n.nsfw,
        s = (0, l.e7)([A.Z], () => A.Z.getChannel(e), [e]),
        c = (0, l.e7)([P.Z], () => P.Z.getGuildId(), []),
        d = (0, l.e7)([Z.Z], () => Z.Z.getGuild(c), [c]),
        u = (0, l.e7)([M.default], () => M.default.getCurrentUser(), []),
        h = (0, l.e7)(
            [x.ZP],
            () => {
                var e, t;
                return null != u && null != c && null !== (t = null === (e = x.ZP.getMember(c, u.id)) || void 0 === e ? void 0 : e.isPending) && void 0 !== t && t;
            },
            [u, c]
        ),
        m = (0, l.e7)([k.ZP], () => k.ZP.getState().section, []),
        g = (0, l.e7)([w.Z], () => w.Z.getHomeLink(), []),
        f = (0, l.e7)([E.Z], () => E.Z.isConnected(), []),
        [C, v] = (0, l.Wu)([L.Z], () => [L.Z.isVideoEnabled(), L.Z.isScreenSharing()], []),
        N = (0, l.e7)([j.Z], () => j.Z.getPrimaryActivity(), []),
        T = (0, l.e7)([_.ZP], () => _.ZP.getCurrentGameForAnalytics(), []),
        b = (0, I.Z)(c),
        y = (0, l.e7)([S.Z], () => S.Z.getMessageRequestsCount(), []),
        O = {
            selectedChannelId: t,
            isNSFWChannel: a,
            selectedGuildId: c,
            friendsTabSection: m,
            homeLink: g,
            connected: f,
            videoEnabled: C,
            isScreenSharing: v,
            voiceChannelId: null == s ? void 0 : s.id,
            voiceChannelGuildId: null == s ? void 0 : s.getGuildId(),
            voiceChannelType: null == s ? void 0 : s.type,
            voiceChannelBitrate: null == s ? void 0 : s.bitrate,
            runningGame: T,
            runningGamePid: null != T ? T.pid : null,
            gamePlatform: (0, o.Z)(N),
            gameName: null != N ? N.name : null,
            gameId: null != N ? N.application_id : null,
            gameExeName: null != T ? T.exeName : null,
            hasPreviewEnabled: null == d ? void 0 : d.features.has(F.oNc.PREVIEW_ENABLED),
            isMemberPending: h,
            postableChannelCount: b,
            isTextInVoice: r,
            numMessageRequests: y
        };
    return (0, i.jsx)(Y, { ...O });
}
