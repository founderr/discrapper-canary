n.d(t, {
    ZP: function () {
        return p;
    },
    hf: function () {
        return _;
    }
});
var r = n(763296),
    i = n(375954),
    a = n(914010),
    s = n(594174),
    o = n(768581),
    l = n(74538),
    u = n(722932),
    c = n(801606),
    d = n(981631),
    f = n(710111);
let _ = /^<sound:(\d+):(\d+)>/;
function p(e, t) {
    var n;
    let _ = e[1],
        p = e[2],
        { messageId: h, channelId: m } = t,
        g = (function (e, t, n) {
            if (!u.zv.getCurrentConfig({ location: 'getSoundmojiASTFromString' }, { autoTrackExposure: !1 }).enabled) return;
            let o = r.Z.getSoundById(n),
                _ = a.Z.getGuildId(),
                p = l.ZP.canUseSoundboardEverywhere(s.default.getCurrentUser()) || (null == o ? void 0 : o.guildId) === f.X8 || (null == o ? void 0 : o.guildId) === _;
            if (null != t && null != e) {
                let r = (0, c.Z)(e, t, n);
                if (p && null == r) {
                    let n = i.Z.getMessage(e, t);
                    if ((null == n ? void 0 : n.state) !== d.yb.SENT) return o;
                }
                return r;
            }
            if (!!p) {
                if (null != o) return o;
            }
        })(m, h, p);
    if (null == g)
        return {
            type: 'text',
            content: '<sound:'.concat(_, ':').concat(p, '>')
        };
    let E = null !== (n = null == g ? void 0 : g.name) && void 0 !== n ? n : p;
    return {
        type: 'soundboard',
        soundId: p,
        guildId: _,
        messageId: t.messageId,
        channelId: t.channelId,
        content: E,
        emojiId: null == g ? void 0 : g.emojiId,
        emojiName: null == g ? void 0 : g.emojiName,
        emojiSrc:
            (null == g ? void 0 : g.emojiId) != null
                ? (0, o.gT)({
                      id: null == g ? void 0 : g.emojiId,
                      animated: !1,
                      size: 16
                  })
                : void 0
    };
}
