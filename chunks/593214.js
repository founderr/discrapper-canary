t.d(n, {
    Mt: function () {
        return g;
    },
    li: function () {
        return m;
    },
    s4: function () {
        return h;
    },
    up: function () {
        return v;
    },
    zv: function () {
        return f;
    }
}),
    t(47120),
    t(653041);
var i = t(192379),
    r = t(106351),
    o = t(442837);
t(592125);
var l = t(984933),
    a = t(914010);
t(709054);
var d = t(853856),
    c = t(362658),
    u = t(434065),
    s = t(981631);
function m(e) {
    let { favoritesEnabled: n, hasStaffPrivileges: t } = (0, c.z)('useCanFavoriteChannel'),
        i = (0, o.e7)([d.Z], () => d.Z.isFavorite(e.id)),
        r = e.isDM() || e.isThread();
    return n && !__OVERLAY__ && !i && (!r || t);
}
function h(e) {
    return (0, o.e7)([d.Z], () => d.Z.getFavorite(e));
}
function f() {
    return (0, o.e7)([l.ZP], () => l.ZP.getChannels(s.I_8))[r.d.GUILD_CATEGORY].map((e) => ({
        id: 'null' === e.channel.id ? null : e.channel.id,
        name: e.channel.name
    }));
}
function g() {
    return (0, o.e7)([a.Z], () => a.Z.getGuildId()) === s.I_8;
}
function v() {
    let { isFavoritesPerk: e } = (0, c.z)('useFavoriteAdded'),
        n = (0, u.r)(),
        t = i.useCallback(() => {
            e && n.notifyFavoriteAdded();
        }, [n, e]),
        r = i.useCallback(() => {
            e && n.clearFavoriteAdded();
        }, [n, e]);
    return {
        favoriteAdded: n.favoriteAdded,
        notifyFavoriteAdded: t,
        clearFavoriteAdded: r
    };
}
