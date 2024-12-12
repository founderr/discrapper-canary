var i = r(733860);
var a = r(47120);
var s = r(106351),
    o = r(212819),
    l = r(588468),
    u = r(933557),
    c = r(592125),
    d = r(984933),
    f = r(483360),
    _ = r(877565),
    h = r(590921),
    p = r(665692),
    m = r(176505),
    g = r(388032);
let E = {
    sentinel: p.zy,
    matches: (e, n, r, i, a) => a.mentions.channel !== h.nS.DENY && !e.isPrivate(),
    queryResults(e, n, r, i, a) {
        let s,
            l,
            u = d.sH;
        return (
            r.charAt(0) === o.xQ.VOICE_CHANNEL && ((u = d.Zb), (r = r.substring(1))),
            i.forNonStringCommandOption
                ? (s = f.ZP.queryApplicationCommandChannelResults({
                      query: r,
                      channel: e,
                      channelTypes: i.allowedChannelTypes
                  }))
                : ((s = f.ZP.queryChannelResults({
                      query: r,
                      channel: e,
                      type: u
                  })),
                  null != n &&
                      ((l = f.ZP.queryStaticRouteChannels({
                          query: r,
                          guild: n
                      })),
                      s.channels.unshift(...l))),
            {
                results: s,
                staticRouteChannels: l
            }
        );
    },
    renderResults(e) {
        let n,
            r,
            {
                results: { channels: i },
                selectedIndex: a,
                query: s,
                options: u,
                onHover: d,
                onClick: f
            } = e,
            h = s.charAt(0) === o.xQ.VOICE_CHANNEL;
        return (
            h ? ((n = g.t.rMUL39), (r = g.intl.string(g.t.CYnO4u)), (s = s.substring(1))) : u.forNonStringCommandOption ? ((n = g.t.upNFT0), (r = g.intl.string(g.t.OGiMXF))) : ((n = g.t.UhnmJC), (r = g.intl.string(g.t.nIfr0d))),
            (0, _.HI)({
                query: s,
                selectedIndex: a,
                autocompletes: i,
                onHover: d,
                onClick: f,
                titleWithQuery: n,
                titleWithoutQuery: r,
                Component: l.ZP.Channel,
                getProps: (e) => ({
                    channel: e,
                    key: e.id,
                    category: c.Z.getChannel(e.parent_id)
                }),
                getQuery: (e) => (h ? ''.concat(p.zy).concat(o.xQ.VOICE_CHANNEL).concat(e) : ''.concat(p.zy).concat(e)),
                key: 'channels'
            })
        );
    },
    onSelect(e) {
        let {
                results: { channels: n },
                index: r,
                options: i
            } = e,
            a = n[r];
        return i.insertText(v(a), I(a)), { type: h.z2.CHANNEL };
    }
};
function v(e) {
    switch (e.type) {
        case s.d.PUBLIC_THREAD:
        case s.d.PRIVATE_THREAD:
        case s.d.ANNOUNCEMENT_THREAD:
        case s.d.GUILD_VOICE:
        case s.d.GUILD_STAGE_VOICE:
        case s.d.GUILD_CATEGORY:
            return '#"'.concat((0, u.le)(e.name), '"');
        default:
            let n = d.ZP.getTextChannelNameDisambiguations(e.guild_id)[e.id];
            return '#'.concat(null != n ? n.name : e.name);
    }
}
function I(e) {
    return m.EC.has(e.id) ? '<id:'.concat(e.id, '>') : '<#'.concat(e.id, '>');
}
n.Z = E;
