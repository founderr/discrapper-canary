"use strict";
n.r(t), n.d(t, {
  Avatars: function() {
    return D
  },
  default: function() {
    return U
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
  A = n("100527"),
  N = n("906732"),
  v = n("835473"),
  x = n("314897"),
  M = n("594174"),
  R = n("602623"),
  y = n("823379"),
  L = n("5192"),
  O = n("689938"),
  j = n("655338");
(l = a || (a = {}))[l.SMALL = 0] = "SMALL", l[l.MEDIUM = 1] = "MEDIUM", l[l.LARGE = 2] = "LARGE";
let P = ["embedded_background"];

function D(e) {
  let {
    avatarSize: t,
    guildId: n,
    channelId: a,
    users: l
  } = e, i = null != t ? t : d.AvatarSizes.SIZE_32, r = (0, d.getAvatarSize)(i);
  return (0, s.jsx)(R.default, {
    size: r,
    guildId: n,
    users: l,
    max: 4,
    renderUser: e => {
      if (null == e) return null;
      let t = L.default.getName(n, a, e);
      return (0, s.jsx)(d.TooltipContainer, {
        text: t,
        color: d.TooltipColors.GREY,
        children: (0, s.jsx)("img", {
          src: e.getAvatarURL(n, r),
          alt: t,
          className: j.avatar
        }, e.id)
      }, e.id)
    }
  })
}

function b(e) {
  var t, n, a, l;
  let {
    participants: i,
    application: r,
    currentEmbeddedApplication: E,
    channel: C,
    width: g
  } = e;
  let S = (a = g) > 400 ? 2 : a > 300 ? 1 : 0;
  let [T] = (l = g) > 400 ? [d.AvatarSizes.SIZE_56, 56] : l > 300 ? [d.AvatarSizes.SIZE_32, 32] : [d.AvatarSizes.SIZE_24, 24], I = (0, u.useStateFromStoresArray)([M.default, x.default], () => Array.from(i).map(e => (0, m.isActivityParticipantCurrentUserCurrentSession)(e, x.default) ? null : M.default.getUser(e.userId)).filter(y.isNotNullish)), A = (0, u.useStateFromStores)([f.default], () => f.default.getEmbeddedActivitiesForChannel(C.id).find(e => e.applicationId === r.id)), {
    analyticsLocations: v
  } = (0, N.default)(), R = (0, c.useAnalyticsContext)(), P = L.default.getName(C.getGuildId(), C.id, null == I ? void 0 : I[0]), b = (0, p.useEmbeddedActivityJoinability)({
    userId: null === (t = M.default.getCurrentUser()) || void 0 === t ? void 0 : t.id,
    channelId: C.id,
    application: r
  }) === p.EmbeddedActivityJoinability.CAN_JOIN, U = null !== (n = C.getGuildId()) && void 0 !== n ? n : void 0;
  return (0, s.jsxs)("div", {
    className: j.splash,
    children: [(0, s.jsx)(D, {
      avatarSize: T,
      guildId: U,
      channelId: C.id,
      users: I
    }), (0, s.jsx)(d.Text, {
      className: o()(j.subheader, {
        [j.small]: 0 === S,
        [j.medium]: 1 === S
      }),
      variant: "text-sm/normal",
      children: I.length > 1 ? O.default.Messages.EMBEDDED_ACTIVITIES_USERNAME_AND_OTHERS.format({
        username: P,
        count: I.length - 1
      }) : O.default.Messages.EMBEDDED_ACTIVITIES_IS_PLAYING.format({
        username: P
      })
    }), (0, s.jsx)(d.Text, {
      className: o()(j.header, {
        [j.small]: 0 === S,
        [j.medium]: 1 === S
      }),
      variant: "text-sm/normal",
      children: r.name
    }), (0, s.jsx)("div", {
      className: j.buttons,
      children: b ? (0, s.jsx)(d.Button, {
        onClick: function(e) {
          e.stopPropagation(), null != A && (0, h.default)({
            applicationId: A.applicationId,
            currentEmbeddedApplication: E,
            activityChannelId: C.id,
            locationObject: R.location,
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
        className: j.button,
        color: d.Button.Colors.PRIMARY,
        children: O.default.Messages.EMBEDDED_ACTIVITIES_JOIN_ACTIVITY
      }) : null
    })]
  })
}

function U(e) {
  let {
    participant: t,
    width: n,
    selected: a,
    interactible: l,
    channel: r
  } = e, {
    analyticsLocations: o
  } = (0, N.default)(A.default.ACTIVITY_TILE), {
    id: u
  } = t, d = (0, E.default)(), c = (null == d ? void 0 : d.channelId) === r.id && d.applicationId === u, f = (0, C.default)(), [h] = (0, v.default)([u]), {
    url: m
  } = (0, g.default)({
    applicationId: u,
    names: P,
    size: 1024
  }), p = !a && c, _ = !c, x = !c && !a;
  return i.useEffect(() => {
    if (p && null != d) {
      let e = (0, I.default)(d.channelId, d.applicationId);
      (0, T.showPIPEmbed)(e)
    }
  }, [p, d]), (0, s.jsx)(N.AnalyticsLocationProvider, {
    value: o,
    children: (0, s.jsx)("div", {
      className: j.container,
      children: (0, s.jsxs)(s.Fragment, {
        children: [p && (0, s.jsx)(S.default, {
          className: j.iframe,
          embedId: (0, I.default)(r.id, u)
        }), _ && null != h && null != m && "" !== m ? (0, s.jsx)("img", {
          className: j.splashImage,
          alt: h.name,
          src: m
        }) : null, x && null != h && (0, s.jsx)(b, {
          width: n,
          channel: r,
          participants: t.participants,
          application: h,
          currentEmbeddedApplication: f
        }), l || _ ? null : (0, s.jsx)("div", {
          className: j.clickShield
        })]
      })
    })
  })
}