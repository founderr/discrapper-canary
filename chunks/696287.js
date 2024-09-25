var r = n(47120);
var i = n(846519),
    a = n(147913),
    o = n(77498),
    s = n(19780),
    l = n(626135),
    u = n(70956),
    c = n(581567),
    d = n(594190),
    _ = n(981631);
function E(e, t, n) {
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
let f = 5 * u.Z.Millis.MINUTE;
class h extends a.Z {
    _terminate() {
        this.stopHeartbeat();
    }
    maybeStartHeartbeat() {
        !this.heartbeatInterval.isStarted() && (this.logRunningGameHeartbeats(), this.heartbeatInterval.start(f, this.logRunningGameHeartbeats));
    }
    stopHeartbeat() {
        this.heartbeatInterval.stop(), this.runningGameKeys.clear();
    }
    handlePostConnectionOpen() {
        d.ZP.getRunningGames().length > 0 && this.maybeStartHeartbeat();
    }
    constructor(...e) {
        super(...e),
            E(this, 'heartbeatInterval', new i.Xp()),
            E(this, 'runningGameKeys', new Set()),
            E(this, 'actions', {
                RUNNING_GAMES_CHANGE: (e) => this.handleRunningGamesChanged(e),
                LOGOUT: () => this.stopHeartbeat(),
                CONNECTION_CLOSED: () => this.stopHeartbeat(),
                POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen()
            }),
            E(this, 'handleRunningGamesChanged', (e) => {
                let { games: t } = e;
                if (0 === t.length) {
                    this.stopHeartbeat();
                    return;
                }
                this.maybeStartHeartbeat();
            }),
            E(this, 'logRunningGameHeartbeats', () => {
                let e = d.ZP.getRunningGames(),
                    t = {
                        rtc_connection_id: s.Z.getRTCConnectionId(),
                        media_session_id: s.Z.getMediaSessionId()
                    },
                    n = new Set();
                e.forEach((e) => {
                    var r, i;
                    let a = (0, d.rH)(e),
                        s = !this.runningGameKeys.has(a),
                        u = null !== (i = e.id) && void 0 !== i ? i : null === (r = o.Z.getGameByName(e.name)) || void 0 === r ? void 0 : r.id;
                    l.default.track(_.rMx.RUNNING_GAME_HEARTBEAT, {
                        game_id: u,
                        game_name: e.name,
                        game_distributor: e.distributor,
                        game_executable: (0, c.N6)(e.exePath),
                        game_detection_enabled: (0, d.ik)(e),
                        initial_heartbeat: s,
                        ...t
                    }),
                        n.add((0, d.rH)(e));
                }),
                    (this.runningGameKeys = n);
            });
    }
}
t.Z = new h();
