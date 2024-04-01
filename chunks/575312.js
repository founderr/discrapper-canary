"use strict";
n.r(t), n.d(t, {
  default: function() {
    return L
  }
}), n("47120");
var s = n("735250"),
  l = n("470079"),
  a = n("442837"),
  i = n("481060"),
  r = n("2052"),
  o = n("566620"),
  u = n("317381"),
  d = n("969345"),
  c = n("638880"),
  E = n("266820"),
  f = n("527805"),
  _ = n("952561"),
  T = n("513202"),
  I = n("100527"),
  m = n("906732"),
  N = n("973616"),
  p = n("314897"),
  S = n("592125"),
  C = n("158776"),
  A = n("594174"),
  h = n("602623"),
  g = n("823379"),
  M = n("226378"),
  O = n("701488"),
  R = n("689938"),
  v = n("452218");

function L(e) {
  var t;
  let {
    application: n,
    activityInstance: L,
    channelId: P,
    guildId: D
  } = e, [x, y] = l.useState(!1), {
    analyticsLocations: U
  } = (0, m.default)(I.default.ACTIVITY_INSTANCE_EMBED), j = (0, r.useAnalyticsContext)(), b = (0, _.default)(), G = (0, a.useStateFromStores)([S.default], () => S.default.getChannel(P)), B = (null == G ? void 0 : null === (t = G.isThread) || void 0 === t ? void 0 : t.call(G)) ? null == G ? void 0 : G.parent_id : P, k = (0, a.useStateFromStores)([p.default], () => p.default.getId()), {
    embeddedActivity: F,
    currentEmbeddedActivity: w
  } = (0, a.useStateFromStoresObject)([u.default], () => ({
    embeddedActivity: u.default.getEmbeddedActivitiesForChannel(null != B ? B : "").find(e => e.instanceId === L.id),
    currentEmbeddedActivity: u.default.getCurrentEmbeddedActivity()
  })), H = (0, a.useStateFromStoresArray)([A.default], () => {
    var e;
    return Array.from(null !== (e = null == F ? void 0 : F.userIds) && void 0 !== e ? e : []).map(e => A.default.getUser(e)).filter(g.isNotNullish)
  }), V = (0, a.useStateFromStores)([C.default], () => {
    var e;
    let t = null == F ? void 0 : F.userIds.values().next().value;
    return null == t ? null : null === (e = C.default.findActivity(t, e => e.application_id === n.id)) || void 0 === e ? void 0 : e.details
  }), Y = l.useMemo(() => {
    let e = new N.default(n);
    return null == e.embeddedActivityConfig && (e.embeddedActivityConfig = O.DEFAULT_EMBEDDED_ACTIVITY_CONFIG), e
  }, [n]), K = (0, f.useEmbeddedActivityJoinability)({
    userId: k,
    channelId: P,
    application: Y
  }), W = null == F, z = (0, M.useJoinOrStartButtonState)({
    embeddedActivity: F,
    joinability: K,
    currentEmbeddedActivity: w
  }), Q = async () => {
    y(!0);
    try {
      if (W) {
        let {
          activityConfigs: e,
          applications: t
        } = await (0, o.fetchShelf)({
          guildId: D
        }), s = (0, d.default)({
          applicationId: n.id,
          activityConfigs: e,
          applications: t
        });
        await (0, E.default)({
          activityItem: s,
          currentEmbeddedApplication: b,
          channelId: P,
          guildId: D,
          locationObject: j.location,
          embeddedActivitiesManager: T.default,
          analyticsLocations: U
        })
      } else await (0, c.default)({
        applicationId: F.applicationId,
        currentEmbeddedApplication: b,
        activityChannelId: P,
        locationObject: j.location,
        embeddedActivitiesManager: T.default,
        analyticsLocations: U
      })
    } finally {
      y(!1)
    }
  };
  return (0, s.jsx)("div", {
    className: v.container,
    children: (0, s.jsxs)("div", {
      className: v.contentContainer,
      children: [(0, s.jsx)("div", {
        className: v.headerContainer,
        children: W ? (0, s.jsx)("div", {
          className: v.__invalid_endedNote,
          children: (0, s.jsx)(i.Text, {
            variant: "text-md/medium",
            children: R.default.Messages.EMBEDDED_ACTIVITIES_INSTANCE_EMBED_ENDED
          })
        }) : (0, s.jsx)(i.Text, {
          variant: "text-md/medium",
          lineClamp: 1,
          color: "text-normal",
          children: null != V ? V : R.default.Messages.EMBEDDED_ACTIVITIES_INSTANCE_EMBED_NO_PRESENCE
        })
      }), (0, s.jsxs)("div", {
        className: v.footerContainer,
        children: [(0, s.jsx)(i.Tooltip, {
          text: z.tooltip,
          children: e => {
            let {
              onClick: t,
              ...n
            } = e;
            return (0, l.createElement)(i.Button, {
              ...n,
              key: "".concat(z.isJoinAction),
              onClick: () => {
                Q(), null == t || t()
              },
              color: z.isJoinAction ? i.ButtonColors.GREEN : i.ButtonColors.PRIMARY,
              submitting: x,
              disabled: z.disabled
            }, z.text)
          }
        }), !W && (0, s.jsx)(h.default, {
          guildId: D,
          users: H,
          max: 4,
          size: h.Sizes.SIZE_32
        })]
      })]
    })
  })
}