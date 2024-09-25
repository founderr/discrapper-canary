var r = n(47120);
var i = n(512722),
    a = n.n(i),
    o = n(846519),
    s = n(668781),
    l = n(846027),
    u = n(147913),
    c = n(710845),
    d = n(314897),
    _ = n(131951),
    E = n(19780),
    f = n(797258),
    h = n(979651),
    p = n(823379),
    m = n(254238),
    I = n(607214),
    T = n(258609),
    g = n(565473),
    S = n(444092),
    A = n(927923),
    v = n(65154),
    N = n(689938);
function O(e, t, n) {
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
let R = new c.Z('GameConsoleManager'),
    C = 3000,
    y = 60000,
    b = 180000;
async function L(e) {
    let t = E.Z.getChannelId();
    a()(null == t, 'Syncing to remote while in voice!'), e.selfMute !== _.Z.isSelfMute() && (await l.Z.toggleSelfMute({ syncRemote: !1 })), e.selfDeaf !== _.Z.isSelfDeaf() && l.Z.toggleSelfDeaf({ syncRemote: !1 });
}
function D(e) {
    let t = T.Z.getAwaitingRemoteSessionInfo();
    return e.find((e) => {
        let n = A.al.has(e.clientInfo.os),
            r = null != h.Z.getVoiceStateForSession(d.default.getId(), e.sessionId),
            i = null == t || (0, g.y)(t.type) === e.clientInfo.os;
        return n && i && r;
    });
}
class M extends u.Z {
    constructor(...e) {
        super(...e),
            O(this, 'rollbackCommandTimeout', new o.V7()),
            O(this, 'awaitRemoteTimeout', new o.V7()),
            O(this, 'actions', {
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
            O(this, 'maybeConnect', (e) => {
                let t = D(e);
                if (null == t) return null;
                this.awaitRemoteTimeout.stop(), (0, m.ef)(t.sessionId);
                let n = h.Z.getVoiceStateForSession(d.default.getId(), t.sessionId);
                null != n && L(n);
            }),
            O(this, 'handleAudioStateToggle', (e) => {
                let { syncRemote: t, context: n } = e;
                if (!t || n !== v.Yn.DEFAULT) return;
                let r = _.Z.isSelfDeaf(),
                    i = _.Z.isSelfMute(),
                    a = d.default.getId(),
                    o = T.Z.getRemoteSessionId();
                if (null == o) return;
                let s = h.Z.getVoiceStateForSession(a, o);
                if (null != s)
                    (s.selfDeaf !== r || s.selfMute !== i) &&
                        ((0, m.Vv)(o, {
                            selfDeaf: r,
                            selfMute: i
                        }),
                        this.rollbackCommandTimeout.start(C, () => {
                            L(s);
                        }));
            }),
            O(this, 'handleVoiceStateUpdates', (e) => {
                let t = e.voiceStates,
                    n = T.Z.getRemoteSessionId();
                if (null == n) {
                    let e = t
                        .map((e) => {
                            let { sessionId: t } = e;
                            return null != t ? f.Z.getSessionById(t) : null;
                        })
                        .filter(p.lm);
                    return this.maybeConnect(e);
                }
                let r = t.find((e) => {
                    let { sessionId: t } = e;
                    return t === n;
                });
                null != r && (this.rollbackCommandTimeout.stop(), L(r));
            }),
            O(this, 'handleSessionsChanged', () => {
                let e = T.Z.getRemoteSessionId();
                null != e && null == f.Z.getSessionById(e) && (0, m.s6)(), null == e && this.maybeConnect(Object.values(f.Z.getSessions()));
            }),
            O(this, 'handleWaitForRemoteSession', () => {
                this.awaitRemoteTimeout.start(y, () => {
                    (0, m.s6)(),
                        s.Z.show({
                            title: N.Z.Messages.GAME_CONSOLE_TRANSFER_TIMEOUT_TITLE,
                            body: N.Z.Messages.GAME_CONSOLE_TRANSFER_TIMEOUT_BODY
                        });
                });
            }),
            O(this, 'handleConsoleCommandUpdate', (e) => {
                var t;
                let { id: n, result: r, error: i } = e;
                if (('failed' !== r && 'n/a' !== r) || null == i) return;
                R.info('Console command Error result:', r, i);
                let a = T.Z.getAwaitingRemoteSessionInfo();
                if ((null == a ? void 0 : a.commandId) !== n) return;
                let o = T.Z.getDevice(a.type, null !== (t = a.deviceId) && void 0 !== t ? t : ''),
                    s = (0, S.Z)(
                        null != o
                            ? o
                            : {
                                  id: 'id',
                                  platform: N.Z.Messages.STATUS_UNKNOWN,
                                  name: N.Z.Messages.STATUS_UNKNOWN
                              },
                        r,
                        i
                    );
                null != s &&
                    I.Z.showSelfDismissableAlert({
                        title: s.title,
                        body: s.body,
                        errorCodeMessage: s.errorCodeMessage,
                        reconnectPlatformType: s.isAccountLinkError ? a.type : void 0
                    }),
                    A.e8.has(i.code) && this.awaitRemoteTimeout.isStarted() ? this.awaitRemoteTimeout.start(b, () => (0, m.s6)(), !0) : 'failed' === r && (0, m.s6)();
            }),
            O(this, 'handleRemoteSessionDisconnect', () => {
                this.awaitRemoteTimeout.stop();
            });
    }
}
t.Z = new M();
