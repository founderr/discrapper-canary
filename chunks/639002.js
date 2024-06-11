"use strict";
a.r(t), a.d(t, {
  default: function() {
    return o
  }
});
var l = a("735250");
a("470079");
var i = a("481060"),
  n = a("782568"),
  s = a("626135"),
  r = a("132871"),
  c = a("981631"),
  u = a("689938"),
  d = a("247412");

function o(e) {
  let {
    guildId: t
  } = e;
  return (0, l.jsxs)("div", {
    className: d.container,
    children: [(0, l.jsx)("img", {
      className: d.image,
      src: a("731914"),
      alt: ""
    }), (0, l.jsxs)("div", {
      className: d.content,
      children: [(0, l.jsx)(i.Heading, {
        variant: "heading-md/extrabold",
        children: u.default.Messages.APP_DIRECTORY_MUSIC_FOOTER_HEADER
      }), (0, l.jsx)(i.Text, {
        variant: "text-sm/medium",
        children: u.default.Messages.APP_DIRECTORY_MUSIC_FOOTER_CONTENT
      })]
    }), (0, l.jsx)(i.Button, {
      size: i.Button.Sizes.SMALL,
      onClick: function() {
        s.default.track(c.AnalyticEvents.APP_DIRECTORY_CTA_CLICKED, {
          cta: "submit_music_app",
          current_page: r.ApplicationDirectoryViews.SEARCH,
          guild_id: t
        }), (0, n.default)("https://dis.gd/music-search-page-inclusion")
      },
      color: i.Button.Colors.TRANSPARENT,
      className: d.button,
      children: u.default.Messages.APP_DIRECTORY_MUSIC_FOOTER_CTA
    })]
  })
}