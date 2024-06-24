n.d(t, {
  OV: function() {
    return U
  },
  ZP: function() {
    return w
  }
}), n(47120);
var l, i, s = n(735250),
  a = n(470079),
  r = n(120356),
  o = n.n(r),
  c = n(442837),
  u = n(481060),
  d = n(2052),
  h = n(317381),
  m = n(638880),
  p = n(613611),
  E = n(527805),
  g = n(716600),
  f = n(952561),
  C = n(778569),
  _ = n(563218),
  I = n(513202),
  x = n(318891),
  T = n(719296),
  N = n(958185),
  Z = n(100527),
  S = n(906732),
  v = n(835473),
  A = n(522474),
  M = n(314897),
  R = n(819640),
  j = n(594174),
  L = n(602623),
  O = n(823379),
  P = n(5192),
  y = n(689938),
  b = n(270486);
(i = l || (l = {}))[i.SMALL = 0] = "SMALL", i[i.MEDIUM = 1] = "MEDIUM", i[i.LARGE = 2] = "LARGE";
let D = ["embedded_background"];

function U(e) {
  let {
    avatarSize: t,
    guildId: n,
    channelId: l,
    users: i
  } = e, a = null != t ? t : u.AvatarSizes.SIZE_32, r = (0, u.getAvatarSize)(a);
  return (0, s.jsx)(L.Z, {
    size: r,
    guildId: n,
    users: i,
    max: 4,
    renderUser: e => {
      if (null == e) return null;
      let t = P.ZP.getName(n, l, e);
      return (0, s.jsx)(u.TooltipContainer, {
        text: t,
        color: u.TooltipColors.GREY,
        children: (0, s.jsx)("img", {
          src: e.getAvatarURL(n, r),
          alt: t,
          className: b.avatar
        }, e.id)
      }, e.id)
    }
  })
}

function k(e) {
  var t, n, l, i;
  let {
    participants: a,
    application: r,
    currentEmbeddedApplication: g,
    channel: f,
    width: C
  } = e;
  let _ = (l = C) > 400 ? 2 : l > 300 ? 1 : 0;
  let [x] = (i = C) > 400 ? [u.AvatarSizes.SIZE_56, 56] : i > 300 ? [u.AvatarSizes.SIZE_32, 32] : [u.AvatarSizes.SIZE_24, 24], T = (0, c.Wu)([j.default, M.default], () => Array.from(a).map(e => (0, p.J)(e, M.default) ? null : j.default.getUser(e.userId)).filter(O.lm)), N = (0, c.e7)([h.ZP], () => h.ZP.getEmbeddedActivitiesForChannel(f.id).find(e => e.applicationId === r.id)), {
    analyticsLocations: Z
  } = (0, S.ZP)(), v = (0, d.O)(), A = P.ZP.getName(f.getGuildId(), f.id, null == T ? void 0 : T[0]), R = (0, E.s5)({
    userId: null === (t = j.default.getCurrentUser()) || void 0 === t ? void 0 : t.id,
    channelId: f.id,
    application: r
  }) === E.Fw.CAN_JOIN, L = null !== (n = f.getGuildId()) && void 0 !== n ? n : void 0;
  return (0, s.jsxs)("div", {
    className: b.splash,
    children: [(0, s.jsx)(U, {
      avatarSize: x,
      guildId: L,
      channelId: f.id,
      users: T
    }), (0, s.jsx)(u.Text, {
      className: o()(b.subheader, {
        [b.small]: 0 === _,
        [b.medium]: 1 === _
      }),
      variant: "text-sm/normal",
      children: T.length > 1 ? y.Z.Messages.EMBEDDED_ACTIVITIES_USERNAME_AND_OTHERS.format({
        username: A,
        count: T.length - 1
      }) : y.Z.Messages.EMBEDDED_ACTIVITIES_IS_PLAYING.format({
        username: A
      })
    }), (0, s.jsx)(u.Text, {
      className: o()(b.header, {
        [b.small]: 0 === _,
        [b.medium]: 1 === _
      }),
      variant: "text-sm/normal",
      children: r.name
    }), (0, s.jsx)("div", {
      className: b.buttons,
      children: R ? (0, s.jsx)(u.Button, {
        onClick: function(e) {
          if (e.stopPropagation(), null != N)(0, m.Z)({
            applicationId: N.applicationId,
            currentEmbeddedApplication: g,
            activityChannelId: f.id,
            locationObject: v.location,
            embeddedActivitiesManager: I.Z,
            analyticsLocations: Z
          })
        },
        size: function(e) {
          switch (e) {
            case 2:
              return u.Button.Sizes.LARGE;
            case 1:
              return u.Button.Sizes.MEDIUM;
            case 0:
              return u.Button.Sizes.SMALL
          }
        }(_),
        className: b.button,
        color: u.Button.Colors.PRIMARY,
        children: y.Z.Messages.EMBEDDED_ACTIVITIES_JOIN_ACTIVITY
      }) : null
    })]
  })
}

function w(e) {
  let {
    participant: t,
    width: n,
    selected: l,
    interactible: i,
    channel: r
  } = e, {
    analyticsLocations: o
  } = (0, S.ZP)(Z.Z.ACTIVITY_TILE), {
    id: u
  } = t, d = (0, g.Z)(), h = (null == d ? void 0 : d.channelId) === r.id && d.applicationId === u, m = (0, f.Z)(), [p] = (0, v.Z)([u]), {
    url: E
  } = (0, C.Z)({
    applicationId: u,
    names: D,
    size: 1024
  }), I = !l && h, M = !h, j = !h && !l, L = (0, c.e7)([R.Z, A.Z], () => (0, N.Z)({
    LayerStore: R.Z,
    PopoutWindowStore: A.Z
  }));
  return a.useEffect(() => {
    if (I && null != d && !L) {
      let e = (0, T.Z)(d.channelId, d.applicationId);
      (0, x.jy)(e)
    }
  }, [I, d, L]), (0, s.jsx)(S.Gt, {
    value: o,
    children: (0, s.jsx)("div", {
      className: b.container,
      children: (0, s.jsxs)(s.Fragment, {
        children: [I && (0, s.jsx)(_.Z, {
          className: b.iframe,
          embedId: (0, T.Z)(r.id, u)
        }), M && null != p && null != E && "" !== E ? (0, s.jsx)("img", {
          className: b.splashImage,
          alt: p.name,
          src: E
        }) : null, j && null != p && (0, s.jsx)(k, {
          width: n,
          channel: r,
          participants: t.participants,
          application: p,
          currentEmbeddedApplication: m
        }), i || M ? null : (0, s.jsx)("div", {
          className: b.clickShield
        })]
      })
    })
  })
}