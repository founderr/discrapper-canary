(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [52050, 53686, 56645, 71402], {
        737264: e => {
            "use strict";
            e.exports.Q = function(e) {
                var t, n = /^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i.exec(e);
                if (!n) return null;
                n.shift();
                var r = null,
                    o = [];
                if (n[2]) {
                    r = (t = n[2].split("-")).shift();
                    o = t
                }
                var i = [];
                n[5] && (i = n[5].split("-")).shift();
                var a = [];
                if (n[6]) {
                    (t = n[6].split("-")).shift();
                    for (var u, c = []; t.length;) {
                        var l = t.shift();
                        if (1 === l.length)
                            if (u) {
                                a.push({
                                    singleton: u,
                                    extension: c
                                });
                                u = l;
                                c = []
                            } else u = l;
                        else c.push(l)
                    }
                    a.push({
                        singleton: u,
                        extension: c
                    })
                }
                var s = [];
                if (n[7]) {
                    (s = n[7].split("-")).shift();
                    s.shift()
                }
                var p = [];
                n[8] && (p = n[8].split("-")).shift();
                return {
                    langtag: {
                        language: {
                            language: r,
                            extlang: o
                        },
                        script: n[3] || null,
                        region: n[4] || null,
                        variant: i,
                        extension: a,
                        privateuse: s
                    },
                    privateuse: p,
                    grandfathered: {
                        irregular: n[0] || null,
                        regular: n[1] || null
                    }
                }
            }
        },
        232369: (e, t, n) => {
            e.exports = n.p + "485eeade0dcc3f7a133db75a15572ffa.mp3"
        },
        125346: (e, t, n) => {
            e.exports = n.p + "908d43f2bbc2c0176f2379b4e0bc8c15.mp3"
        },
        468391: (e, t, n) => {
            e.exports = n.p + "3e63df9f422d6abfa7fe6c9088c03f8a.mp3"
        },
        442466: (e, t, n) => {
            e.exports = n.p + "1189af8782348ba6e57e5c5815de4b74.mp3"
        },
        107906: (e, t, n) => {
            e.exports = n.p + "def141937c5c797cc22101bd6d1a1573.mp3"
        },
        459735: (e, t, n) => {
            e.exports = n.p + "c6e92752668dde4eee5923d70441579f.mp3"
        },
        282884: (e, t, n) => {
            e.exports = n.p + "84a1b4e11d634dbfa1e5dd97a96de3ad.mp3"
        },
        621136: (e, t, n) => {
            e.exports = n.p + "b9411af07f154a6fef543e7e442e4da9.mp3"
        },
        236162: (e, t, n) => {
            e.exports = n.p + "d083df66ef4663ce74f0d0c521fa7449.mp3"
        },
        329450: (e, t, n) => {
            e.exports = n.p + "4b08c52e693f2f34e3a6197076933db5.mp3"
        },
        10094: (e, t, n) => {
            e.exports = n.p + "20d902edee4f526f424f87306ff80606.mp3"
        },
        180376: (e, t, n) => {
            e.exports = n.p + "71f048f8aa7d4b24bf4268a87cbbb192.mp3"
        },
        81413: (e, t, n) => {
            e.exports = n.p + "1de04408e62b5d52ae3ebbb91e9e1978.mp3"
        },
        843851: (e, t, n) => {
            e.exports = n.p + "2c0433f93db8449e4a82b76dc520cb29.mp3"
        },
        190931: (e, t, n) => {
            e.exports = n.p + "68472713f7a62c7c37e0a6a5d5a1faeb.mp3"
        },
        296568: (e, t, n) => {
            e.exports = n.p + "e4d539271704b87764dc465b1a061abd.mp3"
        },
        717578: (e, t, n) => {
            e.exports = n.p + "b4d53caf787b3f6ea7b21fd172708629.mp3"
        },
        667540: (e, t, n) => {
            e.exports = n.p + "06fc6d533ebdb9f1aa2b93d65ad1dec1.mp3"
        },
        599855: (e, t, n) => {
            e.exports = n.p + "3b21ac6812cccad3267e6fe0aeb71f4f.mp3"
        },
        403549: (e, t, n) => {
            e.exports = n.p + "43cdbc0e4ca6acb227d423914d1c06e7.mp3"
        },
        655109: (e, t, n) => {
            e.exports = n.p + "5a8047ef3ffe99a429388098aa2ad34e.mp3"
        },
        40335: (e, t, n) => {
            e.exports = n.p + "a0dbff056ead7ff10f74d9d3c2dfdf79.mp3"
        },
        966306: (e, t, n) => {
            e.exports = n.p + "ff665d60cb4dc6ae52354c0f9ed64320.mp3"
        },
        720586: (e, t, n) => {
            e.exports = n.p + "a42e8ea3e8a1cddddaf600b854154885.mp3"
        },
        982418: (e, t, n) => {
            e.exports = n.p + "f57280342808a64f376061b6d62ed3ee.mp3"
        },
        298093: (e, t, n) => {
            e.exports = n.p + "cd755b4dd76e47b652a903e561c75ba8.mp3"
        },
        49319: (e, t, n) => {
            e.exports = n.p + "aeed3faf9a2496107d502904ef92e80b.mp3"
        },
        181103: (e, t, n) => {
            e.exports = n.p + "7c78e838039f93ab8d92e8cd3393ba27.mp3"
        },
        337381: (e, t, n) => {
            e.exports = n.p + "e4d205fbce67926a10add1e97fb2ea94.mp3"
        },
        194198: (e, t, n) => {
            e.exports = n.p + "cd044a67f99f9b99454fb0a9ba65caa1.mp3"
        },
        242898: (e, t, n) => {
            e.exports = n.p + "61a4a31383060779ec12bc108efc665f.mp3"
        },
        437052: (e, t, n) => {
            e.exports = n.p + "85512904df6e71400c9468cb0ca7c558.mp3"
        },
        57232: (e, t, n) => {
            e.exports = n.p + "4465b49eb630905d54e0f88ce9cd80d8.mp3"
        },
        901105: (e, t, n) => {
            e.exports = n.p + "2542f2e7c441e86e5e9f15de0b0689d6.mp3"
        },
        751007: (e, t, n) => {
            e.exports = n.p + "ae7d16bb2eea76b9b9977db0fad66658.mp3"
        },
        279686: (e, t, n) => {
            e.exports = n.p + "7e125dc075ec6e5ae796e4c3ab83abb3.mp3"
        },
        707580: (e, t, n) => {
            e.exports = n.p + "7344caf654696d7fb97adddddbe5dbcc.mp3"
        },
        986105: (e, t, n) => {
            e.exports = n.p + "f2f9c63c5a80e17b7023403d8adf4b97.mp3"
        },
        47317: (e, t, n) => {
            e.exports = n.p + "a37dcd6272ae41cf49295d58c9806fe3.mp3"
        },
        860392: (e, t, n) => {
            e.exports = n.p + "fa4d62c3cbc80733bf1f01b9c6f181de.mp3"
        },
        766485: (e, t, n) => {
            e.exports = n.p + "a5f42064e8120e381528b14fd3188b72.mp3"
        },
        476670: (e, t, n) => {
            e.exports = n.p + "84c9fa3d07da865278bd77c97d952db4.mp3"
        },
        423796: (e, t, n) => {
            e.exports = n.p + "dd920c06a01e5bb8b09678581e29d56f.mp3"
        },
        663: (e, t, n) => {
            e.exports = n.p + "15fe810f6cfab609c7fcda61652b9b34.mp3"
        },
        361222: (e, t, n) => {
            e.exports = n.p + "53ce6a92d3c233e8b4ac529d34d374e4.mp3"
        },
        752990: (e, t, n) => {
            e.exports = n.p + "429d09ee3b86e81a75b5e06d3fb482be.mp3"
        },
        510323: (e, t, n) => {
            e.exports = n.p + "ad322ffe0a88436296158a80d5d11baa.mp3"
        },
        465635: (e, t, n) => {
            e.exports = n.p + "bacd60695116d4606db676dceae620c1.mp3"
        },
        893151: (e, t, n) => {
            e.exports = n.p + "d9e78f77fdbca62481a1363e7fc486ce.mp3"
        },
        245984: (e, t, n) => {
            e.exports = n.p + "c563dbcaf8eb92b1f0565d9afac947e6.mp3"
        },
        800987: (e, t, n) => {
            e.exports = n.p + "80472157152f747d2400be91d59f02c2.mp3"
        },
        853866: (e, t, n) => {
            e.exports = n.p + "8b63833c8d252fedba6b9c4f2517c705.mp3"
        },
        122540: (e, t, n) => {
            e.exports = n.p + "74ab980d6890a0fa6aa0336182f9f620.mp3"
        },
        332961: (e, t, n) => {
            e.exports = n.p + "471cfd0005b112ff857705e894bf41a6.mp3"
        },
        816559: (e, t, n) => {
            e.exports = n.p + "66598bea6e59eb8acdf32cf2d9d75ba9.mp3"
        },
        429586: (e, t, n) => {
            e.exports = n.p + "d8ed801752c69b350e4782ff58dd5fdf.mp3"
        },
        286944: (e, t, n) => {
            e.exports = n.p + "4e30f98aa537854f79f49a76af822bbc.mp3"
        },
        980679: (e, t, n) => {
            e.exports = n.p + "9ca817f41727edc1b2f1bc4f1911107c.mp3"
        },
        302354: (e, t, n) => {
            e.exports = n.p + "5827bbf9a67c61cbb0e02ffbf434b654.mp3"
        },
        13543: (e, t, n) => {
            e.exports = n.p + "7cdcdcbc426cc43583365a671c24b740.mp3"
        },
        214578: (e, t, n) => {
            e.exports = n.p + "b9b40d6ad7e314424e82045a3060335e.mp3"
        },
        494615: (e, t, n) => {
            e.exports = n.p + "5a000a0d4dff083d12a1d4fc2c7cbf66.mp3"
        },
        499045: (e, t, n) => {
            e.exports = n.p + "43805b9dd757ac4f6b9b58c1a8ee5f0d.mp3"
        },
        835579: (e, t, n) => {
            e.exports = n.p + "5dd43c946894005258d85770f0d10cff.mp3"
        },
        236660: (e, t, n) => {
            e.exports = n.p + "4fcfeb2cba26459c4750e60f626cebdc.mp3"
        },
        901897: (e, t, n) => {
            e.exports = n.p + "e81d11590762728c1b811eadfa5be766.mp3"
        },
        656645: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => h
            });
            var r = n(744564),
                o = n(704560),
                i = n(359721),
                a = n(912735),
                u = n(602351),
                c = n(652591),
                l = n(716118),
                s = n(77643),
                p = n(2590),
                f = n(36256);

            function _(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function d(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        _(e, t, n[t])
                    }))
                }
                return e
            }

            function E() {
                (0, l.GN)("mention3")
            }

            function O(e, t, n, r, o) {
                if (t !== n) {
                    var i = e[t],
                        u = e[n];
                    c.default.track(p.rMx.MEDIA_DEVICE_CHANGED, {
                        device_from_name: a.Z.getCertifiedDeviceName(t, null != i ? i.name : ""),
                        device_to_name: a.Z.getCertifiedDeviceName(n, null != u ? u.name : ""),
                        device_type: r,
                        device_is_certified: a.Z.isCertified(n),
                        location: o
                    })
                }
            }
            var b = {
                    isNotSupported: function() {
                        return !1
                    },
                    enable: function(e) {
                        return Promise.resolve(!0)
                    }
                },
                m = (b = n(660977)).enable,
                I = b.isNotSupported;
            const h = {
                enable: m,
                toggleSelfMute: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.context,
                        n = void 0 === t ? f.Yn.DEFAULT : t,
                        o = e.syncRemote,
                        i = void 0 === o || o;
                    return I() ? Promise.resolve() : u.Z.isEnabled() ? r.Z.dispatch({
                        type: "AUDIO_TOGGLE_SELF_MUTE",
                        context: n,
                        syncRemote: i
                    }) : this.enable(!0)
                },
                setTemporarySelfMute: function(e) {
                    I() || r.Z.dispatch({
                        type: "AUDIO_SET_TEMPORARY_SELF_MUTE",
                        mute: e
                    })
                },
                toggleSelfDeaf: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.context,
                        n = void 0 === t ? f.Yn.DEFAULT : t,
                        o = e.syncRemote,
                        i = void 0 === o || o;
                    I() || r.Z.dispatch({
                        type: "AUDIO_TOGGLE_SELF_DEAF",
                        context: n,
                        syncRemote: i
                    })
                },
                toggleLocalMute: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f.Yn.DEFAULT;
                    I() || r.Z.dispatch({
                        type: "AUDIO_TOGGLE_LOCAL_MUTE",
                        context: t,
                        userId: e
                    })
                },
                toggleLocalSoundboardMute: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f.Yn.DEFAULT;
                    r.Z.dispatch({
                        type: "AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE",
                        context: t,
                        userId: e
                    })
                },
                setDisableLocalVideo: function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : f.Yn.DEFAULT,
                        o = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                        i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                    I() || r.Z.dispatch({
                        type: "AUDIO_SET_LOCAL_VIDEO_DISABLED",
                        context: n,
                        userId: e,
                        videoToggleState: t,
                        persist: o,
                        isAutomatic: i
                    })
                },
                setLocalVolume: function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : f.Yn.DEFAULT;
                    r.Z.dispatch({
                        type: "AUDIO_SET_LOCAL_VOLUME",
                        context: n,
                        userId: e,
                        volume: (0, o.r)(t, n)
                    })
                },
                setLocalPan: function(e, t, n) {
                    var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : f.Yn.DEFAULT;
                    r.Z.dispatch({
                        type: "AUDIO_SET_LOCAL_PAN",
                        context: o,
                        userId: e,
                        left: t,
                        right: n
                    })
                },
                setMode: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : f.Yn.DEFAULT;
                    I() || r.Z.dispatch({
                        type: "AUDIO_SET_MODE",
                        context: n,
                        mode: e,
                        options: d({}, u.Z.getModeOptions(n), t)
                    })
                },
                setInputVolume: function(e) {
                    I() || r.Z.dispatch({
                        type: "AUDIO_SET_INPUT_VOLUME",
                        volume: e
                    })
                },
                setOutputVolume: function(e) {
                    I() || r.Z.dispatch({
                        type: "AUDIO_SET_OUTPUT_VOLUME",
                        volume: e
                    })
                },
                setInputDevice: function(e, t) {
                    if (!I()) {
                        if (null != t) {
                            O(u.Z.getInputDevices(), u.Z.getInputDeviceId(), e, "Audio Input", t)
                        }
                        r.Z.dispatch({
                            type: "AUDIO_SET_INPUT_DEVICE",
                            id: e
                        });
                        E()
                    }
                },
                setOutputDevice: function(e, t) {
                    if (!I()) {
                        if (null != t) {
                            O(u.Z.getOutputDevices(), u.Z.getOutputDeviceId(), e, "Audio Output", t)
                        }
                        r.Z.dispatch({
                            type: "AUDIO_SET_OUTPUT_DEVICE",
                            id: e
                        });
                        E()
                    }
                },
                setVideoDevice: function(e, t) {
                    if (!I()) {
                        if (null != t) {
                            O(u.Z.getVideoDevices(), u.Z.getVideoDeviceId(), e, "Video", t)
                        }
                        r.Z.dispatch({
                            type: "MEDIA_ENGINE_SET_VIDEO_DEVICE",
                            id: e
                        })
                    }
                },
                setEchoCancellation: function(e, t) {
                    I() || r.Z.dispatch({
                        type: "AUDIO_SET_ECHO_CANCELLATION",
                        enabled: e,
                        location: t
                    })
                },
                setLoopback: function(e) {
                    I() || r.Z.dispatch({
                        type: "AUDIO_SET_LOOPBACK",
                        enabled: e
                    })
                },
                setNoiseSuppression: function(e, t) {
                    I() || r.Z.dispatch({
                        type: "AUDIO_SET_NOISE_SUPPRESSION",
                        enabled: e,
                        location: t
                    })
                },
                setNoiseCancellation: function(e, t) {
                    if (!I()) {
                        r.Z.dispatch({
                            type: "AUDIO_SET_NOISE_CANCELLATION",
                            enabled: e,
                            location: t
                        });
                        r.Z.dispatch({
                            type: "AUDIO_SET_NOISE_SUPPRESSION",
                            enabled: !e,
                            location: t
                        })
                    }
                },
                setAutomaticGainControl: function(e, t) {
                    I() || r.Z.dispatch({
                        type: "AUDIO_SET_AUTOMATIC_GAIN_CONTROL",
                        enabled: e,
                        location: t
                    })
                },
                setExperimentalEncoders: function(e) {
                    I() || r.Z.dispatch({
                        type: "MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS",
                        enabled: e
                    })
                },
                setHardwareH264: function(e) {
                    I() || r.Z.dispatch({
                        type: "MEDIA_ENGINE_SET_HARDWARE_H264",
                        enabled: e
                    })
                },
                setAttenuation: function(e, t, n) {
                    I() || r.Z.dispatch({
                        type: "AUDIO_SET_ATTENUATION",
                        attenuation: e,
                        attenuateWhileSpeakingSelf: t,
                        attenuateWhileSpeakingOthers: n
                    })
                },
                setQoS: function(e) {
                    I() || r.Z.dispatch({
                        type: "AUDIO_SET_QOS",
                        enabled: e
                    })
                },
                reset: function() {
                    I() || r.Z.dispatch({
                        type: "AUDIO_RESET"
                    })
                },
                setSilenceWarning: function(e) {
                    I() || r.Z.dispatch({
                        type: "AUDIO_SET_DISPLAY_SILENCE_WARNING",
                        enabled: e
                    })
                },
                setDebugLogging: function(e) {
                    I() || r.Z.dispatch({
                        type: "AUDIO_SET_DEBUG_LOGGING",
                        enabled: e
                    })
                },
                setVideoHook: function(e) {
                    I() || r.Z.dispatch({
                        type: "MEDIA_ENGINE_SET_VIDEO_HOOK",
                        enabled: e
                    })
                },
                setExperimentalSoundshare: function(e) {
                    I() || r.Z.dispatch({
                        type: "MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE",
                        enabled: e
                    })
                },
                setAudioSubsystem: function(e) {
                    I() || r.Z.dispatch({
                        type: "AUDIO_SET_SUBSYSTEM",
                        subsystem: e
                    })
                },
                setVideoEnabled: function(e) {
                    (0, i.eH)();
                    r.Z.dispatch({
                        type: "MEDIA_ENGINE_SET_VIDEO_ENABLED",
                        enabled: e
                    })
                },
                setGoLiveSource: function(e) {
                    null != (null == e ? void 0 : e.qualityOptions) && (0, s.Ye)(e.qualityOptions.preset, e.qualityOptions.resolution, e.qualityOptions.frameRate);
                    r.Z.dispatch({
                        type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
                        settings: e
                    })
                },
                setOpenH264: function(e) {
                    I() || r.Z.dispatch({
                        type: "MEDIA_ENGINE_SET_OPEN_H264",
                        enabled: e
                    })
                },
                setAV1Enabled: function(e) {
                    I() || r.Z.dispatch({
                        type: "MEDIA_ENGINE_SET_AV1",
                        enabled: e
                    })
                },
                setH265Enabled: function(e) {
                    I() || r.Z.dispatch({
                        type: "MEDIA_ENGINE_SET_H265",
                        enabled: e
                    })
                },
                setAecDump: function(e) {
                    I() || r.Z.dispatch({
                        type: "MEDIA_ENGINE_SET_AEC_DUMP",
                        enabled: e
                    })
                },
                interact: function() {
                    I() || r.Z.dispatch({
                        type: "MEDIA_ENGINE_INTERACTION_REQUIRED",
                        required: !1
                    })
                },
                enableSoundshare: function() {
                    I() || r.Z.dispatch({
                        type: "MEDIA_ENGINE_ENABLE_SOUNDSHARE"
                    })
                }
            }
        },
        971402: (e, t, n) => {
            "use strict";
            n.d(t, {
                Zy: () => p,
                vq: () => f,
                jW: () => _
            });
            var r = n(744564),
                o = n(26468),
                i = n(120415),
                a = n(73105),
                u = n(2590);

            function c(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function l(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        c(e, t, n[t])
                    }))
                }
                return e
            }

            function s(e) {
                r.Z.dispatch({
                    type: "CONTEXT_MENU_OPEN",
                    contextMenu: e
                })
            }

            function p(e) {
                (0, n(973935).flushSync)((function() {
                    r.Z.wait((function() {
                        r.Z.dispatch({
                            type: "CONTEXT_MENU_CLOSE"
                        }).finally(e)
                    }))
                }))
            }

            function f(e, t, n, r) {
                e.stopPropagation();
                if (null == e.currentTarget.contains || e.currentTarget.contains(e.target)) {
                    var c, p, f = 0,
                        _ = 0;
                    if ("pageX" in e) {
                        f = e.pageX;
                        _ = e.pageY
                    }
                    if (0 === f && 0 === _) {
                        var d, E = null === (d = e.target) || void 0 === d ? void 0 : d.getBoundingClientRect(),
                            O = null != E ? E : {},
                            b = O.left,
                            m = void 0 === b ? 0 : b,
                            I = O.top,
                            h = void 0 === I ? 0 : I,
                            T = O.width,
                            y = void 0 === T ? 0 : T,
                            S = O.height;
                        f = m + y / 2;
                        _ = h + (void 0 === S ? 0 : S) / 2
                    }
                    var g = {
                        render: t,
                        renderLazy: r,
                        target: null !== (c = e.target) && void 0 !== c ? c : e.currentTarget,
                        rect: new DOMRect(f, _, 0, 0),
                        config: l({
                            context: __OVERLAY__ ? u.IlC.OVERLAY : null !== (p = (0, o.GB)()) && void 0 !== p ? p : u.IlC.APP
                        }, n)
                    };
                    if ((null == n ? void 0 : n.enableSpellCheck) && (0, i.nI)()) var v = (0, a.RD)((function() {
                        v();
                        s(g)
                    }));
                    else {
                        e.preventDefault();
                        s(g)
                    }
                }
            }

            function _(e, t, n) {
                f(e, void 0, n, t)
            }
        },
        810978: (e, t, n) => {
            "use strict";
            n.d(t, {
                GZ: () => d,
                Gn: () => O,
                Y2: () => b,
                mE: () => m
            });
            var r = n(281110),
                o = n(744564),
                i = n(973889),
                a = n(615796),
                u = n(264628),
                c = n(673679),
                l = n(2590),
                s = n(203600);

            function p(e, t, n, r, o, i, a) {
                try {
                    var u = e[i](a),
                        c = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(c) : Promise.resolve(c).then(r, o)
            }

            function f(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function a(e) {
                            p(i, r, o, a, u, "next", e)
                        }

                        function u(e) {
                            p(i, r, o, a, u, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }
            var _ = function(e, t) {
                var n, r, o, i, a = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function u(i) {
                    return function(u) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        a.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        a.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = a.ops.pop();
                                        a.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = a.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            a.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && a.label < o[1]) {
                                            a.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && a.label < o[2]) {
                                            a.label = o[2];
                                            a.ops.push(i);
                                            break
                                        }
                                        o[2] && a.ops.pop();
                                        a.trys.pop();
                                        continue
                                }
                                i = t.call(e, a)
                            } catch (e) {
                                i = [6, e];
                                r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, u])
                    }
                }
            };

            function d(e, t, n, r, o) {
                return E.apply(this, arguments)
            }

            function E() {
                return (E = f((function(e, t, n, s, p) {
                    var f, d, E, O;
                    return _(this, (function(_) {
                        switch (_.label) {
                            case 0:
                                o.Z.dispatch({
                                    type: "SUBSCRIPTION_PLANS_FETCH",
                                    skuId: e
                                });
                                _.label = 1;
                            case 1:
                                _.trys.push([1, 5, , 6]);
                                f = {
                                    url: l.ANM.STORE_PUBLISHED_LISTINGS_SUBSCRIPTION_PLANS(e),
                                    oldFormErrors: !0
                                };
                                d = {};
                                null != t && (d.country_code = t);
                                null != n && (d.payment_source_id = n);
                                null != s && (d.include_unpublished = s);
                                null != p && (d.revenue_surface = p);
                                f.query = d;
                                return a.Z.ipCountryCodeLoaded ? [3, 3] : [4, (0, c.GE)()];
                            case 2:
                                _.sent();
                                _.label = 3;
                            case 3:
                                return [4, r.ZP.get(f)];
                            case 4:
                                E = _.sent();
                                o.Z.dispatch({
                                    type: "SUBSCRIPTION_PLANS_FETCH_SUCCESS",
                                    skuId: e,
                                    subscriptionPlans: E.body
                                });
                                return [3, 6];
                            case 5:
                                O = _.sent();
                                o.Z.dispatch({
                                    type: "SUBSCRIPTION_PLANS_FETCH_FAILURE",
                                    skuId: e
                                });
                                (0, u.q2)(O);
                                throw new i.Z(O);
                            case 6:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function O(e, t) {
                return Promise.all(e.filter((function(e) {
                    return e !== s.Si.NONE
                })).map((function(e) {
                    return d(e, t)
                })))
            }

            function b(e, t, n) {
                return Promise.all(s.YQ.filter((function(e) {
                    return e !== s.Si.NONE
                })).map((function(r) {
                    return d(r, e, t, void 0, n)
                })))
            }

            function m() {
                o.Z.dispatch({
                    type: "SUBSCRIPTION_PLANS_RESET"
                })
            }
        },
        660977: (e, t, n) => {
            "use strict";
            n.r(t);
            n.d(t, {
                isNotSupported: () => h,
                enable: () => y
            });
            var r = n(785893),
                o = (n(667294), n(304548)),
                i = n(744564),
                a = n(296602),
                u = n(602351),
                c = n(652591),
                l = n(2590),
                s = n(785915),
                p = n(473708);

            function f(e, t, n, r, o, i, a) {
                try {
                    var u = e[i](a),
                        c = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(c) : Promise.resolve(c).then(r, o)
            }

            function _(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function a(e) {
                            f(i, r, o, a, u, "next", e)
                        }

                        function u(e) {
                            f(i, r, o, a, u, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function d(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function E(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        d(e, t, n[t])
                    }))
                }
                return e
            }

            function O(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }
            var b = function(e, t) {
                    var n, r, o, i, a = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: u(0),
                        throw: u(1),
                        return: u(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function u(i) {
                        return function(u) {
                            return function(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    (r = 0, o) && (i = [2 & i[0], o.value]);
                                    switch (i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
                                            break;
                                        case 4:
                                            a.label++;
                                            return {
                                                value: i[1], done: !1
                                            };
                                        case 5:
                                            a.label++;
                                            r = i[1];
                                            i = [0];
                                            continue;
                                        case 7:
                                            i = a.ops.pop();
                                            a.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = a.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                a.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && a.label < o[1]) {
                                                a.label = o[1];
                                                o = i;
                                                break
                                            }
                                            if (o && a.label < o[2]) {
                                                a.label = o[2];
                                                a.ops.push(i);
                                                break
                                            }
                                            o[2] && a.ops.pop();
                                            a.trys.pop();
                                            continue
                                    }
                                    i = t.call(e, a)
                                } catch (e) {
                                    i = [6, e];
                                    r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, u])
                        }
                    }
                },
                m = new a.Z("AudioActionCreators");

            function I() {
                (0, o.openModalLazy)(_((function() {
                    var e, t;
                    return b(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                return [4, Promise.all([n.e(40532), n.e(8056)]).then(n.bind(n, 908056))];
                            case 1:
                                e = o.sent(), t = e.default;
                                return [2, function(e) {
                                    return (0, r.jsx)(t, E({
                                        source: "Unsupported Browser"
                                    }, e))
                                }]
                        }
                    }))
                })))
            }

            function h() {
                if (u.Z.isSupported()) return !1;
                (0, o.openModal)((function(e) {
                    return (0, r.jsx)(o.ConfirmModal, O(E({
                        header: p.Z.Messages.UNSUPPORTED_BROWSER,
                        confirmText: p.Z.Messages.DOWNLOAD_APP,
                        cancelText: p.Z.Messages.CANCEL,
                        onConfirm: I,
                        confirmButtonColor: o.Button.Colors.BRAND
                    }, e), {
                        children: (0, r.jsx)(o.Text, {
                            variant: "text-md/normal",
                            children: p.Z.Messages.UNSUPPORTED_BROWSER_DETAILS
                        })
                    }))
                }));
                return !0
            }

            function T(e) {
                c.default.track(l.rMx.PERMISSIONS_ACKED, {
                    type: "audio",
                    action: e
                })
            }

            function y() {
                var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                if (h()) return Promise.resolve(!1);
                c.default.track(l.rMx.PERMISSIONS_REQUESTED, {
                    type: "audio"
                });
                return u.Z.getMediaEngine().enable().then((function() {
                    i.Z.dispatch({
                        type: "MEDIA_ENGINE_SET_AUDIO_ENABLED",
                        enabled: !0,
                        unmute: e
                    });
                    T(s.PQ.ACCEPTED)
                }), (function(e) {
                    switch (e) {
                        case l.ETv.NO_DEVICES_FOUND:
                            T(s.PQ.NO_DEVICES);
                            break;
                        case l.ETv.PERMISSION_DENIED:
                            T(s.PQ.DENIED);
                            break;
                        case l.ETv.PERMISSION_DISMISSED:
                            T(s.PQ.DISMISSED);
                            break;
                        default:
                            T(s.PQ.ERROR);
                            m.warn("unknown getUserMedia error: ".concat(e))
                    }
                })).then((function() {
                    return !0
                }))
            }
        },
        213276: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => E
            });
            var r = n(785893),
                o = n(667294),
                i = n(228721),
                a = n(652591),
                u = n(295652),
                c = n(2590);

            function l(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function s(e) {
                s = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return s(e)
            }

            function p(e, t) {
                return !t || "object" !== _(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function f(e, t) {
                f = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return f(e, t)
            }
            var _ = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function d(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = s(e);
                    if (t) {
                        var o = s(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return p(this, n)
                }
            }
            var E = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && f(e, t)
                }(n, e);
                var t = d(n);

                function n(e) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, n);
                    var r;
                    (r = t.call(this, e))._loadId = null;
                    r._loadDate = r.props.root ? Date.now() : null;
                    r.getLocation = (0, u.oH)((function(e, t, n, r) {
                        var o = {};
                        null != e && (o.page = e);
                        null != t && (o.section = t);
                        null != n && (o.object = n);
                        null != r && (o.objectType = r);
                        return o
                    }));
                    r.mergeLocation = (0, u.oH)((function(e, t) {
                        return function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                                }))));
                                r.forEach((function(t) {
                                    l(e, t, n[t])
                                }))
                            }
                            return e
                        }({}, e, t)
                    }));
                    r.getContext = (0,
                        u.oH)((function(e, t, n) {
                        return {
                            location: e,
                            loadDate: t,
                            loadId: n
                        }
                    }));
                    null != e.loadId ? r._loadId = e.loadId : e.root && (r._loadId = (0, i.Z)());
                    return r
                }
                var o = n.prototype;
                o.renderProvider = function(e) {
                    var t, n, o = this.props,
                        i = o.section,
                        u = o.page,
                        c = o.object,
                        l = o.objectType,
                        s = o.children,
                        p = this.mergeLocation(e.location, this.getLocation(u, i, c, l)),
                        f = this.getContext(p, null !== (t = this._loadDate) && void 0 !== t ? t : e.loadDate, null !== (n = this._loadId) && void 0 !== n ? n : e.loadId);
                    return (0, r.jsx)(a.AnalyticsContext.Provider, {
                        value: f,
                        children: s
                    })
                };
                o.render = function() {
                    var e = this,
                        t = this.props.context;
                    return null != t ? this.renderProvider(t) : (0, r.jsx)(a.AnalyticsContext.Consumer, {
                        children: function(t) {
                            return e.renderProvider(t)
                        }
                    })
                };
                return n
            }(o.Component);
            E.Pages = c.ZY5;
            E.Sections = c.jXE;
            E.Objects = c.qAy;
            E.ObjectTypes = c.Qqv;
            E.defaultProps = {
                root: !1
            }
        },
        720502: (e, t, n) => {
            "use strict";
            n.d(t, {
                F: () => l
            });
            var r = n(785893),
                o = (n(667294), n(795308)),
                i = n(633878);

            function a(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function u(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function c(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }
            var l = function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    l = e.height,
                    s = void 0 === l ? 24 : l,
                    p = e.color,
                    f = void 0 === p ? o.Z.colors.INTERACTIVE_NORMAL : p,
                    _ = e.colorClass,
                    d = void 0 === _ ? "" : _,
                    E = c(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", u(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            a(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, i.Z)(E)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof f ? f : f.css,
                        fillRule: "evenodd",
                        d: "M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8.667c0 .123-.335.174-.39.063C21.11 12.708 20.203 12 19 12a3 3 0 0 0-2.701 1.693c-.09.185-.356.23-.48.066l-.469-.626a2 2 0 0 0-3.2 0l-2.223 2.964-.506-.633a1.5 1.5 0 0 0-2.342 0l-1.854 2.318A.75.75 0 0 0 5.81 19h5.69c.276 0 .495.226.542.498.167.956.812 1.683 1.688 2.113.111.054.06.389-.063.389H5a3 3 0 0 1-3-3V5Zm8.204.977c.229-.91-.88-1.55-1.555-.898a.934.934 0 0 1-1.298 0c-.675-.653-1.784-.013-1.556.898a.934.934 0 0 1-.649 1.125c-.903.258-.903 1.538 0 1.796a.934.934 0 0 1 .65 1.125c-.229.91.88 1.55 1.555.898a.934.934 0 0 1 1.298 0c.675.653 1.784.013 1.556-.898a.934.934 0 0 1 .649-1.125c.903-.258.903-1.538 0-1.796a.934.934 0 0 1-.65-1.125ZM19 14a1 1 0 0 1 1 1v3h3a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-2 0v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1Z",
                        clipRule: "evenodd",
                        className: d
                    })
                }))
            }
        },
        973889: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => p
            });
            var r = n(281110),
                o = n(2590),
                i = n(473708);

            function a(e) {
                a = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return a(e)
            }

            function u(e, t) {
                return !t || "object" !== l(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function c(e, t) {
                c = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return c(e, t)
            }
            var l = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function s(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = a(e);
                    if (t) {
                        var o = a(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return u(this, n)
                }
            }
            var p = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && c(e, t)
                }(n, e);
                var t = s(n);

                function n(e, r) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, n);
                    return t.call(this, e, r, null != r ? i.Z.Messages.FORM_ERROR_GENERIC_WITH_DETAILS.format({
                        statusPageURL: o.yXt.STATUS,
                        details: "".concat(r)
                    }) : i.Z.Messages.FORM_ERROR_GENERIC.format({
                        statusPageURL: o.yXt.STATUS
                    }))
                }
                return n
            }(r.ZP.V6OrEarlierAPIError)
        },
        579581: (e, t, n) => {
            "use strict";
            n.d(t, {
                O: () => i
            });
            var r = n(667294),
                o = n(652591),
                i = function() {
                    return r.useContext(o.AnalyticsContext)
                }
        },
        153686: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => o
            });
            var r;
            ! function(e) {
                e.POPOUT_WINDOW = "popout window";
                e.OVERLAY = "overlay";
                e.NOTICE = "notice";
                e.PREMIUM_UPSELL_TOOLTIP = "premium upsell tooltip";
                e.BADGE = "badge";
                e.USER_SETTINGS = "user settings";
                e.USER_SETTINGS_MENU = "user settings menu";
                e.ACCOUNT = "account";
                e.TEXT_AND_IMAGES = "text and images";
                e.GUILD_SETTINGS = "guild settings";
                e.OVERVIEW = "overview";
                e.STICKERS = "stickers";
                e.VANITY_URL = "vanity url";
                e.PREMIUM_MARKETING = "premium marketing";
                e.PREMIUM_MARKETING_PLAN_COMPARISON = "premium marketing plan comparison";
                e.PREMIUM_PAYMENT_MODAL = "premium payment modal";
                e.PREMIUM_UPSELL_ALERT = "premium upsell alert";
                e.PREMIUM_UPSELL_MODAL = "premium upsell modal";
                e.PREMIUM_SETTINGS = "premium settings";
                e.PAYMENT_FLOW_TEST_PAGE = "payment flow test page";
                e.PREMIUM_PAYMENT_ACTION_SHEET = "premium payment action sheet";
                e.CHANNEL_CALL = "channel call";
                e.CHANNEL_CALL_CONNECTING_SCREEN = "channel call connecting screen";
                e.RTC_PANEL = "rtc panel";
                e.SOUNDBOARD_BUTTON = "soundboard button";
                e.SOUNDBOARD_POPOUT = "soundboard popout";
                e.SOUNDBOARD_WHEEL = "soundboard wheel";
                e.SOUNDBOARD_ACTION_SHEET = "soundboard action sheet";
                e.GIFT_BUTTON = "gift button";
                e.EXPRESSION_SUGGESTIONS = "expression suggestions";
                e.EMOJI_PICKER = "emoji picker";
                e.STICKER_PICKER = "sticker picker";
                e.STICKER_POPOUT = "sticker popout";
                e.PREMIUM_UPSELL = "premium upsell";
                e.EMPTY_STATE = "empty state";
                e.SUBSCRIPTION_DETAILS = "subscription details";
                e.SUBSCRIPTION_HEADER = "subscription header";
                e.ACCOUNT_CREDIT_BANNER = "account credit banner";
                e.PREMIUM_UNCANCEL_MODAL = "premium uncancel modal";
                e.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER = "past due one time payment method banner";
                e.STREAM_QUALITY_INDICATOR = "stream quality indicator";
                e.PREMIUM_TIER_0_TRIAL_ENDING_NOTICE = "premium tier 0 trial ending notice";
                e.PREMIUM_TIER_2_TRIAL_ENDING_NOTICE = "premium tier 2 trial ending notice";
                e.BOOSTED_GUILD_PERKS_MODAL = "boosted guild perks modal";
                e.GUILD_BOOSTING_PREMIUM_UPSELL = "guild boosting premium upsell";
                e.RPC = "rpc";
                e.BILLING_STANDALONE = "billing standalone";
                e.GUILD_CHANNEL_LIST = "guild channel list";
                e.GUILD_CHANNEL_LIST_FOOTER = "guild channel list footer";
                e.STICKER_MESSAGE = "sticker message";
                e.CHANNEL_TEXT_AREA = "channel text area";
                e.HEADER_BAR = "header bar";
                e.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL = "guild role subscription cancellation modal";
                e.GUILD_ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE = "guild role subscription purchase system message";
                e.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL = "guild role subscription emoji picker upsell";
                e.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL = "guild role subscription emoji text popover upsell";
                e.PREMIUM_SUBSCRIPTION_CANCELLATION_MODAL = "premium subscription cancellation modal";
                e.APPLICATION_SUBSCRIPTION_CANCELLATION_MODAL = "application subscription cancellation modal";
                e.PENDING_PLAN_CHANGE_NOTICE = "pending plan change notice";
                e.SUBSCRIPTION_CANCEL_DOWNGRADE_MODAL = "subscription cancel downgrade modal";
                e.GUILD_HEADER = "guild header";
                e.GUILD_BANNER = "guild banner";
                e.GUILD_BANNER_NOTICE = "guild banner notice";
                e.GUILD_BOOST_PURCHASE_MODAL = "guild boost purchase modal";
                e.GUILD_BOOST_CANCELLATION_MODAL = "guild boost cancellation modal";
                e.GUILD_BOOST_UNCANCELLATION_MODAL = "guild boost uncancellation modal";
                e.GUILD_BOOSTING_PROGRESS_BAR = "guild boosting progress bar";
                e.GUILD_BOOSTING_TIER_NONE = "guild boosting tier none";
                e.GUILD_BOOSTING_TIER_1 = "guild boosting tier 1";
                e.GUILD_BOOSTING_TIER_2 = "guild boosting tier 2";
                e.GUILD_BOOSTING_TIER_3 = "guild boosting tier 3";
                e.GUILD_BOOSTING_UPSELL_BANNER = "guild boosting upsell banner";
                e.GUILD_BOOSTING_SIDEBAR_DISPLAY = "guild boosting sidebar display";
                e.GUILDS_LIST = "guilds list";
                e.ACTIVITY_CHANNEL_SELECTOR = "activity channel selector";
                e.ACTIVITY_DIRECTORY = "activity directory";
                e.ACTIVITY_TILE = "activity tile";
                e.ACTIVITY_UPSELL = "activity upsell";
                e.ACTIVITY_VOICE_CONTROLS_TOGGLE = "activity voice controls toggle";
                e.INSTANT_INVITE_MODAL = "instant invite modal";
                e.IMAGE_CROPPING_MODAL = "image cropping modal";
                e.GIF_PICKER = "gif picker";
                e.EXTERNAL_INVITE_LINK_MODAL = "external invite link modal";
                e.INVITE_MODAL = "invite modal";
                e.INVITE_EMBED = "invite embed";
                e.NEW_GUILD_BUTTON = "new guild button";
                e.CHARACTER_COUNT = "character count";
                e.DM_CHANNEL = "dm channel";
                e.GUILD_CHANNEL = "guild channel";
                e.FORUM_CHANNEL = "forum channel";
                e.FILE_UPLOAD_POPOUT = "file upload popout";
                e.EMOJI = "emoji";
                e.PROFILE = "profile";
                e.PROFILE_MODAL = "profile modal";
                e.PROFILE_POPOUT = "profile popout";
                e.GUILD_PROFILE = "guild profile";
                e.EDIT_AVATAR = "edit avatar";
                e.EDIT_BANNER = "edit banner";
                e.CHAT_INPUT = "chat input";
                e.CREATE_THREAD = "create thread";
                e.PREMIUM_PREVIEW_UPSELL_HEADER = "premium preview upsell header";
                e.PREMIUM_UPSELL_OVERLAY = "premium upsell overlay";
                e.SELECT_IMAGE_MODAL = "select image modal";
                e.VIDEO_BACKGROUND_OPTIONS = "video background options";
                e.VIDEO_BACKGROUND_IMAGE_OPTION = "video background image option";
                e.VIDEO_BACKGROUND_CUSTOM_UPSELL = "video background custom upsell";
                e.CAMERA_PREVIEW = "camera preview";
                e.HOME_PAGE_PREMIUM_TAB = "home page premium tab";
                e.HOME_PAGE_SHOP_TAB = "home page shop tab";
                e.PREMIUM_MARKETING_SURFACE = "premium marketing surface";
                e.PREMIUM_MARKETING_HERO_CTA = "premium marketing hero cta";
                e.PREMIUM_MARKETING_TIER_1_CTA = "premium marketing tier 1 cta";
                e.PREMIUM_MARKETING_TIER_2_CTA = "premium marketing tier 2 cta";
                e.PREMIUM_MARKETING_LOCALIZED_PRICING_TIER_2_CTA = "premium marketing localized pricing tier 2 cta";
                e.PREMIUM_MARKETING_SURFACE_HERO_CTA = "premium marketing surface hero cta";
                e.PREMIUM_MARKETING_SURFACE_TIER_2_CTA = "premium marketing surface tier 2 cta";
                e.PREMIUM_MARKETING_SURFACE_TIER_1_CTA = "premium marketing surface tier 1 cta";
                e.PREMIUM_MARKETING_TIER_CARD = "premium marketing tier card";
                e.PREMIUM_MARKETING_PERK_CARD = "premium marketing perk card";
                e.PREMIUM_MARKETING_FEATURE = "premium marketing feature";
                e.PREMIUM_MARKETING_COMPARISON_TABLE = "premium marketing comparison table";
                e.PREMIUM_MARKETING_FOOTER = "premium marketing footer";
                e.PREMIUM_MARKETING_GIFT_SECTION = "premium marketing gift section";
                e.CHANNEL_CALL_ACTION_BAR = "channel call action bar";
                e.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI = "aggregate premium upsell modal emoji";
                e.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_PROFILE_CUSTOMIZATION = "aggregate premium upsell modal profile customization";
                e.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_HD_STREAMING = "aggregate premium upsell modal hd streaming";
                e.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_LARGER_FILE_UPLOADS = "aggregate premium upsell modal larger file uploads";
                e.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_BOGO = "aggregate premium upsell modal bogo";
                e.CHANNEL_EXPANDED_CONTROLS = "channel expanded controls";
                e.VOICE_CONTROL_TRAY = "voice control tray";
                e.ACTIVE_NOW_COLUMN = "active now column";
                e.CONTEXT_MENU = "context menu";
                e.CHANNEL_ACTIVITY_FEED_VOICE_MENU = "channel activity feed voice menu";
                e.CHANNEL_AUDIT_LOG_MENU = "channel audit log menu";
                e.CHANNEL_CATEGORY_MENU = "channel category menu";
                e.CHANNEL_LIST_DIRECTORY_CHANNEL_MENU = "channel list menu";
                e.CHANNEL_LIST_STORE_CHANNEL_MENU = "channel list store channel menu";
                e.CHANNEL_LIST_TEXT_CHANNEL_MENU = "channel list text channel menu";
                e.CHANNEL_LIST_THREAD_MENU = "channel list thread menu";
                e.CHANNEL_LIST_VOICE_CHANNEL_MENU = "channel list voice channel menu";
                e.CHANNEL_TITLE_MENU = "channel title menu";
                e.GROUP_DM_MENU = "group dm menu";
                e.AUDIT_LOG_USER_MENU = "audit log user menu";
                e.BANNED_USER_MENU = "banned user menu";
                e.DM_USER_MENU = "dm user menu";
                e.GROUP_DM_USER_MENU = "group dm user menu";
                e.GUILD_CHANNEL_USER_MENU = "guild channel user menu";
                e.GUILD_MODERATION_USER_MENU = "guild moderation user menu";
                e.GUILD_MODERATION_RAID_MENU = "guild moderation raid menu";
                e.GUILD_SETTINGS_USER_MENU = "guild settings user menu";
                e.GUILD_USER_MENU = "guild user menu";
                e.THREAD_USER_MENU = "thread user menu";
                e.USER_GENERIC_MENU = "user generic menu";
                e.USER_PROFILE_ACTIONS_MENU = "user profile actions menu";
                e.VOICE_ACTION_SHEET = "voice action sheet";
                e.FOCUSED_VOICE_CONTROLS = "focused voice controls";
                e.MASKED_LINK = "masked link";
                e.LAST_NITRO_HOST_ACTION_SHEET = "last nitro host action sheet";
                e.LAST_NITRO_HOST_LEFT_ACTION_SHEET = "last nitro host left action sheet";
                e.PREMIUM_TIER_0_ANNOUNCEMENT_ACTION_SHEET = "premium tier 0 announcement action sheet";
                e.PS_VOICE_CONNECT_UPSELL = "ps voice connect upsell";
                e.PROFILE_THEME_UPSELL_MODAL = "profile theme upsell modal";
                e.EDIT_AVATAR_DECORATION_MODAL = "edit avatar decoration modal";
                e.EDIT_AVATAR_DECORATION_SHEET = "edit avatar decoration sheet";
                e.EDIT_PROFILE_EFFECT_MODAL = "edit profile effect modal";
                e.ACCOUNT_PROFILE_POPOUT = "account profile popout";
                e.CHANNEL_CALL_OVERFLOW_ACTION_SHEET = "channel_call_overflow_action_sheet";
                e.USER_SETTINGS_TRY_OUT_PREMIUM = "user settings try out premium";
                e.ACTIVITY_COACH_MARK_NITRO = "activity coach mark nitro";
                e.ACTIVITY_COACH_MARK_BOOSTING = "activity coach mark boosting";
                e.ACTIVITY_COACH_MARK_HALLOWEEN_2022 = "activity coach mark halloween 2022";
                e.PREMIUM_TRIAL_TUTORIAL_COACHMARK = "premium trial tutorial coachmark";
                e.PREMIUM_TRIAL_TUTORIAL_TOOLTIP = "premium trial tutorial tooltip";
                e.ACTIVITY_COACH_MARK_BASH_OUT = "activity coach mark bash out";
                e.ACTIVITY_COACH_MARK_POKER = "activity coach mark poker";
                e.ACTIVITY_COACH_MARK_GARTIC_PHONE = "activity coach mark gartic phone";
                e.ACTIVITIES_COACH_MARK_GAME_NIGHT = "activities coach mark game night";
                e.STAGE_VIDEO_LIMIT = "stage video limit";
                e.ACTIVITIES_MINI_SHELF = "activities mini shelf";
                e.ACTIVITIES_MINI_SHELF_BANNER = "activities mini shelf banner";
                e.VC_TILE_ACTIVITY_INVITE = "vc tile activity invite";
                e.VC_TILE_ACTIVITY_SUGGESTION = "vc tile activity suggestion";
                e.VC_TILE_ACTIVITY_SHELF_BUTTON = "vc tile activity shelf button";
                e.BURST_REACTION_TUTORIAL_COACHMARK = "super reaction tutorial coachmark";
                e.APP_ICON_EDITOR = "app icon editor";
                e.CLIENT_THEMES_EDITOR = "client themes editor";
                e.CLIENT_THEMES_THEME_SELECTOR = "client themes theme selector";
                e.AUTOMOD_PROFILE_QUARANTINE_ALERT = "automod profile quarantine alert";
                e.SHARE_NITRO_EMBED = "share nitro embed";
                e.EMBEDDED_ACTIVITY_MESSAGE = "embedded activity message";
                e.REFERRAL_TRIALS_COMPOSER_BUTTON = "referral trials composer button";
                e.REFERRAL_TRIALS_POPOUT = "referral trials popout";
                e.PREMIUM_MARKETING_ANNOUNCEMENT_MODAL = "premium marketing announcement modal";
                e.PREMIUM_MARKETING_PAGE_BANNER = "premium marketing page banner";
                e.ACTIVITY_BOOKMARK = "activity bookmark";
                e.ACTIVITY_BOOKMARK_LAUNCHER = "activity bookmark launcher";
                e.ACTIVITY_DETAIL_PAGE = "activity detail page";
                e.ACTIVITIES_PAGE = "activities page";
                e.ACTIVITIES_PAGE_NOTIFICATION_DOT = "activities page cta";
                e.ACTIVITIES_PAGE_WHATS_NEW_TILE = "activities page whats new tile";
                e.VOICE_PANEL_PRE_JOIN = "voice panel pre-join content";
                e.ACTIVITIES_IM_FEELING_LUCKY = "activities im feeling lucky";
                e.ACTIVITIES_HAPPENING_NOW = "activities happening now";
                e.MEDIA_VIEWER = "media viewer";
                e.MESSAGE_LONG_PRESS_MENU = "message long press menu";
                e.COLLECTIBLES_SHOP = "collectibles shop";
                e.COLLECTIBLES_SHOP_CARD = "collectibles shop card";
                e.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON = "collectibles shop card preview button";
                e.COLLECTIBLES_SHOP_DETAILS_MODAL = "collectibles shop details modal";
                e.COLLECTIBLES_PROFILE_SETTINGS_UPSELL = "collectibles profile settings upsell";
                e.COLLECTIBLES_PREMIUM_MARKETING_PAGE_UPSELL = "collectibles premium marketing page upsell";
                e.COLLECTIBLES_PAYMENT_MODAL = "collectibles payment modal";
                e.COLLECTIBLES_COLLECTED_MODAL = "collectibles collected modal";
                e.COLLECTIBLES_USER_POPOUT_UPSELL = "collectibles user popout upsell";
                e.COLLECTIBLES_ACCOUNT_SWITCH_UPSELL = "collectibles account switch upsell";
                e.COLLECTIBLES_FEATURE_EDUCATION_TOOLTIP = "collectibles feature education tooltip";
                e.PREMIUM_BILLING_INFO = "premium billing info";
                e.PREMIUM_SUBSCRIPTION_DETAILS = "premium subscription details";
                e.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE = "application subscription payment source with invoice";
                e.GUILD_BOOST_SLOT_CANCELLATION_MODAL_CURRENT_INVOICE_PREVIEW = "guild boost slot cancellation modal current invoice preview";
                e.GUILD_BOOST_SLOT_CANCELLATION_MODAL_RENEWAL_INVOICE_PREVIEW = "guild boost slot cancellation modal renewal invoice preview";
                e.GUILD_BOOSTING_REVIEW_PRORATED = "guild boosting review prorated";
                e.GUILD_BOOSTING_REVIEW_RENEWAL = "guild boosting review renewal";
                e.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE = "guild role subscription payment source with invoice";
                e.PREMIUM_PLAN_SELECT = "premium_plan_select";
                e.CANCEL_INVOICE_PREVIEW = "cancel_invoice_preview";
                e.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT = "premium subscription fine print content";
                e.SUBSCRIPTION_INVOICE_FOOTER = "subscription invoice footer";
                e.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW = "billing switch plan immediate prorated invoice preview";
                e.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW = "billing switch plan immediate renewal invoice preview";
                e.GUILD_BOOSTING_PLAN_SELECT = "GUILD_BOOSTING_PLAN_SELECT";
                e.MEMBER_SAFETY_PAGE = "member safety page";
                e.GUILD_SETTINGS_MEMBERS_PAGE = "guild settings members page";
                e.GUILD_MEMBER_MOD_VIEW = "guild member mod view";
                e.GUILD_PRODUCT_EMBED_CARD = "guild product embed card";
                e.GUILD_PRODUCT_INFO_MODAL = "guild product info modal";
                e.GUILD_PRODUCT_PAYMENT_MODAL = "guild product payment modal";
                e.GUILD_SHOP_PAGE = "guild shop page";
                e.ACTIVITY_SHELF_ACTIVITY_DETAILS = "activity shelf activty details";
                e.MESSAGE_REMIX_TAG = "message remix tag";
                e.MESSAGE_REMIX_BUTTON = "message remix button";
                e.HAPPENING_NOW_EMBEDDED_ACTIVITY = "happening now embedded activity";
                e.CLIPS_SETTINGS = "clips settings";
                e.CLIPS_GALLERY = "clips gallery";
                e.CLIPS_GALLERY_ITEM = "clips gallery item";
                e.CLIPS_EDITOR = "clips editor";
                e.CLIPS_SHARE_MODAL = "clips share modal";
                e.CHANNEL_ATTACH_BUTTON = "channel attach button";
                e.PREMIUM_TRIAL_OFFER_ACTION_SHEET = "premium trial offer action sheet";
                e.PREMIUM_SUBSCRIBER_NITRO_HOME = "premium subscriber nitro home";
                e.CLYDE_PROFILE_SHARE_MODAL = "clyde profile share modal";
                e.PROFILE_EFFECT_SHOP_COACHMARK = "profile effect shop coachmark";
                e.ACTIVITY_IN_TEXT_ACTIONBAR = "activity in text actionbar"
            }(r || (r = {}));
            const o = r
        },
        87931: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => r
            });
            const r = n(517586).Z
        },
        165586: (e, t, n) => {
            "use strict";
            n.d(t, {
                LY: () => r,
                aW: () => p,
                ws: () => o,
                tI: () => i,
                L9: () => f,
                no: () => _,
                ND: () => d,
                WC: () => O,
                z8: () => b,
                km: () => I,
                k0: () => h,
                af: () => T
            });
            var r, o, i, a, u = n(2590),
                c = n(203600),
                l = n(473708);

            function s(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }! function(e) {
                e[e.RESOLUTION_480 = 480] = "RESOLUTION_480";
                e[e.RESOLUTION_720 = 720] = "RESOLUTION_720";
                e[e.RESOLUTION_1080 = 1080] = "RESOLUTION_1080";
                e[e.RESOLUTION_1440 = 1440] = "RESOLUTION_1440";
                e[e.RESOLUTION_SOURCE = 0] = "RESOLUTION_SOURCE"
            }(r || (r = {}));

            function p(e) {
                switch (e) {
                    case r.RESOLUTION_480:
                        return r.RESOLUTION_480;
                    case r.RESOLUTION_720:
                        return r.RESOLUTION_720;
                    case r.RESOLUTION_1080:
                        return r.RESOLUTION_1080;
                    case r.RESOLUTION_SOURCE:
                        return r.RESOLUTION_SOURCE;
                    default:
                        throw new Error("Unknown resolution: ".concat(e))
                }
            }! function(e) {
                e[e.FPS_5 = 5] = "FPS_5";
                e[e.FPS_15 = 15] = "FPS_15";
                e[e.FPS_30 = 30] = "FPS_30";
                e[e.FPS_60 = 60] = "FPS_60"
            }(o || (o = {}));
            ! function(e) {
                e[e.PRESET_VIDEO = 1] = "PRESET_VIDEO";
                e[e.PRESET_DOCUMENTS = 2] = "PRESET_DOCUMENTS";
                e[e.PRESET_CUSTOM = 3] = "PRESET_CUSTOM"
            }(i || (i = {}));

            function f(e) {
                switch (e) {
                    case o.FPS_5:
                        return o.FPS_5;
                    case o.FPS_15:
                        return o.FPS_15;
                    case o.FPS_30:
                        return o.FPS_30;
                    case o.FPS_60:
                        return o.FPS_60;
                    default:
                        throw new Error("Unknown frame rate: ".concat(e))
                }
            }
            var _ = (s(a = {}, i.PRESET_DOCUMENTS, [{
                    resolution: r.RESOLUTION_SOURCE,
                    fps: o.FPS_15
                }, {
                    resolution: r.RESOLUTION_SOURCE,
                    fps: o.FPS_5
                }]), s(a, i.PRESET_VIDEO, [{
                    resolution: r.RESOLUTION_1440,
                    fps: o.FPS_60
                }, {
                    resolution: r.RESOLUTION_1080,
                    fps: o.FPS_60
                }, {
                    resolution: r.RESOLUTION_720,
                    fps: o.FPS_60
                }, {
                    resolution: r.RESOLUTION_720,
                    fps: o.FPS_30
                }]), s(a, i.PRESET_CUSTOM, []), a),
                d = [{
                    resolution: r.RESOLUTION_SOURCE,
                    fps: o.FPS_60,
                    quality: c.ys.HIGH_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_SOURCE,
                    fps: o.FPS_30,
                    quality: c.ys.HIGH_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_SOURCE,
                    fps: o.FPS_15,
                    quality: c.ys.HIGH_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_SOURCE,
                    fps: o.FPS_5,
                    preset: i.PRESET_DOCUMENTS
                }, {
                    resolution: r.RESOLUTION_1440,
                    fps: o.FPS_60,
                    guildPremiumTier: u.Eu4.TIER_2,
                    quality: c.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_1440,
                    fps: o.FPS_30,
                    guildPremiumTier: u.Eu4.TIER_2,
                    quality: c.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_1440,
                    fps: o.FPS_15,
                    guildPremiumTier: u.Eu4.TIER_2,
                    quality: c.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_1080,
                    fps: o.FPS_60,
                    guildPremiumTier: u.Eu4.TIER_2,
                    quality: c.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_1080,
                    fps: o.FPS_30,
                    guildPremiumTier: u.Eu4.TIER_2,
                    quality: c.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_1080,
                    fps: o.FPS_15,
                    guildPremiumTier: u.Eu4.TIER_2,
                    quality: c.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_720,
                    fps: o.FPS_60,
                    guildPremiumTier: u.Eu4.TIER_1,
                    quality: c.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_720,
                    fps: o.FPS_30
                }, {
                    resolution: r.RESOLUTION_720,
                    fps: o.FPS_15
                }, {
                    resolution: r.RESOLUTION_720,
                    fps: o.FPS_5
                }, {
                    resolution: r.RESOLUTION_480,
                    fps: o.FPS_60,
                    guildPremiumTier: u.Eu4.TIER_1,
                    quality: c.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_480,
                    fps: o.FPS_30
                }, {
                    resolution: r.RESOLUTION_480,
                    fps: o.FPS_15
                }, {
                    resolution: r.RESOLUTION_480,
                    fps: o.FPS_5
                }];

            function E(e, t) {
                return {
                    value: e,
                    get label() {
                        return null != t ? t() : e
                    }
                }
            }
            var O = [E(r.RESOLUTION_720), E(r.RESOLUTION_1080), E(r.RESOLUTION_1440), E(r.RESOLUTION_SOURCE, (function() {
                    return l.Z.Messages.SCREENSHARE_SOURCE
                }))],
                b = [E(r.RESOLUTION_720), E(r.RESOLUTION_1080), E(r.RESOLUTION_1440)],
                m = function(e) {
                    return "".concat(e, "p")
                },
                I = [E(r.RESOLUTION_480, (function() {
                    return m(r.RESOLUTION_480)
                })), E(r.RESOLUTION_720, (function() {
                    return m(r.RESOLUTION_720)
                })), E(r.RESOLUTION_1080, (function() {
                    return m(r.RESOLUTION_1080)
                })), E(r.RESOLUTION_1440, (function() {
                    return m(r.RESOLUTION_1440)
                })), E(r.RESOLUTION_SOURCE, (function() {
                    return l.Z.Messages.SCREENSHARE_SOURCE
                }))],
                h = [E(o.FPS_15), E(o.FPS_30), E(o.FPS_60)],
                T = [E(o.FPS_15, (function() {
                    return l.Z.Messages.STREAM_FPS_OPTION.format({
                        value: o.FPS_15
                    })
                })), E(o.FPS_30, (function() {
                    return l.Z.Messages.STREAM_FPS_OPTION.format({
                        value: o.FPS_30
                    })
                })), E(o.FPS_60, (function() {
                    return l.Z.Messages.STREAM_FPS_OPTION.format({
                        value: o.FPS_60
                    })
                }))]
        },
        115617: (e, t, n) => {
            "use strict";
            n.d(t, {
                Kw: () => a,
                hv: () => u,
                Po: () => c
            });
            var r = n(744564),
                o = n(652591),
                i = n(2590);

            function a(e) {
                o.default.track(i.rMx.HOTSPOT_HIDDEN, {
                    hotspot_location: e
                });
                r.Z.wait((function() {
                    r.Z.dispatch({
                        type: "HOTSPOT_HIDE",
                        location: e
                    })
                }))
            }

            function u(e, t) {
                r.Z.dispatch({
                    type: "HOTSPOT_OVERRIDE_SET",
                    location: e,
                    enabled: t
                })
            }

            function c(e) {
                r.Z.dispatch({
                    type: "HOTSPOT_OVERRIDE_CLEAR",
                    location: e
                })
            }
        },
        550254: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => O
            });
            var r = n(202351),
                o = n(744564),
                i = n(113469),
                a = n(199790);

            function u(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function c(e) {
                c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return c(e)
            }

            function l(e, t) {
                return !t || "object" !== p(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function s(e, t) {
                s = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return s(e, t)
            }
            var p = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function f(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = c(e);
                    if (t) {
                        var o = c(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return l(this, n)
                }
            }
            var _ = new Set,
                d = {};
            var E = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && s(e, t)
                }(n, e);
                var t = f(n);

                function n() {
                    u(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function(e) {
                    if (null != e) {
                        Array.isArray(e.hiddenHotspots) && (_ = new Set(e.hiddenHotspots));
                        null != e.hotspotOverrides && (d = e.hotspotOverrides)
                    }
                };
                r.hasHotspot = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = !t && d[e];
                    return !a.a && (!i.s.isDisallowPopupsSet() && (n || !_.has(e)))
                };
                r.hasHiddenHotspot = function(e) {
                    return _.has(e)
                };
                r.getHotspotOverride = function(e) {
                    return d[e]
                };
                r.getState = function() {
                    return {
                        hiddenHotspots: _,
                        hotspotOverrides: d
                    }
                };
                return n
            }(r.ZP.PersistedStore);
            E.displayName = "HotspotStore";
            E.persistKey = "hotspots";
            E.migrations = [function(e) {
                return {
                    hiddenHotspots: null != e ? e : [],
                    hotspotOverrides: {}
                }
            }];
            const O = new E(o.Z, {
                OVERLAY_INITIALIZE: function(e) {
                    var t = e.hiddenHotspots;
                    _ = new Set(t)
                },
                HOTSPOT_HIDE: function(e) {
                    var t = e.location;
                    if (_.has(t)) return !1;
                    _.add(t)
                },
                HOTSPOT_OVERRIDE_SET: function(e) {
                    var t = e.location,
                        n = e.enabled;
                    d[t] = n
                },
                HOTSPOT_OVERRIDE_CLEAR: function(e) {
                    var t = e.location;
                    if (null == d[t]) return !1;
                    delete d[t]
                }
            })
        },
        921431: (e, t, n) => {
            "use strict";
            n.d(t, {
                pC: () => r,
                vJ: () => a,
                L0: () => u,
                f: () => c,
                X_: () => l,
                _T: () => s,
                d6: () => p,
                xT: () => f,
                N8: () => _,
                Uo: () => d,
                MY: () => E,
                Ij: () => O,
                ut: () => b,
                sX: () => m,
                qj: () => I,
                C5: () => h,
                WV: () => T,
                SW: () => y,
                Ff: () => S,
                PB: () => g,
                u: () => i
            });
            var r, o = n(232806);
            ! function(e) {
                e[e.AVATAR = 0] = "AVATAR";
                e[e.BANNER = 1] = "BANNER";
                e[e.GUILD_BANNER = 2] = "GUILD_BANNER";
                e[e.VIDEO_BACKGROUND = 3] = "VIDEO_BACKGROUND";
                e[e.SCHEDULED_EVENT_IMAGE = 4] = "SCHEDULED_EVENT_IMAGE";
                e[e.HOME_HEADER = 5] = "HOME_HEADER";
                e[e.AVATAR_DECORATION = 6] = "AVATAR_DECORATION"
            }(r || (r = {}));
            var i, a = 568,
                u = 2400,
                c = 848,
                l = 2400,
                s = 1350,
                p = 2400,
                f = 960,
                _ = 2400,
                d = 600,
                E = 17 / 6,
                O = 16 / 9,
                b = 2.5,
                m = 4,
                I = a / E,
                h = a / O,
                T = a / b,
                y = a / m,
                S = o.HE.width / o.HE.height,
                g = a / S;
            ! function(e) {
                e[e.CROP_GIF_START = 0] = "CROP_GIF_START";
                e[e.CROP_GIF_COMPLETE = 1] = "CROP_GIF_COMPLETE";
                e[e.CROP_GIF_ERROR = 2] = "CROP_GIF_ERROR"
            }(i || (i = {}))
        },
        159895: (e, t, n) => {
            "use strict";
            n.d(t, {
                Bc: () => m,
                I6: () => T,
                Z$: () => y
            });
            var r = n(667294),
                o = n(318715),
                i = n(281110),
                a = n(744564),
                u = n(810978),
                c = n(473903),
                l = n(551778),
                s = n(636795),
                p = n(884123),
                f = n(203600),
                _ = n(2590);

            function d(e, t, n, r, o, i, a) {
                try {
                    var u = e[i](a),
                        c = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(c) : Promise.resolve(c).then(r, o)
            }

            function E(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function a(e) {
                            d(i, r, o, a, u, "next", e)
                        }

                        function u(e) {
                            d(i, r, o, a, u, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function O(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }
            var b = function(e, t) {
                    var n, r, o, i, a = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: u(0),
                        throw: u(1),
                        return: u(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function u(i) {
                        return function(u) {
                            return function(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    (r = 0, o) && (i = [2 & i[0], o.value]);
                                    switch (i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
                                            break;
                                        case 4:
                                            a.label++;
                                            return {
                                                value: i[1], done: !1
                                            };
                                        case 5:
                                            a.label++;
                                            r = i[1];
                                            i = [0];
                                            continue;
                                        case 7:
                                            i = a.ops.pop();
                                            a.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = a.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                a.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && a.label < o[1]) {
                                                a.label = o[1];
                                                o = i;
                                                break
                                            }
                                            if (o && a.label < o[2]) {
                                                a.label = o[2];
                                                a.ops.push(i);
                                                break
                                            }
                                            o[2] && a.ops.pop();
                                            a.trys.pop();
                                            continue
                                    }
                                    i = t.call(e, a)
                                } catch (e) {
                                    i = [6, e];
                                    r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, u])
                        }
                    }
                },
                m = "nonSubscriber";

            function I() {
                return (I = E((function() {
                    var e;
                    return b(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                t.trys.push([0, 2, , 3]);
                                a.Z.dispatch({
                                    type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH"
                                });
                                return [4, i.ZP.get({
                                    url: _.ANM.USER_PREMIUM_LIKELIHOOD
                                })];
                            case 1:
                                e = t.sent().body;
                                a.Z.dispatch({
                                    type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS",
                                    premiumLikelihood: h(e)
                                });
                                return [3, 3];
                            case 2:
                                404 === t.sent().status ? a.Z.dispatch({
                                    type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS"
                                }) : a.Z.dispatch({
                                    type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR"
                                });
                                return [3, 3];
                            case 3:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function h(e) {
                var t;
                return O(t = {}, m, e.non_subscriber), O(t, f.Si.TIER_0, e[f.Si.TIER_0]), O(t, f.Si.TIER_2, e[f.Si.TIER_2]), t
            }

            function T(e) {
                var t = e.getCurrentConfig({
                        location: "443cca_1"
                    }, {
                        autoTrackExposure: !1
                    }),
                    n = t.enabled,
                    r = t.useExpectedValue,
                    o = p.Z.shouldFetchPremiumLikelihood();
                S(c.default.getCurrentUser(), o, n, r)
            }

            function y(e) {
                var t = e.useExperiment({
                        location: "443cca_2"
                    }, {
                        autoTrackExposure: !1
                    }),
                    n = t.enabled,
                    i = t.useExpectedValue,
                    a = (0, o.ZP)([p.Z], (function() {
                        return p.Z.shouldFetchPremiumLikelihood()
                    })),
                    u = (0, o.ZP)([c.default], (function() {
                        return c.default.getCurrentUser()
                    }));
                r.useEffect((function() {
                    S(u, a, n, i)
                }), [u, a, n, i])
            }

            function S(e, t, n, r) {
                if (null != e && !(0, s.I5)(e) && n) {
                    t && function() {
                        I.apply(this, arguments)
                    }();
                    if (r) {
                        l.Z.isLoadedForSKU(f.Si.TIER_0) || l.Z.isFetchingForSKU(f.Si.TIER_0) || (0, u.GZ)(f.Si.TIER_0);
                        l.Z.isLoadedForSKU(f.Si.TIER_2) || l.Z.isFetchingForSKU(f.Si.TIER_2) || (0, u.GZ)(f.Si.TIER_2)
                    }
                }
            }
        },
        884123: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => d
            });
            var r = n(202351),
                o = n(744564);

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e) {
                a = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return a(e)
            }

            function u(e, t) {
                return !t || "object" !== l(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function c(e, t) {
                c = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return c(e, t)
            }
            var l = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function s(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = a(e);
                    if (t) {
                        var o = a(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return u(this, n)
                }
            }
            var p = {
                    premiumLikelihood: void 0,
                    isFetching: !1,
                    fetched: !1
                },
                f = p;
            var _ = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && c(e, t)
                }(n, e);
                var t = s(n);

                function n() {
                    i(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    f = p
                };
                r.getState = function() {
                    return f
                };
                r.shouldFetchPremiumLikelihood = function() {
                    return !f.isFetching && !f.fetched
                };
                return n
            }(r.ZP.Store);
            _.displayName = "UserPremiumLikelihoodStore";
            const d = new _(o.Z, {
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH: function() {
                    f.isFetching = !0
                },
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS: function(e) {
                    var t = e.premiumLikelihood;
                    f.premiumLikelihood = t;
                    f.fetched = !0;
                    f.isFetching = !1
                },
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR: function() {
                    f.isFetching = !1
                },
                LOGOUT: function() {
                    f.premiumLikelihood = void 0
                }
            })
        },
        799066: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => r
            });
            const r = (0, n(260561).B)({
                kind: "user",
                id: "2022-12_premium_targeted_upsells",
                label: "Premium Targeted Upsells",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Use highest expected value to determine Nitro upsells",
                    config: {
                        enabled: !0,
                        useExpectedValue: !0,
                        useLikelihood: !1
                    }
                }, {
                    id: 2,
                    label: "Use highest likelihood to determine Nitro upsells",
                    config: {
                        enabled: !0,
                        useExpectedValue: !1,
                        useLikelihood: !0
                    }
                }]
            })
        },
        956206: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => r
            });
            const r = (0, n(260561).B)({
                kind: "user",
                id: "2023-03_april_fools",
                label: "April Fools 2023",
                defaultConfig: {
                    allowAprilFoolsSoundpack: !1
                },
                treatments: [{
                    id: 1,
                    label: "April Fools 2023",
                    config: {
                        allowAprilFoolsSoundpack: !0
                    }
                }]
            })
        },
        292832: (e, t, n) => {
            "use strict";
            n.d(t, {
                Y: () => r,
                Q: () => i
            });
            var r, o = n(473708);
            ! function(e) {
                e.CLASSIC = "classic";
                e.DETUNE = "detune"
            }(r || (r = {}));

            function i() {
                return [{
                    value: r.CLASSIC,
                    label: o.Z.Messages.SOUNDPACK_CLASSIC_LABEL
                }, {
                    value: r.DETUNE,
                    label: o.Z.Messages.SOUNDPACK_DETUNE_LABEL
                }]
            }
        },
        669754: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => E
            });
            var r = n(202351),
                o = n(744564),
                i = n(956206),
                a = n(292832);

            function u(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function c(e) {
                c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return c(e)
            }

            function l(e, t) {
                return !t || "object" !== p(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function s(e, t) {
                s = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return s(e, t)
            }
            var p = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function f(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = c(e);
                    if (t) {
                        var o = c(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return l(this, n)
                }
            }
            var _ = {
                soundpack: a.Y.CLASSIC
            };
            var d = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && s(e, t)
                }(n, e);
                var t = f(n);

                function n() {
                    u(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function(e) {
                    var t = this;
                    i.Z.subscribe({
                        location: "1"
                    }, (function() {
                        return t.emitChange()
                    }));
                    null != e && (_ = e)
                };
                r.getState = function() {
                    return _
                };
                r.getSoundpack = function() {
                    var e;
                    return i.Z.getCurrentConfig({
                        location: "37bac2_1"
                    }, {
                        autoTrackExposure: !1
                    }).allowAprilFoolsSoundpack && (e = _.soundpack, Object.values(a.Y).includes(e)) ? _.soundpack : a.Y.CLASSIC
                };
                return n
            }(r.ZP.PersistedStore);
            d.displayName = "SoundpackStore";
            d.persistKey = "SoundpackStore";
            const E = new d(o.Z, {
                SET_SOUNDPACK: function(e) {
                    var t = e.soundpack;
                    _ = {
                        soundpack: t
                    }
                }
            })
        },
        232806: (e, t, n) => {
            "use strict";
            n.d(t, {
                xV: () => i,
                dp: () => a,
                X7: () => u,
                E1: () => c,
                f7: () => l,
                HE: () => s,
                SJ: () => p
            });

            function r(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function o(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }
            var i, a;
            ! function(e) {
                e[e.BACKGROUND = 0] = "BACKGROUND"
            }(i || (i = {}));
            ! function(e) {
                e[e.OPTION_1 = 0] = "OPTION_1";
                e[e.OPTION_2 = 1] = "OPTION_2";
                e[e.OPTION_3 = 2] = "OPTION_3";
                e[e.OPTION_4 = 3] = "OPTION_4";
                e[e.OPTION_7 = 7] = "OPTION_7";
                e[e.OPTION_8 = 8] = "OPTION_8";
                e[e.OPTION_9 = 9] = "OPTION_9";
                e[e.OPTION_10 = 10] = "OPTION_10"
            }(a || (a = {}));
            var u = [a.OPTION_7, a.OPTION_8, a.OPTION_9, a.OPTION_10],
                c = [a.OPTION_7, a.OPTION_8, a.OPTION_9, a.OPTION_10, a.OPTION_1, a.OPTION_2, a.OPTION_3, a.OPTION_4].reduce((function(e, t, n) {
                    return o(function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                o = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                            }))));
                            o.forEach((function(t) {
                                r(e, t, n[t])
                            }))
                        }
                        return e
                    }({}, e), r({}, t, n))
                }), {}),
                l = "blur",
                s = {
                    width: 1280,
                    height: 720
                },
                p = 10485760
        },
        763361: (e, t, n) => {
            "use strict";
            n.r(t);
            n.d(t, {
                default: () => w
            });
            var r = n(785893),
                o = n(667294),
                i = n(304548),
                a = n(656645),
                u = n(213276),
                c = n(579581),
                l = n(153686),
                s = n(19585),
                p = n(968449),
                f = n(535312),
                _ = n(597246),
                d = n(359721),
                E = n(504001),
                O = n(602351),
                b = n(473903),
                m = n(107364),
                I = n(443812),
                h = n(652591),
                T = n(758905),
                y = n(2590),
                S = n(473708),
                g = n(809934),
                v = n.n(g);

            function R(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function A(e, t, n, r, o, i, a) {
                try {
                    var u = e[i](a),
                        c = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(c) : Promise.resolve(c).then(r, o)
            }

            function N(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function a(e) {
                            A(i, r, o, a, u, "next", e)
                        }

                        function u(e) {
                            A(i, r, o, a, u, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function P(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function L(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        P(e, t, n[t])
                    }))
                }
                return e
            }

            function C(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            a = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            o = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return R(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return R(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var U = function(e, t) {
                    var n, r, o, i, a = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: u(0),
                        throw: u(1),
                        return: u(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function u(i) {
                        return function(u) {
                            return function(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    (r = 0, o) && (i = [2 & i[0], o.value]);
                                    switch (i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
                                            break;
                                        case 4:
                                            a.label++;
                                            return {
                                                value: i[1], done: !1
                                            };
                                        case 5:
                                            a.label++;
                                            r = i[1];
                                            i = [0];
                                            continue;
                                        case 7:
                                            i = a.ops.pop();
                                            a.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = a.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                a.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && a.label < o[1]) {
                                                a.label = o[1];
                                                o = i;
                                                break
                                            }
                                            if (o && a.label < o[2]) {
                                                a.label = o[2];
                                                a.ops.push(i);
                                                break
                                            }
                                            o[2] && a.ops.pop();
                                            a.trys.pop();
                                            continue
                                    }
                                    i = t.call(e, a)
                                } catch (e) {
                                    i = [6, e];
                                    r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, u])
                        }
                    }
                },
                M = 368,
                D = 207;

            function w(e) {
                var t = e.transitionState,
                    n = e.videoEnabled,
                    g = e.onEnable,
                    R = e.onClose,
                    A = O.Z.getCameraComponent(),
                    P = (0, I.Dt)(),
                    w = (0,
                        E.Z)(),
                    j = p.qF.useSetting(),
                    G = C(o.useState((0, f.P)(b.default.getCurrentUser())), 2),
                    x = G[0],
                    k = G[1],
                    H = (0, c.O)(),
                    Z = (0, s.Z)(l.Z.CAMERA_PREVIEW).AnalyticsLocationProvider,
                    B = o.useRef(null);
                o.useEffect((function() {
                    h.default.track(y.rMx.OPEN_MODAL, {
                        type: "Camera Preview Modal"
                    })
                }), []);
                o.useEffect((function() {
                    var e;
                    null === (e = B.current) || void 0 === e || e.scrollToTop()
                }), []);
                var F, V, Y, K = (F = N((function() {
                        return U(this, (function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, W()];
                                case 1:
                                    e.sent();
                                    a.Z.setVideoEnabled(!0);
                                    null == g || g();
                                    return [2]
                            }
                        }))
                    })), function() {
                        return F.apply(this, arguments)
                    }),
                    W = function() {
                        var e = N((function() {
                            return U(this, (function(e) {
                                switch (e.label) {
                                    case 0:
                                        e.trys.push([0, 2, , 3]);
                                        return [4, (0, d.wG)(x, {
                                            location: L({
                                                page: y.ZY5.PREVIEW_CAMERA_MODAL
                                            }, H.location)
                                        })];
                                    case 1:
                                        e.sent();
                                        return [3, 3];
                                    case 2:
                                        e.sent();
                                        return [3, 3];
                                    case 3:
                                        return [4, R()];
                                    case 4:
                                        e.sent();
                                        (0, _.Up)(x);
                                        return [2]
                                }
                            }))
                        }));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                return (0, r.jsx)(Z, {
                    children: (0, r.jsx)(u.Z, {
                        page: y.ZY5.PREVIEW_CAMERA_MODAL,
                        children: (0, r.jsxs)(i.ModalRoot, {
                            className: v().modalRoot,
                            size: i.ModalSize.DYNAMIC,
                            "aria-labelledby": P,
                            transitionState: t,
                            children: [(0, r.jsxs)(i.ModalContent, {
                                className: w ? v().contentWithVideoBackgrounds : v().content,
                                scrollerRef: B,
                                children: [(0, r.jsx)(i.Heading, {
                                    id: P,
                                    className: v().header,
                                    variant: "heading-xl/semibold",
                                    children: n ? S.Z.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_CHANGE_HEADER : S.Z.Messages.CAMERA_PREVIEW_MODAL_HEADER
                                }), (0, r.jsx)(T.Z, {
                                    hidePreviewToggle: !0,
                                    showSmallBackgroundOptions: !0,
                                    hideDeviceHeader: !0,
                                    selectedBackgroundOption: x,
                                    onSelectBackgroundOption: k,
                                    hideDeviceSelector: n,
                                    renderCamera: function(e) {
                                        return (0, r.jsxs)("div", {
                                            className: v().cameraPreview,
                                            children: [(0, r.jsx)("div", {
                                                className: v().camera,
                                                children: (0, r.jsx)(A, {
                                                    disabled: !1,
                                                    deviceId: e,
                                                    width: M,
                                                    height: D
                                                })
                                            }), (0, r.jsx)(T.S, {})]
                                        })
                                    },
                                    onLearnMore: R
                                })]
                            }), (0, r.jsxs)(i.ModalFooter, {
                                justify: m.Z.Justify.BETWEEN,
                                children: [(V = n ? W : K,
                                    Y = n ? S.Z.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_CHANGE_BACKGROUND : S.Z.Messages.CAMERA_ON, (0, r.jsx)(i.Button, {
                                        onClick: V,
                                        size: i.Button.Sizes.SMALL,
                                        autoFocus: !n,
                                        children: Y
                                    })), (0, r.jsx)(i.Checkbox, {
                                    size: 18,
                                    type: i.Checkbox.Types.INVERTED,
                                    value: j,
                                    onChange: function() {
                                        p.qF.updateSetting(!j);
                                        h.default.track(y.rMx.UPDATE_USER_SETTINGS_LOCAL, {
                                            always_preview_video: !j
                                        })
                                    },
                                    children: (0, r.jsx)(i.Text, {
                                        variant: "text-sm/normal",
                                        children: S.Z.Messages.CAMERA_PREVIEW_ALWAYS_PREVIEW
                                    })
                                })]
                            }), (0, r.jsx)(i.ModalCloseButton, {
                                onClick: R,
                                className: v().modalClose
                            })]
                        })
                    })
                })
            }
        },
        443812: (e, t, n) => {
            "use strict";
            n.d(t, {
                hQ: () => a,
                Dt: () => u,
                FG: () => c
            });
            var r = n(873955),
                o = n.n(r),
                i = n(989824),
                a = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                    return o()(e)
                },
                u = function() {
                    return (0, i.Z)((function() {
                        return a()
                    }))
                },
                c = function(e) {
                    return (0, e.children)(u())
                }
        },
        655402: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => s
            });
            var r = n(785893),
                o = (n(667294), n(168075)),
                i = n(720502),
                a = n(633878);

            function u(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function c(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function l(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }
            const s = (0, o.hN)((function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    o = e.height,
                    i = void 0 === o ? 24 : o,
                    s = e.color,
                    p = void 0 === s ? "currentColor" : s,
                    f = l(e, ["width", "height", "color"]);
                return (0, r.jsxs)("svg", c(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            u(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, a.Z)(f)), {
                    width: n,
                    height: i,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    children: [(0, r.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M13.2899 2L6 2C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V10.7101C21.3663 10.8987 20.695 11 20 11C16.134 11 13 7.86599 13 4C13 3.30503 13.1013 2.63371 13.2899 2ZM8 6C9.1032 6 10 6.8952 10 8C10 9.1056 9.1032 10 8 10C6.8944 10 6 9.1056 6 8C6 6.8952 6.8944 6 8 6ZM6 18L9 14L11 16L15 11L18 18H6Z",
                        fill: p
                    }), (0, r.jsx)("path", {
                        d: "M21 0V3H24V5H21V8H19V5H16V3H19V0H21Z",
                        fill: p
                    })]
                }))
            }), i.F)
        },
        406493: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => _
            });
            var r = n(785893),
                o = (n(667294), n(168075)),
                i = n(795308),
                a = n(633878);

            function u(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function c(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function l(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }

            function s(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function p(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function f(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }
            const _ = (0, o.hN)((function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    o = e.height,
                    i = void 0 === o ? 24 : o,
                    u = e.color,
                    c = void 0 === u ? "currentColor" : u,
                    l = e.viewBox,
                    _ = void 0 === l ? "0 0 24 24" : l,
                    d = e.foreground,
                    E = f(e, ["width", "height", "color", "viewBox", "foreground"]);
                return (0, r.jsx)("svg", p(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            s(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, a.Z)(E)), {
                    width: n,
                    height: i,
                    viewBox: _,
                    children: (0, r.jsx)("path", {
                        className: d,
                        fill: c,
                        d: "M2.98966977,9.35789159 C2.98966977,9.77582472 2.63442946,10.1240466 2.20807287,10.1240466 L1.78171628,10.1240466 C1.35535969,10.1240466 0.999948837,9.77582472 0.999948837,9.35789159 C0.999948837,8.93995846 1.35535969,8.59173658 1.78171628,8.59173658 L2.20807287,8.59173658 C2.63442946,8.59173658 2.98966977,8.93995846 2.98966977,9.35789159 Z M22.2467643,9.14892503 C24.0942527,12.9800344 22.3888264,17.5772989 18.3384388,19.3882867 C14.4302837,21.1297305 9.74036124,19.457998 7.9638186,15.6268886 C7.60857829,14.8607335 7.3954,14.0248673 7.32428372,13.189001 L5.76091938,13.189001 C5.33456279,13.189001 4.97932248,12.840612 4.97932248,12.4226788 C4.97932248,12.0047457 5.33456279,11.6565238 5.76091938,11.6565238 L8.03493488,11.6565238 C8.46129147,11.6565238 8.81653178,11.3083019 8.81653178,10.8903688 C8.81653178,10.4724357 8.46129147,10.1240466 8.03493488,10.1240466 L4.41090388,10.1240466 C3.98454729,10.1240466 3.62913643,9.77582472 3.62913643,9.35789159 C3.62913643,8.93995846 3.98454729,8.59173658 4.41090388,8.59173658 L9.45606667,8.59173658 C9.88242326,8.59173658 10.2376636,8.24334752 10.2376636,7.82541439 C10.2376636,7.40748126 9.88242326,7.05925937 9.45606667,7.05925937 L7.3954,7.05925937 C6.75586512,7.05925937 6.18727597,6.57161499 6.18727597,5.87517123 C6.18727597,5.24827153 6.68474884,4.69091591 7.3954,4.69091591 L15.4250589,4.69091591 C18.267493,4.8303384 20.9676946,6.43235968 22.2467643,9.14892503 Z M13.2662961,8.38056332 C11.0193969,9.3919615 10.0341721,11.9973566 11.065955,14.1998642 C12.097738,16.4023718 14.755645,17.3681317 17.0025442,16.3567335 C19.249614,15.3453354 20.2346682,12.7399402 19.2028853,10.5374326 C18.1711023,8.33492503 15.5131953,7.36916515 13.2662961,8.38056332 Z M16.8462589,9.84548582 L18.2673907,12.2138293 C18.338507,12.3530846 18.338507,12.4227958 18.2673907,12.5620512 L16.8462589,14.9303946 C16.7751426,15.0696499 16.6330806,15.0696499 16.5619643,15.0696499 L13.7906465,15.0696499 C13.6485845,15.0696499 13.5774682,14.9999387 13.5065225,14.9303946 L12.0852202,12.5620512 C12.0142744,12.4227958 12.0142744,12.3530846 12.0852202,12.2138293 L13.5065225,9.84548582 C13.5774682,9.7062305 13.7197008,9.7062305 13.7906465,9.7062305 L16.5619643,9.7062305 C16.7041969,9.63651925 16.7751426,9.7062305 16.8462589,9.84548582 Z"
                    })
                }))
            }), (function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    o = e.height,
                    s = void 0 === o ? 24 : o,
                    p = e.color,
                    f = void 0 === p ? i.Z.colors.INTERACTIVE_NORMAL : p,
                    _ = e.colorClass,
                    d = void 0 === _ ? "" : _,
                    E = l(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", c(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            u(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, a.Z)(E)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof f ? f : f.css,
                        fillRule: "evenodd",
                        d: "M7 4a1 1 0 0 0 0 2h3a1 1 0 1 1 0 2H5.5a1 1 0 0 0 0 2H8a1 1 0 1 1 0 2H6a1 1 0 1 0 0 2h1.252A8 8 0 1 0 15 4H7Zm8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM2.5 10a1 1 0 0 0 0-2H2a1 1 0 0 0 0 2h.5Z",
                        clipRule: "evenodd",
                        className: d
                    })
                }))
            }))
        },
        778613: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => c
            });
            var r = n(785893),
                o = (n(667294), n(633878));

            function i(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function a(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function u(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }

            function c(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    c = e.height,
                    l = void 0 === c ? 24 : c,
                    s = e.color,
                    p = void 0 === s ? "currentColor" : s,
                    f = e.className,
                    _ = e.foreground,
                    d = u(e, ["width", "height", "color", "className", "foreground"]);
                return (0, r.jsxs)("svg", a(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            i(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, o.Z)(d)), {
                    className: f,
                    width: n,
                    height: l,
                    viewBox: "0 0 24 24",
                    children: [(0, r.jsx)("path", {
                        d: "M0 0h24v24H0z",
                        fill: "none"
                    }), (0, r.jsx)("path", {
                        className: _,
                        fill: p,
                        d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z"
                    })]
                }))
            }
        },
        958125: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => _
            });
            var r = n(785893),
                o = (n(667294), n(168075)),
                i = n(795308),
                a = n(633878);

            function u(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function c(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function l(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }

            function s(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function p(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function f(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }
            const _ = (0, o.hN)((function(e) {
                var t = e.width,
                    n = void 0 === t ? 16 : t,
                    o = e.height,
                    i = void 0 === o ? 16 : o,
                    u = e.color,
                    c = void 0 === u ? "currentColor" : u,
                    l = e.foreground,
                    _ = f(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", p(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            s(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, a.Z)(_)), {
                    width: n,
                    height: i,
                    viewBox: "0 0 18 18",
                    fill: "none",
                    children: (0, r.jsx)("path", {
                        className: l,
                        d: "M6.01053 2.82974C5.01058 2.24153 3.75 2.96251 3.75 4.12264V13.8774C3.75 15.0375 5.01058 15.7585 6.01053 15.1703L14.3021 10.2929C15.288 9.71294 15.288 8.28709 14.3021 7.70711L6.01053 2.82974Z",
                        fill: c
                    })
                }))
            }), (function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    o = e.height,
                    s = void 0 === o ? 24 : o,
                    p = e.color,
                    f = void 0 === p ? i.Z.colors.INTERACTIVE_NORMAL : p,
                    _ = e.colorClass,
                    d = void 0 === _ ? "" : _,
                    E = l(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", c(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            u(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, a.Z)(E)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof f ? f : f.css,
                        d: "M9.248 3.348C7.872 2.455 6 3.384 6 4.96v14.08c0 1.576 1.872 2.505 3.248 1.612l10.853-7.04c1.199-.777 1.199-2.447 0-3.224L9.248 3.348Z",
                        className: d
                    })
                }))
            }))
        },
        939198: (e, t, n) => {
            "use strict";
            n.d(t, {
                mT: () => o,
                Jj: () => i,
                OF: () => a,
                hV: () => r,
                WW: () => u
            });
            var r, o = 550,
                i = 350,
                a = 40;
            ! function(e) {
                e.STATIC = "STATIC";
                e.RESPONSIVE = "RESPONSIVE";
                e.MOSAIC = "MOSAIC"
            }(r || (r = {}));
            var u = 20
        },
        531441: (e, t, n) => {
            "use strict";
            n.d(t, {
                Dv: () => _,
                OV: () => E,
                NG: () => O,
                mA: () => b,
                IG: () => m,
                lB: () => I,
                G2: () => h,
                fW: () => T
            });
            var r = n(785893),
                o = (n(667294), n(294184)),
                i = n.n(o),
                a = (n(304548), n(87931)),
                u = (n(473708), n(800624)),
                c = n.n(u);

            function l(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function s(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        l(e, t, n[t])
                    }))
                }
                return e
            }

            function p(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function f(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }
            var _ = {
                ROUND: c().baseShapeRound,
                ROUND_LEFT: c().baseShapeRoundLeft,
                ROUND_RIGHT: c().baseShapeRoundRight,
                SQUARE: ""
            };

            function d(e) {
                switch (e) {
                    case 1:
                    case 4:
                    case 6:
                        return 1;
                    default:
                        return
                }
            }

            function E(e) {
                return e < 10 ? 16 : e < 100 ? 22 : 30
            }

            function O(e) {
                return e < 1e3 ? "".concat(e) : "".concat(Math.min(Math.floor(e / 1e3), 9), "k+")
            }
            var b = function(e) {
                    var t = e.count,
                        n = e.color,
                        o = void 0 === n ? a.Z.STATUS_DANGER : n,
                        u = e.disableColor,
                        l = void 0 !== u && u,
                        b = e.shape,
                        m = void 0 === b ? _.ROUND : b,
                        I = e.className,
                        h = e.style,
                        T = f(e, ["count", "color", "disableColor", "shape", "className", "style"]);
                    return (0, r.jsx)("div", p(s({
                        className: i()(I, c().numberBadge, m),
                        style: s({
                            backgroundColor: l ? void 0 : o,
                            width: E(t),
                            paddingRight: d(t)
                        }, h)
                    }, T), {
                        children: O(t)
                    }))
                },
                m = function(e) {
                    var t = e.text,
                        n = e.className,
                        o = e.color,
                        u = void 0 === o ? a.Z.STATUS_DANGER : o,
                        l = e.shape,
                        d = void 0 === l ? _.ROUND : l,
                        E = e.disableColor,
                        O = void 0 !== E && E,
                        b = e.style,
                        m = f(e, ["text", "className", "color", "shape", "disableColor", "style"]);
                    return (0, r.jsx)("div", p(s({
                        className: i()(n, c().textBadge, d),
                        style: s({
                            backgroundColor: O ? void 0 : u
                        }, b)
                    }, m), {
                        children: t
                    }))
                },
                I = function(e) {
                    var t = e.text,
                        n = e.className,
                        o = f(e, ["text", "className"]);
                    return (0, r.jsx)(m, s({
                        className: i()(c().premiumBadge, n),
                        text: t
                    }, o))
                },
                h = function(e) {
                    var t = e.icon,
                        n = e.className,
                        o = e.color,
                        u = void 0 === o ? a.Z.STATUS_DANGER : o,
                        l = e.shape,
                        p = void 0 === l ? _.ROUND : l,
                        f = e.disableColor,
                        d = void 0 !== f && f,
                        E = e.style;
                    return (0, r.jsx)("div", {
                        className: i()(n, c().iconBadge, p),
                        style: s({
                            backgroundColor: d ? void 0 : u
                        }, E),
                        children: (0, r.jsx)(t, {
                            className: c().icon
                        })
                    })
                },
                T = function(e) {
                    var t = e.className,
                        n = e.color,
                        o = void 0 === n ? a.Z.INTERACTIVE_ACTIVE : n,
                        u = e.shape,
                        l = void 0 === u ? _.ROUND : u,
                        p = e.disableColor,
                        d = void 0 !== p && p,
                        E = e.style,
                        O = f(e, ["className", "color", "shape", "disableColor", "style"]);
                    return (0, r.jsx)("div", s({
                        className: i()(t, c().circleBadge, l),
                        style: s({
                            backgroundColor: d ? void 0 : o
                        }, E)
                    }, O))
                }
        },
        786170: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => d
            });
            var r = n(785893),
                o = n(667294),
                i = n(809784),
                a = n(202351),
                u = n(316878),
                c = n(939198);

            function l(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function s(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        l(e, t, n[t])
                    }))
                }
                return e
            }

            function p(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function f(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }
            var _ = function(e) {
                var t = function() {
                        var e;
                        d && (null == I || null === (e = I.current) || void 0 === e || e.play())
                    },
                    n = function() {
                        var e;
                        d && (null == I || null === (e = I.current) || void 0 === e || e.pause())
                    },
                    l = function() {
                        return {
                            maxWidth: b.width,
                            maxHeight: b.height,
                            width: "100%",
                            height: "100%"
                        }
                    },
                    p = e.externalRef,
                    _ = e.autoPlay,
                    d = e.playOnHover,
                    E = e.responsive,
                    O = e.mediaLayoutType,
                    b = f(e, ["externalRef", "autoPlay", "playOnHover", "responsive", "mediaLayoutType"]),
                    m = !(0, a.e7)([u.Z], (function() {
                        return u.Z.useReducedMotion
                    })) && !d && _,
                    I = o.useRef(null);
                o.useLayoutEffect((function() {
                    return function() {
                        var e = I.current;
                        null != e && function(e) {
                            e.removeAttribute("src");
                            Array.from(e.children).forEach((function(e) {
                                if ((0, i.k)(e, HTMLSourceElement)) {
                                    e.removeAttribute("src");
                                    e.removeAttribute("type")
                                }(0, i.k)(e, HTMLImageElement) && e.removeAttribute("src")
                            }));
                            try {
                                e.load()
                            } catch (e) {}
                        }(e)
                    }
                }), []);
                o.useLayoutEffect((function() {
                    if ("function" == typeof p) {
                        p(null);
                        p(I.current)
                    } else null != p && (p.current = I.current);
                    return function() {
                        "function" == typeof p ? p(null) : null != p && (p.current = null)
                    }
                }), [p, I]);
                return (0, r.jsx)("video", s({
                    ref: I,
                    autoPlay: m,
                    onMouseEnter: t,
                    onMouseLeave: n,
                    onFocus: t,
                    onBlur: n,
                    style: O === c.hV.MOSAIC ? {
                        width: "100%",
                        height: "100%",
                        maxHeight: "inherit",
                        objectFit: "cover"
                    } : E ? l() : {}
                }, b))
            };
            const d = o.forwardRef((function(e, t) {
                return (0, r.jsx)(_, p(s({}, e), {
                    externalRef: t
                }))
            }))
        },
        716118: (e, t, n) => {
            "use strict";
            n.d(t, {
                tu: () => f,
                uk: () => p,
                GN: () => _
            });
            var r, o = n(669754),
                i = n(292832);

            function a(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }
            var u = (a(r = {}, i.Y.CLASSIC, {
                discodo: "discodo",
                message1: "message1",
                deafen: "deafen",
                undeafen: "undeafen",
                mute: "mute",
                unmute: "unmute",
                disconnect: "disconnect",
                ptt_start: "ptt_start",
                ptt_stop: "ptt_stop",
                user_join: "user_join",
                user_leave: "user_leave",
                user_moved: "user_moved",
                call_calling: "call_calling",
                call_ringing: "call_ringing",
                stream_started: "stream_started",
                stream_ended: "stream_ended",
                stream_user_joined: "stream_user_joined",
                stream_user_left: "stream_user_left",
                poggermode_enabled: "poggermode_enabled",
                poggermode_applause: "poggermode_applause",
                poggermode_achievement_unlock: "poggermode_achievement_unlock",
                stage_waiting: "stage_waiting"
            }), a(r, i.Y.DETUNE, {
                discodo: "detune_discodo",
                message1: "detune_message1",
                deafen: "detune_deafen",
                undeafen: "detune_undeafen",
                mute: "detune_mute",
                unmute: "detune_unmute",
                disconnect: "detune_disconnect",
                ptt_start: "detune_ptt_start",
                ptt_stop: "detune_ptt_stop",
                user_join: "detune_user_join",
                user_leave: "detune_user_leave",
                user_moved: "detune_user_moved",
                call_calling: "detune_call_calling",
                call_ringing: "detune_call_ringing",
                stream_started: "detune_stream_started",
                stream_ended: "detune_stream_ended",
                stream_user_joined: "detune_stream_user_joined",
                stream_user_left: "detune_stream_user_left"
            }), r);

            function c(e) {
                return u[e]
            }
            var l, s = n(793461);
            l = n(162383).j;

            function p(e, t) {
                var n, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                    o = c(t);
                return f(null !== (n = o[e]) && void 0 !== n ? n : e, e, r)
            }

            function f(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
                return new l(e, t, n)
            }

            function _(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                    n = arguments.length > 2 ? arguments[2] : void 0;
                if (!s.Z.disableSounds) {
                    var r, i = c(o.Z.getSoundpack()),
                        a = f(null !== (r = i[e]) && void 0 !== r ? r : e, e, t);
                    null != n ? a.playWithListener().then((function(e) {
                        e && n()
                    })) : a.play();
                    return a
                }
            }
        },
        73105: (e, t, n) => {
            "use strict";
            n.d(t, {
                RD: () => W,
                WA: () => Z,
                f5: () => k,
                Gb: () => M,
                Rs: () => F,
                _2: () => Y,
                gL: () => w,
                fG: () => G
            });
            var r = n(306472),
                o = n(737264),
                i = n(496486),
                a = n.n(i),
                u = n(809784),
                c = n(296602),
                l = n(384411),
                s = n(72580),
                p = n(310126);

            function f(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }
            var _ = function() {
                function e(t, n) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e);
                    this._shouldProcess = !1;
                    this._processing = !1;
                    this._minimumTimeRemaining = 5;
                    this._language = t;
                    this._languageHint = t;
                    this._onChange = n;
                    n(t)
                }
                var t = e.prototype;
                t.process = function(e) {
                    var t = this;
                    if (!this._processing) {
                        this._processing = !0;
                        requestIdleCallback((function(n) {
                            if (n.timeRemaining() <= t._minimumTimeRemaining) t._processEnd();
                            else {
                                e.length > 256 && (e = e.slice(0, 256));
                                (function(e, t) {
                                    return p.ZP.ensureModule("discord_spellcheck").then((function() {
                                        var n = p.ZP.requireModule("discord_spellcheck").cld;
                                        return new Promise((function(r, o) {
                                            n.detect(e, {
                                                httpHint: t,
                                                encodingHint: "UTF8"
                                            }, (function(e, t) {
                                                null != e ? o(new Error(e.message)) : !t.reliable || t.languages[0].percent < 90 || t.languages[0].score < 500 ? o(new Error("Not enough reliable text.")) : r(t.languages[0].code)
                                            }))
                                        }))
                                    }))
                                })(e, t._languageHint).then((function(e) {
                                    t.language = e;
                                    t._processEnd(n.didTimeout)
                                }), (function() {
                                    t._processEnd(n.didTimeout)
                                }))
                            }
                        }))
                    }
                };
                t._processEnd = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    this._processing = !1;
                    e && this._minimumTimeRemaining++
                };
                ! function(e, t, n) {
                    t && f(e.prototype, t);
                    n && f(e, n)
                }(e, [{
                    key: "language",
                    get: function() {
                        return this._language
                    },
                    set: function(e) {
                        if (this._language !== e) {
                            this._language = e;
                            this._onChange(e)
                        }
                    }
                }, {
                    key: "languageHint",
                    set: function(e) {
                        this._languageHint = e
                    }
                }]);
                return e
            }();
            const d = {
                aa: "aa-ET",
                af: "af-ZA",
                ak: "ak-GH",
                am: "am-ET",
                an: "an-ES",
                ar: "ar-MA",
                as: "as-IN",
                ay: "ay-PE",
                az: "az-AZ",
                be: "be-BY",
                bg: "bg-BG",
                bi: "bi-TV",
                bn: "bn-BD",
                bo: "bo-CN",
                br: "br-FR",
                bs: "bs-BA",
                ca: "ca-ES",
                ce: "ce-RU",
                cs: "cs-CZ",
                cv: "cv-RU",
                cy: "cy-GB",
                da: "da-DK",
                de: "de-DE",
                dv: "dv-MV",
                dz: "dz-BT",
                el: "el-GR",
                en: "en-US",
                es: "es-ES",
                et: "et-EE",
                eu: "eu-ES",
                fa: "fa-IR",
                ff: "ff-SN",
                fi: "fi-FI",
                fo: "fo-FO",
                fr: "fr-FR",
                fy: "fy-DE",
                ga: "ga-IE",
                gd: "gd-GB",
                gl: "gl-ES",
                gu: "gu-IN",
                gv: "gv-GB",
                ha: "ha-NG",
                he: "he-IL",
                hi: "hi-IN",
                hr: "hr-HR",
                ht: "ht-HT",
                hu: "hu-HU",
                hy: "hy-AM",
                ia: "ia-FR",
                id: "id-ID",
                ig: "ig-NG",
                ik: "ik-CA",
                is: "is-IS",
                it: "it-IT",
                iu: "iu-CA",
                ja: "ja-JP",
                ka: "ka-GE",
                kk: "kk-KZ",
                kl: "kl-GL",
                km: "km-KH",
                kn: "kn-IN",
                ko: "ko-KR",
                ks: "ks-IN",
                ku: "ku-TR",
                kw: "kw-GB",
                ky: "ky-KG",
                lb: "lb-LU",
                lg: "lg-UG",
                li: "li-BE",
                ln: "ln-CD",
                lo: "lo-LA",
                lt: "lt-LT",
                lv: "lv-LV",
                mg: "mg-MG",
                mh: "mh-MH",
                mi: "mi-NZ",
                mk: "mk-MK",
                ml: "ml-IN",
                mn: "mn-MN",
                mr: "mr-IN",
                ms: "ms-MY",
                mt: "mt-MT",
                my: "my-MM",
                nb: "nb-NO",
                ne: "ne-NP",
                nl: "nl-NL",
                nn: "nn-NO",
                nr: "nr-ZA",
                oc: "oc-FR",
                om: "om-KE",
                or: "or-IN",
                os: "os-RU",
                pa: "pa-PK",
                pl: "pl-PL",
                ps: "ps-AF",
                pt: "pt-PT",
                ro: "ro-RO",
                ru: "ru-RU",
                rw: "rw-RW",
                sa: "sa-IN",
                sc: "sc-IT",
                sd: "sd-IN",
                se: "se-NO",
                si: "si-LK",
                sk: "sk-SK",
                sl: "sl-SI",
                so: "so-SO",
                sq: "sq-AL",
                sr: "sr-RS",
                ss: "ss-ZA",
                st: "st-ZA",
                sv: "sv-SE",
                sw: "sw-KE",
                ta: "ta-IN",
                te: "te-IN",
                tg: "tg-TJ",
                th: "th-TH",
                ti: "ti-ER",
                tk: "tk-TM",
                tl: "tl-PH",
                tn: "tn-ZA",
                tr: "tr-TR",
                ts: "ts-ZA",
                tt: "tt-RU",
                ug: "ug-CN",
                uk: "uk-UA",
                ur: "ur-PK",
                uz: "uz-UZ",
                ve: "ve-ZA",
                vi: "vi-VN",
                wa: "wa-BE",
                wo: "wo-SN",
                xh: "xh-ZA",
                yi: "yi-US",
                yo: "yo-NG",
                zh: "zh-CN",
                zu: "zu-ZA"
            };

            function E(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function O(e, t, n, r, o, i, a) {
                try {
                    var u = e[i](a),
                        c = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(c) : Promise.resolve(c).then(r, o)
            }

            function b(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function a(e) {
                            O(i, r, o, a, u, "next", e)
                        }

                        function u(e) {
                            O(i, r, o, a, u, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function m(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }

            function I(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            a = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            o = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return E(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return E(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var h = function(e, t) {
                    var n, r, o, i, a = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: u(0),
                        throw: u(1),
                        return: u(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function u(i) {
                        return function(u) {
                            return function(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    (r = 0, o) && (i = [2 & i[0], o.value]);
                                    switch (i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
                                            break;
                                        case 4:
                                            a.label++;
                                            return {
                                                value: i[1], done: !1
                                            };
                                        case 5:
                                            a.label++;
                                            r = i[1];
                                            i = [0];
                                            continue;
                                        case 7:
                                            i = a.ops.pop();
                                            a.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = a.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                a.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && a.label < o[1]) {
                                                a.label = o[1];
                                                o = i;
                                                break
                                            }
                                            if (o && a.label < o[2]) {
                                                a.label = o[2];
                                                a.ops.push(i);
                                                break
                                            }
                                            o[2] && a.ops.pop();
                                            a.trys.pop();
                                            continue
                                    }
                                    i = t.call(e, a)
                                } catch (e) {
                                    i = [6, e];
                                    r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, u])
                        }
                    }
                },
                T = new c.Z("Spellchecker"),
                y = null === r.Z || void 0 === r.Z ? void 0 : r.Z.spellCheck;

            function S(e) {
                var t;
                e = null !== (t = d[e]) && void 0 !== t ? t : e;
                var n = (0, o.Q)(e.replace(/[_-]/g, "-"));
                if (null != n && null != n.langtag.language && null != n.langtag.region) {
                    var r = n.langtag,
                        i = r.language,
                        a = r.region;
                    return "".concat(i.language.toLowerCase(), "-").concat(a.toUpperCase())
                }
                T.error("".concat(e, " is not a valid locale."))
            }
            var g = function() {
                    function e(t) {
                        var n = this;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e);
                        this._enabled = !0;
                        this.misspelledWord = "";
                        this.corrections = [];
                        var r = I(l.default.locale.split("-"), 2),
                            o = r[0],
                            i = r[1];
                        this.regionPreference = i;
                        var a = this.getAvailableLanguages(t);
                        this.languageDetector = new _(o, (function(e) {
                            var r = "".concat(e, "-").concat(n.regionPreference);
                            if (-1 !== t.indexOf(r)) n.setLocale(r);
                            else {
                                var i, u = null !== (i = a[e]) && void 0 !== i ? i : d[o];
                                null != u && n.setLocale(u)
                            }
                        }));
                        y.on("spellcheck-result", (function(e, t) {
                            n.misspelledWord = null != e ? e : "";
                            n.corrections = null != t ? t : []
                        }))
                    }
                    var t = e.prototype;
                    t.setLearnedWords = function(e) {
                        y.setLearnedWords(e)
                    };
                    t.setLocale = function(e) {
                        var t;
                        null === (t = y.setLocale(e)) || void 0 === t || t.then((function(t) {
                            T.info("Switching to ".concat(e), t ? "(available)" : "(unavailable)")
                        }))
                    };
                    t.setAppLocale = function(e) {
                        this.regionPreference = e.split("-")[1]
                    };
                    t.detectLanguage = function(e) {
                        this.enabled && this.languageDetector.process(e)
                    };
                    t.getAvailableLanguages = function(e) {
                        var t = {};
                        e.forEach((function(e) {
                            var n, r = I(e.split("-"), 1)[0];
                            t[r] = null !== (n = t[r]) && void 0 !== n ? n : e
                        }));
                        return t
                    };
                    t.isMisspelled = function(e, t) {
                        return "" !== this.misspelledWord && e === this.misspelledWord
                    };
                    t.getCorrectionsForMisspelling = function(e, t) {
                        return this.isMisspelled(e, t) ? this.corrections : []
                    };
                    t.replaceMisspelling = function(e) {
                        y.replaceMisspelling(e)
                    };
                    ! function(e, t, n) {
                        t && m(e.prototype, t);
                        n && m(e, n)
                    }(e, [{
                        key: "enabled",
                        get: function() {
                            return this._enabled
                        },
                        set: function(e) {
                            this._enabled = e
                        }
                    }]);
                    return e
                }(),
                v = a().debounce((function(e, t) {
                    var n = function(e) {
                        if (null == e) return null;
                        if ((0, u.k)(e, HTMLInputElement) || (0, u.k)(e, HTMLTextAreaElement)) return e.value;
                        if ((0, u.k)(e) && e.hasAttribute("contenteditable")) return e.textContent
                    }(t);
                    null != n && e.detectLanguage(n)
                }), 250);

            function R(e) {
                null != document.body && document.body.addEventListener("beforeinput", (function(t) {
                    return v(e, t.target)
                }), !0)
            }

            function A() {
                return (A = b((function() {
                    var e, t, n, r;
                    return h(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                return [4, y.getAvailableDictionaries()];
                            case 1:
                                t = null !== (e = o.sent()) && void 0 !== e ? e : [];
                                n = t.map(S).filter(s.lm);
                                R(r = new g(n));
                                return [2, r]
                        }
                    }))
                }))).apply(this, arguments)
            }
            var N = n(120415);

            function P(e, t, n, r, o, i, a) {
                try {
                    var u = e[i](a),
                        c = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(c) : Promise.resolve(c).then(r, o)
            }

            function L(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function a(e) {
                            P(i, r, o, a, u, "next", e)
                        }

                        function u(e) {
                            P(i, r, o, a, u, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }
            var C = function(e, t) {
                var n, r, o, i, a = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function u(i) {
                    return function(u) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        a.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        a.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = a.ops.pop();
                                        a.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = a.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            a.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && a.label < o[1]) {
                                            a.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && a.label < o[2]) {
                                            a.label = o[2];
                                            a.ops.push(i);
                                            break
                                        }
                                        o[2] && a.ops.pop();
                                        a.trys.pop();
                                        continue
                                }
                                i = t.call(e, a)
                            } catch (e) {
                                i = [6, e];
                                r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, u])
                    }
                }
            };

            function U() {
                return null != (null === r.Z || void 0 === r.Z ? void 0 : r.Z.spellCheck)
            }

            function M() {
                return (0, N.nI)() && U()
            }
            var D = M() ? function() {
                return A.apply(this, arguments)
            }() : null;

            function w(e) {
                return j.apply(this, arguments)
            }

            function j() {
                return (j = L((function(e) {
                    var t;
                    return C(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, D];
                            case 1:
                                if (null == (t = n.sent())) return [2];
                                t.enabled = e;
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function G(e) {
                return x.apply(this, arguments)
            }

            function x() {
                return (x = L((function(e) {
                    var t;
                    return C(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, D];
                            case 1:
                                if (null == (t = n.sent())) return [2];
                                t.setLearnedWords(e);
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function k(e) {
                return H.apply(this, arguments)
            }

            function H() {
                H = L((function(e) {
                    var t, n, r = arguments;
                    return C(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                t = r.length > 1 && void 0 !== r[1] && r[1];
                                return [4, D];
                            case 1:
                                return null == (n = o.sent()) ? [2, !1] : [2, n.isMisspelled(e, t)]
                        }
                    }))
                }));
                return H.apply(this, arguments)
            }

            function Z(e) {
                return B.apply(this, arguments)
            }

            function B() {
                B = L((function(e) {
                    var t, n, r, o = arguments;
                    return C(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                t = o.length > 1 && void 0 !== o[1] && o[1], n = o.length > 2 && void 0 !== o[2] ? o[2] : 5;
                                return [4, D];
                            case 1:
                                return null == (r = i.sent()) ? [2, []] : [2, r.getCorrectionsForMisspelling(e, t).slice(0, n)]
                        }
                    }))
                }));
                return B.apply(this, arguments)
            }

            function F(e) {
                return V.apply(this, arguments)
            }

            function V() {
                return (V = L((function(e) {
                    var t;
                    return C(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, D];
                            case 1:
                                if (null == (t = n.sent())) return [2];
                                t.replaceMisspelling(e);
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function Y(e) {
                return K.apply(this, arguments)
            }

            function K() {
                return (K = L((function(e) {
                    var t;
                    return C(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, D];
                            case 1:
                                if (null == (t = n.sent())) return [2];
                                t.setAppLocale(e);
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function W(e) {
                if (!U()) return function() {};
                var t = r.Z.spellCheck.on("spellcheck-result", e);
                return null != t ? t : function() {}
            }
        },
        77643: (e, t, n) => {
            "use strict";
            n.d(t, {
                tR: () => f,
                nG: () => _,
                ml: () => E,
                bp: () => O,
                Wc: () => b,
                Ye: () => m
            });
            var r = n(567403),
                o = n(563367),
                i = n(473903),
                a = n(652591),
                u = n(2590),
                c = n(165586),
                l = n(203600),
                s = n(36256),
                p = n(473708);

            function f(e) {
                if (null != e) {
                    var t = e.maxResolution.type === s.uA.SOURCE ? c.LY.RESOLUTION_SOURCE : e.maxResolution.height,
                        n = (0, c.aW)(t);
                    return (0, c.L9)(e.maxFrameRate) !== c.ws.FPS_5 && null == c.ND.find((function(e) {
                        return e.resolution === n && e.fps !== c.ws.FPS_5 && !d(e)
                    }))
                }
            }

            function _(e) {
                if (null != e) {
                    var t = (0, c.L9)(e.maxFrameRate);
                    return null == c.ND.find((function(e) {
                        return e.fps === t && !d(e)
                    }))
                }
            }

            function d(e) {
                return null != e.quality || null != e.guildPremiumTier
            }

            function E(e) {
                return e.type === s.uA.SOURCE ? p.Z.Messages.SCREENSHARE_SOURCE : p.Z.Messages.SCREENSHARE_RESOLUTION_ABBREVIATED.format({
                    resolution: e.height
                })
            }

            function O(e) {
                return p.Z.Messages.SCREENSHARE_FPS_ABBREVIATED.format({
                    fps: e
                })
            }

            function b(e) {
                return null == e.maxResolution || null == e.maxFrameRate ? null : {
                    maxFrameRate: e.maxFrameRate,
                    maxResolution: e.maxResolution
                }
            }

            function m(e, t, n) {
                var s = function(e, t, n) {
                        return c.ND.find((function(r) {
                            return (null == r.preset || r.preset === e) && r.resolution === t && r.fps === n
                        }))
                    }(e, t, n),
                    p = i.default.getCurrentUser(),
                    f = o.Z.getGuildId(),
                    _ = null != f ? r.Z.getGuild(f) : null;
                a.default.track(u.rMx.STREAM_SETTINGS_UPDATE, {
                    user_premium_tier: null == p ? void 0 : p.premiumType,
                    guild_premium_tier: null == _ ? void 0 : _.premiumTier,
                    stream_quality_user_premium_tier: null != (null == s ? void 0 : s.quality) ? l.bg[s.quality] : null,
                    stream_quality_guild_premium_tier: null == s ? void 0 : s.guildPremiumTier,
                    stream_quality_preset: e,
                    stream_quality_resolution: t,
                    stream_quality_frame_rate: n
                })
            }
        },
        162383: (e, t, n) => {
            "use strict";
            n.d(t, {
                j: () => p
            });
            var r = n(496486),
                o = n.n(r),
                i = n(602351),
                a = n(120415);

            function u(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }
            var c = "default",
                l = c;

            function s() {
                null != window.navigator.mediaDevices && window.navigator.mediaDevices.enumerateDevices().then((function(e) {
                    var t = i.Z.getOutputDevices(),
                        n = o()(t).sortBy((function(e) {
                            return e.index
                        })).findIndex((function(e) {
                            return e.id === i.Z.getOutputDeviceId()
                        })),
                        r = t[i.Z.getOutputDeviceId()],
                        a = e.filter((function(e) {
                            return "audiooutput" === e.kind && "communications" !== e.deviceId
                        })),
                        u = a[n];
                    null == r || null != u && u.label === r.name || (u = a.find((function(e) {
                        return e.label === r.name
                    })));
                    l = null != u ? u.deviceId : c
                })).catch((function() {
                    l = c
                }))
            }
            if (a.FB) {
                i.Z.addChangeListener(s);
                s()
            }
            var p = function() {
                function e(t, n, r) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e);
                    this.name = t;
                    this._volume = r
                }
                var t = e.prototype;
                t.loop = function() {
                    this._ensureAudio().then((function(e) {
                        e.loop = !0;
                        e.play()
                    }))
                };
                t.play = function() {
                    this._ensureAudio().then((function(e) {
                        e.loop = !1;
                        e.play()
                    }))
                };
                t.pause = function() {
                    null != this._audio && this._audio.then((function(e) {
                        return e.pause()
                    }))
                };
                t.stop = function() {
                    this._destroyAudio()
                };
                t.playWithListener = function() {
                    var e = this;
                    return new Promise((function(t, n) {
                        e._ensureAudio().then((function(e) {
                            null != e.duration && 0 !== e.duration || n("sound has no duration");
                            e.play();
                            setTimeout((function() {
                                t(!0)
                            }), e.duration)
                        }))
                    }))
                };
                t._destroyAudio = function() {
                    if (null != this._audio) {
                        this._audio.then((function(e) {
                            e.pause();
                            e.src = ""
                        }));
                        this._audio = null
                    }
                };
                t._ensureAudio = function() {
                    var e, t = this;
                    this._audio = null !== (e = this._audio) && void 0 !== e ? e : new Promise((function(e, r) {
                        var o = new Audio;
                        o.src = n(614443)("./".concat(t.name, ".mp3"));
                        o.onloadeddata = function() {
                            o.volume = Math.min(i.Z.getOutputVolume() / 100 * t._volume, 1);
                            a.FB && o.setSinkId(l);
                            e(o)
                        };
                        o.onerror = function() {
                            return r(new Error("could not play audio"))
                        };
                        o.onended = function() {
                            return t._destroyAudio()
                        };
                        o.load()
                    }));
                    return this._audio
                };
                ! function(e, t, n) {
                    t && u(e.prototype, t);
                    n && u(e, n)
                }(e, [{
                    key: "volume",
                    get: function() {
                        return this._volume
                    },
                    set: function(e) {
                        this._volume = e;
                        this._ensureAudio().then((function(t) {
                            return t.volume = e
                        }))
                    }
                }]);
                return e
            }()
        },
        180735: (e, t, n) => {
            "use strict";
            n.d(t, {
                h: () => r
            });
            var r;
            ! function(e) {
                e[e.USER = 100] = "USER";
                e[e.STREAM = 18] = "STREAM"
            }(r || (r = {}))
        },
        989824: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => i
            });
            var r = n(667294),
                o = {};

            function i(e) {
                var t = (0, r.useRef)(o);
                t.current === o && (t.current = e());
                return t.current
            }
        },
        614443: (e, t, n) => {
            var r = {
                "./activities-rocket-time.mp3": 232369,
                "./activity_end.mp3": 125346,
                "./activity_launch.mp3": 468391,
                "./activity_user_join.mp3": 442466,
                "./activity_user_left.mp3": 107906,
                "./call_calling.mp3": 459735,
                "./call_ringing.mp3": 282884,
                "./call_ringing_beat.mp3": 621136,
                "./call_ringing_halloween.mp3": 236162,
                "./clip_error.mp3": 329450,
                "./clip_save.mp3": 10094,
                "./ddr-down.mp3": 180376,
                "./ddr-left.mp3": 81413,
                "./ddr-right.mp3": 843851,
                "./ddr-up.mp3": 190931,
                "./deafen.mp3": 296568,
                "./detune_call_calling.mp3": 717578,
                "./detune_call_ringing.mp3": 667540,
                "./detune_deafen.mp3": 599855,
                "./detune_discodo.mp3": 403549,
                "./detune_disconnect.mp3": 655109,
                "./detune_message1.mp3": 40335,
                "./detune_mute.mp3": 966306,
                "./detune_ptt_start.mp3": 720586,
                "./detune_ptt_stop.mp3": 982418,
                "./detune_stream_ended.mp3": 298093,
                "./detune_stream_started.mp3": 49319,
                "./detune_stream_user_joined.mp3": 181103,
                "./detune_stream_user_left.mp3": 337381,
                "./detune_undeafen.mp3": 194198,
                "./detune_unmute.mp3": 242898,
                "./detune_user_join.mp3": 437052,
                "./detune_user_leave.mp3": 57232,
                "./detune_user_moved.mp3": 901105,
                "./discodo.mp3": 751007,
                "./disconnect.mp3": 279686,
                "./highfive_clap.mp3": 707580,
                "./highfive_whistle.mp3": 986105,
                "./human_man.mp3": 47317,
                "./mention1.mp3": 860392,
                "./mention2.mp3": 766485,
                "./mention3.mp3": 476670,
                "./message1.mp3": 423796,
                "./message2.mp3": 663,
                "./message3.mp3": 361222,
                "./mute.mp3": 752990,
                "./overlayunlock.mp3": 510323,
                "./poggermode_achievement_unlock.mp3": 465635,
                "./poggermode_applause.mp3": 893151,
                "./poggermode_enabled.mp3": 245984,
                "./poggermode_message_send.mp3": 800987,
                "./ptt_start.mp3": 853866,
                "./ptt_stop.mp3": 122540,
                "./reconnect.mp3": 332961,
                "./robot_man.mp3": 816559,
                "./stage_waiting.mp3": 429586,
                "./stream_ended.mp3": 286944,
                "./stream_started.mp3": 980679,
                "./stream_user_joined.mp3": 302354,
                "./stream_user_left.mp3": 13543,
                "./success.mp3": 214578,
                "./undeafen.mp3": 494615,
                "./unmute.mp3": 499045,
                "./user_join.mp3": 835579,
                "./user_leave.mp3": 236660,
                "./user_moved.mp3": 901897
            };

            function o(e) {
                var t = i(e);
                return n(t)
            }

            function i(e) {
                if (!n.o(r, e)) {
                    var t = new Error("Cannot find module '" + e + "'");
                    t.code = "MODULE_NOT_FOUND";
                    throw t
                }
                return r[e]
            }
            o.keys = function() {
                return Object.keys(r)
            };
            o.resolve = i;
            e.exports = o;
            o.id = 614443
        }
    }
]);