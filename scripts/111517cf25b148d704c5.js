"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [41446], {
        884626: (e, t, n) => {
            n.r(t);
            n.d(t, {
                default: () => m
            });
            var r = n(785893),
                o = (n(667294), n(441143)),
                a = n.n(o),
                i = n(318715),
                c = n(456259),
                u = n(341305),
                s = n(908741),
                l = n(472009),
                f = n(61209),
                d = n(284610),
                p = n(588743);

            function m(e) {
                var t = e.windowKey,
                    n = e.channelId,
                    o = (0, i.ZP)([f.Z], (function() {
                        return f.Z.getChannel(n)
                    }));
                a()(null != o, "channel cannot be null for popout");
                return (0, r.jsx)(l.Z, {
                    withTitleBar: !0,
                    windowKey: t,
                    title: o.name,
                    channelId: o.id,
                    children: (0, r.jsxs)(s.Z.Provider, {
                        value: o.guild_id,
                        children: [(0, r.jsx)(u.Z, {
                            channel: o,
                            draftType: d.d.ChannelMessage
                        }), (0, r.jsx)(p.Z, {
                            channel: o
                        }), (0, r.jsx)(c.Z, {
                            showInPopoutWindow: !0
                        })]
                    })
                })
            }
        },
        344533: (e, t, n) => {
            n.r(t);
            n.d(t, {
                default: () => ot
            });
            var r = n(785893),
                o = n(667294),
                a = n(472009),
                i = n(496486),
                c = n.n(i),
                u = n(202351),
                s = n(304548),
                l = n(797364),
                f = n(19292),
                d = n(888312),
                p = n(64234),
                m = n(61209),
                y = n(21372),
                h = n(563367),
                v = n(727785),
                b = n(473903),
                g = n(107364),
                R = n(749565),
                S = n(294184),
                P = n.n(S),
                E = n(587683),
                j = n(964517),
                D = n(225253),
                x = n(206982),
                C = n.n(x),
                O = n(928733),
                T = n(795308),
                _ = n(856236),
                Z = n(175935),
                w = n.n(Z);

            function F(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function N(e) {
                N = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return N(e)
            }

            function I(e, t) {
                return !t || "object" !== A(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function B(e, t) {
                B = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return B(e, t)
            }
            var A = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function k(e) {
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
                    var n, r = N(e);
                    if (t) {
                        var o = N(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return I(this, n)
                }
            }
            var L = ["firCount", "nackCount"],
                U = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && B(e, t)
                    }(n, e);
                    var t = k(n);

                    function n() {
                        F(this, n);
                        return t.apply(this, arguments)
                    }
                    var o = n.prototype;
                    o.renderValueIcon = function() {
                        var e = this.props.label;
                        return L.includes(e) ? (0, r.jsx)(_.Z, {
                            color: T.Z.unsafe_rawColors.YELLOW_300.css,
                            className: w().valueIcon
                        }) : null
                    };
                    o.render = function() {
                        var e = this.props,
                            t = e.children,
                            n = e.className,
                            o = e.valueRendered,
                            a = e.section,
                            i = e.label,
                            c = e.renderGraph;
                        return (0, r.jsxs)(g.Z, {
                            className: P()(w().item, n),
                            direction: g.Z.Direction.VERTICAL,
                            basis: "50%",
                            children: [(0, r.jsxs)(g.Z, {
                                className: w().kvContainer,
                                align: g.Z.Align.START,
                                children: [(0, r.jsx)(g.Z.Child, {
                                    children: (0, r.jsx)(s.H, {
                                        className: w().title,
                                        children: t
                                    })
                                }), Array.isArray(o) ? (0, r.jsx)(g.Z.Child, {
                                    grow: 1,
                                    children: o
                                }) : (0, r.jsxs)(g.Z.Child, {
                                    grow: 0,
                                    shrink: 0,
                                    children: [this.renderValueIcon(), (0, r.jsx)("span", {
                                        className: w().itemValue,
                                        title: o,
                                        children: o
                                    })]
                                })]
                            }), null !== c && (0, r.jsx)(g.Z.Child, {
                                className: w().graph,
                                children: (0, r.jsx)(s.FormText, {
                                    type: s.FormTextTypes.DESCRIPTION,
                                    children: c
                                })
                            }, null != a ? "".concat(a, "-").concat(i) : i), (0, r.jsx)(s.FormDivider, {
                                className: w().divider
                            })]
                        })
                    };
                    return n
                }(o.PureComponent);

            function M(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function G(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, a = [],
                            i = !0,
                            c = !1;
                        try {
                            for (n = n.call(e); !(i = (r = n.next()).done); i = !0) {
                                a.push(r.value);
                                if (t && a.length === t) break
                            }
                        } catch (e) {
                            c = !0;
                            o = e
                        } finally {
                            try {
                                i || null == n.return || n.return()
                            } finally {
                                if (c) throw o
                            }
                        }
                        return a
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return M(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return M(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var H = {
                accelerateRate: "Accelerate Rate",
                audioDetected: "Audio Detected",
                audioLevel: "Audio Level",
                availableOutgoingBitrate: "Available Outgoing Bitrate",
                averageDecodeTime: "Average Decode Time",
                averageEncodeTime: "Average Encode Time",
                bandwidthLimitedResolution: "Bandwidth Limited Resolution",
                bitrate: "Bitrate",
                bitrateTarget: "Bitrate (Target)",
                bytesReceived: "Bytes Received",
                bytesSent: "Bytes Sent",
                capturedFramesCount: "Captured Frames per Second",
                capturedFramesDropped: "Captured Frames Dropped",
                capturedFramesMean: "Captured Frames Mean (ms)",
                capturedFramesStdev: "Captured Frames Standard Deviation (ms)",
                codec: "Codec",
                cpuLimitedResolution: "CPU Limited Resolution",
                currentDelay: "Current Delay",
                decoderImplementationName: "Decoder",
                decodingCNG: "Decoding CNG",
                decodingMutedOutput: "Decoding Muted Output",
                decodingNormal: "Decoding Normal",
                decodingPLC: "Decoding PLC",
                decodingPLCCNG: "Decoding PLC CNG",
                decryptionFailures: "Decryption Failures",
                delayEstimate: "Delay Estimate",
                encoderImplementationName: "Encoder",
                encoderQualityPsnr: "Encoder PSNR (dB)",
                encoderQualityVmaf: "Encoder VMAF",
                encodeUsage: "Encode Usage",
                expandRate: "Expand Rate",
                filter: "Filter",
                firCount: "FIR",
                fractionLost: "Packet Loss",
                frameRateDecode: "Frame Rate (Decode)",
                frameRateEncode: "Frame Rate (Encode)",
                frameRateInput: "Frame Rate (Input)",
                frameRateNetwork: "Frame Rate (Network)",
                frameRateRender: "Frame Rate (Render)",
                framesDecoded: "Frames Decoded",
                framesDropped: "Frames Dropped",
                framesEncoded: "Frames Encoded",
                framesReceived: "Frames Received",
                framesSent: "Frames Sent",
                freezeCount: "Freeze Count",
                hostname: "Hostname",
                hybridDxgiFrames: "Hybrid DXGI Frames",
                hybridGdiFrames: "Hybrid GDI Frames",
                hybridVideohookFrames: "Hybrid Videohook Frames",
                hybridGraphicsCaptureFrames: "Hybrid Graphics Capture Frames",
                inboundBitrateEstimate: "Inbound Bitrate Estimate",
                jitter: "Jitter",
                jitterBuffer: "Jitter Buffer",
                jitterBufferPreferred: "Jitter Buffer (Preferred)",
                keyFrameInterval: "Key Frame Interval",
                keyFramesDecoded: "Key Frames Decoded",
                keyFramesEncoded: "Key Frames Encoded",
                localAddress: "Local Address",
                minPlayoutDelay: "Minimum Playout Delay",
                nackCount: "NACK",
                networkFramesDropped: "Frames Dropped By Network",
                opAccelerate: "Accelerated Frames",
                opCNG: "CNG Frames",
                opExpand: "Expand Frames",
                opMerge: "Merge Frames",
                opNormal: "Normal Frames",
                opPreemptiveExpand: "Preemptive Expand Frames",
                opSilence: "Silent Frames",
                outboundBitrateEstimate: "Outbound Bitrate Estimate",
                pacerDelay: "Pacer Delay",
                packetsLost: "Packets Lost",
                packetsReceived: "Packets Received",
                packetsSent: "Packets Sent",
                pauseCount: "Pause Count",
                ping: "Ping",
                pliCount: "PLI",
                preemptiveExpandRate: "Pre-emptive Expand Rate",
                qpSum: "QP Sum",
                quartzFrames: "Quartz Frames",
                receiverBitrateEstimate: "Receiver Bitrate Estimate (REMB)",
                relativePlayoutDelay: "Relative Playout Delay",
                relativeReceptionDelay: "Relative Reception Delay",
                renderDelay: "Render Delay",
                resolution: "Resolution",
                routingFailures: "Routing Failures",
                screenshareFrames: "WebRTC Frames",
                secondaryDecodedRate: "Secondary Decode Rate",
                sinkWant: "Sink Quality Level (Remote)",
                sinkWantLocal: "Sink Quality Level (Local)",
                speechExpandRate: "Speech Expand Rate",
                ssrc: "SSRC",
                sumOfSquaredFramesDurations: "Sum of Squared Frames Duration (ms?)",
                targetDelay: "Target Delay",
                totalFramesDuration: "Frames Duration (ms)",
                totalFreezesDuration: "Freezes Duration (ms)",
                totalPausesDuration: "Pauses Duration (ms)",
                videohookBackend: "Videohook Backend",
                videohookFrames: "Videohook Frames"
            };

            function V(e) {
                return "".concat((e / 1e3).toFixed(2), " Kbps")
            }

            function J(e) {
                return C().filesize(e)
            }

            function z(e) {
                return e
            }

            function K(e) {
                return "".concat(e, " ms")
            }

            function Q(e) {
                return "".concat(e.toFixed(0), "%")
            }

            function W(e) {
                return e ? "Yes" : "No"
            }

            function Y(e) {
                return "".concat(Math.max(e, 0).toFixed(2), " dB")
            }

            function $(e) {
                var t = e.last;
                return "".concat(t, " ms")
            }
            var q = {
                    availableOutgoingBitrate: !0,
                    bitrate: !0,
                    bitrateTarget: !0,
                    bytesReceived: !0,
                    bytesSent: !0,
                    encoderQualityPsnr: !0,
                    encoderQualityVmaf: !0,
                    encodeUsage: !0,
                    frameRateDecode: !0,
                    frameRateEncode: !0,
                    frameRateInput: !0,
                    frameRateNetwork: !0,
                    frameRateRender: !0,
                    inboundBitrateEstimate: !0,
                    packetsLost: !0,
                    packetsReceived: !0,
                    packetsSent: !0,
                    ping: !0
                },
                X = {
                    audioJitterBuffer: !0,
                    audioJitterDelay: !0,
                    audioJitterTarget: !0,
                    audioPlayoutUnderruns: !0,
                    fractionLost: !0,
                    framesCaptured: !0,
                    framesRendered: !0,
                    noiseCancellerProcessTime: !0,
                    timestamp: !0,
                    type: !0,
                    videoJitterBuffer: !0,
                    videoJitterDelay: !0,
                    videoJitterTarget: !0,
                    voiceActivityDetectorProcessTime: !0
                },
                ee = {
                    accelerateRate: Q,
                    audioDetected: W,
                    audioLevel: Y,
                    availableOutgoingBitrate: V,
                    averageDecodeTime: K,
                    averageEncodeTime: K,
                    bandwidthLimitedResolution: W,
                    bitrate: V,
                    bitrateTarget: V,
                    bytesReceived: J,
                    bytesSent: J,
                    codec: function(e) {
                        var t = e.id,
                            n = e.name;
                        return "".concat((n = null != (n = "" === n ? "unknown" : n) ? n : "unknown")[0].toUpperCase()).concat(n.slice(1), " (").concat(t, ")")
                    },
                    cpuLimitedResolution: W,
                    currentDelay: K,
                    decoderImplementationName: z,
                    delayEstimate: K,
                    encoderImplementationName: z,
                    encoderQualityPsnr: Y,
                    encoderQualityVmaf: function(e) {
                        return "".concat(e.toFixed(2))
                    },
                    encodeUsage: Q,
                    expandRate: Q,
                    filter: z,
                    fractionLost: Q,
                    inboundBitrateEstimate: V,
                    jitter: K,
                    jitterBuffer: K,
                    jitterBufferPreferred: K,
                    keyFrameInterval: K,
                    minPlayoutDelay: K,
                    outboundBitrateEstimate: V,
                    pacerDelay: K,
                    ping: K,
                    preemptiveExpandRate: Q,
                    receiverBitrateEstimate: V,
                    relativePlayoutDelay: $,
                    relativeReceptionDelay: $,
                    renderDelay: K,
                    resolution: function(e) {
                        var t = e.width,
                            n = e.height;
                        return "".concat(t, "x").concat(n)
                    },
                    secondaryDecodedRate: Q,
                    speechExpandRate: Q,
                    targetDelay: K,
                    videohookBackend: function(e) {
                        var t = ["N/A", "Direct3D 9", "Direct3D 10", "Direct3D 11", "Direct3D 12", "OpenGL", "Vulkan"];
                        return e < t.length ? t[e] : "Unknown"
                    }
                },
                te = function(e) {
                    return e
                },
                ne = function(e) {
                    var t = G(o.useState([]), 1)[0];
                    t.push({
                        value: e.value,
                        time: Date.now()
                    });
                    t.length > 600 && t.shift();
                    return (0, r.jsx)(O.Z, {
                        dataPoints: t,
                        width: e.width,
                        height: e.height
                    })
                };

            function re(e) {
                var t, n, o = e.label,
                    a = e.value,
                    i = e.section,
                    c = null !== (t = ee[o]) && void 0 !== t ? t : te,
                    u = q[o] && function(e) {
                        return Array.isArray(e) && e.length > 0 && "number" == typeof e[0] ? (0, r.jsx)(O.Z, {
                            dataPoints: e,
                            width: 300,
                            height: 100
                        }) : "number" == typeof e ? (0, r.jsx)(ne, {
                            value: e,
                            width: 300,
                            height: 100
                        }) : void 0
                    }(a);
                return (0, r.jsx)(U, {
                    label: o,
                    valueRendered: c(a),
                    section: i,
                    renderGraph: u,
                    children: null !== (n = H[o]) && void 0 !== n ? n : o
                })
            }
            var oe = n(380203),
                ae = n.n(oe);

            function ie(e) {
                var t = [],
                    n = 0;
                e.length % 2 != 0 && e.push((0, r.jsx)(g.Z, {
                    basis: "50%",
                    grow: 0
                }, n++));
                for (; e.length > 0;) t.push((0, r.jsx)(g.Z, {
                    basis: "50%",
                    grow: 0,
                    children: e.splice(0, 2)
                }, n++));
                return t
            }

            function ce(e, t, n, o) {
                var a = o.get(t, n, e.ssrc);
                return null != a ? (0, r.jsx)("div", {
                    className: P()(w().videoWrapper, ae().marginBottom40),
                    children: (0, r.jsx)(D.Z, {
                        streamId: a,
                        videoComponent: j.Z.getMediaEngine().Video,
                        paused: !1,
                        videoSpinnerContext: E.m.REPLAY_VIDEO_STREAM,
                        userId: n
                    })
                }) : null
            }
            var ue = {
                ssrc: 1,
                codec: 2
            };

            function se(e, t, n, o) {
                return e.map((function(e) {
                    var a = [],
                        i = !0,
                        c = !1,
                        u = void 0;
                    try {
                        for (var l, f = function(e) {
                                return Object.keys(e).sort((function(e, t) {
                                    var n = ue[e],
                                        r = ue[t];
                                    return n !== r ? void 0 === n ? 1 : void 0 === r ? -1 : n - r : q[e] !== q[t] ? q[e] ? 1 : -1 : e > t ? 1 : -1
                                }))
                            }(e)[Symbol.iterator](); !(i = (l = f.next()).done); i = !0) {
                            var d = l.value,
                                p = e[d];
                            X[d] || void 0 === p || a.push((0, r.jsx)(re, {
                                section: n,
                                label: d,
                                value: p
                            }, d))
                        }
                    } catch (e) {
                        c = !0;
                        u = e
                    } finally {
                        try {
                            i || null == f.return || f.return()
                        } finally {
                            if (c) throw u
                        }
                    }
                    return (0, r.jsxs)(s.FormSection, {
                        className: ae().marginBottom40,
                        title: e.type,
                        titleClassName: w().sectionHeader,
                        children: ["video" === e.type && null != t && null != n && null != o && ce(e, t, n, o), ie(a)]
                    }, "".concat(e.type, " + ").concat(e.ssrc))
                }))
            }
            var le = n(473708);

            function fe(e) {
                var t = e.camera;
                if (null == t) return (0, r.jsx)(s.Spinner, {
                    type: s.Spinner.Type.SPINNING_CIRCLE
                });
                var n = c().map(t, (function(e, t) {
                    if (!X[t] && void 0 !== e) return (0, r.jsx)(re, {
                        label: t,
                        value: e
                    }, t)
                }));
                return (0, r.jsx)(s.FormSection, {
                    tag: s.FormTitleTags.H2,
                    title: le.Z.Messages.RTC_DEBUG_CAMERA,
                    children: ie(n)
                })
            }

            function de(e) {
                var t = e.clips;
                if (null == t) return (0, r.jsx)(s.Spinner, {
                    type: s.Spinner.Type.SPINNING_CIRCLE
                });
                var n = c().map(t, (function(e, t) {
                    if (void 0 !== e) return (0, r.jsx)(re, {
                        label: t,
                        value: e
                    }, t)
                }));
                n.push((0, r.jsx)(re, {
                    label: "Frames Per Second",
                    value: t.recentEncodedFrames / (t.recentDurationMs / 1e3)
                }, "framerate"));
                return (0, r.jsx)(s.FormSection, {
                    tag: s.FormTitleTags.H2,
                    title: le.Z.Messages.RTC_DEBUG_CLIPS,
                    children: ie(n)
                })
            }

            function pe(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function me(e) {
                me = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return me(e)
            }

            function ye(e, t) {
                return !t || "object" !== ve(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function he(e, t) {
                he = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return he(e, t)
            }
            var ve = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function be(e) {
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
                    var n, r = me(e);
                    if (t) {
                        var o = me(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return ye(this, n)
                }
            }
            var ge = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && he(e, t)
                }(n, e);
                var t = be(n);

                function n() {
                    pe(this, n);
                    return t.apply(this, arguments)
                }
                n.prototype.render = function() {
                    var e = this.props,
                        t = e.streams,
                        n = e.userId,
                        o = e.mediaEngineConnectionId,
                        a = e.videoStreams;
                    if (null == n || null == t || 0 === t.length) return (0, r.jsx)(s.Spinner, {
                        type: s.Spinner.Type.SPINNING_CIRCLE
                    });
                    var i = h.Z.getGuildId(),
                        c = b.default.getUser(n),
                        u = y.ZP.getNick(i, n),
                        l = null == c ? le.Z.Messages.RTC_DEBUG_RTP_INBOUND : "".concat(le.Z.Messages.RTC_DEBUG_RTP_INBOUND, " — ").concat(null != u ? u : R.ZP.getName(c));
                    return (0, r.jsx)(s.FormSection, {
                        tag: s.FormTitleTags.H2,
                        title: l,
                        children: se(t, o, n, a)
                    })
                };
                return n
            }(o.PureComponent);
            const Re = u.ZP.connectStores([v.ZP], (function(e) {
                var t = e.context,
                    n = e.index,
                    r = e.videoStreams,
                    o = v.ZP.getAllStats(t)[n],
                    a = (0, v.fZ)(v.ZP.getSection()).section;
                if (null == a) throw new Error("Unrecognized section format");
                var i = null;
                if (null != o && null != o.rtp.inbound) {
                    var c;
                    i = null !== (c = o.rtp.inbound[a]) && void 0 !== c ? c : []
                }
                return {
                    mediaEngineConnectionId: null == o ? void 0 : o.mediaEngineConnectionId,
                    userId: a,
                    streams: i,
                    videoStreams: r
                }
            }))(ge);

            function Se(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function Pe(e) {
                Pe = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return Pe(e)
            }

            function Ee(e, t) {
                return !t || "object" !== De(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function je(e, t) {
                je = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return je(e, t)
            }
            var De = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function xe(e) {
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
                    var n, r = Pe(e);
                    if (t) {
                        var o = Pe(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return Ee(this, n)
                }
            }
            var Ce = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && je(e, t)
                }(n, e);
                var t = xe(n);

                function n() {
                    Se(this, n);
                    return t.apply(this, arguments)
                }
                n.prototype.render = function() {
                    var e = this.props.outbound;
                    return null == e ? (0, r.jsx)(s.Spinner, {
                        type: s.Spinner.Type.SPINNING_CIRCLE
                    }) : (0, r.jsx)(s.FormSection, {
                        tag: s.FormTitleTags.H2,
                        title: le.Z.Messages.RTC_DEBUG_RTP_OUTBOUND,
                        children: se(e)
                    })
                };
                return n
            }(o.PureComponent);
            const Oe = u.ZP.connectStores([v.ZP], (function(e) {
                var t = e.context,
                    n = e.index,
                    r = v.ZP.getAllStats(t)[n];
                return {
                    outbound: null != r ? r.rtp.outbound : null
                }
            }))(Ce);

            function Te(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function _e(e) {
                _e = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return _e(e)
            }

            function Ze(e, t) {
                return !t || "object" !== Fe(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function we(e, t) {
                we = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return we(e, t)
            }
            var Fe = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function Ne(e) {
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
                    var n, r = _e(e);
                    if (t) {
                        var o = _e(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return Ze(this, n)
                }
            }
            const Ie = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && we(e, t)
                }(n, e);
                var t = Ne(n);

                function n() {
                    Te(this, n);
                    return t.apply(this, arguments)
                }
                n.prototype.render = function() {
                    var e = this.props.screenshare;
                    if (null == e) return (0, r.jsx)(s.Spinner, {
                        type: s.Spinner.Type.SPINNING_CIRCLE
                    });
                    var t = c().map(e, (function(e, t) {
                        if (!X[t] && void 0 !== e) return (0, r.jsx)(re, {
                            label: t,
                            value: e
                        }, t)
                    }));
                    return (0, r.jsx)(s.FormSection, {
                        tag: s.FormTitleTags.H2,
                        title: le.Z.Messages.RTC_DEBUG_SCREENSHARE,
                        children: ie(t)
                    })
                };
                return n
            }(o.PureComponent);
            var Be = n(464187),
                Ae = n(69660),
                ke = n(793461),
                Le = n(773148),
                Ue = n(2255),
                Me = n(36256);

            function Ge(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function He(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function Ve(e) {
                Ve = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return Ve(e)
            }

            function Je(e, t) {
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

            function ze(e, t) {
                return !t || "object" !== Qe(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function Ke(e, t) {
                Ke = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return Ke(e, t)
            }
            var Qe = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function We(e) {
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
                    var n, r = Ve(e);
                    if (t) {
                        var o = Ve(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return ze(this, n)
                }
            }
            var Ye = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && Ke(e, t)
                }(n, e);
                var t = We(n);

                function n() {
                    Ge(this, n);
                    return t.apply(this, arguments)
                }
                n.prototype.render = function() {
                    var e = this.props,
                        t = e.transport,
                        n = e.mediaSessionId,
                        o = e.hidePersonalInformation,
                        a = e.hostname;
                    if (null == t) return (0, r.jsx)(s.Spinner, {
                        type: s.Spinner.Type.SPINNING_CIRCLE
                    });
                    var i = Je(function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                                }))));
                                r.forEach((function(t) {
                                    He(e, t, n[t])
                                }))
                            }
                            return e
                        }({}, t), {
                            hostname: a
                        }),
                        u = c().map(i, (function(e, t) {
                            if ("receiverReports" !== t && (!o || "localAddress" !== t)) return (0, r.jsx)(re, {
                                label: t,
                                value: e
                            }, t)
                        })),
                        l = c().map(i.receiverReports, (function(e) {
                            var t = (0, r.jsxs)(g.Z, {
                                    id: "bitrate-".concat(e.id),
                                    justify: g.Z.Justify.BETWEEN,
                                    children: [(0, r.jsx)("span", {
                                        children: "Bitrate:"
                                    }), (0, r.jsxs)("span", {
                                        children: [(e.bitrate / 1e3).toFixed(2), " Kbps"]
                                    })]
                                }),
                                n = (0, r.jsxs)(g.Z, {
                                    id: "lost-".concat(e.id),
                                    justify: g.Z.Justify.BETWEEN,
                                    children: [(0, r.jsx)("span", {
                                        children: "Packet Loss:"
                                    }), (0, r.jsxs)("span", {
                                        children: [(100 * e.fractionLost / 256).toFixed(0), "%"]
                                    })]
                                }),
                                o = b.default.getUser(e.id),
                                a = Le.ZP.getNickname(Be.Z.getGuildId(), void 0, o);
                            null == a && (a = null != o ? o.username : e.id);
                            return (0, r.jsx)(U, {
                                label: e.id,
                                valueRendered: [t, n],
                                children: a
                            }, e.id)
                        }));
                    return (0, r.jsxs)(s.FormSection, {
                        tag: s.FormTitleTags.H2,
                        title: le.Z.Messages.RTC_DEBUG_TRANSPORT + (null != n ? " - " + n : ""),
                        className: w().allowSelection,
                        children: [ie(u), 0 === l.length ? null : (0, r.jsx)(s.FormDivider, {
                            className: ae().marginBottom20
                        }), ie(l)]
                    })
                };
                return n
            }(o.PureComponent);
            const $e = u.ZP.connectStores([v.ZP, h.Z, ke.Z, Ae.Z], (function(e) {
                var t = e.context,
                    n = e.index,
                    r = v.ZP.getAllStats(t)[n],
                    o = t === Me.Yn.STREAM ? Ae.Z.getHostname(Ae.Z.getActiveStreamKey()) : h.Z.getHostname();
                return {
                    hidePersonalInformation: ke.Z.hidePersonalInformation,
                    transport: null != r ? r.transport : null,
                    mediaSessionId: h.Z.getMediaSessionId(),
                    hostname: Ue.Z.getShortHostname(o)
                }
            }))(Ye);
            var qe = n(2590);

            function Xe(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function et(e) {
                return function(e) {
                    if (Array.isArray(e)) return Xe(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return Xe(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Xe(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var tt = function(e, t, n) {
                return (0, r.jsx)(g.Z, {
                    align: g.Z.Align.CENTER,
                    children: (0, r.jsx)(g.Z.Child, {
                        children: (0, r.jsxs)(g.Z, {
                            align: g.Z.Align.CENTER,
                            children: [(0, r.jsx)(s.Avatar, {
                                size: s.AvatarSizes.SIZE_24,
                                src: e.getAvatarURL(n, 24),
                                "aria-label": e.username,
                                className: w().avatar
                            }), (0, r.jsx)("span", {
                                className: w().username,
                                children: null != t ? t : R.ZP.getName(e)
                            })]
                        })
                    })
                })
            };

            function nt(e, t, n, o, a) {
                var i = [];
                if (null == t) return i;
                var u = t.transport,
                    s = t.rtp,
                    f = s.inbound,
                    p = s.outbound,
                    m = t.camera;
                i.push({
                    section: d.ID.HEADER,
                    label: le.Z.Messages.RTC_DEBUG_CONTEXT.format({
                        context: e
                    })
                });
                null != u && i.push({
                    section: (0, v.J$)(e, qe._s_.TRANSPORT, n),
                    label: le.Z.Messages.RTC_DEBUG_TRANSPORT,
                    element: $e,
                    elementProps: {
                        context: e,
                        index: n
                    }
                });
                null != p && i.push({
                    section: (0, v.J$)(e, qe._s_.OUTBOUND, n),
                    label: le.Z.Messages.RTC_DEBUG_RTP_OUTBOUND,
                    element: Oe,
                    elementProps: {
                        context: e,
                        index: n
                    }
                });
                null != m && i.push({
                    section: (0, v.J$)(e, qe._s_.CAMERA, n),
                    label: le.Z.Messages.RTC_DEBUG_CAMERA,
                    element: fe,
                    elementProps: {
                        context: e,
                        index: n,
                        camera: m
                    }
                });
                if (null != f && !c().isEmpty(f)) {
                    i.push({
                        section: d.ID.HEADER,
                        label: le.Z.Messages.RTC_DEBUG_RTP_INBOUND
                    });
                    Object.keys(f).forEach((function(t) {
                        var c, u = b.default.getUser(t),
                            s = y.ZP.getNick(a, t),
                            f = (0, v.J$)(e, t, n);
                        i.push({
                            section: f,
                            label: null != u ? tt(u, s, a) : (c = null != s ? s : t, (0, r.jsx)(g.Z, {
                                align: g.Z.Align.CENTER,
                                children: (0, r.jsx)(g.Z.Child, {
                                    children: (0, r.jsx)(g.Z, {
                                        align: g.Z.Align.CENTER,
                                        children: (0, r.jsx)("span", {
                                            className: w().username,
                                            children: c
                                        })
                                    })
                                })
                            })),
                            ariaLabel: null != u ? u.tag : t,
                            onClick: function() {
                                l.zc(f)
                            },
                            element: Re,
                            elementProps: {
                                context: e,
                                index: n,
                                videoStreams: o
                            }
                        })
                    }))
                }
                return i
            }

            function rt() {
                var e, t, n = (0, u.e7)([v.ZP], (function() {
                        return {
                            defaultStats: v.ZP.getAllStats(Me.Yn.DEFAULT),
                            streamStats: v.ZP.getAllStats(Me.Yn.STREAM)
                        }
                    }), [], u.pF),
                    a = n.defaultStats,
                    i = n.streamStats,
                    c = (0, u.e7)([h.Z, m.Z], (function() {
                        return m.Z.getChannel(h.Z.getChannelId())
                    })),
                    y = null === (e = a.concat(i).find((function(e) {
                        return null != e.screenshare
                    }))) || void 0 === e ? void 0 : e.screenshare,
                    b = null === (t = i.find((function(e) {
                        return null != e.clips
                    }))) || void 0 === t ? void 0 : t.clips,
                    g = (0, u.e7)([p.Z], (function() {
                        return p.Z.theme
                    })),
                    R = (0, u.e7)([p.Z], (function() {
                        return p.Z.darkSidebar ? qe.BRd.DARK : void 0
                    })),
                    S = (0, u.e7)([v.ZP], (function() {
                        return v.ZP.getSection()
                    })),
                    P = function(e) {
                        var t = e.defaultStats,
                            n = e.streamStats,
                            o = e.videoStreams,
                            a = e.screenshare,
                            i = e.clips,
                            c = e.channel,
                            u = t.flatMap((function(e, t) {
                                return nt(Me.Yn.DEFAULT, e, t, o, null == c ? void 0 : c.getGuildId())
                            })),
                            l = n.flatMap((function(e, t) {
                                return nt(Me.Yn.STREAM, e, t, o, null == c ? void 0 : c.getGuildId())
                            })),
                            f = [],
                            p = [],
                            m = {
                                section: d.ID.DIVIDER
                            };
                        if (null != a) {
                            f.push(m);
                            f.push({
                                section: qe._s_.SCREENSHARE,
                                label: le.Z.Messages.RTC_DEBUG_SCREENSHARE,
                                element: Ie,
                                elementProps: {
                                    screenshare: a
                                }
                            })
                        }
                        if (null != i) {
                            p.push(m);
                            p.push({
                                section: qe._s_.CLIPS,
                                label: le.Z.Messages.RTC_DEBUG_CLIPS,
                                element: de,
                                elementProps: {
                                    clips: i
                                }
                            })
                        }
                        l.length > 0 && l.unshift(m);
                        return et(null != c ? [{
                            section: d.ID.CUSTOM,
                            label: "Channel Name",
                            element: function() {
                                return (0, r.jsx)(s.Heading, {
                                    className: w().channelName,
                                    variant: "heading-lg/semibold",
                                    children: c.name
                                })
                            }
                        }] : []).concat(et(u), et(l), et(f), et(p))
                    }({
                        defaultStats: a,
                        streamStats: i,
                        videoStreams: (0, u.e7)([v.ZP], (function() {
                            return v.ZP.getVideoStreams()
                        })),
                        screenshare: y,
                        clips: b,
                        channel: c
                    });
                o.useEffect((function() {
                    return function() {
                        l.xv()
                    }
                }), []);
                return (0, r.jsx)(f.ZP, {
                    theme: g,
                    sidebarTheme: R,
                    section: S,
                    onSetSection: l.zc,
                    sections: P
                })
            }

            function ot(e) {
                var t = e.windowKey;
                return (0, r.jsx)(a.Z, {
                    withTitleBar: !0,
                    windowKey: t,
                    title: le.Z.Messages.RTC_DEBUG_POPOUT_WINDOW_TITLE,
                    children: (0, r.jsx)(rt, {})
                })
            }
        }
    }
]);