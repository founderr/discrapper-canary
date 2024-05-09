"use strict";
i.r(t), i.d(t, {
  default: function() {
    return h
  }
});
var n = i("735250");
i("470079");
var a = i("481060"),
  l = i("782568"),
  s = i("626135"),
  r = i("132871"),
  o = i("981631"),
  c = i("689938"),
  d = i("943331"),
  u = i("820305");

function h() {
  let e = (0, r.useApplicationDirectoryHistory)(e => e.guildId);
  return (0, n.jsxs)("div", {
    className: d.container,
    role: "contentinfo",
    children: [(0, n.jsx)("img", {
      className: d.image,
      src: u,
      alt: ""
    }), (0, n.jsxs)("div", {
      className: d.content,
      children: [(0, n.jsx)(a.Heading, {
        variant: "heading-md/semibold",
        children: c.default.Messages.APP_DIRECTORY_HOME_NEW_TO_APPS_BANNER_HEADING
      }), (0, n.jsx)(a.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        children: c.default.Messages.APP_DIRECTORY_HOME_NEW_TO_APPS_BANNER_BODY
      })]
    }), (0, n.jsx)(a.Button, {
      size: a.Button.Sizes.SMALL,
      onClick: function() {
        s.default.track(o.AnalyticEvents.APP_DIRECTORY_CTA_CLICKED, {
          cta: "new_to_apps",
          current_page: r.ApplicationDirectoryViews.HOME,
          guild_id: e
        }), (0, l.default)("https://discord.com/blog/how-to-use-discord-apps")
      },
      className: d.button,
      children: c.default.Messages.APP_DIRECTORY_HOME_NEW_TO_APPS_BANNER_CTA
    })]
  })
}