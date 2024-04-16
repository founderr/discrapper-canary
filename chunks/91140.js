"use strict";
n.r(t), n.d(t, {
  ContentRowBadges: function() {
    return x
  },
  useGamingContentData: function() {
    return N
  }
});
var a = n("735250"),
  l = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("442837"),
  o = n("149020"),
  u = n("434559"),
  d = n("324992"),
  c = n("137443"),
  f = n("481060"),
  h = n("835473"),
  m = n("594174"),
  p = n("823379"),
  E = n("162461"),
  C = n("22211"),
  g = n("561308"),
  S = n("44180"),
  _ = n("443487"),
  T = n("43205"),
  I = n("371991"),
  A = n("689938"),
  v = n("138317");
let N = e => {
    let t = (0, h.useGetOrFetchApplication)(e.extra.application_id),
      n = null == t ? void 0 : t.getIconURL(128);
    return {
      applicationImageSrc: n,
      user: (0, r.useStateFromStores)([m.default], () => m.default.getUser(e.author_id))
    }
  },
  x = e => {
    let {
      entry: t,
      textColor: n = "text-secondary",
      iconColor: l,
      className: s,
      maxBadgesCount: r
    } = e, {
      channel: h
    } = (0, C.default)(t), {
      showBadge: m
    } = E.VoiceEnrichmentsExperiment.useExperiment({
      location: "content_badge"
    }), _ = [(() => {
      let e = (0, g.isEntryActive)(t);
      return (0, a.jsxs)("div", {
        className: v.badgeContainer,
        children: [(0, a.jsx)(o.GameControllerIcon, {
          width: 12,
          height: 12,
          color: null != l ? l : e ? f.tokens.colors.REDESIGN_BUTTON_PRIMARY_ON_BLURPLE_PRESSED_TEXT : void 0
        }), (0, a.jsx)(I.default, {
          entry: t,
          textColor: n
        })]
      })
    })(), m && null != h ? (0, a.jsx)(S.default, {
      channel: h,
      iconColor: l,
      textColor: n
    }) : null, (0, g.isEntryNew)(t) ? (0, a.jsxs)("div", {
      className: v.badgeContainer,
      children: [(0, a.jsx)(u.NewUserLargeIcon, {
        width: 12,
        height: 12,
        color: null != l ? l : f.tokens.colors.STATUS_POSITIVE
      }), (0, a.jsx)(f.Text, {
        variant: "text-xs/normal",
        color: n,
        children: A.default.Messages.MEMBER_LIST_CONTENT_FEED_FIRST_TIME
      })]
    }) : null, (0, g.isEntryResurrected)(t) ? (0, a.jsxs)("div", {
      className: v.badgeContainer,
      children: [(0, a.jsx)(d.RetryIcon, {
        width: 12,
        height: 12,
        color: l
      }), (0, a.jsx)(f.Text, {
        variant: "text-xs/normal",
        color: n,
        children: A.default.Messages.MEMBER_LIST_CONTENT_FEED_RESURRECTED
      })]
    }) : null, (0, g.isEntryMarathon)(t) ? (0, a.jsxs)("div", {
      className: v.badgeContainer,
      children: [(0, a.jsx)(c.TimerIcon, {
        width: 12,
        height: 12,
        color: l
      }), (0, a.jsx)(f.Text, {
        variant: "text-xs/normal",
        color: n,
        children: A.default.Messages.MEMBER_LIST_CONTENT_FEED_MARATHON
      })]
    }) : null];
    return null != r && (_ = _.filter(p.isNotNullish).slice(0, r)), (0, a.jsx)("div", {
      className: i()(v.badgeRow, s),
      children: _
    })
  };
t.default = l.memo(e => {
  let {
    entry: t,
    channel: n,
    selected: l
  } = e, {
    applicationImageSrc: s
  } = N(t);
  return (0, a.jsxs)(_.Card, {
    selected: l,
    children: [(0, a.jsxs)(_.CardInfoSection, {
      children: [(0, a.jsx)(_.CardUser, {
        userId: t.author_id,
        channelId: n.id,
        guildId: n.guild_id
      }), (0, a.jsx)(_.CardTitle, {
        children: function(e) {
          return (0, g.isEntryActive)(e) ? A.default.Messages.MEMBER_LIST_CONTENT_FEED_PLAYING_GAME.format({
            gameName: e.extra.game_name
          }) : A.default.Messages.MEMBER_LIST_CONTENT_FEED_PLAYED_GAME.format({
            gameName: e.extra.game_name
          })
        }(t)
      }), (0, a.jsx)(x, {
        entry: t,
        maxBadgesCount: 2
      })]
    }), (0, a.jsx)(T.ContentImage, {
      src: s,
      size: 48
    })]
  })
})