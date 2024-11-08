let r, i, a;
n(47120);
var s = n(147913),
    o = n(553795),
    l = n(70956),
    u = n(998502),
    c = n(425128),
    d = n(276344),
    f = n(981631);
let _ = 10 * l.Z.Millis.SECOND,
    h = 15 * l.Z.Millis.MINUTE;
function p(e) {
    return e.some((e) => 'League of Legends' === e.name);
}
function m() {
    if (!(0, d.JN)('LeagueOfLegendsLifecycleManager')) return null;
    let e = o.Z.getAccount(null, f.ABu.RIOT_GAMES),
        t = o.Z.getAccount(null, f.ABu.LEAGUE_OF_LEGENDS);
    return null == e || null == t
        ? null
        : {
              riotConnection: e,
              lolConnection: t
          };
}
async function g(e) {
    let { riotConnectionId: t, lolConnectionId: n, onlyUpdateIfStale: r } = e;
    clearTimeout(a);
    let { next_update_timestamp: i } = await (0, c._7)({
            riotConnectionId: t,
            lolConnectionId: n,
            onlyUpdateIfStale: r
        }),
        s = new Date(1000 * i),
        o = new Date();
    a = setTimeout(
        () => {
            (0, c._7)({
                riotConnectionId: t,
                lolConnectionId: n
            });
        },
        Math.max(0, s.getTime() - o.getTime())
    );
}
class E extends s.Z {
    handlePostConnectionOpen() {
        let e = m();
        if (null != e)
            g({
                riotConnectionId: e.riotConnection.id,
                lolConnectionId: e.lolConnection.id,
                onlyUpdateIfStale: !0
            });
    }
    handleRunningGameChange(e) {
        let { added: t, removed: n } = e,
            a = m();
        if (null != a)
            p(t) &&
                (null != i && clearInterval(i),
                (i = setInterval(async () => {
                    let e = await u.ZP.fetchRiotGamesLiveClientData('activeplayer');
                    null != e && 200 === e.status && (r = JSON.parse(e.body).riotId);
                }, _)),
                setTimeout(() => {
                    clearInterval(i);
                }, h)),
                p(n) &&
                    a.riotConnection.name === r &&
                    g({
                        riotConnectionId: a.riotConnection.id,
                        lolConnectionId: a.lolConnection.id
                    });
    }
    constructor(...e) {
        var t, n, r;
        super(...e),
            (t = this),
            (n = 'actions'),
            (r = {
                RUNNING_GAMES_CHANGE: this.handleRunningGameChange,
                POST_CONNECTION_OPEN: this.handlePostConnectionOpen
            }),
            n in t
                ? Object.defineProperty(t, n, {
                      value: r,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (t[n] = r);
    }
}
t.Z = new E();
