"use strict";
n.r(t), n.d(t, {
  DEFAULT_WANTS_FULL: function() {
    return h
  },
  RTCMediaSinkWantsManagerEvent: function() {
    return i
  },
  default: function() {
    return s
  }
}), n("222007"), n("424973");
var i, s, r, a = n("595275"),
  o = n("773364"),
  l = n("582663"),
  u = n("233736"),
  d = n("862337"),
  c = n("560528"),
  f = n("718517"),
  _ = n("49111");
let h = {
    any: 100
  },
  g = 30 * f.default.Millis.SECOND,
  m = 120 * f.default.Millis.SECOND,
  E = -1 !== (0, c.getFirefoxVersion)();
(r = i || (i = {})).UserSSRCUpdate = "user-ssrc-update", r.Update = "update", s = class extends a.default {
  getWantsLevel() {
    let e = this.getVideoParticipantCount();
    return this.ladder.getMaxSinkValue(e)
  }
  userVideoDisabled(e) {
    return this.offscreenDisabledUsers[e]
  }
  getAudioSSRCs() {
    return this.audioSsrcs
  }
  setConnection(e) {
    var t, n, i, s, r, a;
    let l = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    null === (t = this.connection) || void 0 === t || t.removeListener(o.BaseConnectionEvent.LocalVideoDisabled, this.handleLocalVideoDisabled), null === (n = this.connection) || void 0 === n || n.removeListener(o.BaseConnectionEvent.LocalMute, this.handleLocalMute), null === (i = this.connection) || void 0 === i || i.removeListener(o.BaseConnectionEvent.ActiveSinksChange, this.delayedUpdate), this.connection = e, null === (s = this.connection) || void 0 === s || s.addListener(o.BaseConnectionEvent.LocalVideoDisabled, this.handleLocalVideoDisabled), null === (r = this.connection) || void 0 === r || r.addListener(o.BaseConnectionEvent.LocalMute, this.handleLocalMute), null === (a = this.connection) || void 0 === a || a.addListener(o.BaseConnectionEvent.ActiveSinksChange, this.delayedUpdate), l && this.update()
  }
  setAudioSSRC(e, t) {
    return t > 0 ? this.audioSsrcs[e] = t : delete this.audioSsrcs[e], this.update()
  }
  setVideoSSRCs(e, t) {
    let n = t.filter(e => {
      var t;
      return e.active && (null !== (t = e.ssrc) && void 0 !== t ? t : 0) > 0
    }).map(e => {
      var t;
      return {
        quality: null !== (t = e.quality) && void 0 !== t ? t : 100,
        ssrc: e.ssrc
      }
    });
    if (n.length > 0) this.videoSsrcs[e] = n, this.participants.add(e);
    else {
      if (void 0 !== this.videoSsrcs[e])
        for (let {
            ssrc: t
          }
          of this.videoSsrcs[e]) delete this.framesReceived[t];
      delete this.remoteVideoSsrcs[e], delete this.videoSsrcs[e], this.participants.delete(e), this.emit("user-ssrc-update", e, this.audioSsrcs[e], [])
    }
    return this.update(Array.from(this.participants))
  }
  setFirstFrameReceived(e) {
    return this.framesReceived[e] = !0, this.update()
  }
  setStreamId(e, t) {
    return null != t ? this.streamIds[e] = t : delete this.streamIds[e], this.update()
  }
  destroyUser(e) {
    return delete this.audioSsrcs[e], delete this.videoSsrcs[e], this.participants.delete(e), delete this.streamIds[e], this.update(Array.from(this.participants))
  }
  reset() {
    this.setConnection(null, !1), this.audioSsrcs = {}, this.videoSsrcs = {}, this.remoteVideoSsrcs = {}, this.framesReceived = {}, this.streamIds = {}, this.latestWants = h
  }
  setSelectedParticipant(e) {
    if (e === this.selectedParticipantId) return this.latestWants;
    let t = [];
    if (null != this.selectedParticipantId && this.selectedParticipantId !== this.userId && t.push(this.selectedParticipantId), null != e) {
      if (this.participants.has(e)) this.selectedParticipantId = e, t.push(e);
      else {
        if (this.userId !== e) return console.warn("Participant not found: ".concat(e)), this.latestWants;
        this.selectedParticipantId = e
      }
    } else this.selectedParticipantId = null;
    return this.update(t.filter(e => {
      var t;
      return (null === (t = this.videoSsrcs[e]) || void 0 === t ? void 0 : t.length) > 1
    }))
  }
  setPipOpen(e) {
    return (this.pipOpen = e, null != this.selectedParticipantId) ? this.update([this.selectedParticipantId]) : this.latestWants
  }
  setAppBackgrounded(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    for (let [i, s] of Object.entries(this.streamIds))
      if (this.offscreenDisabledUsers[i] = e, null != s) {
        var n;
        let i = !e || t;
        null === (n = this.connection) || void 0 === n || n.setHasActiveVideoOutputSink(s, i)
      } return this.update()
  }
  getOffscreenDisabledUsers() {
    return this.offscreenDisabledUsers
  }
  getVideoParticipantCount() {
    let e = 0;
    for (let n of Object.keys(this.videoSsrcs)) {
      var t;
      !(null === (t = this.connection) || void 0 === t ? void 0 : t.getLocalVideoDisabled(n)) && e++
    }
    return e
  }
  getOffscreenTimeoutMs() {
    return this.isStageChannel ? m : g
  }
  constructor(e, t, n, i = new l.MediaSinkWantsLadder) {
    var s;
    super(), s = this, this.userId = e, this.isStageChannel = t, this.supportsSeamless = n, this.ladder = i, this.connection = null, this.audioSsrcs = {}, this.videoSsrcs = {}, this.remoteVideoSsrcs = {}, this.framesReceived = {}, this.streamIds = {}, this.offscreenUsers = {}, this.offscreenDisabledUsers = {}, this.latestWants = h, this.participants = new Set, this.selectedParticipantId = null, this.pipOpen = !1, this.videoHealthManager = null, this.delayedUpdate = () => {
      this.delayedCall.delay()
    }, this.addLru = (e, t, n) => {
      if (n.push(e), n.length <= 3) return;
      let i = -1,
        s = -1;
      for (let e = 0; e < n.length; e++) {
        let r = n[e],
          a = t - this.offscreenUsers[r];
        a > i && (i = a, s = e)
      }
      this.offscreenDisabledUsers[n[s]] = !0, n.splice(s, 1)
    }, this.updateOffscreenUsers = () => {
      var e, t;
      if (!(null === (e = this.connection) || void 0 === e ? void 0 : e.getActiveOutputSinkTrackingEnabled())) return;
      let n = Date.now(),
        i = [];
      for (let [e, s] of Object.entries(this.streamIds))
        if (null != s) {
          if (null === (t = this.connection) || void 0 === t ? void 0 : t.getHasActiveVideoOutputSink(s)) delete this.offscreenUsers[e], delete this.offscreenDisabledUsers[e];
          else if (null == this.offscreenUsers[e]) this.offscreenUsers[e] = n, this.addLru(e, n, i);
          else if (!this.offscreenDisabledUsers[e]) {
            let t = n - this.offscreenUsers[e];
            t >= this.getOffscreenTimeoutMs() ? this.offscreenDisabledUsers[e] = !0 : this.addLru(e, n, i)
          }
        } if (i.length > 0) {
        let e = n + this.getOffscreenTimeoutMs();
        for (let t of i) e = Math.min(e, this.offscreenUsers[t] + this.getOffscreenTimeoutMs());
        this.offscreenTimeout.start(e - n, this.update)
      } else this.offscreenTimeout.stop()
    }, this.handleLocalVideoDisabled = (e, t) => {
      this.update()
    }, this.handleLocalMute = (e, t) => {
      this.update()
    }, this.update = function() {
      var e, t, n;
      let i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
        r = s.getWantsLevel(),
        a = {
          any: r
        };
      for (let [n, o] of(s.updateOffscreenUsers(), Object.entries(s.videoSsrcs))) {
        let l = [],
          d = !1,
          c = o[0].ssrc;
        if ((null === (e = s.connection) || void 0 === e ? void 0 : e.getLocalVideoDisabled(n)) || s.userVideoDisabled(n) && (null === (t = s.videoHealthManager) || void 0 === t ? void 0 : t.getCurrentVideoToggleState(n)) !== _.VideoToggleState.AUTO_PROBING)
          for (let e of o) a[e.ssrc] = 0;
        else {
          let e = n === s.selectedParticipantId && 100 !== r && !s.pipOpen;
          if (o.length > 1) {
            for (let t of o) 100 === t.quality ? e ? (a[t.ssrc] = 100, c = t.ssrc) : a[t.ssrc] = 0 : e ? a[t.ssrc] = 0 : c = t.ssrc;
            if (s.supportsSeamless && !s.framesReceived[c])
              for (let e of (d = !0, l = [c], o)) e.ssrc !== c && s.framesReceived[e.ssrc] && (100 === e.quality ? a[e.ssrc] = 100 : a[e.ssrc] = r, l.push(e.ssrc))
          } else e && (a[c] = 100)
        }
        for (let e of ((!s.supportsSeamless || !d) && (l = [c]), o)) !l.includes(e.ssrc) && delete s.framesReceived[e.ssrc];
        (i.includes(n) || void 0 !== s.remoteVideoSsrcs[n] && !(0, u.default)(s.remoteVideoSsrcs[n], l)) && (s.remoteVideoSsrcs[n] = [...l], s.emit("user-ssrc-update", n, s.audioSsrcs[n], l))
      }
      for (let [e, t] of Object.entries(s.audioSsrcs))(null === (n = s.connection) || void 0 === n ? void 0 : n.getLocalMute(e)) && (a[t] = 0);
      return E ? s.latestWants : (null != s.connection && !(0, u.default)(s.latestWants, a) && (s.latestWants = a, s.emit("update", a)), a)
    }, this.delayedCall = new d.DelayedCall(100, this.update), this.offscreenTimeout = new d.Timeout
  }
}