"use strict";
i.r(t), i.d(t, {
  getTopAndNewlyAddedEmojis: function() {
    return a
  },
  default: function() {
    return s
  }
});
var n = i("65597"),
  o = i("385976"),
  r = i("958706");
let u = [];

function a(e) {
  let {
    emojiStoreInstance: t = o.default,
    guildId: i,
    pickerIntention: n
  } = e;
  return {
    topEmojis: n !== r.EmojiIntention.REACTION ? t.getTopEmoji(i) : u,
    newlyAddedEmojis: n !== r.EmojiIntention.REACTION ? t.getNewlyAddedEmoji(i) : u
  }
}

function s(e, t) {
  return (0, n.useStateFromStoresObject)([o.default], () => a({
    emojiStoreInstance: o.default,
    guildId: e,
    pickerIntention: t
  }), [e, t])
}