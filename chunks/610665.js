i.d(e, {
    GV: function () {
        return x;
    },
    iQ: function () {
        return m;
    }
}),
    i(653041),
    i(47120),
    i(411104);
var l = i(512722),
    t = i.n(l),
    a = i(333848),
    r = i(706058),
    s = i(131704),
    c = i(592125),
    o = i(430824),
    u = i(482241),
    d = i(765305),
    h = i(981631);
async function v(n, e) {
    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
        l = [];
    l.push(...i);
    let t = await a.Z.createChannel({
        guildId: n.id,
        type: h.d4z.GUILD_STAGE_VOICE,
        name: e.substring(0, 100),
        permissionOverwrites: l
    });
    if (null == t || 201 !== t.status) throw Error("Can't create channel for event");
    return (0, s.q_)(t.body);
}
async function x(n, e) {
    let { entity_type: i } = n;
    if (i === d.WX.STAGE_INSTANCE) {
        let i = await (function (n, e) {
            let { guild_id: i, channel_id: l } = n,
                t = o.Z.getGuild(i);
            if (null == t) return Promise.resolve(null);
            let a = c.Z.getChannel(l);
            return null == a ? v(t, n.name, e) : Promise.resolve(a);
        })(n, e);
        t()(null != i, 'could not find or create channel');
    }
}
async function m(n) {
    let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        { channel_id: i, entity_type: l, name: a, id: s, guild_id: c } = n;
    switch (l) {
        case d.WX.STAGE_INSTANCE:
            t()(null != i, 'channel_id is required'), await (0, r.me)(i, a, d.j8.GUILD_ONLY, e, s);
            break;
        case d.WX.VOICE:
            t()(null != i, 'channel_id is required'), await u.Z.startEvent(s, c);
            break;
        case d.WX.EXTERNAL:
            await u.Z.startEvent(s, c);
    }
}
