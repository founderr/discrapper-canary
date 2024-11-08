n(47120);
var r = n(512722),
    i = n.n(r),
    a = n(846519),
    s = n(668781),
    o = n(846027),
    l = n(147913),
    u = n(710845),
    c = n(314897),
    d = n(131951),
    f = n(19780),
    _ = n(797258),
    h = n(979651),
    p = n(823379),
    m = n(254238),
    g = n(607214),
    E = n(258609),
    v = n(565473),
    I = n(444092),
    S = n(927923),
    b = n(65154),
    T = n(388032);
function y(e, t, n) {
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
let A = new u.Z('GameConsoleManager');
async function N(e) {
    let t = f.Z.getChannelId();
    i()(null == t, 'Syncing to remote while in voice!'), e.selfMute !== d.Z.isSelfMute() && (await o.Z.toggleSelfMute({ syncRemote: !1 })), e.selfDeaf !== d.Z.isSelfDeaf() && o.Z.toggleSelfDeaf({ syncRemote: !1 });
}
class C extends l.Z {
    constructor(...e) {
        super(...e),
            y(this, 'rollbackCommandTimeout', new a.V7()),
            y(this, 'awaitRemoteTimeout', new a.V7()),
            y(this, 'actions', {
                WAIT_FOR_REMOTE_SESSION: () => this.handleWaitForRemoteSession(),
                POST_CONNECTION_OPEN: () => this.handleSessionsChanged(),
                SESSIONS_REPLACE: () => this.handleSessionsChanged(),
                AUDIO_TOGGLE_SELF_DEAF: (e) => this.handleAudioStateToggle(e),
                AUDIO_TOGGLE_SELF_MUTE: (e) => this.handleAudioStateToggle(e),
                VOICE_STATE_UPDATES: (e) => this.handleVoiceStateUpdates(e),
                CONSOLE_COMMAND_UPDATE: (e) => this.handleConsoleCommandUpdate(e),
                PASSIVE_UPDATE_V2: (e) => this.handleVoiceStateUpdates(e),
                REMOTE_SESSION_DISCONNECT: () => this.handleRemoteSessionDisconnect()
            }),
            y(this, 'maybeConnect', (e) => {
                let t = (function (e) {
                    let t = E.Z.getAwaitingRemoteSessionInfo();
                    return e.find((e) => {
                        let n = S.al.has(e.clientInfo.os),
                            r = null != h.Z.getVoiceStateForSession(c.default.getId(), e.sessionId),
                            i = null == t || (0, v.y)(t.type) === e.clientInfo.os;
                        return n && i && r;
                    });
                })(e);
                if (null == t) return null;
                this.awaitRemoteTimeout.stop(), (0, m.ef)(t.sessionId);
                let n = h.Z.getVoiceStateForSession(c.default.getId(), t.sessionId);
                null != n && N(n);
            }),
            y(this, 'handleAudioStateToggle', (e) => {
                let { syncRemote: t, context: n } = e;
                if (!t || n !== b.Yn.DEFAULT) return;
                let r = d.Z.isSelfDeaf(),
                    i = d.Z.isSelfMute(),
                    a = c.default.getId(),
                    s = E.Z.getRemoteSessionId();
                if (null == s) return;
                let o = h.Z.getVoiceStateForSession(a, s);
                if (null != o)
                    (o.selfDeaf !== r || o.selfMute !== i) &&
                        ((0, m.Vv)(s, {
                            selfDeaf: r,
                            selfMute: i
                        }),
                        this.rollbackCommandTimeout.start(3000, () => {
                            N(o);
                        }));
            }),
            y(this, 'handleVoiceStateUpdates', (e) => {
                let t = e.voiceStates,
                    n = E.Z.getRemoteSessionId();
                if (null == n) {
                    let e = t
                        .map((e) => {
                            let { sessionId: t } = e;
                            return null != t ? _.Z.getSessionById(t) : null;
                        })
                        .filter(p.lm);
                    return this.maybeConnect(e);
                }
                let r = t.find((e) => {
                    let { sessionId: t } = e;
                    return t === n;
                });
                null != r && (this.rollbackCommandTimeout.stop(), N(r));
            }),
            y(this, 'handleSessionsChanged', () => {
                let e = E.Z.getRemoteSessionId();
                null != e && null == _.Z.getSessionById(e) && (0, m.s6)(), null == e && this.maybeConnect(Object.values(_.Z.getSessions()));
            }),
            y(this, 'handleWaitForRemoteSession', () => {
                this.awaitRemoteTimeout.start(60000, () => {
                    (0, m.s6)(),
                        s.Z.show({
                            title: T.intl.string(T.t.wGMxr6),
                            body: T.intl.string(T.t.i5k8b2)
                        });
                });
            }),
            y(this, 'handleConsoleCommandUpdate', (e) => {
                var t;
                let { id: n, result: r, error: i } = e;
                if (('failed' !== r && 'n/a' !== r) || null == i) return;
                A.info('Console command Error result:', r, i);
                let a = E.Z.getAwaitingRemoteSessionInfo();
                if ((null == a ? void 0 : a.commandId) !== n) return;
                let s = E.Z.getDevice(a.type, null !== (t = a.deviceId) && void 0 !== t ? t : ''),
                    o = (0, I.Z)(
                        null != s
                            ? s
                            : {
                                  id: 'id',
                                  platform: T.intl.string(T.t['UQMV/P']),
                                  name: T.intl.string(T.t['UQMV/P'])
                              },
                        r,
                        i
                    );
                null != o &&
                    g.Z.showSelfDismissableAlert({
                        title: o.title,
                        body: o.body,
                        errorCodeMessage: o.errorCodeMessage,
                        reconnectPlatformType: o.isAccountLinkError ? a.type : void 0
                    }),
                    S.e8.has(i.code) && this.awaitRemoteTimeout.isStarted() ? this.awaitRemoteTimeout.start(180000, () => (0, m.s6)(), !0) : 'failed' === r && (0, m.s6)();
            }),
            y(this, 'handleRemoteSessionDisconnect', () => {
                this.awaitRemoteTimeout.stop();
            });
    }
}
t.Z = new C();
