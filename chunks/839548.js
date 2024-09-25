n.d(t, {
    S: function () {
        return s.S;
    },
    Z: function () {
        return _;
    }
});
var r = n(47120);
var i = n(117806),
    a = n.n(i),
    o = n(47770),
    s = n(445686),
    l = n(701597),
    u = n(65154);
function c(e, t, n) {
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
let d = 0;
class _ extends o.Z {
    destroy() {
        (this.destroyed = !0), this.framerateReducer.destroy(), this.setConnectionState(u.$j.DISCONNECTED), this.emit(s.S.Destroy, this), this.removeAllListeners();
    }
    getLocalMute(e) {
        return this.localMutes[e] || !1;
    }
    getLocalVideoDisabled(e) {
        var t;
        return null !== (t = this.disabledLocalVideos[e]) && void 0 !== t && t;
    }
    setLocalVideoDisabled(e, t) {
        (this.disabledLocalVideos[e] = t), this.emit(s.S.LocalVideoDisabled, e, t);
    }
    getHasActiveVideoOutputSink(e) {
        var t;
        return null !== (t = this.activeOutputSinks[e]) && void 0 !== t && t;
    }
    setHasActiveVideoOutputSink(e, t) {
        (this.isActiveOutputSinksEnabled = !0), (this.activeOutputSinks[e] = t), this.emit(s.S.ActiveSinksChange, e, t);
    }
    getActiveOutputSinkTrackingEnabled() {
        return this.isActiveOutputSinksEnabled;
    }
    setUseElectronVideo(e) {
        this.useElectronVideo = e;
    }
    setClipRecordUser(e, t, n) {}
    setViewerSideClip(e) {}
    setRemoteAudioHistory(e) {}
    setClipsKeyFrameInterval(e) {}
    setQualityDecoupling(e) {}
    presentDesktopSourcePicker(e) {}
    getStreamParameters() {
        return a()(this.videoStreamParameters);
    }
    setExperimentFlag(e, t) {
        t ? this.experimentFlags.add(e) : this.experimentFlags.delete(e);
    }
    setConnectionState(e) {
        this.logger.info('Connection state change: '.concat(this.connectionState, ' => ').concat(e)), (this.connectionState = e), this.emit(s.S.ConnectionStateChange, this.connectionState);
    }
    updateVideoQuality(e) {
        var t, n;
        let { quality: r, constraints: i } = this.applyQualityConstraints({}, this.videoStreamParameters[0].ssrc),
            o = a()(this.videoStreamParameters);
        null != r && ((o[0].maxBitrate = r.bitrateMax), (o[0].minBitrate = r.bitrateMin), (o[0].targetBitrate = null !== (t = r.bitrateTarget) && void 0 !== t ? t : 0), null != r.encode && ((o[0].maxPixelCount = r.encode.pixelCount), (o[0].maxFrameRate = r.encode.framerate))), (this.videoStreamParameters = o);
        for (let e = 1; e < this.videoStreamParameters.length; e++) {
            let { quality: t, constraints: a } = this.applyQualityConstraints({}, this.videoStreamParameters[e].ssrc);
            null != t && ((this.videoStreamParameters[e].maxBitrate = t.bitrateMax), (this.videoStreamParameters[e].minBitrate = t.bitrateMin), (this.videoStreamParameters[e].targetBitrate = null !== (n = t.bitrateTarget) && void 0 !== n ? n : 0), null != t.encode && ((this.videoStreamParameters[e].maxPixelCount = t.encode.pixelCount), (this.videoStreamParameters[e].maxFrameRate = t.encode.framerate))), 100 === this.videoStreamParameters[e].quality && ((i = a), (r = t));
        }
        (i.streamParameters = a()(this.videoStreamParameters)),
            (i.remoteSinkWantsPixelCount = Math.max(
                ...this.videoStreamParameters.map((e) => {
                    var t;
                    return null !== (t = e.maxPixelCount) && void 0 !== t ? t : 0;
                })
            ));
        let s = this.pickProperties(i, e);
        this.logger.info('updateVideoQuality: '.concat(JSON.stringify(s, void 0, 4))), this.updateVideoQualityCore(s, r);
    }
    applyVideoQualityMode(e) {
        if (this.context !== u.Yn.DEFAULT) return;
        let t = l.DM[e];
        this.videoQualityManager.setQualityOverwrite(t), this.updateVideoQuality();
    }
    overwriteQualityForTesting(e) {
        this.videoQualityManager.setQualityOverwrite(e), this.updateVideoQuality();
    }
    applyQualityConstraints() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = arguments.length > 1 ? arguments[1] : void 0;
        return this.videoQualityManager.applyQualityConstraints(e, t);
    }
    pickProperties(e, t) {
        if (null == t || null == e) return e;
        let n = {};
        for (let r of t) n[r] = e[r];
        return n;
    }
    initializeStreamParameters(e) {
        let t = this.videoQualityManager.getQuality();
        this.videoStreamParameters = e
            .filter((e) => (e.type === u.Tr.VIDEO || e.type === u.Tr.SCREEN) && 'string' == typeof e.rid)
            .map((e) => {
                var n, r, i, a;
                return {
                    type: e.type,
                    active: e.active,
                    rid: e.rid,
                    ssrc: e.ssrc,
                    rtxSsrc: e.rtxSsrc,
                    quality: e.quality,
                    maxBitrate: (null !== (a = e.quality) && void 0 !== a ? a : 100) < 100 ? t.bitrateMax / 4 : t.bitrateMax,
                    maxFrameRate: null === (n = t.capture) || void 0 === n ? void 0 : n.framerate,
                    maxResolution: {
                        type: u.uA.FIXED,
                        width: null === (r = t.capture) || void 0 === r ? void 0 : r.width,
                        height: null === (i = t.capture) || void 0 === i ? void 0 : i.height
                    },
                    profile: e.profile
                };
            });
    }
    getLocalWant(e) {
        var t, n;
        let r = this.remoteVideoSinkWants[null !== (n = null != e ? e : null === (t = this.videoStreamParameters[0]) || void 0 === t ? void 0 : t.ssrc) && void 0 !== n ? n : 0];
        if (null != r && r > 0) return r;
        let i = this.remoteVideoSinkWants.any;
        return null != i && i > 0 ? i : 100;
    }
    getRemoteVideoSinkWants(e) {
        return this.remoteVideoSinkWants[e];
    }
    async emitStats() {
        let e = await this.getStats();
        return null != e && this.emit(s.S.Stats, e), e;
    }
    constructor(e, t) {
        super(), c(this, 'mediaEngineConnectionId', 'WebRTC-'.concat(d++)), c(this, 'context', void 0), c(this, 'userId', void 0), c(this, 'streamUserId', void 0), c(this, 'destroyed', !1), c(this, 'audioSSRC', 0), c(this, 'selfDeaf', !1), c(this, 'localMutes', {}), c(this, 'disabledLocalVideos', {}), c(this, 'localVolumes', {}), c(this, 'isActiveOutputSinksEnabled', !1), c(this, 'activeOutputSinks', {}), c(this, 'videoSupported', !1), c(this, 'useElectronVideo', !1), c(this, 'voiceBitrate', u.dX), c(this, 'remoteSinkWantsMaxFramerate', u.Gs), c(this, 'videoQualityManager', void 0), c(this, 'wantsPriority', new Set()), c(this, 'localSpeakingFlags', {}), c(this, 'videoReady', !1), c(this, 'videoStreamParameters', []), c(this, 'remoteVideoSinkWants', { any: 100 }), c(this, 'localVideoSinkWants', { any: 100 }), c(this, 'connectionState', u.$j.CONNECTING), c(this, 'stats', void 0), c(this, 'onDesktopEncodingOptionsSet', (e, t, n) => {}), c(this, 'experimentFlags', new Set()), c(this, 'framerateReducer', void 0), (this.context = e), (this.userId = t), (this.videoQualityManager = new l.iY(e, this));
        let r = n(988746).Z;
        this.framerateReducer = new r(this, this.videoQualityManager);
    }
}
