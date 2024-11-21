n.d(t, {
    Z: function () {
        return y;
    }
}),
    n(47120);
var r = n(46973),
    i = n(570140),
    a = n(147913),
    s = n(579806),
    o = n(569545),
    l = n(441167),
    u = n(695346),
    c = n(314897),
    d = n(131951),
    f = n(19780),
    _ = n(959457),
    p = n(704806),
    h = n(626135),
    m = n(358085),
    g = n(924557),
    E = n(435064),
    v = n(894694),
    b = n(779618),
    I = n(356659),
    T = n(981631),
    S = n(70722);
class y extends a.Z {
    handleRTCConnectionState(e) {
        let { context: t, state: n, streamKey: i } = e;
        if (!(0, g.ln)() || n !== T.hes.RTC_CONNECTED) return;
        let a = c.default.getId();
        if (t === r.Yn.DEFAULT) return this.applyUserVoiceRecording(a);
        if (t === r.Yn.STREAM && null != i) {
            let { ownerId: e } = (0, o.my)(i);
            if (e !== a) return;
            let t = _.Z.getRTCConnection(i);
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
        let i = _.Z.getRTCConnection(
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
        h.default.track(T.rMx.CLIPS_INIT_FAILURE, {
            application_name: t,
            error_message: n
        });
    }
    maybeShowClipsWarning(e) {
        let t = f.Z.getChannelId();
        if (!(null == t || E.Z.getClipsWarningShown(t)) && e !== c.default.getId() && !!E.Z.isClipsEnabledForUser(e))
            u.tU.getSetting() &&
                (i.Z.dispatch({
                    type: 'CLIPS_SHOW_CALL_WARNING',
                    channelId: t
                }),
                this.showClipsToast());
    }
    handleClipsAllowVoiceRecordingUpdate() {
        var e;
        null === (e = f.Z.getUserIds()) || void 0 === e || e.forEach((e) => this.maybeShowClipsWarning(e));
    }
    handlePostConnectionOpen() {
        if (!!(0, b.Z)(d.Z)) {
            if ((this.applyNativeClipsSettings(), !(0, g.ln)())) {
                E.Z.getSettings().clipsEnabled && this.disableClips();
                return;
            }
            (null == E.Z.getHardwareClassification() || null == E.Z.getHardwareClassificationForDecoupled() || E.Z.getHardwareClassificationVersion() !== I.WM) &&
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
        if (n !== r.Yn.STREAM || !(0, b.Z)(d.Z)) return;
        let s = _.Z.getRTCConnection(
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
                let e = await (0, p.q)();
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
                h.default.track(T.rMx.CLIPS_HARDWARE_CLASSIFICATION, {
                    classification: t,
                    version: I.WM,
                    gpu_models: e
                }),
                t
            );
        } catch (e) {
            return v.x.UNKNOWN;
        }
    }
    classifyHardware(e) {
        if ((0, m.isWindows)()) {
            let t = e.some((e) => I.mg.test(e)),
                n = e.some((e) => I.nU.test(e));
            return t ? v.x.MEETS_AUTO_ENABLE : n ? v.x.MEETS_MINIMUM : v.x.BELOW_MINIMUM;
        }
        if ((0, m.isMac)()) {
            let e = s.Z.remoteApp.getAppArch();
            return 'arm64' === e ? v.x.MEETS_AUTO_ENABLE : v.x.MEETS_MINIMUM;
        }
        return v.x.UNKNOWN;
    }
    applyUserVoiceRecording(e) {
        if (!(0, b.Z)(d.Z)) return;
        let t = f.Z.getRTCConnection();
        if (null == t) return;
        if (e === c.default.getId()) {
            t.setClipRecordUser(e, 'audio', E.Z.getSettings().clipsEnabled);
            return;
        }
        let n = E.Z.isVoiceRecordingAllowedForUser(e);
        t.setClipRecordUser(e, 'audio', n);
    }
    applyStreamRecording(e, t) {
        if (!(0, b.Z)(d.Z)) return;
        if (c.default.getId() === e) {
            let { clipsEnabled: n } = E.Z.getSettings(),
                r = (0, g.ln)();
            t.setClipRecordUser(e, 'audio', r && n), t.setClipRecordUser(e, 'video', r && n);
            return;
        }
        let { enableViewerClipping: n, ignoreSenderPreference: r } = l.Z.getCurrentConfig({ location: 'ClipsManager:applyStreamRecording' });
        if (!n) return;
        let i = r || E.Z.isViewerClippingAllowedForUser(e);
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
                CLIPS_ALLOW_VOICE_RECORDING_UPDATE: () => this.handleClipsAllowVoiceRecordingUpdate(),
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
