n.d(t, {
    Z: function () {
        return p;
    }
});
var i = n(200651);
n(192379);
var l = n(442837),
    r = n(481060),
    a = n(665149),
    s = n(853856),
    o = n(117984),
    c = n(593214),
    d = n(362658),
    u = n(916069),
    h = n(388032);
function p(e) {
    let { channel: t } = e,
        { isFavoritesPerk: n } = (0, d.z)('ChannelFavoritesHeaderButton'),
        p = (0, u.Z)(),
        { notifyFavoriteAdded: m } = (0, c.up)(),
        f = (0, l.e7)([s.Z], () => s.Z.isFavorite(t.id));
    if (!n || p) return null;
    let g = f ? r.StarIcon : r.StarOutlineIcon,
        C = f ? h.intl.string(h.t.Bou7lZ) : h.intl.string(h.t['4wcdEx']);
    return (0, i.jsx)(a.ZP.Icon, {
        icon: g,
        tooltip: C,
        'aria-label': C,
        onClick: () => {
            f ? (0, o.oC)(t.id) : (m(), (0, o.kj)(t.id));
        }
    });
}
