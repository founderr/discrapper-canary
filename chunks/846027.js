var i = r(570140),
    a = r(340332),
    s = r(672339),
    o = r(463395),
    l = r(592125),
    u = r(131951),
    c = r(944486),
    d = r(626135),
    f = r(557177),
    _ = r(557457),
    h = r(981631),
    p = r(65154);
function m() {
    (0, f.GN)('mention3');
}
function g() {
    let e = u.Z.getInputDevices(),
        n = e[u.Z.getInputDeviceId()];
    return null != n ? n.name : '';
}
function E(e, n, r, i) {
    let { location: a, analyticsLocations: s } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
    if (n === r) return;
    let f = c.Z.getVoiceChannelId(),
        _ = null != f ? l.Z.getChannel(f) : null,
        p = e[n],
        m = e[r],
        g = u.Z.getMediaEngine().getAudioSubsystem(),
        E = u.Z.getMediaEngine().getAudioLayer();
    d.default.track(h.rMx.MEDIA_DEVICE_CHANGED, {
        device_from_name: o.Z.getCertifiedDeviceName(n, null != p ? p.name : ''),
        device_to_name: o.Z.getCertifiedDeviceName(r, null != m ? m.name : ''),
        device_type: i,
        device_is_certified: o.Z.isCertified(r),
        location: a,
        location_stack: s,
        voice_channel_type: null == _ ? void 0 : _.type,
        audio_subsystem: g,
        audio_layer: E
    });
}
let v = {
        isNotSupported: () => !1,
        enable: (e) => Promise.resolve(!0),
        trackToggleSelfMute(e) {},
        trackToggleSelfDeaf(e) {}
    },
    { enable: I, isNotSupported: T, trackToggleSelfMute: b, trackToggleSelfDeaf: y } = (v = r(929782));
