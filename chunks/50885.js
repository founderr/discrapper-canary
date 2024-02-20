"use strict";
E.r(_), E.d(_, {
  NativePermissionRequestType: function() {
    return r
  },
  ThumbarButtonName: function() {
    return a
  },
  default: function() {
    return B
  }
}), E("222007"), E("70102"), E("511434"), E("313619"), E("654714"), E("287168"), E("956660"), E("424973");
var t, o, I, T, r, a, n, i, A = E("627445"),
  s = E.n(A),
  R = E("817792"),
  N = E("872717"),
  O = E("95410"),
  S = E("115718"),
  L = E("773336"),
  l = E("49111"),
  D = E("446825").Buffer;
let C = window.DiscordNative,
  c = ["jpg", "jpeg", "png"],
  u = null,
  d = null,
  U = null,
  M = {};
null != C && (u = C.remoteApp.getVersion().split(".").map(e => parseInt(e)), U = null === (t = (o = C.remoteApp).getModuleVersions) || void 0 === t ? void 0 : t.call(o), d = null === (I = (T = C.remoteApp).getBuildNumber) || void 0 === I ? void 0 : I.call(T));
let P = new Set(["discord_erlpack", "discord_game_utils", "discord_rpc", "discord_spellcheck", "discord_utils", "discord_voice"]),
  G = !1;
async function h(e) {
  let _ = await fetch(new Request(e, {
    method: "GET",
    mode: "cors"
  }));
  s(200 === _.status, "Data fetch unsuccessful");
  let E = await _.arrayBuffer();
  return s(null != E, "Data is null"), E
}

function m(e) {
  return h(e)
}

