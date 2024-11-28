n.d(t, {
    Z: function () {
        return c;
    }
}),
    n(724458),
    n(47120),
    n(653041);
var r = n(392711),
    i = n.n(r),
    a = n(46973),
    s = n(379649),
    o = n(140828),
    l = n(179654);
function u(e, t, n) {
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
class c {
    start() {
        this.connection.on(a.Sh.Stats, this.sampleStats);
    }
    stop() {
        this.connection.off(a.Sh.Stats, this.sampleStats);
    }
    getMosStats() {
        let e = i().reduce(
            this.inboundStats,
            (e, t) => {
                (e.mosSum += t.mosSum), (e.mosCount += t.mosCount);
                for (var n = 0; n < 5; n++) e.mosBuckets[n] += t.mosBuckets[n];
                return e;
            },
            {
                mosSum: 0,
                mosCount: 0,
                mosBuckets: [0, 0, 0, 0, 0]
            }
        );
        return {
            mos_mean: e.mosCount > 0 ? e.mosSum / e.mosCount : 0,
            mos_1: e.mosBuckets[1],
            mos_2: e.mosBuckets[2],
            mos_3: e.mosBuckets[3],
            mos_4: e.mosBuckets[4]
        };
    }
    getPacketStats() {
        let e = i().reduce(this.inboundStats, (e, t) => ((e.packetsReceived += t.packetsReceived), (e.packetsReceivedLost += t.packetsLost), null != e.fecPacketsReceived && (e.fecPacketsReceived += t.fecPacketsReceived), null != e.fecPacketsDiscarded && (e.fecPacketsDiscarded += t.fecPacketsDiscarded), e), {
            packetsReceived: 0,
            packetsReceivedLost: 0,
            fecPacketsReceived: 0,
            fecPacketsDiscarded: 0
        });
        return {
            packets_sent: this.outboundStats.packetsSent,
            packets_sent_lost: this.outboundStats.packetsLost,
            packets_received: e.packetsReceived,
            packets_received_lost: e.packetsReceivedLost,
            fec_packets_received: e.fecPacketsReceived,
            fec_packets_discarded: e.fecPacketsDiscarded
        };
    }
    getBytesStats() {
        let e = i().reduce(this.inboundStats, (e, t) => e + t.bytesReceived, 0);
        return {
            bytes_sent: this.outboundStats.bytesSent,
            bytes_received: e
        };
    }
    getNetworkStats() {
        return this.networkQuality.getStats();
    }
    getSystemResourceStats() {
        return this.systemResources.getStats();
    }
    getBufferStats() {
        let e = i().reduce(this.inboundStats, (e, t) => ((null == e || (null != t.bufferStats.audioJitterBuffer && null != e.audioJitterBuffer && t.bufferStats.audioJitterBuffer.p75 > e.audioJitterBuffer.p75)) && (e = t.bufferStats), e), null);
        return {
            ...(function (e) {
                let t = {};
                for (let n in e) {
                    let r = e[n];
                    (t[n + '_mean'] = null != r ? r.mean : 0), (t[n + '_p75'] = null != r ? r.p75 : 0), (t[n + '_p95'] = null != r ? r.p95 : 0), (t[n + '_p99'] = null != r ? r.p99 : 0), (t[n + '_max'] = null != r ? r.max : 0);
                }
                return t;
            })({
                audio_jitter_buffer: null != e ? e.audioJitterBuffer : null,
                audio_jitter_target: null != e ? e.audioJitterTarget : null,
                audio_jitter_delay: null != e ? e.audioJitterDelay : null,
                relative_reception_delay: null != e ? e.relativeReceptionDelay : null,
                relative_playout_delay: null != e ? e.relativePlayoutDelay : null
            })
        };
    }
    getFrameOpStats() {
        let e = i().reduce(this.inboundStats, (e, t) => (null != t.frameOpStats.silent && (e.silent += t.frameOpStats.silent), null != t.frameOpStats.normal && (e.normal += t.frameOpStats.normal), null != t.frameOpStats.merged && (e.merged += t.frameOpStats.merged), null != t.frameOpStats.expanded && (e.expanded += t.frameOpStats.expanded), null != t.frameOpStats.accelerated && (e.accelerated += t.frameOpStats.accelerated), null != t.frameOpStats.preemptiveExpanded && (e.preemptiveExpanded += t.frameOpStats.preemptiveExpanded), null != t.frameOpStats.cng && (e.cng += t.frameOpStats.cng), e), {
            silent: 0,
            normal: 0,
            merged: 0,
            expanded: 0,
            accelerated: 0,
            preemptiveExpanded: 0,
            cng: 0
        });
        return {
            frame_op_silent: e.silent,
            frame_op_normal: e.normal,
            frame_op_merged: e.merged,
            frame_op_expanded: e.expanded,
            frame_op_accelerated: e.accelerated,
            frame_op_preemptive_expanded: e.preemptiveExpanded,
            frame_op_cng: e.cng
        };
    }
    getDurationStats() {
        return {
            duration_listening: this.duration.listening,
            duration_speaking: this.duration.speaking,
            duration_participation: this.duration.participation,
            duration_connected: this.duration.connected
        };
    }
    getTransportStats() {
        return {
            decryption_failures: this.decryptionFailures,
            routing_failures: this.routingFailures
        };
    }
    getE2EEStats() {
        let e = i().reduce(
            this.inboundStats,
            (e, t) => {
                var n, r, i, a, s, o, l;
                return (e.passthroughCount += null !== (n = t.passthroughCount) && void 0 !== n ? n : 0), (e.decryptSuccessCount += null !== (r = t.decryptSuccessCount) && void 0 !== r ? r : 0), (e.decryptFailureCount += null !== (i = t.decryptFailureCount) && void 0 !== i ? i : 0), (e.decryptDuration += null !== (a = t.decryptDuration) && void 0 !== a ? a : 0), (e.decryptAttempts += null !== (s = t.decryptAttempts) && void 0 !== s ? s : 0), (e.decryptMissingKeyCount += null !== (o = t.decryptMissingKeyCount) && void 0 !== o ? o : 0), (e.decryptInvalidNonceCount += null !== (l = t.decryptInvalidNonceCount) && void 0 !== l ? l : 0), e;
            },
            {
                passthroughCount: 0,
                decryptSuccessCount: 0,
                decryptFailureCount: 0,
                decryptDuration: 0,
                decryptAttempts: 0,
                decryptMissingKeyCount: 0,
                decryptInvalidNonceCount: 0
            }
        );
        return {
            decrypt_passthrough_count: e.passthroughCount,
            decrypt_success_count: e.decryptSuccessCount,
            decrypt_failure_count: e.decryptFailureCount,
            decrypt_duration: e.decryptDuration,
            decrypt_attempts: e.decryptAttempts,
            decrypt_missing_key_count: e.decryptMissingKeyCount,
            decrypt_invalid_nonce_count: e.decryptInvalidNonceCount,
            encrypt_passthrough_count: this.outboundStats.passthroughCount,
            encrypt_success_count: this.outboundStats.encryptSuccessCount,
            encrypt_failure_count: this.outboundStats.encryptFailureCount,
            encrypt_duration: this.outboundStats.encryptDuration,
            encrypt_attempts: this.outboundStats.encryptAttempts,
            encrypt_max_attempts: this.outboundStats.encryptMaxAttempts,
            encrypt_missing_key_count: this.outboundStats.encryptMissingKeyCount
        };
    }
    getPeriodicStats() {
        let e = [];
        for (let [h, m] of Object.entries(this.periodicInboundStats)) {
            let { previous: g, current: E, currentTimestampMs: v, previousTimestampMs: I, numRateSamples: T } = m;
            if (void 0 !== I && v > I) {
                var t, n, r, i, a, s, o, l, u, c, d, f, _, p;
                let b = v - I,
                    S = {
                        userId: h,
                        silent: null !== (n = E.silent) && void 0 !== n ? n : 0 - (null !== (t = g.silent) && void 0 !== t ? t : 0),
                        normal: null !== (i = E.normal) && void 0 !== i ? i : 0 - (null !== (r = g.normal) && void 0 !== r ? r : 0),
                        merged: null !== (s = E.merged) && void 0 !== s ? s : 0 - (null !== (a = g.merged) && void 0 !== a ? a : 0),
                        expanded: null !== (l = E.expanded) && void 0 !== l ? l : 0 - (null !== (o = g.expanded) && void 0 !== o ? o : 0),
                        accelerated: null !== (c = E.accelerated) && void 0 !== c ? c : 0 - (null !== (u = g.accelerated) && void 0 !== u ? u : 0),
                        preemptiveExpanded: null !== (f = E.preemptiveExpanded) && void 0 !== f ? f : 0 - (null !== (d = g.preemptiveExpanded) && void 0 !== d ? d : 0),
                        cng: null !== (p = E.cng) && void 0 !== p ? p : 0 - (null !== (_ = g.cng) && void 0 !== _ ? _ : 0),
                        accelerateRate: m.accelerateRateSum / T,
                        expandRate: m.expandRateSum / T,
                        preemptiveExpandRate: m.preemptiveExpandRateSum / T,
                        speechExpandRate: m.speechExpandRateSum / T,
                        durationMs: b
                    };
                S.normal + S.merged + S.expanded + S.accelerated + S.preemptiveExpanded > 0 && e.push(S);
            }
            (this.periodicInboundStats[h].accelerateRateSum = 0), (this.periodicInboundStats[h].expandRateSum = 0), (this.periodicInboundStats[h].preemptiveExpandRateSum = 0), (this.periodicInboundStats[h].speechExpandRateSum = 0), (this.periodicInboundStats[h].numRateSamples = 0), (this.periodicInboundStats[h].previous = E), (this.periodicInboundStats[h].previousTimestampMs = v);
        }
        return e;
    }
    calculateMos(e, t) {
        let n = this.calculateR(e, t);
        return n < 0 ? 1 : n > 100 ? 4.5 : 1 + 0.035 * n + 0.0000071 * n * (n - 60) * (100 - n);
    }
    calculateR(e, t) {
        return 93.4 - (0.024 * e + (e > 177.3 ? 0.11 * (e - 177.3) : 0)) - (10 + (122 * t) / (t + 10));
    }
    constructor(e) {
        u(this, 'connection', void 0),
            u(this, 'inboundStats', void 0),
            u(this, 'outboundStats', void 0),
            u(this, 'networkQuality', void 0),
            u(this, 'systemResources', void 0),
            u(this, 'duration', void 0),
            u(this, 'decryptionFailures', void 0),
            u(this, 'routingFailures', void 0),
            u(this, 'periodicInboundStats', void 0),
            u(this, 'sampleStats', void 0),
            (this.connection = e),
            (this.sampleStats = (e) => {
                if (null == e) return;
                this.networkQuality.incrementNetworkStats((0, s.zO)()), this.systemResources.takeSample(), (this.decryptionFailures = e.transport.decryptionFailures), (this.routingFailures = e.transport.routingFailures), this.duration.connected++;
                let t = this.outboundStats.packetsSent,
                    n = i().reduce(this.inboundStats, (e, t) => ((e.packetsReceived += t.packetsReceived), e), { packetsReceived: 0 });
                i().forEach(e.rtp.outbound, (e) => {
                    if ('audio' === e.type) {
                        var t, n, r, i, a, s, o, l;
                        this.outboundStats = {
                            packetsSent: e.packetsSent,
                            bytesSent: e.bytesSent,
                            packetsLost: null !== (t = e.packetsLost) && void 0 !== t ? t : 0,
                            passthroughCount: null !== (n = e.passthroughCount) && void 0 !== n ? n : 0,
                            encryptSuccessCount: null !== (r = e.encryptSuccessCount) && void 0 !== r ? r : 0,
                            encryptFailureCount: null !== (i = e.encryptFailureCount) && void 0 !== i ? i : 0,
                            encryptDuration: null !== (a = e.encryptDuration) && void 0 !== a ? a : 0,
                            encryptAttempts: null !== (s = e.encryptAttempts) && void 0 !== s ? s : 0,
                            encryptMaxAttempts: null !== (o = e.encryptMaxAttempts) && void 0 !== o ? o : 0,
                            encryptMissingKeyCount: null !== (l = e.encryptMissingKeyCount) && void 0 !== l ? l : 0
                        };
                    }
                }),
                    i().forEach(e.rtp.inbound, (t, n) => {
                        i().forEach(t, (t) => {
                            if ('audio' === t.type) {
                                var r, a, s, o, l, u, c, d, f, _, p, h, m, g, E, v, I, T, b;
                                let S = null !== (r = e.transport.ping) && void 0 !== r ? r : 0,
                                    y = t.packetsReceived,
                                    A = t.packetsLost,
                                    N = t.bytesReceived,
                                    C = null !== (a = t.fecPacketsReceived) && void 0 !== a ? a : 0,
                                    R = null !== (s = t.fecPacketsDiscarded) && void 0 !== s ? s : 0,
                                    O = null !== (o = t.jitterBuffer) && void 0 !== o ? o : 0,
                                    D = {
                                        audioJitterBuffer: t.audioJitterBuffer,
                                        audioJitterTarget: t.audioJitterTarget,
                                        audioJitterDelay: t.audioJitterDelay,
                                        relativeReceptionDelay: t.relativeReceptionDelay,
                                        relativePlayoutDelay: t.relativePlayoutDelay
                                    },
                                    L = {
                                        silent: t.opSilence,
                                        normal: t.opNormal,
                                        merged: t.opMerge,
                                        expanded: t.opExpand,
                                        accelerated: t.opAccelerate,
                                        preemptiveExpanded: t.opPreemptiveExpand,
                                        cng: t.opCNG
                                    },
                                    x = {
                                        passthroughCount: null !== (l = t.passthroughCount) && void 0 !== l ? l : 0,
                                        decryptSuccessCount: null !== (u = t.decryptSuccessCount) && void 0 !== u ? u : 0,
                                        decryptFailureCount: null !== (c = t.decryptFailureCount) && void 0 !== c ? c : 0,
                                        decryptDuration: null !== (d = t.decryptDuration) && void 0 !== d ? d : 0,
                                        decryptAttempts: null !== (f = t.decryptAttempts) && void 0 !== f ? f : 0,
                                        decryptMissingKeyCount: null !== (_ = t.decryptMissingKeyCount) && void 0 !== _ ? _ : 0,
                                        decryptInvalidNonceCount: null !== (p = t.decryptInvalidNonceCount) && void 0 !== p ? p : 0
                                    };
                                if (null != this.inboundStats[n]) {
                                    let e = y - this.inboundStats[n].packetsReceived,
                                        r = A - this.inboundStats[n].packetsLost,
                                        a = 0,
                                        s = this.inboundStats[n].mosBuckets;
                                    e > 0 && r >= 0 && ((a = this.calculateMos(S + O, i().clamp(r / (e + r), 0, 1))), s[Math.floor(a)]++),
                                        (this.inboundStats[n] = {
                                            packetsReceived: y,
                                            bytesReceived: N,
                                            packetsLost: A,
                                            fecPacketsReceived: C,
                                            fecPacketsDiscarded: R,
                                            mos: a,
                                            mosSum: this.inboundStats[n].mosSum + a,
                                            mosCount: this.inboundStats[n].mosCount + (a > 0 ? 1 : 0),
                                            mosBuckets: s,
                                            bufferStats: D,
                                            frameOpStats: L,
                                            ...x
                                        }),
                                        (this.periodicInboundStats[n] = {
                                            previousTimestampMs: this.periodicInboundStats[n].previousTimestampMs,
                                            previous: this.periodicInboundStats[n].previous,
                                            currentTimestampMs: Date.now(),
                                            current: L,
                                            accelerateRateSum: this.periodicInboundStats[n].accelerateRateSum + (null !== (h = t.accelerateRate) && void 0 !== h ? h : 0),
                                            expandRateSum: this.periodicInboundStats[n].expandRateSum + (null !== (m = t.expandRate) && void 0 !== m ? m : 0),
                                            preemptiveExpandRateSum: this.periodicInboundStats[n].preemptiveExpandRateSum + (null !== (g = t.preemptiveExpandRate) && void 0 !== g ? g : 0),
                                            speechExpandRateSum: this.periodicInboundStats[n].speechExpandRateSum + (null !== (E = t.speechExpandRate) && void 0 !== E ? E : 0),
                                            numRateSamples: this.periodicInboundStats[n].numRateSamples + 1
                                        });
                                } else
                                    (this.inboundStats[n] = {
                                        packetsReceived: y,
                                        bytesReceived: N,
                                        packetsLost: A,
                                        fecPacketsReceived: C,
                                        fecPacketsDiscarded: R,
                                        mos: 0,
                                        mosSum: 0,
                                        mosCount: 0,
                                        mosBuckets: [0, 0, 0, 0, 0],
                                        bufferStats: D,
                                        frameOpStats: L,
                                        ...x
                                    }),
                                        (this.periodicInboundStats[n] = {
                                            previousTimestampMs: Date.now(),
                                            previous: L,
                                            currentTimestampMs: Date.now(),
                                            current: L,
                                            accelerateRateSum: null !== (v = t.accelerateRate) && void 0 !== v ? v : 0,
                                            expandRateSum: null !== (I = t.expandRate) && void 0 !== I ? I : 0,
                                            preemptiveExpandRateSum: null !== (T = t.preemptiveExpandRate) && void 0 !== T ? T : 0,
                                            speechExpandRateSum: null !== (b = t.speechExpandRate) && void 0 !== b ? b : 0,
                                            numRateSamples: 1
                                        });
                            }
                        });
                    });
                let r = !1,
                    a = !1;
                this.outboundStats.packetsSent > t && ((r = !0), this.duration.speaking++), i().reduce(this.inboundStats, (e, t) => ((e.packetsReceived += t.packetsReceived), e), { packetsReceived: 0 }).packetsReceived > n.packetsReceived && ((a = !0), this.duration.listening++), (r || a) && this.duration.participation++;
            }),
            (this.networkQuality = new o.Z()),
            (this.systemResources = new l.Z()),
            (this.inboundStats = {}),
            (this.outboundStats = {
                packetsSent: 0,
                bytesSent: 0,
                packetsLost: 0,
                passthroughCount: 0,
                encryptSuccessCount: 0,
                encryptFailureCount: 0,
                encryptDuration: 0,
                encryptAttempts: 0,
                encryptMaxAttempts: 0,
                encryptMissingKeyCount: 0
            }),
            (this.duration = {
                listening: 0,
                speaking: 0,
                participation: 0,
                connected: 0
            }),
            (this.periodicInboundStats = {});
    }
}
