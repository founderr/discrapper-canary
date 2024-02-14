"use strict";
n.r(t), n.d(t, {
  default: function() {
    return R
  }
}), n("222007");
var s = n("37983"),
  l = n("884691"),
  a = n("446674"),
  i = n("77078"),
  r = n("997289"),
  o = n("550766"),
  u = n("191225"),
  d = n("602718"),
  c = n("706508"),
  E = n("986214"),
  f = n("501260"),
  _ = n("698372"),
  T = n("141962"),
  I = n("685665"),
  m = n("653047"),
  N = n("271938"),
  p = n("824563"),
  S = n("697218"),
  A = n("811305"),
  C = n("449008"),
  h = n("29883"),
  g = n("954016"),
  M = n("782340"),
  O = n("75644");

function R(e) {
  let {
    application: t,
    activityInstance: n,
    channelId: R,
    guildId: L
  } = e, [v, P] = l.useState(!1), {
    analyticsLocations: D
  } = (0, I.default)(), x = (0, r.useAnalyticsContext)(), y = (0, _.default)(), U = (0, a.useStateFromStores)([N.default], () => N.default.getId()), {
    embeddedActivity: j,
    currentEmbeddedActivity: b
  } = (0, a.useStateFromStoresObject)([u.default], () => ({
    embeddedActivity: u.default.getEmbeddedActivitiesForChannel(R).find(e => e.instanceId === n.id),
    currentEmbeddedActivity: u.default.getCurrentEmbeddedActivity()
  })), G = (0, a.useStateFromStoresArray)([S.default], () => {
    var e;
    return Array.from(null !== (e = null == j ? void 0 : j.userIds) && void 0 !== e ? e : []).map(e => S.default.getUser(e)).filter(C.isNotNullish)
  }), B = (0, a.useStateFromStores)([p.default], () => {
    var e;
    let n = null == j ? void 0 : j.userIds.values().next().value;
    return null == n ? null : null === (e = p.default.findActivity(n, e => e.application_id === t.id)) || void 0 === e ? void 0 : e.details
  }), k = l.useMemo(() => {
    let e = new m.default(t);
    return null == e.embeddedActivityConfig && (e.embeddedActivityConfig = g.DEFAULT_EMBEDDED_ACTIVITY_CONFIG), e
  }, [t]), F = (0, f.useEmbeddedActivityJoinability)({
    userId: U,
    channelId: R,
    application: k
  }), w = null == j, H = (0, h.useJoinOrStartButtonState)({
    embeddedActivity: j,
    joinability: F,
    currentEmbeddedActivity: b
  }), V = async () => {
    P(!0);
    try {
      if (w) {
        let {
          activityConfigs: e,
          applications: n
        } = await (0, o.fetchShelf)({
          guildId: L
        }), s = (0, d.default)({
          applicationId: t.id,
          activityConfigs: e,
          applications: n
        });
        await (0, E.default)({
          activityItem: s,
          currentActivity: y,
          channelId: R,
          guildId: L,
          locationObject: x.location,
          embeddedActivitiesManager: T.default,
          analyticsLocations: D
        })
      } else await (0, c.default)({
        applicationId: j.applicationId,
        currentEmbeddedApplication: y,
        activityChannelId: R,
        locationObject: x.location,
        embeddedActivitiesManager: T.default,
        analyticsLocations: D
      })
    } finally {
      P(!1)
    }
  };
  return (0, s.jsx)("div", {
    className: O.container,
    children: (0, s.jsxs)("div", {
      className: O.contentContainer,
      children: [(0, s.jsx)("div", {
        className: O.headerContainer,
        children: w ? (0, s.jsx)("div", {
          className: O.endedNote,
          children: (0, s.jsx)(i.Text, {
            variant: "text-md/medium",
            children: M.default.Messages.EMBEDDED_ACTIVITIES_INSTANCE_EMBED_ENDED
          })
        }) : (0, s.jsx)(i.Text, {
          variant: "text-md/medium",
          lineClamp: 1,
          color: "text-normal",
          children: null != B ? B : M.default.Messages.EMBEDDED_ACTIVITIES_INSTANCE_EMBED_NO_PRESENCE
        })
      }), (0, s.jsxs)("div", {
        className: O.footerContainer,
        children: [(0, s.jsx)(i.Tooltip, {
          text: H.tooltip,
          children: e => {
            let {
              onClick: t,
              ...n
            } = e;
            return (0, l.createElement)(i.Button, {
              ...n,
              key: "".concat(H.isJoinAction),
              onClick: () => {
                V(), null == t || t()
              },
              color: H.isJoinAction ? i.ButtonColors.GREEN : i.ButtonColors.PRIMARY,
              submitting: v,
              disabled: H.disabled
            }, H.text)
          }
        }), !w && (0, s.jsx)(A.default, {
          guildId: L,
          users: G,
          max: 4,
          size: A.Sizes.SIZE_32
        })]
      })]
    })
  })
}