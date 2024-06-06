"use strict";
a.r(t), a.d(t, {
  default: function() {
    return r
  }
});
var l = a("735250");
a("470079");
var n = a("481060"),
  i = a("132871"),
  s = a("147890"),
  d = a("912527"),
  u = a("689938");

function r(e) {
  return (0, l.jsx)(n.MenuItem, {
    id: "application-directory",
    label: (0, l.jsx)(l.Fragment, {
      children: u.default.Messages.APP_DIRECTORY
    }),
    icon: d.default,
    action: () => {
      (0, s.goToAppDirectory)({
        guildId: e.id,
        entrypoint: {
          name: i.ApplicationDirectoryEntrypointNames.GUILD_HEADER_POPOUT
        }
      })
    }
  })
}