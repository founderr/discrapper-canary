"use strict";
i.r(t), i.d(t, {
  default: function() {
    return g
  }
});
var n = i("735250");
i("470079");
var s = i("442837"),
  a = i("481060"),
  u = i("132871"),
  l = i("147890"),
  o = i("593128"),
  d = i("434404"),
  r = i("956324"),
  c = i("994763"),
  S = i("984933"),
  f = i("725568"),
  E = i("981631"),
  N = i("308083"),
  _ = i("689938");

function g(e) {
  function t(t) {
    d.default.open(e.id, t)
  }
  let i = (0, s.useStateFromStoresArray)([S.default], () => S.default.getChannels(e.id).SELECTABLE, [e]),
    g = (0, r.default)(e);
  return __OVERLAY__ || !g ? null : (0, n.jsx)(a.MenuItem, {
    id: "guild-settings",
    label: _.default.Messages.SERVER_SETTINGS,
    action: () => t(),
    children: (0, c.getGuildSettingsSections)(e, i).map(i => {
      let {
        section: s,
        label: d
      } = i;
      if (null == d) return null;
      switch (s) {
        case E.GuildSettingsSections.DELETE:
          return null;
        case E.GuildSettingsSections.COMMUNITY:
          return (0, n.jsx)(a.MenuItem, {
            id: s,
            action: () => t(s),
            label: _.default.Messages.GUILD_SETTINGS_COMMUNITY
          }, s);
        case E.GuildSettingsSections.APP_DIRECTORY:
          return (0, n.jsx)(a.MenuItem, {
            id: s,
            action: () => {
              (0, l.goToAppDirectory)({
                guildId: e.id,
                entrypoint: {
                  name: u.ApplicationDirectoryEntrypointNames.GUILD_CONTEXT_MENU
                }
              })
            },
            label: d
          }, s);
        case E.GuildSettingsSections.CLAN:
          return (0, n.jsx)(a.MenuItem, {
            id: "guild-settings",
            label: _.default.Messages.CLAN_SETTINGS,
            action: () => (0, f.openFullScreenLayer)(t => {
              let {
                closeLayer: i
              } = t;
              return (0, n.jsx)(o.default, {
                onClose: i,
                guildId: e.id
              })
            }, {
              layerKey: N.CLAN_SETTINGS_MODAL_LAYER_KEY
            })
          });
        default:
          return (0, n.jsx)(a.MenuItem, {
            id: s,
            action: () => t(s),
            label: d
          }, s)
      }
    })
  })
}