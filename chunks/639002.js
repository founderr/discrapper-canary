"use strict";
a.r(t), a.d(t, {
  default: function() {
    return d
  }
});
var l = a("735250");
a("470079");
var n = a("481060"),
  s = a("782568"),
  i = a("626135"),
  r = a("132871"),
  c = a("981631"),
  u = a("689938"),
  o = a("247412");

function d(e) {
  let {
    guildId: t
  } = e;
  return (0, l.jsxs)("div", {
    className: o.container,
    children: [(0, l.jsx)("img", {
      className: o.image,
      src: a("731914"),
      alt: ""
    }), (0, l.jsxs)("div", {
      className: o.content,
      children: [(0, l.jsx)(n.Heading, {
        variant: "heading-md/extrabold",
        children: u.default.Messages.APP_DIRECTORY_MUSIC_FOOTER_HEADER
      }), (0, l.jsx)(n.Text, {
        variant: "text-sm/medium",
        children: u.default.Messages.APP_DIRECTORY_MUSIC_FOOTER_CONTENT
      })]
    }), (0, l.jsx)(n.Button, {
      size: n.Button.Sizes.SMALL,
      onClick: function() {
        i.default.track(c.AnalyticEvents.APP_DIRECTORY_CTA_CLICKED, {
          cta: "submit_music_app",
          current_page: r.ApplicationDirectoryViews.SEARCH,
          guild_id: t
        }), (0, s.default)("https://dis.gd/music-search-page-inclusion")
      },
      color: n.Button.Colors.TRANSPARENT,
      className: o.button,
      children: u.default.Messages.APP_DIRECTORY_MUSIC_FOOTER_CTA
    })]
  })
}