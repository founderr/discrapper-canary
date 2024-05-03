"use strict";
n.r(t), n.d(t, {
  trackClanProfileViewed: function() {
    return o
  }
});
var i = n("314897"),
  r = n("271383"),
  a = n("626135"),
  s = n("981631");

function o(e) {
  let {
    guildId: t,
    hasJoinRequest: n,
    source: o,
    messageId: l,
    tagUserId: u
  } = e, d = i.default.getId(), _ = r.default.getMember(t, i.default.getId()), c = (null == _ ? void 0 : _.joinedAt) != null;
  a.default.track(s.AnalyticEvents.CLAN_PROFILE_VIEWED, {
    guild_id: t,
    is_member: c,
    has_join_request: n,
    source: o,
    viewing_user_id: d,
    tag_owner_user_id: u,
    message_id: l
  })
}