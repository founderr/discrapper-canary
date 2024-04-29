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
  N = n("571425");
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
      condensed: n,
      textColor: l = "text-secondary",
      iconColor: s,
      className: r,
      maxBadgesCount: m
    } = e, {
      channel: p
    } = (0, g.default)(t), {
      showBadge: T
    } = C.VoiceEnrichmentsExperiment.useExperiment({
      location: "content_badge"
    }), I = [(() => {
      let e = (0, S.isEntryActive)(t);
      return (0, a.jsxs)("div", {
        className: N.badgeContainer,
        children: [(0, a.jsx)(u.GameControllerIcon, {
          width: 12,
          height: 12,
          color: null != s ? s : e ? h.tokens.colors.REDESIGN_BUTTON_PRIMARY_ON_BLURPLE_PRESSED_TEXT : void 0
        }), (0, a.jsx)(A.default, {
          entry: t,
          textColor: l
        })]
      })
    })(), T && null != p ? (0, a.jsx)(_.default, {
      channel: p,
      iconColor: s,
      textColor: l
    }) : null, (0, S.isEntryNew)(t) ? (0, a.jsxs)("div", {
      className: N.badgeContainer,
      children: [(0, a.jsx)(d.NewUserLargeIcon, {
        width: 12,
        height: 12,
        color: null != s ? s : h.tokens.colors.STATUS_POSITIVE
      }), (0, a.jsx)(h.Text, {
        variant: "text-xs/normal",
        color: l,
        children: v.default.Messages.MEMBER_LIST_CONTENT_FEED_FIRST_TIME
      })]
    }) : null, (() => {
      let e = (0, S.getStreakCount)(t);
      return null == e || e < 2 ? null : (0, a.jsxs)("div", {
        className: N.badgeContainer,
        children: [(0, a.jsx)(o.FlashIcon, {
          width: 12,
          height: 12,
          color: s
        }), (0, a.jsx)(h.Text, {
          variant: "text-xs/normal",
          color: l,
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
        color: s
      }), (0, a.jsx)(h.Text, {
        variant: "text-xs/normal",
        color: l,
        children: v.default.Messages.MEMBER_LIST_CONTENT_FEED_RESURRECTED
      })]
    }) : null, (() => {
      if (!(0, S.isEntryMarathon)(t)) return null;
      let e = !n && !(0, S.isEntryActive)(t),
        i = n && !(0, S.isEntryActive)(t);
      return (0, a.jsx)(h.Tooltip, {
        text: (0, S.getMarathonDurationStr)(t),
        shouldShow: i,
        children: n => (0, a.jsxs)("div", {
          className: N.badgeContainer,
          ...n,
          children: [(0, a.jsx)(f.TimerIcon, {
            width: 12,
            height: 12,
            color: s
          }), (0, a.jsx)(h.Text, {
            variant: "text-xs/normal",
            color: l,
            children: e ? (0, S.getFullMarathonDescription)(t) : (0, S.getMarathonName)(t)
          })]
        })
      })
    })()];
    return null != m && (I = I.filter(E.isNotNullish).slice(0, m)), (0, a.jsx)("div", {
      className: i()(N.badgeRow, r),
      children: I
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
        condensed: !0,
        maxBadgesCount: 2
      })]
    }), (0, a.jsx)(I.ContentImage, {
      src: s,
      size: 48,
      className: N.thumbnail
    })]
  })
})