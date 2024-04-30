"use strict";
i.r(t), i.d(t, {
  default: function() {
    return E
  }
});
var n = i("735250");
i("470079");
var s = i("442837"),
  a = i("481060"),
  l = i("132871"),
  u = i("147890"),
  o = i("434404"),
  d = i("956324"),
  r = i("994763"),
  c = i("984933"),
  S = i("981631"),
  f = i("689938");

function E(e) {
  function t(t) {
    o.default.open(e.id, t)
  }
  let i = (0, s.useStateFromStoresArray)([c.default], () => c.default.getChannels(e.id).SELECTABLE, [e]),
    E = (0, d.default)(e);
  return __OVERLAY__ || !E ? null : (0, n.jsx)(a.MenuItem, {
    id: "guild-settings",
    label: f.default.Messages.SERVER_SETTINGS,
    action: () => t(),
    children: (0, r.getGuildSettingsSections)(e, i).map(i => {
      let {
        section: s,
        label: o
      } = i;
      if (null == o) return null;
      switch (s) {
        case S.GuildSettingsSections.DELETE:
          return null;
        case S.GuildSettingsSections.COMMUNITY:
          return (0, n.jsx)(a.MenuItem, {
            id: s,
            action: () => t(s),
            label: f.default.Messages.GUILD_SETTINGS_COMMUNITY
          }, s);
        case S.GuildSettingsSections.APP_DIRECTORY:
          return (0, n.jsx)(a.MenuItem, {
            id: s,
            action: () => {
              (0, u.goToAppDirectory)({
                guildId: e.id,
                entrypoint: {
                  name: l.ApplicationDirectoryEntrypointNames.GUILD_CONTEXT_MENU
                }
              })
            },
            label: o
          }, s);
        default:
          return (0, n.jsx)(a.MenuItem, {
            id: s,
            action: () => t(s),
            label: o
          }, s)
      }
    })
  })
}