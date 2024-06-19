n.d(t, {
  Z: function() {
    return h
  }
});
var i = n(735250);
n(470079);
var s = n(481060),
  l = n(367907),
  a = n(970731),
  r = n(810090),
  o = n(626135),
  c = n(63063),
  u = n(981631),
  d = n(689938),
  E = n(290110);

function h(e) {
  let {
    guildId: t,
    markAsDismissed: h
  } = e, _ = (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(s.Text, {
      color: "always-white",
      variant: "text-sm/normal",
      className: E.upsellBody,
      children: d.Z.Messages.MEDIA_CHANNEL_UPSELL_BODY
    }), (0, i.jsx)(s.Text, {
      color: "always-white",
      variant: "text-sm/normal",
      children: d.Z.Messages.MEDIA_CHANNEL_LEARN_MORE.format({
        hcArticleUrl: c.Z.getCreatorSupportArticleURL(u.BhN.MEDIA_CHANNEL)
      })
    })]
  });
  return (0, i.jsx)(a.ZP, {
    header: d.Z.Messages.MEDIA_CHANNEL_UPSELL_TITLE,
    content: _,
    asset: (0, i.jsx)(r.Z, {
      className: E.video,
      src: "https://cdn.discordapp.com/assets/media_channel/media_channel_upsell_demo.mp4",
      autoPlay: !0,
      loop: !0
    }),
    buttonCTA: d.Z.Messages.MEDIA_CHANNEL_UPSELL_CREATE_NOW_CTA,
    onClick: () => {
      o.default.track(u.rMx.MEDIA_CHANNEL_UPSELL_CLICKED, {
        ...(0, l.hH)(t)
      }), (0, s.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("45094")]).then(n.bind(n, 218613));
        return n => (0, i.jsx)(e, {
          ...n,
          channelType: u.d4z.GUILD_MEDIA,
          guildId: t
        })
      })
    },
    secondaryButtonCTA: d.Z.Messages.DISMISS,
    markAsDismissed: h
  })
}