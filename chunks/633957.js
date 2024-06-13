"use strict";
n.r(t), n.d(t, {
  default: function() {
    return O
  }
}), n("47120");
var s = n("735250"),
  a = n("470079"),
  l = n("442837"),
  i = n("481060"),
  r = n("2052"),
  o = n("317381"),
  u = n("638880"),
  d = n("146936"),
  c = n("527805"),
  f = n("952561"),
  E = n("513202"),
  _ = n("100527"),
  T = n("906732"),
  m = n("973616"),
  I = n("314897"),
  N = n("592125"),
  p = n("158776"),
  h = n("594174"),
  S = n("602623"),
  C = n("823379"),
  A = n("226378"),
  g = n("701488"),
  M = n("689938"),
  R = n("975720");

function O(e) {
  var t;
  let {
    application: n,
    channelId: O,
    guildId: v
  } = e, [x, L] = a.useState(!1), {
    analyticsLocations: P
  } = (0, T.default)(_.default.ACTIVITY_INSTANCE_EMBED), D = (0, r.useAnalyticsContext)(), y = (0, f.default)(), U = (0, l.useStateFromStores)([N.default], () => N.default.getChannel(O)), j = (null == U ? void 0 : null === (t = U.isThread) || void 0 === t ? void 0 : t.call(U)) ? null == U ? void 0 : U.parent_id : O, b = (0, l.useStateFromStores)([I.default], () => I.default.getId()), {
    embeddedActivity: G,
    currentEmbeddedActivity: F
  } = (0, l.useStateFromStoresObject)([o.default], () => ({
    embeddedActivity: o.default.getEmbeddedActivitiesForChannel(null != j ? j : "").find(e => e.applicationId === n.id),
    currentEmbeddedActivity: o.default.getCurrentEmbeddedActivity()
  })), B = (0, l.useStateFromStoresArray)([h.default], () => {
    var e;
    return Array.from(null !== (e = null == G ? void 0 : G.userIds) && void 0 !== e ? e : []).map(e => h.default.getUser(e)).filter(C.isNotNullish)
  }), k = (0, l.useStateFromStores)([p.default], () => {
    var e;
    let t = null == G ? void 0 : G.userIds.values().next().value;
    return null == t ? null : null === (e = p.default.findActivity(t, e => e.application_id === n.id)) || void 0 === e ? void 0 : e.details
  }), w = a.useMemo(() => {
    let e = new m.default(n);
    return null == e.embeddedActivityConfig && (e.embeddedActivityConfig = g.DEFAULT_EMBEDDED_ACTIVITY_CONFIG), e
  }, [n]), H = (0, c.useEmbeddedActivityJoinability)({
    userId: b,
    channelId: O,
    application: w
  }), V = null == G, Y = (0, A.useJoinOrStartButtonState)({
    embeddedActivity: G,
    joinability: H,
    currentEmbeddedActivity: F,
    channel: U
  }), K = async () => {
    L(!0);
    try {
      V ? await (0, d.default)({
        targetApplicationId: n.id,
        currentEmbeddedApplication: y,
        channelId: O,
        guildId: v,
        locationObject: D.location,
        embeddedActivitiesManager: E.default,
        analyticsLocations: P
      }) : await (0, u.default)({
        applicationId: G.applicationId,
        currentEmbeddedApplication: y,
        activityChannelId: O,
        locationObject: D.location,
        embeddedActivitiesManager: E.default,
        analyticsLocations: P
      })
    } finally {
      L(!1)
    }
  }, W = Y.disabled ? M.default.Messages.EMBEDDED_ACTIVITIES_EMBED_ENDED : M.default.Messages.EMBEDDED_ACTIVITIES_INSTANCE_EMBED_ENDED;
  return (0, s.jsx)("div", {
    className: R.container,
    children: (0, s.jsxs)("div", {
      className: R.contentContainer,
      children: [(0, s.jsx)("div", {
        className: R.headerContainer,
        children: V ? (0, s.jsx)("div", {
          className: R.__invalid_endedNote,
          children: (0, s.jsx)(i.Text, {
            variant: "text-md/medium",
            children: W
          })
        }) : (0, s.jsx)(i.Text, {
          variant: "text-md/medium",
          lineClamp: 1,
          color: "text-normal",
          children: null != k ? k : M.default.Messages.EMBEDDED_ACTIVITIES_INSTANCE_EMBED_NO_PRESENCE
        })
      }), (0, s.jsxs)("div", {
        className: R.footerContainer,
        children: [(0, s.jsx)(i.Tooltip, {
          text: Y.tooltip,
          children: e => {
            let {
              onClick: t,
              ...n
            } = e;
            return (0, a.createElement)(i.Button, {
              ...n,
              key: "".concat(Y.isJoinAction),
              onClick: () => {
                K(), null == t || t()
              },
              color: Y.isJoinAction ? i.ButtonColors.GREEN : i.ButtonColors.PRIMARY,
              submitting: x,
              disabled: Y.disabled
            }, Y.text)
          }
        }), !V && (0, s.jsx)(S.default, {
          guildId: v,
          users: B,
          max: 4,
          size: S.Sizes.SIZE_32
        })]
      })]
    })
  })
}