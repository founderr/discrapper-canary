var r = n(47120);
var i = n(147913),
    a = n(430871),
    o = n(185923);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let l = new Set([o.qR.EmojiButtonMouseEntered, o.qR.ChatInputExpressionPressed, o.qR.ChatInputSuggestionsShown, o.qR.SearchEmojiKeybindPressed, o.qR.AutocompleteTyped, o.qR.GuildLeaveModalShown, o.qR.AddReactionPopoutMouseEntered, o.qR.AddReactionPopoutFocused, o.qR.MessageContextMenuMouseEntered, o.qR.AutocompleteWrapperShown]);
class u extends i.Z {
    handleInteraction(e) {
        let { interaction: t } = e;
        l.has(t) && (0, a.x)(t);
    }
    constructor(...e) {
        super(...e), s(this, 'actions', { EMOJI_INTERACTION_INITIATED: this.handleInteraction });
    }
}
t.Z = new u();
