r.d(n, {
    h: function () {
        return g;
    }
});
var i = r(952265),
    a = r(570140),
    s = r(281956),
    o = r(200498),
    l = r(368442),
    u = r(672339),
    c = r(653175),
    d = r(592125),
    f = r(430824),
    _ = r(607744),
    h = r(944486),
    p = r(979651),
    m = r(934415);
let g = function (e, n) {
    let g = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        E = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        v = d.Z.getChannel(e),
        I = p.Z.getCurrentClientVoiceChannelId(null != n ? n : null) === e,
        T = null != v ? _.Z.getCheck(v.guild_id) : null;
    if (!(null != n && (0, s.n)(n)) && (null == T || !!T.canChat || !!(0, o.jU)(v))) {
        if (null != v && !I) {
            let e = (0, m.rY)(v, p.Z, f.Z);
            if (e && v.isGuildStageVoice() && (0, l.xJ)(v.id)) {
                (0, i.ZD)(async () => {
                    let { default: e } = await r.e('46398').then(r.bind(r, 523794));
                    return (n) =>
                        e({
                            channel: v,
                            ...n
                        });
                });
                return;
            }
            if (e) {
                (0, i.ZD)(async () => {
                    let { default: e } = await r.e('86465').then(r.bind(r, 997308));
                    return (n) => e(n);
                });
                return;
            }
        }
        g && (0, u.eH)(), (0, c.Z)(b, e, E, g);
    }
    function b() {
        a.Z.dispatch({
            type: 'VOICE_CHANNEL_SELECT',
            guildId: n,
            channelId: e,
            currentVoiceChannelId: h.Z.getVoiceChannelId(),
            video: g,
            stream: E
        });
    }
};
