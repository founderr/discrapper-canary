n.d(t, {
    ZP: function () {
        return s;
    },
    hf: function () {
        return a;
    }
});
var r = n(763296),
    i = n(801606);
let a = /^<sound:(\d+):(\d+)>/;
function s(e, t) {
    var n;
    let a = e[1],
        s = e[2],
        o = (function (e, t) {
            let n = r.Z.getSoundById(e);
            if (null != n) return n;
            let { messageId: a, channelId: s } = t;
            if (null != a && null != s) return (0, i.Z)(s, a, e);
        })(s, t);
    if (null == o)
        return {
            type: 'text',
            content: '<sound:'.concat(a, ':').concat(s, '>')
        };
    let l = null !== (n = null == o ? void 0 : o.name) && void 0 !== n ? n : s;
    return {
        type: 'soundboard',
        soundId: s,
        guildId: a,
        messageId: t.messageId,
        channelId: t.channelId,
        content: l
    };
}
