n.d(t, {
    Z: function () {
        return T;
    }
}),
    n(47120);
var r = n(46973),
    i = n(570140),
    a = n(147913),
    s = n(579806),
    o = n(569545),
    l = n(441167),
    u = n(314897),
    c = n(131951),
    d = n(19780),
    f = n(959457),
    _ = n(704806),
    p = n(626135),
    h = n(358085),
    m = n(924557),
    g = n(435064),
    E = n(894694),
    v = n(779618),
    I = n(356659),
    b = n(981631),
    S = n(70722);
class T extends a.Z {
    handleRTCConnectionState(e) {
        let { context: t, state: n, streamKey: i } = e;
        if (!(0, m.ln)() || n !== b.hes.RTC_CONNECTED) return;
        let a = u.default.getId();
        if (t === r.Yn.DEFAULT) return this.applyUserVoiceRecording(a);
        if (t === r.Yn.STREAM && null != i) {
            let { ownerId: e } = (0, o.my)(i);
            if (e !== a) return;
            let t = f.Z.getRTCConnection(i);
            if (null == t) return;
            this.applyStreamRecording(a, t);
        }
    }
    handleRTCUserCreate(e) {
        let { userId: t, context: n } = e;
        n === r.Yn.DEFAULT && this.applyUserVoiceRecording(t);
    }
    handleRTCConnectionFlags(e) {
        let { userId: t, channelId: n, guildId: r } = e;
        this.maybeShowClipsWarning(t), this.applyUserVoiceRecording(t);
        let i = f.Z.getRTCConnection(
            o.V9({
                streamType: null != r ? S.lo.GUILD : S.lo.CALL,
                ownerId: t,
                channelId: n,
                guildId: r
            })
        );
        null != i && this.applyStreamRecording(t, i);
    }
    handleClipsInitFailure(e) {
        let { applicationName: t, errMsg: n } = e;
        p.default.track(b.rMx.CLIPS_INIT_FAILURE, {
            application_name: t,
            error_message: n
        });
    }
    maybeShowClipsWarning(e) {
        let t = d.Z.getChannelId();
        if (!(null == t || g.Z.getClipsWarningShown(t)) && e !== u.default.getId())
            g.Z.isClipsEnabledForUser(e) &&
                (i.Z.dispatch({
                    type: 'CLIPS_SHOW_CALL_WARNING',
                    channelId: t
                }),
                this.showClipsToast());
    }
    handlePostConnectionOpen() {
        if (!!(0, v.Z)(c.Z)) {
            if ((this.applyNativeClipsSettings(), !(0, m.ln)())) {
                g.Z.getSettings().clipsEnabled && this.disableClips();
                return;
            }
            (null == g.Z.getHardwareClassification() || null == g.Z.getHardwareClassificationForDecoupled() || g.Z.getHardwareClassificationVersion() !== I.WM) &&
                this.classifyHardwareAndTrack().then((e) => {
                    i.Z.dispatch({
                        type: 'CLIPS_CLASSIFY_HARDWARE',
                        classification: e
                    });
                });
        }
    }
    handleRTCConnectionVideo(e) {
        let { userId: t, context: n, channelId: i, guildId: a } = e;
        if (n !== r.Yn.STREAM || !(0, v.Z)(c.Z)) return;
        let s = f.Z.getRTCConnection(
            o.V9({
                streamType: null != a ? S.lo.GUILD : S.lo.CALL,
                ownerId: t,
                channelId: i,
                guildId: a
            })
        );
        null != s && this.applyStreamRecording(t, s);
    }
    async classifyHardwareAndTrack() {
        try {
            let { gpuModels: e, classification: t } = await (async () => {
                let e = await (0, _.q)();
                if ((null == e ? void 0 : e.gpus) != null) {
                    let t = e.gpus.map((e) => e.brand),
                        n = this.classifyHardware(t);
                    return {
                        gpuModels: t,
                        classification: n
                    };
                }
                {
                    let e = (await s.Z.processUtils.getSystemInfo()).gpus.map((e) => {
                            let { model: t } = e;
                            return t;
                        }),
                        t = this.classifyHardware(e);
                    return {
                        gpuModels: e,
                        classification: t
                    };
                }
            })();
            return (
                p.default.track(b.rMx.CLIPS_HARDWARE_CLASSIFICATION, {
                    classification: t,
                    version: I.WM,
                    gpu_models: e
                }),
                t
            );
        } catch (e) {
            return E.x.UNKNOWN;
        }
    }
    classifyHardware(e) {
        if ((0, h.isWindows)()) {
            let t = e.some((e) => I.mg.test(e)),
                n = e.some((e) => I.nU.test(e));
            return t ? E.x.MEETS_AUTO_ENABLE : n ? E.x.MEETS_MINIMUM : E.x.BELOW_MINIMUM;
        }
        if ((0, h.isMac)()) {
            let e = s.Z.remoteApp.getAppArch();
            return 'arm64' === e ? E.x.MEETS_AUTO_ENABLE : E.x.MEETS_MINIMUM;
        }
        return E.x.UNKNOWN;
    }
    applyUserVoiceRecording(e) {
        if (!(0, v.Z)(c.Z)) return;
        let t = d.Z.getRTCConnection();
        if (null == t) return;
        if (e === u.default.getId()) {
            t.setClipRecordUser(e, 'audio', g.Z.getSettings().clipsEnabled);
            return;
        }
        let n = g.Z.isVoiceRecordingAllowedForUser(e);
        t.setClipRecordUser(e, 'audio', n);
    }
    applyStreamRecording(e, t) {
        if (!(0, v.Z)(c.Z)) return;
        if (u.default.getId() === e) {
            let { clipsEnabled: n } = g.Z.getSettings(),
                r = (0, m.ln)();
            t.setClipRecordUser(e, 'audio', r && n), t.setClipRecordUser(e, 'video', r && n);
            return;
        }
        let { enableViewerClipping: n, ignoreSenderPreference: r } = l.Z.getCurrentConfig({ location: 'ClipsManager:applyStreamRecording' });
        if (!n) return;
        let i = r || g.Z.isViewerClippingAllowedForUser(e);
        this.applyNativeClipsSettings(), t.setClipRecordUser(e, 'audio', i), t.setClipRecordUser(e, 'video', i);
    }
    disableClips() {}
    constructor(...e) {
        var t, n, r;
        super(...e),
            (t = this),
            (n = 'actions'),
            (r = {
                POST_CONNECTION_OPEN: (e) => this.handlePostConnectionOpen(),
                RTC_CONNECTION_FLAGS: (e) => this.handleRTCConnectionFlags(e),
                RTC_CONNECTION_USER_CREATE: (e) => this.handleRTCUserCreate(e),
                CLIPS_INIT_FAILURE: (e) => this.handleClipsInitFailure(e),
                CLIPS_SETTINGS_UPDATE: (e) => this.applyNativeClipsSettings(e),
                STREAM_START: () => this.applyNativeClipsSettings(),
                RUNNING_GAME_TOGGLE_DETECTION: (e) => this.handleClipsInitOnToggleDetection(e),
                RUNNING_GAMES_CHANGE: (e) => this.handleClipsInitOnGamesChange(e),
                CLIPS_RESTART: () => this.fireClipsInitEvent(),
                RTC_CONNECTION_VIDEO: (e) => this.handleRTCConnectionVideo(e),
                RTC_CONNECTION_STATE: (e) => this.handleRTCConnectionState(e),
                MEDIA_ENGINE_SET_HARDWARE_ENCODING: (e) => this.handleMediaEngineSetHardwareEncoding(e)
            }),
            n in t
                ? Object.defineProperty(t, n, {
                      value: r,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (t[n] = r);
    }
}
