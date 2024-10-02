let r, i, a;
var o = n(47120);
var s = n(147913),
    l = n(553795),
    u = n(70956),
    c = n(998502),
    d = n(425128),
    _ = n(276344),
    E = n(981631);
function f(e, t, n) {
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
let h = 'League of Legends',
    p = 10 * u.Z.Millis.SECOND,
    m = 15 * u.Z.Millis.MINUTE;
function I(e) {
    return e.some((e) => e.name === h);
}
function T() {
    if (!(0, _.JN)('LeagueOfLegendsLifecycleManager')) return null;
    let e = l.Z.getAccount(null, E.ABu.RIOT_GAMES),
        t = l.Z.getAccount(null, E.ABu.LEAGUE_OF_LEGENDS);
    return null == e || null == t
        ? null
        : {
              riotConnection: e,
              lolConnection: t
          };
}
function g() {
    null != i && clearInterval(i),
        (i = setInterval(async () => {
            let e = await c.ZP.fetchRiotGamesLiveClientData('activeplayer');
            null != e && 200 === e.status && (r = JSON.parse(e.body).riotId);
        }, p)),
        setTimeout(() => {
            clearInterval(i);
        }, m);
}
async function S(e) {
    let { riotConnectionId: t, lolConnectionId: n, onlyUpdateIfStale: r } = e;
    clearTimeout(a);
    let { next_update_timestamp: i } = await (0, d._)({
            riotConnectionId: t,
            lolConnectionId: n,
            onlyUpdateIfStale: r
        }),
        o = new Date(1000 * i),
        s = new Date();
    a = setTimeout(
        () => {
            (0, d._)({
                riotConnectionId: t,
                lolConnectionId: n
            });
        },
        Math.max(0, o.getTime() - s.getTime())
    );
}
class A extends s.Z {
    handlePostConnectionOpen() {
        let e = T();
        if (null != e)
            S({
                riotConnectionId: e.riotConnection.id,
                lolConnectionId: e.lolConnection.id,
                onlyUpdateIfStale: !0
            });
    }
    handleRunningGameChange(e) {
        let { added: t, removed: n } = e,
            i = T();
        if (null != i)
            I(t) && g(),
                I(n) &&
                    i.riotConnection.name === r &&
                    S({
                        riotConnectionId: i.riotConnection.id,
                        lolConnectionId: i.lolConnection.id
                    });
    }
    constructor(...e) {
        super(...e),
            f(this, 'actions', {
                RUNNING_GAMES_CHANGE: this.handleRunningGameChange,
                POST_CONNECTION_OPEN: this.handlePostConnectionOpen
            });
    }
}
t.Z = new A();
