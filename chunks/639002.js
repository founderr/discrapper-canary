a.d(n, {
  Z: function() {
    return u
  }
});
var t = a(735250);
a(470079);
var i = a(481060),
  l = a(782568),
  s = a(626135),
  r = a(132871),
  c = a(981631),
  o = a(689938),
  d = a(665012);

function u(e) {
  let {
    guildId: n
  } = e;
  return (0, t.jsxs)("div", {
    className: d.container,
    children: [(0, t.jsx)("img", {
      className: d.image,
      src: a(731914),
      alt: ""
    }), (0, t.jsxs)("div", {
      className: d.content,
      children: [(0, t.jsx)(i.Heading, {
        variant: "heading-md/extrabold",
        children: o.Z.Messages.APP_DIRECTORY_MUSIC_FOOTER_HEADER
      }), (0, t.jsx)(i.Text, {
        variant: "text-sm/medium",
        children: o.Z.Messages.APP_DIRECTORY_MUSIC_FOOTER_CONTENT
      })]
    }), (0, t.jsx)(i.Button, {
      size: i.Button.Sizes.SMALL,
      onClick: function() {
        s.default.track(c.rMx.APP_DIRECTORY_CTA_CLICKED, {
          cta: "submit_music_app",
          current_page: r.ApplicationDirectoryViews.SEARCH,
          guild_id: n
        }), (0, l.Z)("https://dis.gd/music-search-page-inclusion")
      },
      color: i.Button.Colors.TRANSPARENT,
      className: d.button,
      children: o.Z.Messages.APP_DIRECTORY_MUSIC_FOOTER_CTA
    })]
  })
}