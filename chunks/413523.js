r.d(n, {
    Yr: function () {
        return D;
    },
    ZP: function () {
        return L;
    },
    sI: function () {
        return i;
    }
});
var i,
    a = r(47120);
var s = r(724458);
var o = r(653041);
var l = r(392711);
var u = r(759174),
    c = r(586902),
    d = r(636449),
    f = r(317381),
    _ = r(569545),
    h = r(199902),
    p = r(314897),
    m = r(523746),
    g = r(592125),
    E = r(131951),
    v = r(606304),
    I = r(594174),
    T = r(33039),
    b = r(979651),
    y = r(5192),
    S = r(933546),
    A = r(354459),
    N = r(981631),
    C = r(65154);
function R(e, n, r) {
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
let O = '__EMBEDDED_ACTIVITIES__';
function D(e) {
    switch (e.type) {
        case A.fO.ACTIVITY:
            return '\0'.concat(e.sortKey);
        case A.fO.HIDDEN_STREAM:
        case A.fO.STREAM:
            return ''.concat(e.userVideo ? '\x01' : '\x02').concat((0, S.Z)(e.userNick, e.user), '\x02');
        case A.fO.USER:
            var n, r;
            let i = '\x04';
            return (null === (n = e.voiceState) || void 0 === n ? void 0 : n.selfVideo) ? (i = '\x02') : (null === (r = e.voiceState) || void 0 === r ? void 0 : r.selfStream) && (i = '\x03'), ''.concat(i).concat((0, S.Z)(e.userNick, e.user));
    }
}
!(function (e) {
    (e.VIDEO = 'VIDEO'), (e.STREAM = 'STREAM'), (e.FILTERED = 'FILTERED'), (e.SPEAKING = 'SPEAKING'), (e.ACTIVITY = 'ACTIVITY');
})(i || (i = {}));
class L {
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
        let e = g.Z.getChannel(this.channelId);
        if (null == e || e.type === N.d4z.GUILD_TEXT) return !1;
        if (((this.call = m.Z.getCall(this.channelId)), e.isPrivate() && (null == this.call || this.call.unavailable))) return !1;
        let n = new Set(e.isGuildVocalOrThread() ? Object.keys(b.Z.getVoiceStatesForChannel(e.id)) : e.recipients);
        return (
            n.add(p.default.getId()),
            h.Z.getAllActiveStreamsForChannel(this.channelId).forEach((e) => {
                let { ownerId: r } = e;
                return n.add(r);
            }),
            this.participantByIndex.clear(),
            (this.participants = {}),
            n.forEach((e) => this.updateParticipant(e)),
            this.updateEmbeddedActivities(),
            !0
        );
    }
    getParticipant(e) {
        var n;
        return null !== (n = this.participantByIndex.get(e)) && void 0 !== n ? n : null;
    }
    updateEmbeddedActivities() {
        return this.updateParticipant(O);
    }
    hasEmbeddedActivity() {
        let e = this.participants[O];
        return null != e && e.length > 0;
    }
    updateParticipant(e) {
        let n = this.participants[e],
            r = e === O ? this._getParticipantsForEmbeddedActivities() : this._getParticipantsForUser(e);
        return (
            (null != n || 0 !== r.length) &&
            (null == n ||
                n.forEach((e) => {
                    this.participantByIndex.delete(e.id);
                }),
            r.forEach((e) => {
                this.participantByIndex.set(e.id, e);
            }),
            (this.participants[e] = r),
            !0)
        );
    }
    updateParticipantSpeaking(e) {
        var n, r;
        return (
            null !==
                (r =
                    null === (n = this.participants[e]) || void 0 === n
                        ? void 0
                        : n.reduce((n, r) => {
                              if (r.type === A.fO.USER) {
                                  let n = (0, c.O)({
                                      userId: e,
                                      checkIsMuted: !0
                                  });
                                  return (
                                      n && (this.lastSpoke[e] = Date.now()),
                                      this.participantByIndex.set(r.id, {
                                          ...r,
                                          speaking: n,
                                          lastSpoke: this.lastSpoke[e],
                                          soundsharing: v.Z.isSoundSharing(e)
                                      }),
                                      !0
                                  );
                              }
                              return n;
                          }, !1)) &&
            void 0 !== r &&
            r
        );
    }
    updateParticipantQuality(e, n, r) {
        var i, a;
        return (
            null !==
                (a =
                    null === (i = this.participants[e]) || void 0 === i
                        ? void 0
                        : i.reduce(
                              (e, i) =>
                                  i.type === A.fO.STREAM
                                      ? (this.participantByIndex.set(i.id, {
                                            ...i,
                                            maxResolution: n,
                                            maxFrameRate: r
                                        }),
                                        !0)
                                      : e,
                              !1
                          )) &&
            void 0 !== a &&
            a
        );
    }
    _getEmbeddedActivities() {
        let e = f.ZP.getEmbeddedActivitiesForChannel(this.channelId),
            n = f.ZP.getSelfEmbeddedActivityForChannel(this.channelId);
        if (null == n) return e;
        {
            var r;
            let i = (0, l.uniqBy)([...e, n], (e) => e.applicationId),
                a = null === (r = n.participants) || void 0 === r ? void 0 : r.some((e) => e.sessionId === p.default.getSessionId());
            return (0, d.R)() && a ? i.filter((e) => e.applicationId !== n.applicationId && e.compositeInstanceId !== n.compositeInstanceId) : i;
        }
    }
    _getParticipantsForEmbeddedActivities() {
        return this._getEmbeddedActivities().map((e, n) => {
            var r, i, a;
            return {
                type: A.fO.ACTIVITY,
                id: e.applicationId,
                activityType: N.IIU.PLAYING,
                activityUrl: e.url,
                participants: [...(null !== (i = e.participants) && void 0 !== i ? i : [])],
                guildId: null !== (a = null === (r = g.Z.getChannel(this.channelId)) || void 0 === r ? void 0 : r.getGuildId()) && void 0 !== a ? a : null,
                sortKey: n.toString()
            };
        });
    }
    _getParticipantsForUser(e) {
        var n, r, i, a, s, o;
        let l, u;
        let d = [],
            f = I.default.getUser(e);
        if (null == f) return d;
        let m = b.Z.getVoiceStateForChannel(this.channelId, e),
            S = b.Z.getVoicePlatformForChannel(this.channelId, e),
            N = g.Z.getChannel(this.channelId),
            R = null !== (i = null === (r = this.call) || void 0 === r ? void 0 : null === (n = r.ringing) || void 0 === n ? void 0 : n.includes(e)) && void 0 !== i && i;
        (null != m || R) &&
            ((l = {
                type: A.fO.USER,
                ...T.Z.getUserStreamData(e, null == N ? void 0 : N.getGuildId()),
                user: f,
                id: f.id,
                voiceState: m,
                voicePlatform: S,
                speaking: (0, c.O)({
                    userId: e,
                    checkIsMuted: !0
                }),
                lastSpoke: null !== (a = this.lastSpoke[e]) && void 0 !== a ? a : 0,
                soundsharing: v.Z.isSoundSharing(e),
                ringing: R,
                userNick: y.ZP.getName(null == N ? void 0 : N.getGuildId(), this.channelId, f),
                localVideoDisabled: E.Z.isLocalVideoDisabled(f.id)
            }),
            d.push(l));
        let O = null !== (s = h.Z.getStreamForUser(e, null == N ? void 0 : N.getGuildId())) && void 0 !== s ? s : h.Z.getActiveStreamForUser(e, null == N ? void 0 : N.getGuildId());
        if (null != O && O.channelId === this.channelId) {
            let n = (0, _.V9)(O),
                r = this.getParticipant(n),
                i = O.ownerId === p.default.getId() && h.Z.isSelfStreamHidden(this.channelId),
                a =
                    (null == r ? void 0 : r.type) === A.fO.STREAM
                        ? {
                              maxResolution: null != r.maxResolution ? { ...r.maxResolution } : void 0,
                              maxFrameRate: r.maxFrameRate
                          }
                        : null;
            (u = {
                ...T.Z.getUserStreamData(e, null == N ? void 0 : N.getGuildId(), C.Yn.STREAM),
                ...a,
                type: i ? A.fO.HIDDEN_STREAM : A.fO.STREAM,
                id: n,
                userVideo: null !== (o = null == m ? void 0 : m.selfVideo) && void 0 !== o && o,
                user: f,
                userNick: y.ZP.getName(null == N ? void 0 : N.getGuildId(), this.channelId, f),
                stream: O
            }),
                d.push(u);
        }
        return d;
    }
    constructor(e) {
        R(this, 'channelId', void 0),
            R(this, 'call', void 0),
            R(this, 'participants', {}),
            R(this, 'lastSpoke', {}),
            R(
                this,
                'participantByIndex',
                new u.h((e) => {
                    var n;
                    let r = [];
                    return e.type === A.fO.USER && e.speaking && r.push('SPEAKING'), e.type === A.fO.USER && (null === (n = e.voiceState) || void 0 === n ? void 0 : n.selfVideo) ? (r.push('VIDEO'), !e.localVideoDisabled && r.push('FILTERED')) : (0, A._5)(e) && (r.push('STREAM'), e.type !== A.fO.HIDDEN_STREAM && null != e.streamId && r.push('FILTERED')), e.type === A.fO.ACTIVITY && (r.push('ACTIVITY'), r.push('FILTERED')), r;
                }, D)
            ),
            (this.channelId = e);
    }
}
