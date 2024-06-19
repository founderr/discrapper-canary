i.d(t, {
  Z: function() {
    return h
  }
});
var n = i(735250);
i(470079);
var s = i(481060),
  a = i(782568),
  r = i(626135),
  l = i(132871),
  o = i(981631),
  c = i(689938),
  d = i(498779),
  u = i(820305);

function h() {
  let e = (0, l.useApplicationDirectoryHistory)(e => e.guildId);
  return (0, n.jsxs)("div", {
    className: d.container,
    role: "contentinfo",
    children: [(0, n.jsx)("img", {
      className: d.image,
      src: u,
      alt: ""
    }), (0, n.jsxs)("div", {
      className: d.content,
      children: [(0, n.jsx)(s.Heading, {
        variant: "heading-md/semibold",
        children: c.Z.Messages.APP_DIRECTORY_HOME_NEW_TO_APPS_BANNER_HEADING
      }), (0, n.jsx)(s.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        children: c.Z.Messages.APP_DIRECTORY_HOME_NEW_TO_APPS_BANNER_BODY
      })]
    }), (0, n.jsx)(s.Button, {
      size: s.Button.Sizes.SMALL,
      onClick: function() {
        r.default.track(o.rMx.APP_DIRECTORY_CTA_CLICKED, {
          cta: "new_to_apps",
          current_page: l.ApplicationDirectoryViews.HOME,
          guild_id: e
        }), (0, a.Z)("https://discord.com/blog/how-to-use-discord-apps")
      },
      className: d.button,
      children: c.Z.Messages.APP_DIRECTORY_HOME_NEW_TO_APPS_BANNER_CTA
    })]
  })
}