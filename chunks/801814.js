    "use strict";
    var d, c, n, i;

    function f(e, a, t) {
      return a in e ? Object.defineProperty(e, a, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[a] = t, e
    }

    function o() {
      return {
        num_failed: 0,
        num_delta_installed: 0,
        num_full_installed: 0,
        foreground_bytes_total: 0,
        background_bytes_total: 0,
        foreground_download_ms_total: 0,
        background_download_ms_total: 0,
        foreground_install_ms_total: 0,
        background_install_ms_total: 0
      }
    }

    function r(e) {
      return "host" === e
    }
    t.r(a), t.d(a, {
      default: function() {
        return l
      }
    }), (n = d || (d = {})).CHECKING_FOR_UPDATES = "checking-for-updates", n.INSTALLED_MODULE = "installed-module", n.UPDATE_CHECK_FINISHED = "update-check-finished", n.DOWNLOADING_MODULE = "downloading-module", n.DOWNLOADING_MODULE_PROGRESS = "downloading-module-progress", n.DOWNLOADING_MODULES_FINISHED = "downloading-modules-finished", n.UPDATE_MANUALLY = "update-manually", n.DOWNLOADED_MODULE = "downloaded-module", n.INSTALLING_MODULES_FINISHED = "installing-modules-finished", n.INSTALLING_MODULE = "installing-module", n.INSTALLING_MODULE_PROGRESS = "installing-module-progress", n.NO_PENDING_UPDATES = "no-pending-updates", (i = c || (c = {})).CLOUD_SYNC = "discord_cloudsync", i.DESKTOP_CORE = "discord_desktop_core", i.DISPATCH = "discord_dispatch", i.ERLPACK = "discord_erlpack", i.GAME_UTILS = "discord_game_utils", i.HOOK = "discord_hook", i.KRISP = "discord_krisp", i.MEDIA = "discord_media", i.MODULES = "discord_modules", i.OVERLAY2 = "discord_overlay2", i.RPC = "discord_rpc", i.SPELLCHECK = "discord_spellcheck", i.UPDATER_BOOTSTRAP = "discord_updater_bootstrap", i.UTILS = "discord_utils", i.VIGILANTE = "discord_vigilante", i.VOICE = "discord_voice", i.ZSTD = "discord_zstd";
    class l {
      handleDownloadingModule(e) {
        if (!r(e.name)) {
          if (null != this._downloadingModules[e.name]) {
            console.warn("Duplicate downloading-module event for module ", e.name);
            return
          }
          this._downloadingModules[e.name] = {
            startTime: BigInt(e.now),
            foreground: e.foreground
          }
        }
      }
      _updateReportField(e, a, t) {
        let d = this._report[e];
        null != d ? this._report[e] = t(d, a) : this._report[e] = a
      }
      incrementReportField(e, a) {
        this._updateReportField(e, a, (e, a) => e + a)
      }
      setReportFieldMinimum(e, a) {
        this._updateReportField(e, a, Math.min)
      }
      setReportFieldMaximum(e, a) {
        this._updateReportField(e, a, Math.max)
      }
      handleDownloadedModule(e) {
        if (r(e.name)) return;
        let a = this._downloadingModules[e.name];
        if (null == a) {
          console.warn("Downloaded complete without corresponding downloading event for module ", e.name);
          return
        }
        let t = a.foreground ? "foreground" : "background",
          d = "".concat(t, "_download_ms_").concat(e.name),
          c = "".concat(t, "_bytes_").concat(e.name),
          n = Number((BigInt(e.now) - a.startTime + BigInt(999999)) / BigInt(1e6)),
          i = !1 === e.receivedBytes ? 0 : e.receivedBytes;
        a.foreground ? (this._report.foreground_download_ms_total += n, this._report.foreground_bytes_total += i) : (this._report.background_download_ms_total += n, this._report.background_bytes_total += i), this.incrementReportField(d, n), this.incrementReportField(c, i), delete this._downloadingModules[e.name]
      }
      handleInstallingModule(e) {
        if (!r(e.name)) {
          if (null != this._installingModules[e.name]) {
            console.warn("Duplicate installing-module event for module ", e.name);
            return
          }
          this._installingModules[e.name] = {
            startTime: BigInt(e.now),
            foreground: e.foreground,
            oldVersion: e.oldVersion,
            newVersion: e.newVersion
          }
        }
      }
      handleInstalledModule(e) {
        if (r(e.name)) return;
        let a = this._installingModules[e.name];
        if (null == a) return;
        let t = a.foreground ? "foreground" : "background",
          d = "".concat(t, "_install_ms_").concat(e.name),
          c = "min_version_".concat(e.name),
          n = "max_version_".concat(e.name),
          i = Number((BigInt(e.now) - a.startTime + BigInt(999999)) / BigInt(1e6));
        a.foreground ? this._report.foreground_install_ms_total += i : this._report.background_install_ms_total += i, this.incrementReportField(d, i), this.setReportFieldMinimum(c, a.oldVersion), e.succeeded ? (!0 === e.delta ? this._report.num_delta_installed++ : this._report.num_full_installed++, this.setReportFieldMaximum(n, a.newVersion)) : this._report.num_failed++, delete this._installingModules[e.name]
      }
      trackEvent(e) {
        switch (e.type) {
          case "installing-module":
            this.handleInstallingModule(e);
            break;
          case "installed-module":
            this.handleInstalledModule(e);
            break;
          case "downloading-module":
            this.handleDownloadingModule(e);
            break;
          case "downloaded-module":
            this.handleDownloadedModule(e)
        }
      }
      getStats() {
        return this._report
      }
      reset() {
        this._report = o()
      }
      submissionReady() {
        return this._report.num_full_installed + this._report.num_failed + this._report.num_delta_installed + this._report.foreground_bytes_total + this._report.background_bytes_total !== 0 && !(Object.keys(this._installingModules).length > 0) && !(Object.keys(this._downloadingModules).length > 0) && !0
      }
      constructor() {
        f(this, "_installingModules", {}), f(this, "_downloadingModules", {}), f(this, "_report", void 0), this._report = o()
      }
    }