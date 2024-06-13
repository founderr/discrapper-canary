"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
}), n("47120");
var s = n("735250"),
  a = n("470079"),
  l = n("442837"),
  i = n("524437"),
  r = n("481060"),
  o = n("140155"),
  u = n("497089"),
  d = n("178480"),
  c = n("11799"),
  f = n("632523"),
  E = n("695346"),
  _ = n("568570"),
  T = n("626135"),
  m = n("709054"),
  I = n("791914"),
  N = n("981631"),
  p = n("689938"),
  h = n("269939");

function S(e) {
  let {
    onClick: t
  } = e;
  return (0, s.jsx)(r.CircleIconButton, {
    tooltip: p.default.Messages.MARK_ALL_AS_READ,
    color: r.CircleIconButtonColors.SECONDARY,
    icon: (0, s.jsx)(_.default, {}),
    onClick: t
  })
}

function C(e) {
  let {
    setTab: t,
    badgeState: n,
    closePopout: r
  } = e, {
    initialized: _,
    items: p,
    loading: C,
    loadMore: A
  } = (0, c.useDesktopNotificationCenterItemsLoader)(), g = (0, l.useStateFromStores)([o.default], () => o.default.localItems), M = a.useMemo(() => [...[...p, ...g].sort((e, t) => -1 * m.default.compare(e.id, t.id))], [p, g]), R = p.length > 0 ? p[0] : null, O = E.NotificationCenterAckedBeforeId.useSetting(), v = a.useMemo(() => {
    if (null != R && 0 >= m.default.compare(R.id, O)) return !1;
    for (let e of M) {
      if (0 >= m.default.compare(e.id, O)) break;
      if (!(0, d.isRemoteAcked)(e, O)) return !0
    }
    return !1
  }, [R, O, M]);
  return (0, s.jsxs)("div", {
    className: h.container,
    children: [(0, s.jsx)(I.default, {
      tab: i.InboxTab.FOR_YOU,
      setTab: t,
      badgeState: n,
      closePopout: r,
      children: v ? (0, s.jsx)(S, {
        onClick: () => {
          null != R && (E.NotificationCenterAckedBeforeId.updateSetting(R.id), T.default.track(N.AnalyticEvents.NOTIFICATION_CENTER_ACTION, {
            action_type: u.NotificationCenterActionTypes.MARK_ALL_READ
          }))
        }
      }) : null
    }), (0, s.jsx)(f.default, {
      initialized: _,
      items: M,
      loading: C,
      loadMore: A
    })]
  })
}