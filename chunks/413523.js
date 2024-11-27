n.d(t, {
    Yr: function () {
        return C;
    },
    ZP: function () {
        return R;
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
    l = n(636449),
    u = n(317381),
    c = n(569545),
    d = n(199902),
    f = n(314897),
    _ = n(523746),
    p = n(592125),
    h = n(131951),
    m = n(606304),
    g = n(594174),
    E = n(33039),
    v = n(979651),
    I = n(5192),
    T = n(933546),
    b = n(354459),
    S = n(981631),
    y = n(65154);
function A(e, t, n) {
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
let N = '__EMBEDDED_ACTIVITIES__';
function C(e) {
    switch (e.type) {
        case b.fO.ACTIVITY:
            return '\0'.concat(e.sortKey);
        case b.fO.HIDDEN_STREAM:
        case b.fO.STREAM:
            return ''.concat(e.userVideo ? '\x01' : '\x02').concat((0, T.Z)(e.userNick, e.user), '\x02');
        case b.fO.USER:
            var t, n;
            let r = '\x04';
            return (null === (t = e.voiceState) || void 0 === t ? void 0 : t.selfVideo) ? (r = '\x02') : (null === (n = e.voiceState) || void 0 === n ? void 0 : n.selfStream) && (r = '\x03'), ''.concat(r).concat((0, T.Z)(e.userNick, e.user));
    }
}
((i = r || (r = {})).VIDEO = 'VIDEO'), (i.STREAM = 'STREAM'), (i.FILTERED = 'FILTERED'), (i.SPEAKING = 'SPEAKING'), (i.ACTIVITY = 'ACTIVITY');
class R {
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
        let e = p.Z.getChannel(this.channelId);
        if (null == e || e.type === S.d4z.GUILD_TEXT) return !1;
        if (((this.call = _.Z.getCall(this.channelId)), e.isPrivate() && (null == this.call || this.call.unavailable))) return !1;
        let t = new Set(e.isGuildVocalOrThread() ? Object.keys(v.Z.getVoiceStatesForChannel(e.id)) : e.recipients);
        return (
            t.add(f.default.getId()),
            d.Z.getAllActiveStreamsForChannel(this.channelId).forEach((e) => {
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
        return this.updateParticipant(N);
    }
    hasEmbeddedActivity() {
        let e = this.participants[N];
        return null != e && e.length > 0;
    }
    updateParticipant(e) {
        let t = this.participants[e],
            n = e === N ? this._getParticipantsForEmbeddedActivities() : this._getParticipantsForUser(e);
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
        let e = u.ZP.getEmbeddedActivitiesForChannel(this.channelId),
            t = u.ZP.getSelfEmbeddedActivityForChannel(this.channelId);
        if (null == t) return e;
        {
            var n;
            let r = (0, a.uniqBy)([...e, t], (e) => e.applicationId),
                i = null === (n = t.participants) || void 0 === n ? void 0 : n.some((e) => e.sessionId === f.default.getSessionId());
            return (0, l.R)() && i ? r.filter((e) => e.applicationId !== t.applicationId && e.compositeInstanceId !== t.compositeInstanceId) : r;
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
                guildId: null !== (i = null === (n = p.Z.getChannel(this.channelId)) || void 0 === n ? void 0 : n.getGuildId()) && void 0 !== i ? i : null,
                sortKey: t.toString()
            };
        });
    }
    _getParticipantsForUser(e) {
        var t, n, r, i, a, s;
        let l, u;
        let _ = [],
            T = g.default.getUser(e);
        if (null == T) return _;
        let S = v.Z.getVoiceStateForChannel(this.channelId, e),
            A = v.Z.getVoicePlatformForChannel(this.channelId, e),
            N = p.Z.getChannel(this.channelId),
            C = null !== (r = null === (n = this.call) || void 0 === n ? void 0 : null === (t = n.ringing) || void 0 === t ? void 0 : t.includes(e)) && void 0 !== r && r;
        (null != S || C) &&
            ((l = {
                type: b.fO.USER,
                ...E.Z.getUserStreamData(e, null == N ? void 0 : N.getGuildId()),
                user: T,
                id: T.id,
                voiceState: S,
                voicePlatform: A,
                speaking: (0, o.O)({
                    userId: e,
                    checkIsMuted: !0
                }),
                lastSpoke: null !== (i = this.lastSpoke[e]) && void 0 !== i ? i : 0,
                soundsharing: m.Z.isSoundSharing(e),
                ringing: C,
                userNick: I.ZP.getName(null == N ? void 0 : N.getGuildId(), this.channelId, T),
                localVideoDisabled: h.Z.isLocalVideoDisabled(T.id)
            }),
            _.push(l));
        let R = null !== (a = d.Z.getStreamForUser(e, null == N ? void 0 : N.getGuildId())) && void 0 !== a ? a : d.Z.getActiveStreamForUser(e, null == N ? void 0 : N.getGuildId());
        if (null != R && R.channelId === this.channelId) {
            let t = (0, c.V9)(R),
                n = this.getParticipant(t),
                r = R.ownerId === f.default.getId() && d.Z.isSelfStreamHidden(this.channelId),
                i =
                    (null == n ? void 0 : n.type) === b.fO.STREAM
                        ? {
                              maxResolution: null != n.maxResolution ? { ...n.maxResolution } : void 0,
                              maxFrameRate: n.maxFrameRate
                          }
                        : null;
            (u = {
                ...E.Z.getUserStreamData(e, null == N ? void 0 : N.getGuildId(), y.Yn.STREAM),
                ...i,
                type: r ? b.fO.HIDDEN_STREAM : b.fO.STREAM,
                id: t,
                userVideo: null !== (s = null == S ? void 0 : S.selfVideo) && void 0 !== s && s,
                user: T,
                userNick: I.ZP.getName(null == N ? void 0 : N.getGuildId(), this.channelId, T),
                stream: R
            }),
                _.push(u);
        }
        return _;
    }
    constructor(e) {
        A(this, 'channelId', void 0),
            A(this, 'call', void 0),
            A(this, 'participants', {}),
            A(this, 'lastSpoke', {}),
            A(
                this,
                'participantByIndex',
                new s.h((e) => {
                    var t;
                    let n = [];
                    return e.type === b.fO.USER && e.speaking && n.push('SPEAKING'), e.type === b.fO.USER && (null === (t = e.voiceState) || void 0 === t ? void 0 : t.selfVideo) ? (n.push('VIDEO'), !e.localVideoDisabled && n.push('FILTERED')) : (0, b._5)(e) && (n.push('STREAM'), e.type !== b.fO.HIDDEN_STREAM && null != e.streamId && n.push('FILTERED')), e.type === b.fO.ACTIVITY && (n.push('ACTIVITY'), n.push('FILTERED')), n;
                }, C)
            ),
            (this.channelId = e);
    }
}
