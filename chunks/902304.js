var i = r(47120);
var a = r(512722),
    s = r.n(a),
    o = r(846519),
    l = r(668781),
    u = r(846027),
    c = r(147913),
    d = r(710845),
    f = r(314897),
    _ = r(131951),
    h = r(19780),
    p = r(797258),
    m = r(979651),
    g = r(823379),
    E = r(254238),
    v = r(607214),
    I = r(258609),
    T = r(565473),
    b = r(444092),
    y = r(927923),
    S = r(65154),
    A = r(388032);
function N(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let C = new d.Z('GameConsoleManager'),
    R = 3000,
    O = 60000,
    D = 180000;
async function L(e) {
    let n = h.Z.getChannelId();
    s()(null == n, 'Syncing to remote while in voice!'), e.selfMute !== _.Z.isSelfMute() && (await u.Z.toggleSelfMute({ syncRemote: !1 })), e.selfDeaf !== _.Z.isSelfDeaf() && u.Z.toggleSelfDeaf({ syncRemote: !1 });
}
function x(e) {
    let n = I.Z.getAwaitingRemoteSessionInfo();
    return e.find((e) => {
        let r = y.al.has(e.clientInfo.os),
            i = null != m.Z.getVoiceStateForSession(f.default.getId(), e.sessionId),
            a = null == n || (0, T.y)(n.type) === e.clientInfo.os;
        return r && a && i;
    });
}
class w extends c.Z {
    constructor(...e) {
        super(...e),
            N(this, 'rollbackCommandTimeout', new o.V7()),
            N(this, 'awaitRemoteTimeout', new o.V7()),
            N(this, 'actions', {
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
            N(this, 'maybeConnect', (e) => {
                let n = x(e);
                if (null == n) return null;
                this.awaitRemoteTimeout.stop(), (0, E.ef)(n.sessionId);
                let r = m.Z.getVoiceStateForSession(f.default.getId(), n.sessionId);
                null != r && L(r);
            }),
            N(this, 'handleAudioStateToggle', (e) => {
                let { syncRemote: n, context: r } = e;
                if (!n || r !== S.Yn.DEFAULT) return;
                let i = _.Z.isSelfDeaf(),
                    a = _.Z.isSelfMute(),
                    s = f.default.getId(),
                    o = I.Z.getRemoteSessionId();
                if (null == o) return;
                let l = m.Z.getVoiceStateForSession(s, o);
                if (null != l)
                    (l.selfDeaf !== i || l.selfMute !== a) &&
                        ((0, E.Vv)(o, {
                            selfDeaf: i,
                            selfMute: a
                        }),
                        this.rollbackCommandTimeout.start(R, () => {
                            L(l);
                        }));
            }),
            N(this, 'handleVoiceStateUpdates', (e) => {
                let n = e.voiceStates,
                    r = I.Z.getRemoteSessionId();
                if (null == r) {
                    let e = n
                        .map((e) => {
                            let { sessionId: n } = e;
                            return null != n ? p.Z.getSessionById(n) : null;
                        })
                        .filter(g.lm);
                    return this.maybeConnect(e);
                }
                let i = n.find((e) => {
                    let { sessionId: n } = e;
                    return n === r;
                });
                null != i && (this.rollbackCommandTimeout.stop(), L(i));
            }),
            N(this, 'handleSessionsChanged', () => {
                let e = I.Z.getRemoteSessionId();
                null != e && null == p.Z.getSessionById(e) && (0, E.s6)(), null == e && this.maybeConnect(Object.values(p.Z.getSessions()));
            }),
            N(this, 'handleWaitForRemoteSession', () => {
                this.awaitRemoteTimeout.start(O, () => {
                    (0, E.s6)(),
                        l.Z.show({
                            title: A.intl.string(A.t.wGMxr6),
                            body: A.intl.string(A.t.i5k8b2)
                        });
                });
            }),
            N(this, 'handleConsoleCommandUpdate', (e) => {
                var n;
                let { id: r, result: i, error: a } = e;
                if (('failed' !== i && 'n/a' !== i) || null == a) return;
                C.info('Console command Error result:', i, a);
                let s = I.Z.getAwaitingRemoteSessionInfo();
                if ((null == s ? void 0 : s.commandId) !== r) return;
                let o = I.Z.getDevice(s.type, null !== (n = s.deviceId) && void 0 !== n ? n : ''),
                    l = (0, b.Z)(
                        null != o
                            ? o
                            : {
                                  id: 'id',
                                  platform: A.intl.string(A.t['UQMV/P']),
                                  name: A.intl.string(A.t['UQMV/P'])
                              },
                        i,
                        a
                    );
                null != l &&
                    v.Z.showSelfDismissableAlert({
                        title: l.title,
                        body: l.body,
                        errorCodeMessage: l.errorCodeMessage,
                        reconnectPlatformType: l.isAccountLinkError ? s.type : void 0
                    }),
                    y.e8.has(a.code) && this.awaitRemoteTimeout.isStarted() ? this.awaitRemoteTimeout.start(D, () => (0, E.s6)(), !0) : 'failed' === i && (0, E.s6)();
            }),
            N(this, 'handleRemoteSessionDisconnect', () => {
                this.awaitRemoteTimeout.stop();
            });
    }
}
n.Z = new w();
