"use strict";
n.r(t), n.d(t, {
  SEARCH_EMOJIS: function() {
    return u
  }
});
var i = n("130402"),
  o = n("585483"),
  l = n("981631"),
  a = n("185923");
let u = {
  binds: ["mod+e"],
  comboKeysBindGlobal: !0,
  action: () => ((0, i.initiateEmojiInteraction)(a.EmojiInteractionPoint.SearchEmojiKeybindPressed), o.ComponentDispatch.dispatchToLastSubscribed(l.ComponentActions.TOGGLE_EMOJI_POPOUT), !1)
}