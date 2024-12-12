var i = r(47120);
var a = r(846519),
    s = r(147913),
    o = r(553795),
    l = r(430824),
    u = r(626135),
    c = r(425128),
    d = r(276344),
    f = r(981631);
function _(e, n, r) {
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
let h = 'League of Legends',
    p = new a.V7(),
    m = !1,
    g = !1;
function E(e) {
    return e.some((e) => e.name === h);
}
function v() {
    let e = o.Z.getAccount(null, f.ABu.RIOT_GAMES),
        n = o.Z.getAccount(null, f.ABu.LEAGUE_OF_LEGENDS);
    if (null == e && null == n) return 'missing_connections';
    if (null == e) return 'missing_riot_connection';
    if (null == n) return 'missing_league_of_legends_connection';
    return {
        riotConnection: e,
        lolConnection: n
    };
}
async function I(e) {
    let { riotConnectionId: n, lolConnectionId: r, onlyUpdateIfStale: i } = e;
    if (!m && (!g || !i)) {
        p.stop();
        try {
            m = !0;
            let { next_update_timestamp: e } = await (0, c._7)({
                riotConnectionId: n,
                lolConnectionId: r,
                onlyUpdateIfStale: i
            });
            (m = !1), (g = !1);
            let a = new Date(1000 * e),
                s = new Date(),
                o = Math.max(0, a.getTime() - s.getTime());
            p.start(o, () =>
                (0, c._7)({
                    riotConnectionId: n,
                    lolConnectionId: r
                })
            );
        } catch (e) {
            (m = !1), (g = !0);
        }
    }
}
function T() {
    return Object.values(l.Z.getGuilds()).some(
        (e) =>
            e.hasFeature(f.oNc.LEADERBOARD_ENABLED) &&
            (0, d.NM)({
                guildId: e.id,
                location: 'LeagueOfLegendsLifecycleManager.handleDependantStoreChanges',
                autoTrackExposure: !1
            })
    );
}
function b(e) {
    u.default.track(f.rMx.LEAGUE_OF_LEGENDS_MATCH_DATA_NOT_FETCHING, { reason: e });
}
class y extends s.Z {
    handleRunningGameChange(e) {
        let { removed: n } = e;
        if (!!T()) {
            if (E(n)) {
                let e = v();
                if ('string' == typeof e) {
                    b(e);
                    return;
                }
                I({
                    riotConnectionId: e.riotConnection.id,
                    lolConnectionId: e.lolConnection.id
                });
            }
        }
    }
    handleDependantStoreChanges() {
        let e = v(),
            n = 'string' != typeof e,
            r = T() && n;
        p.isStarted() && !r
            ? p.stop()
            : !p.isStarted() &&
              r &&
              I({
                  riotConnectionId: e.riotConnection.id,
                  lolConnectionId: e.lolConnection.id,
                  onlyUpdateIfStale: !0
              });
    }
    constructor(...e) {
        super(...e), _(this, 'actions', { RUNNING_GAMES_CHANGE: this.handleRunningGameChange }), _(this, 'stores', new Map().set(l.Z, this.handleDependantStoreChanges).set(o.Z, this.handleDependantStoreChanges));
    }
}
n.Z = new y();
