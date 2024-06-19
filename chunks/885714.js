n.d(t, {
  Z: function() {
    return a
  }
});
var s = n(735250);
n(470079);
var i = n(481060),
  l = n(430824);

function a(e) {
  let {
    onCloseCallback: t,
    analyticsLocations: a,
    ...r
  } = e;
  (0, i.openModalLazy)(async () => {
    let {
      default: e
    } = await Promise.all([n.e("99387"), n.e("11166")]).then(n.bind(n, 971949));
    return t => (0, s.jsx)(e, {
      ...t,
      ...r,
      analyticsLocations: a,
      guildCount: l.Z.getGuildCount(),
      "aria-labelledby": "nitro-guild-cap-upsell"
    })
  }, {
    onCloseCallback: t
  })
}