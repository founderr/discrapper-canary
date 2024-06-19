a.d(n, {
  Z: function() {
    return o
  }
});
var l = a(735250);
a(470079);
var t = a(442837),
  i = a(481060),
  s = a(496675),
  u = a(981631),
  r = a(647086),
  d = a(689938);

function o(e) {
  let n = (0, t.e7)([s.Z], () => s.Z.can(u.Plq.MANAGE_CHANNELS, e));
  return __OVERLAY__ ? null : e.id === r._ ? (0, l.jsx)(l.Fragment, {
    children: (0, l.jsx)(i.MenuItem, {
      id: "create-category",
      label: d.Z.Messages.CREATE_CATEGORY,
      action: () => (0, i.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([a.e("99387"), a.e("1812")]).then(a.bind(a, 477782));
        return n => (0, l.jsx)(e, {
          ...n
        })
      })
    })
  }) : n ? [(0, l.jsx)(i.MenuItem, {
    id: "create-channel",
    label: d.Z.Messages.CREATE_CHANNEL,
    action: () => (0, i.openModalLazy)(async () => {
      let {
        default: n
      } = await Promise.all([a.e("99387"), a.e("45094")]).then(a.bind(a, 218613));
      return a => (0, l.jsx)(n, {
        ...a,
        channelType: u.d4z.GUILD_TEXT,
        guildId: e.id
      })
    })
  }, "create-channel"), (0, l.jsx)(i.MenuItem, {
    id: "create-category",
    label: d.Z.Messages.CREATE_CATEGORY,
    action: () => (0, i.openModalLazy)(async () => {
      let {
        default: n
      } = await Promise.all([a.e("99387"), a.e("45094")]).then(a.bind(a, 218613));
      return a => (0, l.jsx)(n, {
        ...a,
        channelType: u.d4z.GUILD_CATEGORY,
        guildId: e.id
      })
    })
  }, "create-category")] : null
}