"use strict";
i.r(t), i.d(t, {
  getTopAndNewlyAddedEmojis: function() {
    return u
  },
  default: function() {
    return s
  }
});
var n = i("65597"),
  r = i("385976"),
  o = i("958706");
let a = [];

function u(e) {
  let {
    emojiStoreInstance: t = r.default,
    guildId: i,
    pickerIntention: n
  } = e;
  return {
    topEmojis: n !== o.EmojiIntention.REACTION ? t.getTopEmoji(i) : a,
    newlyAddedEmojis: n !== o.EmojiIntention.REACTION ? t.getNewlyAddedEmoji(i) : a
  }
}

function s(e, t) {
  return (0, n.useStateFromStoresObject)([r.default], () => u({
    emojiStoreInstance: r.default,
    guildId: e,
    pickerIntention: t
  }), [e, t])
}