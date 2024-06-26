"use strict";
let i, r;
n(47120);
var s, o, a, l, u = n(392711),
  _ = n.n(u),
  c = n(442837),
  d = n(570140),
  E = n(358221),
  I = n(569545),
  T = n(199902),
  h = n(314897),
  f = n(131951),
  S = n(606304),
  N = n(354459);

function A() {
  let e, t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
  if (null == i) e = null;
  else {
    var n, s, o, a, l;
    e = E.Z.getSelectedParticipantId(i);
    let t = T.Z.getLastActiveStream(),
      u = null != e ? E.Z.getParticipant(i, e) : null;
    if (((null == u ? void 0 : u.type) === N.fO.ACTIVITY || (null == u ? void 0 : u.type) === N.fO.USER && !(null === (n = u.voiceState) || void 0 === n ? void 0 : n.selfVideo)) && (e = null), null != t && null == e && (e = null === (s = E.Z.getParticipant(i, (0, I.V9)(t))) || void 0 === s ? void 0 : s.id), null == e) {
      let t = h.default.getId(),
        n = _()(E.Z.getVideoParticipants(i)).filter(e => e.type === N.fO.USER && e.user.id !== t && !f.Z.isLocalVideoDisabled(e.user.id)),
        s = Date.now();
      null == (e = null === (o = n.map(e => [e.user.id, S.Z.getSpeakingDuration(e.user.id, s)]).filter(e => {
        let [t, n] = e;
        return 0 !== n
      }).maxBy(e => {
        let [t, n] = e;
        return -n
      })) || void 0 === o ? void 0 : o[0]) && (e = null != r ? r : null === (l = n.first()) || void 0 === l ? void 0 : null === (a = l.user) || void 0 === a ? void 0 : a.id)
    }
  }
  r !== e && (r = e, t && R.emitChange())
}
let m = _().debounce(A, 300);

function O() {
  return m(), !1
}
class p extends(s = c.ZP.Store) {
  initialize() {
    this.waitFor(E.Z, h.default, S.Z, T.Z, f.Z), this.syncWith([E.Z, T.Z], O)
  }
  getSpeaker(e) {
    return i !== e && (i = e, A(!1)), null != r ? r : h.default.getId()
  }
}
l = "VideoSpeakerStore", (a = "displayName") in(o = p) ? Object.defineProperty(o, a, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : o[a] = l;
let R = new p(d.Z, {
  AUDIO_SET_LOCAL_VIDEO_DISABLED: O
});
t.Z = R