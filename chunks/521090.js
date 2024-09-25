var r = n(733860);
var i = n(47120);
var a = n(106351),
    o = n(212819),
    s = n(588468),
    l = n(933557),
    u = n(592125),
    c = n(984933),
    d = n(483360),
    _ = n(877565),
    E = n(590921),
    f = n(665692),
    h = n(176505),
    p = n(689938);
let m = {
    sentinel: f.zy,
    matches: (e, t, n, r, i) => i.mentions.channel !== E.nS.DENY && !e.isPrivate(),
    queryResults(e, t, n, r, i) {
        let a,
            s,
            l = c.sH;
        return (
            n.charAt(0) === o.xQ.VOICE_CHANNEL && ((l = c.Zb), (n = n.substring(1))),
            r.forNonStringCommandOption
                ? (a = d.ZP.queryApplicationCommandChannelResults({
                      query: n,
                      channel: e,
                      channelTypes: r.allowedChannelTypes
                  }))
                : ((a = d.ZP.queryChannelResults({
                      query: n,
                      channel: e,
                      type: l
                  })),
                  null != t &&
                      ((s = d.ZP.queryStaticRouteChannels({
                          query: n,
                          guild: t
                      })),
                      a.channels.unshift(...s))),
            {
                results: a,
                staticRouteChannels: s
            }
        );
    },
    renderResults(e) {
        let t,
            n,
            {
                results: { channels: r },
                selectedIndex: i,
                query: a,
                options: l,
                onHover: c,
                onClick: d
            } = e,
            E = a.charAt(0) === o.xQ.VOICE_CHANNEL;
        return (
            E ? ((t = p.Z.Messages.VOICE_CHANNELS_MATCHING), (n = p.Z.Messages.VOICE_CHANNELS), (a = a.substring(1))) : l.forNonStringCommandOption ? ((t = p.Z.Messages.CHANNELS_MATCHING), (n = p.Z.Messages.CHANNELS)) : ((t = p.Z.Messages.TEXT_CHANNELS_MATCHING), (n = p.Z.Messages.TEXT_CHANNELS)),
            (0, _.HI)({
                query: a,
                selectedIndex: i,
                autocompletes: r,
                onHover: c,
                onClick: d,
                titleWithQuery: t,
                titleWithoutQuery: n,
                Component: s.ZP.Channel,
                getProps: (e) => ({
                    channel: e,
                    key: e.id,
                    category: u.Z.getChannel(e.parent_id)
                }),
                getQuery: (e) => (E ? ''.concat(f.zy).concat(o.xQ.VOICE_CHANNEL).concat(e) : ''.concat(f.zy).concat(e)),
                key: 'channels'
            })
        );
    },
    onSelect(e) {
        let {
                results: { channels: t },
                index: n,
                options: r
            } = e,
            i = t[n];
        return r.insertText(I(i), T(i)), { type: E.z2.CHANNEL };
    }
};
function I(e) {
    switch (e.type) {
        case a.d.PUBLIC_THREAD:
        case a.d.PRIVATE_THREAD:
        case a.d.ANNOUNCEMENT_THREAD:
        case a.d.GUILD_VOICE:
        case a.d.GUILD_STAGE_VOICE:
        case a.d.GUILD_CATEGORY:
            return '#"'.concat((0, l.le)(e.name), '"');
        default:
            let t = c.ZP.getTextChannelNameDisambiguations(e.guild_id)[e.id];
            return '#'.concat(null != t ? t.name : e.name);
    }
}
function T(e) {
    return h.EC.has(e.id) ? '<id:'.concat(e.id, '>') : '<#'.concat(e.id, '>');
}
t.Z = m;
