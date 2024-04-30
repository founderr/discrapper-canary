"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  }
}), n("47120");
var s = n("735250"),
  a = n("470079"),
  l = n("442837"),
  i = n("481060"),
  r = n("2052"),
  o = n("317381"),
  u = n("638880"),
  d = n("266820"),
  c = n("527805"),
  f = n("952561"),
  E = n("513202"),
  _ = n("100527"),
  m = n("906732"),
  T = n("973616"),
  I = n("314897"),
  p = n("592125"),
  h = n("158776"),
  N = n("594174"),
  S = n("602623"),
  C = n("823379"),
  A = n("226378"),
  g = n("701488"),
  M = n("689938"),
  R = n("497386");

function v(e) {
  var t;
  let {
    application: n,
    activityInstance: v,
    channelId: O,
    guildId: x
  } = e, [L, D] = a.useState(!1), {
    analyticsLocations: P
  } = (0, m.default)(_.default.ACTIVITY_INSTANCE_EMBED), y = (0, r.useAnalyticsContext)(), U = (0, f.default)(), j = (0, l.useStateFromStores)([p.default], () => p.default.getChannel(O)), b = (null == j ? void 0 : null === (t = j.isThread) || void 0 === t ? void 0 : t.call(j)) ? null == j ? void 0 : j.parent_id : O, B = (0, l.useStateFromStores)([I.default], () => I.default.getId()), {
    embeddedActivity: G,
    currentEmbeddedActivity: F
  } = (0, l.useStateFromStoresObject)([o.default], () => ({
    embeddedActivity: o.default.getEmbeddedActivitiesForChannel(null != b ? b : "").find(e => e.launchId === v.id),
    currentEmbeddedActivity: o.default.getCurrentEmbeddedActivity()
  })), k = (0, l.useStateFromStoresArray)([N.default], () => {
    var e;
    return Array.from(null !== (e = null == G ? void 0 : G.userIds) && void 0 !== e ? e : []).map(e => N.default.getUser(e)).filter(C.isNotNullish)
  }), w = (0, l.useStateFromStores)([h.default], () => {
    var e;
    let t = null == G ? void 0 : G.userIds.values().next().value;
    return null == t ? null : null === (e = h.default.findActivity(t, e => e.application_id === n.id)) || void 0 === e ? void 0 : e.details
  }), H = a.useMemo(() => {
    let e = new T.default(n);
    return null == e.embeddedActivityConfig && (e.embeddedActivityConfig = g.DEFAULT_EMBEDDED_ACTIVITY_CONFIG), e
  }, [n]), V = (0, c.useEmbeddedActivityJoinability)({
    userId: B,
    channelId: O,
    application: H
  }), Y = null == G, K = (0, A.useJoinOrStartButtonState)({
    embeddedActivity: G,
    joinability: V,
    currentEmbeddedActivity: F,
    channel: j
  }), W = async () => {
    D(!0);
    try {
      Y ? await (0, d.default)({
        targetApplicationId: n.id,
        currentEmbeddedApplication: U,
        channelId: O,
        guildId: x,
        locationObject: y.location,
        embeddedActivitiesManager: E.default,
        analyticsLocations: P
      }) : await (0, u.default)({
        applicationId: G.applicationId,
        currentEmbeddedApplication: U,
        activityChannelId: O,
        locationObject: y.location,
        embeddedActivitiesManager: E.default,
        analyticsLocations: P
      })
    } finally {
      D(!1)
    }
  };
  return (0, s.jsx)("div", {
    className: R.container,
    children: (0, s.jsxs)("div", {
      className: R.contentContainer,
      children: [(0, s.jsx)("div", {
        className: R.headerContainer,
        children: Y ? (0, s.jsx)("div", {
          className: R.__invalid_endedNote,
          children: (0, s.jsx)(i.Text, {
            variant: "text-md/medium",
            children: M.default.Messages.EMBEDDED_ACTIVITIES_INSTANCE_EMBED_ENDED
          })
        }) : (0, s.jsx)(i.Text, {
          variant: "text-md/medium",
          lineClamp: 1,
          color: "text-normal",
          children: null != w ? w : M.default.Messages.EMBEDDED_ACTIVITIES_INSTANCE_EMBED_NO_PRESENCE
        })
      }), (0, s.jsxs)("div", {
        className: R.footerContainer,
        children: [(0, s.jsx)(i.Tooltip, {
          text: K.tooltip,
          children: e => {
            let {
              onClick: t,
              ...n
            } = e;
            return (0, a.createElement)(i.Button, {
              ...n,
              key: "".concat(K.isJoinAction),
              onClick: () => {
                W(), null == t || t()
              },
              color: K.isJoinAction ? i.ButtonColors.GREEN : i.ButtonColors.PRIMARY,
              submitting: L,
              disabled: K.disabled
            }, K.text)
          }
        }), !Y && (0, s.jsx)(S.default, {
          guildId: x,
          users: k,
          max: 4,
          size: S.Sizes.SIZE_32
        })]
      })]
    })
  })
}