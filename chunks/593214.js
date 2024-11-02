e.d(n, {
    Mt: function () {
        return T;
    },
    li: function () {
        return E;
    },
    s4: function () {
        return f;
    },
    up: function () {
        return p;
    },
    zv: function () {
        return I;
    }
}),
    e(47120),
    e(653041);
var i = e(192379),
    r = e(106351),
    o = e(442837);
e(592125);
var a = e(984933),
    u = e(914010);
e(709054);
var l = e(853856),
    d = e(362658),
    s = e(434065),
    c = e(981631);
function E(t) {
    let { favoritesEnabled: n, hasStaffPrivileges: e } = (0, d.z)('useCanFavoriteChannel'),
        i = (0, o.e7)([l.Z], () => l.Z.isFavorite(t.id)),
        r = t.isDM() || t.isThread();
    return n && !__OVERLAY__ && !i && (!r || e);
}
function f(t) {
    return (0, o.e7)([l.Z], () => l.Z.getFavorite(t));
}
function I() {
    return (0, o.e7)([a.ZP], () => a.ZP.getChannels(c.I_8))[r.d.GUILD_CATEGORY].map((t) => ({
        id: 'null' === t.channel.id ? null : t.channel.id,
        name: t.channel.name
    }));
}
function T() {
    return (0, o.e7)([u.Z], () => u.Z.getGuildId()) === c.I_8;
}
function p() {
    let { isFavoritesPerk: t } = (0, d.z)('useFavoriteAdded'),
        n = (0, s.r)(),
        e = i.useCallback(() => {
            t && n.notifyFavoriteAdded();
        }, [n, t]),
        r = i.useCallback(() => {
            t && n.clearFavoriteAdded();
        }, [n, t]);
    return {
        favoriteAdded: n.favoriteAdded,
        notifyFavoriteAdded: e,
        clearFavoriteAdded: r
    };
}
