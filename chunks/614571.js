n(47120);
var r = n(846519),
    i = n(147913),
    a = n(553795),
    s = n(430824),
    o = n(626135),
    l = n(425128),
    u = n(276344),
    c = n(981631);
function d(e, t, n) {
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
let f = new r.V7(),
    _ = !1;
function p() {
    let e = a.Z.getAccount(null, c.ABu.RIOT_GAMES),
        t = a.Z.getAccount(null, c.ABu.LEAGUE_OF_LEGENDS);
    if (null == e && null == t) return 'missing_connections';
    if (null == e) return 'missing_riot_connection';
    if (null == t) return 'missing_league_of_legends_connection';
    return {
        riotConnection: e,
        lolConnection: t
    };
}
async function h(e) {
    let { riotConnectionId: t, lolConnectionId: n, onlyUpdateIfStale: r } = e;
    if (_) return;
    f.stop(), (_ = !0);
    let { next_update_timestamp: i } = await (0, l._7)({
        riotConnectionId: t,
        lolConnectionId: n,
        onlyUpdateIfStale: r
    });
    _ = !1;
    let a = new Date(1000 * i),
        s = new Date(),
        o = Math.max(0, a.getTime() - s.getTime());
    f.start(o, () =>
        (0, l._7)({
            riotConnectionId: t,
            lolConnectionId: n
        })
    );
}
function m() {
    return Object.values(s.Z.getGuilds()).some(
        (e) =>
            e.hasFeature(c.oNc.LEADERBOARD_ENABLED) &&
            (0, u.NM)({
                guildId: e.id,
                location: 'LeagueOfLegendsLifecycleManager.handleDependantStoreChanges',
                autoTrackExposure: !1
            })
    );
}
class g extends i.Z {
    handleRunningGameChange(e) {
        let { removed: t } = e;
        if (!!m()) {
            if (t.some((e) => 'League of Legends' === e.name)) {
                let e = p();
                if ('string' == typeof e) {
                    var n;
                    (n = e), o.default.track(c.rMx.LEAGUE_OF_LEGENDS_MATCH_DATA_NOT_FETCHING, { reason: n });
                    return;
                }
                h({
                    riotConnectionId: e.riotConnection.id,
                    lolConnectionId: e.lolConnection.id
                });
            }
        }
    }
    handleDependantStoreChanges() {
        let e = p(),
            t = 'string' != typeof e,
            n = m() && t;
        f.isStarted() && !n
            ? f.stop()
            : !f.isStarted() &&
              n &&
              h({
                  riotConnectionId: e.riotConnection.id,
                  lolConnectionId: e.lolConnection.id,
                  onlyUpdateIfStale: !0
              });
    }
    constructor(...e) {
        super(...e), d(this, 'actions', { RUNNING_GAMES_CHANGE: this.handleRunningGameChange }), d(this, 'stores', new Map().set(s.Z, this.handleDependantStoreChanges).set(a.Z, this.handleDependantStoreChanges));
    }
}
t.Z = new g();
