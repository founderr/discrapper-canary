n.d(t, {
    S: function () {
        return u.S;
    },
    Z: function () {
        return f;
    }
});
var r = n(47120);
var i = n(117806),
    a = n.n(i),
    o = n(510780),
    s = n.n(o),
    l = n(47770),
    u = n(445686),
    c = n(701597),
    d = n(65154);
function _(e, t, n) {
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
let E = 0;
class f extends l.Z {
    destroy() {
        (this.destroyed = !0), this.framerateReducer.destroy(), this.setConnectionState(d.$j.DISCONNECTED), this.emit(u.S.Destroy, this), this.removeAllListeners();
    }
    getLocalMute(e) {
        return this.localMutes[e] || !1;
    }
    getLocalVideoDisabled(e) {
        var t;
        return null !== (t = this.disabledLocalVideos[e]) && void 0 !== t && t;
    }
    setLocalVideoDisabled(e, t) {
        (this.disabledLocalVideos[e] = t), this.emit(u.S.LocalVideoDisabled, e, t);
    }
    getHasActiveVideoOutputSink(e) {
        var t;
        return null !== (t = this.activeOutputSinks[e]) && void 0 !== t && t;
    }
    setHasActiveVideoOutputSink(e, t) {
        (this.isActiveOutputSinksEnabled = !0), (this.activeOutputSinks[e] = t), this.emit(u.S.ActiveSinksChange, e, t);
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
        this.logger.info('Connection state change: '.concat(this.connectionState, ' => ').concat(e)), (this.connectionState = e), this.emit(u.S.ConnectionStateChange, this.connectionState);
    }
    updateVideoQuality(e) {
        var t, n;
        let r = s()(this.videoStreamParameters, (e) => e.quality),
            i = this.videoStreamParameters.length > 1 && (null == r ? void 0 : r.active) && 60 === this.getLocalWant(null == r ? void 0 : r.ssrc);
        this.videoQualityManager.setLqSimulcastStreamActive(null != i && i);
        let { quality: o, constraints: l } = this.applyQualityConstraints({}, this.videoStreamParameters[0].ssrc),
            u = a()(this.videoStreamParameters);
        null != o && ((u[0].maxBitrate = o.bitrateMax), (u[0].minBitrate = o.bitrateMin), (u[0].targetBitrate = null !== (t = o.bitrateTarget) && void 0 !== t ? t : 0), null != o.encode && ((u[0].maxPixelCount = o.encode.pixelCount), (u[0].maxFrameRate = o.encode.framerate))), (this.videoStreamParameters = u);
        for (let e = 1; e < this.videoStreamParameters.length; e++) {
            let { quality: t, constraints: r } = this.applyQualityConstraints({}, this.videoStreamParameters[e].ssrc);
            null != t && ((this.videoStreamParameters[e].maxBitrate = t.bitrateMax), (this.videoStreamParameters[e].minBitrate = t.bitrateMin), (this.videoStreamParameters[e].targetBitrate = null !== (n = t.bitrateTarget) && void 0 !== n ? n : 0), null != t.encode && ((this.videoStreamParameters[e].maxPixelCount = t.encode.pixelCount), (this.videoStreamParameters[e].maxFrameRate = t.encode.framerate))), 100 === this.videoStreamParameters[e].quality && ((l = r), (o = t));
        }
        (l.streamParameters = a()(this.videoStreamParameters)),
            (l.remoteSinkWantsPixelCount = Math.max(
                ...this.videoStreamParameters.map((e) => {
                    var t;
                    return null !== (t = e.maxPixelCount) && void 0 !== t ? t : 0;
                })
            ));
        let c = this.pickProperties(l, e);
        this.logger.info('updateVideoQuality: '.concat(JSON.stringify(c, void 0, 4))), this.updateVideoQualityCore(c, o);
    }
    applyVideoQualityMode(e) {
        if (this.context !== d.Yn.DEFAULT) return;
        let t = c.DM[e];
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
            .filter((e) => (e.type === d.Tr.VIDEO || e.type === d.Tr.SCREEN) && 'string' == typeof e.rid)
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
                        type: d.uA.FIXED,
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
        return null != e && this.emit(u.S.Stats, e), e;
    }
    constructor(e, t) {
        super(), _(this, 'mediaEngineConnectionId', 'WebRTC-'.concat(E++)), _(this, 'context', void 0), _(this, 'userId', void 0), _(this, 'streamUserId', void 0), _(this, 'destroyed', !1), _(this, 'audioSSRC', 0), _(this, 'selfDeaf', !1), _(this, 'localMutes', {}), _(this, 'disabledLocalVideos', {}), _(this, 'localVolumes', {}), _(this, 'isActiveOutputSinksEnabled', !1), _(this, 'activeOutputSinks', {}), _(this, 'videoSupported', !1), _(this, 'useElectronVideo', !1), _(this, 'voiceBitrate', d.dX), _(this, 'remoteSinkWantsMaxFramerate', d.Gs), _(this, 'videoQualityManager', void 0), _(this, 'wantsPriority', new Set()), _(this, 'localSpeakingFlags', {}), _(this, 'videoReady', !1), _(this, 'videoStreamParameters', []), _(this, 'remoteVideoSinkWants', { any: 100 }), _(this, 'localVideoSinkWants', { any: 100 }), _(this, 'connectionState', d.$j.CONNECTING), _(this, 'stats', void 0), _(this, 'onDesktopEncodingOptionsSet', (e, t, n) => {}), _(this, 'experimentFlags', new Set()), _(this, 'framerateReducer', void 0), (this.context = e), (this.userId = t), (this.videoQualityManager = new c.iY(e, this));
        let r = n(988746).Z;
        this.framerateReducer = new r(this, this.videoQualityManager);
    }
}
