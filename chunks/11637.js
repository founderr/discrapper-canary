r.d(n, {
    ZP: function () {
        return h;
    },
    hf: function () {
        return f;
    }
});
var i = r(763296),
    a = r(375954),
    s = r(768581),
    o = r(722932),
    l = r(801606),
    u = r(12327),
    c = r(277078),
    d = r(981631);
let f = /^<sound:(\d+):(\d+)>/;
function _(e, n, r) {
    if (!o.zv.getCurrentConfig({ location: 'getSoundmojiASTFromString' }, { autoTrackExposure: !1 }).enabled) return;
    let s = i.Z.getSoundById(r),
        u = (0, c.Z)(s, e);
    if (null != n && null != e) {
        let i = (0, l.Z)(e, n, r);
        if (u && null == i) {
            let r = a.Z.getMessage(e, n);
            if ((null == r ? void 0 : r.state) !== d.yb.SENT) return s;
        }
        return i;
    }
    if (!!u) {
        if (null != s) return s;
    }
}
function h(e, n) {
    var r;
    let i = e[1],
        a = e[2],
        { messageId: o, channelId: l } = n,
        c = _(l, o, a);
    if (null == c)
        return {
            type: 'text',
            content: (0, u.Z)(i, a)
        };
    let d = null !== (r = null == c ? void 0 : c.name) && void 0 !== r ? r : a;
    return {
        type: 'soundboard',
        soundId: a,
        guildId: i,
        messageId: n.messageId,
        channelId: n.channelId,
        content: d,
        emojiId: null == c ? void 0 : c.emojiId,
        emojiName: null == c ? void 0 : c.emojiName,
        emojiSrc:
            (null == c ? void 0 : c.emojiId) != null
                ? (0, s.gT)({
                      id: null == c ? void 0 : c.emojiId,
                      animated: !1,
                      size: 16
                  })
                : void 0
    };
}
