"use strict";
n.r(t), n.d(t, {
  ContentRowBadges: function() {
    return A
  },
  isAllowedRange: function() {
    return T
  },
  useGamingContentData: function() {
    return I
  }
});
var a = n("735250"),
  l = n("470079"),
  s = n("803997"),
  i = n.n(s),
  r = n("317261"),
  o = n("964094"),
  u = n("442837"),
  d = n("149020");
n("420166");
var c = n("481060"),
  f = n("835473"),
  h = n("594174"),
  m = n("70956"),
  p = n("561308"),
  E = n("443487"),
  C = n("43205"),
  g = n("689938"),
  S = n("138317");
let _ = [r.AggregateRange.WEEK];

function T(e) {
  return null != e && _.includes(e)
}
let I = e => {
    let t = (0, f.useGetOrFetchApplication)(e.extra.application_id),
      n = null == t ? void 0 : t.getIconURL(128);
    return {
      applicationImageSrc: n,
      user: (0, u.useStateFromStores)([h.default], () => h.default.getUser(e.author_id))
    }
  },
  A = e => {
    let {
      entry: t,
      textColor: n = "text-secondary",
      iconColor: l,
      className: s
    } = e;
    return (0, a.jsxs)("div", {
      className: i()(S.badgeRow, s),
      children: [(() => {
        let e = (0, p.getEntryDuration)(t);
        if (null != e) return (0, a.jsxs)("div", {
          className: S.badgeContainer,
          children: [(0, a.jsx)(d.GameControllerIcon, {
            width: 12,
            height: 12,
            color: function() {
              if (null != l) return l
            }()
          }), (0, a.jsx)(c.Text, {
            variant: "text-xs/normal",
            color: n,
            children: g.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_FOR_HOURS.format({
              hours: Math.round(e / m.default.Seconds.HOUR)
            })
          })]
        })
      })(), (0, a.jsxs)("div", {
        className: S.badgeContainer,
        children: [(0, a.jsx)(o.TrophyIcon, {
          width: 12,
          height: 12,
          color: l
        }), (0, a.jsx)(c.Text, {
          variant: "text-xs/normal",
          color: n,
          children: g.default.Messages.MEMBER_LIST_CONTENT_FEED_TOP_GAME
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
    applicationImageSrc: s
  } = I(t), i = (0, p.getAggregateRange)(t);
  return null != i && T(i) ? (0, a.jsxs)(E.Card, {
    selected: l,
    children: [(0, a.jsxs)(E.CardInfoSection, {
      children: [(0, a.jsx)(E.CardUser, {
        userId: t.author_id,
        channelId: n.id,
        guildId: n.guild_id
      }), (0, a.jsx)(E.CardTitle, {
        children: function(e) {
          return g.default.Messages.MEMBER_LIST_CONTENT_FEED_PLAYED_GAME.format({
            gameName: e.extra.game_name
          })
        }(t)
      }), (0, a.jsx)(A, {
        entry: t
      })]
    }), (0, a.jsx)(C.ContentImage, {
      src: s,
      size: 48
    })]
  }) : null
})