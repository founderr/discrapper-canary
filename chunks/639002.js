n.d(a, {
  Z: function() {
    return u
  }
});
var t = n(735250);
n(470079);
var i = n(481060),
  l = n(782568),
  s = n(626135),
  r = n(132871),
  c = n(981631),
  o = n(689938),
  d = n(665012);

function u(e) {
  let {
    guildId: a
  } = e;
  return (0, t.jsxs)("div", {
    className: d.container,
    children: [(0, t.jsx)("img", {
      className: d.image,
      src: n(731914),
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
          guild_id: a
        }), (0, l.Z)("https://dis.gd/music-search-page-inclusion")
      },
      color: i.Button.Colors.TRANSPARENT,
      className: d.button,
      children: o.Z.Messages.APP_DIRECTORY_MUSIC_FOOTER_CTA
    })]
  })
}