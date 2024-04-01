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
  S = n("791914"),
  g = n("981631"),
  _ = n("689938"),
  N = n("741770");

function I(e) {
  let {
    onClick: t
  } = e;
  return (0, a.jsx)(h.default, {
    tooltip: _.default.Messages.MARK_ALL_AS_READ,
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
    items: _,
    loading: T,
    loadMore: C
  } = (0, d.useDesktopNotificationCenterItemsLoader)(), A = (0, s.useStateFromStores)([r.default], () => r.default.localItems), v = l.useMemo(() => [...[..._, ...A].sort((e, t) => -1 * p.default.compare(e.id, t.id))], [_, A]), R = _.length > 0 ? _[0] : null, x = f.NotificationCenterAckedBeforeId.useSetting(), M = l.useMemo(() => {
    if (null != R && 0 >= p.default.compare(R.id, x)) return !1;
    for (let e of v) {
      if (0 >= p.default.compare(e.id, x)) break;
      if (!(0, u.isRemoteAcked)(e, x)) return !0
    }
    return !1
  }, [R, x, v]);
  return (0, a.jsxs)("div", {
    className: N.container,
    children: [(0, a.jsx)(S.default, {
      tab: i.InboxTab.FOR_YOU,
      setTab: t,
      badgeState: n,
      closePopout: h,
      children: M ? (0, a.jsx)(I, {
        onClick: () => {
          null != R && (f.NotificationCenterAckedBeforeId.updateSetting(R.id), m.default.track(g.AnalyticEvents.NOTIFICATION_CENTER_ACTION, {
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