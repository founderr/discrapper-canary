"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
});
var i = n("714617"),
  s = n.n(i),
  r = n("446674"),
  a = n("913144"),
  o = n("42203"),
  l = n("305961"),
  u = n("945956"),
  d = n("18494"),
  c = n("991170"),
  f = n("488464"),
  _ = n("998716"),
  h = n("118033"),
  g = n("834052"),
  m = n("819450"),
  E = n("837979"),
  p = n("49111");
let v = null;

function S() {
  let e = function() {
    var e, t, n, i, s, r, a;
    let u = d.default.getVoiceChannelId();
    if (null == u) return null;
    let S = g.default.getStageInstanceByChannel(u);
    if (null == S) return null;
    let T = o.default.getChannel(u);
    if (null == T || !c.default.canEveryone(p.Permissions.VIEW_CHANNEL, T)) return null;
    let I = l.default.getGuild(T.getGuildId());
    if (null == I || !I.hasFeature(p.GuildFeatures.DISCOVERABLE)) return null;
    let C = (0, h.packStageChannelPartyId)(T, S),
      A = (null == v ? void 0 : null === (e = v.party) || void 0 === e ? void 0 : e.id) === C ? v : null,
      y = f.default.getMutableParticipants(T.id, _.StageChannelParticipantNamedIndex.SPEAKER),
      N = y.filter(e => e.type === _.StageChannelParticipantTypes.STREAM).length,
      R = y.length - N,
      O = f.default.getParticipantCount(u) - N,
      D = (null == A ? void 0 : null === (t = A.party) || void 0 === t ? void 0 : t.size) != null ? A.party.size[1] : 0;
    return {
      application_id: E.STAGE_APPLICATION_ID,
      name: null !== (s = null !== (i = S.topic) && void 0 !== i ? i : T.topic) && void 0 !== s ? s : T.name,
      type: (0, m.getStageHasMedia)(T.id) ? p.ActivityTypes.WATCHING : p.ActivityTypes.LISTENING,
      timestamps: {
        start: null !== (r = null == A ? void 0 : null === (n = A.timestamps) || void 0 === n ? void 0 : n.start) && void 0 !== r ? r : new Date().getTime()
      },
      assets: {
        small_image: null !== (a = I.icon) && void 0 !== a ? a : void 0,
        small_text: I.name
      },
      party: {
        id: C,
        size: [R, Math.max(O, D)]
      }
    }
  }();
  return !s(e, v) && (v = e, !0)
}
class T extends r.default.Store {
  initialize() {
    this.waitFor(o.default, d.default, g.default, u.default)
  }
  getActivity() {
    return v
  }
}
T.displayName = "StageChannelSelfRichPresenceStore";
var I = new T(a.default, {
  CONNECTION_OPEN: S,
  STAGE_INSTANCE_CREATE: S,
  STAGE_INSTANCE_UPDATE: S,
  STAGE_INSTANCE_DELETE: S,
  VOICE_CHANNEL_SELECT: S,
  RTC_CONNECTION_STATE: function(e) {
    var t, n, i;
    let {
      state: s
    } = e, r = null !== (i = null == v ? void 0 : null === (n = v.party) || void 0 === n ? void 0 : null === (t = n.size) || void 0 === t ? void 0 : t[1]) && void 0 !== i ? i : 0;
    return s === p.RTCConnectionStates.RTC_CONNECTED && !(r > 0) && S()
  },
  VOICE_STATE_UPDATES: function(e) {
    let {
      voiceStates: t
    } = e;
    if (null == v) return;
    let n = (0, h.unpackStageChannelParty)(v);
    null != n && null != t.find(e => e.channelId === n.channelId) && S()
  }
})