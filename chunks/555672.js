"use strict";
n.r(t), n.d(t, {
  ContentRowBadges: function() {
    return I
  },
  isAllowedRange: function() {
    return _
  },
  useGamingContentData: function() {
    return T
  }
});
var a = n("735250"),
  l = n("470079"),
  s = n("803997"),
  i = n.n(s),
  r = n("317261"),
  o = n("964094"),
  u = n("442837"),
  d = n("481060"),
  c = n("835473"),
  f = n("594174"),
  h = n("70956"),
  m = n("561308"),
  p = n("443487"),
  E = n("43205"),
  C = n("689938"),
  g = n("138317");
let S = [r.AggregateRange.WEEK];

function _(e) {
  return null != e && S.includes(e)
}
let T = e => {
    let t = (0, c.useGetOrFetchApplication)(e.extra.application_id),
      n = null == t ? void 0 : t.getIconURL(128);
    return {
      applicationImageSrc: n,
      user: (0, u.useStateFromStores)([f.default], () => f.default.getUser(e.author_id))
    }
  },
  I = e => {
    let {
      entry: t,
      textColor: n = "text-secondary",
      iconColor: l,
      className: s,
      forPopout: r
    } = e;
    return (0, a.jsx)("div", {
      className: i()(g.badgeRow, s),
      children: (() => {
        let e = (0, m.getEntryDuration)(t);
        if (null == e) return;
        let s = r ? C.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_HOURS_THIS_WEEK : C.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_HOURS;
        return (0, a.jsxs)("div", {
          className: g.badgeContainer,
          children: [(0, a.jsx)(o.TrophyIcon, {
            width: 12,
            height: 12,
            color: l
          }), (0, a.jsxs)(d.Text, {
            variant: "text-xs/normal",
            color: n,
            children: [C.default.Messages.MEMBER_LIST_CONTENT_FEED_TOP_GAME, r ? " — " : ": ", s.format({
              hours: Math.round(e / h.default.Seconds.HOUR)
            })]
          })]
        })
      })()
    })
  };
t.default = l.memo(e => {
  let {
    entry: t,
    channel: n,
    selected: l
  } = e, {
    applicationImageSrc: s
  } = T(t), i = (0, m.getAggregateRange)(t);
  return null != i && _(i) ? (0, a.jsxs)(p.Card, {
    selected: l,
    children: [(0, a.jsxs)(p.CardInfoSection, {
      children: [(0, a.jsx)(p.CardUser, {
        userId: t.author_id,
        channelId: n.id,
        guildId: n.guild_id
      }), (0, a.jsx)(p.CardTitle, {
        children: function(e) {
          return C.default.Messages.MEMBER_LIST_CONTENT_FEED_PLAYED_GAME.format({
            gameName: e.extra.game_name
          })
        }(t)
      }), (0, a.jsx)(I, {
        entry: t
      })]
    }), (0, a.jsx)(E.ContentImage, {
      src: s,
      size: 48
    })]
  }) : null
})