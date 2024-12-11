n.d(t, {
    ZP: function () {
        return f;
    },
    hf: function () {
        return d;
    }
});
var r = n(763296),
    i = n(375954),
    a = n(768581),
    s = n(722932),
    o = n(801606),
    l = n(12327),
    u = n(277078),
    c = n(981631);
let d = /^<sound:(\d+):(\d+)>/;
function f(e, t) {
    var n;
    let d = e[1],
        f = e[2],
        { messageId: _, channelId: p } = t,
        h = (function (e, t, n) {
            if (!s.zv.getCurrentConfig({ location: 'getSoundmojiASTFromString' }, { autoTrackExposure: !1 }).enabled) return;
            let a = r.Z.getSoundById(n),
                l = (0, u.Z)(a, e);
            if (null != t && null != e) {
                let r = (0, o.Z)(e, t, n);
                if (l && null == r) {
                    let n = i.Z.getMessage(e, t);
                    if ((null == n ? void 0 : n.state) !== c.yb.SENT) return a;
                }
                return r;
            }
            if (!!l) {
                if (null != a) return a;
            }
        })(p, _, f);
    if (null == h)
        return {
            type: 'text',
            content: (0, l.Z)(d, f)
        };
    let m = null !== (n = null == h ? void 0 : h.name) && void 0 !== n ? n : f;
    return {
        type: 'soundboard',
        soundId: f,
        guildId: d,
        messageId: t.messageId,
        channelId: t.channelId,
        content: m,
        emojiId: null == h ? void 0 : h.emojiId,
        emojiName: null == h ? void 0 : h.emojiName,
        emojiSrc:
            (null == h ? void 0 : h.emojiId) != null
                ? (0, a.gT)({
                      id: null == h ? void 0 : h.emojiId,
                      animated: !1,
                      size: 16
                  })
                : void 0
    };
}
