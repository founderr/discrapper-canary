"use strict";
i.r(t), i.d(t, {
  maybeFetchTopEmojisByGuild: function() {
    return u
  }
});
var n = i("697218"),
  r = i("385976"),
  o = i("26430"),
  a = i("305781");

function u(e) {
  if (null == e) return;
  let t = n.default.getCurrentUser();
  if (null == t) return;
  let i = r.default.getTopEmojisMetadata(e);
  if (null != i) {
    let {
      topEmojisTTL: e
    } = i;
    if (null == e || Date.now() < e) return
  }!o.default.getIsFetching(e) && (0, a.fetchTopEmojis)(e)
}