n.d(t, {
    Z: function () {
        return O;
    }
});
var r = n(47120);
var i = n(46973),
    a = n(570140),
    o = n(147913),
    s = n(579806),
    l = n(569545),
    u = n(441167),
    c = n(314897),
    d = n(131951),
    _ = n(19780),
    E = n(959457),
    f = n(704806),
    h = n(626135),
    p = n(358085),
    m = n(924557),
    I = n(435064),
    T = n(894694),
    g = n(779618),
    S = n(356659),
    A = n(981631),
    v = n(70722);
function N(e, t, n) {
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
class O extends o.Z {
    handleRTCConnectionState(e) {
        let { context: t, state: n, streamKey: r } = e;
        if (!(0, m.ln)() || n !== A.hes.RTC_CONNECTED) return;
        let a = c.default.getId();
        if (t === i.Yn.DEFAULT) return this.applyUserVoiceRecording(a);
        if (t === i.Yn.STREAM && null != r) {
            let { ownerId: e } = (0, l.my)(r);
            if (e !== a) return;
            let t = E.Z.getRTCConnection(r);
            if (null == t) return;
            this.applyStreamRecording(a, t);
        }
    }
    handleRTCUserCreate(e) {
        let { userId: t, context: n } = e;
        n === i.Yn.DEFAULT && this.applyUserVoiceRecording(t);
    }
    handleRTCConnectionFlags(e) {
        let { userId: t, channelId: n, guildId: r } = e;
        this.maybeShowClipsWarning(t), this.applyUserVoiceRecording(t);
        let i = E.Z.getRTCConnection(
            l.V9({
                streamType: null != r ? v.lo.GUILD : v.lo.CALL,
                ownerId: t,
                channelId: n,
                guildId: r
            })
        );
        null != i && this.applyStreamRecording(t, i);
    }
    handleClipsInitFailure(e) {
        let { applicationName: t, errMsg: n } = e;
        h.default.track(A.rMx.CLIPS_INIT_FAILURE, {
            application_name: t,
            error_message: n
        });
    }
    maybeShowClipsWarning(e) {
        let t = _.Z.getChannelId();
        if (!(null == t || I.Z.getClipsWarningShown(t)) && e !== c.default.getId())
            I.Z.isClipsEnabledForUser(e) &&
                (a.Z.dispatch({
                    type: 'CLIPS_SHOW_CALL_WARNING',
                    channelId: t
                }),
                this.showClipsToast());
    }
    handlePostConnectionOpen() {
        if (!!(0, g.Z)(d.Z)) {
            if ((this.applyNativeClipsSettings(), !(0, m.ln)())) {
                I.Z.getSettings().clipsEnabled && this.disableClips();
                return;
            }
            (null == I.Z.getHardwareClassification() || null == I.Z.getHardwareClassificationForDecoupled() || I.Z.getHardwareClassificationVersion() !== S.WM) &&
                this.classifyHardwareAndTrack().then((e) => {
                    a.Z.dispatch({
                        type: 'CLIPS_CLASSIFY_HARDWARE',
                        classification: e
                    });
                });
        }
    }
    handleRTCConnectionVideo(e) {
        let { userId: t, context: n, channelId: r, guildId: a } = e;
        if (n !== i.Yn.STREAM || !(0, g.Z)(d.Z)) return;
        let o = E.Z.getRTCConnection(
            l.V9({
                streamType: null != a ? v.lo.GUILD : v.lo.CALL,
                ownerId: t,
                channelId: r,
                guildId: a
            })
        );
        null != o && this.applyStreamRecording(t, o);
    }
    async classifyHardwareAndTrack() {
        try {
            let { gpuModels: e, classification: t } = await (async () => {
                let e = await (0, f.q)();
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
                h.default.track(A.rMx.CLIPS_HARDWARE_CLASSIFICATION, {
                    classification: t,
                    version: S.WM,
                    gpu_models: e
                }),
                t
            );
        } catch (e) {
            return T.x.UNKNOWN;
        }
    }
    classifyHardware(e) {
        if ((0, p.isWindows)()) {
            let t = e.some((e) => S.mg.test(e)),
                n = e.some((e) => S.nU.test(e));
            return t ? T.x.MEETS_AUTO_ENABLE : n ? T.x.MEETS_MINIMUM : T.x.BELOW_MINIMUM;
        }
        if ((0, p.isMac)()) return 'arm64' === s.Z.remoteApp.getAppArch() ? T.x.MEETS_AUTO_ENABLE : T.x.MEETS_MINIMUM;
        return T.x.UNKNOWN;
    }
    applyUserVoiceRecording(e) {
        if (!(0, g.Z)(d.Z)) return;
        let t = _.Z.getRTCConnection();
        if (null == t) return;
        if (e === c.default.getId()) {
            t.setClipRecordUser(e, 'audio', I.Z.getSettings().clipsEnabled);
            return;
        }
        let n = I.Z.isVoiceRecordingAllowedForUser(e);
        t.setClipRecordUser(e, 'audio', n);
    }
    applyStreamRecording(e, t) {
        if (!(0, g.Z)(d.Z)) return;
        if (c.default.getId() === e) {
            let { clipsEnabled: n } = I.Z.getSettings(),
                r = (0, m.ln)();
            t.setClipRecordUser(e, 'audio', r && n), t.setClipRecordUser(e, 'video', r && n);
            return;
        }
        let { enableViewerClipping: n, ignoreSenderPreference: r } = u.Z.getCurrentConfig({ location: 'ClipsManager:applyStreamRecording' });
        if (!n) return;
        let i = r || I.Z.isViewerClippingAllowedForUser(e);
        this.applyNativeClipsSettings(), t.setClipRecordUser(e, 'audio', i), t.setClipRecordUser(e, 'video', i);
    }
    disableClips() {}
    constructor(...e) {
        super(...e),
            N(this, 'actions', {
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
            });
    }
}
