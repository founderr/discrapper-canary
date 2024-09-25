var r = n(47120);
var i = n(317770),
    a = n(626135),
    o = n(358085),
    s = n(998502),
    l = n(801814),
    u = n(981631);
function c(e, t, n) {
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
class d extends i.Z {
    _initialize() {
        if (!!o.isPlatformEmbedded)
            s.ZP.on('UPDATE_DOWNLOADED', () => this.processModuleEvents()),
                s.ZP.on('MODULE_INSTALLED', (e, t, n) => this.processModuleEvents()),
                s.ZP.on('UPDATER_HISTORY_RESPONSE', (e, t) => {
                    this._handleHistoryResponse(t);
                }),
                this.processModuleEvents();
    }
    _terminate() {}
    processModuleEvents() {
        s.ZP.send('UPDATER_HISTORY_QUERY_AND_TRUNCATE');
    }
    _handleHistoryResponse(e) {
        if (null == e) return;
        let t = 0 === Math.floor(500 * Math.random());
        e.forEach((e) => {
            'analytics' === e.type ? (e.name === u.rMx.UPDATER_METRICS_DOWNLOAD || e.name === u.rMx.UPDATER_METRICS_INSTALL || e.name === u.rMx.UPDATER_METRICS_COMBINED || e.name === u.rMx.UPDATER_METRICS_TRANSITION_STATUS ? t && a.default.track(e.name, e.data) : console.warn('Unknown updater analytic event '.concat(e.name))) : this._tracker.trackEvent(e);
        }),
            this._tracker.submissionReady() && (a.default.track(u.rMx.APP_MODULES_UPDATED, this._tracker.getStats()), this._tracker.reset());
    }
    constructor(...e) {
        super(...e), c(this, '_tracker', new l.Z());
    }
}
t.Z = new d();
