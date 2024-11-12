n.d(t, {
    ZP: function () {
        return o;
    },
    hf: function () {
        return s;
    }
});
var r = n(763296),
    i = n(768581),
    a = n(801606);
let s = /^<sound:(\d+):(\d+)>/;
function o(e, t) {
    var n;
    let s = e[1],
        o = e[2],
        { messageId: l, channelId: u } = t,
        c = (function (e, t, n) {
            let i = r.Z.getSoundById(n);
            if (null != i) return i;
            if (null != t && null != e) return (0, a.Z)(e, t, n);
        })(u, l, o);
    if (null == c)
        return {
            type: 'text',
            content: '<sound:'.concat(s, ':').concat(o, '>')
        };
    let d = null !== (n = null == c ? void 0 : c.name) && void 0 !== n ? n : o;
    return {
        type: 'soundboard',
        soundId: o,
        guildId: s,
        messageId: t.messageId,
        channelId: t.channelId,
        content: d,
        emojiId: null == c ? void 0 : c.emojiId,
        emojiName: null == c ? void 0 : c.emojiName,
        emojiSrc:
            (null == c ? void 0 : c.emojiId) != null
                ? (0, i.gT)({
                      id: null == c ? void 0 : c.emojiId,
                      animated: !1,
                      size: 16
                  })
                : void 0
    };
}
