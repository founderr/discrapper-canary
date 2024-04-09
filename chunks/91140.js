"use strict";
n.r(t), n.d(t, {
  ContentRowBadges: function() {
    return v
  },
  useGamingContentData: function() {
    return A
  }
});
var a = n("735250"),
  l = n("470079"),
  s = n("803997"),
  i = n.n(s),
  r = n("442837"),
  o = n("149020"),
  u = n("420166"),
  d = n("481060"),
  c = n("835473"),
  f = n("594174"),
  h = n("823379"),
  m = n("162461"),
  p = n("22211"),
  E = n("561308"),
  C = n("44180"),
  g = n("443487"),
  S = n("43205"),
  _ = n("371991"),
  T = n("689938"),
  I = n("138317");
let A = e => {
    let t = (0, c.useGetOrFetchApplication)(e.extra.application_id),
      n = null == t ? void 0 : t.getIconURL(128);
    return {
      applicationImageSrc: n,
      user: (0, r.useStateFromStores)([f.default], () => f.default.getUser(e.author_id))
    }
  },
  v = e => {
    let {
      entry: t,
      textColor: n = "text-secondary",
      iconColor: l,
      className: s,
      maxBadgesCount: r
    } = e, {
      channel: c
    } = (0, p.default)(t), {
      showBadge: f
    } = m.VoiceEnrichmentsExperiment.useExperiment({
      location: "content_badge"
    }), g = [(() => {
      let e = (0, E.isEntryActive)(t);
      return (0, a.jsxs)("div", {
        className: I.badgeContainer,
        children: [(0, a.jsx)(o.GameControllerIcon, {
          width: 12,
          height: 12,
          color: null != l ? l : e ? d.tokens.colors.REDESIGN_BUTTON_PRIMARY_ON_BLURPLE_PRESSED_TEXT : void 0
        }), (0, a.jsx)(_.default, {
          entry: t,
          textColor: n
        })]
      })
    })(), f && null != c ? (0, a.jsx)(C.default, {
      channel: c,
      iconColor: l,
      textColor: n
    }) : null, (0, E.isEntryNew)(t) ? (0, a.jsxs)("div", {
      className: I.badgeContainer,
      children: [(0, a.jsx)(u.NewUserIcon, {
        width: 12,
        height: 12,
        color: null != l ? l : d.tokens.colors.STATUS_POSITIVE
      }), (0, a.jsx)(d.Text, {
        variant: "text-xs/normal",
        color: n,
        children: T.default.Messages.MEMBER_LIST_CONTENT_FEED_FIRST_TIME
      })]
    }) : null];
    return null != r && (g = g.filter(h.isNotNullish).slice(0, r)), (0, a.jsx)("div", {
      className: i()(I.badgeRow, s),
      children: g
    })
  };
t.default = l.memo(e => {
  let {
    entry: t,
    channel: n,
    selected: l
  } = e, {
    applicationImageSrc: s
  } = A(t);
  return (0, a.jsxs)(g.Card, {
    selected: l,
    children: [(0, a.jsxs)(g.CardInfoSection, {
      children: [(0, a.jsx)(g.CardUser, {
        userId: t.author_id,
        channelId: n.id,
        guildId: n.guild_id
      }), (0, a.jsx)(g.CardTitle, {
        children: function(e) {
          return (0, E.isEntryActive)(e) ? T.default.Messages.MEMBER_LIST_CONTENT_FEED_PLAYING_GAME.format({
            gameName: e.extra.game_name
          }) : T.default.Messages.MEMBER_LIST_CONTENT_FEED_PLAYED_GAME.format({
            gameName: e.extra.game_name
          })
        }(t)
      }), (0, a.jsx)(v, {
        entry: t,
        maxBadgesCount: 2
      })]
    }), (0, a.jsx)(S.ContentImage, {
      src: s,
      size: 48
    })]
  })
})