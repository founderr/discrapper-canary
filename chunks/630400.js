"use strict";
i.r(t), i.d(t, {
  maybeFetchTopEmojisByGuild: function() {
    return a
  }
});
var n = i("697218"),
  o = i("385976"),
  r = i("26430"),
  u = i("305781");

function a(e) {
  if (null == e) return;
  let t = n.default.getCurrentUser();
  if (null == t) return;
  let i = o.default.getTopEmojisMetadata(e);
  if (null != i) {
    let {
      topEmojisTTL: e
    } = i;
    if (null == e || Date.now() < e) return
  }!r.default.getIsFetching(e) && (0, u.fetchTopEmojis)(e)
}