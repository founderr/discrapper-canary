n.d(t, {
  Z: function() {
    return o
  }
});
var s = n(470079),
  i = n(143927),
  l = n(836768),
  r = n(49898),
  a = n(689938);

function o() {
  let e = s.useMemo(() => [{
      slug: r.S.SERVERS,
      title: a.Z.Messages.GLOBAL_DISCOVERY_SERVERS_TITLE
    }, {
      slug: r.S.APPS,
      title: a.Z.Messages.GLOBAL_DISCOVERY_APPS_TITLE
    }, {
      slug: r.S.QUESTS,
      title: a.Z.Messages.GLOBAL_DISCOVERY_QUESTS_TITLE
    }, {
      slug: r.S.SHOP,
      title: a.Z.Messages.GLOBAL_DISCOVERY_SHOP_TITLE
    }], []),
    t = (0, l.d)(e => e.selectedPage, i.Z);
  return {
    config: e,
    selectedPage: t,
    handleSelectPage: l.d.getState().setSelectedPage
  }
}