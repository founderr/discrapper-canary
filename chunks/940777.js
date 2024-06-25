n.d(t, {
  Z: function() {
    return P
  }
}), n(47120), n(724458), n(653041);
var l = n(735250),
  i = n(470079),
  s = n(120356),
  r = n.n(s),
  a = n(91192),
  o = n(442837),
  u = n(481060),
  c = n(493683),
  d = n(239091),
  h = n(317381),
  p = n(682662),
  g = n(674552),
  m = n(593364),
  C = n(905423),
  E = n(199902),
  f = n(592125),
  _ = n(944486),
  I = n(979651),
  N = n(880080),
  Z = n(709054),
  S = n(853856),
  x = n(593214),
  L = n(919755),
  T = n(110977),
  v = n(603274),
  A = n(981631),
  M = n(689938),
  R = n(744486);
let O = {
  analyticsSource: {
    page: A.ZY5.GUILD_CHANNEL,
    section: A.jXE.CHANNEL_LIST,
    object: A.qAy.CHANNEL
  }
};

function P() {
  let e = (0, a.Ie)("favorites"),
    {
      favoriteAdded: t,
      clearFavoriteAdded: s
    } = (0, x.up)(),
    [P, b] = i.useState(!1),
    {
      favoriteServerMuted: j,
      favoriteChannels: y
    } = (0, o.cj)([S.Z], () => ({
      favoriteChannels: S.Z.getFavoriteChannels(),
      favoriteServerMuted: S.Z.favoriteServerMuted
    })),
    D = (0, o.e7)([_.Z], () => _.Z.getChannelId(A.I_8)),
    U = (0, o.e7)([f.Z], () => f.Z.getChannel(D)),
    G = (0, C.Z)(e => e.guildId) === A.I_8,
    {
      badge: w,
      unread: k
    } = (0, L.Z)(y),
    B = function(e) {
      let t = (0, o.e7)([_.Z], () => _.Z.getVoiceChannelId()),
        n = null != t && null != e[t],
        l = (0, o.e7)([E.Z], () => {
          if (!n) return !1;
          let t = E.Z.getCurrentUserActiveStream();
          return null != t && null != e[t.channelId]
        }),
        i = (0, o.e7)([E.Z], () => E.Z.getAllApplicationStreams().some(t => null != e[t.channelId])),
        s = (0, o.e7)([I.Z], () => n && null != t && I.Z.hasVideo(t), [n, t]),
        r = (0, o.Wu)([h.ZP], () => Z.default.keys(e).reduce((e, t) => (e.push(...h.ZP.getEmbeddedActivitiesForChannel(t)), e), [])),
        a = (0, o.e7)([h.ZP], () => Array.from(h.ZP.getSelfEmbeddedActivities().values()).some(t => {
          let {
            channelId: n
          } = t;
          return null != e[n]
        })),
        u = r.length > 0,
        c = !1,
        d = !1,
        p = !1,
        m = !1;
      return n ? (c = !s, d = s, p = l, m = a) : (p = i, m = u), (0, g.Or)({
        audio: c,
        video: d,
        screenshare: p,
        liveStage: !1,
        isCurrentUserConnected: n,
        activity: m
      })
    }(y),
    V = w > 0 ? (0, m.N)(w) : null,
    H = i.useCallback(() => {
      s()
    }, [s]);
  return (0, l.jsxs)(p.H, {
    children: [(0, l.jsx)(N.Z, {
      selected: G,
      hovered: P,
      unread: k && !j,
      className: R.pill
    }), (0, l.jsx)(v.Z, {
      onShow: H,
      children: (0, l.jsx)(T.S, {
        children: (0, l.jsx)(u.BlobMask, {
          selected: G || P,
          upperBadge: B,
          lowerBadge: V,
          children: (0, l.jsx)(u.NavItem, {
            ...e,
            ariaLabel: M.Z.Messages.GUILD_TOOLTIP_A11Y_LABEL.format({
              guildName: M.Z.Messages.FAVORITES_GUILD_NAME,
              mentions: w
            }),
            to: {
              pathname: A.Z5c.CHANNEL(A.I_8, D),
              state: O
            },
            selected: G || P,
            onMouseEnter: () => b(!0),
            onMouseLeave: () => b(!1),
            onMouseDown: function() {
              if (null != U) c.Z.preload(U.guild_id, U.id)
            },
            onContextMenu: function(e) {
              (0, d.jW)(e, async () => {
                let {
                  default: e
                } = await n.e("3190").then(n.bind(n, 631981));
                return t => (0, l.jsx)(e, {
                  ...t
                })
              })
            },
            children: (0, l.jsx)("div", {
              className: r()(R.ring, {
                [R.ringActive]: t
              }),
              children: (0, l.jsx)(u.StarIcon, {
                size: "custom",
                color: "currentColor",
                className: R.favoriteIcon,
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