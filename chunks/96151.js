"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var l = n("446674"),
  a = n("191145"),
  s = n("305961"),
  i = n("957255"),
  r = n("567469"),
  o = n("998716"),
  u = n("923510"),
  d = n("819450"),
  c = n("49111");

function f(e) {
  var t;
  let n = (0, l.useStateFromStores)([a.default], () => a.default.getStageVideoLimitBoostUpsellDismissed(e.id), [e.id]),
    f = (0, r.useActualStageSpeakerCount)(e.id),
    h = (0, r.useStageParticipantsCount)(e.id, o.StageChannelParticipantNamedIndex.AUDIENCE),
    m = (0, d.useStageHasMedia)(e.id),
    p = (0, l.useStateFromStores)([s.default], () => s.default.getGuild(e.guild_id), [e.guild_id]),
    E = (0, l.useStateFromStores)([i.default], () => i.default.can(u.MODERATE_STAGE_CHANNEL_PERMISSIONS, e), [e]),
    S = null !== (t = null == p ? void 0 : p.maxStageVideoChannelUsers) && void 0 !== t ? t : 0,
    g = !(null == p ? void 0 : p.isCommunity()) && S > c.MAX_STAGE_VIDEO_USER_LIMIT_TIER3;
  return m && !n && E && !g && f + h >= S
}