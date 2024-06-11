"use strict";
n.r(t), n.d(t, {
  default: function() {
    return D
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
  m = n("674552"),
  C = n("593364"),
  p = n("905423"),
  g = n("199902"),
  E = n("592125"),
  S = n("944486"),
  _ = n("979651"),
  I = n("898140"),
  N = n("880080"),
  T = n("709054"),
  A = n("853856"),
  L = n("593214"),
  v = n("919755"),
  x = n("110977"),
  R = n("603274"),
  M = n("981631"),
  y = n("689938"),
  O = n("561349");
let b = {
  analyticsSource: {
    page: M.AnalyticsPages.GUILD_CHANNEL,
    section: M.AnalyticsSections.CHANNEL_LIST,
    object: M.AnalyticsObjects.CHANNEL
  }
};

function D() {
  let e = (0, r.useTreeItem)("favorites"),
    {
      favoriteAdded: t,
      clearFavoriteAdded: s
    } = (0, L.useFavoriteAdded)(),
    [D, j] = a.useState(!1),
    {
      favoriteServerMuted: P,
      favoriteChannels: G
    } = (0, o.useStateFromStoresObject)([A.default], () => ({
      favoriteChannels: A.default.getFavoriteChannels(),
      favoriteServerMuted: A.default.favoriteServerMuted
    })),
    U = (0, o.useStateFromStores)([S.default], () => S.default.getChannelId(M.FAVORITES)),
    w = (0, o.useStateFromStores)([E.default], () => E.default.getChannel(U)),
    B = (0, p.default)(e => e.guildId) === M.FAVORITES,
    {
      badge: F,
      unread: V
    } = (0, v.default)(G),
    H = function(e) {
      let t = (0, o.useStateFromStores)([S.default], () => S.default.getVoiceChannelId()),
        n = null != t && null != e[t],
        l = (0, o.useStateFromStores)([g.default], () => {
          if (!n) return !1;
          let t = g.default.getCurrentUserActiveStream();
          return null != t && null != e[t.channelId]
        }),
        a = (0, o.useStateFromStores)([g.default], () => g.default.getAllApplicationStreams().some(t => null != e[t.channelId])),
        s = (0, o.useStateFromStores)([_.default], () => n && null != t && _.default.hasVideo(t), [n, t]),
        i = (0, o.useStateFromStoresArray)([f.default], () => T.default.keys(e).reduce((e, t) => (e.push(...f.default.getEmbeddedActivitiesForChannel(t)), e), [])),
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
        C = !1;
      return n ? (d = !s, c = s, h = l, C = r) : (h = a, C = u), (0, m.renderMediaBadge)({
        audio: d,
        video: c,
        screenshare: h,
        liveStage: !1,
        isCurrentUserConnected: n,
        activity: C
      })
    }(G),
    k = F > 0 ? (0, C.renderMentionBadge)(F) : null,
    Y = a.useCallback(() => {
      s()
    }, [s]);
  return (0, l.jsxs)(h.ListItem, {
    children: [(0, l.jsx)(N.default, {
      selected: B,
      hovered: D,
      unread: V && !P,
      className: O.pill
    }), (0, l.jsx)(R.default, {
      onShow: Y,
      children: (0, l.jsx)(x.FavoriteAddedTooltip, {
        children: (0, l.jsx)(u.BlobMask, {
          selected: B || D,
          upperBadge: H,
          lowerBadge: k,
          children: (0, l.jsx)(u.NavItem, {
            ...e,
            ariaLabel: y.default.Messages.GUILD_TOOLTIP_A11Y_LABEL.format({
              guildName: y.default.Messages.FAVORITES_GUILD_NAME,
              mentions: F
            }),
            to: {
              pathname: M.Routes.CHANNEL(M.FAVORITES, U),
              state: b
            },
            selected: B || D,
            onMouseEnter: () => j(!0),
            onMouseLeave: () => j(!1),
            onMouseDown: function() {
              null != w && d.default.preload(w.guild_id, w.id)
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
              className: i()(O.ring, {
                [O.ringActive]: t
              }),
              children: (0, l.jsx)(I.default, {
                className: O.favoriteIcon,
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