"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
}), n("222007");
var i = n("689988"),
  a = n("162771"),
  l = n("630400"),
  s = n("958706");
class r extends i.default {
  handleInteraction(e) {
    let {
      interaction: t
    } = e;
    if ([s.EmojiInteractionPoint.EmojiButtonMouseEntered].includes(t)) {
      let e = a.default.getGuildId();
      (0, l.maybeFetchTopEmojisByGuild)(e)
    }
  }
  constructor(...e) {
    super(...e), this.actions = {
      EMOJI_INTERACTION_INITIATED: this.handleInteraction
    }
  }
}
var o = new r