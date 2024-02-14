"use strict";
E.r(_), E.d(_, {
  default: function() {
    return r
  }
}), E("222007");
var t = E("689988"),
  o = E("162771"),
  n = E("630400"),
  a = E("958706");
class i extends t.default {
  handleInteraction(e) {
    let {
      interaction: _
    } = e;
    if ([a.EmojiInteractionPoint.EmojiButtonMouseEntered].includes(_)) {
      let e = o.default.getGuildId();
      (0, n.maybeFetchTopEmojisByGuild)(e)
    }
  }
  constructor(...e) {
    super(...e), this.actions = {
      EMOJI_INTERACTION_INITIATED: this.handleInteraction
    }
  }
}
var r = new i