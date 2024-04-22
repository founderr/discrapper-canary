"use strict";
n.r(t), n.d(t, {
  ContentRowBadges: function() {
    return T
  },
  useWatchContentData: function() {
    return _
  }
});
var a = n("735250"),
  l = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("23513"),
  o = n("399006"),
  u = n("442837"),
  d = n("481060"),
  c = n("835473"),
  f = n("594174"),
  h = n("81063"),
  m = n("443487"),
  p = n("43205"),
  E = n("371991"),
  C = n("701488"),
  g = n("689938"),
  S = n("138317");
let _ = e => {
    var t;
    let n = (0, c.useGetOrFetchApplication)(e.extra.application_id),
      a = null == n ? void 0 : n.getIconURL(128),
      l = (0, u.useStateFromStores)([f.default], () => f.default.getUser(e.author_id)),
      s = (0, h.getAssetImage)(e.extra.application_id, e.extra.media_assets_large_image, [C.ImageSizes.LARGE, C.ImageSizes.LARGE]),
      i = /\w+ (\d+), \w+ (\d+)/.exec(null !== (t = e.extra.media_assets_large_text) && void 0 !== t ? t : "");
    return {
      user: l,
      mediaImageSrc: null != s ? s : a,
      episodeDescription: null != i ? g.default.Messages.MEMBER_LIST_CONTENT_FEED_WATCH_SEASON_EPISODE.format({
        seasonNum: i[1],
        episodeNum: i[2]
      }) : null
    }
  },
  T = e => {
    let {
      entry: t,
      textColor: n = "text-secondary",
      iconColor: l,
      className: s,
      episodeDescription: u
    } = e;
    return (0, a.jsxs)("div", {
      className: i()(S.badgeRow, s),
      children: [(0, a.jsxs)("div", {
        className: S.badgeContainer,
        children: [(0, a.jsx)(o.TvIcon, {
          width: 12,
          height: 12,
          color: l
        }), (0, a.jsx)(E.default, {
          entry: t,
          textColor: n
        })]
      }), null == u ? null : (0, a.jsxs)("div", {
        className: S.badgeContainer,
        children: [(0, a.jsx)(r.TopicsIcon, {
          width: 12,
          height: 12,
          color: l
        }), (0, a.jsx)(d.Text, {
          variant: "text-xs/normal",
          color: n,
          children: u
        })]
      })]
    })
  };
t.default = l.memo(e => {
  let {
    entry: t,
    channel: n,
    selected: l
  } = e, {
    mediaImageSrc: s,
    episodeDescription: i
  } = _(t);
  return (0, a.jsxs)(m.Card, {
    selected: l,
    children: [(0, a.jsxs)(m.CardInfoSection, {
      children: [(0, a.jsx)(m.CardParticipants, {
        entry: t,
        channelId: n.id,
        guildId: n.guild_id
      }), (0, a.jsx)(m.CardTitle, {
        children: g.default.Messages.MEMBER_LIST_CONTENT_FEED_WATCHED_MEDIA.format({
          mediaTitle: t.extra.media_title
        })
      }), (0, a.jsx)(T, {
        entry: t,
        episodeDescription: i
      })]
    }), (0, a.jsx)(p.ContentImage, {
      src: s,
      size: 48,
      alt: t.extra.media_title
    })]
  })
})