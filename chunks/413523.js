n.d(t, {
    Yr: function () {
        return v;
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
    _ = n(523746),
    E = n(592125),
    f = n(131951),
    h = n(606304),
    p = n(594174),
    I = n(33039),
    m = n(979651),
    T = n(5192),
    S = n(933546),
    g = n(354459),
    A = n(981631),
    N = n(65154);
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
let O = '__EMBEDDED_ACTIVITIES__';
function v(e) {
    switch (e.type) {
        case g.fO.ACTIVITY:
            return '\0'.concat(e.sortKey);
        case g.fO.HIDDEN_STREAM:
        case g.fO.STREAM:
            return ''.concat(e.userVideo ? '\x01' : '\x02').concat((0, S.Z)(e.userNick, e.user), '\x02');
        case g.fO.USER:
            var t, n;
            let r = '\x04';
            return (null === (t = e.voiceState) || void 0 === t ? void 0 : t.selfVideo) ? (r = '\x02') : (null === (n = e.voiceState) || void 0 === n ? void 0 : n.selfStream) && (r = '\x03'), ''.concat(r).concat((0, S.Z)(e.userNick, e.user));
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
        let e = E.Z.getChannel(this.channelId);
        if (null == e || e.type === A.d4z.GUILD_TEXT) return !1;
        if (((this.call = _.Z.getCall(this.channelId)), e.isPrivate() && (null == this.call || this.call.unavailable))) return !1;
        let t = new Set(e.isGuildVocalOrThread() ? Object.keys(m.Z.getVoiceStatesForChannel(e.id)) : e.recipients);
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
        return this.updateParticipant(O);
    }
    hasEmbeddedActivity() {
        let e = this.participants[O];
        return null != e && e.length > 0;
    }
    updateParticipant(e) {
        let t = this.participants[e],
            n = e === O ? this._getParticipantsForEmbeddedActivities() : this._getParticipantsForUser(e);
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
                              if (n.type === g.fO.USER) {
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
                                  r.type === g.fO.STREAM
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
        return null == t ? e : (0, a.uniqBy)([...e, t], (e) => e.applicationId);
    }
    _getParticipantsForEmbeddedActivities() {
        return this._getEmbeddedActivities().map((e, t) => {
            var n, r, i;
            return {
                type: g.fO.ACTIVITY,
                id: e.applicationId,
                activityType: A.IIU.PLAYING,
                activityUrl: e.url,
                participants: [...(null !== (r = e.participants) && void 0 !== r ? r : [])],
                guildId: null !== (i = null === (n = E.Z.getChannel(this.channelId)) || void 0 === n ? void 0 : n.getGuildId()) && void 0 !== i ? i : null,
                sortKey: t.toString()
            };
        });
    }
    _getParticipantsForUser(e) {
        var t, n, r, i, a, s;
        let l, _;
        let S = [],
            A = p.default.getUser(e);
        if (null == A) return S;
        let R = m.Z.getVoiceStateForChannel(this.channelId, e),
            O = m.Z.getVoicePlatformForChannel(this.channelId, e),
            v = E.Z.getChannel(this.channelId),
            C = null !== (r = null === (n = this.call) || void 0 === n ? void 0 : null === (t = n.ringing) || void 0 === t ? void 0 : t.includes(e)) && void 0 !== r && r;
        (null != R || C) &&
            ((l = {
                type: g.fO.USER,
                ...I.Z.getUserStreamData(e, null == v ? void 0 : v.getGuildId()),
                user: A,
                id: A.id,
                voiceState: R,
                voicePlatform: O,
                speaking: (0, o.O)({
                    userId: e,
                    checkIsMuted: !0
                }),
                lastSpoke: null !== (i = this.lastSpoke[e]) && void 0 !== i ? i : 0,
                soundsharing: h.Z.isSoundSharing(e),
                ringing: C,
                userNick: T.ZP.getName(null == v ? void 0 : v.getGuildId(), this.channelId, A),
                localVideoDisabled: f.Z.isLocalVideoDisabled(A.id)
            }),
            S.push(l));
        let L = null !== (a = c.Z.getStreamForUser(e, null == v ? void 0 : v.getGuildId())) && void 0 !== a ? a : c.Z.getActiveStreamForUser(e, null == v ? void 0 : v.getGuildId());
        if (null != L && L.channelId === this.channelId) {
            let t = (0, u.V9)(L),
                n = this.getParticipant(t),
                r = L.ownerId === d.default.getId() && c.Z.isSelfStreamHidden(this.channelId),
                i =
                    (null == n ? void 0 : n.type) === g.fO.STREAM
                        ? {
                              maxResolution: null != n.maxResolution ? { ...n.maxResolution } : void 0,
                              maxFrameRate: n.maxFrameRate
                          }
                        : null;
            (_ = {
                ...I.Z.getUserStreamData(e, null == v ? void 0 : v.getGuildId(), N.Yn.STREAM),
                ...i,
                type: r ? g.fO.HIDDEN_STREAM : g.fO.STREAM,
                id: t,
                userVideo: null !== (s = null == R ? void 0 : R.selfVideo) && void 0 !== s && s,
                user: A,
                userNick: T.ZP.getName(null == v ? void 0 : v.getGuildId(), this.channelId, A),
                stream: L
            }),
                S.push(_);
        }
        return S;
    }
    constructor(e) {
        R(this, 'channelId', void 0),
            R(this, 'call', void 0),
            R(this, 'participants', {}),
            R(this, 'lastSpoke', {}),
            R(
                this,
                'participantByIndex',
                new s.h((e) => {
                    var t;
                    let n = [];
                    return e.type === g.fO.USER && e.speaking && n.push('SPEAKING'), e.type === g.fO.USER && (null === (t = e.voiceState) || void 0 === t ? void 0 : t.selfVideo) ? (n.push('VIDEO'), !e.localVideoDisabled && n.push('FILTERED')) : (0, g._5)(e) && (n.push('STREAM'), e.type !== g.fO.HIDDEN_STREAM && null != e.streamId && n.push('FILTERED')), e.type === g.fO.ACTIVITY && (n.push('ACTIVITY'), n.push('FILTERED')), n;
                }, v)
            ),
            (this.channelId = e);
    }
}
