n.d(t, {
    Z: function () {
        return g;
    },
    p: function () {
        return r;
    }
});
var r,
    i = n(47120);
var a = n(411104);
var o = n(177593);
var s = n(874141),
    l = n.n(s),
    u = n(565925),
    c = n.n(u),
    d = n(839548),
    _ = n(46973),
    E = n(886848),
    f = n(961304),
    h = n(313232),
    p = n(450279),
    m = n(65154),
    I = n(436620);
function T(e, t, n) {
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
!(function (e) {
    (e[(e.AUDIO_BITRATE = 0)] = 'AUDIO_BITRATE'), (e[(e.VIDEO_RESOLUTION_SCALE = 1)] = 'VIDEO_RESOLUTION_SCALE'), (e[(e.VIDEO_BITRATE = 2)] = 'VIDEO_BITRATE'), (e[(e.VIDEO_FRAMERATE = 3)] = 'VIDEO_FRAMERATE');
})(r || (r = {}));
class g extends d.Z {
    interact() {
        for (let e of ((this.interacted = !0), Object.keys(this.outputs))) this.outputs[e].play();
        this.input.resumeAudio();
    }
    destroy() {
        for (let e of (super.destroy(), Object.keys(this.outputs))) this.destroyOutput(e);
        this.input.destroy();
    }
    async getStats() {
        if (!I.Fo) return null;
        let e = await this.getRawStats(),
            t = null !== this.input.getVideoStreamId();
        return (0, p.Z)(e, this.getUserIdBySsrc, this.remoteVideoSinkWants, this.localVideoSinkWants, t);
    }
    setInputMode(e, t) {
        this.input.setAudioMode(e, {
            delay: t.pttReleaseDelay,
            threshold: t.vadThreshold
        });
    }
    setSelfDeaf(e) {
        for (let t of ((this.selfDeaf = e), Object.keys(this.outputs))) this.outputs[t].mute = e || this.localMutes[t];
    }
    setLocalMute(e, t) {
        (this.localMutes[e] = t), null != this.outputs[e] && (this.outputs[e].mute = this.selfDeaf || t), this.emit(_.Sh.LocalMute, e, t);
    }
    fastUdpReconnect() {}
    getNumFastUdpReconnects() {
        return null;
    }
    wasRemoteDisconnected() {}
    setRemoteVideoSinkWants(e) {
        (this.remoteVideoSinkWants = e), this.updateVideoQuality(m.XR);
    }
    setLocalVideoSinkWants(e) {
        this.localVideoSinkWants = e;
    }
    updateVideoQualityCore(e, t) {
        let n;
        if (!this.videoSupported) return;
        let r = this.input.getVideoStream();
        if (null == r) return;
        if (null != t.capture && null != t.capture.width && null != t.capture.height && null != e.remoteSinkWantsPixelCount && 0 !== e.remoteSinkWantsPixelCount && 0 !== t.capture.height) {
            let r = t.capture.width / t.capture.height,
                i = Math.sqrt(e.remoteSinkWantsPixelCount * r),
                a = t.capture.width / i;
            n = a < 1 ? void 0 : a;
        }
        this.logger.info('BaseWebRTCConnection.updateVideoQuality: resolutionScaleFactor: '.concat(n, ', ') + 'encodingVideoWidth: '.concat(e.encodingVideoWidth, ', remoteSinkWantsMaxFramerate: ').concat(e.remoteSinkWantsMaxFramerate, ', ') + 'encodingVideoMaxBitRate: '.concat(e.encodingVideoMaxBitRate, ', localWant: ').concat(this.getLocalWant())),
            this.setVideoEncoderParameters([
                {
                    parameter: 1,
                    value: n
                },
                {
                    parameter: 2,
                    value: e.encodingVideoMaxBitRate
                },
                {
                    parameter: 3,
                    value: e.remoteSinkWantsMaxFramerate
                }
            ]);
        let i = e.encodingVideoWidth,
            a = e.encodingVideoHeight;
        for (let e of r.getTracks()) {
            var o, s;
            let t = e.getConstraints(),
                n = null === (o = t.width) || void 0 === o ? void 0 : o.max,
                r = null === (s = t.height) || void 0 === s ? void 0 : s.max;
            (n !== i || r !== a) && (this.logger.info('BaseWebRTCConnection.updateVideoQuality: old: '.concat(n, ' x ').concat(r, ', new: ').concat(i, ' x ').concat(a)), (t.width = { max: i }), (t.height = { max: a }), e.applyConstraints(t));
        }
    }
    setCanHavePriority(e, t) {
        let n = this.canHavePriority.size;
        t ? this.canHavePriority.add(e) : this.canHavePriority.delete(e), this.canHavePriority.size !== n && this.recalculatePrioritySpeakers();
    }
    setSpeakingFlags(e, t) {
        null != t && t !== m.Dg.NONE ? (this.localSpeakingFlags[e] = t) : delete this.localSpeakingFlags[e];
        let n = this.outputs[e];
        null != n && n.setSpeakingFlags(t);
        let r = this.wantsPriority.size,
            i = m.Dg.VOICE | m.Dg.PRIORITY;
        (t & i) === i ? this.wantsPriority.add(e) : this.wantsPriority.delete(e), this.wantsPriority.size !== r && this.recalculatePrioritySpeakers();
    }
    clearAllSpeaking() {
        for (let e in this.localSpeakingFlags) delete this.localSpeakingFlags[e], null != this.outputs[e] && this.outputs[e].setSpeakingFlags(m.Dg.NONE);
    }
    setOutputVolume(e) {
        for (let t of ((this.outputVolume = e), Object.keys(this.outputs))) this.outputs[t].volume = this.computeLocalVolume(t);
    }
    setSinkId(e) {
        for (let t of ((this.sinkId = e), Object.keys(this.outputs))) this.outputs[t].setSinkId(e);
    }
    setStreamParameters(e) {
        return new Promise((t, n) => {
            for (let t of this.videoStreamParameters) {
                let r = e.findIndex((e) => e.rid === t.rid);
                if (-1 === r) {
                    n(Error('Invalid rid'));
                    return;
                }
                !c()(this.videoStreamParameters[r], e[r]) && (this.videoStreamParameters[r] = { ...e[r] });
            }
            t();
        });
    }
    recalculatePrioritySpeakers() {
        (this.prioritySpeakers = new Set(Array.from(this.wantsPriority).filter((e) => this.canHavePriority.has(e)))),
            l()(this.outputs, (e, t) => {
                e.volume = this.computeLocalVolume(t);
            });
    }
    setBitRate(e) {
        this.voiceBitrate = e;
    }
    setLocalVolume(e, t) {
        (this.localVolumes[e] = t), null != this.outputs[e] && (this.outputs[e].volume = this.computeLocalVolume(e));
    }
    getLocalVolume(e) {
        let t = this.localVolumes[e];
        return null == t && (t = this.context === m.Yn.DEFAULT ? m.Qx : m.Yh), null != t ? t : m.Qx;
    }
    computeLocalVolume(e) {
        let t = (this.outputVolume * this.getLocalVolume(e)) / m.Qx;
        return this.prioritySpeakers.size > 0 && !this.prioritySpeakers.has(e) ? t * m.jg : t;
    }
    hasDesktopSource() {
        var e;
        return null === (e = this.input) || void 0 === e ? void 0 : e.hasDesktopSource();
    }
    createOutput(e, t) {
        if (t.discordIsTearingDown) {
            this.logger.info('BaseWebRTCConnection.createOutput: ignoring track being torn down: '.concat(t.id));
            return;
        }
        let n = this.outputs[e];
        if (null == n) {
            var r;
            ((n = new f.Z(e, this.audioContext)).mute = this.selfDeaf || this.localMutes[e]),
                (n.volume = this.computeLocalVolume(e)),
                n.on(f.X.Speaking, (t) => this.emit(_.Sh.Speaking, e, t, this.audioSSRC)),
                n.on(f.X.Video, (t) => {
                    var n;
                    return this.emitUnsafe(_.Sh.Video, e, t, this.audioSSRC, this.videoStreamParameters[0].ssrc, null !== (n = this.videoStreamParameters[0].rtxSsrc) && void 0 !== n ? n : 0, this.videoStreamParameters);
                }),
                n.on(f.X.InteractionRequired, (e) => this.emit(_.Sh.InteractionRequired, e)),
                n.setSpeakingFlags(null !== (r = this.localSpeakingFlags[e]) && void 0 !== r ? r : m.Dg.NONE),
                n.setSinkId(this.sinkId),
                (this.outputs[e] = n);
        }
        n.addTrack(t);
    }
    destroyOutput(e, t) {
        let n = this.outputs[e];
        null != n && (null == t || 0 === n.removeTrack(t)) && (n.destroy(), delete this.outputs[e]);
    }
    setSilenceThreshold(e) {
        this.silenceThreshold = e;
    }
    setLocalPan(e, t, n) {}
    setExperimentalEncoders(e) {}
    setHardwareH264(e) {}
    setSoftwareH264(e) {}
    setQoS(e) {}
    isAttenuating() {
        return !1;
    }
    setAttenuation(e, t, n) {}
    setEncryption(e, t) {}
    setMinimumJitterBufferLevel(e) {}
    setPostponeDecodeLevel(e) {}
    setReconnectInterval(e) {}
    setKeyframeInterval(e) {}
    startSamplesLocalPlayback(e, t, n, r) {}
    stopSamplesLocalPlayback(e) {}
    stopAllSamplesLocalPlayback() {}
    setVideoQualityMeasurement(e) {}
    setVideoEncoderExperiments(e) {}
    setBandwidthEstimationExperiments(e) {}
    prepareSecureFramesTransition(e, t, n) {}
    prepareSecureFramesEpoch(e, t, n) {}
    executeSecureFramesTransition(e) {}
    getMLSKeyPackage(e) {}
    updateMLSExternalSender(e) {}
    processMLSProposals(e, t) {}
    prepareMLSCommitTransition(e, t, n) {}
    processMLSWelcome(e, t, n) {}
    getMLSPairwiseFingerprint(e, t, n) {}
    constructor(e, t, n, r) {
        var i;
        super(e, t),
            (i = this),
            T(this, 'input', void 0),
            T(this, 'silenced', !1),
            T(this, 'interacted', !1),
            T(this, 'outputVolume', m.Qx),
            T(this, 'sinkId', m.w5),
            T(this, 'lastPingTime', 0),
            T(this, 'outputs', {}),
            T(this, 'webrtcStats', new h.r()),
            T(this, 'silenceThreshold', -100),
            T(this, 'canHavePriority', new Set()),
            T(this, 'prioritySpeakers', new Set()),
            T(this, 'audioContext', void 0),
            T(this, 'setEchoCancellation', (e) => this.input.setEchoCancellation(e)),
            T(this, 'setNoiseSuppression', (e) => this.input.setNoiseSuppression(e)),
            T(this, 'setNoiseCancellation', (e) => this.input.setNoiseCancellation(e)),
            T(this, 'setAutomaticGainControl', (e) => this.input.setAutomaticGainControl(e)),
            T(this, 'setAudioSource', (e) => this.input.setAudioSource(e)),
            T(this, 'setVideoSource', (e) => this.input.setVideoSource(e)),
            T(this, 'setDesktopInput', (e) => this.input.setDesktop(e)),
            T(this, 'setForceAudioInput', function (e) {
                return arguments.length > 1 && void 0 !== arguments[1] && arguments[1], i.input.setPTTActive(e);
            }),
            T(this, 'setSelfMute', (e) => {
                this.input.setMute(e), this.emit(_.Sh.Mute, e);
            }),
            T(this, 'handleAddVideoTrack', () => {
                this.updateVideoQuality();
            }),
            T(this, 'handleAudioPermission', (e) => this.emit(_.Sh.AudioPermission, e)),
            T(this, 'handleVideoPermission', (e) => this.emit(_.Sh.VideoPermission, e)),
            T(this, 'handleVideo', (e) => {
                var t;
                return this.emit(_.Sh.Video, this.userId, e, this.audioSSRC, this.videoStreamParameters[0].ssrc, null !== (t = this.videoStreamParameters[0].rtxSsrc) && void 0 !== t ? t : 0, this.videoStreamParameters);
            }),
            T(this, 'handleDesktopSourceEnd', () => this.emit(_.Sh.DesktopSourceEnd)),
            T(this, 'handleStream', (e) => this.setStream(e)),
            T(this, 'handleVoiceActivity', (e) => {
                let t = e <= this.silenceThreshold;
                this.silenced !== t && !this.input.mute() && ((this.silenced = t), this.emit(_.Sh.Silence, t));
            }),
            T(this, 'handleNewListener', (e) => {
                switch (e) {
                    case _.Sh.Video:
                        this.videoReady && setImmediate(() => this.handleVideo(this.input.getVideoStreamId()));
                        break;
                    case _.Sh.ConnectionStateChange:
                        this.emit(e, this.connectionState);
                        break;
                    case _.Sh.InteractionRequired:
                        !this.interacted && 'suspended' === this.input.getAudioState() && setImmediate(() => this.emit(e, !0));
                }
            }),
            T(this, 'handleInputSpeaking', (e) => {
                this.emit(_.Sh.Speaking, this.userId, e ? m.Dg.VOICE : m.Dg.NONE, this.audioSSRC);
            }),
            T(this, 'handleAudioContextStateChange', () => {
                !this.interacted && 'running' === this.input.getAudioState() && (this.interact(), this.emit(_.Sh.InteractionRequired, !1));
            }),
            T(this, 'handleStats', (e) => {
                if (this.connectionState === m.$j.DISCONNECTED) {
                    this.off(_.Sh.Stats, this.handleStats);
                    return;
                }
                null != e && (this.webrtcStats.update(e), (this.stats = e), Date.now() - this.lastPingTime >= m.$B && (this.emit(_.Sh.Ping, e.transport.ping), (this.lastPingTime = Date.now())));
            }),
            (this.input = new E.Z(n)),
            n.addEventListener('statechange', this.handleAudioContextStateChange),
            (this.audioContext = n),
            this.input.on(E.G.AudioPermission, this.handleAudioPermission),
            this.input.on(E.G.VideoPermission, this.handleVideoPermission),
            this.input.on(E.G.Video, this.handleVideo),
            this.input.on(E.G.Mute, (e) => this.emit(_.Sh.Mute, e)),
            this.input.on(E.G.Stream, this.handleStream),
            this.input.on(E.G.DesktopSourceEnd, this.handleDesktopSourceEnd),
            this.input.on(E.G.Speaking, this.handleInputSpeaking),
            this.input.on(E.G.AddVideoTrack, this.handleAddVideoTrack),
            this.input.on(E.G.Video, this.handleAddVideoTrack),
            this.on('newListener', this.handleNewListener),
            this.initializeStreamParameters(r);
    }
}
