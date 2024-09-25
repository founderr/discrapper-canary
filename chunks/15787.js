var r = n(47120);
var i = n(147913),
    a = n(710845),
    o = n(276344);
function s(e, t, n) {
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
let l = new a.Z('LeagueOfLegendsLifecycleManager'),
    u = 'League of Legends';
class c extends i.Z {
    handleRunningGameChange(e) {
        let { added: t, removed: n } = e;
        if (!!(0, o.JN)('LeagueOfLegendsLifecycleManager')) r(t) && l.info('League of Legends Match Started', { added: t }), r(n) && l.info('League of Legends Match Ended', { removed: n });
        function r(e) {
            return e.some((e) => e.name === u);
        }
    }
    constructor(...e) {
        super(...e), s(this, 'actions', { RUNNING_GAMES_CHANGE: this.handleRunningGameChange });
    }
}
t.Z = new c();