function p(e) {
  var _, E, t, o, I, T, r, a;
  return {
    id: M[null !== (_ = e.id) && void 0 !== _ ? _ : ""],
    nativeProcessObserverId: parseInt(null !== (E = e.id) && void 0 !== E ? E : "", 10),
    name: null !== (t = e.gameName) && void 0 !== t ? t : e.name,
    processName: null !== (o = e.name) && void 0 !== o ? o : "",
    hidden: e.hidden,
    elevated: e.elevated,
    sandboxed: null !== (I = e.sandboxed) && void 0 !== I && I,
    lastFocused: e.lastFocused,
    exePath: e.exePath,
    exeName: e.exeName,
    cmdLine: e.cmdLine,
    distributor: e.distributor,
    sku: e.sku,
    pid: e.pid,
    pidPath: null !== (T = e.pidPath) && void 0 !== T ? T : [],
    windowHandle: null !== (r = e.windowHandle) && void 0 !== r ? r : null,
    fullscreenType: null !== (a = e.fullscreenType) && void 0 !== a ? a : S.RunningProcessFullscreenType.UNKNOWN
  }
}(n = r || (r = {}))[n.Camera = 0] = "Camera", n[n.Microphone = 1] = "Microphone", n[n.Photo = 2] = "Photo", n[n.InputMonitoring = 3] = "InputMonitoring", n[n.ScreenRecording = 4] = "ScreenRecording", (i = a || (a = {})).VIDEO = "VIDEO", i.MUTE = "MUTE", i.DEAFEN = "DEAFEN", i.DISCONNECT = "DISCONNECT";
var B = {
  requireModule: e => C.nativeModules.requireModule(e),
  ensureModule: e => L.isPlatformEmbedded ? __OVERLAY__ && P.has(e) ? Promise.resolve() : C.nativeModules.ensureModule(e) : Promise.reject(Error("not embedded")),
  get canBootstrapNewUpdater() {
    return C.nativeModules.canBootstrapNewUpdater || !1
  },
  getCrashReporterMetadata: () => C.crashReporter.getMetadata(),
  getSetting: async (e, _) => await C.settings.get(e, _),
  beforeUnload() {
    let e;
    try {
      e = this.requireModule("discord_overlay2")
    } catch (e) {}
    e && e.reset && e.reset(), e && e.disconnectAllProcesses && e.destroyHostProcess && (e.disconnectAllProcesses(), e.destroyHostProcess()), C.remotePowerMonitor.removeAllListeners(), window.location.origin === window.GLOBAL_ENV.MIGRATION_SOURCE_ORIGIN && !0 !== O.default.get(R.DOMAIN_MIGRATION_SUCCESS_KEY) && this.supportsFeature(l.NativeFeatures.USER_DATA_CACHE) && C.userDataCache.cacheUserData(O.default.stringify())
  },
  inputEventRegister(e, _, E, t) {
    !Array.isArray(_) && (_ = _.toJS()), this.getDiscordUtils().inputEventRegister(parseInt(e), _.map(e => {
      let [_, E, t] = e;
      return "string" == typeof t ? [_, E, t] : [_, E]
    }), E, t)
  },
  inputEventUnregister(e) {
    this.getDiscordUtils().inputEventUnregister(parseInt(e))
  },
  setOnInputEventCallback(e) {
    L.isPlatformEmbedded && this.getDiscordUtils().inputWatchAll(e)
  },
  setFocused(e) {
    this.getDiscordUtils().inputSetFocused(e)
  },
  setObservedGamesCallback(e, _) {
    try {
      M = {};
      let E = 0;
      this.getDiscordUtils().setObservedGamesCallback(e.map(e => {
        let _ = ++E;
        return null != e.id && (M[_] = e.id), {
          ...e,
          cmdline: e.cmdLine,
          id: _
        }
      }), e => _(e.map(p)))
    } catch (e) {}
  },
  setCandidateGamesCallback(e) {
    this.getDiscordUtils().setCandidateGamesCallback(_ => e(_.map(p)))
  },
  clearCandidateGamesCallback() {
    this.getDiscordUtils().clearCandidateGamesCallback()
  },
  setGameCandidateOverrides(e) {
    this.getDiscordUtils().setGameCandidateOverrides(e.map(e => ({
      ...e,
      gameId: e.id,
      gameName: e.name
    })))
  },
  shouldDisplayNotifications() {
    return this.getDiscordUtils().shouldDisplayNotifications()
  },
  getVoiceEngine() {
    if (__OVERLAY__) throw Error("cannot require discord_voice in overlay");
    return G = !0, this.requireModule("discord_voice")
  },
  getDiscordUtils() {
    if (!G) try {
      this.getVoiceEngine()
    } catch (e) {}
    return this.requireModule("discord_utils")
  },
  isSystemDarkMode() {
    var e, _, E;
    return !!(0, L.isWindows)() && (null === (E = null === (e = (_ = this.getDiscordUtils()).isSystemDarkMode) || void 0 === e ? void 0 : e.call(_)) || void 0 === E || E)
  },
  getGameUtils() {
    return this.requireModule("discord_game_utils")
  },
  getCloudSync() {
    return this.requireModule("discord_cloudsync")
  },
  getDispatch() {
    return this.requireModule("discord_dispatch")
  },
  setBadge(e) {
    if ("darwin" === (0, L.getPlatformName)()) {
      let _ = ""; - 1 === e ? _ = "•" : e > 0 && (_ = "".concat(e)), C.remoteApp.dock.setBadge(_)
    } else "win32" === (0, L.getPlatformName)() ? this.send("APP_BADGE_SET", e) : "linux" === (0, L.getPlatformName)() && C.remoteApp.setBadgeCount(e >= 0 ? e : 0)
  },
  setSystemTrayIcon(e) {
    L.isPlatformEmbedded && this.send("SYSTEM_TRAY_SET_ICON", e)
  },
  setThumbarButtons(e) {
    var _, E;
    L.isPlatformEmbedded && (null === (E = C.thumbar) || void 0 === E || null === (_ = E.setThumbarButtons) || void 0 === _ || _.call(E, e, this.isSystemDarkMode()))
  },
  bounceDock(e) {
    if (L.isPlatformEmbedded) {
      let _ = C.remoteApp;
      if (null != _.dock) {
        let E = _.dock.bounce(e);
        return async () => {
          let e = await E;
          _.dock.cancelBounce(e)
        }
      }
    }
  },
  setSystemTrayApplications(e) {
    L.isPlatformEmbedded && this.send("SYSTEM_TRAY_SET_APPLICATIONS", e)
  },
  get architecture() {
    return L.isPlatformEmbedded ? C.process.arch : ""
  },
  get releaseChannel() {
    if (!L.isPlatformEmbedded) return "";
    let e = C.remoteApp.getReleaseChannel();
    if (null != e) return e;
    return ""
  },
  get version() {
    return u
  },
  get buildNumber() {
    return d
  },
  get moduleVersions() {
    return U
  },
  copy(e) {
    L.isPlatformEmbedded && C.clipboard.copy(e)
  },
  async copyImage(e) {
    s(L.isPlatformEmbedded, "Copy image method called outside native app"), s("function" == typeof C.clipboard.copyImage, "Copy image not supported");
    let _ = await h(e);
    C.clipboard.copyImage(D.from(_), e)
  },
  async saveImage(e) {
    var _;
    s(L.isPlatformEmbedded, "Save image method called outside native app");
    let E = new URL(e),
      t = null !== (_ = E.pathname.split("/").pop()) && void 0 !== _ ? _ : "unknown",
      o = await h(e),
      I = D.from(o);
    C.fileManager.saveWithDialog(I, t)
  },
  async saveFile(e, _) {
    var E;
    s(L.isPlatformEmbedded, "Save file method called outside native app");
    let t = new URL(e),
      o = null !== (E = null != _ ? _ : t.pathname.split("/").pop()) && void 0 !== E ? E : "unknown",
      I = await h(e),
      T = D.from(I);
    C.fileManager.saveWithDialog(T, o)
  },
  canCopyImage() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0;
    if (null != e) {
      var _;
      let E = new URL(e).pathname,
        t = null === (_ = E.split(".").pop()) || void 0 === _ ? void 0 : _.toLowerCase();
      if (null != t && !c.includes(t)) return !1
    }
    return "function" == typeof C.clipboard.copyImage
  },
  cut() {
    L.isPlatformEmbedded && C.clipboard.cut()
  },
  paste() {
    L.isPlatformEmbedded && C.clipboard.paste()
  },
  readClipboard: () => L.isPlatformEmbedded ? C.clipboard.read() : "",
  on(e, _) {
    C.ipc.on(e, _)
  },
  invoke(e) {
    for (var _ = arguments.length, E = Array(_ > 1 ? _ - 1 : 0), t = 1; t < _; t++) E[t - 1] = arguments[t];
    return C.ipc.invoke(e, ...E)
  },
  send(e) {
    for (var _ = arguments.length, E = Array(_ > 1 ? _ - 1 : 0), t = 1; t < _; t++) E[t - 1] = arguments[t];
    C.ipc.send(e, ...E)
  },
  flashFrame(e) {
    C.window.flashFrame(e)
  },
  webAuthnRegister: e => C.nativeModules.ensureModule("discord_webauthn").then(() => C.webAuthn.webAuthnRegister(e)),
  webAuthnAuthenticate: e => C.nativeModules.ensureModule("discord_webauthn").then(() => C.webAuthn.webAuthnAuthenticate(e)),
  minimize(e) {
    C.window.minimize(e)
  },
  restore(e) {
    C.window.restore(e)
  },
  maximize(e) {
    C.window.maximize(e)
  },
  focus(e) {
    let _ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    _ && (0, L.isWindows)() && this.minimize(null), C.window.focus(_, e)
  },
  blur() {
    L.isPlatformEmbedded && null != C.window.blur ? C.window.blur() : window.blur()
  },
  fullscreen(e) {
    C.window.fullscreen(e)
  },
  close(e) {
    C.window.close(e)
  },
  setAlwaysOnTop(e, _) {
    "function" == typeof C.window.setAlwaysOnTop && C.window.setAlwaysOnTop(e, _)
  },
  async isAlwaysOnTop(e) {
    let _ = !1;
    return "function" == typeof C.window.isAlwaysOnTop && (_ = await C.window.isAlwaysOnTop(e)), _
  },
  purgeMemory() {
    L.isPlatformEmbedded && C.processUtils.purgeMemory()
  },
  updateCrashReporter(e) {
    C.crashReporter.updateCrashReporter(e)
  },
  triggerJSException(e) {
    C.crashReporter.triggerJSException(e)
  },
  flushDNSCache() {
    L.isPlatformEmbedded && C.processUtils.flushDNSCache()
  },
  supportsFeature: e => C.features.supports(e),
  getEnableHardwareAcceleration: () => !L.isPlatformEmbedded || !__OVERLAY__ && C.gpuSettings.getEnableHardwareAcceleration(),
  setEnableHardwareAcceleration(e) {
    C.gpuSettings.setEnableHardwareAcceleration(e)
  },
  getGPUDriverVersions() {
    return (0, L.isWindows)() && null != this.getDiscordUtils().getGPUDriverVersions ? this.getDiscordUtils().getGPUDriverVersions() : Promise.resolve(Object.freeze({}))
  },
  setZoomFactor: e => !!L.isPlatformEmbedded && (C.window.setZoomFactor(e), !0),
  setBackgroundThrottling(e) {
    null != C.window.setBackgroundThrottling ? C.window.setBackgroundThrottling(e) : C.window.webContents.setBackgroundThrottling(e)
  },
  getPidFromDesktopSource(e) {
    if (!((0, L.isWindows)() || (0, L.isMac)()) || null == this.getDiscordUtils().getPidFromWindowHandle) return null;
    let _ = null == e ? void 0 : e.split(":"),
      E = null == _ ? void 0 : _[0];
    if ("window" === E) {
      var t;
      let e = null !== (t = null == _ ? void 0 : _[1]) && void 0 !== t ? t : "",
        E = this.getDiscordUtils().getPidFromWindowHandle(e);
      return null == E || 0 === E ? null : E
    }
    if (E.startsWith("screen")) return 1;
    return null
  },
  getDesktopSourceFromPid(e) {
    if (!(0, L.isWindows)() || null == this.getDiscordUtils().getWindowHandleFromPid || null == e) return null;
    let _ = this.getDiscordUtils().getWindowHandleFromPid(e);
    return null == _ || 0 === _.length ? null : ["window", _, "0"].join(":")
  },
  generateSessionFromPid(e) {
    return this.getDiscordUtils().generateSessionFromPid(e)
  },
  getAudioPid(e) {
    return null == this.getDiscordUtils().getAudioPid || null == e ? e : this.getDiscordUtils().getAudioPid(e)
  },
  setForegroundProcess(e) {
    let {
      setForegroundProcess: _
    } = this.getDiscordUtils();
    return null != _ && _(e)
  },
  getDiscordMemoryUsage() {
    let {
      getDiscordMemoryUsage: e
    } = this.getDiscordUtils();
    return null != e ? e() : null
  },
  getDiscordMemoryUsageElectronRenderer() {
    let {
      getDiscordMemoryUsageElectronRenderer: e
    } = this.getDiscordUtils();
    return null == e ? void 0 : e()
  },
  showOpenDialog: e => C.fileManager.showOpenDialog({
    properties: e
  }),
  flushStorageData: () => L.isPlatformEmbedded ? new Promise((e, _) => {
    null != C.processUtils.flushStorageData ? C.processUtils.flushStorageData(E => null != E ? _(Error(E)) : e()) : e()
  }) : Promise.resolve(),
  flushCookies: () => L.isPlatformEmbedded ? new Promise((e, _) => {
    null != C.processUtils.flushCookies ? C.processUtils.flushCookies(E => null != E ? _(Error(E)) : e()) : e()
  }) : Promise.resolve(),
  setCrashInformation(e, _) {
    var E;
    L.isPlatformEmbedded && (null == C ? void 0 : null === (E = C.processUtils) || void 0 === E ? void 0 : E.setCrashInformation) != null && C.processUtils.setCrashInformation(e, _)
  },
  blockDisplaySleep: () => L.isPlatformEmbedded && null != C.powerSaveBlocker ? C.powerSaveBlocker.blockDisplaySleep() : null,
  unblockDisplaySleep(e) {
    L.isPlatformEmbedded && null != C.powerSaveBlocker && C.powerSaveBlocker.unblockDisplaySleep(e)
  },
  cleanupDisplaySleep() {
    L.isPlatformEmbedded && null != C.powerSaveBlocker && C.powerSaveBlocker.cleanupDisplaySleep()
  },
  relaunch() {
    L.isPlatformEmbedded && null != C.remoteApp.relaunch && C.remoteApp.relaunch()
  },
  makeChunkedRequest(e, _, E) {
    let t = "".concat(N.default.getAPIBaseURL()).concat(e);
    if (!L.isPlatformEmbedded) return Promise.reject(Error("Not embedded!"));
    if (null == C.http) return Promise.reject(Error("HTTP module not available"));
    let {
      method: o,
      maxBps: I,
      token: T,
      chunkInterval: r,
      contentType: a
    } = {
      maxBps: 8e3,
      chunkInterval: 50,
      contentType: "application/json",
      ...E
    }, n = _;
    "application/json" === a && (n = JSON.stringify(_));
    let i = I * (r / 1e3),
      A = Math.ceil(n.length / i),
      s = Array(A);
    for (let e = 0; e < A; e++) {
      let _ = e * i;
      s[e] = n.substring(_, _ + i)
    }
    return new Promise((e, _) => {
      null != C.http && C.http.makeChunkedRequest(t, s, {
        method: o,
        chunkInterval: r,
        contentType: a,
        token: T
      }, (E, t) => null != E ? _(E) : t.status >= 400 ? _(Error(t.body)) : void e(t))
    })
  },
  submitLiveCrashReport(e) {
    if (!(0, L.isWindows)() || null == this.getDiscordUtils().submitLiveCrashReport) return Promise.resolve();
    let _ = this.getCrashReporterMetadata(),
      E = C.app.getReleaseChannel(),
      t = null == _ ? void 0 : _.sentry;
    return this.getDiscordUtils().submitLiveCrashReport(E, {
      ...t,
      ...e
    })
  },
  crash(e) {
    let _ = this.getDiscordUtils().crash;
    return null != _ && (_(e), !0)
  },
  setApplicationBackgroundColor(e) {
    C.ipc.send("SETTINGS_UPDATE_BACKGROUND_COLOR", e)
  },
  initializeExitHook() {
    let {
      initializeExitHook: e
    } = this.getDiscordUtils();
    null != e && e()
  },
  asyncify: e => new Promise((_, E) => {
    e(_)
  }),
  IsGameDisplayModeUpdateSupported() {
    let {
      gameDisplayModeUpdate: e
    } = this.getDiscordUtils();
    return null != e
  },
  GameDisplayModeUpdate(e) {
    let {
      gameDisplayModeUpdate: _
    } = this.getDiscordUtils();
    return null != _ && null != e && _(e)
  },
  GameDisplayModeIsGameSupported(e) {
    let {
      gameDisplayModeIsSupported: _
    } = this.getDiscordUtils();
    return null != _ && null != e && _(e)
  },
  GetWindowFullscreenTypeByPid(e, _, E) {
    var t;
    let {
      getWindowFullscreenTypeByPid: o
    } = this.getDiscordUtils(), I = 0 !== e && null != o && null != _ ? o(e, _) : null;
    return -1 === I && (I = null), null !== (t = null != I ? I : E) && void 0 !== t ? t : S.RunningProcessFullscreenType.UNKNOWN
  },
  isModuleVersionAtLeast(e, _) {
    var E, t, o;
    let I = [...null != u ? u : [0, 0, 0]];
    I.push(null !== (t = null === (E = this.moduleVersions) || void 0 === E ? void 0 : E[e]) && void 0 !== t ? t : 0);
    let T = null !== (o = _[this.releaseChannel]) && void 0 !== o ? o : _.stable;
    for (let [e, _] of I.entries()) {
      if (_ > T[e]) break;
      if (_ < T[e]) return !1
    }
    return !0
  }
}