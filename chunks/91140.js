"use strict";
n.r(t), n.d(t, {
  ContentRowBadges: function() {
    return M
  },
  useGamingContentData: function() {
    return x
  }
});
var a = n("735250"),
  l = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("442837"),
  o = n("213602"),
  u = n("149020"),
  d = n("434559"),
  c = n("324992"),
  f = n("137443"),
  h = n("481060"),
  m = n("835473"),
  p = n("594174"),
  E = n("823379"),
  C = n("162461"),
  g = n("22211"),
  S = n("561308"),
  _ = n("44180"),
  T = n("443487"),
  I = n("43205"),
  A = n("371991"),
  v = n("689938"),
  N = n("138317");
let x = e => {
    let t = (0, m.useGetOrFetchApplication)(e.extra.application_id),
      n = null == t ? void 0 : t.getIconURL(128);
    return {
      applicationImageSrc: n,
      user: (0, r.useStateFromStores)([p.default], () => p.default.getUser(e.author_id))
    }
  },
  M = e => {
    let {
      entry: t,
      textColor: n = "text-secondary",
      iconColor: l,
      className: s,
      maxBadgesCount: r
    } = e, {
      channel: m
    } = (0, g.default)(t), {
      showBadge: p
    } = C.VoiceEnrichmentsExperiment.useExperiment({
      location: "content_badge"
    }), T = [(() => {
      let e = (0, S.isEntryActive)(t);
      return (0, a.jsxs)("div", {
        className: N.badgeContainer,
        children: [(0, a.jsx)(u.GameControllerIcon, {
          width: 12,
          height: 12,
          color: null != l ? l : e ? h.tokens.colors.REDESIGN_BUTTON_PRIMARY_ON_BLURPLE_PRESSED_TEXT : void 0
        }), (0, a.jsx)(A.default, {
          entry: t,
          textColor: n
        })]
      })
    })(), p && null != m ? (0, a.jsx)(_.default, {
      channel: m,
      iconColor: l,
      textColor: n
    }) : null, (0, S.isEntryNew)(t) ? (0, a.jsxs)("div", {
      className: N.badgeContainer,
      children: [(0, a.jsx)(d.NewUserLargeIcon, {
        width: 12,
        height: 12,
        color: null != l ? l : h.tokens.colors.STATUS_POSITIVE
      }), (0, a.jsx)(h.Text, {
        variant: "text-xs/normal",
        color: n,
        children: v.default.Messages.MEMBER_LIST_CONTENT_FEED_FIRST_TIME
      })]
    }) : null, (() => {
      let e = (0, S.getStreakCount)(t);
      return null == e || e < 2 ? null : (0, a.jsxs)("div", {
        className: N.badgeContainer,
        children: [(0, a.jsx)(o.FlashIcon, {
          width: 12,
          height: 12,
          color: l
        }), (0, a.jsx)(h.Text, {
          variant: "text-xs/normal",
          color: n,
          children: v.default.Messages.MEMBER_LIST_CONTENT_FEED_STREAK_DAYS.format({
            days: e
          })
        })]
      })
    })(), (0, S.isEntryResurrected)(t) ? (0, a.jsxs)("div", {
      className: N.badgeContainer,
      children: [(0, a.jsx)(c.RetryIcon, {
        width: 12,
        height: 12,
        color: l
      }), (0, a.jsx)(h.Text, {
        variant: "text-xs/normal",
        color: n,
        children: v.default.Messages.MEMBER_LIST_CONTENT_FEED_RESURRECTED
      })]
    }) : null, (0, S.isEntryMarathon)(t) ? (0, a.jsxs)("div", {
      className: N.badgeContainer,
      children: [(0, a.jsx)(f.TimerIcon, {
        width: 12,
        height: 12,
        color: l
      }), (0, a.jsx)(h.Text, {
        variant: "text-xs/normal",
        color: n,
        children: v.default.Messages.MEMBER_LIST_CONTENT_FEED_MARATHON
      })]
    }) : null];
    return null != r && (T = T.filter(E.isNotNullish).slice(0, r)), (0, a.jsx)("div", {
      className: i()(N.badgeRow, s),
      children: T
    })
  };
t.default = l.memo(e => {
  let {
    entry: t,
    channel: n,
    selected: l
  } = e, {
    applicationImageSrc: s
  } = x(t);
  return (0, a.jsxs)(T.Card, {
    selected: l,
    children: [(0, a.jsxs)(T.CardInfoSection, {
      children: [(0, a.jsx)(T.CardParticipants, {
        entry: t,
        channelId: n.id,
        guildId: n.guild_id
      }), (0, a.jsx)(T.CardTitle, {
        children: function(e) {
          return (0, S.isEntryActive)(e) ? v.default.Messages.MEMBER_LIST_CONTENT_FEED_PLAYING_GAME.format({
            gameName: e.extra.game_name
          }) : v.default.Messages.MEMBER_LIST_CONTENT_FEED_PLAYED_GAME.format({
            gameName: e.extra.game_name
          })
        }(t)
      }), (0, a.jsx)(M, {
        entry: t,
        maxBadgesCount: 2
      })]
    }), (0, a.jsx)(I.ContentImage, {
      src: s,
      size: 48
    })]
  })
})