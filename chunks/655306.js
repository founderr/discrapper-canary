r.d(n, {
    Yy: function () {
        return A;
    },
    ZP: function () {
        return L;
    },
    ai: function () {
        return i;
    }
});
var i,
    a = r(47120);
var s = r(653041);
var o = r(392711),
    l = r.n(o),
    u = r(47770),
    c = r(46973),
    d = r(966146),
    f = r(902704),
    _ = r(846519),
    h = r(621012),
    p = r(314897),
    m = r(526167),
    g = r(70956),
    E = r(709054),
    v = r(798681),
    I = r(981631),
    T = r(65154);
function b(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let y = 100,
    S = 0,
    A = { any: 100 },
    N = 100,
    C = 3,
    R = 30 * g.Z.Millis.SECOND,
    O = 120 * g.Z.Millis.SECOND,
    D = -1 !== (0, m.hY)();
!(function (e) {
    (e.UserSSRCUpdate = 'user-ssrc-update'), (e.Update = 'update');
})(i || (i = {}));
class L extends u.Z {
    getWantsLevel() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            n = this.getVideoParticipantCount();
        return this.ladder.getMaxSinkValue(n, e);
    }
    userVideoDisabled(e) {
        return this.offscreenDisabledUsers[e];
    }
    isOneToOneCall() {
        return 1 === this.otherUsers.size;
    }
    updateCallUserIds(e) {
        e.delete(p.default.getId()), (this.otherUsers = e), this.update();
    }
    shouldReceiveFromUser(e) {
        var n, r;
        let i = !((null === (n = this.connection) || void 0 === n ? void 0 : n.getLocalVideoDisabled(e)) || (this.userVideoDisabled(e) && (null === (r = this.videoHealthManager) || void 0 === r ? void 0 : r.getCurrentVideoToggleState(e)) !== I.ZUi.AUTO_PROBING));
        return v.w.isIncomingVideoEnabled() && i;
    }
    getAudioSSRCs() {
        return this.audioSsrcs;
    }
    setConnection(e) {
        var n, r, i, a, s, o;
        let l = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        null === (n = this.connection) || void 0 === n || n.removeListener(c.Sh.LocalVideoDisabled, this.handleLocalVideoDisabled), null === (r = this.connection) || void 0 === r || r.removeListener(c.Sh.LocalMute, this.handleLocalMute), null === (i = this.connection) || void 0 === i || i.removeListener(c.Sh.ActiveSinksChange, this.delayedUpdate), (this.connection = e), null === (a = this.connection) || void 0 === a || a.addListener(c.Sh.LocalVideoDisabled, this.handleLocalVideoDisabled), null === (s = this.connection) || void 0 === s || s.addListener(c.Sh.LocalMute, this.handleLocalMute), null === (o = this.connection) || void 0 === o || o.addListener(c.Sh.ActiveSinksChange, this.delayedUpdate), l && this.update();
    }
    setAudioSSRC(e, n) {
        return n > 0 ? (this.audioSsrcs[e] = n) : delete this.audioSsrcs[e], this.update();
    }
    setVideoSSRCs(e, n) {
        let r = n
            .filter((e) => {
                var n;
                return e.active && (null !== (n = e.ssrc) && void 0 !== n ? n : 0) > 0;
            })
            .map((e) => {
                var n;
                return {
                    quality: null !== (n = e.quality) && void 0 !== n ? n : 100,
                    ssrc: e.ssrc
                };
            });
        if (r.length > 0) (this.videoSsrcs[e] = r), this.participants.add(e);
        else {
            if (void 0 !== this.videoSsrcs[e]) for (let { ssrc: n } of this.videoSsrcs[e]) delete this.framesReceived[n];
            delete this.remoteVideoSsrcs[e], delete this.videoSsrcs[e], this.participants.delete(e), this.emit('user-ssrc-update', e, this.audioSsrcs[e], []);
        }
        return this.update(Array.from(this.participants));
    }
    setFirstFrameReceived(e) {
        return (this.framesReceived[e] = !0), this.update();
    }
    setStreamId(e, n) {
        return null != n ? (this.streamIds[e] = n) : (e in this.streamIds && delete this.streamPixelCounts[this.streamIds[e]], delete this.streamIds[e]), this.update();
    }
    destroyUser(e) {
        return delete this.audioSsrcs[e], delete this.videoSsrcs[e], this.participants.delete(e), delete this.streamPixelCounts[this.streamIds[e]], delete this.streamIds[e], this.update(Array.from(this.participants));
    }
    reset() {
        this.setConnection(null, !1), (this.audioSsrcs = {}), (this.videoSsrcs = {}), (this.remoteVideoSsrcs = {}), (this.framesReceived = {}), (this.streamIds = {}), (this.streamPixelCounts = {}), (this.latestWants = A), v.w.off(v.e.IncomingVideoEnabledChanged, this.incomingVideoEnabledChanged);
    }
    setSelectedParticipant(e) {
        if (e === this.selectedParticipantId) return this.latestWants;
        let n = [];
        if ((null != this.selectedParticipantId && this.selectedParticipantId !== this.userId && n.push(this.selectedParticipantId), null != e)) {
            if (this.participants.has(e)) (this.selectedParticipantId = e), n.push(e);
            else {
                if (this.userId !== e) return console.warn('Participant not found: '.concat(e)), this.latestWants;
                this.selectedParticipantId = e;
            }
        } else this.selectedParticipantId = null;
        return this.update(
            n.filter((e) => {
                var n;
                return (null === (n = this.videoSsrcs[e]) || void 0 === n ? void 0 : n.length) > 1;
            })
        );
    }
    setPipOpen(e) {
        return ((this.pipOpen = e), null != this.selectedParticipantId) ? this.update([this.selectedParticipantId]) : this.latestWants;
    }
    getOffscreenDisabledUsers() {
        return this.offscreenDisabledUsers;
    }
    setSimulcastDebugOverride(e, n) {
        this.simulcastDebugOverrides.set(e, n), this.update();
    }
    setVideoSize(e, n) {
        n > 0 ? (this.streamPixelCounts[e] = n) : delete this.streamPixelCounts[e], this.delayedUpdate();
    }
    getVideoParticipantCount() {
        let e = 0;
        for (let r of Object.keys(this.videoSsrcs)) {
            var n;
            !(null === (n = this.connection) || void 0 === n ? void 0 : n.getLocalVideoDisabled(r)) && e++;
        }
        return e;
    }
    getOffscreenTimeoutMs() {
        return this.isStageChannel ? O : R;
    }
    getSimulcastOverrideQuality(e) {
        return this.simulcastDebugOverrides.has(e) ? this.simulcastDebugOverrides.get(e) : T.Z.NO_OVERRIDE;
    }
    constructor(e, n, r, i = new d.x()) {
        var a;
        super(),
            (a = this),
            b(this, 'userId', void 0),
            b(this, 'isStageChannel', void 0),
            b(this, 'supportsSeamless', void 0),
            b(this, 'ladder', void 0),
            b(this, 'connection', void 0),
            b(this, 'audioSsrcs', void 0),
            b(this, 'videoSsrcs', void 0),
            b(this, 'remoteVideoSsrcs', void 0),
            b(this, 'framesReceived', void 0),
            b(this, 'streamIds', void 0),
            b(this, 'offscreenUsers', void 0),
            b(this, 'offscreenDisabledUsers', void 0),
            b(this, 'streamPixelCounts', void 0),
            b(this, 'latestWants', void 0),
            b(this, 'participants', void 0),
            b(this, 'selectedParticipantId', void 0),
            b(this, 'delayedCall', void 0),
            b(this, 'offscreenTimeout', void 0),
            b(this, 'pipOpen', void 0),
            b(this, 'simulcastDebugOverrides', void 0),
            b(this, 'videoHealthManager', void 0),
            b(this, 'otherUsers', void 0),
            b(this, 'delayedUpdate', void 0),
            b(this, 'addLru', void 0),
            b(this, 'updateOffscreenUsers', void 0),
            b(this, 'handleLocalVideoDisabled', void 0),
            b(this, 'handleLocalMute', void 0),
            b(this, 'update', void 0),
            b(this, 'incomingVideoEnabledChanged', void 0),
            (this.userId = e),
            (this.isStageChannel = n),
            (this.supportsSeamless = r),
            (this.ladder = i),
            (this.connection = null),
            (this.audioSsrcs = {}),
            (this.videoSsrcs = {}),
            (this.remoteVideoSsrcs = {}),
            (this.framesReceived = {}),
            (this.streamIds = {}),
            (this.offscreenUsers = {}),
            (this.offscreenDisabledUsers = {}),
            (this.streamPixelCounts = {}),
            (this.latestWants = A),
            (this.participants = new Set()),
            (this.selectedParticipantId = null),
            (this.pipOpen = !1),
            (this.simulcastDebugOverrides = new Map()),
            (this.videoHealthManager = null),
            (this.otherUsers = new Set()),
            (this.delayedUpdate = () => {
                this.delayedCall.delay();
            }),
            (this.addLru = (e, n, r) => {
                if ((r.push(e), r.length <= C)) return;
                let i = -1,
                    a = -1;
                for (let e = 0; e < r.length; e++) {
                    let s = r[e],
                        o = n - this.offscreenUsers[s];
                    o > i && ((i = o), (a = e));
                }
                (this.offscreenDisabledUsers[r[a]] = !0), r.splice(a, 1);
            }),
            (this.updateOffscreenUsers = () => {
                var e, n;
                if (!(null === (e = this.connection) || void 0 === e ? void 0 : e.getActiveOutputSinkTrackingEnabled())) return;
                let r = Date.now(),
                    i = [];
                for (let [e, a] of E.default.entries(this.streamIds)) {
                    if (null != a) (null === (n = this.connection) || void 0 === n ? void 0 : n.getHasActiveVideoOutputSink(a)) ? (delete this.offscreenUsers[e], delete this.offscreenDisabledUsers[e]) : null == this.offscreenUsers[e] ? ((this.offscreenUsers[e] = r), this.addLru(e, r, i)) : !this.offscreenDisabledUsers[e] && (r - this.offscreenUsers[e] >= this.getOffscreenTimeoutMs() ? (this.offscreenDisabledUsers[e] = !0) : this.addLru(e, r, i));
                }
                if (i.length > 0) {
                    let e = r + this.getOffscreenTimeoutMs();
                    for (let n of i) e = Math.min(e, this.offscreenUsers[n] + this.getOffscreenTimeoutMs());
                    this.offscreenTimeout.start(e - r, this.update);
                } else this.offscreenTimeout.stop();
            }),
            (this.handleLocalVideoDisabled = (e, n) => {
                this.update();
            }),
            (this.handleLocalMute = (e, n) => {
                this.update();
            }),
            (this.update = function () {
                var e, n;
                let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    i = a.getWantsLevel(),
                    s = { any: i };
                a.updateOffscreenUsers();
                let { enabledSingle: o } = h.m.getCurrentConfig({ location: 'RTCMediaSinkWantsManager.update' }, { autoTrackExposure: !1 }),
                    u = o && a.isOneToOneCall() && !a.isStageChannel;
                for (let [n, o] of E.default.entries(a.videoSsrcs)) {
                    let l = [],
                        c = !1,
                        d = null !== (e = a.streamPixelCounts[a.streamIds[n]]) && void 0 !== e ? e : 0,
                        _ = a.getWantsLevel(d),
                        h = o[0].ssrc;
                    if (a.shouldReceiveFromUser(n)) {
                        let e = n === a.selectedParticipantId && i !== y && !a.pipOpen;
                        if (o.length > 1) {
                            for (let n of o) n.quality === y ? (e ? ((s[n.ssrc] = y), (h = n.ssrc)) : (s[n.ssrc] = S)) : e ? (s[n.ssrc] = S) : (u && (s[n.ssrc] = _), (h = n.ssrc));
                            if (a.supportsSeamless && !a.framesReceived[h]) for (let e of ((c = !0), (l = [h]), o)) e.ssrc !== h && a.framesReceived[e.ssrc] && (e.quality === y ? (s[e.ssrc] = y) : (s[e.ssrc] = u ? _ : i), l.push(e.ssrc));
                        } else e ? (s[h] = y) : u && (s[h] = _);
                    } else for (let e of o) s[e.ssrc] = S;
                    let p = a.getSimulcastOverrideQuality(n);
                    for (let e of (p === T.Z.HIGH ? (s[h] = y) : p === T.Z.LOW && (s[h] = 50), (!a.supportsSeamless || !c) && (l = [h]), o)) !l.includes(e.ssrc) && delete a.framesReceived[e.ssrc];
                    (r.includes(n) || (void 0 !== a.remoteVideoSsrcs[n] && !(0, f.Z)(a.remoteVideoSsrcs[n], l))) && ((a.remoteVideoSsrcs[n] = [...l]), a.emit('user-ssrc-update', n, a.audioSsrcs[n], l));
                }
                for (let [e, r] of Object.entries(a.audioSsrcs)) (null === (n = a.connection) || void 0 === n ? void 0 : n.getLocalMute(e)) && (s[r] = 0);
                return D ? a.latestWants : (null != a.connection && !l().isEqual(a.latestWants, s) && ((a.latestWants = s), a.emit('update', s)), s);
            }),
            (this.incomingVideoEnabledChanged = () => {
                this.update();
            }),
            (this.delayedCall = new _.sW(N, this.update)),
            (this.offscreenTimeout = new _.V7()),
            v.w.on(v.e.IncomingVideoEnabledChanged, this.incomingVideoEnabledChanged);
    }
}
