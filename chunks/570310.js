var i = r(47120);
var a = r(147913),
    s = r(430871),
    o = r(185923);
function l(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let u = new Set([o.qR.EmojiButtonMouseEntered, o.qR.ChatInputExpressionPressed, o.qR.ChatInputSuggestionsShown, o.qR.SearchEmojiKeybindPressed, o.qR.AutocompleteTyped, o.qR.GuildLeaveModalShown, o.qR.AddReactionPopoutMouseEntered, o.qR.AddReactionPopoutFocused, o.qR.MessageContextMenuMouseEntered, o.qR.AutocompleteWrapperShown]);
class c extends a.Z {
    handleInteraction(e) {
        let { interaction: n } = e;
        u.has(n) && (0, s.x)(n);
    }
    constructor(...e) {
        super(...e), l(this, 'actions', { EMOJI_INTERACTION_INITIATED: this.handleInteraction });
    }
}
n.Z = new c();
