let r, i;
n(47120);
var a = n(846519),
    s = n(147913),
    o = n(553795),
    l = n(430824),
    u = n(626135),
    c = n(70956),
    d = n(998502),
    f = n(425128),
    _ = n(276344),
    p = n(981631);
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
let m = 10 * c.Z.Millis.SECOND,
    g = 15 * c.Z.Millis.MINUTE,
    E = new a.V7(),
    v = !1;
function I(e) {
    return e.some((e) => 'League of Legends' === e.name);
}
function b() {
    let e = o.Z.getAccount(null, p.ABu.RIOT_GAMES),
        t = o.Z.getAccount(null, p.ABu.LEAGUE_OF_LEGENDS);
    if (null == e && null == t) return 'missing_connections';
    if (null == e) return 'missing_riot_connection';
    if (null == t) return 'missing_league_of_legends_connection';
    return {
        riotConnection: e,
        lolConnection: t
    };
}
async function T(e) {
    let { riotConnectionId: t, lolConnectionId: n, onlyUpdateIfStale: r } = e;
    if (v) return;
    E.stop(), (v = !0);
    let { next_update_timestamp: i } = await (0, f._7)({
        riotConnectionId: t,
        lolConnectionId: n,
        onlyUpdateIfStale: r
    });
    v = !1;
    let a = new Date(1000 * i),
        s = new Date(),
        o = Math.max(0, a.getTime() - s.getTime());
    E.start(o, () =>
        (0, f._7)({
            riotConnectionId: t,
            lolConnectionId: n
        })
    );
}
function S() {
    return Object.values(l.Z.getGuilds()).some(
        (e) =>
            e.hasFeature(p.oNc.LEADERBOARD_ENABLED) &&
            (0, _.NM)({
                guildId: e.id,
                location: 'LeagueOfLegendsLifecycleManager.handleDependantStoreChanges',
                autoTrackExposure: !1
            })
    );
}
function y(e) {
    u.default.track(p.rMx.LEAGUE_OF_LEGENDS_MATCH_DATA_NOT_FETCHING, { reason: e });
}
class A extends s.Z {
    handleRunningGameChange(e) {
        let { added: t, removed: n } = e;
        if (!S()) return;
        let a = b();
        if (
            (I(t) &&
                'string' != typeof a &&
                (null != i && clearInterval(i),
                (i = setInterval(async () => {
                    let e = await d.ZP.fetchRiotGamesLiveClientData('activeplayer');
                    null != e && 200 === e.status && (r = JSON.parse(e.body).riotId);
                }, m)),
                setTimeout(() => {
                    clearInterval(i);
                }, g)),
            I(n))
        ) {
            if ('string' == typeof a) {
                y(a);
                return;
            }
            if (null == r) {
                y('active_account_missing');
                return;
            }
            if (a.riotConnection.name !== r) {
                y('account_name_mismatch');
                return;
            }
            T({
                riotConnectionId: a.riotConnection.id,
                lolConnectionId: a.lolConnection.id
            });
        }
    }
    handleDependantStoreChanges() {
        let e = b(),
            t = 'string' != typeof e,
            n = S() && t;
        E.isStarted() && !n
            ? E.stop()
            : !E.isStarted() &&
              n &&
              T({
                  riotConnectionId: e.riotConnection.id,
                  lolConnectionId: e.lolConnection.id,
                  onlyUpdateIfStale: !0
              });
    }
    constructor(...e) {
        super(...e), h(this, 'actions', { RUNNING_GAMES_CHANGE: this.handleRunningGameChange }), h(this, 'stores', new Map().set(l.Z, this.handleDependantStoreChanges).set(o.Z, this.handleDependantStoreChanges));
    }
}
t.Z = new A();
