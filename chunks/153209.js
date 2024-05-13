"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("442837"),
  i = n("524437"),
  r = n("140155"),
  o = n("497089"),
  u = n("178480"),
  d = n("11799"),
  c = n("632523"),
  f = n("695346"),
  h = n("836946"),
  E = n("568570"),
  m = n("626135"),
  p = n("709054"),
  g = n("791914"),
  S = n("981631"),
  N = n("689938"),
  _ = n("269939");

function I(e) {
  let {
    onClick: t
  } = e;
  return (0, a.jsx)(h.default, {
    tooltip: N.default.Messages.MARK_ALL_AS_READ,
    color: h.CircleIconButtonColors.SECONDARY,
    icon: (0, a.jsx)(E.default, {}),
    onClick: t
  })
}

function T(e) {
  let {
    setTab: t,
    badgeState: n,
    closePopout: h
  } = e, {
    initialized: E,
    items: N,
    loading: T,
    loadMore: C
  } = (0, d.useDesktopNotificationCenterItemsLoader)(), A = (0, s.useStateFromStores)([r.default], () => r.default.localItems), v = l.useMemo(() => [...[...N, ...A].sort((e, t) => -1 * p.default.compare(e.id, t.id))], [N, A]), x = N.length > 0 ? N[0] : null, R = f.NotificationCenterAckedBeforeId.useSetting(), M = l.useMemo(() => {
    if (null != x && 0 >= p.default.compare(x.id, R)) return !1;
    for (let e of v) {
      if (0 >= p.default.compare(e.id, R)) break;
      if (!(0, u.isRemoteAcked)(e, R)) return !0
    }
    return !1
  }, [x, R, v]);
  return (0, a.jsxs)("div", {
    className: _.container,
    children: [(0, a.jsx)(g.default, {
      tab: i.InboxTab.FOR_YOU,
      setTab: t,
      badgeState: n,
      closePopout: h,
      children: M ? (0, a.jsx)(I, {
        onClick: () => {
          null != x && (f.NotificationCenterAckedBeforeId.updateSetting(x.id), m.default.track(S.AnalyticEvents.NOTIFICATION_CENTER_ACTION, {
            action_type: o.NotificationCenterActionTypes.MARK_ALL_READ
          }))
        }
      }) : null
    }), (0, a.jsx)(c.default, {
      initialized: E,
      items: v,
      loading: T,
      loadMore: C
    })]
  })
}