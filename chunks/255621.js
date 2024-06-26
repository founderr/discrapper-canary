"use strict";
n.d(t, {
  Z: function() {
    return l
  }
});
var i = n(358085),
  r = n(782769),
  s = n(527805),
  o = n(620662),
  a = n(981631);

function l(e) {
  let {
    user: t,
    activity: n,
    application: l,
    channelId: u,
    currentUser: _,
    isEmbedded: c,
    ChannelStore: d,
    GuildStore: E,
    GuildMemberCountStore: I,
    RelationshipStore: T,
    SelectedChannelStore: h,
    VoiceStateStore: f,
    PermissionStore: S
  } = e, N = d.getChannel(u), A = (0, r.a)(N);
  if (null == t) return !1;
  if (c) return (0, s.ZP)({
    userId: t.id,
    activity: n,
    channelId: u,
    currentUser: _,
    application: l,
    isActivitiesEnabledForCurrentPlatform: A,
    ChannelStore: d,
    VoiceStateStore: f,
    PermissionStore: S,
    GuildStore: E
  }) === s.Fw.CAN_JOIN;
  if (!(0, i.isDesktop)()) return !1;
  if ((0, o.Z)(n, a.xjy.PARTY_PRIVACY_FRIENDS) && T.isFriend(t.id)) return !0;
  if ((0, o.Z)(n, a.xjy.PARTY_PRIVACY_VOICE_CHANNEL)) {
    let e = d.getChannel(h.getVoiceChannelId());
    if (null == e || !f.isInChannel(e.id, t.id)) return !1;
    switch (e.type) {
      case a.d4z.DM:
      case a.d4z.GROUP_DM:
        return !0
    }
    let n = E.getGuild(e.getGuildId());
    if (null == n || n.hasFeature(a.oNc.COMMUNITY)) return !1;
    let i = I.getMemberCount(n.id);
    return null != i && i < 100
  }
  return !1
}