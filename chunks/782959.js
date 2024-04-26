"use strict";
a.r(t), a.d(t, {
  default: function() {
    return E
  }
});
var n = a("735250");
a("470079");
var s = a("481060"),
  l = a("367907"),
  i = a("970731"),
  r = a("810090"),
  o = a("626135"),
  u = a("63063"),
  d = a("981631"),
  c = a("689938"),
  f = a("905561");

function E(e) {
  let {
    guildId: t,
    markAsDismissed: E
  } = e, h = (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(s.Text, {
      color: "always-white",
      variant: "text-sm/normal",
      className: f.upsellBody,
      children: c.default.Messages.MEDIA_CHANNEL_UPSELL_BODY
    }), (0, n.jsx)(s.Text, {
      color: "always-white",
      variant: "text-sm/normal",
      children: c.default.Messages.MEDIA_CHANNEL_LEARN_MORE.format({
        hcArticleUrl: u.default.getCreatorSupportArticleURL(d.HelpdeskArticles.MEDIA_CHANNEL)
      })
    })]
  });
  return (0, n.jsx)(i.default, {
    header: c.default.Messages.MEDIA_CHANNEL_UPSELL_TITLE,
    content: h,
    asset: (0, n.jsx)(r.default, {
      className: f.video,
      src: "https://cdn.discordapp.com/assets/media_channel/media_channel_upsell_demo.mp4",
      autoPlay: !0,
      loop: !0
    }),
    buttonCTA: c.default.Messages.MEDIA_CHANNEL_UPSELL_CREATE_NOW_CTA,
    onClick: () => {
      o.default.track(d.AnalyticEvents.MEDIA_CHANNEL_UPSELL_CLICKED, {
        ...(0, l.collectGuildAnalyticsMetadata)(t)
      }), (0, s.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([a.e("99387"), a.e("45094"), a.e("36494")]).then(a.bind(a, "218613"));
        return a => (0, n.jsx)(e, {
          ...a,
          channelType: d.ChannelTypes.GUILD_MEDIA,
          guildId: t
        })
      })
    },
    secondaryButtonCTA: c.default.Messages.DISMISS,
    markAsDismissed: E
  })
}