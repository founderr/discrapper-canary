t.d(n, {
    Mt: function () {
        return T;
    },
    li: function () {
        return c;
    },
    s4: function () {
        return _;
    },
    up: function () {
        return N;
    },
    zv: function () {
        return I;
    }
}),
    t(47120),
    t(653041);
var i = t(192379),
    r = t(106351),
    o = t(442837);
t(592125);
var a = t(984933),
    u = t(914010);
t(709054);
var s = t(853856),
    l = t(362658),
    d = t(434065),
    E = t(981631);
function c(e) {
    let { favoritesEnabled: n, hasStaffPrivileges: t } = (0, l.z)('useCanFavoriteChannel'),
        i = (0, o.e7)([s.Z], () => s.Z.isFavorite(e.id)),
        r = e.isDM() || e.isThread();
    return n && !__OVERLAY__ && !i && (!r || t);
}
function _(e) {
    return (0, o.e7)([s.Z], () => s.Z.getFavorite(e));
}
function I() {
    return (0, o.e7)([a.ZP], () => a.ZP.getChannels(E.I_8))[r.d.GUILD_CATEGORY].map((e) => ({
        id: 'null' === e.channel.id ? null : e.channel.id,
        name: e.channel.name
    }));
}
function T() {
    return (0, o.e7)([u.Z], () => u.Z.getGuildId()) === E.I_8;
}
function N() {
    let { isFavoritesPerk: e } = (0, l.z)('useFavoriteAdded'),
        n = (0, d.r)(),
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
