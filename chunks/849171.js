"use strict";
n.r(t), n.d(t, {
  Avatars: function() {
    return F
  },
  default: function() {
    return k
  }
}), n("47120");
var a, l, s = n("735250"),
  i = n("470079"),
  r = n("120356"),
  o = n.n(r),
  u = n("442837"),
  d = n("481060"),
  c = n("2052"),
  f = n("317381"),
  h = n("638880"),
  m = n("613611"),
  p = n("527805"),
  E = n("716600"),
  C = n("952561"),
  g = n("778569"),
  S = n("563218"),
  _ = n("513202"),
  T = n("318891"),
  I = n("719296"),
  A = n("958185"),
  v = n("100527"),
  x = n("906732"),
  N = n("835473"),
  M = n("522474"),
  R = n("314897"),
  y = n("819640"),
  L = n("594174"),
  O = n("602623"),
  j = n("823379"),
  P = n("5192"),
  D = n("689938"),
  b = n("655338");
(l = a || (a = {}))[l.SMALL = 0] = "SMALL", l[l.MEDIUM = 1] = "MEDIUM", l[l.LARGE = 2] = "LARGE";
let U = ["embedded_background"];

function F(e) {
  let {
    avatarSize: t,
    guildId: n,
    channelId: a,
    users: l
  } = e, i = null != t ? t : d.AvatarSizes.SIZE_32, r = (0, d.getAvatarSize)(i);
  return (0, s.jsx)(O.default, {
    size: r,
    guildId: n,
    users: l,
    max: 4,
    renderUser: e => {
      if (null == e) return null;
      let t = P.default.getName(n, a, e);
      return (0, s.jsx)(d.TooltipContainer, {
        text: t,
        color: d.TooltipColors.GREY,
        children: (0, s.jsx)("img", {
          src: e.getAvatarURL(n, r),
          alt: t,
          className: b.avatar
        }, e.id)
      }, e.id)
    }
  })
}

function w(e) {
  var t, n, a, l;
  let {
    participants: i,
    application: r,
    currentEmbeddedApplication: E,
    channel: C,
    width: g
  } = e;
  let S = (a = g) > 400 ? 2 : a > 300 ? 1 : 0;
  let [T] = (l = g) > 400 ? [d.AvatarSizes.SIZE_56, 56] : l > 300 ? [d.AvatarSizes.SIZE_32, 32] : [d.AvatarSizes.SIZE_24, 24], I = (0, u.useStateFromStoresArray)([L.default, R.default], () => Array.from(i).map(e => (0, m.isActivityParticipantCurrentUserCurrentSession)(e, R.default) ? null : L.default.getUser(e.userId)).filter(j.isNotNullish)), A = (0, u.useStateFromStores)([f.default], () => f.default.getEmbeddedActivitiesForChannel(C.id).find(e => e.applicationId === r.id)), {
    analyticsLocations: v
  } = (0, x.default)(), N = (0, c.useAnalyticsContext)(), M = P.default.getName(C.getGuildId(), C.id, null == I ? void 0 : I[0]), y = (0, p.useEmbeddedActivityJoinability)({
    userId: null === (t = L.default.getCurrentUser()) || void 0 === t ? void 0 : t.id,
    channelId: C.id,
    application: r
  }) === p.EmbeddedActivityJoinability.CAN_JOIN, O = null !== (n = C.getGuildId()) && void 0 !== n ? n : void 0;
  return (0, s.jsxs)("div", {
    className: b.splash,
    children: [(0, s.jsx)(F, {
      avatarSize: T,
      guildId: O,
      channelId: C.id,
      users: I
    }), (0, s.jsx)(d.Text, {
      className: o()(b.subheader, {
        [b.small]: 0 === S,
        [b.medium]: 1 === S
      }),
      variant: "text-sm/normal",
      children: I.length > 1 ? D.default.Messages.EMBEDDED_ACTIVITIES_USERNAME_AND_OTHERS.format({
        username: M,
        count: I.length - 1
      }) : D.default.Messages.EMBEDDED_ACTIVITIES_IS_PLAYING.format({
        username: M
      })
    }), (0, s.jsx)(d.Text, {
      className: o()(b.header, {
        [b.small]: 0 === S,
        [b.medium]: 1 === S
      }),
      variant: "text-sm/normal",
      children: r.name
    }), (0, s.jsx)("div", {
      className: b.buttons,
      children: y ? (0, s.jsx)(d.Button, {
        onClick: function(e) {
          e.stopPropagation(), null != A && (0, h.default)({
            applicationId: A.applicationId,
            currentEmbeddedApplication: E,
            activityChannelId: C.id,
            locationObject: N.location,
            embeddedActivitiesManager: _.default,
            analyticsLocations: v
          })
        },
        size: function(e) {
          switch (e) {
            case 2:
              return d.Button.Sizes.LARGE;
            case 1:
              return d.Button.Sizes.MEDIUM;
            case 0:
              return d.Button.Sizes.SMALL
          }
        }(S),
        className: b.button,
        color: d.Button.Colors.PRIMARY,
        children: D.default.Messages.EMBEDDED_ACTIVITIES_JOIN_ACTIVITY
      }) : null
    })]
  })
}

function k(e) {
  let {
    participant: t,
    width: n,
    selected: a,
    interactible: l,
    channel: r
  } = e, {
    analyticsLocations: o
  } = (0, x.default)(v.default.ACTIVITY_TILE), {
    id: d
  } = t, c = (0, E.default)(), f = (null == c ? void 0 : c.channelId) === r.id && c.applicationId === d, h = (0, C.default)(), [m] = (0, N.default)([d]), {
    url: p
  } = (0, g.default)({
    applicationId: d,
    names: U,
    size: 1024
  }), _ = !a && f, R = !f, L = !f && !a, O = (0, u.useStateFromStores)([y.default, M.default], () => (0, A.default)({
    LayerStore: y.default,
    PopoutWindowStore: M.default
  }));
  return i.useEffect(() => {
    if (_ && null != c && !O) {
      let e = (0, I.default)(c.channelId, c.applicationId);
      (0, T.showPIPEmbed)(e)
    }
  }, [_, c, O]), (0, s.jsx)(x.AnalyticsLocationProvider, {
    value: o,
    children: (0, s.jsx)("div", {
      className: b.container,
      children: (0, s.jsxs)(s.Fragment, {
        children: [_ && (0, s.jsx)(S.default, {
          className: b.iframe,
          embedId: (0, I.default)(r.id, d)
        }), R && null != m && null != p && "" !== p ? (0, s.jsx)("img", {
          className: b.splashImage,
          alt: m.name,
          src: p
        }) : null, L && null != m && (0, s.jsx)(w, {
          width: n,
          channel: r,
          participants: t.participants,
          application: m,
          currentEmbeddedApplication: h
        }), l || R ? null : (0, s.jsx)("div", {
          className: b.clickShield
        })]
      })
    })
  })
}