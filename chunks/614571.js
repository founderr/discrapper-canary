let r, i;
var a = n(47120);
var o = n(147913),
    s = n(553795),
    l = n(70956),
    u = n(998502),
    c = n(425128),
    d = n(276344),
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
let f = 'League of Legends',
    h = 10 * l.Z.Millis.SECOND,
    p = 15 * l.Z.Millis.MINUTE;
function m() {
    null != i && clearInterval(i),
        (i = setInterval(async () => {
            let e = await u.ZP.fetchRiotGamesLiveClientData('activeplayer');
            null != e && 200 === e.status && (r = JSON.parse(e.body).riotId);
        }, h)),
        setTimeout(() => {
            clearInterval(i);
        }, p);
}
class I extends o.Z {
    handleRunningGameChange(e) {
        let { added: t, removed: n } = e;
        if (!(0, d.JN)('LeagueOfLegendsLifecycleManager')) return;
        function i(e) {
            return e.some((e) => e.name === f);
        }
        let a = s.Z.getAccount(null, _.ABu.RIOT_GAMES),
            o = s.Z.getAccount(null, _.ABu.LEAGUE_OF_LEGENDS);
        if (null != o && null != a) i(t) && m(), i(n) && a.name === r && (0, c._)(a.id, o.id);
    }
    constructor(...e) {
        super(...e), E(this, 'actions', { RUNNING_GAMES_CHANGE: this.handleRunningGameChange });
    }
}
t.Z = new I();
