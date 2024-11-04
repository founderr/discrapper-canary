n(47120);
var i = n(846519),
    r = n(570140),
    a = n(287734),
    l = n(317770),
    s = n(199902),
    o = n(592125),
    c = n(430824),
    d = n(517100),
    u = n(19780),
    h = n(70956),
    m = n(358085),
    p = n(981631);
let g = new i.V7(),
    f = new i.V7();
class _ extends l.Z {
    _initialize() {
        r.Z.subscribe('IDLE', this.handleIdleUpdate);
    }
    _terminate() {
        g.stop(), f.stop(), r.Z.unsubscribe('IDLE', this.handleIdleUpdate);
    }
    handleIdleUpdate() {
        let e = d.Z.getIdleSince();
        if (!m.isPlatformEmbedded) return;
        for (let e of (g.stop(), f.stop(), s.Z.getAllActiveStreams())) if (e.state !== p.jm8.ENDED) return;
        if (null == e) return;
        let t = u.Z.getChannelId();
        if (null == t) return;
        f.start(18000000, () => {
            a.default.selectVoiceChannel(null);
        });
        let n = c.Z.getGuild(u.Z.getGuildId());
        if (null == n || null == n.afkChannelId || n.afkChannelId === t || null == n.afkTimeout) return;
        let i = o.Z.getChannel(t);
        if (null != i)
            !i.isGuildStageVoice() &&
                g.start(e + n.afkTimeout * h.Z.Millis.SECOND - Date.now(), () => {
                    null != (n = c.Z.getGuild(u.Z.getGuildId())) && null != n.afkChannelId && a.default.selectVoiceChannel(n.afkChannelId);
                });
    }
}
t.Z = new _();
