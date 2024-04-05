"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
}), n("653041");
var a = n("544891"),
  l = n("433517"),
  s = n("570140"),
  i = n("865427"),
  r = n("710845"),
  o = n("70956"),
  u = n("358085"),
  d = n("960048"),
  c = n("998502");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let h = 1 * o.default.Millis.HOUR,
  E = 7 * o.default.Millis.DAY,
  m = 1 * o.default.Millis.DAY,
  p = l.Storage.get("lastNonRequiredUpdateShown", Date.now()),
  S = new r.default("AutoUpdateManager");
class g {
  destroy() {
    clearInterval(this._checkInterval)
  }
  quitAndInstall() {
    this.updateAvailable && (this.hasNativeUpdate ? null != this._bootstrapper ? this._bootstrapper.finishBootstrap() : c.default.send("QUIT_AND_INSTALL") : location.reload(!0))
  }
  async _requestNewUpdaterBootstrap() {
    let e;
    S.log("Bootstrapping new updater host...");
    try {
      await c.default.ensureModule("discord_updater_bootstrap"), e = c.default.requireModule("discord_updater_bootstrap"), this._bootstrapper = e
    } catch (e) {
      this._handleNativeUpdateNotAvailable();
      return
    }
    try {
      this._handleCheckingForUpdates(), await e.bootstrap(c.default.releaseChannel, "win"), this.updateAvailable = !0, this.hasNativeUpdate = !0, this._handleUpdateDownloaded(!0)
    } catch (e) {
      S.log("Failed to bootstrap new updater:", e), this._handleNativeUpdateNotAvailable(), d.default.captureException(e)
    }
  }
  _emitCallbacks() {
    this._callbacks.forEach(e => e(this.updateAvailable)), this._callbacks = []
  }
  constructor(e = h) {
    var t = this;
    f(this, "updateAvailable", !1), f(this, "hasNativeUpdate", !1), f(this, "_checkInterval", void 0), f(this, "_callbacks", []), f(this, "_bootstrapper", null), f(this, "checkForUpdates", function() {
      let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return (e || !t.hasNativeUpdate) && (u.isPlatformEmbedded ? "win32" === (0, u.getPlatformName)() && c.default.canBootstrapNewUpdater ? t._requestNewUpdaterBootstrap() : c.default.send("CHECK_FOR_UPDATES") : t._handleNativeUpdateNotAvailable()), new Promise(e => {
        t.updateAvailable ? e(!0) : t._callbacks.push(e)
      })
    }), f(this, "_handleCheckingForUpdates", () => {
      s.default.dispatch({
        type: "CHECKING_FOR_UPDATES"
      })
    }), f(this, "_handleNativeUpdateNotAvailable", () => {
      this._handleCheckingForUpdates(), a.HTTP.get({
        url: "".concat(location.protocol, "//").concat(location.host).concat("/assets/", "version.").concat(window.GLOBAL_ENV.RELEASE_CHANNEL, ".json"),
        query: {
          _: Date.now() / 1e3 / 60 / 5 | 0
        },
        oldFormErrors: !0
      }).then(e => {
        if (null == e.body || "bb836eaf3e806cbbfc7b878b1c43735cd06905bb" === e.body.hash) return this._handleUpdateNotAvailable();
        if (e.body.required || (0, i.probablyHasBuildOverride)()) return this._handleUpdateDownloaded(!1);
        let t = "stable" === window.GLOBAL_ENV.RELEASE_CHANNEL ? E : m;
        if (Date.now() - p > t) return l.Storage.set("lastNonRequiredUpdateShown", Date.now()), this._handleUpdateDownloaded(!1)
      }, () => this._handleUpdateError())
    }), f(this, "_handleUpdateNotAvailable", () => {
      s.default.dispatch({
        type: "UPDATE_NOT_AVAILABLE"
      }), this._emitCallbacks()
    }), f(this, "_handleUpdateAvailable", e => {
      this.updateAvailable = !0, this.hasNativeUpdate = e, s.default.dispatch({
        type: "UPDATE_AVAILABLE"
      })
    }), f(this, "_handleUpdateManually", () => {
      this.updateAvailable = !0, this.hasNativeUpdate = !0, s.default.dispatch({
        type: "UPDATE_MANUALLY"
      })
    }), f(this, "_handleUpdateError", e => {
      this.updateAvailable = !1, s.default.dispatch({
        type: "UPDATE_ERROR",
        message: e
      })
    }), f(this, "_handleUpdateDownloaded", (e, t, n, a, l) => {
      this._handleUpdateAvailable(e), s.default.dispatch({
        type: "UPDATE_DOWNLOADED",
        releaseNotes: t,
        releaseName: n,
        releaseDate: a,
        updateURL: l
      }), this._emitCallbacks()
    }), u.isPlatformEmbedded && (c.default.on("CHECKING_FOR_UPDATES", this._handleCheckingForUpdates), c.default.on("UPDATE_NOT_AVAILABLE", this._handleNativeUpdateNotAvailable), c.default.on("UPDATE_AVAILABLE", () => this._handleUpdateAvailable(!0)), c.default.on("UPDATE_ERROR", this._handleUpdateError), c.default.on("UPDATE_DOWNLOADED", () => this._handleUpdateDownloaded(!0)), c.default.on("UPDATE_MANUALLY", this._handleUpdateManually)), s.default.wait(() => {
      this.checkForUpdates()
    }), this._checkInterval = setInterval(this.checkForUpdates, e)
  }
}