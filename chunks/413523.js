n.d(t, {
    Yr: function () {
        return N;
    },
    ZP: function () {
        return C;
    },
    sI: function () {
        return r;
    }
}),
    n(47120),
    n(724458),
    n(653041);
var r,
    i,
    a = n(392711),
    s = n(759174),
    o = n(586902),
    l = n(317381),
    u = n(569545),
    c = n(199902),
    d = n(314897),
    f = n(523746),
    _ = n(592125),
    p = n(131951),
    h = n(606304),
    m = n(594174),
    g = n(33039),
    E = n(979651),
    v = n(5192),
    I = n(933546),
    b = n(354459),
    S = n(981631),
    T = n(65154);
function y(e, t, n) {
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
let A = '__EMBEDDED_ACTIVITIES__';
function N(e) {
    switch (e.type) {
        case b.fO.ACTIVITY:
            return '\0'.concat(e.sortKey);
        case b.fO.HIDDEN_STREAM:
        case b.fO.STREAM:
            return ''.concat(e.userVideo ? '\x01' : '\x02').concat((0, I.Z)(e.userNick, e.user), '\x02');
        case b.fO.USER:
            var t, n;
            let r = '\x04';
            return (null === (t = e.voiceState) || void 0 === t ? void 0 : t.selfVideo) ? (r = '\x02') : (null === (n = e.voiceState) || void 0 === n ? void 0 : n.selfStream) && (r = '\x03'), ''.concat(r).concat((0, I.Z)(e.userNick, e.user));
    }
}
((i = r || (r = {})).VIDEO = 'VIDEO'), (i.STREAM = 'STREAM'), (i.FILTERED = 'FILTERED'), (i.SPEAKING = 'SPEAKING'), (i.ACTIVITY = 'ACTIVITY');
class C {
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
        let e = _.Z.getChannel(this.channelId);
        if (null == e || e.type === S.d4z.GUILD_TEXT) return !1;
        if (((this.call = f.Z.getCall(this.channelId)), e.isPrivate() && (null == this.call || this.call.unavailable))) return !1;
        let t = new Set(e.isGuildVocalOrThread() ? Object.keys(E.Z.getVoiceStatesForChannel(e.id)) : e.recipients);
        return (
            t.add(d.default.getId()),
            c.Z.getAllActiveStreamsForChannel(this.channelId).forEach((e) => {
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
        return this.updateParticipant(A);
    }
    hasEmbeddedActivity() {
        let e = this.participants[A];
        return null != e && e.length > 0;
    }
    updateParticipant(e) {
        let t = this.participants[e],
            n = e === A ? this._getParticipantsForEmbeddedActivities() : this._getParticipantsForUser(e);
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
                              if (n.type === b.fO.USER) {
                                  let t = (0, o.O)({
                                      userId: e,
                                      checkIsMuted: !0
                                  });
                                  return (
                                      t && (this.lastSpoke[e] = Date.now()),
                                      this.participantByIndex.set(n.id, {
                                          ...n,
                                          speaking: t,
                                          lastSpoke: this.lastSpoke[e],
                                          soundsharing: h.Z.isSoundSharing(e)
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
                                  r.type === b.fO.STREAM
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
        let e = l.ZP.getEmbeddedActivitiesForChannel(this.channelId),
            t = l.ZP.getSelfEmbeddedActivityForChannel(this.channelId);
        if (null == t) return e;
        {
            var n;
            let r = (0, a.uniqBy)([...e, t], (e) => e.applicationId);
            return (null === (n = t.participants) || void 0 === n ? void 0 : n.some((e) => e.sessionId === d.default.getSessionId())) ? r.filter((e) => e.applicationId !== t.applicationId && e.compositeInstanceId !== t.compositeInstanceId) : r;
        }
    }
    _getParticipantsForEmbeddedActivities() {
        return this._getEmbeddedActivities().map((e, t) => {
            var n, r, i;
            return {
                type: b.fO.ACTIVITY,
                id: e.applicationId,
                activityType: S.IIU.PLAYING,
                activityUrl: e.url,
                participants: [...(null !== (r = e.participants) && void 0 !== r ? r : [])],
                guildId: null !== (i = null === (n = _.Z.getChannel(this.channelId)) || void 0 === n ? void 0 : n.getGuildId()) && void 0 !== i ? i : null,
                sortKey: t.toString()
            };
        });
    }
    _getParticipantsForUser(e) {
        var t, n, r, i, a, s;
        let l, f;
        let I = [],
            S = m.default.getUser(e);
        if (null == S) return I;
        let y = E.Z.getVoiceStateForChannel(this.channelId, e),
            A = E.Z.getVoicePlatformForChannel(this.channelId, e),
            N = _.Z.getChannel(this.channelId),
            C = null !== (r = null === (n = this.call) || void 0 === n ? void 0 : null === (t = n.ringing) || void 0 === t ? void 0 : t.includes(e)) && void 0 !== r && r;
        (null != y || C) &&
            ((l = {
                type: b.fO.USER,
                ...g.Z.getUserStreamData(e, null == N ? void 0 : N.getGuildId()),
                user: S,
                id: S.id,
                voiceState: y,
                voicePlatform: A,
                speaking: (0, o.O)({
                    userId: e,
                    checkIsMuted: !0
                }),
                lastSpoke: null !== (i = this.lastSpoke[e]) && void 0 !== i ? i : 0,
                soundsharing: h.Z.isSoundSharing(e),
                ringing: C,
                userNick: v.ZP.getName(null == N ? void 0 : N.getGuildId(), this.channelId, S),
                localVideoDisabled: p.Z.isLocalVideoDisabled(S.id)
            }),
            I.push(l));
        let R = null !== (a = c.Z.getStreamForUser(e, null == N ? void 0 : N.getGuildId())) && void 0 !== a ? a : c.Z.getActiveStreamForUser(e, null == N ? void 0 : N.getGuildId());
        if (null != R && R.channelId === this.channelId) {
            let t = (0, u.V9)(R),
                n = this.getParticipant(t),
                r = R.ownerId === d.default.getId() && c.Z.isSelfStreamHidden(this.channelId),
                i =
                    (null == n ? void 0 : n.type) === b.fO.STREAM
                        ? {
                              maxResolution: null != n.maxResolution ? { ...n.maxResolution } : void 0,
                              maxFrameRate: n.maxFrameRate
                          }
                        : null;
            (f = {
                ...g.Z.getUserStreamData(e, null == N ? void 0 : N.getGuildId(), T.Yn.STREAM),
                ...i,
                type: r ? b.fO.HIDDEN_STREAM : b.fO.STREAM,
                id: t,
                userVideo: null !== (s = null == y ? void 0 : y.selfVideo) && void 0 !== s && s,
                user: S,
                userNick: v.ZP.getName(null == N ? void 0 : N.getGuildId(), this.channelId, S),
                stream: R
            }),
                I.push(f);
        }
        return I;
    }
    constructor(e) {
        y(this, 'channelId', void 0),
            y(this, 'call', void 0),
            y(this, 'participants', {}),
            y(this, 'lastSpoke', {}),
            y(
                this,
                'participantByIndex',
                new s.h((e) => {
                    var t;
                    let n = [];
                    return e.type === b.fO.USER && e.speaking && n.push('SPEAKING'), e.type === b.fO.USER && (null === (t = e.voiceState) || void 0 === t ? void 0 : t.selfVideo) ? (n.push('VIDEO'), !e.localVideoDisabled && n.push('FILTERED')) : (0, b._5)(e) && (n.push('STREAM'), e.type !== b.fO.HIDDEN_STREAM && null != e.streamId && n.push('FILTERED')), e.type === b.fO.ACTIVITY && (n.push('ACTIVITY'), n.push('FILTERED')), n;
                }, N)
            ),
            (this.channelId = e);
    }
}
