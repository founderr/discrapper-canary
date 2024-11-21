e.d(t, {
    Mt: function () {
        return p;
    },
    li: function () {
        return f;
    },
    s4: function () {
        return E;
    },
    up: function () {
        return m;
    },
    zv: function () {
        return _;
    }
}),
    e(47120),
    e(653041);
var r = e(192379),
    i = e(106351),
    u = e(442837);
e(592125);
var l = e(984933),
    a = e(914010);
e(709054);
var o = e(853856),
    d = e(362658),
    c = e(434065),
    s = e(981631);
function f(n) {
    let { favoritesEnabled: t, hasStaffPrivileges: e } = (0, d.z)('useCanFavoriteChannel'),
        r = (0, u.e7)([o.Z], () => o.Z.isFavorite(n.id)),
        i = n.isDM() || n.isThread();
    return t && !__OVERLAY__ && !r && (!i || e);
}
function E(n) {
    return (0, u.e7)([o.Z], () => o.Z.getFavorite(n));
}
function _() {
    return (0, u.e7)([l.ZP], () => l.ZP.getChannels(s.I_8))[i.d.GUILD_CATEGORY].map((n) => ({
        id: 'null' === n.channel.id ? null : n.channel.id,
        name: n.channel.name
    }));
}
function p() {
    return (0, u.e7)([a.Z], () => a.Z.getGuildId()) === s.I_8;
}
function m() {
    let { isFavoritesPerk: n } = (0, d.z)('useFavoriteAdded'),
        t = (0, c.r)(),
        e = r.useCallback(() => {
            n && t.notifyFavoriteAdded();
        }, [t, n]),
        i = r.useCallback(() => {
            n && t.clearFavoriteAdded();
        }, [t, n]);
    return {
        favoriteAdded: t.favoriteAdded,
        notifyFavoriteAdded: e,
        clearFavoriteAdded: i
    };
}
