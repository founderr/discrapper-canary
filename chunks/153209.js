n.d(t, {
  Z: function() {
    return A
  }
}), n(47120);
var s = n(735250),
  i = n(470079),
  l = n(442837),
  a = n(524437),
  r = n(481060),
  o = n(140155),
  c = n(497089),
  u = n(178480),
  d = n(11799),
  E = n(632523),
  _ = n(695346),
  I = n(626135),
  T = n(709054),
  N = n(791914),
  m = n(981631),
  h = n(689938),
  C = n(297783);

function S(e) {
  let {
    onClick: t
  } = e;
  return (0, s.jsx)(r.CircleIconButton, {
    tooltip: h.Z.Messages.MARK_ALL_AS_READ,
    color: r.CircleIconButtonColors.SECONDARY,
    icon: (0, s.jsx)(r.DoubleCheckmarkLargeIcon, {
      size: "xs",
      color: "currentColor"
    }),
    onClick: t
  })
}

function A(e) {
  let {
    setTab: t,
    badgeState: n,
    closePopout: r
  } = e, {
    initialized: h,
    items: A,
    loading: p,
    loadMore: g
  } = (0, d.y6)(), f = (0, l.e7)([o.Z], () => o.Z.localItems), O = i.useMemo(() => [...[...A, ...f].sort((e, t) => -1 * T.default.compare(e.id, t.id))], [A, f]), R = A.length > 0 ? A[0] : null, M = _.d$.useSetting(), x = i.useMemo(() => {
    if (null != R && 0 >= T.default.compare(R.id, M)) return !1;
    for (let e of O) {
      if (0 >= T.default.compare(e.id, M)) break;
      if (!(0, u.r)(e, M)) return !0
    }
    return !1
  }, [R, M, O]);
  return (0, s.jsxs)("div", {
    className: C.container,
    children: [(0, s.jsx)(N.Z, {
      tab: a.X.FOR_YOU,
      setTab: t,
      badgeState: n,
      closePopout: r,
      children: x ? (0, s.jsx)(S, {
        onClick: () => {
          null != R && (_.d$.updateSetting(R.id), I.default.track(m.rMx.NOTIFICATION_CENTER_ACTION, {
            action_type: c.ud.MARK_ALL_READ
          }))
        }
      }) : null
    }), (0, s.jsx)(E.Z, {
      initialized: h,
      items: O,
      loading: p,
      loadMore: g
    })]
  })
}