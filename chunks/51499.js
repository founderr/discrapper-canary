l.d(n, {
  Z: function() {
    return d
  }
}), l(390547);
var r = l(735250);
l(470079);
var s = l(120356),
  t = l.n(s),
  o = l(481060),
  a = l(598),
  i = l(409813),
  c = l(701167);

function d(e) {
  let {
    className: n,
    isEligibleForTrial: l = !1
  } = e, {
    step: s,
    breadcrumbs: d,
    startedPaymentFlowWithPaymentSourcesRef: u
  } = (0, a.usePaymentContext)();
  if (null == d || 0 === d.length) return null;
  let m = d.flatMap(e => {
    let n = e.useBreadcrumbLabel(l);
    return null != n ? {
      id: e.id,
      label: n
    } : []
  });
  return 0 === m.length ? null : (m = m.filter(e => {
    let n = e.id !== i.h8.ADD_PAYMENT_STEPS,
      r = e.id === i.h8.ADD_PAYMENT_STEPS && !u.current;
    return !l || l && (n || r)
  }), (0, r.jsx)("div", {
    className: t()("breadcrumb", c.wrapper, n),
    children: (0, r.jsx)(o.Breadcrumbs, {
      activeId: s,
      breadcrumbs: m
    })
  }))
}