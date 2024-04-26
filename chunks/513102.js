"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var a = n("735250");
n("470079");
var l = n("481060"),
  s = n("132871"),
  i = n("147890"),
  r = n("912527"),
  o = n("689938");

function d(e) {
  return (0, a.jsx)(l.MenuItem, {
    id: "application-directory",
    label: (0, a.jsx)(a.Fragment, {
      children: o.default.Messages.APP_DIRECTORY
    }),
    icon: r.default,
    action: () => {
      (0, i.goToAppDirectory)({
        guildId: e.id,
        entrypoint: {
          name: s.ApplicationDirectoryEntrypointNames.GUILD_HEADER_POPOUT
        }
      })
    }
  })
}