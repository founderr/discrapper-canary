n.d(t, {
    jK: function () {
        return s;
    },
    tS: function () {
        return l;
    }
});
var r,
    i,
    a,
    o,
    s,
    l,
    u = n(47120);
var c = n(411104);
var d = n(653041);
var _ = n(512722),
    E = n.n(_),
    f = n(719711),
    h = n(544891),
    p = n(433517),
    m = n(593472),
    I = n(189451),
    T = n(358085),
    g = n(591759),
    S = n(981631),
    A = n(413135).Buffer;
let v = window.DiscordNative,
    N = ['jpg', 'jpeg', 'png'],
    O = null,
    R = null,
    C = null,
    y = {};
null != v &&
    ((O = v.remoteApp
        .getVersion()
        .split('.')
        .map((e) => parseInt(e))),
    (C = null === (r = (i = v.remoteApp).getModuleVersions) || void 0 === r ? void 0 : r.call(i)),
    (R = null === (a = (o = v.remoteApp).getBuildNumber) || void 0 === a ? void 0 : a.call(o)));
let b = new Set(['discord_erlpack', 'discord_game_utils', 'discord_rpc', 'discord_spellcheck', 'discord_utils', 'discord_voice']),
    L = !1;
async function D(e) {
    let t = {
            method: 'GET',
            mode: 'cors'
        },
        n = await fetch(new Request(e, t));
    E()(200 === n.status, 'Data fetch unsuccessful');
    let r = await n.arrayBuffer();
    return E()(null != r, 'Data is null'), r;
}
function M(e) {
    return D(e);
}
function P(e) {
    var t, n, r, i, a, o, s, l;
    return {
        id: y[null !== (t = e.id) && void 0 !== t ? t : ''],
        nativeProcessObserverId: parseInt(null !== (n = e.id) && void 0 !== n ? n : '', 10),
        name: null !== (r = e.gameName) && void 0 !== r ? r : e.name,
        processName: null !== (i = e.name) && void 0 !== i ? i : '',
        hidden: e.hidden,
        elevated: e.elevated,
        sandboxed: null !== (a = e.sandboxed) && void 0 !== a && a,
        lastFocused: e.lastFocused,
        exePath: e.exePath,
        exeName: e.exeName,
        cmdLine: e.cmdLine,
        distributor: e.distributor,
        sku: e.sku,
        pid: e.pid,
        pidPath: null !== (o = e.pidPath) && void 0 !== o ? o : [],
        windowHandle: null !== (s = e.windowHandle) && void 0 !== s ? s : null,
        fullscreenType: null !== (l = e.fullscreenType) && void 0 !== l ? l : m.Jx.UNKNOWN
    };
}
!(function (e) {
    (e[(e.Camera = 0)] = 'Camera'), (e[(e.Microphone = 1)] = 'Microphone'), (e[(e.Photo = 2)] = 'Photo'), (e[(e.InputMonitoring = 3)] = 'InputMonitoring'), (e[(e.ScreenRecording = 4)] = 'ScreenRecording');
})(s || (s = {})),
    !(function (e) {
        (e.VIDEO = 'VIDEO'), (e.MUTE = 'MUTE'), (e.DEAFEN = 'DEAFEN'), (e.DISCONNECT = 'DISCONNECT');
    })(l || (l = {})),
    (t.ZP = {
        requireModule: (e) => v.nativeModules.requireModule(e),
        ensureModule: (e) => (T.isPlatformEmbedded ? (__OVERLAY__ && b.has(e) ? Promise.resolve() : v.nativeModules.ensureModule(e)) : Promise.reject(Error('not embedded'))),
        get canBootstrapNewUpdater() {
            return v.nativeModules.canBootstrapNewUpdater || !1;
        },
        getCrashReporterMetadata: () => v.crashReporter.getMetadata(),
        getSetting: async (e, t) => await v.settings.get(e, t),
        beforeUnload() {
            var e, t;
            let n;
            try {
                n = this.requireModule('discord_overlay2');
            } catch (e) {}
            n && n.reset && n.reset(), n && n.disconnectAllProcesses && n.destroyHostProcess && (n.disconnectAllProcesses(), n.destroyHostProcess()), v.remotePowerMonitor.removeAllListeners(), window.location.origin === window.GLOBAL_ENV.MIGRATION_SOURCE_ORIGIN && !0 !== p.K.get(f.SV) && this.supportsFeature(S.eRX.USER_DATA_CACHE) && v.userDataCache.cacheUserData(p.K.stringify()), null == v || null === (t = v.window) || void 0 === t || t.close(null == v ? void 0 : null === (e = v.globalOverlay) || void 0 === e ? void 0 : e.WINDOW_KEY);
        },
        inputEventRegister(e, t, n, r) {
            !Array.isArray(t) && (t = t.toJS()),
                this.getDiscordUtils().inputEventRegister(
                    parseInt(e),
                    t.map((e) => {
                        let [t, n, r] = e;
                        return 'string' == typeof r ? [t, n, r] : [t, n];
                    }),
                    n,
                    r
                );
        },
        inputEventUnregister(e) {
            this.getDiscordUtils().inputEventUnregister(parseInt(e));
        },
        setOnInputEventCallback(e) {
            if (!!T.isPlatformEmbedded) this.getDiscordUtils().inputWatchAll(e);
        },
        setFocused(e) {
            this.getDiscordUtils().inputSetFocused(e);
        },
        setObservedGamesCallback(e, t) {
            try {
                y = {};
                let n = 0;
                this.getDiscordUtils().setObservedGamesCallback(
                    e.map((e) => {
                        let t = ++n;
                        return (
                            null != e.id && (y[t] = e.id),
                            {
                                ...e,
                                cmdline: e.cmdLine,
                                id: t
                            }
                        );
                    }),
                    (e) => t(e.map(P))
                );
            } catch (e) {}
        },
        setCandidateGamesCallback(e) {
            this.getDiscordUtils().setCandidateGamesCallback((t) => e(t.map(P)));
        },
        clearCandidateGamesCallback() {
            this.getDiscordUtils().clearCandidateGamesCallback();
        },
        setGameCandidateOverrides(e) {
            this.getDiscordUtils().setGameCandidateOverrides(
                e.map((e) => ({
                    ...e,
                    gameId: e.id,
                    gameName: e.name
                }))
            );
        },
        setObserverDebugCallback(e, t, n) {
            this.getDiscordUtils().setObserverDebugCallback((t) => e(t), t, n);
        },
        clearObserverDebugCallback() {
            this.getDiscordUtils().setObserverDebugCallback(null, I.l.NONE, 0);
        },
        shouldDisplayNotifications() {
            return this.getDiscordUtils().shouldDisplayNotifications();
        },
        getVoiceEngine() {
            if (__OVERLAY__) throw Error('cannot require discord_voice in overlay');
            return (L = !0), this.requireModule('discord_voice');
        },
        getDiscordUtils() {
            if (!L)
                try {
                    this.getVoiceEngine();
                } catch (e) {}
            return this.requireModule('discord_utils');
        },
        isSystemDarkMode() {
            var e, t, n;
            return !!(0, T.isWindows)() && (null === (n = null === (e = (t = this.getDiscordUtils()).isSystemDarkMode) || void 0 === e ? void 0 : e.call(t)) || void 0 === n || n);
        },
        getGameUtils() {
            return this.requireModule('discord_game_utils');
        },
        getCloudSync() {
            return this.requireModule('discord_cloudsync');
        },
        getDispatch() {
            return this.requireModule('discord_dispatch');
        },
        setBadge(e) {
            if ('darwin' === (0, T.getPlatformName)()) {
                let t = '';
                -1 === e ? (t = '\u2022') : e > 0 && (t = ''.concat(e)), v.remoteApp.dock.setBadge(t);
            } else 'win32' === (0, T.getPlatformName)() ? this.send('APP_BADGE_SET', e) : 'linux' === (0, T.getPlatformName)() && v.remoteApp.setBadgeCount(e >= 0 ? e : 0);
        },
        setSystemTrayIcon(e) {
            if (!!T.isPlatformEmbedded) this.send('SYSTEM_TRAY_SET_ICON', e);
        },
        setThumbarButtons(e) {
            var t, n;
            if (!!T.isPlatformEmbedded) null === (n = v.thumbar) || void 0 === n || null === (t = n.setThumbarButtons) || void 0 === t || t.call(n, e, this.isSystemDarkMode());
        },
        bounceDock(e) {
            if (T.isPlatformEmbedded) {
                let t = v.remoteApp;
                if (null != t.dock) {
                    let n = t.dock.bounce(e);
                    return async () => {
                        let e = await n;
                        t.dock.cancelBounce(e);
                    };
                }
            }
        },
        setSystemTrayApplications(e) {
            if (!!T.isPlatformEmbedded) this.send('SYSTEM_TRAY_SET_APPLICATIONS', e);
        },
        get architecture() {
            return T.isPlatformEmbedded ? v.process.arch : '';
        },
        get releaseChannel() {
            if (!T.isPlatformEmbedded) return '';
            let e = v.remoteApp.getReleaseChannel();
            if (null != e) return e;
            return '';
        },
        get version() {
            return O;
        },
        get buildNumber() {
            return R;
        },
        get moduleVersions() {
            return C;
        },
        copy(e) {
            T.isPlatformEmbedded && v.clipboard.copy(e);
        },
        async copyImage(e) {
            E()(T.isPlatformEmbedded, 'Copy image method called outside native app'), E()('function' == typeof v.clipboard.copyImage, 'Copy image not supported');
            let t = await M(e);
            v.clipboard.copyImage(A.from(t), e);
        },
        async saveImage(e) {
            var t;
            E()(T.isPlatformEmbedded, 'Save image method called outside native app');
            let n = g.Z.toURLSafe(e);
            if (null == n) return;
            let r = null !== (t = n.pathname.split('/').pop()) && void 0 !== t ? t : 'unknown',
                i = await M(e),
                a = A.from(i);
            v.fileManager.saveWithDialog(a, r);
        },
        async saveFile(e, t) {
            var n;
            E()(T.isPlatformEmbedded, 'Save file method called outside native app');
            let r = g.Z.toURLSafe(e);
            if (null == r) return;
            let i = null !== (n = null != t ? t : r.pathname.split('/').pop()) && void 0 !== n ? n : 'unknown',
                a = await D(e),
                o = A.from(a);
            v.fileManager.saveWithDialog(o, i);
        },
        canCopyImage() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0;
            if (null != e) {
                var t, n;
                let r = null === (t = g.Z.toURLSafe(e)) || void 0 === t ? void 0 : t.pathname;
                if (null == r) return !1;
                let i = null === (n = r.split('.').pop()) || void 0 === n ? void 0 : n.toLowerCase();
                if (null != i && !N.includes(i)) return !1;
            }
            return 'function' == typeof v.clipboard.copyImage;
        },
        cut() {
            T.isPlatformEmbedded && v.clipboard.cut();
        },
        paste() {
            T.isPlatformEmbedded && v.clipboard.paste();
        },
        readClipboard: () => (T.isPlatformEmbedded ? v.clipboard.read() : ''),
        on(e, t) {
            v.ipc.on(e, t);
        },
        invoke(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            return v.ipc.invoke(e, ...n);
        },
        send(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            v.ipc.send(e, ...n);
        },
        flashFrame(e) {
            v.window.flashFrame(e);
        },
        webAuthnRegister: (e) => v.nativeModules.ensureModule('discord_webauthn').then(() => v.webAuthn.webAuthnRegister(e)),
        webAuthnAuthenticate: (e) => v.nativeModules.ensureModule('discord_webauthn').then(() => v.webAuthn.webAuthnAuthenticate(e)),
        minimize(e) {
            v.window.minimize(e);
        },
        restore(e) {
            v.window.restore(e);
        },
        maximize(e) {
            v.window.maximize(e);
        },
        focus(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            t && (0, T.isWindows)() && this.minimize(null), v.window.focus(t, e);
        },
        blur() {
            T.isPlatformEmbedded && null != v.window.blur ? v.window.blur() : window.blur();
        },
        fullscreen(e) {
            v.window.fullscreen(e);
        },
        close(e) {
            v.window.close(e);
        },
        setAlwaysOnTop(e, t) {
            'function' == typeof v.window.setAlwaysOnTop && v.window.setAlwaysOnTop(e, t);
        },
        async isAlwaysOnTop(e) {
            let t = !1;
            return 'function' == typeof v.window.isAlwaysOnTop && (t = await v.window.isAlwaysOnTop(e)), t;
        },
        purgeMemory() {
            if (!!T.isPlatformEmbedded) v.processUtils.purgeMemory();
        },
        updateCrashReporter(e) {
            v.crashReporter.updateCrashReporter(e);
        },
        triggerJSException(e) {
            v.crashReporter.triggerJSException(e);
        },
        flushDNSCache() {
            T.isPlatformEmbedded && v.processUtils.flushDNSCache();
        },
        supportsFeature: (e) => v.features.supports(e),
        getEnableHardwareAcceleration: () => !T.isPlatformEmbedded || (!__OVERLAY__ && v.gpuSettings.getEnableHardwareAcceleration()),
        setEnableHardwareAcceleration(e) {
            v.gpuSettings.setEnableHardwareAcceleration(e);
        },
        setChromiumSwitches(e) {
            v.gpuSettings.setChromiumSwitches(e);
        },
        getGPUDriverVersions() {
            return (0, T.isWindows)() && null != this.getDiscordUtils().getGPUDriverVersions ? this.getDiscordUtils().getGPUDriverVersions() : Promise.resolve(Object.freeze({}));
        },
        setZoomFactor: (e) => !!T.isPlatformEmbedded && (v.window.setZoomFactor(e), !0),
        setBackgroundThrottling(e) {
            null != v.window.setBackgroundThrottling ? v.window.setBackgroundThrottling(e) : v.window.webContents.setBackgroundThrottling(e);
        },
        pauseFrameEvictor() {
            var e, t;
            null === (e = (t = v.app).pauseFrameEvictor) || void 0 === e || e.call(t);
        },
        unpauseFrameEvictor() {
            var e, t;
            null === (e = (t = v.app).pauseFrameEvictor) || void 0 === e || e.call(t);
        },
        getPidFromDesktopSource(e) {
            if (!((0, T.isWindows)() || (0, T.isMac)()) || null == this.getDiscordUtils().getPidFromWindowHandle) return null;
            let t = null == e ? void 0 : e.split(':'),
                n = null == t ? void 0 : t[0];
            if ('window' === n) {
                var r;
                let e = null !== (r = null == t ? void 0 : t[1]) && void 0 !== r ? r : '',
                    n = this.getDiscordUtils().getPidFromWindowHandle(e);
                return null == n || 0 === n ? null : n;
            }
            if (n.startsWith('screen')) return 1;
            if ('prepicked' === n) return 1;
            else return null;
        },
        getDesktopSourceFromPid(e) {
            if (!(0, T.isWindows)() || null == this.getDiscordUtils().getWindowHandleFromPid || null == e) return null;
            let t = this.getDiscordUtils().getWindowHandleFromPid(e);
            return null == t || 0 === t.length ? null : ['window', t, '0'].join(':');
        },
        generateSessionFromPid(e) {
            return this.getDiscordUtils().generateSessionFromPid(e);
        },
        getAudioPid(e) {
            return null == this.getDiscordUtils().getAudioPid || null == e ? e : this.getDiscordUtils().getAudioPid(e);
        },
        setForegroundProcess(e) {
            let { setForegroundProcess: t } = this.getDiscordUtils();
            return null != t && t(e);
        },
        getDiscordMemoryUsage() {
            let { getDiscordMemoryUsage: e } = this.getDiscordUtils();
            return null != e ? e() : null;
        },
        getDiscordMemoryUsageElectronRenderer() {
            let { getDiscordMemoryUsageElectronRenderer: e } = this.getDiscordUtils();
            return null == e ? void 0 : e();
        },
        showOpenDialog: (e) => v.fileManager.showOpenDialog({ properties: e }),
        flushStorageData: () =>
            T.isPlatformEmbedded
                ? new Promise((e, t) => {
                      null != v.processUtils.flushStorageData ? v.processUtils.flushStorageData((n) => (null != n ? t(Error(n)) : e())) : e();
                  })
                : Promise.resolve(),
        flushCookies: () =>
            T.isPlatformEmbedded
                ? new Promise((e, t) => {
                      null != v.processUtils.flushCookies ? v.processUtils.flushCookies((n) => (null != n ? t(Error(n)) : e())) : e();
                  })
                : Promise.resolve(),
        setCrashInformation(e, t) {
            var n;
            if (!!T.isPlatformEmbedded && (null == v ? void 0 : null === (n = v.processUtils) || void 0 === n ? void 0 : n.setCrashInformation) != null) v.processUtils.setCrashInformation(e, t);
        },
        blockDisplaySleep: () => (T.isPlatformEmbedded && null != v.powerSaveBlocker ? v.powerSaveBlocker.blockDisplaySleep() : null),
        unblockDisplaySleep(e) {
            if (!!T.isPlatformEmbedded && null != v.powerSaveBlocker) v.powerSaveBlocker.unblockDisplaySleep(e);
        },
        cleanupDisplaySleep() {
            if (!!T.isPlatformEmbedded && null != v.powerSaveBlocker) v.powerSaveBlocker.cleanupDisplaySleep();
        },
        relaunch() {
            if (!!T.isPlatformEmbedded) null != v.remoteApp.relaunch && v.remoteApp.relaunch();
        },
        makeChunkedRequest(e, t, n) {
            let r = ''.concat((0, h.K0)()).concat(e);
            if (!T.isPlatformEmbedded) return Promise.reject(Error('Not embedded!'));
            if (null == v.http) return Promise.reject(Error('HTTP module not available'));
            let {
                    method: i,
                    maxBps: a,
                    token: o,
                    chunkInterval: s,
                    contentType: l
                } = {
                    maxBps: 8000,
                    chunkInterval: 50,
                    contentType: 'application/json',
                    ...n
                },
                u = t;
            'application/json' === l && (u = JSON.stringify(t));
            let c = (s / 1000) * a,
                d = Math.ceil(u.length / c),
                _ = Array(d);
            for (let e = 0; e < d; e++) {
                let t = e * c;
                _[e] = u.substring(t, t + c);
            }
            return new Promise((e, t) => {
                null != v.http &&
                    v.http.makeChunkedRequest(
                        r,
                        _,
                        {
                            method: i,
                            chunkInterval: s,
                            contentType: l,
                            token: o
                        },
                        (n, r) => (null != n ? t(n) : r.status >= 400 ? t(Error(r.body)) : void e(r))
                    );
            });
        },
        submitLiveCrashReport(e) {
            if (!(0, T.isWindows)() || null == this.getDiscordUtils().submitLiveCrashReport) return Promise.resolve();
            let t = this.getCrashReporterMetadata(),
                n = v.app.getReleaseChannel(),
                r = null == t ? void 0 : t.sentry;
            return this.getDiscordUtils().submitLiveCrashReport(n, {
                ...r,
                ...e
            });
        },
        crash(e) {
            let t = this.getDiscordUtils().crash;
            return null != t && (t(e), !0);
        },
        setApplicationBackgroundColor(e) {
            v.ipc.send('SETTINGS_UPDATE_BACKGROUND_COLOR', e);
        },
        initializeExitHook() {
            let { initializeExitHook: e } = this.getDiscordUtils();
            null != e && e();
        },
        asyncify: (e) =>
            new Promise((t, n) => {
                e(t);
            }),
        IsGameDisplayModeUpdateSupported() {
            let { gameDisplayModeUpdate: e } = this.getDiscordUtils();
            return null != e;
        },
        GameDisplayModeUpdate(e) {
            let { gameDisplayModeUpdate: t } = this.getDiscordUtils();
            return null != t && null != e && t(e);
        },
        GameDisplayModeIsGameSupported(e) {
            let { gameDisplayModeIsSupported: t } = this.getDiscordUtils();
            return null != t && null != e && t(e);
        },
        GetWindowFullscreenTypeByPid(e, t, n) {
            var r;
            let { getWindowFullscreenTypeByPid: i } = this.getDiscordUtils(),
                a = 0 !== e && null != i && null != t ? i(e, t) : null;
            return -1 === a && (a = null), null !== (r = null != a ? a : n) && void 0 !== r ? r : m.Jx.UNKNOWN;
        },
        isModuleVersionAtLeast(e, t) {
            var n, r, i;
            let a = [...(null != O ? O : [0, 0, 0])];
            a.push(null !== (r = null === (n = this.moduleVersions) || void 0 === n ? void 0 : n[e]) && void 0 !== r ? r : 0);
            let o = null !== (i = t[this.releaseChannel]) && void 0 !== i ? i : t.stable;
            for (let [e, t] of a.entries()) {
                if (t > o[e]) break;
                if (t < o[e]) return !1;
            }
            return !0;
        },
        fetchRiotGamesLiveClientData: (e, t) => (T.isPlatformEmbedded ? (null == v.riotGames ? Promise.reject(Error('Riot Games module not available')) : v.riotGames.fetchLiveClientData(e, t)) : Promise.reject(Error('Not embedded!')))
    });
