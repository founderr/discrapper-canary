n.d(t, {
    Z: function () {
        return p;
    }
}),
    n(47120);
var i = n(106351),
    l = n(442837),
    r = n(835473),
    a = n(592125),
    o = n(430824),
    s = n(496675),
    c = n(158776),
    u = n(979651),
    d = n(823379),
    h = n(981631);
function p(e) {
    let t = (0, l.e7)([o.Z], () => o.Z.getGuild(e)),
        n = null == t ? void 0 : t.afkChannelId,
        p = (0, l.Wu)(
            [u.Z, c.Z, a.Z, s.Z],
            () => {
                let t = new Set(),
                    l = u.Z.getVoiceStates(e);
                for (let r in l) {
                    let o = a.Z.getBasicChannel(l[r].channelId);
                    if (null != o && o.type !== i.d.GUILD_STAGE_VOICE && n !== o.id && !!s.Z.canBasicChannel(h.S7T.VIEW_CHANNEL, o))
                        c.Z.getActivities(r, e).forEach((e) => {
                            let n = e.application_id;
                            if (e.type !== h.IIU.PLAYING || null == n) return [];
                            t.add(n);
                        });
                }
                return [...t];
            },
            [n, e]
        );
    return (0, r.Z)([...p]).filter(d.lm).length > 0;
}
