e.d(t, {
    Z: function () {
        return o;
    }
});
var i = e(200651);
e(192379);
var r = e(442837),
    l = e(481060),
    a = e(914010),
    u = e(362658),
    d = e(981631),
    s = e(388032);
function o(n) {
    let t = (0, r.e7)([a.Z], () => a.Z.getGuildId()),
        o = n.type === d.d4z.GUILD_CATEGORY,
        { isFavoritesPerk: c } = (0, u.z)('useCategoryAddChannelItem');
    return !__OVERLAY__ && t === d.I_8 && c && o
        ? (0, i.jsx)(l.MenuItem, {
              id: 'add-channel-to-category',
              icon: l.CirclePlusIcon,
              color: 'brand',
              label: s.intl.string(s.t['6uDHk5']),
              action: function () {
                  (0, l.openModalLazy)(async () => {
                      let { default: t } = await e.e('95257').then(e.bind(e, 178125));
                      return (e) =>
                          (0, i.jsx)(t, {
                              ...e,
                              parentId: n.id
                          });
                  });
              }
          })
        : null;
}
