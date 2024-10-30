n.d(t, {
    Yy: function () {
        return g;
    },
    ZP: function () {
        return O;
    },
    ai: function () {
        return r;
    }
}),
    n(47120),
    n(653041);
var r,
    i,
    a = n(392711),
    s = n.n(a),
    o = n(47770),
    l = n(46973),
    u = n(966146),
    c = n(902704),
    d = n(846519),
    _ = n(621012),
    E = n(314897),
    f = n(526167),
    h = n(70956),
    p = n(709054),
    I = n(798681),
    m = n(981631),
    T = n(65154);
function S(e, t, n) {
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
let g = { any: 100 },
    A = 30 * h.Z.Millis.SECOND,
    N = 120 * h.Z.Millis.SECOND,
    R = -1 !== (0, f.hY)();
((i = r || (r = {})).UserSSRCUpdate = 'user-ssrc-update'), (i.Update = 'update');
class O extends o.Z {
    getWantsLevel() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            t = this.getVideoParticipantCount();
        return this.ladder.getMaxSinkValue(t, e);
    }
    userVideoDisabled(e) {
        return this.offscreenDisabledUsers[e];
    }
    isOneToOneCall() {
        return 1 === this.otherUsers.size;
    }
    updateCallUserIds(e) {
        e.delete(E.default.getId()), (this.otherUsers = e), this.update();
    }
    shouldReceiveFromUser(e) {
        var t, n;
        let r = !((null === (t = this.connection) || void 0 === t ? void 0 : t.getLocalVideoDisabled(e)) || (this.userVideoDisabled(e) && (null === (n = this.videoHealthManager) || void 0 === n ? void 0 : n.getCurrentVideoToggleState(e)) !== m.ZUi.AUTO_PROBING));
        return I.w.isIncomingVideoEnabled() && r;
    }
    getAudioSSRCs() {
        return this.audioSsrcs;
    }
    setConnection(e) {
        var t, n, r, i, a, s;
        let o = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        null === (t = this.connection) || void 0 === t || t.removeListener(l.Sh.LocalVideoDisabled, this.handleLocalVideoDisabled), null === (n = this.connection) || void 0 === n || n.removeListener(l.Sh.LocalMute, this.handleLocalMute), null === (r = this.connection) || void 0 === r || r.removeListener(l.Sh.ActiveSinksChange, this.delayedUpdate), (this.connection = e), null === (i = this.connection) || void 0 === i || i.addListener(l.Sh.LocalVideoDisabled, this.handleLocalVideoDisabled), null === (a = this.connection) || void 0 === a || a.addListener(l.Sh.LocalMute, this.handleLocalMute), null === (s = this.connection) || void 0 === s || s.addListener(l.Sh.ActiveSinksChange, this.delayedUpdate), o && this.update();
    }
    setAudioSSRC(e, t) {
        return t > 0 ? (this.audioSsrcs[e] = t) : delete this.audioSsrcs[e], this.update();
    }
    setVideoSSRCs(e, t) {
        let n = t
            .filter((e) => {
                var t;
                return e.active && (null !== (t = e.ssrc) && void 0 !== t ? t : 0) > 0;
            })
            .map((e) => {
                var t;
                return {
                    quality: null !== (t = e.quality) && void 0 !== t ? t : 100,
                    ssrc: e.ssrc
                };
            });
        if (n.length > 0) (this.videoSsrcs[e] = n), this.participants.add(e);
        else {
            if (void 0 !== this.videoSsrcs[e]) for (let { ssrc: t } of this.videoSsrcs[e]) delete this.framesReceived[t];
            delete this.remoteVideoSsrcs[e], delete this.videoSsrcs[e], this.participants.delete(e), this.emit('user-ssrc-update', e, this.audioSsrcs[e], []);
        }
        return this.update(Array.from(this.participants));
    }
    setFirstFrameReceived(e) {
        return (this.framesReceived[e] = !0), this.update();
    }
    setStreamId(e, t) {
        return null != t ? (this.streamIds[e] = t) : (e in this.streamIds && delete this.streamPixelCounts[this.streamIds[e]], delete this.streamIds[e]), this.update();
    }
    destroyUser(e) {
        return delete this.audioSsrcs[e], delete this.videoSsrcs[e], this.participants.delete(e), delete this.streamPixelCounts[this.streamIds[e]], delete this.streamIds[e], this.update(Array.from(this.participants));
    }
    reset() {
        this.setConnection(null, !1), (this.audioSsrcs = {}), (this.videoSsrcs = {}), (this.remoteVideoSsrcs = {}), (this.framesReceived = {}), (this.streamIds = {}), (this.streamPixelCounts = {}), (this.latestWants = g), I.w.off(I.e.IncomingVideoEnabledChanged, this.incomingVideoEnabledChanged);
    }
    setSelectedParticipant(e) {
        if (e === this.selectedParticipantId) return this.latestWants;
        let t = [];
        if ((null != this.selectedParticipantId && this.selectedParticipantId !== this.userId && t.push(this.selectedParticipantId), null != e)) {
            if (this.participants.has(e)) (this.selectedParticipantId = e), t.push(e);
            else {
                if (this.userId !== e) return console.warn('Participant not found: '.concat(e)), this.latestWants;
                this.selectedParticipantId = e;
            }
        } else this.selectedParticipantId = null;
        return this.update(
            t.filter((e) => {
                var t;
                return (null === (t = this.videoSsrcs[e]) || void 0 === t ? void 0 : t.length) > 1;
            })
        );
    }
    setPipOpen(e) {
        return ((this.pipOpen = e), null != this.selectedParticipantId) ? this.update([this.selectedParticipantId]) : this.latestWants;
    }
    setAppBackgrounded(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        for (let [r, i] of p.default.entries(this.streamIds))
            if (((this.offscreenDisabledUsers[r] = e), null != i)) {
                var n;
                let r = !e || t;
                null === (n = this.connection) || void 0 === n || n.setHasActiveVideoOutputSink(i, r);
            }
        return this.update();
    }
    getOffscreenDisabledUsers() {
        return this.offscreenDisabledUsers;
    }
    setSimulcastDebugOverride(e, t) {
        this.simulcastDebugOverrides.set(e, t), this.update();
    }
    setVideoSize(e, t) {
        t > 0 ? (this.streamPixelCounts[e] = t) : delete this.streamPixelCounts[e], this.delayedUpdate();
    }
    getVideoParticipantCount() {
        let e = 0;
        for (let n of Object.keys(this.videoSsrcs)) {
            var t;
            !(null === (t = this.connection) || void 0 === t ? void 0 : t.getLocalVideoDisabled(n)) && e++;
        }
        return e;
    }
    getOffscreenTimeoutMs() {
        return this.isStageChannel ? N : A;
    }
    getSimulcastOverrideQuality(e) {
        return this.simulcastDebugOverrides.has(e) ? this.simulcastDebugOverrides.get(e) : T.Z.NO_OVERRIDE;
    }
    constructor(e, t, n, r = new u.x()) {
        var i;
        super(),
            (i = this),
            S(this, 'userId', void 0),
            S(this, 'isStageChannel', void 0),
            S(this, 'supportsSeamless', void 0),
            S(this, 'ladder', void 0),
            S(this, 'connection', void 0),
            S(this, 'audioSsrcs', void 0),
            S(this, 'videoSsrcs', void 0),
            S(this, 'remoteVideoSsrcs', void 0),
            S(this, 'framesReceived', void 0),
            S(this, 'streamIds', void 0),
            S(this, 'offscreenUsers', void 0),
            S(this, 'offscreenDisabledUsers', void 0),
            S(this, 'streamPixelCounts', void 0),
            S(this, 'latestWants', void 0),
            S(this, 'participants', void 0),
            S(this, 'selectedParticipantId', void 0),
            S(this, 'delayedCall', void 0),
            S(this, 'offscreenTimeout', void 0),
            S(this, 'pipOpen', void 0),
            S(this, 'simulcastDebugOverrides', void 0),
            S(this, 'videoHealthManager', void 0),
            S(this, 'otherUsers', void 0),
            S(this, 'delayedUpdate', void 0),
            S(this, 'addLru', void 0),
            S(this, 'updateOffscreenUsers', void 0),
            S(this, 'handleLocalVideoDisabled', void 0),
            S(this, 'handleLocalMute', void 0),
            S(this, 'update', void 0),
            S(this, 'incomingVideoEnabledChanged', void 0),
            (this.userId = e),
            (this.isStageChannel = t),
            (this.supportsSeamless = n),
            (this.ladder = r),
            (this.connection = null),
            (this.audioSsrcs = {}),
            (this.videoSsrcs = {}),
            (this.remoteVideoSsrcs = {}),
            (this.framesReceived = {}),
            (this.streamIds = {}),
            (this.offscreenUsers = {}),
            (this.offscreenDisabledUsers = {}),
            (this.streamPixelCounts = {}),
            (this.latestWants = g),
            (this.participants = new Set()),
            (this.selectedParticipantId = null),
            (this.pipOpen = !1),
            (this.simulcastDebugOverrides = new Map()),
            (this.videoHealthManager = null),
            (this.otherUsers = new Set()),
            (this.delayedUpdate = () => {
                this.delayedCall.delay();
            }),
            (this.addLru = (e, t, n) => {
                if ((n.push(e), n.length <= 3)) return;
                let r = -1,
                    i = -1;
                for (let e = 0; e < n.length; e++) {
                    let a = n[e],
                        s = t - this.offscreenUsers[a];
                    s > r && ((r = s), (i = e));
                }
                (this.offscreenDisabledUsers[n[i]] = !0), n.splice(i, 1);
            }),
            (this.updateOffscreenUsers = () => {
                var e, t;
                if (!(null === (e = this.connection) || void 0 === e ? void 0 : e.getActiveOutputSinkTrackingEnabled())) return;
                let n = Date.now(),
                    r = [];
                for (let [e, i] of p.default.entries(this.streamIds)) {
                    if (null != i) (null === (t = this.connection) || void 0 === t ? void 0 : t.getHasActiveVideoOutputSink(i)) ? (delete this.offscreenUsers[e], delete this.offscreenDisabledUsers[e]) : null == this.offscreenUsers[e] ? ((this.offscreenUsers[e] = n), this.addLru(e, n, r)) : !this.offscreenDisabledUsers[e] && (n - this.offscreenUsers[e] >= this.getOffscreenTimeoutMs() ? (this.offscreenDisabledUsers[e] = !0) : this.addLru(e, n, r));
                }
                if (r.length > 0) {
                    let e = n + this.getOffscreenTimeoutMs();
                    for (let t of r) e = Math.min(e, this.offscreenUsers[t] + this.getOffscreenTimeoutMs());
                    this.offscreenTimeout.start(e - n, this.update);
                } else this.offscreenTimeout.stop();
            }),
            (this.handleLocalVideoDisabled = (e, t) => {
                this.update();
            }),
            (this.handleLocalMute = (e, t) => {
                this.update();
            }),
            (this.update = function () {
                var e, t;
                let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    r = i.getWantsLevel(),
                    a = { any: r };
                i.updateOffscreenUsers();
                let { enabledSingle: o } = _.m.getCurrentConfig({ location: 'RTCMediaSinkWantsManager.update' }, { autoTrackExposure: !1 }),
                    l = o && i.isOneToOneCall() && !i.isStageChannel;
                for (let [t, s] of p.default.entries(i.videoSsrcs)) {
                    let o = [],
                        u = !1,
                        d = null !== (e = i.streamPixelCounts[i.streamIds[t]]) && void 0 !== e ? e : 0,
                        _ = i.getWantsLevel(d),
                        E = s[0].ssrc;
                    if (i.shouldReceiveFromUser(t)) {
                        let e = t === i.selectedParticipantId && 100 !== r && !i.pipOpen;
                        if (s.length > 1) {
                            for (let t of s) 100 === t.quality ? (e ? ((a[t.ssrc] = 100), (E = t.ssrc)) : (a[t.ssrc] = 0)) : e ? (a[t.ssrc] = 0) : (l && (a[t.ssrc] = _), (E = t.ssrc));
                            if (i.supportsSeamless && !i.framesReceived[E]) for (let e of ((u = !0), (o = [E]), s)) e.ssrc !== E && i.framesReceived[e.ssrc] && (100 === e.quality ? (a[e.ssrc] = 100) : (a[e.ssrc] = l ? _ : r), o.push(e.ssrc));
                        } else e ? (a[E] = 100) : l && (a[E] = _);
                    } else for (let e of s) a[e.ssrc] = 0;
                    let f = i.getSimulcastOverrideQuality(t);
                    for (let e of (f === T.Z.HIGH ? (a[E] = 100) : f === T.Z.LOW && (a[E] = 50), (!i.supportsSeamless || !u) && (o = [E]), s)) !o.includes(e.ssrc) && delete i.framesReceived[e.ssrc];
                    (n.includes(t) || (void 0 !== i.remoteVideoSsrcs[t] && !(0, c.Z)(i.remoteVideoSsrcs[t], o))) && ((i.remoteVideoSsrcs[t] = [...o]), i.emit('user-ssrc-update', t, i.audioSsrcs[t], o));
                }
                for (let [e, n] of Object.entries(i.audioSsrcs)) (null === (t = i.connection) || void 0 === t ? void 0 : t.getLocalMute(e)) && (a[n] = 0);
                return R ? i.latestWants : (null != i.connection && !s().isEqual(i.latestWants, a) && ((i.latestWants = a), i.emit('update', a)), a);
            }),
            (this.incomingVideoEnabledChanged = () => {
                this.update();
            }),
            (this.delayedCall = new d.sW(100, this.update)),
            (this.offscreenTimeout = new d.V7()),
            I.w.on(I.e.IncomingVideoEnabledChanged, this.incomingVideoEnabledChanged);
    }
}
