n.d(t, {
    Z: function () {
        return p;
    }
}),
    n(47120);
var i = n(106351),
    l = n(442837),
    a = n(835473),
    r = n(592125),
    s = n(430824),
    o = n(496675),
    c = n(158776),
    u = n(979651),
    d = n(823379),
    h = n(981631);
function p(e) {
    let t = (0, l.e7)([s.Z], () => s.Z.getGuild(e)),
        n = null == t ? void 0 : t.afkChannelId,
        p = (0, l.Wu)(
            [u.Z, c.Z, r.Z, o.Z],
            () => {
                let t = new Set(),
                    l = u.Z.getVoiceStates(e);
                for (let a in l) {
                    let s = r.Z.getBasicChannel(l[a].channelId);
                    if (null != s && s.type !== i.d.GUILD_STAGE_VOICE && n !== s.id && !!o.Z.canBasicChannel(h.S7T.VIEW_CHANNEL, s))
                        c.Z.getActivities(a, e).forEach((e) => {
                            let n = e.application_id;
                            if (e.type !== h.IIU.PLAYING || null == n) return [];
                            t.add(n);
                        });
                }
                return [...t];
            },
            [n, e]
        );
    return (0, a.Z)([...p]).filter(d.lm).length > 0;
}
