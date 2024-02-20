"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
}), n("222007");
var i = n("689988"),
  a = n("765969"),
  l = n("958706");
let s = new Set([l.EmojiInteractionPoint.EmojiButtonMouseEntered, l.EmojiInteractionPoint.ChatInputExpressionPressed, l.EmojiInteractionPoint.ChatInputSuggestionsShown, l.EmojiInteractionPoint.SearchEmojiKeybindPressed, l.EmojiInteractionPoint.AutocompleteTyped, l.EmojiInteractionPoint.GuildLeaveModalShown, l.EmojiInteractionPoint.AddReactionPopoutMouseEntered, l.EmojiInteractionPoint.AddReactionPopoutFocused, l.EmojiInteractionPoint.MessageContextMenuMouseEntered, l.EmojiInteractionPoint.AutocompleteWrapperShown]);
class r extends i.default {
  handleInteraction(e) {
    let {
      interaction: t
    } = e;
    s.has(t) && (0, a.maybeGetEmojiCaptionsForUser)(t)
  }
  constructor(...e) {
    super(...e), this.actions = {
      EMOJI_INTERACTION_INITIATED: this.handleInteraction
    }
  }
}
var o = new r