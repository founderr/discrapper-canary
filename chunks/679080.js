"use strict";
n.r(t), n.d(t, {
  SEARCH_EMOJIS: function() {
    return u
  }
});
var i = n("130402"),
  l = n("585483"),
  o = n("981631"),
  a = n("185923");
let u = {
  binds: ["mod+e"],
  comboKeysBindGlobal: !0,
  action: () => ((0, i.initiateEmojiInteraction)(a.EmojiInteractionPoint.SearchEmojiKeybindPressed), l.ComponentDispatch.dispatchToLastSubscribed(o.ComponentActions.TOGGLE_EMOJI_POPOUT), !1)
}