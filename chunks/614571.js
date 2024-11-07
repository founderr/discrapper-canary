let r, i;
n(47120);
var a = n(846519),
    s = n(147913),
    o = n(553795),
    l = n(430824),
    u = n(70956),
    c = n(998502),
    d = n(425128),
    f = n(276344),
    _ = n(981631);
function h(e, t, n) {
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
let p = 10 * u.Z.Millis.SECOND,
    m = 15 * u.Z.Millis.MINUTE,
    g = new a.V7();
function E(e) {
    return e.some((e) => 'League of Legends' === e.name);
}
function v() {
    let e = o.Z.getAccount(null, _.ABu.RIOT_GAMES),
        t = o.Z.getAccount(null, _.ABu.LEAGUE_OF_LEGENDS);
    return null == e || null == t
        ? null
        : {
              riotConnection: e,
              lolConnection: t
          };
}
async function I(e) {
    let { riotConnectionId: t, lolConnectionId: n, onlyUpdateIfStale: r } = e;
    g.stop();
    let { next_update_timestamp: i } = await (0, d._7)({
            riotConnectionId: t,
            lolConnectionId: n,
            onlyUpdateIfStale: r
        }),
        a = new Date(1000 * i),
        s = new Date(),
        o = Math.max(0, a.getTime() - s.getTime());
    g.start(o, () =>
        (0, d._7)({
            riotConnectionId: t,
            lolConnectionId: n
        })
    );
}
class S extends s.Z {
    handleRunningGameChange(e) {
        let { added: t, removed: n } = e,
            a = v();
        if (null != a)
            E(t) &&
                (null != i && clearInterval(i),
                (i = setInterval(async () => {
                    let e = await c.ZP.fetchRiotGamesLiveClientData('activeplayer');
                    null != e && 200 === e.status && (r = JSON.parse(e.body).riotId);
                }, p)),
                setTimeout(() => {
                    clearInterval(i);
                }, m)),
                E(n) &&
                    a.riotConnection.name === r &&
                    I({
                        riotConnectionId: a.riotConnection.id,
                        lolConnectionId: a.lolConnection.id
                    });
    }
    handleDependantStoreChanges() {
        let e = Object.values(l.Z.getGuilds()).some(
                (e) =>
                    e.hasFeature(_.oNc.LEADERBOARD_ENABLED) &&
                    (0, f.NM)({
                        guildId: e.id,
                        location: 'LeagueOfLegendsLifecycleManager.handleDependantStoreChanges',
                        autoTrackExposure: !1
                    })
            ),
            t = v(),
            n = null != t,
            r = e && n;
        g.isStarted() && !r
            ? g.stop()
            : !g.isStarted() &&
              r &&
              I({
                  riotConnectionId: t.riotConnection.id,
                  lolConnectionId: t.lolConnection.id,
                  onlyUpdateIfStale: !0
              });
    }
    constructor(...e) {
        super(...e), h(this, 'actions', { RUNNING_GAMES_CHANGE: this.handleRunningGameChange }), h(this, 'stores', new Map().set(l.Z, this.handleDependantStoreChanges).set(o.Z, this.handleDependantStoreChanges));
    }
}
t.Z = new S();
