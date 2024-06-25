"use strict";
var i, r, s, o, a = n(348327),
  l = n.n(a),
  u = n(442837),
  _ = n(570140),
  c = n(592125),
  d = n(430824),
  E = n(19780),
  I = n(944486),
  T = n(700785),
  h = n(565799),
  f = n(501655),
  S = n(750154),
  A = n(427679),
  N = n(71275),
  m = n(157925),
  O = n(981631);
let p = null;

function R() {
  let e = function() {
    var e, t, n, i, r, s, o;
    let a = I.Z.getVoiceChannelId();
    if (null == a) return null;
    let l = A.Z.getStageInstanceByChannel(a);
    if (null == l) return null;
    let u = c.Z.getChannel(a);
    if (null == u || !T.oz(O.Plq.VIEW_CHANNEL, u)) return null;
    let _ = d.Z.getGuild(u.getGuildId());
    if (null == _ || !_.hasFeature(O.oNc.DISCOVERABLE)) return null;
    let E = (0, S.Lw)(u, l),
      R = (null == p ? void 0 : null === (e = p.party) || void 0 === e ? void 0 : e.id) === E ? p : null,
      g = h.Z.getMutableParticipants(u.id, f.pV.SPEAKER),
      C = g.filter(e => e.type === f.Ui.STREAM).length,
      v = g.length - C,
      L = h.Z.getParticipantCount(a) - C,
      D = (null == R ? void 0 : null === (t = R.party) || void 0 === t ? void 0 : t.size) != null ? R.party.size[1] : 0;
    return {
      application_id: m.gD,
      name: null !== (r = null !== (i = l.topic) && void 0 !== i ? i : u.topic) && void 0 !== r ? r : u.name,
      type: (0, N.xJ)(u.id) ? O.IIU.WATCHING : O.IIU.LISTENING,
      timestamps: {
        start: null !== (s = null == R ? void 0 : null === (n = R.timestamps) || void 0 === n ? void 0 : n.start) && void 0 !== s ? s : new Date().getTime()
      },
      assets: {
        small_image: null !== (o = _.icon) && void 0 !== o ? o : void 0,
        small_text: _.name
      },
      party: {
        id: E,
        size: [v, Math.max(L, D)]
      }
    }
  }();
  return !l()(e, p) && (p = e, !0)
}
class g extends(o = u.ZP.Store) {
  initialize() {
    this.waitFor(c.Z, I.Z, A.Z, E.Z)
  }
  getActivity() {
    return p
  }
}
s = "StageChannelSelfRichPresenceStore", (r = "displayName") in(i = g) ? Object.defineProperty(i, r, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[r] = s, t.Z = new g(_.Z, {
  CONNECTION_OPEN: R,
  STAGE_INSTANCE_CREATE: R,
  STAGE_INSTANCE_UPDATE: R,
  STAGE_INSTANCE_DELETE: R,
  VOICE_CHANNEL_SELECT: R,
  RTC_CONNECTION_STATE: function(e) {
    var t, n, i;
    let {
      state: r
    } = e, s = null !== (i = null == p ? void 0 : null === (n = p.party) || void 0 === n ? void 0 : null === (t = n.size) || void 0 === t ? void 0 : t[1]) && void 0 !== i ? i : 0;
    return r === O.hes.RTC_CONNECTED && !(s > 0) && R()
  },
  VOICE_STATE_UPDATES: function(e) {
    let {
      voiceStates: t
    } = e;
    if (null == p) return;
    let n = (0, S.rq)(p);
    null != n && null != t.find(e => e.channelId === n.channelId) && R()
  }
})