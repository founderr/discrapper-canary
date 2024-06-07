"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
});
var a = n("735250");
n("470079");
var l = n("410030"),
  s = n("906732"),
  i = n("769654"),
  r = n("785717"),
  o = n("726059"),
  u = n("162267"),
  d = n("483517"),
  c = n("502762"),
  f = n("171368"),
  h = n("944546"),
  m = n("470900"),
  p = n("772056"),
  E = n("689938"),
  C = n("178756");

function g(e) {
  let {
    user: t,
    channelId: n
  } = e, {
    analyticsLocations: g
  } = (0, s.default)(), {
    trackUserProfileAction: S
  } = (0, r.useUserProfileAnalyticsContext)(), _ = (0, l.default)(), {
    mutualFriends: T,
    isFetching: I
  } = (0, o.default)(t.id, !t.bot), {
    mutualGuilds: A,
    isFetching: v
  } = (0, u.default)(t.id, !t.bot), N = !t.bot && null != T && T.length > 0, x = !t.bot && null != A && A.length > 0;
  return N || x ? (0, a.jsxs)(c.default.Overlay, {
    className: C.overlay,
    children: [x && (0, a.jsx)(p.default, {
      className: C.list,
      header: E.default.Messages.MUTUAL_GUILDS_COUNT.format({
        count: A.length
      }),
      isLoadingHeader: v,
      loadingContentsCount: A.length,
      itemType: p.ListType.MutualGuildList,
      onExpand: () => S({
        action: "PRESS_SECTION",
        section: "MUTUAL_GUILDS"
      }),
      children: A.map(e => {
        let {
          guild: n,
          nick: l
        } = e;
        return (0, a.jsx)(m.GuildRow, {
          user: t,
          guild: n,
          nick: l,
          theme: _,
          onSelect: () => (0, i.transitionToGuild)(n.id)
        }, n.id)
      })
    }), x && N && (0, a.jsx)(d.default, {
      className: C.divider
    }), N && (0, a.jsx)(p.default, {
      className: C.list,
      header: E.default.Messages.MUTUAL_FRIENDS_COUNT.format({
        count: T.length
      }),
      isLoadingHeader: I,
      loadingContentsCount: T.length,
      itemType: p.ListType.MutualFriendsList,
      onExpand: () => S({
        action: "PRESS_SECTION",
        section: "MUTUAL_FRIENDS"
      }),
      children: T.map(e => {
        let {
          key: t,
          user: l,
          status: s
        } = e;
        return (0, a.jsx)(h.FriendRow, {
          user: l,
          status: s,
          onSelect: () => {
            (0, f.openUserProfileModal)({
              sourceAnalyticsLocations: g,
              userId: l.id,
              channelId: n
            })
          }
        }, t)
      })
    })]
  }) : null
}