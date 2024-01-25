"use strict";
r.r(t), r.d(t, {
  UNUSUAL_DM_COMPARISON_DELTA: function() {
    return n
  },
  createMemberSearchCursor: function() {
    return s
  }
});
var i = r("718517");
let n = 2 * i.default.Millis.DAY;

function s(e) {
  if (null == e || null == e.joinedAt) return null;
  let t = new Date(e.joinedAt).getTime();
  return {
    guild_joined_at: t,
    user_id: e.userId
  }
}