n.d(t, {
    Z: function () {
        return T;
    }
});
var r = n(653041);
var i = n(544891),
    a = n(433517),
    o = n(570140),
    s = n(865427),
    l = n(710845),
    u = n(70956),
    c = n(358085),
    d = n(960048),
    _ = n(998502);
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
let f = 1 * u.Z.Millis.HOUR,
    h = 7 * u.Z.Millis.DAY,
    p = 1 * u.Z.Millis.DAY,
    m = a.K.get('lastNonRequiredUpdateShown', Date.now()),
    I = new l.Z('AutoUpdateManager');
class T {
    destroy() {
        clearInterval(this._checkInterval);
    }
    quitAndInstall() {
        this.updateAvailable && (this.hasNativeUpdate ? (null != this._bootstrapper ? this._bootstrapper.finishBootstrap() : _.ZP.send('QUIT_AND_INSTALL')) : location.reload(!0));
    }
    async _requestNewUpdaterBootstrap() {
        let e;
        I.log('Bootstrapping new updater host...');
        try {
            await _.ZP.ensureModule('discord_updater_bootstrap'), (e = _.ZP.requireModule('discord_updater_bootstrap')), (this._bootstrapper = e);
        } catch (e) {
            this._handleNativeUpdateNotAvailable();
            return;
        }
        try {
            this._handleCheckingForUpdates(), await e.bootstrap(_.ZP.releaseChannel, 'win'), (this.updateAvailable = !0), (this.hasNativeUpdate = !0), this._handleUpdateDownloaded(!0);
        } catch (e) {
            I.log('Failed to bootstrap new updater:', e), this._handleNativeUpdateNotAvailable(), d.Z.captureException(e);
        }
    }
    _emitCallbacks() {
        this._callbacks.forEach((e) => e(this.updateAvailable)), (this._callbacks = []);
    }
    constructor(e = f) {
        var t = this;
        E(this, 'updateAvailable', !1),
            E(this, 'hasNativeUpdate', !1),
            E(this, '_checkInterval', void 0),
            E(this, '_callbacks', []),
            E(this, '_bootstrapper', null),
            E(this, 'checkForUpdates', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return (
                    (e || !t.hasNativeUpdate) && (c.isPlatformEmbedded ? ('win32' === (0, c.getPlatformName)() && _.ZP.canBootstrapNewUpdater ? t._requestNewUpdaterBootstrap() : _.ZP.send('CHECK_FOR_UPDATES')) : t._handleNativeUpdateNotAvailable()),
                    new Promise((e) => {
                        t.updateAvailable ? e(!0) : t._callbacks.push(e);
                    })
                );
            }),
            E(this, '_handleCheckingForUpdates', () => {
                o.Z.dispatch({ type: 'CHECKING_FOR_UPDATES' });
            }),
            E(this, '_handleNativeUpdateNotAvailable', () => {
                this._handleCheckingForUpdates(),
                    i.tn
                        .get({
                            url: ''.concat(location.protocol, '//').concat(location.host).concat('/assets/', 'version.').concat(window.GLOBAL_ENV.RELEASE_CHANNEL, '.json'),
                            query: { _: (Date.now() / 1000 / 60 / 5) | 0 },
                            oldFormErrors: !0
                        })
                        .then(
                            (e) => {
                                if (null == e.body || '7264ebaf82f1d55725af102aa58e88580670f463' === e.body.hash) return this._handleUpdateNotAvailable();
                                if (e.body.required || (0, s.fD)()) return this._handleUpdateDownloaded(!1);
                                let t = 'stable' === window.GLOBAL_ENV.RELEASE_CHANNEL ? h : p;
                                if (Date.now() - m > t) return a.K.set('lastNonRequiredUpdateShown', Date.now()), this._handleUpdateDownloaded(!1);
                            },
                            () => this._handleUpdateError()
                        );
            }),
            E(this, '_handleUpdateNotAvailable', () => {
                o.Z.dispatch({ type: 'UPDATE_NOT_AVAILABLE' }), this._emitCallbacks();
            }),
            E(this, '_handleUpdateAvailable', (e) => {
                (this.updateAvailable = !0), (this.hasNativeUpdate = e), o.Z.dispatch({ type: 'UPDATE_AVAILABLE' });
            }),
            E(this, '_handleUpdateManually', () => {
                (this.updateAvailable = !0), (this.hasNativeUpdate = !0), o.Z.dispatch({ type: 'UPDATE_MANUALLY' });
            }),
            E(this, '_handleUpdateError', (e) => {
                (this.updateAvailable = !1),
                    o.Z.dispatch({
                        type: 'UPDATE_ERROR',
                        message: e
                    });
            }),
            E(this, '_handleUpdateDownloaded', (e, t, n, r, i) => {
                this._handleUpdateAvailable(e),
                    o.Z.dispatch({
                        type: 'UPDATE_DOWNLOADED',
                        releaseNotes: t,
                        releaseName: n,
                        releaseDate: r,
                        updateURL: i
                    }),
                    this._emitCallbacks();
            }),
            c.isPlatformEmbedded && (_.ZP.on('CHECKING_FOR_UPDATES', this._handleCheckingForUpdates), _.ZP.on('UPDATE_NOT_AVAILABLE', this._handleNativeUpdateNotAvailable), _.ZP.on('UPDATE_AVAILABLE', () => this._handleUpdateAvailable(!0)), _.ZP.on('UPDATE_ERROR', this._handleUpdateError), _.ZP.on('UPDATE_DOWNLOADED', () => this._handleUpdateDownloaded(!0)), _.ZP.on('UPDATE_MANUALLY', this._handleUpdateManually)),
            o.Z.wait(() => {
                this.checkForUpdates();
            }),
            (this._checkInterval = setInterval(this.checkForUpdates, e));
    }
}
