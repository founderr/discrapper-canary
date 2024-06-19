n.d(t, {
  Z: function() {
    return C
  }
});
var l = n(735250);
n(470079);
var i = n(410030),
  s = n(906732),
  a = n(769654),
  r = n(785717),
  o = n(726059),
  c = n(162267),
  u = n(483517),
  d = n(502762),
  h = n(171368),
  m = n(944546),
  p = n(470900),
  E = n(772056),
  g = n(689938),
  f = n(440431);

function C(e) {
  let {
    user: t,
    channelId: n
  } = e, {
    analyticsLocations: C
  } = (0, s.ZP)(), {
    trackUserProfileAction: _
  } = (0, r.KZ)(), I = (0, i.ZP)(), {
    mutualFriends: x,
    isFetching: T
  } = (0, o.Z)(t.id, !t.bot), {
    mutualGuilds: N,
    isFetching: Z
  } = (0, c.Z)(t.id, !t.bot), S = !t.bot && null != x && x.length > 0, v = !t.bot && null != N && N.length > 0;
  return S || v ? (0, l.jsxs)(d.Z.Overlay, {
    className: f.overlay,
    children: [v && (0, l.jsx)(E.Z, {
      className: f.list,
      header: g.Z.Messages.MUTUAL_GUILDS_COUNT.format({
        count: N.length
      }),
      isLoadingHeader: Z,
      loadingContentsCount: N.length,
      itemType: E.R.MutualGuildList,
      onExpand: () => _({
        action: "PRESS_SECTION",
        section: "MUTUAL_GUILDS"
      }),
      children: N.map(e => {
        let {
          guild: n,
          nick: i
        } = e;
        return (0, l.jsx)(p.D, {
          user: t,
          guild: n,
          nick: i,
          theme: I,
          onSelect: () => (0, a.X)(n.id)
        }, n.id)
      })
    }), v && S && (0, l.jsx)(u.Z, {
      className: f.divider
    }), S && (0, l.jsx)(E.Z, {
      className: f.list,
      header: g.Z.Messages.MUTUAL_FRIENDS_COUNT.format({
        count: x.length
      }),
      isLoadingHeader: T,
      loadingContentsCount: x.length,
      itemType: E.R.MutualFriendsList,
      onExpand: () => _({
        action: "PRESS_SECTION",
        section: "MUTUAL_FRIENDS"
      }),
      children: x.map(e => {
        let {
          key: t,
          user: i,
          status: s
        } = e;
        return (0, l.jsx)(m.T, {
          user: i,
          status: s,
          onSelect: () => {
            (0, h.openUserProfileModal)({
              sourceAnalyticsLocations: C,
              userId: i.id,
              channelId: n
            })
          }
        }, t)
      })
    })]
  }) : null
}