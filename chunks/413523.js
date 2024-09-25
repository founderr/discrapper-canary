n.d(t, {
    Yr: function () {
        return y;
    },
    ZP: function () {
        return b;
    },
    sI: function () {
        return r;
    }
});
var r,
    i = n(47120);
var a = n(724458);
var o = n(653041);
var s = n(392711);
var l = n(759174),
    u = n(586902),
    c = n(317381),
    d = n(569545),
    _ = n(199902),
    E = n(314897),
    f = n(523746),
    h = n(592125),
    p = n(131951),
    m = n(606304),
    I = n(594174),
    T = n(33039),
    g = n(979651),
    S = n(5192),
    A = n(933546),
    v = n(354459),
    N = n(981631),
    O = n(65154);
function R(e, t, n) {
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
let C = '__EMBEDDED_ACTIVITIES__';
function y(e) {
    switch (e.type) {
        case v.fO.ACTIVITY:
            return '\0'.concat(e.sortKey);
        case v.fO.HIDDEN_STREAM:
        case v.fO.STREAM:
            return ''.concat(e.userVideo ? '\x01' : '\x02').concat((0, A.Z)(e.userNick, e.user), '\x02');
        case v.fO.USER:
            var t, n;
            let r = '\x04';
            return (null === (t = e.voiceState) || void 0 === t ? void 0 : t.selfVideo) ? (r = '\x02') : (null === (n = e.voiceState) || void 0 === n ? void 0 : n.selfStream) && (r = '\x03'), ''.concat(r).concat((0, A.Z)(e.userNick, e.user));
    }
}
!(function (e) {
    (e.VIDEO = 'VIDEO'), (e.STREAM = 'STREAM'), (e.FILTERED = 'FILTERED'), (e.SPEAKING = 'SPEAKING'), (e.ACTIVITY = 'ACTIVITY');
})(r || (r = {}));
class b {
    get version() {
        return this.participantByIndex.version;
    }
    size(e) {
        return this.participantByIndex.size(e);
    }
    toArray(e) {
        return this.participantByIndex.values(e, !0);
    }
    rebuild() {
        let e = h.Z.getChannel(this.channelId);
        if (null == e || e.type === N.d4z.GUILD_TEXT) return !1;
        if (((this.call = f.Z.getCall(this.channelId)), e.isPrivate() && (null == this.call || this.call.unavailable))) return !1;
        let t = new Set(e.isGuildVocalOrThread() ? Object.keys(g.Z.getVoiceStatesForChannel(e.id)) : e.recipients);
        return (
            t.add(E.default.getId()),
            _.Z.getAllActiveStreamsForChannel(this.channelId).forEach((e) => {
                let { ownerId: n } = e;
                return t.add(n);
            }),
            this.participantByIndex.clear(),
            (this.participants = {}),
            t.forEach((e) => this.updateParticipant(e)),
            this.updateEmbeddedActivities(),
            !0
        );
    }
    getParticipant(e) {
        var t;
        return null !== (t = this.participantByIndex.get(e)) && void 0 !== t ? t : null;
    }
    updateEmbeddedActivities() {
        return this.updateParticipant(C);
    }
    hasEmbeddedActivity() {
        let e = this.participants[C];
        return null != e && e.length > 0;
    }
    updateParticipant(e) {
        let t = this.participants[e],
            n = e === C ? this._getParticipantsForEmbeddedActivities() : this._getParticipantsForUser(e);
        return (
            (null != t || 0 !== n.length) &&
            (null == t ||
                t.forEach((e) => {
                    this.participantByIndex.delete(e.id);
                }),
            n.forEach((e) => {
                this.participantByIndex.set(e.id, e);
            }),
            (this.participants[e] = n),
            !0)
        );
    }
    updateParticipantSpeaking(e) {
        var t, n;
        return (
            null !==
                (n =
                    null === (t = this.participants[e]) || void 0 === t
                        ? void 0
                        : t.reduce((t, n) => {
                              if (n.type === v.fO.USER) {
                                  let t = (0, u.O)({
                                      userId: e,
                                      checkIsMuted: !0
                                  });
                                  return (
                                      t && (this.lastSpoke[e] = Date.now()),
                                      this.participantByIndex.set(n.id, {
                                          ...n,
                                          speaking: t,
                                          lastSpoke: this.lastSpoke[e],
                                          soundsharing: m.Z.isSoundSharing(e)
                                      }),
                                      !0
                                  );
                              }
                              return t;
                          }, !1)) &&
            void 0 !== n &&
            n
        );
    }
    updateParticipantQuality(e, t, n) {
        var r, i;
        return (
            null !==
                (i =
                    null === (r = this.participants[e]) || void 0 === r
                        ? void 0
                        : r.reduce(
                              (e, r) =>
                                  r.type === v.fO.STREAM
                                      ? (this.participantByIndex.set(r.id, {
                                            ...r,
                                            maxResolution: t,
                                            maxFrameRate: n
                                        }),
                                        !0)
                                      : e,
                              !1
                          )) &&
            void 0 !== i &&
            i
        );
    }
    _getEmbeddedActivities() {
        let e = c.ZP.getEmbeddedActivitiesForChannel(this.channelId),
            t = c.ZP.getSelfEmbeddedActivityForChannel(this.channelId);
        return null == t ? e : (0, s.uniqBy)([...e, t], (e) => e.applicationId);
    }
    _getParticipantsForEmbeddedActivities() {
        return this._getEmbeddedActivities().map((e, t) => {
            var n, r, i;
            return {
                type: v.fO.ACTIVITY,
                id: e.applicationId,
                activityType: N.IIU.PLAYING,
                activityUrl: e.url,
                participants: [...(null !== (r = e.participants) && void 0 !== r ? r : [])],
                guildId: null !== (i = null === (n = h.Z.getChannel(this.channelId)) || void 0 === n ? void 0 : n.getGuildId()) && void 0 !== i ? i : null,
                sortKey: t.toString()
            };
        });
    }
    _getParticipantsForUser(e) {
        var t, n, r, i, a, o;
        let s, l;
        let c = [],
            f = I.default.getUser(e);
        if (null == f) return c;
        let A = g.Z.getVoiceStateForChannel(this.channelId, e),
            N = g.Z.getVoicePlatformForChannel(this.channelId, e),
            R = h.Z.getChannel(this.channelId),
            C = null !== (r = null === (n = this.call) || void 0 === n ? void 0 : null === (t = n.ringing) || void 0 === t ? void 0 : t.includes(e)) && void 0 !== r && r;
        (null != A || C) &&
            ((s = {
                type: v.fO.USER,
                ...T.Z.getUserStreamData(e, null == R ? void 0 : R.getGuildId()),
                user: f,
                id: f.id,
                voiceState: A,
                voicePlatform: N,
                speaking: (0, u.O)({
                    userId: e,
                    checkIsMuted: !0
                }),
                lastSpoke: null !== (i = this.lastSpoke[e]) && void 0 !== i ? i : 0,
                soundsharing: m.Z.isSoundSharing(e),
                ringing: C,
                userNick: S.ZP.getName(null == R ? void 0 : R.getGuildId(), this.channelId, f),
                localVideoDisabled: p.Z.isLocalVideoDisabled(f.id)
            }),
            c.push(s));
        let y = null !== (a = _.Z.getStreamForUser(e, null == R ? void 0 : R.getGuildId())) && void 0 !== a ? a : _.Z.getActiveStreamForUser(e, null == R ? void 0 : R.getGuildId());
        if (null != y && y.channelId === this.channelId) {
            let t = (0, d.V9)(y),
                n = this.getParticipant(t),
                r = y.ownerId === E.default.getId() && _.Z.isSelfStreamHidden(this.channelId),
                i =
                    (null == n ? void 0 : n.type) === v.fO.STREAM
                        ? {
                              maxResolution: null != n.maxResolution ? { ...n.maxResolution } : void 0,
                              maxFrameRate: n.maxFrameRate
                          }
                        : null;
            (l = {
                ...T.Z.getUserStreamData(e, null == R ? void 0 : R.getGuildId(), O.Yn.STREAM),
                ...i,
                type: r ? v.fO.HIDDEN_STREAM : v.fO.STREAM,
                id: t,
                userVideo: null !== (o = null == A ? void 0 : A.selfVideo) && void 0 !== o && o,
                user: f,
                userNick: S.ZP.getName(null == R ? void 0 : R.getGuildId(), this.channelId, f),
                stream: y
            }),
                c.push(l);
        }
        return c;
    }
    constructor(e) {
        R(this, 'channelId', void 0),
            R(this, 'call', void 0),
            R(this, 'participants', {}),
            R(this, 'lastSpoke', {}),
            R(
                this,
                'participantByIndex',
                new l.h((e) => {
                    var t;
                    let n = [];
                    return e.type === v.fO.USER && e.speaking && n.push('SPEAKING'), e.type === v.fO.USER && (null === (t = e.voiceState) || void 0 === t ? void 0 : t.selfVideo) ? (n.push('VIDEO'), !e.localVideoDisabled && n.push('FILTERED')) : (0, v._5)(e) && (n.push('STREAM'), e.type !== v.fO.HIDDEN_STREAM && null != e.streamId && n.push('FILTERED')), e.type === v.fO.ACTIVITY && (n.push('ACTIVITY'), n.push('FILTERED')), n;
                }, y)
            ),
            (this.channelId = e);
    }
}
