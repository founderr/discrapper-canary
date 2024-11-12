n.d(t, {
    Lz: function () {
        return u;
    },
    MQ: function () {
        return o;
    },
    TR: function () {
        return h;
    },
    Th: function () {
        return d;
    },
    _N: function () {
        return c;
    }
}),
    n(47120);
var i = n(512722),
    l = n.n(i),
    r = n(392711),
    a = n.n(r),
    s = n(486527);
function o(e) {
    var t, n, i, r, a, o, c;
    return (
        l()(e.type === s.C2.GUILD, 'Directory entries must be connected to a guild!'),
        {
            channelId: e.directory_channel_id,
            guildId: e.entity_id,
            type: e.type,
            authorId: e.author_id,
            createdAt: e.created_at,
            description: e.description,
            primaryCategoryId: e.primary_category_id,
            name: null === (t = e.guild) || void 0 === t ? void 0 : t.name,
            icon: null === (n = e.guild) || void 0 === n ? void 0 : n.icon,
            splash: null === (i = e.guild) || void 0 === i ? void 0 : i.splash,
            features: new Set(null === (r = e.guild) || void 0 === r ? void 0 : r.features),
            approximateMemberCount: null === (a = e.guild) || void 0 === a ? void 0 : a.approximate_member_count,
            approximatePresenceCount: null === (o = e.guild) || void 0 === o ? void 0 : o.approximate_presence_count,
            featurableInDirectory: null === (c = e.guild) || void 0 === c ? void 0 : c.featurable_in_directory
        }
    );
}
let c = 5;
function d(e) {
    return a().orderBy(e, [(e) => e.approximateMemberCount], ['desc']);
}
function u(e) {
    var t;
    return ((t = e.filter((e) => e.featurableInDirectory)), a().orderBy(t, [(e) => e.createdAt], ['desc'])).slice(0, c);
}
function h(e) {
    return d(e);
}
