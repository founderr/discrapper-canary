"use strict";
n.d(t, {
  Ui: function() {
    return r
  },
  ZP: function() {
    return L
  },
  pV: function() {
    return i
  }
}), n(653041), n(47120);
var i, r, s, o, a = n(759174),
  l = n(933546),
  u = n(569545),
  _ = n(199902),
  c = n(592125),
  d = n(720202),
  E = n(271383),
  I = n(699516),
  T = n(594174),
  h = n(979651),
  f = n(5192),
  S = n(88751),
  N = n(427679),
  A = n(590415),
  m = n(974609),
  O = n(981631);

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function R(e) {
  var t;
  let {
    speaker: n,
    role: i,
    user: r,
    userNick: s,
    connectedOn: o,
    voiceState: a,
    type: u
  } = e, _ = a.selfMute ? "\x01" : "\0", c = a.selfVideo ? "\0" : "\x01", d = "".concat(null !== (t = null == i ? void 0 : i.position) && void 0 !== t ? t : 999).padStart(3, "0");
  return "".concat(n ? "\0" : "\x01").concat("STREAM" === u ? "\0" : "\x01").concat(_).concat(c).concat(d).concat(o).concat((0, l.Z)(s, r))
}

function g(e) {
  let {
    user: t,
    voiceState: n
  } = e, i = n.requestToSpeakTimestamp;
  return null == i ? t.id : "".concat(Date.parse(i)).concat(t.id)
}

function C(e) {
  return e === A.xO.REQUESTED_TO_SPEAK || e === A.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK
}

function v(e) {
  let {
    speaker: t,
    role: n,
    rtsState: i,
    blocked: r,
    isFriend: s
  } = e, o = [];
  return C(i) && o.push("ALL_REQUESTED_TO_SPEAK"), i === A.xO.REQUESTED_TO_SPEAK && o.push("REQUESTED_TO_SPEAK_ONLY"), t ? o.push("SPEAKER") : (null != n ? o.push(n.id) : o.push("NO_ROLE"), o.push("AUDIENCE")), r && o.push("BLOCKED"), s && o.push("FRIEND"), o
}(s = i || (i = {})).SPEAKER = "SPEAKER", s.AUDIENCE = "AUDIENCE", s.NO_ROLE = "NO_ROLE", s.ALL_REQUESTED_TO_SPEAK = "ALL_REQUESTED_TO_SPEAK", s.REQUESTED_TO_SPEAK_ONLY = "REQUESTED_TO_SPEAK_ONLY", s.BLOCKED = "BLOCKED", s.FRIEND = "FRIEND", s.SELECTED = "SELECTED", s.MEDIA = "MEDIA", (o = r || (r = {})).VOICE = "VOICE", o.STREAM = "STREAM";
class L {
  _getParticipantsForUser(e, t) {
    var n, i;
    let r;
    let s = [],
      o = h.Z.getVoiceStateForChannel(this.channelId, e);
    if (null == o) return s;
    let a = T.default.getUser(e);
    if (null == a) return null != this.guildId && N.Z.isPublic(this.channelId) && d.Z.requestMember(this.guildId, e), s;
    let l = null != t ? t[0] : null,
      c = {
        user: a,
        userNick: f.ZP.getName(this.guildId, this.channelId, a),
        voiceState: o,
        role: (0, m.H)(this.guildId, e),
        speaker: S.ZP.isSpeaker(e, this.channelId),
        member: null != this.guildId ? E.ZP.getMember(this.guildId, e) : null,
        blocked: I.Z.getRelationships()[a.id] === O.OGo.BLOCKED,
        isFriend: I.Z.isFriend(a.id),
        connectedOn: null !== (n = null == l ? void 0 : l.connectedOn) && void 0 !== n ? n : Date.now()
      },
      p = {
        ...c,
        type: "VOICE",
        id: a.id,
        rtsState: (0, A.gf)(o)
      };
    s.push(p);
    let R = null !== (i = _.Z.getStreamForUser(e, this.guildId)) && void 0 !== i ? i : _.Z.getActiveStreamForUser(e, this.guildId);
    if (null != R && R.channelId === this.channelId) {
      let e = (0, u.V9)(R);
      r = {
        ...c,
        id: e,
        type: "STREAM",
        rtsState: A.xO.NONE
      }, s.push(r)
    }
    return s
  }
  updateParticipant(e) {
    let t = this.participants[e],
      n = this._getParticipantsForUser(e, t);
    return (null != t || 0 !== n.length) && (null == t || t.forEach(e => {
      this._participantsIndex.delete(e.id), this._requestToSpeakIndex.delete(e.id)
    }), n.forEach(t => {
      this._participantsIndex.set(t.id, t), t.id === e && C(t.rtsState) ? this._requestToSpeakIndex.set(e, t) : this._requestToSpeakIndex.delete(e)
    }), this.participants[e] = n, !0)
  }
  rebuild() {
    let e = c.Z.getChannel(this.channelId);
    if (null == e || !e.isGuildStageVoice()) return !1;
    let t = new Set(Object.keys(h.Z.getVoiceStatesForChannel(e.id)));
    return this._participantsIndex.clear(), this._requestToSpeakIndex.clear(), this.participants = {}, t.forEach(e => this.updateParticipant(e)), !0
  }
  get version() {
    return this._participantsIndex.version
  }
  size(e) {
    return this._participantsIndex.size(e)
  }
  toArray(e) {
    return this._participantsIndex.values(e, !0)
  }
  getParticipant(e) {
    var t;
    return null !== (t = this._participantsIndex.get(e)) && void 0 !== t ? t : null
  }
  get requestToSpeakVersion() {
    return this._requestToSpeakIndex.version
  }
  getRequestToSpeakParticipants() {
    return this._requestToSpeakIndex.values(void 0, !0)
  }
  constructor(e) {
    var t;
    p(this, "channelId", void 0), p(this, "guildId", void 0), p(this, "participants", {}), p(this, "_participantsIndex", new a.h(v, R)), p(this, "_requestToSpeakIndex", new a.h(() => [], g)), this.channelId = e, this.guildId = null === (t = c.Z.getChannel(e)) || void 0 === t ? void 0 : t.getGuildId()
  }
}