r.d(n, {
    p: function () {
        return u;
    },
    r: function () {
        return c;
    }
});
var i = r(442837),
    a = r(592125),
    s = r(430824),
    o = r(944486),
    l = r(981631);
let u = () => {
        let e = o.Z.getVoiceChannelId();
        if (null == e) return !1;
        let n = a.Z.getChannel(e);
        if (null == n) return !1;
        let r = s.Z.getGuild(n.getGuildId());
        return null != r && r.hasFeature(l.oNc.HUB);
    },
    c = (e) =>
        (0, i.e7)([o.Z, a.Z, s.Z], () => {
            let n = o.Z.getVoiceChannelId();
            if (null == n) return !1;
            let r = a.Z.getChannel(n);
            if (null == r) return !1;
            let i = s.Z.getGuild(r.getGuildId());
            return null != i && i.id === e;
        });
