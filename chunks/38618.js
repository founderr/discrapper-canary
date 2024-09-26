var r,
    i = n(724458);
var a = n(392711),
    o = n.n(a),
    s = n(442837),
    l = n(570140),
    u = n(287734),
    c = n(710845),
    d = n(569545),
    _ = n(581883),
    E = n(314897),
    f = n(523746),
    h = n(592125),
    p = n(131951),
    m = n(19780),
    I = n(936349),
    T = n(944486),
    g = n(885110),
    S = n(959457),
    A = n(358085),
    v = n(138859),
    N = n(955132),
    O = n(645436),
    R = n(344651),
    C = n(981631),
    y = n(526761);
function L(e, t, n) {
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
let b = window.DiscordNative;
N.Wb.dispatcher.getDispatchHandler = R.Z;
let D = new c.Z('ConnectionStore'),
    M = 100,
    P = 0,
    U = null,
    w = !0,
    x = null;
function G() {
    return N.Wb.isClosed() ? (D.verbose('Socket is reconnecting because of starting new session'), N.Wb.connect()) : (D.verbose('Socket is not reconnecting during a new session because it is not closed'), !1);
}
function k(e) {
    e.isSwitchingAccount && N.RR.handleAccountSwitch(), D.verbose('Closing socket because of logout'), N.Wb.close();
}
function B() {
    return D.verbose('session refresh dispatched', { isEstablished: N.Wb.isSessionEstablished() }), !!N.Wb.isSessionEstablished() && (N.Wb.close(), N.Wb.connect());
}
async function F(e) {
    (P = Date.now()), (U = e.sessionId), N.RR.handleConnectionOpen();
    let t = {},
        n = T.Z.getVoiceChannelId();
    if (null != n) {
        var r, i, a, o, s, l, c, d;
        if ((null === (s = window) || void 0 === s ? void 0 : null === (o = s.performance) || void 0 === o ? void 0 : null === (a = o.getEntriesByType) || void 0 === a ? void 0 : null === (i = a.call(o, 'navigation')) || void 0 === i ? void 0 : null === (r = i[0]) || void 0 === r ? void 0 : r.type) === 'reload' || (null === (l = await (null == b ? void 0 : null === (d = b.processUtils) || void 0 === d ? void 0 : null === (c = d.getLastCrash) || void 0 === c ? void 0 : c.call(d))) || void 0 === l ? void 0 : l.rendererCrashReason) != null || !w) {
            let e = h.Z.getChannel(n);
            null != e &&
                (t = {
                    guildId: e.getGuildId(),
                    channelId: n
                });
        } else m.Z.setLastSessionVoiceChannelId(null != n ? n : null), u.default.selectVoiceChannel(null);
    }
    N.GC.update(t, !0), (w = !1);
}
function Z() {
    D.verbose('connection closed dispatched'), (P = Date.now());
}
function V(e) {
    return e.resetSocket && (N.Wb.close(), N.Wb.dispatcher.clear(), N.Wb.connect()), !1;
}
function H(e) {
    return (
        N.GC.update({
            guildId: e.guildId,
            channelId: e.channelId
        }),
        (0, A.isIOS)() && x === C.$7l.BACKGROUND && (null == e.channelId ? N.Wb.close(!0) : N.Wb.isClosed() && (O.Y(!1), N.Wb.connect())),
        !1
    );
}
function Y() {
    N.GC.update();
}
function j(e) {
    var t;
    e.settings.type === y.yP.PRELOADED_USER_SETTINGS && (null === (t = e.settings.proto.clips) || void 0 === t ? void 0 : t.allowVoiceRecording) != null && Y();
}
function W(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        if (E.default.getId() !== t.userId) return e;
        if (t.sessionId === U)
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
}
function K(e) {
    e.guild.id === N.GC.guildId &&
        N.GC.setState({
            guildId: null,
            channelId: null
        });
}
function z(e) {
    let { channelId: t } = e;
    t === N.GC.channelId &&
        N.GC.setState({
            guildId: null,
            channelId: null
        });
}
function q(e) {
    let { channel: t } = e;
    t.id === N.GC.channelId &&
        N.GC.setState({
            guildId: null,
            channelId: null
        });
}
function Q(e) {
    if (e.state !== C.hes.DISCONNECTED) return !1;
    e.willReconnect && (null != e.streamKey ? N.Wb.streamPing(e.streamKey) : N.Wb.voiceServerPing());
}
function X(e) {
    return (0, A.isIOS)() ? (E.default.isAuthenticated() && (x === C.$7l.INACTIVE && e.state === C.$7l.BACKGROUND && null == N.GC.channelId ? N.Wb.close(!0) : x === C.$7l.BACKGROUND && e.state === C.$7l.ACTIVE && N.Wb.isClosed() && (O.Y(!1), N.Wb.connect())), (x = e.state)) : e.state === C.$7l.ACTIVE && (O.Y(!1), E.default.isAuthenticated() && N.Wb.resetBackoff('App state is active')), !1;
}
function $() {
    return N.GC.update(), !1;
}
function J() {
    return N.RR.update(), !1;
}
function ee(e) {
    return (
        N.Wb.isSessionEstablished() &&
            ('userIds' in e
                ? o()(e.userIds)
                      .chunk(M)
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
}
function et(e) {
    let { guildId: t, query: n, continuationToken: r } = e;
    N.Wb.isSessionEstablished() &&
        N.Wb.searchRecentMembers(t, {
            query: n,
            continuationToken: r
        });
}
function en(e) {
    let { subscriptions: t } = e;
    return N.Wb.isSessionEstablished() && N.Wb.updateGuildSubscriptions(t), !1;
}
function er(e) {
    let { channelId: t } = e;
    return N.Wb.isSessionEstablished() && N.Wb.callConnect(t), !1;
}
function ei(e) {
    let { channelIds: t } = e;
    return (
        N.Wb.isSessionEstablished() &&
            t.forEach((e) => {
                N.Wb.callConnect(e);
            }),
        !1
    );
}
function ea(e) {
    let { sessionId: t, payload: n } = e;
    return N.Wb.isSessionEstablished() && N.Wb.remoteCommand(t, n), !1;
}
function eo(e) {
    N.Wb.isSessionEstablished() && N.Wb.streamDelete(e);
}
function es() {
    let e = el();
    S.Z.getAllActiveStreamKeys()
        .filter((t) => t !== e)
        .forEach((e) => eo(e));
}
function el() {
    return S.Z.getAllActiveStreamKeys().find((e) => (0, d.my)(e).ownerId === E.default.getId());
}
function eu(e) {
    let { streamType: t, guildId: n, channelId: r } = e;
    if (N.Wb.isSessionEstablished()) {
        var i, a;
        let e = null != n ? (null === (i = h.Z.getChannel(r)) || void 0 === i ? void 0 : i.rtcRegion) : null === (a = f.Z.getCall(r)) || void 0 === a ? void 0 : a.region;
        N.Wb.streamCreate(t, n, r, null != e ? e : I.Z.getPreferredRegion());
    }
    return !1;
}
function ec(e) {
    let { streamKey: t, paused: n } = e;
    N.Wb.isSessionEstablished() && N.Wb.streamSetPaused(t, n);
}
function ed(e) {
    let { streamKey: t, allowMultiple: n } = e;
    return N.Wb.isSessionEstablished() && (n || es(), N.Wb.streamWatch(t)), !1;
}
function e_(e) {
    let { streamKey: t } = e;
    return eo(t), Y(), !1;
}
function eE() {
    return N.Wb.expeditedHeartbeat(5000, 'user clicked on notification', !0), !1;
}
function ef(e) {
    let { guildId: t, channelId: n, threads: r } = e;
    N.Wb.requestForumUnreads(t, n, r);
}
function eh(e) {
    if (N.Wb.connectionState !== v.Z.WILL_RECONNECT) N.Wb.resetSocketOnError(e.args);
}
function ep(e) {
    let { guildIds: t } = e;
    N.Wb.requestSoundboardSounds(t);
}
class em extends (r = s.ZP.Store) {
    initialize() {
        this.waitFor(E.default, T.Z, h.Z, f.Z, _.Z), this.syncWith([p.Z], $), this.syncWith([g.Z], J);
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
        return P;
    }
}
L(em, 'displayName', 'GatewayConnectionStore'),
    (t.Z = new em(l.Z, {
        START_SESSION: G,
        LOGIN_SUCCESS: B,
        LOGOUT: k,
        CLEAR_CACHES: V,
        CONNECTION_OPEN: (e) => {
            F(e);
        },
        CONNECTION_CLOSED: Z,
        RTC_CONNECTION_STATE: Q,
        VOICE_CHANNEL_SELECT: H,
        VOICE_STATE_UPDATES: W,
        GUILD_DELETE: K,
        CHANNEL_DELETE: q,
        CALL_DELETE: z,
        APP_STATE_UPDATE: X,
        GUILD_MEMBERS_REQUEST: ee,
        GUILD_SEARCH_RECENT_MEMBERS: et,
        GUILD_SUBSCRIPTIONS_FLUSH: en,
        CALL_CONNECT: er,
        CALL_CONNECT_MULTIPLE: ei,
        STREAM_CREATE: Y,
        STREAM_START: eu,
        STREAM_WATCH: ed,
        STREAM_STOP: e_,
        STREAM_SET_PAUSED: ec,
        PUSH_NOTIFICATION_CLICK: eE,
        REQUEST_FORUM_UNREADS: ef,
        REQUEST_SOUNDBOARD_SOUNDS: ep,
        REMOTE_COMMAND: ea,
        RESET_SOCKET: eh,
        CLIPS_SETTINGS_UPDATE: Y,
        RUNNING_GAMES_CHANGE: Y,
        USER_SETTINGS_PROTO_UPDATE: j
    }));
