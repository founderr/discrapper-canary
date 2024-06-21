n.d(t, {
  Z: function() {
    return h
  }
}), n(653041);
var s = n(544891),
  i = n(433517),
  l = n(570140),
  a = n(865427),
  r = n(710845),
  o = n(70956),
  c = n(358085),
  u = n(960048),
  d = n(998502);

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let _ = 1 * o.Z.Millis.HOUR,
  I = 7 * o.Z.Millis.DAY,
  T = 1 * o.Z.Millis.DAY,
  N = i.K.get("lastNonRequiredUpdateShown", Date.now()),
  m = new r.Z("AutoUpdateManager");
class h {
  destroy() {
    clearInterval(this._checkInterval)
  }
  quitAndInstall() {
    this.updateAvailable && (this.hasNativeUpdate ? null != this._bootstrapper ? this._bootstrapper.finishBootstrap() : d.ZP.send("QUIT_AND_INSTALL") : location.reload(!0))
  }
  async _requestNewUpdaterBootstrap() {
    let e;
    m.log("Bootstrapping new updater host...");
    try {
      await d.ZP.ensureModule("discord_updater_bootstrap"), e = d.ZP.requireModule("discord_updater_bootstrap"), this._bootstrapper = e
    } catch (e) {
      this._handleNativeUpdateNotAvailable();
      return
    }
    try {
      this._handleCheckingForUpdates(), await e.bootstrap(d.ZP.releaseChannel, "win"), this.updateAvailable = !0, this.hasNativeUpdate = !0, this._handleUpdateDownloaded(!0)
    } catch (e) {
      m.log("Failed to bootstrap new updater:", e), this._handleNativeUpdateNotAvailable(), u.Z.captureException(e)
    }
  }
  _emitCallbacks() {
    this._callbacks.forEach(e => e(this.updateAvailable)), this._callbacks = []
  }
  constructor(e = _) {
    var t = this;
    E(this, "updateAvailable", !1), E(this, "hasNativeUpdate", !1), E(this, "_checkInterval", void 0), E(this, "_callbacks", []), E(this, "_bootstrapper", null), E(this, "checkForUpdates", function() {
      let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return (e || !t.hasNativeUpdate) && (c.isPlatformEmbedded ? "win32" === (0, c.getPlatformName)() && d.ZP.canBootstrapNewUpdater ? t._requestNewUpdaterBootstrap() : d.ZP.send("CHECK_FOR_UPDATES") : t._handleNativeUpdateNotAvailable()), new Promise(e => {
        t.updateAvailable ? e(!0) : t._callbacks.push(e)
      })
    }), E(this, "_handleCheckingForUpdates", () => {
      l.Z.dispatch({
        type: "CHECKING_FOR_UPDATES"
      })
    }), E(this, "_handleNativeUpdateNotAvailable", () => {
      this._handleCheckingForUpdates(), s.tn.get({
        url: "".concat(location.protocol, "//").concat(location.host).concat("/assets/", "version.").concat(window.GLOBAL_ENV.RELEASE_CHANNEL, ".json"),
        query: {
          _: Date.now() / 1e3 / 60 / 5 | 0
        },
        oldFormErrors: !0
      }).then(e => {
        if (null == e.body || "07ba5e82a1b0d77ad9568f2e25c052fe42add984" === e.body.hash) return this._handleUpdateNotAvailable();
        if (e.body.required || (0, a.fD)()) return this._handleUpdateDownloaded(!1);
        let t = "stable" === window.GLOBAL_ENV.RELEASE_CHANNEL ? I : T;
        if (Date.now() - N > t) return i.K.set("lastNonRequiredUpdateShown", Date.now()), this._handleUpdateDownloaded(!1)
      }, () => this._handleUpdateError())
    }), E(this, "_handleUpdateNotAvailable", () => {
      l.Z.dispatch({
        type: "UPDATE_NOT_AVAILABLE"
      }), this._emitCallbacks()
    }), E(this, "_handleUpdateAvailable", e => {
      this.updateAvailable = !0, this.hasNativeUpdate = e, l.Z.dispatch({
        type: "UPDATE_AVAILABLE"
      })
    }), E(this, "_handleUpdateManually", () => {
      this.updateAvailable = !0, this.hasNativeUpdate = !0, l.Z.dispatch({
        type: "UPDATE_MANUALLY"
      })
    }), E(this, "_handleUpdateError", e => {
      this.updateAvailable = !1, l.Z.dispatch({
        type: "UPDATE_ERROR",
        message: e
      })
    }), E(this, "_handleUpdateDownloaded", (e, t, n, s, i) => {
      this._handleUpdateAvailable(e), l.Z.dispatch({
        type: "UPDATE_DOWNLOADED",
        releaseNotes: t,
        releaseName: n,
        releaseDate: s,
        updateURL: i
      }), this._emitCallbacks()
    }), c.isPlatformEmbedded && (d.ZP.on("CHECKING_FOR_UPDATES", this._handleCheckingForUpdates), d.ZP.on("UPDATE_NOT_AVAILABLE", this._handleNativeUpdateNotAvailable), d.ZP.on("UPDATE_AVAILABLE", () => this._handleUpdateAvailable(!0)), d.ZP.on("UPDATE_ERROR", this._handleUpdateError), d.ZP.on("UPDATE_DOWNLOADED", () => this._handleUpdateDownloaded(!0)), d.ZP.on("UPDATE_MANUALLY", this._handleUpdateManually)), l.Z.wait(() => {
      this.checkForUpdates()
    }), this._checkInterval = setInterval(this.checkForUpdates, e)
  }
}