"use strict";
n.r(t), n.d(t, {
  default: function() {
    return R
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
  E = n("952561"),
  f = n("513202"),
  _ = n("100527"),
  T = n("906732"),
  m = n("973616"),
  I = n("314897"),
  N = n("592125"),
  p = n("158776"),
  S = n("594174"),
  C = n("602623"),
  A = n("823379"),
  h = n("226378"),
  g = n("701488"),
  M = n("689938"),
  O = n("975720");

function R(e) {
  var t;
  let {
    application: n,
    channelId: R,
    guildId: v
  } = e, [L, x] = a.useState(!1), {
    analyticsLocations: P
  } = (0, T.default)(_.default.ACTIVITY_INSTANCE_EMBED), D = (0, r.useAnalyticsContext)(), y = (0, E.default)(), U = (0, l.useStateFromStores)([N.default], () => N.default.getChannel(R)), j = (null == U ? void 0 : null === (t = U.isThread) || void 0 === t ? void 0 : t.call(U)) ? null == U ? void 0 : U.parent_id : R, b = (0, l.useStateFromStores)([I.default], () => I.default.getId()), {
    embeddedActivity: G,
    currentEmbeddedActivity: B
  } = (0, l.useStateFromStoresObject)([o.default], () => ({
    embeddedActivity: o.default.getEmbeddedActivitiesForChannel(null != j ? j : "").find(e => e.applicationId === n.id),
    currentEmbeddedActivity: o.default.getCurrentEmbeddedActivity()
  })), F = (0, l.useStateFromStoresArray)([S.default], () => {
    var e;
    return Array.from(null !== (e = null == G ? void 0 : G.userIds) && void 0 !== e ? e : []).map(e => S.default.getUser(e)).filter(A.isNotNullish)
  }), k = (0, l.useStateFromStores)([p.default], () => {
    var e;
    let t = null == G ? void 0 : G.userIds.values().next().value;
    return null == t ? null : null === (e = p.default.findActivity(t, e => e.application_id === n.id)) || void 0 === e ? void 0 : e.details
  }), w = a.useMemo(() => {
    let e = new m.default(n);
    return null == e.embeddedActivityConfig && (e.embeddedActivityConfig = g.DEFAULT_EMBEDDED_ACTIVITY_CONFIG), e
  }, [n]), H = (0, c.useEmbeddedActivityJoinability)({
    userId: b,
    channelId: R,
    application: w
  }), V = null == G, Y = (0, h.useJoinOrStartButtonState)({
    embeddedActivity: G,
    joinability: H,
    currentEmbeddedActivity: B,
    channel: U
  }), K = async () => {
    x(!0);
    try {
      V ? await (0, d.default)({
        targetApplicationId: n.id,
        currentEmbeddedApplication: y,
        channelId: R,
        guildId: v,
        locationObject: D.location,
        embeddedActivitiesManager: f.default,
        analyticsLocations: P
      }) : await (0, u.default)({
        applicationId: G.applicationId,
        currentEmbeddedApplication: y,
        activityChannelId: R,
        locationObject: D.location,
        embeddedActivitiesManager: f.default,
        analyticsLocations: P
      })
    } finally {
      x(!1)
    }
  }, W = Y.disabled ? M.default.Messages.EMBEDDED_ACTIVITIES_EMBED_ENDED : M.default.Messages.EMBEDDED_ACTIVITIES_INSTANCE_EMBED_ENDED;
  return (0, s.jsx)("div", {
    className: O.container,
    children: (0, s.jsxs)("div", {
      className: O.contentContainer,
      children: [(0, s.jsx)("div", {
        className: O.headerContainer,
        children: V ? (0, s.jsx)("div", {
          className: O.__invalid_endedNote,
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
        className: O.footerContainer,
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
              submitting: L,
              disabled: Y.disabled
            }, Y.text)
          }
        }), !V && (0, s.jsx)(C.default, {
          guildId: v,
          users: F,
          max: 4,
          size: C.Sizes.SIZE_32
        })]
      })]
    })
  })
}