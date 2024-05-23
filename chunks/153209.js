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
  r = n("140155"),
  o = n("497089"),
  u = n("178480"),
  d = n("11799"),
  c = n("632523"),
  f = n("695346"),
  E = n("836946"),
  _ = n("568570"),
  m = n("626135"),
  T = n("709054"),
  I = n("791914"),
  p = n("981631"),
  h = n("689938"),
  N = n("269939");

function S(e) {
  let {
    onClick: t
  } = e;
  return (0, s.jsx)(E.default, {
    tooltip: h.default.Messages.MARK_ALL_AS_READ,
    color: E.CircleIconButtonColors.SECONDARY,
    icon: (0, s.jsx)(_.default, {}),
    onClick: t
  })
}

function C(e) {
  let {
    setTab: t,
    badgeState: n,
    closePopout: E
  } = e, {
    initialized: _,
    items: h,
    loading: C,
    loadMore: g
  } = (0, d.useDesktopNotificationCenterItemsLoader)(), A = (0, l.useStateFromStores)([r.default], () => r.default.localItems), M = a.useMemo(() => [...[...h, ...A].sort((e, t) => -1 * T.default.compare(e.id, t.id))], [h, A]), R = h.length > 0 ? h[0] : null, v = f.NotificationCenterAckedBeforeId.useSetting(), O = a.useMemo(() => {
    if (null != R && 0 >= T.default.compare(R.id, v)) return !1;
    for (let e of M) {
      if (0 >= T.default.compare(e.id, v)) break;
      if (!(0, u.isRemoteAcked)(e, v)) return !0
    }
    return !1
  }, [R, v, M]);
  return (0, s.jsxs)("div", {
    className: N.container,
    children: [(0, s.jsx)(I.default, {
      tab: i.InboxTab.FOR_YOU,
      setTab: t,
      badgeState: n,
      closePopout: E,
      children: O ? (0, s.jsx)(S, {
        onClick: () => {
          null != R && (f.NotificationCenterAckedBeforeId.updateSetting(R.id), m.default.track(p.AnalyticEvents.NOTIFICATION_CENTER_ACTION, {
            action_type: o.NotificationCenterActionTypes.MARK_ALL_READ
          }))
        }
      }) : null
    }), (0, s.jsx)(c.default, {
      initialized: _,
      items: M,
      loading: C,
      loadMore: g
    })]
  })
}