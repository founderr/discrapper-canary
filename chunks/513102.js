"use strict";
a.r(t), a.d(t, {
  default: function() {
    return d
  }
});
var n = a("735250");
a("470079");
var s = a("481060"),
  l = a("132871"),
  i = a("147890"),
  r = a("912527"),
  o = a("689938");

function d(e) {
  return (0, n.jsx)(s.MenuItem, {
    id: "application-directory",
    label: (0, n.jsx)(n.Fragment, {
      children: o.default.Messages.APP_DIRECTORY
    }),
    icon: r.default,
    action: () => {
      (0, i.goToAppDirectory)({
        guildId: e.id,
        entrypoint: {
          name: l.ApplicationDirectoryEntrypointNames.GUILD_HEADER_POPOUT
        }
      })
    }
  })
}