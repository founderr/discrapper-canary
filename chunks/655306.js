n.d(t, {
    Yy: function () {
        return g;
    },
    ZP: function () {
        return R;
    },
    ai: function () {
        return r;
    }
});
var r,
    i = n(47120);
var a = n(653041);
var o = n(47770),
    s = n(46973),
    l = n(966146),
    u = n(902704),
    c = n(846519),
    d = n(526167),
    _ = n(70956),
    E = n(709054),
    f = n(798681),
    h = n(981631),
    p = n(65154);
function m(e, t, n) {
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
let I = 100,
    T = 0,
    g = { any: 100 },
    S = 100,
    A = 3,
    v = 30 * _.Z.Millis.SECOND,
    N = 120 * _.Z.Millis.SECOND,
    O = -1 !== (0, d.hY)();
!(function (e) {
    (e.UserSSRCUpdate = 'user-ssrc-update'), (e.Update = 'update');
})(r || (r = {}));
class R extends o.Z {
    getWantsLevel() {
        let e = this.getVideoParticipantCount();
        return this.ladder.getMaxSinkValue(e);
    }
    userVideoDisabled(e) {
        return this.offscreenDisabledUsers[e];
    }
    shouldReceiveFromUser(e) {
        var t, n;
        let r = !((null === (t = this.connection) || void 0 === t ? void 0 : t.getLocalVideoDisabled(e)) || (this.userVideoDisabled(e) && (null === (n = this.videoHealthManager) || void 0 === n ? void 0 : n.getCurrentVideoToggleState(e)) !== h.ZUi.AUTO_PROBING));
        return f.w.isIncomingVideoEnabled() && r;
    }
    getAudioSSRCs() {
        return this.audioSsrcs;
    }
    setConnection(e) {
        var t, n, r, i, a, o;
        let l = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        null === (t = this.connection) || void 0 === t || t.removeListener(s.Sh.LocalVideoDisabled, this.handleLocalVideoDisabled), null === (n = this.connection) || void 0 === n || n.removeListener(s.Sh.LocalMute, this.handleLocalMute), null === (r = this.connection) || void 0 === r || r.removeListener(s.Sh.ActiveSinksChange, this.delayedUpdate), (this.connection = e), null === (i = this.connection) || void 0 === i || i.addListener(s.Sh.LocalVideoDisabled, this.handleLocalVideoDisabled), null === (a = this.connection) || void 0 === a || a.addListener(s.Sh.LocalMute, this.handleLocalMute), null === (o = this.connection) || void 0 === o || o.addListener(s.Sh.ActiveSinksChange, this.delayedUpdate), l && this.update();
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
        return null != t ? (this.streamIds[e] = t) : delete this.streamIds[e], this.update();
    }
    destroyUser(e) {
        return delete this.audioSsrcs[e], delete this.videoSsrcs[e], this.participants.delete(e), delete this.streamIds[e], this.update(Array.from(this.participants));
    }
    reset() {
        this.setConnection(null, !1), (this.audioSsrcs = {}), (this.videoSsrcs = {}), (this.remoteVideoSsrcs = {}), (this.framesReceived = {}), (this.streamIds = {}), (this.latestWants = g), f.w.off(f.e.IncomingVideoEnabledChanged, this.incomingVideoEnabledChanged);
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
        for (let [r, i] of E.default.entries(this.streamIds))
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
    getVideoParticipantCount() {
        let e = 0;
        for (let n of Object.keys(this.videoSsrcs)) {
            var t;
            !(null === (t = this.connection) || void 0 === t ? void 0 : t.getLocalVideoDisabled(n)) && e++;
        }
        return e;
    }
    getOffscreenTimeoutMs() {
        return this.isStageChannel ? N : v;
    }
    getSimulcastOverrideQuality(e) {
        return this.simulcastDebugOverrides.has(e) ? this.simulcastDebugOverrides.get(e) : p.Z.NO_OVERRIDE;
    }
    constructor(e, t, n, r = new l.x()) {
        var i;
        super(),
            (i = this),
            m(this, 'userId', void 0),
            m(this, 'isStageChannel', void 0),
            m(this, 'supportsSeamless', void 0),
            m(this, 'ladder', void 0),
            m(this, 'connection', void 0),
            m(this, 'audioSsrcs', void 0),
            m(this, 'videoSsrcs', void 0),
            m(this, 'remoteVideoSsrcs', void 0),
            m(this, 'framesReceived', void 0),
            m(this, 'streamIds', void 0),
            m(this, 'offscreenUsers', void 0),
            m(this, 'offscreenDisabledUsers', void 0),
            m(this, 'latestWants', void 0),
            m(this, 'participants', void 0),
            m(this, 'selectedParticipantId', void 0),
            m(this, 'delayedCall', void 0),
            m(this, 'offscreenTimeout', void 0),
            m(this, 'pipOpen', void 0),
            m(this, 'simulcastDebugOverrides', void 0),
            m(this, 'videoHealthManager', void 0),
            m(this, 'delayedUpdate', void 0),
            m(this, 'addLru', void 0),
            m(this, 'updateOffscreenUsers', void 0),
            m(this, 'handleLocalVideoDisabled', void 0),
            m(this, 'handleLocalMute', void 0),
            m(this, 'update', void 0),
            m(this, 'incomingVideoEnabledChanged', void 0),
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
            (this.latestWants = g),
            (this.participants = new Set()),
            (this.selectedParticipantId = null),
            (this.pipOpen = !1),
            (this.simulcastDebugOverrides = new Map()),
            (this.videoHealthManager = null),
            (this.delayedUpdate = () => {
                this.delayedCall.delay();
            }),
            (this.addLru = (e, t, n) => {
                if ((n.push(e), n.length <= A)) return;
                let r = -1,
                    i = -1;
                for (let e = 0; e < n.length; e++) {
                    let a = n[e],
                        o = t - this.offscreenUsers[a];
                    o > r && ((r = o), (i = e));
                }
                (this.offscreenDisabledUsers[n[i]] = !0), n.splice(i, 1);
            }),
            (this.updateOffscreenUsers = () => {
                var e, t;
                if (!(null === (e = this.connection) || void 0 === e ? void 0 : e.getActiveOutputSinkTrackingEnabled())) return;
                let n = Date.now(),
                    r = [];
                for (let [e, i] of E.default.entries(this.streamIds)) {
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
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    t = i.getWantsLevel(),
                    n = { any: t };
                for (let [r, a] of (i.updateOffscreenUsers(), E.default.entries(i.videoSsrcs))) {
                    let o = [],
                        s = !1,
                        l = a[0].ssrc;
                    if (i.shouldReceiveFromUser(r)) {
                        let e = r === i.selectedParticipantId && t !== I && !i.pipOpen;
                        if (a.length > 1) {
                            for (let t of a) t.quality === I ? (e ? ((n[t.ssrc] = I), (l = t.ssrc)) : (n[t.ssrc] = T)) : e ? (n[t.ssrc] = T) : (l = t.ssrc);
                            if (i.supportsSeamless && !i.framesReceived[l]) for (let e of ((s = !0), (o = [l]), a)) e.ssrc !== l && i.framesReceived[e.ssrc] && (e.quality === I ? (n[e.ssrc] = I) : (n[e.ssrc] = t), o.push(e.ssrc));
                        } else e && (n[l] = I);
                    } else for (let e of a) n[e.ssrc] = T;
                    let c = i.getSimulcastOverrideQuality(r);
                    for (let e of (c === p.Z.HIGH ? (n[l] = I) : c === p.Z.LOW && (n[l] = 50), (!i.supportsSeamless || !s) && (o = [l]), a)) !o.includes(e.ssrc) && delete i.framesReceived[e.ssrc];
                    (e.includes(r) || (void 0 !== i.remoteVideoSsrcs[r] && !(0, u.Z)(i.remoteVideoSsrcs[r], o))) && ((i.remoteVideoSsrcs[r] = [...o]), i.emit('user-ssrc-update', r, i.audioSsrcs[r], o));
                }
                for (let [e, t] of Object.entries(i.audioSsrcs)) {
                    var r;
                    (null === (r = i.connection) || void 0 === r ? void 0 : r.getLocalMute(e)) && (n[t] = 0);
                }
                return O ? i.latestWants : (null != i.connection && !(0, u.Z)(i.latestWants, n) && ((i.latestWants = n), i.emit('update', n)), n);
            }),
            (this.incomingVideoEnabledChanged = () => {
                this.update();
            }),
            (this.delayedCall = new c.sW(S, this.update)),
            (this.offscreenTimeout = new c.V7()),
            f.w.on(f.e.IncomingVideoEnabledChanged, this.incomingVideoEnabledChanged.bind(this));
    }
}
