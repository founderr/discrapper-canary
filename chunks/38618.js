n(724458);
var r,
    i,
    a,
    s,
    o = n(392711),
    l = n.n(o),
    u = n(442837),
    c = n(570140),
    d = n(287734),
    f = n(710845),
    _ = n(569545),
    p = n(581883),
    h = n(314897),
    m = n(523746),
    g = n(592125),
    E = n(131951),
    v = n(19780),
    I = n(936349),
    T = n(944486),
    b = n(885110),
    S = n(959457),
    y = n(358085),
    A = n(138859),
    N = n(955132),
    C = n(645436),
    R = n(344651),
    O = n(981631),
    D = n(526761);
let L = window.DiscordNative;
N.Wb.dispatcher.getDispatchHandler = R.Z;
let x = new f.Z('ConnectionStore'),
    w = 0,
    P = null,
    M = !0,
    k = null;
async function U(e) {
    (w = Date.now()), (P = e.sessionId), N.RR.handleConnectionOpen();
    let t = {},
        n = T.Z.getVoiceChannelId();
    if (null != n) {
        var r, i, a, s, o, l, u, c;
        if ((null === (o = window) || void 0 === o ? void 0 : null === (s = o.performance) || void 0 === s ? void 0 : null === (a = s.getEntriesByType) || void 0 === a ? void 0 : null === (i = a.call(s, 'navigation')) || void 0 === i ? void 0 : null === (r = i[0]) || void 0 === r ? void 0 : r.type) === 'reload' || (null === (l = await (null == L ? void 0 : null === (c = L.processUtils) || void 0 === c ? void 0 : null === (u = c.getLastCrash) || void 0 === u ? void 0 : u.call(c))) || void 0 === l ? void 0 : l.rendererCrashReason) != null || !M) {
            let e = g.Z.getChannel(n);
            null != e &&
                (t = {
                    guildId: e.getGuildId(),
                    channelId: n
                });
        } else v.Z.setLastSessionVoiceChannelId(null != n ? n : null), d.default.selectVoiceChannel(null);
    }
    N.GC.update(t, !0), (M = !1);
}
function B() {
    N.GC.update();
}
function G() {
    return N.GC.update(), !1;
}
function Z() {
    return N.RR.update(), !1;
}
function F(e) {
    N.Wb.isSessionEstablished() && N.Wb.streamDelete(e);
}
class V extends (r = u.ZP.Store) {
    initialize() {
        this.waitFor(h.default, T.Z, g.Z, m.Z, p.Z), this.syncWith([E.Z], G), this.syncWith([b.Z], Z);
    }
    getSocket() {
        return N.Wb;
    }
    isTryingToConnect() {
        return !N.Wb.isClosed();
    }
    isConnected() {
        return N.Wb.isSessionEstablished();
    }
    isConnectedOrOverlay() {
        return N.Wb.isSessionEstablished() || __OVERLAY__;
    }
    lastTimeConnectedChanged() {
        return w;
    }
}
(s = 'GatewayConnectionStore'),
    (a = 'displayName') in (i = V)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new V(c.Z, {
        START_SESSION: function () {
            return N.Wb.isClosed() ? (x.verbose('Socket is reconnecting because of starting new session'), N.Wb.connect()) : (x.verbose('Socket is not reconnecting during a new session because it is not closed'), !1);
        },
        LOGIN_SUCCESS: function () {
            return x.verbose('session refresh dispatched', { isEstablished: N.Wb.isSessionEstablished() }), !!N.Wb.isSessionEstablished() && (N.Wb.close(), N.Wb.connect());
        },
        LOGOUT: function (e) {
            e.isSwitchingAccount && N.RR.handleAccountSwitch(), x.verbose('Closing socket because of logout'), N.Wb.close();
        },
        CLEAR_CACHES: function (e) {
            return e.resetSocket && (N.Wb.close(), N.Wb.dispatcher.clear(), N.Wb.connect()), !1;
        },
        CONNECTION_OPEN: (e) => {
            U(e);
        },
        CONNECTION_CLOSED: function () {
            x.verbose('connection closed dispatched'), (w = Date.now());
        },
        RTC_CONNECTION_STATE: function (e) {
            if (e.state !== O.hes.DISCONNECTED) return !1;
            e.willReconnect && (null != e.streamKey ? N.Wb.streamPing(e.streamKey) : N.Wb.voiceServerPing());
        },
        VOICE_CHANNEL_SELECT: function (e) {
            return (
                N.GC.update({
                    guildId: e.guildId,
                    channelId: e.channelId
                }),
                (0, y.isIOS)() && k === O.$7l.BACKGROUND && (null == e.channelId ? N.Wb.close(!0) : N.Wb.isClosed() && (C.Y(!1), N.Wb.connect())),
                !1
            );
        },
        VOICE_STATE_UPDATES: function (e) {
            let { voiceStates: t } = e;
            return t.reduce((e, t) => {
                if (h.default.getId() !== t.userId) return e;
                if (t.sessionId === P)
                    N.GC.setState({
                        guildId: t.guildId,
                        channelId: t.channelId
                    });
                else {
                    if (t.guildId !== N.GC.guildId) return e;
                    N.GC.setState({
                        guildId: null,
                        channelId: null
                    });
                }
                return !0;
            }, !1);
        },
        GUILD_DELETE: function (e) {
            e.guild.id === N.GC.guildId &&
                N.GC.setState({
                    guildId: null,
                    channelId: null
                });
        },
        CHANNEL_DELETE: function (e) {
            let { channel: t } = e;
            t.id === N.GC.channelId &&
                N.GC.setState({
                    guildId: null,
                    channelId: null
                });
        },
        CALL_DELETE: function (e) {
            let { channelId: t } = e;
            t === N.GC.channelId &&
                N.GC.setState({
                    guildId: null,
                    channelId: null
                });
        },
        APP_STATE_UPDATE: function (e) {
            return (0, y.isIOS)() ? (h.default.isAuthenticated() && (k === O.$7l.INACTIVE && e.state === O.$7l.BACKGROUND && null == N.GC.channelId ? N.Wb.close(!0) : k === O.$7l.BACKGROUND && e.state === O.$7l.ACTIVE && N.Wb.isClosed() && (C.Y(!1), N.Wb.connect())), (k = e.state)) : e.state === O.$7l.ACTIVE && (C.Y(!1), h.default.isAuthenticated() && N.Wb.resetBackoff('App state is active')), !1;
        },
        GUILD_MEMBERS_REQUEST: function (e) {
            return (
                N.Wb.isSessionEstablished() &&
                    ('userIds' in e
                        ? l()(e.userIds)
                              .chunk(100)
                              .forEach((t) => {
                                  N.Wb.requestGuildMembers(e.guildIds, {
                                      userIds: t,
                                      presences: !!e.presences
                                  });
                              })
                        : N.Wb.requestGuildMembers(e.guildIds, {
                              query: e.query,
                              limit: e.limit,
                              presences: !!e.presences
                          })),
                !1
            );
        },
        GUILD_SEARCH_RECENT_MEMBERS: function (e) {
            let { guildId: t, query: n, continuationToken: r } = e;
            N.Wb.isSessionEstablished() &&
                N.Wb.searchRecentMembers(t, {
                    query: n,
                    continuationToken: r
                });
        },
        GUILD_SUBSCRIPTIONS_FLUSH: function (e) {
            let { subscriptions: t } = e;
            return N.Wb.isSessionEstablished() && N.Wb.updateGuildSubscriptions(t), !1;
        },
        CALL_CONNECT: function (e) {
            let { channelId: t } = e;
            return N.Wb.isSessionEstablished() && N.Wb.callConnect(t), !1;
        },
        CALL_CONNECT_MULTIPLE: function (e) {
            let { channelIds: t } = e;
            return (
                N.Wb.isSessionEstablished() &&
                    t.forEach((e) => {
                        N.Wb.callConnect(e);
                    }),
                !1
            );
        },
        STREAM_CREATE: B,
        STREAM_START: function (e) {
            let { streamType: t, guildId: n, channelId: r } = e;
            if (N.Wb.isSessionEstablished()) {
                var i, a;
                let e = null != n ? (null === (i = g.Z.getChannel(r)) || void 0 === i ? void 0 : i.rtcRegion) : null === (a = m.Z.getCall(r)) || void 0 === a ? void 0 : a.region;
                N.Wb.streamCreate(t, n, r, null != e ? e : I.Z.getPreferredRegion());
            }
            return !1;
        },
        STREAM_WATCH: function (e) {
            let { streamKey: t, allowMultiple: n } = e;
            return (
                N.Wb.isSessionEstablished() &&
                    (n ||
                        !(function () {
                            let e = (function () {
                                return S.Z.getAllActiveStreamKeys().find((e) => (0, _.my)(e).ownerId === h.default.getId());
                            })();
                            S.Z.getAllActiveStreamKeys()
                                .filter((t) => t !== e)
                                .forEach((e) => F(e));
                        })(),
                    N.Wb.streamWatch(t)),
                !1
            );
        },
        STREAM_STOP: function (e) {
            let { streamKey: t } = e;
            return F(t), B(), !1;
        },
        STREAM_SET_PAUSED: function (e) {
            let { streamKey: t, paused: n } = e;
            N.Wb.isSessionEstablished() && N.Wb.streamSetPaused(t, n);
        },
        PUSH_NOTIFICATION_CLICK: function () {
            return N.Wb.expeditedHeartbeat(5000, 'user clicked on notification', !0), !1;
        },
        REQUEST_FORUM_UNREADS: function (e) {
            let { guildId: t, channelId: n, threads: r } = e;
            N.Wb.requestForumUnreads(t, n, r);
        },
        REQUEST_SOUNDBOARD_SOUNDS: function (e) {
            let { guildIds: t } = e;
            N.Wb.requestSoundboardSounds(t);
        },
        REMOTE_COMMAND: function (e) {
            let { sessionId: t, payload: n } = e;
            return N.Wb.isSessionEstablished() && N.Wb.remoteCommand(t, n), !1;
        },
        RESET_SOCKET: function (e) {
            if (N.Wb.connectionState !== A.Z.WILL_RECONNECT) N.Wb.resetSocketOnError(e.args);
        },
        CLIPS_SETTINGS_UPDATE: B,
        RUNNING_GAMES_CHANGE: B,
        USER_SETTINGS_PROTO_UPDATE: function (e) {
            var t;
            e.settings.type === D.yP.PRELOADED_USER_SETTINGS && (null === (t = e.settings.proto.clips) || void 0 === t ? void 0 : t.allowVoiceRecording) != null && B();
        }
    }));
