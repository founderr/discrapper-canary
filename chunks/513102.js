"use strict";
a.r(t), a.d(t, {
  default: function() {
    return d
  }
});
var n = a("735250");
a("470079");
var l = a("481060"),
  i = a("132871"),
  s = a("147890"),
  r = a("912527"),
  o = a("689938");

function d(e) {
  return (0, n.jsx)(l.MenuItem, {
    id: "application-directory",
    label: (0, n.jsx)(n.Fragment, {
      children: o.default.Messages.APP_DIRECTORY
    }),
    icon: r.default,
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