n.d(t, {
    S: function () {
        return T;
    },
    d: function () {
        return r;
    }
});
var r,
    i = n(47120);
var a = n(653041);
var o = n(392711),
    s = n.n(o),
    l = n(47770),
    u = n(46973),
    c = n(379649),
    d = n(358085),
    _ = n(709054),
    E = n(140828),
    f = n(255914);
function h(e, t, n) {
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
function p(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    return null != e ? Math.round(e) : t;
}
function m(e, t) {
    return e.size === t.size && Array.from(e).every((e) => t.has(e));
}
class I {
    set value(e) {
        e && !this.state && (this.begin = this.timestampProducer.now()), !e && this.state && ((this.total += this.timestampProducer.now() - Number(this.begin)), (this.begin = null)), (this.state = e);
    }
    get value() {
        return this.state;
    }
    totalDuration() {
        return null != this.begin ? this.total + this.timestampProducer.now() - this.begin : this.total;
    }
    totalDurationSeconds() {
        return this.totalDuration() / 1000;
    }
    constructor(e, t) {
        h(this, 'timestampProducer', void 0), h(this, 'begin', void 0), h(this, 'total', void 0), h(this, 'state', void 0), (this.timestampProducer = t), (this.total = 0), (this.state = e), (this.begin = e ? t.now() : null);
    }
}
!(function (e) {
    e.FpsUpdate = 'fps-update';
})(r || (r = {}));
class T extends l.Z {
    addUserToStatsCollectionPausedSet(e) {
        this.statCollectionPausedUsers.add(e);
    }
    removeUserFromStatsCollectionPausedSet(e) {
        this.statCollectionPausedUsers.delete(e);
    }
    start() {
        (this.streamStart = this.timestampProducer.now()), this.connection.on(u.Sh.Stats, this.sampleStats);
    }
    setOutboundSsrc(e) {
        null == this.outboundStats[e] && (this.outboundStats[e] = new f.nt(this.timestampProducer));
    }
    getOrCreateInboundStats(e) {
        return null == this.inboundStats[e] && (this.inboundStats[e] = new f.m7(this.timestampProducer)), this.inboundStats[e];
    }
    setInboundUser(e, t) {
        this.getOrCreateInboundStats(e).setVideoStopped(0 === t, f.Mq.SenderStopped);
    }
    setUserVideoDisabled(e, t) {
        let n = this.getOrCreateInboundStats(e);
        n.setVideoStopped(t, f.Mq.ClientSideDisableVideo), !t && n.statsWindow.length > 0 && 0 === n.statsWindow[0].packets && (n.startTime = this.timestampProducer.now());
    }
    setOcclusionIncomingVideoEnabled(e) {
        this.videoStoppedForOcclusion.value = !e;
    }
    setWindowOcclusionState(e) {
        e !== this.windowOccluded.value && this.numWindowOcclusionChanges++, (this.windowOccluded.value = e);
    }
    pause() {
        !this.paused.value && this.pausedCount++,
            s().forEach(this.outboundStats, (e) => {
                e.statsWindow = [];
            }),
            s().forEach(this.inboundStats, (e) => {
                e.statsWindow = [];
            }),
            this.updateSendState({ paused: !0 });
    }
    resume() {
        this.updateSendState({ paused: !1 });
    }
    stop() {
        this.connection.off(u.Sh.Stats, this.sampleStats), (this.streamEnd = this.timestampProducer.now()), this.removeAllListeners();
    }
    setViewedSimulcastQuality(e) {
        e !== this.hqSimulcastStreamWatched.value && (this.hqSimulcastStreamWatched.totalDuration() > 0 || this.lqSimulcastStreamWatched.totalDuration() > 0) && this.simulcastQualityChanges++, (this.hqSimulcastStreamWatched.value = e), (this.lqSimulcastStreamWatched.value = !e);
    }
    setEligibleSimulcastQuality(e) {
        (this.hqSimulcastStreamEligible.value = e), (this.lqSimulcastStreamEligible.value = !e);
    }
    getNetworkStats() {
        return this.networkQuality.getStats();
    }
    getEncoderUsageStats() {
        let e = new Map();
        for (let t in this.outboundStats) {
            let n = new Map();
            for (let r of this.outboundStats[t].getCodecsUsed()) {
                let i = r.toUpperCase();
                n.set(i, p(this.outboundStats[t].codecBuckets[i])), e.set(parseInt(t), n);
            }
        }
        return e;
    }
    getDecoderUsageStats() {
        let e = new Map();
        for (let t in this.inboundStats) {
            let n = new Map();
            for (let r of this.inboundStats[t].getCodecsUsed()) {
                let i = r.toUpperCase();
                n.set(i, p(this.inboundStats[t].codecBuckets[i])), e.set(t, n);
            }
        }
        return e;
    }
    getCodecUsageStats(e, t) {
        var n, r, i, a, o, s, l, u, c, d;
        let _ = this.asymmetricCodecUpdates > this.symmetricCodecUpdates,
            E = new Map();
        if ('sender' === e || 'streamer' === e) {
            let e = this.getEncoderUsageStats();
            if (e.size > 0) {
                let t = [...e.keys()].sort()[0];
                E = e.get(t);
            }
            return {
                codec_asymmetric_session: _,
                codec_h264_encode_duration_sec: null !== (n = E.get(f.u7.H264)) && void 0 !== n ? n : 0,
                codec_h265_encode_duration_sec: null !== (r = E.get(f.u7.H265)) && void 0 !== r ? r : 0,
                codec_vp8_encode_duration_sec: null !== (i = E.get(f.u7.VP8)) && void 0 !== i ? i : 0,
                codec_vp9_encode_duration_sec: null !== (a = E.get(f.u7.VP9)) && void 0 !== a ? a : 0,
                codec_av1_encode_duration_sec: null !== (o = E.get(f.u7.AV1)) && void 0 !== o ? o : 0
            };
        }
        {
            let e = this.getDecoderUsageStats();
            return (
                e.has(t) && (E = e.get(t)),
                {
                    codec_asymmetric_session: _,
                    codec_h264_decode_duration_sec: null !== (s = E.get(f.u7.H264)) && void 0 !== s ? s : 0,
                    codec_h265_decode_duration_sec: null !== (l = E.get(f.u7.H265)) && void 0 !== l ? l : 0,
                    codec_vp8_decode_duration_sec: null !== (u = E.get(f.u7.VP8)) && void 0 !== u ? u : 0,
                    codec_vp9_decode_duration_sec: null !== (c = E.get(f.u7.VP9)) && void 0 !== c ? c : 0,
                    codec_av1_decode_duration_sec: null !== (d = E.get(f.u7.AV1)) && void 0 !== d ? d : 0
                }
            );
        }
    }
    getOutboundStats() {
        let e = [];
        return (
            s().forEach(this.outboundStats, (t, n) => {
                var r, i, a, o, s;
                let l;
                let u = null === (r = this.connection) || void 0 === r ? void 0 : r.getStreamParameters();
                u.length > 1 &&
                    u.forEach((e) => {
                        if (parseInt(n) === e.ssrc) {
                            var t;
                            l = null !== (t = e.quality) && void 0 !== t ? t : 50;
                        }
                    });
                let c = [1, 5, 10, 25, 50, 75],
                    d = [1, 5, 10, 25, 50, 75, 99],
                    _ = t.vmafHistogram.getReport(c),
                    E = t.psnrHistogram.getReport(c),
                    h = t.targetBitrateHistogram.getReport(d),
                    m = t.outboundBandwidthSurplus.getReport(d),
                    I = t.aggregationDuration / 1000;
                e.push({
                    ...this.getStats(t),
                    target_fps: I > 0 ? Math.round((null !== (i = t.targetFrames) && void 0 !== i ? i : 0) / I) : 0,
                    target_bitrate_network: I > 0 ? Math.round(((null !== (a = t.targetBytesNetwork) && void 0 !== a ? a : 0) * 8) / I) : 0,
                    target_bitrate_network_percentile1: h.count > 0 ? h.percentiles[1] : null,
                    target_bitrate_network_percentile5: h.count > 0 ? h.percentiles[5] : null,
                    target_bitrate_network_percentile10: h.count > 0 ? h.percentiles[10] : null,
                    target_bitrate_network_percentile25: h.count > 0 ? h.percentiles[25] : null,
                    target_bitrate_network_percentile50: h.count > 0 ? h.percentiles[50] : null,
                    target_bitrate_network_percentile75: h.count > 0 ? h.percentiles[75] : null,
                    target_bitrate_network_percentile99: h.count > 0 ? h.percentiles[99] : null,
                    target_bitrate_max: I > 0 ? Math.round(((null !== (o = t.targetBytesMax) && void 0 !== o ? o : 0) * 8) / I) : 0,
                    outbound_bandwidth_estimate: I > 0 ? Math.round(((null !== (s = t.outboundBytesAvailable) && void 0 !== s ? s : 0) * 8) / I) : 0,
                    outbound_bandwidth_surplus_percentile1: m.count > 0 ? m.percentiles[1] : null,
                    outbound_bandwidth_surplus_percentile5: m.count > 0 ? m.percentiles[5] : null,
                    outbound_bandwidth_surplus_percentile10: m.count > 0 ? m.percentiles[10] : null,
                    outbound_bandwidth_surplus_percentile25: m.count > 0 ? m.percentiles[25] : null,
                    outbound_bandwidth_surplus_percentile50: m.count > 0 ? m.percentiles[50] : null,
                    outbound_bandwidth_surplus_percentile75: m.count > 0 ? m.percentiles[75] : null,
                    outbound_bandwidth_surplus_percentile99: m.count > 0 ? m.percentiles[99] : null,
                    duration_encoder_nvidia_cuda: p(t.encoderBuckets[f.Su.NVIDIA_CUDA]),
                    duration_encoder_nvidia_direct3d: p(t.encoderBuckets[f.Su.NVIDIA_DIRECT_3D]),
                    duration_encoder_openh264: p(t.encoderBuckets[f.Su.OPENH264]),
                    duration_encoder_videotoolbox: p(t.encoderBuckets[f.Su.VIDEOTOOLBOX]),
                    duration_encoder_amd_direct3d: p(t.encoderBuckets[f.Su.AMD_DIRECT_3D]),
                    duration_encoder_intel: p(t.encoderBuckets[f.Su.INTEL]),
                    duration_encoder_intel_direct3d: p(t.encoderBuckets[f.Su.INTEL_DIRECT_3D]),
                    duration_encoder_vp8_libvpx: p(t.encoderBuckets[f.Su.VP8_LIBVPX]),
                    duration_encoder_uncategorized: p(t.encoderBuckets[f.Su.UNCATEGORIZED]),
                    duration_encoder_unknown: p(t.encoderBuckets[f.Su.UNKNOWN]),
                    quality: l,
                    average_encode_time_ms: t.averageEncodeTime,
                    average_encoder_vmaf_score: t.vmafScoreNum > 0 ? t.vmafScoreSum / t.vmafScoreNum : null,
                    encoder_vmaf_score_percentile1: _.count > 0 ? _.percentiles[1] : null,
                    encoder_vmaf_score_percentile5: _.count > 0 ? _.percentiles[5] : null,
                    encoder_vmaf_score_percentile10: _.count > 0 ? _.percentiles[10] : null,
                    encoder_vmaf_score_percentile25: _.count > 0 ? _.percentiles[25] : null,
                    encoder_vmaf_score_percentile50: _.count > 0 ? _.percentiles[50] : null,
                    encoder_vmaf_score_percentile75: _.count > 0 ? _.percentiles[75] : null,
                    average_encoder_psnr_db: t.psnrDbNum > 0 ? t.psnrDbSum / t.psnrDbNum : null,
                    encoder_psnr_db_percentile1: E.count > 0 ? E.percentiles[1] : null,
                    encoder_psnr_db_percentile5: E.count > 0 ? E.percentiles[5] : null,
                    encoder_psnr_db_percentile10: E.count > 0 ? E.percentiles[10] : null,
                    encoder_psnr_db_percentile25: E.count > 0 ? E.percentiles[25] : null,
                    encoder_psnr_db_percentile50: E.count > 0 ? E.percentiles[50] : null,
                    encoder_psnr_db_percentile75: E.count > 0 ? E.percentiles[75] : null,
                    average_outbound_want: t.outboundSinkWantNum > 0 ? t.outboundSinkWantSum / t.outboundSinkWantNum : null,
                    frames_dropped_rate_limiter: t.framesDroppedRateLimiter,
                    frames_dropped_encoder_queue: t.framesDroppedEncoderQueue,
                    frames_dropped_congestion_window: t.framesDroppedCongestionWindow,
                    frames_dropped_encoder: t.framesDroppedEncoder,
                    duration_hq_simulcast_stream_encoded: p(this.hqSimulcastStreamEncoded.totalDurationSeconds()),
                    duration_lq_simulcast_stream_encoded: p(this.lqSimulcastStreamEncoded.totalDurationSeconds()),
                    duration_both_simulcast_streams_encoded: p(this.bothSimulcastStreamsEncoded.totalDurationSeconds()),
                    duration_fps_bandwidth_limited: p(this.bandwidthLimitedFramerate.totalDurationSeconds()),
                    duration_resolution_bandwidth_limited: p(this.bandwidthLimitedResolution.totalDurationSeconds())
                });
            }),
            e
        );
    }
    getInboundStats(e) {
        return this.getStats(this.inboundStats[e]);
    }
    destroyUser(e) {
        delete this.inboundStats[e];
    }
    getInboundParticipants() {
        return _.default.keys(this.inboundStats);
    }
    updateSendState(e) {
        null != e.paused && (this.paused.value = e.paused), null != e.receivers && (this.zeroReceivers.value = 0 === e.receivers);
        let t = this.paused.value || this.zeroReceivers.value,
            n = this.videoStopped.value;
        (this.videoStopped.value = t), t !== n && s().forEach(this.outboundStats, (e) => (e.statsWindow = []));
    }
    getStats(e) {
        if (null == e) return;
        let t = Number(this.streamStart),
            n = (null != this.streamEnd ? this.streamEnd - t : this.timestampProducer.now() - t) / 1000,
            r = Math.max(e.aggregationDuration, 0) / 1000,
            i = [1, 5, 10, 25, 50, 75],
            a = [1, 5, 10, 25, 50, 75, 99],
            o = [1, 5, 10, 25, 50, 75, 99],
            s = e.fpsHistogram.getReport(i),
            l = e.bitrateHistogram.getReport(a),
            u = e.resolutionHistogram.getReport(i),
            c = e.inboundBitrateEstimateHistogram.getReport(o),
            d = e.systemResources.getStats(),
            _ = {
                duration: Math.floor(n),
                duration_aggregation: p(r),
                duration_stopped_receiving: p(e.videoStoppedDuration.asSeconds()),
                duration_stream_under_8mbps: p(e.bitrateBuckets[8000000]),
                duration_stream_under_7mbps: p(e.bitrateBuckets[7000000]),
                duration_stream_under_6mbps: p(e.bitrateBuckets[6000000]),
                duration_stream_under_5mbps: p(e.bitrateBuckets[5000000]),
                duration_stream_under_4mbps: p(e.bitrateBuckets[4000000]),
                duration_stream_under_3mbps: p(e.bitrateBuckets[3000000]),
                duration_stream_under_2mbps: p(e.bitrateBuckets[2000000]),
                duration_stream_under_1_5mbps: p(e.bitrateBuckets[1500000]),
                duration_stream_under_1mbps: p(e.bitrateBuckets[1000000]),
                duration_stream_under_0_5mbps: p(e.bitrateBuckets[500000]),
                duration_stream_at_0mbps: p(e.bitrateBuckets[0]),
                duration_fps_under_60: p(e.fpsBuckets[60]),
                duration_fps_under_55: p(e.fpsBuckets[55]),
                duration_fps_under_50: p(e.fpsBuckets[50]),
                duration_fps_under_45: p(e.fpsBuckets[45]),
                duration_fps_under_40: p(e.fpsBuckets[40]),
                duration_fps_under_35: p(e.fpsBuckets[35]),
                duration_fps_under_30: p(e.fpsBuckets[30]),
                duration_fps_under_25: p(e.fpsBuckets[25]),
                duration_fps_under_20: p(e.fpsBuckets[20]),
                duration_fps_under_15: p(e.fpsBuckets[15]),
                duration_fps_under_10: p(e.fpsBuckets[10]),
                duration_fps_under_5: p(e.fpsBuckets[5]),
                duration_fps_at_0: p(e.fpsBuckets[0]),
                avg_resolution: e.intervalTotal > 0 ? Math.round(e.resolutionTotal / e.intervalTotal) : 0,
                avg_minor_resolution: e.intervalTotal > 0 ? Math.round(e.minorResolutionTotal / e.intervalTotal) : 0,
                avg_major_resolution: e.intervalTotal > 0 ? Math.round(e.majorResolutionTotal / e.intervalTotal) : 0,
                duration_resolution_under_720: p(e.resolutionBuckets[720]),
                duration_resolution_under_480: p(e.resolutionBuckets[480]),
                duration_resolution_under_360: p(e.resolutionBuckets[360]),
                num_pauses: this.pausedCount,
                duration_paused: p(this.paused.totalDuration() / 1000),
                duration_zero_receivers: p(this.zeroReceivers.totalDuration() / 1000),
                duration_video_stopped: p(this.videoStopped.totalDuration() / 1000),
                duration_hq_simulcast_stream_watched: p(this.hqSimulcastStreamWatched.totalDurationSeconds()),
                duration_lq_simulcast_stream_watched: p(this.lqSimulcastStreamWatched.totalDurationSeconds()),
                duration_hq_simulcast_stream_eligible: p(this.hqSimulcastStreamEligible.totalDurationSeconds()),
                duration_lq_simulcast_stream_eligible: p(this.lqSimulcastStreamEligible.totalDurationSeconds()),
                num_quality_changes: this.simulcastQualityChanges,
                duration_window_occluded: p(this.windowOccluded.totalDurationSeconds()),
                duration_incoming_video_stopped_for_occlusion: p(this.videoStoppedForOcclusion.totalDurationSeconds()),
                num_window_occlusion_changes: this.numWindowOcclusionChanges,
                fps_percentile1: s.percentiles[1],
                fps_percentile5: s.percentiles[5],
                fps_percentile10: s.percentiles[10],
                fps_percentile25: s.percentiles[25],
                fps_percentile50: s.percentiles[50],
                fps_percentile75: s.percentiles[75],
                bitrate_percentile1: l.percentiles[1],
                bitrate_percentile5: l.percentiles[5],
                bitrate_percentile10: l.percentiles[10],
                bitrate_percentile25: l.percentiles[25],
                bitrate_percentile50: l.percentiles[50],
                bitrate_percentile75: l.percentiles[75],
                bitrate_percentile99: l.percentiles[99],
                resolution_percentile1: u.percentiles[1],
                resolution_percentile5: u.percentiles[5],
                resolution_percentile10: u.percentiles[10],
                resolution_percentile25: u.percentiles[25],
                resolution_percentile50: u.percentiles[50],
                resolution_percentile75: u.percentiles[75],
                inbound_bitrate_estimate_percentile1: c.percentiles[1],
                inbound_bitrate_estimate_percentile5: c.percentiles[5],
                inbound_bitrate_estimate_percentile10: c.percentiles[10],
                inbound_bitrate_estimate_percentile25: c.percentiles[25],
                inbound_bitrate_estimate_percentile50: c.percentiles[50],
                inbound_bitrate_estimate_percentile75: c.percentiles[75],
                inbound_bitrate_estimate_percentile99: c.percentiles[99],
                duration_video_effect: p(this.videoEffectDuration.totalDuration() / 1000),
                cryptor_max_attempts: e.cryptorMaxAttempts,
                duration_decoder_ffmpeg: p(e.decoderBuckets[f.gr.FFMPEG]),
                duration_decoder_dav1d: p(e.decoderBuckets[f.gr.DAV1D]),
                duration_decoder_vp8_libvpx: p(e.decoderBuckets[f.gr.VP8_LIBVPX]),
                duration_decoder_electron: p(e.decoderBuckets[f.gr.ELECTRON]),
                duration_decoder_videotoolbox: p(e.decoderBuckets[f.gr.VIDEOTOOLBOX]),
                duration_decoder_uncategorized: p(e.decoderBuckets[f.gr.UNCATEGORIZED]),
                duration_decoder_unknown: p(e.decoderBuckets[f.gr.UNKNOWN]),
                ...d
            },
            { bytes: E, framesDropped: h, framesCodecError: m, framesCodec: I, framesNetwork: T, packets: g, packetsLost: S, nackCount: A, pliCount: v, qpSum: N, pauseCount: O, freezeCount: R, totalPausesDuration: C, totalFreezesDuration: y, totalFramesDuration: b, keyframes: L, passthroughCount: D, cryptorSuccessCount: M, cryptorFailureCount: P, cryptorDuration: U, cryptorAttempts: w, qualityDecodeErrors: x, qualityDecoderReboots: G, qualityScoreErrors: k, qualityFrameDrops: B, qualitySizeMismatches: F } = e.aggregatedProperties;
        return {
            ..._,
            avg_bitrate: r > 0 ? Math.round(((null != E ? E : 0) * 8) / r) : 0,
            avg_fps: r > 0 ? Math.round((null != I ? I : 0) / r) : 0,
            num_bytes: E,
            num_packets_lost: S,
            num_packets: g,
            num_frames: T,
            num_frames_codec_error: m,
            time_to_first_frame_ms: e.timeToFirstFrame,
            num_frames_dropped: h,
            num_nacks: A,
            num_plis: v,
            qp_sum: N,
            receiver_pause_count: O,
            receiver_freeze_count: R,
            receiver_total_pauses_duration: C,
            receiver_total_freezes_duration: y,
            receiver_total_frames_duration: b,
            num_keyframes: L,
            cryptor_passthrough_count: D,
            cryptor_success_count: M,
            cryptor_failure_count: P,
            cryptor_duration: U,
            cryptor_attempts: w,
            encoder_quality_decode_errors: x,
            encoder_quality_decoder_reboots: G,
            encoder_quality_score_errors: k,
            encoder_quality_frame_drops: B,
            encoder_quality_size_mismatches: F
        };
    }
    receivedStats(e, t, n) {
        var r, i;
        let a = t.transport,
            o = (0, d.isWeb)() ? 1 : null !== (i = null === (r = a.receiverReports) || void 0 === r ? void 0 : r.length) && void 0 !== i ? i : 0,
            l = new Set(),
            c = new Set();
        this.updateSendState({ receivers: o });
        let _ = s().max(n.map((e) => e.quality));
        t.rtp.outbound
            .filter((e) => 'video' === e.type)
            .forEach((t) => {
                let r = t;
                if (null != r) {
                    let t = r.ssrc,
                        v = this.outboundStats[t];
                    null == v && (console.warn('Unknown outbound video stream with SSRC: '.concat(t)), (v = new f.nt(this.timestampProducer)), (this.outboundStats[t] = v)), null == v.timeToFirstFrame && (r.framesEncoded > 0 || (null !== (i = r.frameRateInput) && void 0 !== i ? i : 0) > 0) && (v.timeToFirstFrame = Math.max(0, e - v.startTime));
                    let N = n.find((e) => e.ssrc === t);
                    var i,
                        o,
                        s,
                        c,
                        d,
                        E,
                        h,
                        p,
                        m,
                        I,
                        T,
                        g,
                        S = !0;
                    if (this.connection.context === u.Yn.STREAM) {
                        var A = this.connection.getRemoteVideoSinkWants(t);
                        (null == A || 0 === A) && (null == N ? void 0 : N.quality) === _ && (A = this.connection.getRemoteVideoSinkWants('any')), (S = (null != A ? A : 0) > 0);
                    }
                    let O = this.videoStopped.value || !S;
                    if ((O !== v.isVideoStopped && v.setVideoStopped(O, f.Mq.SenderStopped), !O)) {
                        v.appendAndIncrementStats(f.z4.parseOutboundStats(r, e)), v.encoderCodec !== f.u7.UNKNOWN && l.add(v.encoderCodec);
                        let t = null == N ? void 0 : N.maxBitrate;
                        v.appendTargetRates(null == N ? void 0 : N.maxFrameRate, null !== (s = r.bitrateTarget) && void 0 !== s ? s : Math.min(null !== (o = a.availableOutgoingBitrate) && void 0 !== o ? o : 0, null != t ? t : 0), t, a.availableOutgoingBitrate), (v.averageEncodeTime = null !== (c = r.averageEncodeTime) && void 0 !== c ? c : 0), (v.framesDroppedRateLimiter = null !== (d = r.framesDroppedRateLimiter) && void 0 !== d ? d : null), (v.framesDroppedEncoderQueue = null !== (E = r.framesDroppedEncoderQueue) && void 0 !== E ? E : null), (v.framesDroppedCongestionWindow = null !== (h = r.framesDroppedCongestionWindow) && void 0 !== h ? h : null), (v.framesDroppedEncoder = null !== (p = r.framesDroppedEncoder) && void 0 !== p ? p : null), (this.hqSimulcastStreamEncoded.value = null !== (m = r.hqSimulcastStreamEncoded) && void 0 !== m && m), (this.lqSimulcastStreamEncoded.value = null !== (I = r.lqSimulcastStreamEncoded) && void 0 !== I && I), (this.bothSimulcastStreamsEncoded.value = this.hqSimulcastStreamEncoded.value && this.lqSimulcastStreamEncoded.value), (this.bandwidthLimitedResolution.value = null !== (T = r.bandwidthLimitedResolution) && void 0 !== T && T), (this.bandwidthLimitedFramerate.value = null !== (g = r.bandwidthLimitedFrameRate) && void 0 !== g && g);
                    }
                }
            }),
            !this.paused.value &&
                s().forEach(t.rtp.inbound, (t, n) => {
                    let r = t.find((e) => 'video' === e.type);
                    if (null != r) {
                        let t = this.inboundStats[n];
                        null == t && (console.warn('Unknown inbound video stream for user: '.concat(n)), (t = new f.m7(this.timestampProducer)), (this.inboundStats[n] = t));
                        let i = f.z4.parseInboundStats(r, e);
                        !this.statCollectionPausedUsers.has(n) && (t.appendAndIncrementStats(i), t.appendTransportStats(a)), i.packets > 0 && this.emit('fps-update', n, i.framesCodec, i.timestamp), t.decoderCodec !== f.u7.UNKNOWN && c.add(t.decoderCodec), null == t.timeToFirstFrame && r.framesDecoded > 0 && (t.timeToFirstFrame = e - t.startTime);
                    }
                }),
            0 !== l.size && 0 !== c.size && (m(l, c) ? this.symmetricCodecUpdates++ : this.asymmetricCodecUpdates++);
    }
    updateSystemResourceStats() {
        for (let e in this.outboundStats) this.outboundStats[e].addSystemResources();
        for (let e in this.inboundStats) this.inboundStats[e].addSystemResources();
    }
    updateVideoEffectStats(e) {
        let t = null == e ? void 0 : e.rtp.outbound.find((e) => 'video' === e.type);
        this.videoEffectDuration.value = (null == t ? void 0 : t.type) === 'video' && null != t.filter;
    }
    constructor(e, t = c.Z_) {
        super(),
            h(this, 'connection', void 0),
            h(this, 'timestampProducer', void 0),
            h(this, 'networkQuality', void 0),
            h(this, 'paused', void 0),
            h(this, 'pausedCount', void 0),
            h(this, 'zeroReceivers', void 0),
            h(this, 'videoStopped', void 0),
            h(this, 'videoEffectDuration', void 0),
            h(this, 'hqSimulcastStreamEncoded', void 0),
            h(this, 'lqSimulcastStreamEncoded', void 0),
            h(this, 'bothSimulcastStreamsEncoded', void 0),
            h(this, 'hqSimulcastStreamWatched', void 0),
            h(this, 'lqSimulcastStreamWatched', void 0),
            h(this, 'hqSimulcastStreamEligible', void 0),
            h(this, 'lqSimulcastStreamEligible', void 0),
            h(this, 'simulcastQualityChanges', void 0),
            h(this, 'windowOccluded', void 0),
            h(this, 'videoStoppedForOcclusion', void 0),
            h(this, 'numWindowOcclusionChanges', void 0),
            h(this, 'outboundStats', void 0),
            h(this, 'inboundStats', void 0),
            h(this, 'streamStart', void 0),
            h(this, 'streamEnd', void 0),
            h(this, 'symmetricCodecUpdates', void 0),
            h(this, 'asymmetricCodecUpdates', void 0),
            h(this, 'bandwidthLimitedFramerate', void 0),
            h(this, 'bandwidthLimitedResolution', void 0),
            h(this, 'statCollectionPausedUsers', void 0),
            h(this, 'sampleStats', void 0),
            (this.connection = e),
            (this.timestampProducer = t),
            (this.networkQuality = new E.Z()),
            (this.pausedCount = 0),
            (this.simulcastQualityChanges = 0),
            (this.numWindowOcclusionChanges = 0),
            (this.outboundStats = {}),
            (this.inboundStats = {}),
            (this.symmetricCodecUpdates = 0),
            (this.asymmetricCodecUpdates = 0),
            (this.statCollectionPausedUsers = new Set()),
            (this.sampleStats = (e) => {
                if (null == e) return;
                let t = this.timestampProducer.now();
                if ((this.networkQuality.incrementNetworkStats(t), this.updateSystemResourceStats(), this.updateVideoEffectStats(e), null == e)) return;
                let n = this.connection.getStreamParameters();
                this.receivedStats(t, e, n);
            }),
            (this.paused = new I(!1, t)),
            (this.zeroReceivers = new I(!1, t)),
            (this.videoStopped = new I(!1, t)),
            (this.videoEffectDuration = new I(!1, t)),
            (this.hqSimulcastStreamEncoded = new I(!1, t)),
            (this.lqSimulcastStreamEncoded = new I(!1, t)),
            (this.bothSimulcastStreamsEncoded = new I(!1, t)),
            (this.hqSimulcastStreamWatched = new I(!1, t)),
            (this.lqSimulcastStreamWatched = new I(!1, t)),
            (this.hqSimulcastStreamEligible = new I(!1, t)),
            (this.lqSimulcastStreamEligible = new I(!1, t)),
            (this.windowOccluded = new I(!1, t)),
            (this.videoStoppedForOcclusion = new I(!1, t)),
            (this.bandwidthLimitedFramerate = new I(!1, t)),
            (this.bandwidthLimitedResolution = new I(!1, t));
    }
}