n.Z = {
    enable: I,
    toggleSelfMute() {
        let { context: e = p.Yn.DEFAULT, syncRemote: n = !0, usedKeybind: r = !1, playSoundEffect: a = !0, location: s } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return T()
            ? Promise.resolve()
            : (b({
                    usedKeybind: r,
                    location: s
                }),
                u.Z.isEnabled())
              ? i.Z.dispatch({
                    type: 'AUDIO_TOGGLE_SELF_MUTE',
                    context: e,
                    syncRemote: n,
                    skipMuteUnmuteSoundEffect: !a
                })
              : this.enable(!0);
    },
    setSelfMute(e, n) {
        !T() &&
            i.Z.dispatch({
                type: 'AUDIO_SET_SELF_MUTE',
                context: e,
                mute: n
            });
    },
    setTemporarySelfMute(e) {
        !T() &&
            i.Z.dispatch({
                type: 'AUDIO_SET_TEMPORARY_SELF_MUTE',
                mute: e
            });
    },
    toggleSelfDeaf() {
        let { context: e = p.Yn.DEFAULT, syncRemote: n = !0, usedKeybind: r = !1, location: a } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        !T() &&
            (y({
                usedKeybind: r,
                location: a
            }),
            i.Z.dispatch({
                type: 'AUDIO_TOGGLE_SELF_DEAF',
                context: e,
                syncRemote: n
            }));
    },
    toggleLocalMute(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : p.Yn.DEFAULT;
        !T() &&
            i.Z.dispatch({
                type: 'AUDIO_TOGGLE_LOCAL_MUTE',
                context: n,
                userId: e
            });
    },
    toggleLocalSoundboardMute(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : p.Yn.DEFAULT;
        i.Z.dispatch({
            type: 'AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE',
            context: n,
            userId: e
        });
    },
    setDisableLocalVideo(e, n) {
        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : p.Yn.DEFAULT,
            a = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
            s = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        !T() &&
            i.Z.dispatch({
                type: 'AUDIO_SET_LOCAL_VIDEO_DISABLED',
                context: r,
                userId: e,
                videoToggleState: n,
                persist: a,
                isAutomatic: s
            });
    },
    setLocalVolume(e, n) {
        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : p.Yn.DEFAULT;
        i.Z.dispatch({
            type: 'AUDIO_SET_LOCAL_VOLUME',
            context: r,
            userId: e,
            volume: (0, a.r)(n, r)
        });
    },
    setLocalPan(e, n, r) {
        let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : p.Yn.DEFAULT;
        i.Z.dispatch({
            type: 'AUDIO_SET_LOCAL_PAN',
            context: a,
            userId: e,
            left: n,
            right: r
        });
    },
    setMode(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : p.Yn.DEFAULT,
            { analyticsLocations: a } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if (T()) return;
        let s = e !== u.Z.getMode(),
            o = u.Z.getModeOptions(r);
        if (
            (i.Z.dispatch({
                type: 'AUDIO_SET_MODE',
                context: r,
                mode: e,
                options: {
                    ...o,
                    ...n
                }
            }),
            s)
        ) {
            let n = u.Z.getMediaEngine().getAudioSubsystem(),
                r = u.Z.getMediaEngine().getAudioLayer(),
                i = c.Z.getVoiceChannelId(),
                s = null != i ? l.Z.getChannel(i) : null,
                o = g();
            d.default.track(h.rMx.VOICE_ACTIVATION_MODE_CHANGED, {
                mode: e,
                location_stack: a,
                voice_channel_type: null == s ? void 0 : s.type,
                input_device_name: o,
                audio_subsystem: n,
                audio_layer: r
            });
        } else if (e === h.pM4.VOICE_ACTIVITY && o !== n) {
            let e = u.Z.getMediaEngine().getAudioSubsystem(),
                r = u.Z.getMediaEngine().getAudioLayer(),
                i = c.Z.getVoiceChannelId(),
                s = null != i ? l.Z.getChannel(i) : null,
                f = g();
            d.default.track(h.rMx.VOICE_ACTIVITY_THRESHOLD_CHANGED, {
                location_stack: a,
                voice_channel_type: null == s ? void 0 : s.type,
                input_device_name: f,
                audio_subsystem: e,
                audio_layer: r,
                old_threshold: o.threshold,
                new_threshold: n.threshold,
                old_auto_threshold: o.autoThreshold,
                new_auto_threshold: n.autoThreshold
            });
        }
    },
    setInputVolume(e) {
        let { analyticsLocations: n } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (T()) return;
        i.Z.dispatch({
            type: 'AUDIO_SET_INPUT_VOLUME',
            volume: e
        });
        let r = c.Z.getVoiceChannelId(),
            a = null != r ? l.Z.getChannel(r) : null;
        d.default.track(h.rMx.MEDIA_INPUT_VOLUME_CHANGED, {
            volume: e,
            location_stack: n,
            voice_channel_type: null == a ? void 0 : a.type
        });
    },
    setOutputVolume(e) {
        let { analyticsLocations: n } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (T()) return;
        i.Z.dispatch({
            type: 'AUDIO_SET_OUTPUT_VOLUME',
            volume: e
        });
        let r = c.Z.getVoiceChannelId(),
            a = null != r ? l.Z.getChannel(r) : null;
        d.default.track(h.rMx.MEDIA_OUTPUT_VOLUME_CHANGED, {
            volume: e,
            location_stack: n,
            voice_channel_type: null == a ? void 0 : a.type
        });
    },
    setInputDevice(e) {
        let { location: n, analyticsLocations: r } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!T()) {
            if (null != n || null != r) {
                let i = u.Z.getInputDevices();
                E(i, u.Z.getInputDeviceId(), e, 'Audio Input', {
                    location: n,
                    analyticsLocations: r
                });
            }
            i.Z.dispatch({
                type: 'AUDIO_SET_INPUT_DEVICE',
                id: e
            }),
                m();
        }
    },
    setOutputDevice(e) {
        let { location: n, analyticsLocations: r } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!T()) {
            if (null != n || null != r) {
                let i = u.Z.getOutputDevices();
                E(i, u.Z.getOutputDeviceId(), e, 'Audio Output', {
                    location: n,
                    analyticsLocations: r
                });
            }
            i.Z.dispatch({
                type: 'AUDIO_SET_OUTPUT_DEVICE',
                id: e
            }),
                m();
        }
    },
    setVideoDevice(e) {
        let { location: n, analyticsLocations: r } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!T()) {
            if (null != n || null != r) {
                let i = u.Z.getVideoDevices();
                E(i, u.Z.getVideoDeviceId(), e, 'Video', {
                    location: n,
                    analyticsLocations: r
                });
            }
            i.Z.dispatch({
                type: 'MEDIA_ENGINE_SET_VIDEO_DEVICE',
                id: e
            });
        }
    },
    setEchoCancellation(e, n) {
        !T() &&
            i.Z.dispatch({
                type: 'AUDIO_SET_ECHO_CANCELLATION',
                enabled: e,
                location: n
            });
    },
    setSidechainCompression(e) {
        !T() &&
            i.Z.dispatch({
                type: 'AUDIO_SET_SIDECHAIN_COMPRESSION',
                enabled: e
            });
    },
    setSidechainCompressionStrength(e) {
        !T() &&
            i.Z.dispatch({
                type: 'AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH',
                strength: e
            });
    },
    setLoopback(e) {
        !T() &&
            i.Z.dispatch({
                type: 'AUDIO_SET_LOOPBACK',
                enabled: e
            });
    },
    setNoiseSuppression(e, n) {
        !T() &&
            i.Z.dispatch({
                type: 'AUDIO_SET_NOISE_SUPPRESSION',
                enabled: e,
                location: n
            });
    },
    setNoiseCancellation(e, n) {
        !T() &&
            (i.Z.dispatch({
                type: 'AUDIO_SET_NOISE_CANCELLATION',
                enabled: e,
                location: n
            }),
            i.Z.dispatch({
                type: 'AUDIO_SET_NOISE_SUPPRESSION',
                enabled: !e,
                location: n
            }));
    },
    setAutomaticGainControl(e, n) {
        !T() &&
            i.Z.dispatch({
                type: 'AUDIO_SET_AUTOMATIC_GAIN_CONTROL',
                enabled: e,
                location: n
            });
    },
    setExperimentalEncoders(e) {
        !T() &&
            i.Z.dispatch({
                type: 'MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS',
                enabled: e
            });
    },
    setHardwareEncoding(e) {
        !T() &&
            i.Z.dispatch({
                type: 'MEDIA_ENGINE_SET_HARDWARE_ENCODING',
                enabled: e
            });
    },
    setAttenuation(e, n, r) {
        !T() &&
            i.Z.dispatch({
                type: 'AUDIO_SET_ATTENUATION',
                attenuation: e,
                attenuateWhileSpeakingSelf: n,
                attenuateWhileSpeakingOthers: r
            });
    },
    setQoS(e) {
        !T() &&
            i.Z.dispatch({
                type: 'AUDIO_SET_QOS',
                enabled: e
            });
    },
    reset() {
        !T() && i.Z.dispatch({ type: 'AUDIO_RESET' });
    },
    setSilenceWarning(e) {
        !T() &&
            i.Z.dispatch({
                type: 'AUDIO_SET_DISPLAY_SILENCE_WARNING',
                enabled: e
            });
    },
    setDebugLogging(e) {
        !T() &&
            i.Z.dispatch({
                type: 'AUDIO_SET_DEBUG_LOGGING',
                enabled: e
            });
    },
    setVideoHook(e) {
        !T() &&
            i.Z.dispatch({
                type: 'MEDIA_ENGINE_SET_VIDEO_HOOK',
                enabled: e
            });
    },
    setExperimentalSoundshare(e) {
        !T() &&
            i.Z.dispatch({
                type: 'MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE',
                enabled: e
            });
    },
    setUseSystemScreensharePicker(e) {
        !T() &&
            i.Z.dispatch({
                type: 'MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER',
                enabled: e
            });
    },
    setAudioSubsystem(e) {
        !T() &&
            i.Z.dispatch({
                type: 'AUDIO_SET_SUBSYSTEM',
                subsystem: e
            });
    },
    setVideoEnabled(e) {
        (0, s.eH)(),
            i.Z.dispatch({
                type: 'MEDIA_ENGINE_SET_VIDEO_ENABLED',
                enabled: e
            });
    },
    setGoLiveSource(e) {
        (null == e ? void 0 : e.qualityOptions) != null && (0, _.Ye)(e.qualityOptions.preset, e.qualityOptions.resolution, e.qualityOptions.frameRate),
            i.Z.dispatch({
                type: 'MEDIA_ENGINE_SET_GO_LIVE_SOURCE',
                settings: e
            });
    },
    setOpenH264(e) {
        !T() &&
            i.Z.dispatch({
                type: 'MEDIA_ENGINE_SET_OPEN_H264',
                enabled: e
            });
    },
    setAecDump(e) {
        !T() &&
            i.Z.dispatch({
                type: 'MEDIA_ENGINE_SET_AEC_DUMP',
                enabled: e
            });
    },
    interact() {
        !T() &&
            i.Z.dispatch({
                type: 'MEDIA_ENGINE_INTERACTION_REQUIRED',
                required: !1
            });
    },
    setEnableHardwareMuteNotice(e) {
        !T() &&
            i.Z.dispatch({
                type: 'MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE',
                enabled: e
            });
    }
};
