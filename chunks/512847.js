n.d(t, {
    Z: function () {
        return k;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(392711),
    a = n.n(l),
    o = n(442837),
    s = n(317381),
    c = n(258609),
    d = n(569545),
    u = n(106301),
    h = n(590415),
    m = n(131704),
    p = n(199902),
    g = n(314897),
    f = n(592125),
    _ = n(430824),
    E = n(131951),
    I = n(292959),
    C = n(19780),
    v = n(944486),
    S = n(606304),
    N = n(979651),
    T = n(938475),
    b = n(823379),
    A = n(557177),
    x = n(981631);
function Z(e, t, n, i) {
    r.useEffect(() => {
        let r = t(),
            l = new o.Fh(e, () => {
                let e = t(),
                    l = n(r, e);
                null != l && !I.Z.isSoundDisabled(l) && (0, A.GN)(l, null != i ? i : 0.4), (r = e);
            });
        return l.attach('useSound'), () => l.detach();
    });
}
function L() {
    return (
        Z(
            [E.Z, v.Z],
            () => ({
                inVoiceChannel: null != v.Z.getVoiceChannelId(),
                selfMute: E.Z.isSelfMute(),
                selfDeaf: E.Z.isSelfDeaf(),
                audioPermissionReady: E.Z.isNativeAudioPermissionReady(),
                shouldSkipMuteUnmuteSound: E.Z.shouldSkipMuteUnmuteSound()
            }),
            (e, t) => {
                let { inVoiceChannel: n, selfMute: i, selfDeaf: r, audioPermissionReady: l, shouldSkipMuteUnmuteSound: a } = t;
                if (e.selfDeaf !== r) return r ? 'deafen' : 'undeafen';
                if (!!l && (!!n || !!e.audioPermissionReady)) {
                    if (e.selfMute !== i) {
                        if (a) {
                            E.Z.notifyMuteUnmuteSoundWasSkipped();
                            return;
                        }
                        return i ? 'mute' : 'unmute';
                    }
                }
            }
        ),
        null
    );
}
function y() {
    return (
        Z(
            [f.Z, C.Z, v.Z, c.Z],
            () => {
                let e = f.Z.getChannel(v.Z.getVoiceChannelId()),
                    t = null == e ? void 0 : e.type,
                    n = null == e ? void 0 : e.getGuildId(),
                    i = C.Z.getWasEverRtcConnected(),
                    r = C.Z.getState();
                return {
                    channelType: t,
                    guildId: n,
                    connected: r === x.hes.RTC_CONNECTED,
                    connectHasStarted: (!i && r !== x.hes.DISCONNECTED) || r === x.hes.RTC_CONNECTED,
                    awaitingRemote: null != c.Z.getAwaitingRemoteSessionInfo(),
                    connectedRemote: null != c.Z.getRemoteSessionId()
                };
            },
            (e, t) => {
                let { channelType: n, connected: i, connectHasStarted: r, awaitingRemote: l, connectedRemote: a } = t,
                    o = e.channelType,
                    s = e.connectedRemote,
                    c = e.connected,
                    d = e.connectHasStarted;
                if ((!d && r) || (a && !s)) {
                    if (null != n && m.Lr.has(n)) return;
                    return 'user_join';
                }
                if (c && !i) {
                    if (l || a || (null != o && m.Lr.has(o))) return;
                    return 'disconnect';
                }
            }
        ),
        null
    );
}
function P() {
    return (
        Z(
            [S.Z],
            () => S.Z.isCurrentUserSpeaking(),
            (e, t) => {
                if (e !== t) {
                    let e = E.Z.isSelfMute();
                    if (E.Z.getMode() === x.pM4.PUSH_TO_TALK && !e) return t ? 'ptt_start' : 'ptt_stop';
                }
            }
        ),
        null
    );
}
function O() {
    return (
        Z(
            [E.Z],
            () => E.Z.isSelfMutedTemporarily(),
            (e, t) => {
                if (e !== t) {
                    let e = E.Z.isSelfMute();
                    if (E.Z.getMode() === x.pM4.VOICE_ACTIVITY && !e) return t ? 'ptt_stop' : 'ptt_start';
                }
            }
        ),
        null
    );
}
function R() {
    return (
        Z(
            [N.Z],
            () => N.Z.userHasBeenMovedVersion,
            (e, t) => {
                if (e !== t) return 'user_moved';
            }
        ),
        null
    );
}
function j() {
    return (
        Z(
            [v.Z, N.Z],
            () => {
                let e = v.Z.getVoiceChannelId();
                if (null == e) return h.xO.NONE;
                let t = N.Z.getVoiceStateForChannel(e);
                return (0, h.gf)(t);
            },
            (e, t) => {
                if (e !== t && t === h.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK) return 'reconnect';
            }
        ),
        null
    );
}
function D() {
    return (
        Z(
            [v.Z, p.Z, g.default, N.Z, f.Z],
            () => {
                let e, t;
                let n = v.Z.getVoiceChannelId(),
                    i = g.default.getId();
                let r = [],
                    l = null,
                    a = 0,
                    o = p.Z.getAllActiveStreams();
                if (null != n) {
                    let i = f.Z.getChannel(n);
                    null != i && ((e = i.type), (t = T.ZP.countVoiceStatesForChannel(i.id) - (N.Z.isInChannel(i.id) ? 1 : 0)), (r = p.Z.getAllApplicationStreamsForChannel(i.id).map((e) => e.ownerId)));
                }
                let s = null;
                return (
                    (null == (s = 1 === o.length ? o[0] : p.Z.getCurrentUserActiveStream()) ? void 0 : s.state) === x.jm8.CONNECTING && (s = null),
                    null != s && ((l = (0, d.V9)(s)), (a = p.Z.getViewerIds(l).filter((e) => e !== i).length)),
                    {
                        channelType: e,
                        voiceChannelId: n,
                        voiceChannelUserCount: t,
                        streamingUserIds: r,
                        singleActiveStreamKey: l,
                        singleActiveStreamViewerCount: a,
                        currentUserId: i,
                        allActiveStreams: o
                    }
                );
            },
            (e, t) => {
                let { channelType: n, voiceChannelId: i, voiceChannelUserCount: r, streamingUserIds: l, singleActiveStreamKey: a, singleActiveStreamViewerCount: o, currentUserId: s } = t;
                if (
                    e.voiceChannelId !== i ||
                    null == i ||
                    (function (e) {
                        let t = f.Z.getChannel(e);
                        if (null == t) return !1;
                        let n = t.getGuildId();
                        if (null == n) return !1;
                        let i = _.Z.getGuild(n);
                        return null != i && i.afkChannelId === t.id;
                    })(i) ||
                    (null != n && m.Lr.has(n))
                )
                    return;
                let c = null != a && e.singleActiveStreamKey === a,
                    d = l.some((t) => !e.streamingUserIds.includes(t)),
                    u = e.allActiveStreams.map((e) => e.ownerId),
                    h = e.streamingUserIds.some((e) => !l.includes(e) && (e === s || u.includes(e)));
                if (d) return 'stream_started';
                if (h) return 'stream_ended';
                if (e.singleActiveStreamViewerCount <= 25 && c && o > e.singleActiveStreamViewerCount) return 'stream_user_joined';
                else if (null != e.voiceChannelUserCount && null != r && e.voiceChannelUserCount <= 25 && r > e.voiceChannelUserCount) return 'user_join';
                else if (null != e.voiceChannelUserCount && null != r && e.voiceChannelUserCount <= 25 && r < e.voiceChannelUserCount) return 'user_leave';
                else if (e.singleActiveStreamViewerCount <= 25 && c && o < e.singleActiveStreamViewerCount) return 'stream_user_left';
            }
        ),
        null
    );
}
function M() {
    return (
        Z(
            [v.Z, s.ZP, g.default],
            () => {
                let e = v.Z.getVoiceChannelId(),
                    t = v.Z.getChannelId(),
                    n = s.ZP.getConnectedActivityChannelId(),
                    i = g.default.getId(),
                    r = (0, b.lm)(t) ? s.ZP.getEmbeddedActivitiesForChannel(t) : s.i6,
                    l = (0, b.lm)(e) ? s.ZP.getEmbeddedActivitiesForChannel(e) : s.i6,
                    a = (0, b.lm)(n) ? s.ZP.getEmbeddedActivitiesForChannel(n) : s.i6;
                return {
                    voiceChannelId: e,
                    currentUserId: i,
                    channelActivities: r,
                    connectedChannelActivities: a,
                    userConnectedActivity: (0, b.lm)(n) ? s.ZP.getSelfEmbeddedActivityForChannel(n) : null,
                    voiceChannelActivities: l
                };
            },
            (e, t) => {
                let n,
                    { voiceChannelId: i, currentUserId: r, channelActivities: l, connectedChannelActivities: a, userConnectedActivity: o, voiceChannelActivities: s } = t;
                let c = s.some((e) => e.applicationId === (null == o ? void 0 : o.applicationId) && e.launchId === o.launchId);
                if ((0, b.lm)(i)) {
                    let t = e.voiceChannelActivities.find((e) => e.userIds.has(r)),
                        i = s.find((e) => e.userIds.has(r));
                    e.voiceChannelActivities.length < s.length && (0, b.lm)(e.voiceChannelId) && (n = 'activity_launch'), void 0 === i && (0, b.lm)(t) && (n = 'activity_end'), void 0 === t && (0, b.lm)(i) && i.userIds.size > 1 && (n = 'activity_user_join'), (0, b.lm)(i) && (0, b.lm)(t) && (i.userIds.size > t.userIds.size && (n = 'activity_user_join'), i.userIds.size < t.userIds.size && (n = 'activity_user_left'));
                }
                if (!c) {
                    e.connectedChannelActivities.length < a.length && e.channelActivities.length < l.length && (n = 'activity_launch');
                    let t = e.userConnectedActivity;
                    null == o && (0, b.lm)(t) && (n = 'activity_end'), (0, b.lm)(o) && (0, b.lm)(t) && (o.userIds.size > t.userIds.size && (n = 'activity_user_join'), o.userIds.size < t.userIds.size && (n = 'activity_user_left'));
                }
                return n;
            }
        ),
        null
    );
}
function w() {
    return (
        Z(
            [u.Z, v.Z],
            () => ({
                hangStatus: u.Z.getCurrentHangStatus(),
                customHangStatus: u.Z.getCustomHangStatus(),
                inVoice: null != v.Z.getVoiceChannelId()
            }),
            (e, t) => {
                var n, i;
                let { hangStatus: r, customHangStatus: l } = t;
                if (e.inVoice && ((null != r && r !== e.hangStatus) || (null != l && (l.status !== (null === (n = e.customHangStatus) || void 0 === n ? void 0 : n.status) || !a().isEqual(l.emoji, null === (i = e.customHangStatus) || void 0 === i ? void 0 : i.emoji))))) return 'hang_status_select';
            },
            0.15
        ),
        null
    );
}
function k() {
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(L, {}), (0, i.jsx)(y, {}), (0, i.jsx)(P, {}), (0, i.jsx)(O, {}), (0, i.jsx)(R, {}), (0, i.jsx)(D, {}), (0, i.jsx)(j, {}), (0, i.jsx)(M, {}), (0, i.jsx)(w, {})]
    });
}
