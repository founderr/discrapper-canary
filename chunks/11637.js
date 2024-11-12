n.d(t, {
    ZP: function () {
        return l;
    },
    hf: function () {
        return o;
    }
});
var r = n(763296),
    i = n(768581),
    a = n(722932),
    s = n(801606);
let o = /^<sound:(\d+):(\d+)>/;
function l(e, t) {
    var n;
    let o = e[1],
        l = e[2],
        { messageId: u, channelId: c } = t,
        d = (function (e, t, n) {
            if (!a.zv.getCurrentConfig({ location: 'getSoundmojiASTFromString' }, { autoTrackExposure: !1 }).enabled) return;
            let i = r.Z.getSoundById(n);
            if (null != i) return i;
            if (null != t && null != e) return (0, s.Z)(e, t, n);
        })(c, u, l);
    if (null == d)
        return {
            type: 'text',
            content: '<sound:'.concat(o, ':').concat(l, '>')
        };
    let f = null !== (n = null == d ? void 0 : d.name) && void 0 !== n ? n : l;
    return {
        type: 'soundboard',
        soundId: l,
        guildId: o,
        messageId: t.messageId,
        channelId: t.channelId,
        content: f,
        emojiId: null == d ? void 0 : d.emojiId,
        emojiName: null == d ? void 0 : d.emojiName,
        emojiSrc:
            (null == d ? void 0 : d.emojiId) != null
                ? (0, i.gT)({
                      id: null == d ? void 0 : d.emojiId,
                      animated: !1,
                      size: 16
                  })
                : void 0
    };
}
