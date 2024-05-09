"use strict";
n.r(t), n.d(t, {
  default: function() {
    return j
  }
}), n("47120"), n("724458"), n("653041");
var l = n("735250"),
  a = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("924826"),
  o = n("442837"),
  u = n("481060"),
  d = n("493683"),
  c = n("239091"),
  f = n("317381"),
  h = n("682662"),
  p = n("674552"),
  m = n("593364"),
  C = n("905423"),
  g = n("199902"),
  E = n("592125"),
  _ = n("944486"),
  I = n("979651"),
  S = n("898140"),
  N = n("880080"),
  T = n("15434"),
  A = n("709054"),
  L = n("853856"),
  v = n("593214"),
  x = n("919755"),
  R = n("110977"),
  M = n("603274"),
  y = n("981631"),
  O = n("689938"),
  D = n("561349");
let b = {
  analyticsSource: {
    page: y.AnalyticsPages.GUILD_CHANNEL,
    section: y.AnalyticsSections.CHANNEL_LIST,
    object: y.AnalyticsObjects.CHANNEL
  }
};

function j() {
  let e = (0, r.useTreeItem)("favorites"),
    {
      favoriteAdded: t,
      clearFavoriteAdded: s
    } = (0, v.useFavoriteAdded)(),
    [j, P] = a.useState(!1),
    {
      favoriteServerMuted: G,
      favoriteChannels: U
    } = (0, o.useStateFromStoresObject)([L.default], () => ({
      favoriteChannels: L.default.getFavoriteChannels(),
      favoriteServerMuted: L.default.favoriteServerMuted
    })),
    w = (0, o.useStateFromStores)([_.default], () => _.default.getChannelId(y.FAVORITES)),
    F = (0, o.useStateFromStores)([E.default], () => E.default.getChannel(w)),
    B = (0, C.default)(e => e.guildId) === y.FAVORITES,
    {
      badge: H,
      unread: V
    } = (0, x.default)(U),
    k = function(e) {
      let t = (0, o.useStateFromStores)([_.default], () => _.default.getVoiceChannelId()),
        n = null != t && null != e[t],
        l = (0, o.useStateFromStores)([g.default], () => {
          if (!n) return !1;
          let t = g.default.getCurrentUserActiveStream();
          return null != t && null != e[t.channelId]
        }),
        a = (0, o.useStateFromStores)([g.default], () => g.default.getAllApplicationStreams().some(t => null != e[t.channelId])),
        s = (0, o.useStateFromStores)([I.default], () => n && null != t && I.default.hasVideo(t), [n, t]),
        i = (0, o.useStateFromStoresArray)([f.default], () => A.default.keys(e).reduce((e, t) => (e.push(...f.default.getEmbeddedActivitiesForChannel(t)), e), [])),
        r = (0, o.useStateFromStores)([f.default], () => Array.from(f.default.getSelfEmbeddedActivities().values()).some(t => {
          let {
            channelId: n
          } = t;
          return null != e[n]
        })),
        u = i.length > 0,
        d = !1,
        c = !1,
        h = !1,
        m = !1;
      return n ? (d = !s, c = s, h = l, m = r) : (h = a, m = u), (0, p.renderMediaBadge)({
        audio: d,
        video: c,
        screenshare: h,
        liveStage: !1,
        isCurrentUserConnected: n,
        activity: m
      })
    }(U),
    Y = H > 0 ? (0, m.renderMentionBadge)(H) : null,
    K = a.useCallback(() => {
      s()
    }, [s]);
  return (0, l.jsxs)(h.ListItem, {
    children: [(0, l.jsx)(N.default, {
      selected: B,
      hovered: j,
      unread: V && !G,
      className: D.pill
    }), (0, l.jsx)(M.default, {
      onShow: K,
      children: (0, l.jsx)(R.FavoriteAddedTooltip, {
        children: (0, l.jsx)(u.BlobMask, {
          selected: B || j,
          upperBadge: k,
          lowerBadge: Y,
          children: (0, l.jsx)(T.default, {
            ...e,
            ariaLabel: O.default.Messages.GUILD_TOOLTIP_A11Y_LABEL.format({
              guildName: O.default.Messages.FAVORITES_GUILD_NAME,
              mentions: H
            }),
            to: {
              pathname: y.Routes.CHANNEL(y.FAVORITES, w),
              state: b
            },
            selected: B || j,
            onMouseEnter: () => P(!0),
            onMouseLeave: () => P(!1),
            onMouseDown: function() {
              null != F && d.default.preload(F.guild_id, F.id)
            },
            onContextMenu: function(e) {
              (0, c.openContextMenuLazy)(e, async () => {
                let {
                  default: e
                } = await n.e("3190").then(n.bind(n, "631981"));
                return t => (0, l.jsx)(e, {
                  ...t
                })
              })
            },
            children: (0, l.jsx)("div", {
              className: i()(D.ring, {
                [D.ringActive]: t
              }),
              children: (0, l.jsx)(S.default, {
                className: D.favoriteIcon,
                width: 20,
                height: 20
              })
            })
          })
        })
      })
    })]
  })
}