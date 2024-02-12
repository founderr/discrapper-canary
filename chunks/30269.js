"use strict";
n.r(t), n.d(t, {
  SEARCH_EMOJIS: function() {
    return u
  }
});
var i = n("558986"),
  o = n("659500"),
  l = n("49111"),
  a = n("958706");
let u = {
  binds: ["mod+e"],
  comboKeysBindGlobal: !0,
  action: () => ((0, i.initiateEmojiInteraction)(a.EmojiInteractionPoint.SearchEmojiKeybindPressed), o.ComponentDispatch.dispatchToLastSubscribed(l.ComponentActions.TOGGLE_EMOJI_POPOUT), !1)
}