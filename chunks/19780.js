let r, i;
n(411104), n(724458);
var a,
    s,
    o,
    l,
    u = n(442837),
    c = n(570140),
    d = n(437263),
    f = n(764976),
    _ = n(646047),
    h = n(258609),
    p = n(338336),
    m = n(314897),
    g = n(938475),
    E = n(981631),
    v = n(65154);
let I = [],
    S = null,
    T = null,
    b = null,
    y = null,
    A = !1,
    N = !1;
function C(e, t) {
    if (null == i) throw Error('Creating RTCConnection without session.');
    let r = m.default.getId(),
        a = new (n(861687).Z)({
            userId: r,
            sessionId: i,
            guildId: e,
            channelId: t
        });
    return (
        a.on(d.z.State, (e, t, n) => {
            c.Z.wait(() =>
                c.Z.dispatch({
                    type: 'RTC_CONNECTION_STATE',
                    state: e,
                    ...t,
                    ...n
                })
            );
        }),
        a.on(d.z.Video, (e, t, n, r, i) => {
            c.Z.wait(() =>
                c.Z.dispatch({
                    type: 'RTC_CONNECTION_VIDEO',
                    guildId: e,
                    channelId: t,
                    userId: n,
                    streamId: r,
                    rtcServerId: i,
                    context: v.Yn.DEFAULT
                })
            );
        }),
        a.on(d.z.Ping, (e, t) => {
            c.Z.wait(() =>
                c.Z.dispatch({
                    type: 'RTC_CONNECTION_PING',
                    pings: e,
                    quality: t
                })
            );
        }),
        a.on(d.z.OutboundLossRate, (e) => {
            c.Z.wait(() =>
                c.Z.dispatch({
                    type: 'RTC_CONNECTION_LOSS_RATE',
                    lossRate: e
                })
            );
        }),
        a.on(d.z.Speaking, (e, t) => {
            null == b || b.setSpeaking(e, t);
        }),
        a.on(d.z.Flags, (e, t) => {
            c.Z.wait(() => {
                c.Z.dispatch({
                    type: 'RTC_CONNECTION_FLAGS',
                    flags: t,
                    userId: e,
                    guildId: a.guildId,
                    channelId: a.channelId,
                    context: a.context
                });
            });
        }),
        a.on(d.z.ClientConnect, (e) => {
            c.Z.wait(() => {
                c.Z.dispatch({
                    type: 'RTC_CONNECTION_CLIENT_CONNECT',
                    userIds: e,
                    guildId: a.guildId,
                    channelId: a.channelId,
                    context: a.context
                });
            });
        }),
        a.on(d.z.ClientDisconnect, (e) => {
            c.Z.wait(() => {
                c.Z.dispatch({
                    type: 'RTC_CONNECTION_CLIENT_DISCONNECT',
                    userId: e,
                    guildId: a.guildId,
                    channelId: a.channelId,
                    context: a.context
                });
            });
        }),
        a.on(d.z.Platform, (e, t, n) => {
            c.Z.wait(() => {
                c.Z.dispatch({
                    type: 'RTC_CONNECTION_PLATFORM',
                    platform: t,
                    userId: e,
                    channelId: n
                });
            });
        }),
        a.on(d.z.SecureFramesUpdate, () => {
            c.Z.wait(() => {
                c.Z.dispatch({ type: 'RTC_CONNECTION_SECURE_FRAMES_UPDATE' });
            });
        }),
        a.on(d.z.RosterMapUpdate, (e) => {
            c.Z.wait(() => {
                c.Z.dispatch({
                    type: 'RTC_CONNECTION_ROSTER_MAP_UPDATE',
                    userIds: e
                });
            });
        }),
        (b = new f.Z(m.default.getId(), t)),
        (y = null),
        (A = !1),
        (N = !1),
        a
    );
}
function R() {
    if (null == r) return !1;
    (y = r.getDuration()), r.destroy(), (r = null), (b = null);
}
function O() {
    S = null;
}
function D(e) {
    let { channel: t } = e;
    if (null == r || r.channelId !== t.id) return !1;
    R();
}
function L() {
    return !0;
}
class x extends (a = u.ZP.Store) {
    initialize() {
        this.waitFor(g.ZP), (0, p.r)(this.getRTCConnectionId, this.getMediaSessionId);
    }
    getRTCConnection() {
        return r;
    }
    getState() {
        return null != r ? r.state : E.hes.DISCONNECTED;
    }
    isConnected() {
        return this.getState() === E.hes.RTC_CONNECTED;
    }
    isDisconnected() {
        return this.getState() === E.hes.DISCONNECTED;
    }
    getRemoteDisconnectVoiceChannelId() {
        return S;
    }
    getLastSessionVoiceChannelId() {
        return T;
    }
    setLastSessionVoiceChannelId(e) {
        T = e;
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
        return null != r ? r.quality : E.IE4.UNKNOWN;
    }
    getPings() {
        return null != r ? r.getPings() : I;
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
        return null !== (e = null == r ? void 0 : r.getDuration()) && void 0 !== e ? e : y;
    }
    getPacketStats() {
        return null == r ? void 0 : r.getPacketStats();
    }
    getVoiceStateStats() {
        return null == b ? void 0 : b.getStats();
    }
    getWasEverMultiParticipant() {
        return A;
    }
    getWasEverRtcConnected() {
        return N;
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
(l = 'RTCConnectionStore'),
    (o = 'displayName') in (s = x)
        ? Object.defineProperty(s, o, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (s[o] = l);
let w = new x(
    c.Z,
    __OVERLAY__
        ? {}
        : {
              CONNECTION_OPEN: function (e) {
                  return (i = e.sessionId), (S = null), (T = null), R(), !1;
              },
              CONNECTION_CLOSED: function () {
                  (i = null), (S = null), (T = null), R();
              },
              RTC_CONNECTION_STATE: function (e) {
                  return e.state === E.hes.RTC_CONNECTED && (N = !0), !0;
              },
              RTC_CONNECTION_PING: L,
              RTC_CONNECTION_LOSS_RATE: L,
              RTC_CONNECTION_UPDATE_ID: function (e) {
                  return e.connection === r;
              },
              RTC_CONNECTION_SECURE_FRAMES_UPDATE: L,
              RTC_CONNECTION_CLIENT_CONNECT: L,
              RTC_CONNECTION_CLIENT_DISCONNECT: L,
              VIDEO_SIZE_UPDATE: function (e) {
                  let { streamId: t, pixelCount: n } = e;
                  null == r || r.setVideoSize(t, n);
              },
              VOICE_STATE_UPDATES: function (e) {
                  let { voiceStates: t } = e;
                  return t.reduce((e, t) => {
                      var n, a, s;
                      if ((null == b || b.updateVoiceStates(t.userId, t.channelId), (A = A || (null !== (n = null == b ? void 0 : b.getStats().max_voice_state_count) && void 0 !== n ? n : 0) > 1), m.default.getId() !== t.userId)) return !1;
                      if (null != r) t.sessionId === i ? ((null != t.guildId && t.guildId === r.guildId) || (null == t.guildId && t.channelId === r.channelId) ? (null == t.channelId ? R() : (r.channelId = t.channelId)) : ((t.guildId !== r.guildId && null == t.channelId) || R(), null != t.channelId && ((S = null), (T = null), (r = C(t.guildId, t.channelId)), (A = (null !== (a = null == b ? void 0 : b.getStats().max_voice_state_count) && void 0 !== a ? a : 0) > 1)))) : t.guildId === r.guildId && (!(null != h.Z.getAwaitingRemoteSessionInfo() && null != h.Z.getRemoteSessionId()) && (S = r.channelId), R());
                      else {
                          if (t.sessionId !== i || null == t.channelId) return e;
                          (S = null), (T = null), (r = C(t.guildId, t.channelId)), (A = (null !== (s = null == b ? void 0 : b.getStats().max_voice_state_count) && void 0 !== s ? s : 0) > 1);
                      }
                      return !0;
                  }, !1);
              },
              VOICE_CHANNEL_SELECT: function (e) {
                  let { channelId: t } = e;
                  if (null == r || (null != t && r.channelId === t)) return !1;
                  R();
              },
              VOICE_SERVER_UPDATE: function (e) {
                  if (null == r || (null != e.guildId && e.guildId !== r.guildId) || (null != e.channelId && e.channelId !== r.channelId)) return !1;
                  r.connect(e.endpoint, e.token);
              },
              CLEAR_REMOTE_DISCONNECT_VOICE_CHANNEL_ID: O,
              REMOTE_SESSION_CONNECT: O,
              CLEAR_LAST_SESSION_VOICE_CHANNEL_ID: function () {
                  T = null;
              },
              GUILD_DELETE: function (e) {
                  let { guild: t } = e;
                  if (null == r || r.guildId !== t.id) return !1;
                  R();
              },
              CHANNEL_DELETE: D,
              THREAD_DELETE: D,
              CALL_DELETE: function (e) {
                  let { channelId: t } = e;
                  if (null == r || r.channelId !== t) return !1;
                  R();
              },
              APP_STATE_UPDATE: function (e) {
                  if (null != r) {
                      let t = e.state === E.$7l.BACKGROUND,
                          n = _.Z.isEnabled();
                      r.setAppBackgrounded(t, n);
                  }
                  return e.state === E.$7l.ACTIVE && null != r && r.resetBackoff('App state is active'), !1;
              },
              RTC_DEBUG_SET_SIMULCAST_OVERRIDE: function (e) {
                  let { userId: t, context: n, quality: i } = e;
                  null == r || r.setSimulcastDebugOverride(t, n, i);
              }
          }
);
Promise.resolve()
    .then(n.bind(n, 626135))
    .then((e) => {
        let { addExtraAnalyticsDecorator: t } = e;
        t((e) => {
            e.client_rtc_state = w.getState();
        });
    }),
    (t.Z = w);
