n.d(t, {
    Ui: function () {
        return i;
    },
    ZP: function () {
        return C;
    },
    pV: function () {
        return r;
    }
}),
    n(653041),
    n(47120);
var r,
    i,
    a,
    s,
    o = n(759174),
    l = n(933546),
    u = n(569545),
    c = n(199902),
    d = n(592125),
    f = n(720202),
    _ = n(271383),
    h = n(699516),
    p = n(594174),
    m = n(979651),
    g = n(5192),
    E = n(88751),
    v = n(427679),
    I = n(590415),
    S = n(974609);
function b(e, t, n) {
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
function T(e) {
    var t;
    let { speaker: n, role: r, user: i, userNick: a, connectedOn: s, voiceState: o, type: u } = e,
        c = o.selfMute ? '\x01' : '\0',
        d = o.selfVideo ? '\0' : '\x01',
        f = ''.concat(null !== (t = null == r ? void 0 : r.position) && void 0 !== t ? t : 999).padStart(3, '0');
    return ''
        .concat(n ? '\0' : '\x01')
        .concat('STREAM' === u ? '\0' : '\x01')
        .concat(c)
        .concat(d)
        .concat(f)
        .concat(s)
        .concat((0, l.Z)(a, i));
}
function y(e) {
    let { user: t, voiceState: n } = e,
        r = n.requestToSpeakTimestamp;
    return null == r ? t.id : ''.concat(Date.parse(r)).concat(t.id);
}
function A(e) {
    return e === I.xO.REQUESTED_TO_SPEAK || e === I.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
}
function N(e) {
    let { speaker: t, role: n, rtsState: r, blocked: i, ignored: a, isFriend: s } = e,
        o = [];
    return A(r) && o.push('ALL_REQUESTED_TO_SPEAK'), r === I.xO.REQUESTED_TO_SPEAK && o.push('REQUESTED_TO_SPEAK_ONLY'), t ? o.push('SPEAKER') : (null != n ? o.push(n.id) : o.push('NO_ROLE'), o.push('AUDIENCE')), i ? o.push('BLOCKED') : a && o.push('IGNORED'), s && o.push('FRIEND'), o;
}
((a = r || (r = {})).SPEAKER = 'SPEAKER'), (a.AUDIENCE = 'AUDIENCE'), (a.NO_ROLE = 'NO_ROLE'), (a.ALL_REQUESTED_TO_SPEAK = 'ALL_REQUESTED_TO_SPEAK'), (a.REQUESTED_TO_SPEAK_ONLY = 'REQUESTED_TO_SPEAK_ONLY'), (a.BLOCKED = 'BLOCKED'), (a.IGNORED = 'IGNORED'), (a.FRIEND = 'FRIEND'), (a.SELECTED = 'SELECTED'), (a.MEDIA = 'MEDIA'), ((s = i || (i = {})).VOICE = 'VOICE'), (s.STREAM = 'STREAM');
class C {
    _getParticipantsForUser(e, t) {
        var n, r;
        let i;
        let a = [],
            s = m.Z.getVoiceStateForChannel(this.channelId, e);
        if (null == s) return a;
        let o = p.default.getUser(e);
        if (null == o) return null != this.guildId && v.Z.isPublic(this.channelId) && f.Z.requestMember(this.guildId, e), a;
        let l = null != t ? t[0] : null,
            d = {
                user: o,
                userNick: g.ZP.getName(this.guildId, this.channelId, o),
                voiceState: s,
                role: (0, S.H)(this.guildId, e),
                speaker: E.ZP.isSpeaker(e, this.channelId),
                member: null != this.guildId ? _.ZP.getMember(this.guildId, e) : null,
                blocked: h.Z.isBlocked(o.id),
                ignored: h.Z.isIgnored(o.id),
                isFriend: h.Z.isFriend(o.id),
                connectedOn: null !== (n = null == l ? void 0 : l.connectedOn) && void 0 !== n ? n : Date.now()
            },
            b = {
                ...d,
                type: 'VOICE',
                id: o.id,
                rtsState: (0, I.gf)(s)
            };
        a.push(b);
        let T = null !== (r = c.Z.getStreamForUser(e, this.guildId)) && void 0 !== r ? r : c.Z.getActiveStreamForUser(e, this.guildId);
        if (null != T && T.channelId === this.channelId) {
            let e = (0, u.V9)(T);
            (i = {
                ...d,
                id: e,
                type: 'STREAM',
                rtsState: I.xO.NONE
            }),
                a.push(i);
        }
        return a;
    }
    updateParticipant(e) {
        let t = this.participants[e],
            n = this._getParticipantsForUser(e, t);
        return (
            (null != t || 0 !== n.length) &&
            (null == t ||
                t.forEach((e) => {
                    this._participantsIndex.delete(e.id), this._requestToSpeakIndex.delete(e.id);
                }),
            n.forEach((t) => {
                this._participantsIndex.set(t.id, t), t.id === e && A(t.rtsState) ? this._requestToSpeakIndex.set(e, t) : this._requestToSpeakIndex.delete(e);
            }),
            (this.participants[e] = n),
            !0)
        );
    }
    rebuild() {
        let e = d.Z.getChannel(this.channelId);
        if (null == e || !e.isGuildStageVoice()) return !1;
        let t = new Set(Object.keys(m.Z.getVoiceStatesForChannel(e.id)));
        return this._participantsIndex.clear(), this._requestToSpeakIndex.clear(), (this.participants = {}), t.forEach((e) => this.updateParticipant(e)), !0;
    }
    get version() {
        return this._participantsIndex.version;
    }
    size(e) {
        return this._participantsIndex.size(e);
    }
    toArray(e) {
        return this._participantsIndex.values(e, !0);
    }
    getParticipant(e) {
        var t;
        return null !== (t = this._participantsIndex.get(e)) && void 0 !== t ? t : null;
    }
    get requestToSpeakVersion() {
        return this._requestToSpeakIndex.version;
    }
    getRequestToSpeakParticipants() {
        return this._requestToSpeakIndex.values(void 0, !0);
    }
    constructor(e) {
        var t;
        b(this, 'channelId', void 0), b(this, 'guildId', void 0), b(this, 'participants', {}), b(this, '_participantsIndex', new o.h(N, T)), b(this, '_requestToSpeakIndex', new o.h(() => [], y)), (this.channelId = e), (this.guildId = null === (t = d.Z.getChannel(e)) || void 0 === t ? void 0 : t.getGuildId());
    }
}
