"use strict";
a.r(t), a.d(t, {
  default: function() {
    return r
  }
});
var n = a("37983");
a("884691");
var i = a("77078"),
  l = a("412707"),
  d = a("646186"),
  s = a("71216"),
  u = a("782340");

function r(e) {
  return (0, n.jsx)(i.MenuItem, {
    id: "application-directory",
    label: (0, n.jsx)(n.Fragment, {
      children: u.default.Messages.APP_DIRECTORY
    }),
    icon: s.default,
    action: () => {
      (0, d.goToAppDirectory)({
        guildId: e.id,
        entrypoint: {
          name: l.ApplicationDirectoryEntrypointNames.GUILD_HEADER_POPOUT
        }
      })
    }
  })
}