r.d(n, {
    Z: function () {
        return u;
    },
    _: function () {
        return l;
    }
});
var i = r(399606),
    a = r(339085),
    s = r(185923);
let o = [];
function l(e) {
    let { emojiStoreInstance: n = a.ZP, guildId: r, pickerIntention: i } = e;
    return {
        topEmojis: i !== s.Hz.REACTION ? n.getTopEmoji(r) : o,
        newlyAddedEmojis: i !== s.Hz.REACTION ? n.getNewlyAddedEmoji(r) : o
    };
}
function u(e, n) {
    return (0, i.cj)(
        [a.ZP],
        () =>
            l({
                emojiStoreInstance: a.ZP,
                guildId: e,
                pickerIntention: n
            }),
        [e, n]
    );
}
