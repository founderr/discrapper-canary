var r = n(47120);
var i = n(147913),
    a = n(430824),
    o = n(70956),
    s = n(709054),
    l = n(553385),
    u = n(556178),
    c = n(890477);
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
let _ = 0;
class E extends i.Z {
    constructor(...e) {
        super(...e),
            d(this, 'actions', {
                POST_CONNECTION_OPEN: (e) => this.handleConnectionOpen(e),
                IDLE: () => this.handleIdleChange()
            }),
            d(this, 'handleConnectionOpen', (e) => {
                this._attemptDeadchatPrompt(), this._triggerGamingStatsSetupExperiment();
            }),
            d(this, 'handleIdleChange', () => {
                Date.now() - _ > o.Z.Millis.HOUR && this._attemptDeadchatPrompt();
            }),
            d(this, '_attemptDeadchatPrompt', () => {
                let e = a.Z.getGuilds(),
                    t = s.default.keys(e).filter(
                        (e) =>
                            c.Z.getCurrentConfig({
                                guildId: e,
                                location: 'manager'
                            }).triggerDeadchat
                    );
                t.length > 0 && ((_ = Date.now()), (0, l.N7)(t));
            }),
            d(this, '_triggerGamingStatsSetupExperiment', () => {
                let e = a.Z.getGuilds();
                s.default.keys(e).forEach((e) => {
                    u.g.trackExposure({
                        guildId: e,
                        location: 'manager'
                    });
                });
            });
    }
}
t.Z = new E();
