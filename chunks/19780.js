let r, i;
var a,
    o = n(411104);
var s = n(724458);
var l = n(442837),
    u = n(570140),
    c = n(437263),
    d = n(764976),
    _ = n(646047),
    E = n(258609),
    f = n(338336),
    h = n(314897),
    p = n(938475),
    m = n(981631),
    I = n(65154);
function T(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let g = [],
    S = null,
    A = null,
    v = null,
    N = null,
    O = !1,
    R = !1;
function C(e, t) {
    if (null == i) throw Error('Creating RTCConnection without session.');
    let r = h.default.getId(),
        a = new (n(861687).Z)({
            userId: r,
            sessionId: i,
            guildId: e,
            channelId: t
        });
    return (
        a.on(c.z.State, (e, t, n) => {
            u.Z.wait(() =>
                u.Z.dispatch({
                    type: 'RTC_CONNECTION_STATE',
                    state: e,
                    ...t,
                    ...n
                })
            );
        }),
        a.on(c.z.Video, (e, t, n, r, i) => {
            u.Z.wait(() =>
                u.Z.dispatch({
                    type: 'RTC_CONNECTION_VIDEO',
                    guildId: e,
                    channelId: t,
                    userId: n,
                    streamId: r,
                    rtcServerId: i,
                    context: I.Yn.DEFAULT
                })
            );
        }),
        a.on(c.z.Ping, (e, t) => {
            u.Z.wait(() =>
                u.Z.dispatch({
                    type: 'RTC_CONNECTION_PING',
                    pings: e,
                    quality: t
                })
            );
        }),
        a.on(c.z.OutboundLossRate, (e) => {
            u.Z.wait(() =>
                u.Z.dispatch({
                    type: 'RTC_CONNECTION_LOSS_RATE',
                    lossRate: e
                })
            );
        }),
        a.on(c.z.Speaking, (e, t) => {
            null == v || v.setSpeaking(e, t);
        }),
        a.on(c.z.Flags, (e, t) => {
            u.Z.wait(() => {
                u.Z.dispatch({
                    type: 'RTC_CONNECTION_FLAGS',
                    flags: t,
                    userId: e,
                    guildId: a.guildId,
                    channelId: a.channelId,
                    context: a.context
                });
            });
        }),
        a.on(c.z.ClientConnect, (e) => {
            u.Z.wait(() => {
                u.Z.dispatch({
                    type: 'RTC_CONNECTION_CLIENT_CONNECT',
                    userIds: e,
                    guildId: a.guildId,
                    channelId: a.channelId,
                    context: a.context
                });
            });
        }),
        a.on(c.z.ClientDisconnect, (e) => {
            u.Z.wait(() => {
                u.Z.dispatch({
                    type: 'RTC_CONNECTION_CLIENT_DISCONNECT',
                    userId: e,
                    guildId: a.guildId,
                    channelId: a.channelId,
                    context: a.context
                });
            });
        }),
        a.on(c.z.Platform, (e, t, n) => {
            u.Z.wait(() => {
                u.Z.dispatch({
                    type: 'RTC_CONNECTION_PLATFORM',
                    platform: t,
                    userId: e,
                    channelId: n
                });
            });
        }),
        a.on(c.z.SecureFramesUpdate, () => {
            u.Z.wait(() => {
                u.Z.dispatch({ type: 'RTC_CONNECTION_SECURE_FRAMES_UPDATE' });
            });
        }),
        a.on(c.z.RosterMapUpdate, (e) => {
            u.Z.wait(() => {
                u.Z.dispatch({
                    type: 'RTC_CONNECTION_ROSTER_MAP_UPDATE',
                    userIds: e
                });
            });
        }),
        (v = new d.Z(h.default.getId(), t)),
        (N = null),
        (O = !1),
        (R = !1),
        a
    );
}
function y() {
    if (null == r) return !1;
    (N = r.getDuration()), r.destroy(), (r = null), (v = null);
}
function b(e) {
    return (i = e.sessionId), (S = null), (A = null), y(), !1;
}
function L() {
    (i = null), (S = null), (A = null), y();
}
function D(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        var n, a, o;
        if ((null == v || v.updateVoiceStates(t.userId, t.channelId), (O = O || (null !== (n = null == v ? void 0 : v.getStats().max_voice_state_count) && void 0 !== n ? n : 0) > 1), h.default.getId() !== t.userId)) return !1;
        if (null != r) t.sessionId === i ? ((null != t.guildId && t.guildId === r.guildId) || (null == t.guildId && t.channelId === r.channelId) ? (null == t.channelId ? y() : (r.channelId = t.channelId)) : ((t.guildId !== r.guildId && null == t.channelId) || y(), null != t.channelId && ((S = null), (A = null), (r = C(t.guildId, t.channelId)), (O = (null !== (a = null == v ? void 0 : v.getStats().max_voice_state_count) && void 0 !== a ? a : 0) > 1)))) : t.guildId === r.guildId && (!(null != E.Z.getAwaitingRemoteSessionInfo() && null != E.Z.getRemoteSessionId()) && (S = r.channelId), y());
        else {
            if (t.sessionId !== i || null == t.channelId) return e;
            (S = null), (A = null), (r = C(t.guildId, t.channelId)), (O = (null !== (o = null == v ? void 0 : v.getStats().max_voice_state_count) && void 0 !== o ? o : 0) > 1);
        }
        return !0;
    }, !1);
}
function M(e) {
    if (null == r || (null != e.guildId && e.guildId !== r.guildId) || (null != e.channelId && e.channelId !== r.channelId)) return !1;
    r.connect(e.endpoint, e.token);
}
function P() {
    S = null;
}
function U() {
    A = null;
}
function w(e) {
    let { guild: t } = e;
    if (null == r || r.guildId !== t.id) return !1;
    y();
}
function x(e) {
    let { channelId: t } = e;
    if (null == r || r.channelId !== t) return !1;
    y();
}
function G(e) {
    let { channel: t } = e;
    if (null == r || r.channelId !== t.id) return !1;
    y();
}
function k(e) {
    let { channelId: t } = e;
    if (null == r || (null != t && r.channelId === t)) return !1;
    y();
}
function B(e) {
    if (null != r) {
        let t = e.state === m.$7l.BACKGROUND,
            n = _.Z.isEnabled();
        r.setAppBackgrounded(t, n);
    }
    return e.state === m.$7l.ACTIVE && null != r && r.resetBackoff('App state is active'), !1;
}
function F(e) {
    return e.state === m.hes.RTC_CONNECTED && (R = !0), !0;
}
function Z() {
    return !0;
}
function V(e) {
    return e.connection === r;
}
function H(e) {
    let { userId: t, context: n, quality: i } = e;
    null == r || r.setSimulcastDebugOverride(t, n, i);
}
class Y extends (a = l.ZP.Store) {
    initialize() {
        this.waitFor(p.ZP), (0, f.r)(this.getRTCConnectionId, this.getMediaSessionId);
    }
    getRTCConnection() {
        return r;
    }
    getState() {
        return null != r ? r.state : m.hes.DISCONNECTED;
    }
    isConnected() {
        return this.getState() === m.hes.RTC_CONNECTED;
    }
    isDisconnected() {
        return this.getState() === m.hes.DISCONNECTED;
    }
    getRemoteDisconnectVoiceChannelId() {
        return S;
    }
    getLastSessionVoiceChannelId() {
        return A;
    }
    setLastSessionVoiceChannelId(e) {
        A = e;
    }
    getGuildId() {
        return null == r ? void 0 : r.guildId;
    }
    getChannelId() {
        return null == r ? void 0 : r.channelId;
    }
    getHostname() {
        return null != r ? r.hostname : '';
    }
    getQuality() {
        return null != r ? r.quality : m.IE4.UNKNOWN;
    }
    getPings() {
        return null != r ? r.getPings() : g;
    }
    getAveragePing() {
        return null != r ? (null == r ? void 0 : r.getAveragePing()) : 0;
    }
    getLastPing() {
        return null == r ? void 0 : r.getLastPing();
    }
    getOutboundLossRate() {
        return null == r ? void 0 : r.getOutboundLossRate();
    }
    getMediaSessionId() {
        return null == r ? void 0 : r.getMediaSessionId();
    }
    getRTCConnectionId() {
        return null == r ? void 0 : r.getRTCConnectionId();
    }
    getDuration() {
        var e;
        return null !== (e = null == r ? void 0 : r.getDuration()) && void 0 !== e ? e : N;
    }
    getPacketStats() {
        return null == r ? void 0 : r.getPacketStats();
    }
    getVoiceStateStats() {
        return null == v ? void 0 : v.getStats();
    }
    getWasEverMultiParticipant() {
        return O;
    }
    getWasEverRtcConnected() {
        return R;
    }
    getUserIds() {
        return null == r ? void 0 : r.getUserIds();
    }
    isUserConnected(e) {
        return null == r ? void 0 : r.getIsUserConnected(e);
    }
    getSecureFramesState() {
        return null == r ? void 0 : r.getSecureFramesState();
    }
    getSecureFramesRosterMapEntry(e) {
        let t = null == r ? void 0 : r.getSecureFramesRosterMap();
        return null == t ? void 0 : t.get(e);
    }
}
T(Y, 'displayName', 'RTCConnectionStore');
let j = new Y(
    u.Z,
    __OVERLAY__
        ? {}
        : {
              CONNECTION_OPEN: b,
              CONNECTION_CLOSED: L,
              RTC_CONNECTION_STATE: F,
              RTC_CONNECTION_PING: Z,
              RTC_CONNECTION_LOSS_RATE: Z,
              RTC_CONNECTION_UPDATE_ID: V,
              RTC_CONNECTION_SECURE_FRAMES_UPDATE: Z,
              RTC_CONNECTION_CLIENT_CONNECT: Z,
              RTC_CONNECTION_CLIENT_DISCONNECT: Z,
              VOICE_STATE_UPDATES: D,
              VOICE_CHANNEL_SELECT: k,
              VOICE_SERVER_UPDATE: M,
              CLEAR_REMOTE_DISCONNECT_VOICE_CHANNEL_ID: P,
              REMOTE_SESSION_CONNECT: P,
              CLEAR_LAST_SESSION_VOICE_CHANNEL_ID: U,
              GUILD_DELETE: w,
              CHANNEL_DELETE: G,
              THREAD_DELETE: G,
              CALL_DELETE: x,
              APP_STATE_UPDATE: B,
              RTC_DEBUG_SET_SIMULCAST_OVERRIDE: H
          }
);
Promise.resolve()
    .then(n.bind(n, 626135))
    .then((e) => {
        let { addExtraAnalyticsDecorator: t } = e;
        t((e) => {
            e.client_rtc_state = j.getState();
        });
    }),
    (t.Z = j);
