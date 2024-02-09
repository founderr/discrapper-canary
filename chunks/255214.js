"use strict";
i.r(t), i.d(t, {
  getEmojiHotrail: function() {
    return r
  },
  default: function() {
    return u
  }
});
var n = i("884691"),
  o = i("115279");

function r(e) {
  let {
    topEmojis: t,
    newlyAddedEmojis: i,
    rowSize: n = o.EMOJI_ROW_SIZE
  } = e, r = t.slice(0, n - i.length);
  return {
    visibleTopEmojis: r,
    visibleNewlyAddedEmojis: i,
    allEmojis: r.concat(i)
  }
}

function u(e) {
  return n.useMemo(() => r(e), [e])
}